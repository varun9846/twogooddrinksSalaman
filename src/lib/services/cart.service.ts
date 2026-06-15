import { OrderStatus, type Prisma } from "@prisma/client";
import { emptyCart, mapOrderItemsToCart } from "@/lib/mappers/cart.mapper";
import { prisma } from "@/lib/prisma";
import { clampQuantity, roundCurrency, toNumber } from "@/lib/utils/numbers";
import type { Cart } from "@/types/cart";

type TransactionClient = Prisma.TransactionClient;

async function getPendingOrder(userId: string) {
  return prisma.order.findFirst({
    where: {
      userId,
      status: OrderStatus.pending,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function recalculateOrderTotal(
  tx: TransactionClient,
  orderId: string,
) {
  const items = await tx.orderItem.findMany({
    where: { orderId },
    include: {
      product: {
        select: { price: true },
      },
    },
  });

  const total = items.reduce(
    (sum, item) => sum + item.quantity * toNumber(item.product.price),
    0,
  );

  await tx.order.update({
    where: { id: orderId },
    data: { total: roundCurrency(total) },
  });
}

async function fetchCartItems(orderId: string) {
  return prisma.orderItem.findMany({
    where: { orderId },
    include: { product: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getCart(userId: string): Promise<Cart> {
  const order = await getPendingOrder(userId);

  if (!order) {
    return emptyCart();
  }

  const items = await fetchCartItems(order.id);
  return mapOrderItemsToCart(order.id, items, toNumber(order.total));
}

export async function addToCart(
  userId: string,
  productId: string,
  quantity = 1,
): Promise<Cart> {
  const safeQuantity = clampQuantity(quantity);

  await prisma.$transaction(async (tx) => {
    const product = await tx.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new Error("Product not found.");
    }

    if (product.stock < safeQuantity) {
      throw new Error("Not enough stock available.");
    }

    let order = await tx.order.findFirst({
      where: {
        userId,
        status: OrderStatus.pending,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!order) {
      order = await tx.order.create({
        data: {
          userId,
          total: 0,
          status: OrderStatus.pending,
        },
      });
    }

    const existingItem = await tx.orderItem.findUnique({
      where: {
        orderId_productId: {
          orderId: order.id,
          productId,
        },
      },
    });

    const nextQuantity = (existingItem?.quantity ?? 0) + safeQuantity;

    if (nextQuantity > product.stock) {
      throw new Error("Selected quantity exceeds available stock.");
    }

    if (existingItem) {
      await tx.orderItem.update({
        where: { id: existingItem.id },
        data: { quantity: nextQuantity },
      });
    } else {
      await tx.orderItem.create({
        data: {
          orderId: order.id,
          productId,
          quantity: safeQuantity,
        },
      });
    }

    await recalculateOrderTotal(tx, order.id);
  });

  return getCart(userId);
}

export async function updateCartItem(
  userId: string,
  itemId: string,
  quantity: number,
): Promise<Cart> {
  const safeQuantity = Number(quantity || 0);
  const order = await getPendingOrder(userId);

  if (!order) {
    throw new Error("Cart not found.");
  }

  const item = await prisma.orderItem.findFirst({
    where: {
      id: itemId,
      orderId: order.id,
    },
    include: {
      product: {
        select: { stock: true },
      },
    },
  });

  if (!item) {
    throw new Error("Cart item not found.");
  }

  if (safeQuantity <= 0) {
    await prisma.orderItem.delete({
      where: { id: itemId },
    });
    await recalculateOrderTotal(prisma, order.id);
    return getCart(userId);
  }

  if (safeQuantity > item.product.stock) {
    throw new Error("Selected quantity exceeds available stock.");
  }

  await prisma.orderItem.update({
    where: { id: itemId },
    data: { quantity: safeQuantity },
  });

  await recalculateOrderTotal(prisma, order.id);
  return getCart(userId);
}

export async function removeCartItem(
  userId: string,
  itemId: string,
): Promise<Cart> {
  const order = await getPendingOrder(userId);

  if (!order) {
    return getCart(userId);
  }

  await prisma.orderItem.deleteMany({
    where: {
      id: itemId,
      orderId: order.id,
    },
  });

  await recalculateOrderTotal(prisma, order.id);
  return getCart(userId);
}

export const cartService = {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
};

export default cartService;

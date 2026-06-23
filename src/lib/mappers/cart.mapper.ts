import type { Badge, Category, OrderItem, Product, Tag } from "@prisma/client";
import type { Cart, CartItem } from "@/types/cart";
import { getLineTotal } from "@/lib/mappers/product.mapper";
import { roundCurrency, toNumber } from "@/lib/utils/numbers";

type OrderItemWithProduct = OrderItem & {
  product: Product & {
    category?: Category | null;
    badge?: Badge | null;
    tag?: Tag | null;
  };
};

export function mapOrderItemsToCart(
  orderId: string | null,
  items: OrderItemWithProduct[],
  orderTotal?: number,
): Cart {
  const cartItems: CartItem[] = items.map((item) => ({
    id: item.id,
    order_id: item.orderId,
    product_id: item.productId,
    quantity: item.quantity,
    line_total: getLineTotal(item.quantity, item.product.price),
    product: {
      id: item.product.id,
      product_name: item.product.productName,
      product_description: item.product.productDescription,
      product_subdescription: item.product.productSubDescription,
      product_details: item.product.productDetails,
      product_category: item.product.category?.name ?? item.product.productCategory,
      price: toNumber(item.product.price),
      stock: item.product.stock,
      image: item.product.image,
      badge: item.product.badge?.name ?? null,
      tag: item.product.tag?.name ?? null,
    },
  }));

  const calculatedTotal =
    orderTotal ??
    cartItems.reduce((sum, item) => sum + item.line_total, 0);

  return {
    order_id: orderId,
    total: roundCurrency(calculatedTotal),
    item_count: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    items: cartItems,
  };
}

export function emptyCart(): Cart {
  return mapOrderItemsToCart(null, [], 0);
}

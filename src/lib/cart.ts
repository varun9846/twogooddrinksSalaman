import { pool, query } from "@/lib/db";
import type { Cart, CartItem } from "@/types/cart";

interface OrderRow {
  id: string;
  user_id: string;
  total: string;
  status: "paid" | "pending" | "failed";
}

interface ProductRow {
  id: string;
  price: string;
  stock: number;
}

interface CartItemRow {
  item_id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  line_total: string;
  product_name: string;
  product_description: string;
  product_category: string;
  price: string;
  stock: number;
  image: string;
  badge: string | null;
  tag: string | null;
}

function toNumber(value: string | number | null | undefined) {
  return Number(value || 0);
}

function mapRowsToCart(orderId: string | null, rows: CartItemRow[], total?: number): Cart {
  const items: CartItem[] = rows.map((row) => ({
    id: row.item_id,
    order_id: row.order_id,
    product_id: row.product_id,
    quantity: row.quantity,
    line_total: toNumber(row.line_total),
    product: {
      id: row.product_id,
      product_name: row.product_name,
      product_description: row.product_description,
      product_category: row.product_category,
      price: toNumber(row.price),
      stock: row.stock,
      image: row.image,
      badge: row.badge,
      tag: row.tag,
    },
  }));

  const calculatedTotal = total ?? items.reduce((sum, item) => sum + item.line_total, 0);

  return {
    order_id: orderId,
    total: Number(calculatedTotal.toFixed(2)),
    item_count: items.reduce((sum, item) => sum + item.quantity, 0),
    items,
  };
}

export async function getPendingOrder(userId: string) {
  const result = await query<OrderRow>(
    `SELECT id, user_id, total, status
     FROM orders
     WHERE user_id = $1 AND status = 'pending'
     ORDER BY created_at DESC
     LIMIT 1`,
    [userId],
  );

  return result.rows[0] || null;
}

async function recalculateOrderTotal(orderId: string) {
  await query(
    `UPDATE orders
     SET total = COALESCE((
       SELECT SUM(order_items.quantity * products.price)
       FROM order_items
       INNER JOIN products ON products.id = order_items.product_id
       WHERE order_items.order_id = $1
     ), 0),
     updated_at = NOW()
     WHERE id = $1`,
    [orderId],
  );
}

export async function getCart(userId: string): Promise<Cart> {
  const order = await getPendingOrder(userId);

  if (!order) {
    return mapRowsToCart(null, [], 0);
  }

  const result = await query<CartItemRow>(
    `SELECT
       order_items.id AS item_id,
       order_items.order_id,
       order_items.product_id,
       order_items.quantity,
       (order_items.quantity * products.price) AS line_total,
       products.product_name,
       products.product_description,
       products.product_category,
       products.price,
       products.stock,
       products.image,
       products.badge,
       products.tag
     FROM order_items
     INNER JOIN products ON products.id = order_items.product_id
     WHERE order_items.order_id = $1
     ORDER BY order_items.created_at DESC`,
    [order.id],
  );

  return mapRowsToCart(order.id, result.rows, toNumber(order.total));
}

export async function addToCart(userId: string, productId: string, quantity = 1) {
  const safeQuantity = Math.max(1, Number(quantity || 1));
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const productResult = await client.query<ProductRow>(
      `SELECT id, price, stock
       FROM products
       WHERE id = $1
       FOR UPDATE`,
      [productId],
    );

    const product = productResult.rows[0];

    if (!product) {
      throw new Error("Product not found.");
    }

    if (product.stock < safeQuantity) {
      throw new Error("Not enough stock available.");
    }

    let orderResult = await client.query<OrderRow>(
      `SELECT id, user_id, total, status
       FROM orders
       WHERE user_id = $1 AND status = 'pending'
       ORDER BY created_at DESC
       LIMIT 1
       FOR UPDATE`,
      [userId],
    );

    let order = orderResult.rows[0];

    if (!order) {
      orderResult = await client.query<OrderRow>(
        `INSERT INTO orders (user_id, total, status)
         VALUES ($1, 0, 'pending')
         RETURNING id, user_id, total, status`,
        [userId],
      );
      order = orderResult.rows[0];
    }

    const itemResult = await client.query<{ id: string; quantity: number }>(
      `SELECT id, quantity
       FROM order_items
       WHERE order_id = $1 AND product_id = $2
       LIMIT 1
       FOR UPDATE`,
      [order.id, productId],
    );

    const existingItem = itemResult.rows[0];
    const nextQuantity = (existingItem?.quantity || 0) + safeQuantity;

    if (nextQuantity > product.stock) {
      throw new Error("Selected quantity exceeds available stock.");
    }

    if (existingItem) {
      await client.query(
        `UPDATE order_items
         SET quantity = $1, updated_at = NOW()
         WHERE id = $2`,
        [nextQuantity, existingItem.id],
      );
    } else {
      await client.query(
        `INSERT INTO order_items (order_id, product_id, quantity)
         VALUES ($1, $2, $3)`,
        [order.id, productId, safeQuantity],
      );
    }

    await client.query(
      `UPDATE orders
       SET total = COALESCE((
         SELECT SUM(order_items.quantity * products.price)
         FROM order_items
         INNER JOIN products ON products.id = order_items.product_id
         WHERE order_items.order_id = $1
       ), 0),
       updated_at = NOW()
       WHERE id = $1`,
      [order.id],
    );

    await client.query("COMMIT");
    return getCart(userId);
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

export async function updateCartItem(userId: string, itemId: string, quantity: number) {
  const safeQuantity = Number(quantity || 0);
  const order = await getPendingOrder(userId);

  if (!order) {
    throw new Error("Cart not found.");
  }

  const itemResult = await query<{ id: string; product_id: string; stock: number }>(
    `SELECT order_items.id, order_items.product_id, products.stock
     FROM order_items
     INNER JOIN products ON products.id = order_items.product_id
     WHERE order_items.id = $1 AND order_items.order_id = $2
     LIMIT 1`,
    [itemId, order.id],
  );

  const item = itemResult.rows[0];

  if (!item) {
    throw new Error("Cart item not found.");
  }

  if (safeQuantity <= 0) {
    await query(`DELETE FROM order_items WHERE id = $1 AND order_id = $2`, [itemId, order.id]);
    await recalculateOrderTotal(order.id);
    return getCart(userId);
  }

  if (safeQuantity > item.stock) {
    throw new Error("Selected quantity exceeds available stock.");
  }

  await query(
    `UPDATE order_items
     SET quantity = $1, updated_at = NOW()
     WHERE id = $2 AND order_id = $3`,
    [safeQuantity, itemId, order.id],
  );

  await recalculateOrderTotal(order.id);
  return getCart(userId);
}

export async function removeCartItem(userId: string, itemId: string) {
  const order = await getPendingOrder(userId);

  if (!order) {
    return getCart(userId);
  }

  await query(`DELETE FROM order_items WHERE id = $1 AND order_id = $2`, [itemId, order.id]);
  await recalculateOrderTotal(order.id);
  return getCart(userId);
}

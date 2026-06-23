import { z } from "zod";

export const AddToCartRequestSchema = z.object({
  productId: z.string().trim().min(1, "Product id is required."),
  quantity: z.coerce
    .number()
    .int("Quantity must be a whole number.")
    .min(1, "Quantity must be at least 1.")
    .max(99, "Quantity cannot be more than 99.")
    .default(1),
});

export const UpdateCartItemRequestSchema = z.object({
  quantity: z.coerce
    .number()
    .int("Quantity must be a whole number.")
    .min(0, "Quantity cannot be negative.")
    .max(99, "Quantity cannot be more than 99."),
});

export const CartItemParamsSchema = z.object({
  itemId: z.string().trim().min(1, "Cart item id is required."),
});

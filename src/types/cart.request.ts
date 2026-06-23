import type { z } from "zod";
import type {
  AddToCartRequestSchema,
  CartItemParamsSchema,
  UpdateCartItemRequestSchema,
} from "@/lib/validators/cart.validator";

export type AddToCartRequestDto = z.infer<typeof AddToCartRequestSchema>;
export type UpdateCartItemRequestDto = z.infer<typeof UpdateCartItemRequestSchema>;
export type CartItemParamsDto = z.infer<typeof CartItemParamsSchema>;

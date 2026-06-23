import type { ApiResponse } from "@/types/api";
import type { Cart } from "@/types/cart";

export type CartPayload = {
  cart: Cart | null;
};

export type CartApiResponse = ApiResponse<CartPayload> & CartPayload;

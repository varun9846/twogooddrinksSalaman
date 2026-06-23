import apiClient from "@/lib/apiClient";
import type { AddToCartRequestDto, UpdateCartItemRequestDto } from "@/types/cart.request";
import type { CartApiResponse } from "@/types/cart.response";

export const cartApi = {
  fetchCart: async () => {
    const response = await apiClient.get<CartApiResponse>("/api/cart", {
      headers: { "Cache-Control": "no-store" },
    });
    return response.data;
  },

  addToCart: async (payload: AddToCartRequestDto) => {
    const response = await apiClient.post<CartApiResponse>("/api/cart/add", payload);
    return response.data;
  },

  updateItem: async (itemId: string, payload: UpdateCartItemRequestDto) => {
    const response = await apiClient.patch<CartApiResponse>(
      `/api/cart/items/${itemId}`,
      payload,
    );
    return response.data;
  },

  removeItem: async (itemId: string) => {
    const response = await apiClient.delete<CartApiResponse>(
      `/api/cart/items/${itemId}`,
    );
    return response.data;
  },
};

export default cartApi;

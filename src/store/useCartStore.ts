import { create } from "zustand";
import type { Cart } from "@/types/cart";
import apiClient from "@/lib/apiClient";

interface CartState {
  cart: Cart | null;
  isLoading: boolean;
  error: string | null;
  fetchCart: () => Promise<Cart | null>;
  addToCart: (productId: string, quantity?: number) => Promise<Cart | null>;
  updateItem: (itemId: string, quantity: number) => Promise<Cart | null>;
  removeItem: (itemId: string) => Promise<Cart | null>;
  clearLocalCart: () => void;
}

type CartResponse = {
  message?: string;
  cart?: Cart | null;
};

async function parseResponse(response: { data?: CartResponse }): Promise<CartResponse> {
  const data = response?.data ?? {};

  if (data.message && !data.cart) {
    throw new Error(data.message);
  }

  return data;
}

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  isLoading: false,
  error: null,

  fetchCart: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await apiClient.get("/api/cart", { headers: { "Cache-Control": "no-store" } });
      const data = await parseResponse(response);
      const cart = data.cart ?? null;
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load cart.";
      set({ error: message, isLoading: false });
      return null;
    }
  },

  addToCart: async (productId, quantity = 1) => {
    set({ isLoading: true, error: null });

    try {
      const response = await apiClient.post("/api/cart/add", { productId, quantity });
      const data = await parseResponse(response);
      const cart = data.cart ?? null;
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to add product.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  updateItem: async (itemId, quantity) => {
    set({ isLoading: true, error: null });

    try {
      const response = await apiClient.patch(`/api/cart/items/${itemId}`, { quantity });
      const data = await parseResponse(response);
      const cart = data.cart ?? null;
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to update item.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  removeItem: async (itemId) => {
    set({ isLoading: true, error: null });

    try {
      const response = await apiClient.delete(`/api/cart/items/${itemId}`);
      const data = await parseResponse(response);
      const cart = data.cart ?? null;
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to remove item.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  clearLocalCart: () => set({ cart: null, error: null, isLoading: false }),
}));

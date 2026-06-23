import { create } from "zustand";
import { cartApi } from "@/lib/api/cart.api";
import type { Cart } from "@/types/cart";
import type { CartApiResponse } from "@/types/cart.response";

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

function extractCart(response: CartApiResponse): Cart | null {
  if (response.error || response.success === false) {
    throw new Error(response.message || "Cart request failed.");
  }

  return response.cart ?? response.data?.cart ?? null;
}

function getClientErrorMessage(error: unknown, fallback: string): string {
  const apiMessage = (error as { response?: { data?: { message?: string } } })
    ?.response?.data?.message;

  if (apiMessage) return apiMessage;
  if (error instanceof Error && error.message) return error.message;
  return fallback;
}

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  isLoading: false,
  error: null,

  fetchCart: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await cartApi.fetchCart();
      const cart = extractCart(response);
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = getClientErrorMessage(error, "Unable to load cart.");
      set({ error: message, isLoading: false });
      return null;
    }
  },

  addToCart: async (productId, quantity = 1) => {
    set({ isLoading: true, error: null });

    try {
      const response = await cartApi.addToCart({ productId, quantity });
      const cart = extractCart(response);
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = getClientErrorMessage(error, "Unable to add product.");
      set({ error: message, isLoading: false });
      throw new Error(message);
    }
  },

  updateItem: async (itemId, quantity) => {
    set({ isLoading: true, error: null });

    try {
      const response = await cartApi.updateItem(itemId, { quantity });
      const cart = extractCart(response);
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = getClientErrorMessage(error, "Unable to update item.");
      set({ error: message, isLoading: false });
      throw new Error(message);
    }
  },

  removeItem: async (itemId) => {
    set({ isLoading: true, error: null });

    try {
      const response = await cartApi.removeItem(itemId);
      const cart = extractCart(response);
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = getClientErrorMessage(error, "Unable to remove item.");
      set({ error: message, isLoading: false });
      throw new Error(message);
    }
  },

  clearLocalCart: () => set({ cart: null, error: null, isLoading: false }),
}));

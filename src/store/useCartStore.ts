import { create } from "zustand";
import type { Cart } from "@/types/cart";

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

async function parseResponse(response: Response) {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
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
      const response = await fetch("/api/cart", { cache: "no-store" });
      const data = await parseResponse(response);
      set({ cart: data.cart, isLoading: false });
      return data.cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load cart.";
      set({ error: message, isLoading: false });
      return null;
    }
  },

  addToCart: async (productId, quantity = 1) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
      });
      const data = await parseResponse(response);
      set({ cart: data.cart, isLoading: false });
      return data.cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to add product.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  updateItem: async (itemId, quantity) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(`/api/cart/items/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      const data = await parseResponse(response);
      set({ cart: data.cart, isLoading: false });
      return data.cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to update item.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  removeItem: async (itemId) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(`/api/cart/items/${itemId}`, {
        method: "DELETE",
      });
      const data = await parseResponse(response);
      set({ cart: data.cart, isLoading: false });
      return data.cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to remove item.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },

  clearLocalCart: () => set({ cart: null, error: null, isLoading: false }),
}));

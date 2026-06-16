"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useUiStore } from "@/store/useUiStore";
import { useCartStore } from "@/store/useCartStore";

export default function CartSidebar() {
  const { status } = useSession();
  const { isCartOpen, toggleCart } = useUiStore();
  const cart = useCartStore((state) => state.cart);
  const isLoading = useCartStore((state) => state.isLoading);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const updateItem = useCartStore((state) => state.updateItem);
  const removeItem = useCartStore((state) => state.removeItem);

  useEffect(() => {
    if (isCartOpen && status === "authenticated") {
      fetchCart();
    }
  }, [isCartOpen, status, fetchCart]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 sidebar-transition ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleCart}
      />

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-2xl sidebar-transition transform ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800">Your Shopping Cart</h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-black text-2xl" aria-label="Close cart">
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {status === "loading" || isLoading ? (
              <p className="text-gray-500 text-center mt-10">Loading cart...</p>
            ) : null}

            {status === "unauthenticated" ? (
              <div className="mt-10 text-center">
                <p className="mb-4 text-gray-500">Please login first to view your cart.</p>
                <Link
                  href="/login?callbackUrl=/shop"
                  onClick={toggleCart}
                  className="inline-flex rounded-md bg-[#0f766e] px-5 py-3 text-sm font-medium text-white hover:bg-[#5a6cb8]"
                >
                  Login
                </Link>
              </div>
            ) : null}

            {status === "authenticated" && !isLoading && (!cart || cart.items.length === 0) ? (
              <p className="text-gray-500 text-center mt-10">Your cart is currently empty.</p>
            ) : null}

            {status === "authenticated" && cart?.items.length ? (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex gap-3 rounded-[14px] border border-[#eee] p-3">
                    <img
                      src={item.product.image}
                      alt={item.product.product_name}
                      className="h-20 w-20 rounded-[10px] bg-[#f8f8fb] object-contain p-2"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-quicksand text-[14px] font-semibold text-[#3d4750]">
                        {item.product.product_name}
                      </h3>
                      <p className="mt-1 font-Poppins text-[13px] text-[#686e7d]">
                        ${item.product.price.toFixed(2)}
                      </p>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="flex items-center rounded-md border border-[#e5e7eb]">
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-[#3d4750]"
                          >
                            -
                          </button>
                          <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-[#3d4750]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Subtotal:</span>
              <span>${(cart?.total || 0).toFixed(2)}</span>
            </div>
            <Link
              href="/my-cart"
              onClick={toggleCart}
              className="block w-full rounded-md bg-[#0f766e] py-3 text-center font-medium text-white transition-colors hover:bg-[#5a6cb8]"
            >
              View My Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

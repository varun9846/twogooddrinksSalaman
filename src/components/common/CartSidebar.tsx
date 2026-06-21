"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useCartStore } from "@/store/useCartStore";
import { useUiStore } from "@/store/useUiStore";

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
        className={`fixed inset-0 z-50 bg-black/50 sidebar-transition ${
          isCartOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={toggleCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full bg-white shadow-2xl sidebar-transition sm:w-[450px] ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#eee] p-[24px]">
            <div>
              <p className="font-Poppins text-[13px] uppercase tracking-[0.18rem] text-[#0f766e]">Cart</p>
              <h2 className="font-quicksand text-[24px] font-bold text-[#3d4750]">Your Cart</h2>
            </div>
            <button
              onClick={toggleCart}
              className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f8f8fb] text-[#3d4750] transition hover:bg-[#0f766e] hover:text-white"
              aria-label="Close cart"
              type="button"
            >
              <i className="ri-close-line text-[22px]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-[24px]">
            {status === "loading" || isLoading ? (
              <div className="flex justify-center py-[45px]"><span className="bb-loader-ring" /></div>
            ) : null}

            {status === "unauthenticated" ? (
              <div className="mt-[40px] text-center">
                <div className="mx-auto mb-[18px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0f766e]/10 text-[#0f766e]">
                  <i className="ri-user-3-line text-[30px]" />
                </div>
                <p className="mb-[18px] font-Poppins text-[14px] leading-[25px] text-[#686e7d]">
                  Please login first to view your cart.
                </p>
                <Link
                  href="/login?callbackUrl=/shop"
                  onClick={toggleCart}
                  className="bb-btn-2"
                >
                  Login
                </Link>
              </div>
            ) : null}

            {status === "authenticated" && !isLoading && (!cart || cart.items.length === 0) ? (
              <div className="mt-[40px] text-center">
                <div className="mx-auto mb-[18px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0f766e]/10 text-[#0f766e]">
                  <i className="ri-shopping-cart-line text-[30px]" />
                </div>
                <p className="font-Poppins text-[14px] leading-[25px] text-[#686e7d]">
                  Your cart is currently empty.
                </p>
              </div>
            ) : null}

            {status === "authenticated" && cart?.items.length ? (
              <div className="space-y-[18px]">
                {cart.items.map((item) => (
                  <div key={item.id} className="relative flex gap-[14px] rounded-[18px] border border-[#eee] bg-[#f8f8fb] p-[14px]">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="absolute right-[-6px] top-[-6px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#3d4750] text-white opacity-70 transition hover:opacity-100"
                      aria-label="Remove item"
                    >
                      <i className="ri-close-line text-[14px]" />
                    </button>
                    <img
                      src={item.product.image}
                      alt={item.product.product_name}
                      className="h-[82px] w-[82px] rounded-[12px] border border-[#eee] bg-white object-contain p-[8px]"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-1 font-Poppins text-[14px] font-medium leading-[20px] tracking-[0.03rem] text-[#3d4750]">
                        {item.product.product_name}
                      </h3>
                      <p className="mt-[5px] font-Poppins text-[13px] text-[#686e7d]">
                        ₹{item.product.price.toFixed(2)} x {item.quantity}
                      </p>
                      <div className="mt-[12px] flex items-center justify-between gap-[10px]">
                        <div className="flex items-center overflow-hidden rounded-[10px] border border-[#eee] bg-white">
                          <button type="button" onClick={() => updateItem(item.id, item.quantity - 1)} className="px-[11px] py-[5px] text-[#3d4750]">-</button>
                          <span className="min-w-[32px] text-center font-Poppins text-[13px]">{item.quantity}</span>
                          <button type="button" onClick={() => updateItem(item.id, item.quantity + 1)} className="px-[11px] py-[5px] text-[#3d4750]">+</button>
                        </div>
                        <p className="font-quicksand text-[15px] font-bold text-[#3d4750]">
                          ₹{item.line_total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="border-t border-[#eee] p-[24px]">
            <div className="mb-[18px] flex justify-between font-quicksand text-[20px] font-bold text-[#3d4750]">
              <span>Subtotal:</span>
              <span>₹{(cart?.total || 0).toFixed(2)}</span>
            </div>
            <Link
              href="/my-cart"
              onClick={toggleCart}
              className="bb-btn-2 w-full"
            >
              View My Cart
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

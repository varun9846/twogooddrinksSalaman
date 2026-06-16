"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function MyCartClient() {
  const cart = useCartStore((state) => state.cart);
  const isLoading = useCartStore((state) => state.isLoading);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const updateItem = useCartStore((state) => state.updateItem);
  const removeItem = useCartStore((state) => state.removeItem);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  if (isLoading && !cart) {
    return (
      <div className="rounded-[20px] bg-white p-[40px] text-center shadow-sm">
        <p className="font-Poppins text-[#686e7d]">Loading your cart...</p>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="rounded-[20px] bg-white p-[40px] text-center shadow-sm">
        <h2 className="font-quicksand text-[28px] font-bold text-[#3d4750]">Your cart is empty</h2>
        <p className="mt-3 font-Poppins text-[#686e7d]">Add wellness products from the shop to continue.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-[12px] bg-[#0f766e] px-[24px] py-[12px] font-Poppins text-[14px] font-semibold text-white hover:bg-[#5a6cb8]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-[24px] lg:grid-cols-[1fr_360px]">
      <div className="rounded-[20px] bg-white p-[24px] shadow-sm">
        <h2 className="mb-[20px] font-quicksand text-[24px] font-bold text-[#3d4750]">Cart Items</h2>
        <div className="space-y-[16px]">
          {cart.items.map((item) => (
            <div key={item.id} className="flex flex-col gap-[16px] rounded-[16px] border border-[#eee] p-[16px] sm:flex-row sm:items-center">
              <img
                src={item.product.image}
                alt={item.product.product_name}
                className="h-[110px] w-[110px] rounded-[12px] bg-[#f8f8fb] object-contain p-[10px]"
              />

              <div className="min-w-0 flex-1">
                <h3 className="font-quicksand text-[17px] font-bold text-[#3d4750]">
                  {item.product.product_name}
                </h3>
                <p className="mt-1 font-Poppins text-[13px] text-[#686e7d]">
                  {item.product.product_category}
                </p>
                <p className="mt-2 font-Poppins text-[14px] font-semibold text-[#3d4750]">
                  ${item.product.price.toFixed(2)} each
                </p>
              </div>

              <div className="flex items-center gap-[12px]">
                <div className="flex items-center rounded-md border border-[#e5e7eb]">
                  <button
                    type="button"
                    onClick={() => updateItem(item.id, item.quantity - 1)}
                    className="px-3 py-2 text-[#3d4750]"
                  >
                    -
                  </button>
                  <span className="min-w-10 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateItem(item.id, item.quantity + 1)}
                    className="px-3 py-2 text-[#3d4750]"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="rounded-md border border-red-100 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>

              <div className="font-quicksand text-[18px] font-bold text-[#3d4750] sm:w-[90px] sm:text-right">
                ${item.line_total.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="h-fit rounded-[20px] bg-white p-[24px] shadow-sm">
        <h2 className="mb-[18px] font-quicksand text-[24px] font-bold text-[#3d4750]">Order Summary</h2>
        <div className="space-y-[12px] border-b border-[#eee] pb-[18px] font-Poppins text-[14px] text-[#686e7d]">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{cart.item_count}</span>
          </div>
          <div className="flex justify-between">
            <span>Status</span>
            <span>Pending</span>
          </div>
        </div>
        <div className="mt-[18px] flex justify-between font-quicksand text-[22px] font-bold text-[#3d4750]">
          <span>Total</span>
          <span>${cart.total.toFixed(2)}</span>
        </div>
        <Link
          href="/checkout"
          className="mt-[22px] block w-full rounded-[12px] bg-[#0f766e] px-[20px] py-[13px] text-center font-Poppins text-[14px] font-semibold text-white hover:bg-[#5a6cb8]"
        >
          Pay Now
        </Link>
        <p className="mt-3 text-center font-Poppins text-[12px] text-[#9ca3af]">
          Payment gateway integration will be added later.
        </p>
      </aside>
    </div>
  );
}

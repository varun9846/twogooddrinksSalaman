"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCartStore } from "@/store/useCartStore";
import { useUiStore } from "@/store/useUiStore";

interface ProductActionsProps {
  productId: string;
  compact?: boolean;
}

export default function ProductActions({ productId, compact = false }: ProductActionsProps) {
  const router = useRouter();
  const { status } = useSession();
  const addToCart = useCartStore((state) => state.addToCart);
  const isLoading = useCartStore((state) => state.isLoading);
  const toggleCart = useUiStore((state) => state.toggleCart);
  const [message, setMessage] = useState<string | null>(null);

  const redirectToLogin = (callbackUrl: string) => {
    alert("Please login first to continue.");
    router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  };

  const handleAddToCart = async () => {
    setMessage(null);
    if (status !== "authenticated") {
      redirectToLogin("/shop");
      return;
    }

    try {
      await addToCart(productId, 1);
      setMessage("Added to cart");
      toggleCart();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to add product.");
    }
  };

  const handleBuyNow = async () => {
    setMessage(null);
    if (status !== "authenticated") {
      redirectToLogin(`/my-cart?buyNow=${productId}`);
      return;
    }

    try {
      await addToCart(productId, 1);
      router.push("/my-cart");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to continue.");
    }
  };

  return (
    <div className={compact ? "mt-[16px]" : "mt-[24px]"}>
      <div className={compact ? "flex flex-col gap-[10px]" : "flex flex-wrap gap-[12px]"}>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isLoading || status === "loading"}
          className="flex-1 rounded-[10px] border border-[#0f766e] bg-white px-[18px] py-[11px] font-Poppins text-[14px] font-semibold text-[#0f766e] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f766e] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <i className="ri-shopping-cart-line mr-[6px]" />
          Add To Cart
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={isLoading || status === "loading"}
          className="flex-1 rounded-[10px] bg-[#0f766e] px-[18px] py-[11px] font-Poppins text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c5f59] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Buy Now
        </button>
      </div>
      {message ? (
        <p className="mt-[10px] text-center font-Poppins text-[12px] text-[#0f766e]">
          {message}
        </p>
      ) : null}
    </div>
  );
}

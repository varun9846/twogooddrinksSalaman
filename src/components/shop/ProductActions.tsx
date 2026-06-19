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

export default function ProductActions({
  productId,
  compact = false,
}: ProductActionsProps) {
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
      setMessage(
        error instanceof Error ? error.message : "Unable to add product.",
      );
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
      setMessage(
        error instanceof Error ? error.message : "Unable to continue.",
      );
    }
  };

  return (
    <div className={compact ? "mt-[16px]" : "mt-[24px]"}>
      <div
        className={
          compact ? "flex flex-col gap-[10px]" : "flex flex-wrap gap-[12px]"
        }
      >
        {/* <button
          type="button"
          onClick={handleAddToCart}
          disabled={isLoading || status === "loading"}
          className="flex-1 rounded-[12px] bg-[#f3f4f6] px-[18px] py-[12px] font-Poppins text-[14px] font-medium text-[#1f2937] transition-all duration-200 hover:bg-[#e5e7eb] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </button> */}

        <button
          type="button"
          // onClick={handleBuyNow}
          onClick={() => router.push(`/contact-us`)}
          disabled={isLoading || status === "loading"}
          className="flex-1 rounded-[12px] bg-teal-600  px-[18px] py-[12px] font-Poppins text-[14px] font-semibold text-white transition-all duration-200 hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Buy Now
        </button>
      </div>

      {message ? (
        <p className="mt-2 text-center text-[12px] text-[#0f766e]">{message}</p>
      ) : null}
    </div>
  );
}

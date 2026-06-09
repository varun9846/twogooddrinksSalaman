"use client";

import Link from "next/link";
import { useUiStore } from "@/store/useUiStore";

export default function Header() {
  const toggleCart = useUiStore((state) => state.toggleCart);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-slate-900">
          2gooD
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="text-slate-700 hover:text-[#6c7fd8]">
            Home
          </Link>
          <Link href="/shop" className="text-slate-700 hover:text-[#6c7fd8]">
            Shop
          </Link>
          <Link href="/about-us" className="text-slate-700 hover:text-[#6c7fd8]">
            About Us
          </Link>
          <Link href="/contact-us" className="text-slate-700 hover:text-[#6c7fd8]">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-[#6c7fd8] hover:text-[#6c7fd8] md:inline-flex"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-[#6c7fd8] hover:text-[#6c7fd8] md:inline-flex"
          >
            Register
          </Link>
          <button
            type="button"
            onClick={toggleCart}
            className="inline-flex items-center gap-2 rounded-full bg-[#6c7fd8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5768b0]"
          >
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}

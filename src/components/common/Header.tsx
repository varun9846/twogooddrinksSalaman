"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useUiStore } from "@/store/useUiStore";
import { useCartStore } from "@/store/useCartStore";

const navItems = [
  { label: "Home", href: "/" },
  
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const { data: session, status } = useSession();
  const toggleCart = useUiStore((state) => state.toggleCart);
  const cart = useCartStore((state) => state.cart);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const clearLocalCart = useCartStore((state) => state.clearLocalCart);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      fetchCart();
    }

    if (status === "unauthenticated") {
      clearLocalCart();
    }
  }, [status, fetchCart, clearLocalCart]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const cartCount = cart?.item_count || 0;

  return (
    <header className="bb-header sticky top-0 z-50 border-b border-[#eee] bg-white/95 backdrop-blur-sm">
      <div className="py-5 max-[991px]:py-4">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8 px-4 max-[767px]:gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/assets/img/logo/logo-icon2.png"
              alt="2gooD Logo"
              className="h-16 w-16 shrink-0 object-contain max-[575px]:h-14 max-[575px]:w-14"
            />
            {/* <span className="font-Poppins text-3xl font-bold tracking-[0.03rem] text-[#2b2b2d] transition hover:text-[#0f766e] max-[575px]:text-2xl">
              2gooD
            </span> */}
          </Link>

          <nav className="hidden items-center gap-8 font-Poppins text-[15px] font-medium text-[#3d4750] lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative py-3">
                <Link href={item.href} className="whitespace-nowrap transition hover:text-[#0f766e]">
                  {item.label}
                </Link>

                {/* {item.children?.length ? (
                  <ul className="invisible absolute left-0 top-full z-30 min-w-[230px] rounded-[10px] border border-[#eee] bg-white p-3 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm font-normal text-[#686e7d] transition hover:text-[#0f766e]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null} */}
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-5 max-[575px]:gap-4">
           

            <div className="group relative">
              <button
                type="button"
                className="text-[#3d4750] transition hover:text-[#0f766e]"
                aria-label="Account"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              <ul className="invisible absolute right-0 top-full z-30 mt-4 min-w-[190px] rounded-[10px] border border-[#eee] bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {status === "authenticated" ? (
                  <>
                    <li className="border-b border-[#eee] px-3 py-2 text-sm text-[#3d4750]">
                      Hi, {session?.user?.name || "Customer"}
                    </li>
                    <li>
                      <Link href="/my-cart" className="block rounded-md px-3 py-2 text-sm text-[#686e7d] transition hover:text-[#0f766e]">
                        My Cart
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm text-[#686e7d] transition hover:text-[#0f766e]"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/login" className="block rounded-md px-3 py-2 text-sm text-[#686e7d] transition hover:text-[#0f766e]">
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link href="/register" className="block rounded-md px-3 py-2 text-sm text-[#686e7d] transition hover:text-[#0f766e]">
                        Create Account
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <button
              type="button"
              onClick={toggleCart}
              className="relative text-[#3d4750] transition hover:text-[#0f766e]"
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#0f766e] text-[11px] font-bold text-white">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="hidden text-[#3d4750] transition hover:text-[#0f766e] max-lg:block"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="h-full w-[340px] max-w-[85vw] overflow-y-auto bg-white px-5 py-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between border-b border-[#eee] pb-3">
              <span className="font-Poppins text-base font-semibold text-[#3d4750]">2gooD Menu</span>
              <span className="rounded-full bg-[#0f766e]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f766e]">Menu</span>
              <button type="button" onClick={() => setMobileOpen(false)} className="text-2xl text-red-500" aria-label="Close menu">
                ×
              </button>
            </div>

            <ul>
              {navItems.map((item) => (
                <li key={item.label} className="mb-3">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-[10px] border border-[#eee] p-3 text-[15px] font-medium text-[#686e7d]"
                  >
                    {item.label}
                  </Link>
{/* 
                  {item.children?.length ? (
                    <ul className="ml-3 mt-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 pl-3 text-sm text-[#777] hover:text-[#0f766e]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null} */}
                </li>
              ))}

              {status === "authenticated" ? (
                <>
                  <li className="mb-3">
                    <Link href="/my-cart" onClick={() => setMobileOpen(false)} className="block rounded-[10px] border border-[#eee] p-3 text-[15px] font-medium text-[#686e7d]">
                      My Cart
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="block w-full rounded-[10px] border border-[#eee] p-3 text-left text-[15px] font-medium text-[#686e7d]"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mb-3">
                    <Link href="/login" onClick={() => setMobileOpen(false)} className="block rounded-[10px] border border-[#eee] p-3 text-[15px] font-medium text-[#686e7d]">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" onClick={() => setMobileOpen(false)} className="block rounded-[10px] border border-[#eee] p-3 text-[15px] font-medium text-[#686e7d]">
                      Create Account
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { useUiStore } from "@/store/useUiStore";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/shop" },
  
  {
    label: "Wellness Journal",
    href: "/wellness-journal",
    children: [
      { label: "Hydration Tips", href: "/wellness-journal/hydration-tips" },
      { label: "Herbal Drink Benefits", href: "/wellness-journal/herbal-benefits" },
      { label: "Healthy Lifestyle", href: "/wellness-journal/healthy-lifestyle" },
    ],
  },
  // { label: "Shop Locator", href: "/shop-locator" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const accountLinks = [
  { label: "Create Account", href: "/register" },
  { label: "Checkout", href: "/checkout" },
  { label: "Sign In", href: "/login" },
];

export default function Header() {
  const toggleCart = useUiStore((state) => state.toggleCart);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bb-header sticky top-0 z-50 border-b border-[#eee] bg-white/95 backdrop-blur-sm">
      <div className="py-5 max-[991px]:py-4">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8 px-4 max-[767px]:gap-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/assets/img/logo/logo-icon.png"
              alt="2gooD Logo"
              className="h-10 w-10 shrink-0 object-contain max-[575px]:h-8 max-[575px]:w-8"
            />
            <span className="font-Poppins text-3xl font-bold tracking-[0.03rem] text-[#2b2b2d] transition hover:text-[#6c7fd8] max-[575px]:text-2xl">
              2gooD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 font-Poppins text-[15px] font-medium text-[#3d4750] lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative py-3">
                <Link
                  href={item.href}
                  className="whitespace-nowrap transition hover:text-[#6c7fd8]"
                >
                  {item.label}
                </Link>

                {item.children?.length ? (
                  <ul className="invisible absolute left-0 top-full z-30 min-w-[230px] rounded-[10px] border border-[#eee] bg-white p-3 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm font-normal text-[#686e7d] transition hover:text-[#6c7fd8]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex shrink-0 items-center gap-5 max-[575px]:gap-4">
            <button
              type="button"
              className="text-[#3d4750] transition hover:text-[#6c7fd8]"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <div className="group relative">
              <button
                type="button"
                className="text-[#3d4750] transition hover:text-[#6c7fd8]"
                aria-label="Account"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              <ul className="invisible absolute right-0 top-full z-30 mt-4 min-w-[160px] rounded-[10px] border border-[#eee] bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {accountLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm text-[#686e7d] transition hover:text-[#6c7fd8]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={toggleCart}
              className="relative text-[#3d4750] transition hover:text-[#6c7fd8]"
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#6c7fd8] text-[11px] font-bold text-white">
                0
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="hidden text-[#3d4750] transition hover:text-[#6c7fd8] max-lg:block"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 lg:hidden">
          <aside className="h-full w-[340px] max-w-[85vw] bg-white px-5 py-4">
            <div className="mb-5 flex items-center justify-between border-b border-[#eee] pb-3">
              <span className="font-Poppins text-base font-semibold text-[#3d4750]">
                2gooD Menu
              </span>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-red-500"
                aria-label="Close menu"
              >
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

                  {item.children?.length ? (
                    <ul className="ml-3 mt-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 pl-3 text-sm text-[#777] hover:text-[#6c7fd8]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
}
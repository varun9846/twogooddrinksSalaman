"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useUiStore } from "@/store/useUiStore";
import {
  productsService,
  type ProductMenuCategory,
} from "@/lib/services/productsService";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/shop" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const fallbackCategories = [
  "Packaged Drinking Water",
  "Healthy Drinks",
  "Herbal Infusions",
];

const serviceAreas = [
  "Kanpur",
  "Kanpur Dehat",
  "Unnao",
  "Raibareli",
  "Lucknow",
  "Unchahar",
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { status } = useSession();
  const toggleCart = useUiStore((state) => state.toggleCart);
  const cart = useCartStore((state) => state.cart);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productMenu, setProductMenu] = useState<ProductMenuCategory[]>([]);
  const [menuLoading, setMenuLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(fallbackCategories[0]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchCart();
    }
  }, [status, fetchCart]);

  useEffect(() => {
    let cancelled = false;

    async function loadProductMenu() {
      try {
        setMenuLoading(true);
        const response = await productsService.getProductMenu();

        if (!cancelled && response.success) {
          setProductMenu(response.menu);
        }
      } catch (error) {
        console.error("Failed to load product menu", error);
      } finally {
        if (!cancelled) setMenuLoading(false);
      }
    }

    loadProductMenu();

    return () => {
      cancelled = true;
    };
  }, []);

  const categories = productMenu.length
    ? productMenu.map((item) => item.category)
    : fallbackCategories;

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (search.trim()) params.set("q", search.trim());
    if (category) params.set("category", category);

    router.push(`/shop?${params.toString()}`);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="bb-header relative z-[1000] border-b border-[#eee] bg-white/95 font-Poppins shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
      <div className="top-header bg-[#3d4750] py-[6px] max-[991px]:hidden">
        <div className="bb-container flex items-center justify-between">
          <Link
            href="/shop"
            className="text-[14px] font-light leading-[28px] tracking-[0.03rem] text-white transition-all duration-300 hover:text-[#d1faf4]"
          >
            Pure packaged drinking water for homes, offices, events, and bulk
            orders.
          </Link>

          <div className="flex items-center gap-[24px] text-[14px] font-light leading-[28px] tracking-[0.03rem] text-white">
            <Link
              href="/contact-us"
              className="transition-all duration-300 hover:-translate-y-[1px] hover:text-[#d1faf4]"
            >
              Help?
            </Link>

            <Link
              href="/contact-us"
              className="transition-all duration-300 hover:-translate-y-[1px] hover:text-[#d1faf4]"
            >
              Track Order
            </Link>

            <span>Available: Kanpur | Lucknow | Unnao</span>
          </div>
        </div>
      </div>

      <div className="bottom-header py-[18px] max-[991px]:py-[14px]">
        <div className="bb-container flex items-center justify-between gap-[24px]">
          <Link
            href="/"
            className="group flex shrink-0 items-center transition-all duration-300 hover:-translate-y-[2px]"
            aria-label="2good Plus home"
          >
            <Image
              src="/assets/img/logo/logo-icon2.png"
              alt="2good Plus logo"
              width={132}
              height={68}
              className="h-auto w-[125px] transition-all duration-300 group-hover:scale-[1.04] max-[575px]:w-[108px]"
              priority
            />
          </Link>

          <form
            onSubmit={handleSearch}
            className="bb-btn-group-form relative w-[580px] max-[1199px]:w-[430px] max-[991px]:hidden"
          >
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="absolute left-0 top-0 h-full w-[165px] rounded-l-[10px] border border-[#eee] bg-white px-[15px] font-Poppins text-[13px] text-[#777] outline-none transition-all duration-300 hover:border-[#0f766e]/50 focus:border-[#0f766e]"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="h-[48px] w-full rounded-[10px] border border-[#eee] bg-white py-[10px] pl-[180px] pr-[50px] font-Poppins text-[14px] leading-[1] tracking-[0.5px] text-[#777] outline-none transition-all duration-300 hover:border-[#0f766e]/50 hover:shadow-[0_8px_22px_rgba(15,118,110,0.08)] focus:border-[#0f766e] focus:shadow-[0_8px_22px_rgba(15,118,110,0.12)]"
            />

            <button
              type="submit"
              className="absolute right-0 top-0 flex h-full w-[48px] items-center justify-center rounded-r-[10px] text-[#555] transition-all duration-300 hover:bg-[#0f766e] hover:text-white"
              aria-label="Search"
            >
              <i className="ri-search-line text-[19px]" />
            </button>
          </form>

          <div className="bb-header-buttons flex items-center justify-end gap-[24px] max-[575px]:gap-[14px]">
            <div className="group relative max-[480px]:hidden">
              <button
                className="bb-header-btn group/account flex items-center whitespace-nowrap rounded-[12px] px-[8px] py-[6px] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#f0fdfa]"
                type="button"
              >
                <i className="ri-user-3-line text-[28px] text-[#0f766e] transition-all duration-300 group-hover/account:scale-110 max-[575px]:text-[24px]" />

                <div className="ml-[10px] flex flex-col text-left max-[1199px]:hidden">
                  <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750] transition-all duration-300 group-hover/account:text-[#0f766e]">
                    Account
                  </p>

                  <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750] transition-all duration-300 group-hover/account:text-[#0f766e]">
                    {status === "authenticated" ? "Profile" : "Login"}
                  </p>
                </div>
              </button>

              <ul className="bb-dropdown-menu invisible absolute right-0 top-full z-50 mt-[18px] min-w-[165px] translate-y-[4px] rounded-[10px] border border-[#eee] bg-white px-[8px] py-[10px] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:visible group-hover:mt-[12px] group-hover:translate-y-0 group-hover:opacity-100">
                {[
                  { label: "Register", href: "/register" },
                  { label: "Login", href: "/login" },
                  { label: "Checkout", href: "/checkout" },
                  { label: "My Cart", href: "/my-cart" },
                ].map((item) => (
                  <li
                    key={item.href}
                    className="rounded-[8px] px-[12px] py-[5px] transition-all duration-300 hover:bg-[#f0fdfa]"
                  >
                    <Link
                      href={item.href}
                      className="block text-[13px] font-normal leading-[22px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:translate-x-[4px] hover:text-[#0f766e]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="tel:+919967399880"
              className="bb-header-btn group/call flex items-center whitespace-nowrap rounded-[12px] px-[8px] py-[6px] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#f0fdfa]"
            >
              <i className="ri-phone-line text-[28px] text-[#0f766e] transition-all duration-300 group-hover/call:scale-110 group-hover/call:rotate-[-8deg] max-[575px]:text-[24px]" />

              <div className="ml-[10px] flex flex-col max-[1199px]:hidden">
                <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750] transition-all duration-300 group-hover/call:text-[#0f766e]">
                  Call Us
                </p>

                <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750] transition-all duration-300 group-hover/call:text-[#0f766e]">
                  +91 99673 99880
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={toggleCart}
              className="bb-header-btn group/cart relative flex items-center whitespace-nowrap rounded-[12px] px-[8px] py-[6px] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#f0fdfa]"
              aria-label="Open cart"
            >
              <i className="ri-shopping-cart-line text-[28px] text-[#0f766e] transition-all duration-300 group-hover/cart:scale-110 group-hover/cart:rotate-[-6deg] max-[575px]:text-[24px]" />

              {cart?.item_count ? (
                <span className="absolute left-[18px] top-[-8px] flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#3d4750] px-[5px] text-[10px] font-semibold text-white transition-all duration-300 group-hover/cart:bg-[#0f766e]">
                  {cart.item_count}
                </span>
              ) : null}

              <div className="ml-[10px] flex flex-col max-[1199px]:hidden">
                <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750] transition-all duration-300 group-hover/cart:text-[#0f766e]">
                  Cart
                </p>

                <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750] transition-all duration-300 group-hover/cart:text-[#0f766e]">
                  {cart?.item_count || 0} items
                </p>
              </div>
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="hidden h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-[#eee] transition-all duration-300 hover:border-[#0f766e] hover:bg-[#f0fdfa] max-[991px]:flex"
              aria-label="Open menu"
              type="button"
            >
              <i className="ri-menu-3-fill text-[25px] text-[#0f766e]" />
            </button>
          </div>
        </div>
      </div>

      <nav className="bb-main-menu-desk border-t border-[#eee] bg-white py-[5px] max-[991px]:hidden">
        <div className="bb-container flex items-center justify-between">
          <ul className="flex flex-row flex-wrap items-center">
            <li className="group relative mr-[30px]">
              <button
                type="button"
                className="relative flex h-[45px] w-[45px] items-center justify-center rounded-[10px] border border-[#eee] bg-white p-[8px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#0f766e] hover:bg-[#f0fdfa] hover:shadow-[0_8px_20px_rgba(15,118,110,0.12)]"
              >
                <i className="ri-function-line text-[24px] text-[#0f766e] transition-all duration-300 group-hover:scale-110" />
              </button>

              <ul className="bb-dropdown-menu invisible absolute left-0 top-full z-[999] mt-[18px] min-w-[210px] translate-y-[4px] rounded-[10px] border border-[#eee] bg-white p-[10px] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:visible group-hover:mt-[12px] group-hover:translate-y-0 group-hover:opacity-100">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-[8px] px-[12px] py-[6px] font-Poppins text-[14px] text-[#686e7d] transition-all duration-300 hover:translate-x-[4px] hover:bg-[#f0fdfa] hover:text-[#0f766e]"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.map((item) => {
              const active = pathname === item.href;

              if (item.label === "Products") {
                return (
                  <li
                    key={item.href}
                    className="nav-item bb-main-dropdown group relative mr-[45px] flex items-center"
                  >
                    <Link
                      href={item.href}
                      className={`nav-link bb-dropdown-item block font-Poppins text-[15px] font-medium leading-[28px] tracking-[0.03rem] transition-all duration-300 ${
                        pathname.startsWith("/shop")
                          ? "text-[#6674e8]"
                          : "text-[#3d4750] hover:text-[#6674e8]"
                      }`}
                    >
                      Products
                    </Link>

                    <ul className="mega-menu invisible absolute left-0 top-full z-[999] mt-[18px] min-w-[205px] rounded-[10px] border border-[#eee] bg-white py-[10px] text-left opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:visible group-hover:mt-[10px] group-hover:opacity-100">
                      {menuLoading ? (
                        <li className="px-[24px] py-[10px] font-Poppins text-[15px] text-[#686e7d]">
                          Loading...
                        </li>
                      ) : productMenu.length ? (
                        productMenu.map((category) => (
                          <li
                            key={category.category}
                            className="relative group/sub"
                          >
                            <Link
                              href={category.href}
                              className="flex items-center justify-between px-[24px] py-[10px] font-Poppins text-[15px] font-normal leading-[24px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:translate-x-[4px] hover:bg-[#f0fdfa] hover:text-[#0f766e]"
                            >
                              {category.category}

                              {category.products?.length ? (
                                <i className="ri-arrow-right-s-line text-[18px]" />
                              ) : null}
                            </Link>

                            {category.products?.length ? (
                              <ul className="invisible absolute left-full top-[-10px] z-[1000] ml-[1px] min-w-[235px] rounded-[10px] border border-[#eee] bg-white py-[14px] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover/sub:visible group-hover/sub:opacity-100">
                                {category.products
                                  .slice(0, 3)
                                  .map((product) => (
                                    <li key={product.id}>
                                      <Link
                                        href={product.href}
                                        className="block px-[24px] py-[9px] font-Poppins text-[15px] font-normal leading-[24px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:translate-x-[4px] hover:bg-[#f0fdfa] hover:text-[#0f766e]"
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            ) : null}
                          </li>
                        ))
                      ) : (
                        fallbackCategories.map((category) => (
                          <li key={category}>
                            <Link
                              href={`/shop?category=${encodeURIComponent(category)}`}
                              className="block px-[24px] py-[10px] font-Poppins text-[15px] font-normal leading-[24px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:text-[#0f766e]"
                            >
                              {category}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.href} className="mr-[45px] flex items-center">
                  <Link
                    href={item.href}
                    className={`relative block font-Poppins text-[15px] font-medium leading-[28px] tracking-[0.03rem] transition-all duration-300 after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#0f766e] after:transition-all after:duration-300 hover:-translate-y-[1px] hover:text-[#0f766e] hover:after:w-full ${
                      active ? "text-[#0f766e] after:w-full" : "text-[#3d4750]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact-us"
            className="group rounded-full border border-[#eee] px-[16px] py-[7px] font-Poppins text-[14px] font-medium leading-[28px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#0f766e] hover:bg-[#0f766e] hover:text-white hover:shadow-[0_10px_24px_rgba(15,118,110,0.22)]"
          >
            <i className="ri-whatsapp-line mr-[6px] text-[#0f766e] transition-all duration-300 group-hover:text-white" />
            Bulk Orders
          </Link>
        </div>
      </nav>

     

      {mobileOpen ? (
        <div className="fixed inset-0 z-[9999] bg-black/50 max-[991px]:block min-[992px]:hidden">
          <button
            type="button"
            aria-label="Close mobile menu"
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={closeMobile}
          />

          <aside className="relative z-[10000] h-dvh w-[320px] max-w-[86vw] overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#eee] px-5 py-4">
              <Link href="/" onClick={closeMobile}>
                <Image
                  src="/assets/img/logo/logo-icon2.png"
                  alt="2good Plus"
                  width={120}
                  height={60}
                  className="h-auto w-[110px]"
                />
              </Link>

              <button
                type="button"
                onClick={closeMobile}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#3d4750]"
              >
                <i className="ri-close-line text-[26px]" />
              </button>
            </div>

            <form onSubmit={handleSearch} className="px-5 py-5">
              <div className="flex h-[46px] items-center rounded-[12px] border border-[#eee] bg-white px-4">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent text-[14px] outline-none"
                />
                <button type="submit" aria-label="Search">
                  <i className="ri-search-line text-[22px] text-[#0f766e]" />
                </button>
              </div>
            </form>

            <nav className="px-5 pb-6">
              <div className="space-y-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className={`block rounded-[10px] border border-[#eee] px-4 py-3 text-[15px] font-medium ${
                      pathname === item.href
                        ? "bg-[#f0fdfa] text-[#0f766e]"
                        : "text-[#3d4750]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </aside>
        </div>
      ) : null}
    </header>
  );
}

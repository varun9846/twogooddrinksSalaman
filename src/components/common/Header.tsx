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
    <header className="bb-header border-b border-[#eee] bg-white font-Poppins shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
      <div className="top-header bg-[#3d4750] py-[6px] max-[991px]:hidden">
        <div className="bb-container flex items-center justify-between">
          <Link
            href="/shop"
            className="text-[14px] font-light leading-[28px] tracking-[0.03rem] text-white transition hover:text-[#d1faf4]"
          >
            Pure packaged drinking water for homes, offices, events, and bulk orders.
          </Link>
          <div className="flex items-center gap-[24px] text-[14px] font-light leading-[28px] tracking-[0.03rem] text-white">
            <Link href="/contact-us" className="transition hover:text-[#d1faf4]">
              Help?
            </Link>
            <Link href="/contact-us" className="transition hover:text-[#d1faf4]">
              Track Order
            </Link>
            <span>Available: Kanpur | Lucknow | Unnao</span>
          </div>
        </div>
      </div>

      <div className="bottom-header py-[18px] max-[991px]:py-[14px]">
        <div className="bb-container flex items-center justify-between gap-[24px]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="2good Plus home">
            <Image
              src="/assets/img/logo/logo-icon2.png"
              alt="2good Plus logo"
              width={132}
              height={68}
              className="h-auto w-[125px] max-[575px]:w-[108px]"
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
              className="absolute left-0 top-0 h-full w-[165px] rounded-l-[10px] border border-[#eee] bg-white px-[15px] font-Poppins text-[13px] text-[#777] outline-none"
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
              className="h-[48px] w-full rounded-[10px] border border-[#eee] bg-white py-[10px] pl-[180px] pr-[50px] font-Poppins text-[14px] leading-[1] tracking-[0.5px] text-[#777] outline-none transition focus:border-[#0f766e]"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 flex h-full w-[48px] items-center justify-center rounded-r-[10px] text-[#555] transition hover:text-[#0f766e]"
              aria-label="Search"
            >
              <i className="ri-search-line text-[19px]" />
            </button>
          </form>

          <div className="bb-header-buttons flex items-center justify-end gap-[24px] max-[575px]:gap-[14px]">
            <div className="group relative max-[480px]:hidden">
              <button className="bb-header-btn flex items-center whitespace-nowrap" type="button">
                <i className="ri-user-3-line text-[28px] text-[#0f766e] max-[575px]:text-[24px]" />
                <div className="ml-[10px] flex flex-col text-left max-[1199px]:hidden">
                  <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750]">
                    Account
                  </p>
                  <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750]">
                    {status === "authenticated" ? "Profile" : "Login"}
                  </p>
                </div>
              </button>
              <ul className="bb-dropdown-menu invisible absolute right-0 top-full z-50 mt-[18px] min-w-[165px] rounded-[10px] border border-[#eee] bg-white px-[8px] py-[10px] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:visible group-hover:mt-[12px] group-hover:opacity-100">
                {[
                  { label: "Register", href: "/register" },
                  { label: "Login", href: "/login" },
                  { label: "Checkout", href: "/checkout" },
                  { label: "My Cart", href: "/my-cart" },
                ].map((item) => (
                  <li key={item.href} className="rounded-[8px] px-[12px] py-[5px] transition hover:bg-[#f8f8fb]">
                    <Link
                      href={item.href}
                      className="block text-[13px] font-normal leading-[22px] tracking-[0.03rem] text-[#686e7d] transition hover:text-[#0f766e]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="tel:+919967399880" className="bb-header-btn flex items-center whitespace-nowrap">
              <i className="ri-phone-line text-[28px] text-[#0f766e] max-[575px]:text-[24px]" />
              <div className="ml-[10px] flex flex-col max-[1199px]:hidden">
                <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750]">
                  Call Us
                </p>
                <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750]">
                  +91 99673 99880
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={toggleCart}
              className="bb-header-btn relative flex items-center whitespace-nowrap"
              aria-label="Open cart"
            >
              <i className="ri-shopping-cart-line text-[28px] text-[#0f766e] max-[575px]:text-[24px]" />
              {cart?.item_count ? (
                <span className="absolute left-[18px] top-[-8px] flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#3d4750] px-[5px] text-[10px] font-semibold text-white">
                  {cart.item_count}
                </span>
              ) : null}
              <div className="ml-[10px] flex flex-col max-[1199px]:hidden">
                <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750]">
                  Cart
                </p>
                <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750]">
                  {cart?.item_count || 0} items
                </p>
              </div>
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="hidden h-[40px] w-[40px] items-center justify-center rounded-[12px] border border-[#eee] max-[991px]:flex"
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
                className="relative flex h-[45px] w-[45px] items-center justify-center rounded-[10px] border border-[#eee] bg-white p-[8px]"
              >
                <i className="ri-function-line text-[24px] text-[#0f766e]" />
              </button>
              <ul className="bb-dropdown-menu invisible absolute left-0 top-full z-[999] mt-[18px] min-w-[210px] rounded-[10px] border border-[#eee] bg-white p-[10px] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:visible group-hover:mt-[12px] group-hover:opacity-100">
                {serviceAreas.map((area) => (
                  <li key={area} className="rounded-[8px] px-[12px] py-[6px] font-Poppins text-[14px] text-[#686e7d] transition hover:bg-[#f8f8fb] hover:text-[#0f766e]">
                    {area}
                  </li>
                ))}
              </ul>
            </li>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              if (link.label === "Products") {
                return (
                  <li key={link.href} className="group relative mr-[45px] flex items-center">
                    <Link
                      href={link.href}
                      className={`block font-Poppins text-[15px] font-medium leading-[28px] tracking-[0.03rem] transition-all duration-300 ${
                        pathname.startsWith("/shop") ? "text-[#0f766e]" : "text-[#3d4750] hover:text-[#0f766e]"
                      }`}
                    >
                      Products
                    </Link>
                    <ul className="bb-dropdown-menu invisible absolute left-0 top-full z-[999] mt-[18px] flex min-w-[235px] flex-col rounded-[10px] border border-[#eee] bg-white p-[10px] text-left opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:visible group-hover:mt-[12px] group-hover:opacity-100">
                      <li className="rounded-[8px] px-[15px] py-[5px] transition hover:bg-[#f8f8fb]">
                        <Link href="/shop" className="block py-[5px] text-[14px] leading-[22px] tracking-[0.03rem] text-[#686e7d] transition hover:text-[#0f766e]">
                          All Products
                        </Link>
                      </li>
                      {menuLoading ? (
                        <li className="px-[15px] py-[8px] text-[14px] text-[#686e7d]">Loading...</li>
                      ) : productMenu.length ? (
                        productMenu.map((item) => (
                          <li key={item.category} className="rounded-[8px] px-[15px] py-[5px] transition hover:bg-[#f8f8fb]">
                            <Link href={item.href} className="block py-[5px] text-[14px] leading-[22px] tracking-[0.03rem] text-[#686e7d] transition hover:text-[#0f766e]">
                              {item.category}
                            </Link>
                          </li>
                        ))
                      ) : (
                        fallbackCategories.map((item) => (
                          <li key={item} className="rounded-[8px] px-[15px] py-[5px] transition hover:bg-[#f8f8fb]">
                            <Link href={`/shop?category=${encodeURIComponent(item)}`} className="block py-[5px] text-[14px] leading-[22px] tracking-[0.03rem] text-[#686e7d] transition hover:text-[#0f766e]">
                              {item}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={link.href} className="mr-[45px] flex items-center">
                  <Link
                    href={link.href}
                    className={`block font-Poppins text-[15px] font-medium leading-[28px] tracking-[0.03rem] transition-all duration-300 ${
                      active ? "text-[#0f766e]" : "text-[#3d4750] hover:text-[#0f766e]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact-us"
            className="font-Poppins text-[14px] font-medium leading-[28px] tracking-[0.03rem] text-[#686e7d] transition hover:text-[#0f766e]"
          >
            <i className="ri-whatsapp-line mr-[6px] text-[#0f766e]" /> Bulk Orders
          </Link>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-black/45 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobile}
      />
      <aside
        className={`fixed left-0 top-0 z-[61] h-full w-[320px] max-w-[88vw] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#eee] p-[20px]">
          <Image src="/assets/img/logo/logo-icon2.png" alt="2good Plus" width={105} height={54} />
          <button type="button" onClick={closeMobile} aria-label="Close menu">
            <i className="ri-close-line text-[26px] text-[#3d4750]" />
          </button>
        </div>
        <div className="p-[20px]">
          <form onSubmit={handleSearch} className="relative mb-[20px]">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="bb-input pr-[44px]"
            />
            <button type="submit" className="absolute right-[12px] top-[11px] text-[#0f766e]" aria-label="Search">
              <i className="ri-search-line text-[18px]" />
            </button>
          </form>
          <nav className="space-y-[8px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="block rounded-[10px] border border-[#eee] px-[14px] py-[12px] font-Poppins text-[15px] font-medium text-[#686e7d] transition hover:border-[#0f766e] hover:text-[#0f766e]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-[22px] rounded-[14px] bg-[#f8f8fb] p-[16px]">
            <p className="mb-[8px] font-quicksand text-[16px] font-bold text-[#3d4750]">Contact</p>
            <Link href="tel:+919967399880" className="font-Poppins text-[14px] text-[#686e7d] hover:text-[#0f766e]">
              <i className="ri-phone-line mr-[6px] text-[#0f766e]" /> +91 99673 99880
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}

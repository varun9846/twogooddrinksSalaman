"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

const categories = [
  "Healthy Drinks",
  "Packaged Drinking Water",
  "Herbal Infusions",
];

const LocationOptions = [
  "Kanpur",
  "Unnao",
  "Lucknow",
  "Kanpur Dehat",
  "Raibareli",
  "Unchahar",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productMenu, setProductMenu] = useState<ProductMenuCategory[]>([]);
  const [menuLoading, setMenuLoading] = useState(false);

  useEffect(() => {
    async function loadProductMenu() {
      try {
        setMenuLoading(true);
        const response = await productsService.getProductMenu();

        if (response.success) {
          setProductMenu(response.menu);
        }
      } catch (error) {
        console.error("Failed to load product menu", error);
      } finally {
        setMenuLoading(false);
      }
    }

    loadProductMenu();
  }, []);

  return (
    <header className="bb-header sticky top-0 z-50 border-b border-[#eee] bg-white font-Poppins">
      <div className="bottom-header py-[20px] max-[991px]:py-[15px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <Link href="/">
            <Image
              src="/assets/img/logo/logo-icon2.png"
              alt="Logo"
              width={125}
              height={60}
              className="h-auto w-[125px] max-[991px]:w-[115px]"
              priority
            />
          </Link>

          <form className="bb-btn-group-form relative w-[600px] max-[1199px]:w-[420px] max-[991px]:hidden">
            <select className="absolute left-0 top-0 h-full w-[150px] rounded-l-[10px] border border-[#eee] bg-white px-4 font-Poppins text-[14px] text-[#777] outline-none">
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search products..."
              className="bb-search-bar h-[48px] w-full rounded-[10px] border border-[#eee] bg-white py-[10px] pl-[165px] pr-12 font-Poppins text-[14px] tracking-[0.5px] text-[#777] outline-none"
            />

            <button
              type="submit"
              className="absolute right-0 top-0 flex h-full w-[48px] items-center justify-center bg-transparent text-[#555]"
              aria-label="Search"
            >
              <i className="ri-search-line text-[18px]" />
            </button>
          </form>

          <div className="bb-header-buttons flex items-center justify-end gap-6 max-[575px]:gap-4">
            <div className="group relative">
              <button className="bb-header-btn flex items-center gap-2 whitespace-nowrap">
                <i className="ri-user-3-line text-[28px] text-[#0f766e]" />
                <div className="ml-[10px] flex flex-col text-left max-[1199px]:hidden">
                  <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750]">
                    Account
                  </p>
                  <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750]">
                    Login
                  </p>
                </div>
              </button>

              <ul className="invisible absolute right-0 top-full z-50 mt-[25px] min-w-[150px] rounded-[10px] border border-[#eee] bg-white px-[5px] py-[10px] opacity-0 shadow-md transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {[
                  { label: "Register", href: "/register" },
                  { label: "Login", href: "/login" },
                  { label: "Checkout", href: "/checkout" },
                ].map((item) => (
                  <li key={item.href} className="px-[15px] py-[4px]">
                    <Link
                      href={item.href}
                      className="block text-[13px] font-normal leading-[22px] tracking-[0.03rem] text-[#686e7d] hover:text-[#0f766e]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/wishlist"
              className="bb-header-btn flex items-center whitespace-nowrap"
            >
              <i className="ri-heart-line text-[28px] text-[#0f766e]" />
              <div className="ml-[10px] flex flex-col max-[1199px]:hidden">
                <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750]">
                  3 items
                </p>
                <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750]">
                  Wishlist
                </p>
              </div>
            </Link>

            <Link
              href="/cart"
              className="bb-header-btn flex items-center whitespace-nowrap"
            >
              <i className="ri-shopping-cart-line text-[28px] text-[#0f766e]" />
              <div className="ml-[10px] flex flex-col max-[1199px]:hidden">
                <p className="mb-[4px] text-[12px] font-medium leading-[1] tracking-[0.6px] text-[#3d4750]">
                  4 items
                </p>
                <p className="text-[14px] font-semibold leading-[16px] tracking-[0.03rem] text-[#3d4750]">
                  Cart
                </p>
              </div>
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="hidden max-[991px]:block"
              aria-label="Open menu"
            >
              <i className="ri-menu-3-fill text-[26px] text-[#0f766e]" />
            </button>
          </div>
        </div>
      </div>

      <nav className="bb-main-menu-desk border-t border-[#eee] bg-white py-[5px] max-[991px]:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <ul className="navbar-nav flex flex-row flex-wrap items-center">
            <li>
              <a
                href="javascript:void(0)"
                className="bb-header-btn bb-sidebar-toggle bb-category-toggle relative mr-[30px] flex h-[45px] w-[45px] items-center justify-center rounded-[10px] border border-[#eee] bg-white p-[8px]"
              >
                <i className="ri-function-line text-[24px] text-[#0f766e]" />
              </a>
            </li>

            {navLinks.map((link) => {
              if (link.label === "Products") {
                return (
                  <li
                    key={link.href}
                    className="nav-item bb-dropdown group relative mr-[45px] flex items-center"
                  >
                    <Link
                      href={link.href}
                      className="nav-link bb-dropdown-item font-Poppins relative block p-[0] text-[15px] font-medium leading-[28px] tracking-[0.03rem] text-[#3d4750] transition-all duration-300 hover:text-[#0f766e]"
                    >
                      Products
                    </Link>

                    {/* Main Dropdown */}
                    <ul className="bb-dropdown-menu invisible absolute left-0 top-[100%] z-[999] mt-[18px] flex min-w-[205px] flex-col rounded-[10px] border border-solid border-[#eee] bg-white p-[10px] text-left opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out group-hover:visible group-hover:mt-[12px] group-hover:opacity-100">
                      <li className="relative m-0 flex items-center rounded-[8px] px-[15px] py-[5px] transition-all duration-300 hover:bg-[#f8f8fb]">
                        <Link
                          href="/shop"
                          className="font-Poppins block w-full py-[5px] text-[14px] font-normal capitalize leading-[22px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:text-[#0f766e]"
                        >
                          All Products
                        </Link>
                      </li>

                      {menuLoading ? (
                        <li className="relative m-0 flex items-center px-[15px] py-[5px]">
                          <span className="font-Poppins py-[5px] text-[14px] font-normal leading-[22px] tracking-[0.03rem] text-[#686e7d]">
                            Loading...
                          </span>
                        </li>
                      ) : productMenu.length > 0 ? (
                        productMenu.map((category) => (
                          <li
                            key={category.category}
                            className="bb-mega-dropdown group/sub relative m-0 flex items-center rounded-[8px] px-[15px] py-[5px] transition-all duration-300 hover:bg-[#f8f8fb]"
                          >
                            <Link
                              href={category.href}
                              className="bb-mega-item font-Poppins flex w-full items-center justify-between gap-4 py-[5px] text-[14px] font-normal capitalize leading-[22px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:text-[#0f766e]"
                            >
                              <span className="max-w-[145px] whitespace-normal break-words">
                                {category.category}
                              </span>

                              <i className="ri-arrow-right-s-line text-[15px] text-[#686e7d] transition-all duration-300 group-hover/sub:text-[#0f766e]" />
                            </Link>

                            {/* Sub Dropdown */}
                            <ul className="bb-mega-menu invisible absolute left-[100%] top-0 z-[1000] ml-[10px] flex min-w-[250px] flex-col rounded-[10px] border border-solid border-[#eee] bg-white p-[10px] text-left opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out before:absolute before:left-[-12px] before:top-0 before:h-full before:w-[12px] before:content-[''] group-hover/sub:visible group-hover/sub:opacity-100">
                              {category.products.length > 0 ? (
                                category.products.map((product) => (
                                  <li
                                    key={product.id}
                                    className="m-0 flex items-center rounded-[8px] px-[15px] py-[5px] transition-all duration-300 hover:bg-[#f8f8fb]"
                                  >
                                    <Link
                                      href={product.href}
                                      className="dropdown-item font-Poppins block w-full py-[6px] text-[14px] font-normal capitalize leading-[22px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:text-[#0f766e]"
                                    >
                                      {product.name}
                                    </Link>
                                  </li>
                                ))
                              ) : (
                                <li className="m-0 flex items-center px-[15px] py-[5px]">
                                  <span className="dropdown-item py-[6px] text-[14px] font-normal text-[#999]">
                                    No products found
                                  </span>
                                </li>
                              )}
                            </ul>
                          </li>
                        ))
                      ) : (
                        <li className="relative m-0 flex items-center px-[15px] py-[5px]">
                          <span className="font-Poppins py-[5px] text-[14px] font-normal leading-[22px] tracking-[0.03rem] text-[#999]">
                            No categories found
                          </span>
                        </li>
                      )}
                    </ul>
                  </li>
                );
              }

              return (
                <li
                  key={link.href}
                  className="nav-item mr-[35px] flex items-center font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]"
                >
                  <Link
                    href={link.href}
                    className="nav-link block p-[0] font-Poppins text-[15px] font-medium leading-[28px] tracking-[0.03rem] text-[#3d4750] hover:text-[#0f766e]"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="inner-select flex w-[180px] items-center rounded-[10px] border border-[#eee] bg-white">
            <i className="ri-map-pin-line m-[10px] text-[25px] text-[#0f766e]" />
            <select className="w-full bg-transparent font-Poppins text-[14px] font-normal leading-[28px] tracking-[0.03rem] text-[#686e7d] outline-none">
              {LocationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/80"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`bb-mobile-menu fixed left-0 top-0 z-[70] flex h-full w-[340px] max-w-[90%] flex-col overflow-auto bg-white px-[20px] pb-[20px] pt-[15px] transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bb-menu-title flex w-full flex-wrap justify-between pb-[10px]">
          <span className="menu_title flex items-center text-[16px] font-semibold leading-[26px] tracking-[0.02rem] text-[#3d4750]">
            2gooD Menu
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="relative border-0 bg-transparent text-[30px] leading-[1] text-red-500"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <ul>
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="mb-[12px] block rounded-[10px] border border-[#eee] p-[12px] text-[15px] font-medium capitalize leading-[28px] tracking-[0.03rem] text-[#686e7d]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}

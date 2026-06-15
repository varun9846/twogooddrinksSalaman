# UI Refinement Next.js

**User:** Anonymous  
**Created:** 6/10/2026 10:47:30  
**Updated:** 6/10/2026 10:51:45  
**Exported:** 6/10/2026 10:56:23  
**Link:** [https://chatgpt.com/c/6a290878-eee0-83ea-8e76-865b4f1a4666](https://chatgpt.com/c/6a290878-eee0-83ea-8e76-865b4f1a4666)  

## Prompt:
6/10/2026, 10:47:26 AM

Behave as senior software engineer and help me resolve an issue which is as follows :
##Context:-
i am sharing you two code files
twogooddrinks:- this is a next js project whose Frontend UI  is being built using the twogoodBlueberry file which is shared below
twogoodBlueberry:- this is a website UI HTML pages which we are basically converting into the next js project.

Tasks:-

1. i want to refine the Ui of Homepage in Next js project  to include all the content that is present in Home page Html.

2. refine the Header and Footer component in Next js project to look  like the one present in the twogoodBlueberry Html files

provide the code to be changes in Next js project 

===================================
##Instructions :-
1. Analyse the files shared with you for understanding the entire context,
2. Donot overengineer the context above, keep it simple easy and fast implementation .
3. the code should be highly optisimised, clean and reusable

[Attachment: twogoodblueberry.md]

[Attachment: twogooddrinks.md]

## Response:
6/10/2026, 10:47:27 AM

> **Checking file existence and content**
>
>
> **Reading full "twogooddrinks" file**
>
>
> **Parsing HTML from markdown file**
>
>
> **Extracting HTML sections and headings**
>
>
> **Considering HTML snippets and file citations**
>
> I need to extract header/footer HTML snippets, maybe check around specific lines. But I'm unsure about the exact citation approach since line ranges might be required. 
> I’ll probably use Python extraction, but file citations should work even without specific markers. I’ll also consider app-router and possibly involve Tailwind for styling.
>
> **Deciding on Tailwind installation and extracting content**
>
> I’m not sure if Tailwind is installed because the project seems empty. Since the Next.js implementation doesn’t include app/components files, I can’t inspect it directly. Still, I’ll provide code using the HTML content I have and maybe use BS4 to extract product names, categories, and images.
>
> **Extracting header and footer content from HTML**
>
>
> **Extracting additional content details**
>
> I might need to extract the full texts for categories, product prices, and banners to ensure I have all the necessary content. Once I have that, I can craft a clearer implementation or response, depending on the user's needs. It's important to get all the details right.
>
> **Extracting categories, products, banners, services, testimonials, blogs**
>
>
> **Considering line numbers for citations**
>
> I'm thinking I might need to include line numbers for citations, but I’m not sure if I should create them myself. If I use the file search results, they might not have lines. I'll probably search more precisely to get exact line markers for my citations to be more accurate.
>
> **Final code structure and file setup**
>
> I need to provide the code, potentially without citations or markers. There aren't any Next.js files in the project, and I should mention that. I'll offer a compact code structure with arrays and CSS. I’ll assume an app router with Tailwind and use public paths for images. I won’t overengineer this and will keep it simple yet reusable, providing the necessary files: `Header.tsx`, `Footer.tsx`, `page.tsx`, and optional `globals.css`.
>
> Thought for 1m 18s

I’ll map the current Next.js structure against the source HTML homepage, then give you minimal drop-in component/page changes instead of a large redesign.

I analyzed both uploads. The source HTML homepage includes these homepage sections: hero, wellness categories, featured picks, two banner areas, new arrivals, services, vendors, testimonials, blog/newsletter/footer content. The source header nav includes Home, Products, Wellness Journal, Shop Locator, About Us, Contact Us; footer includes logo/description/app buttons, Wellness Categories, Company, Account, and Contact columns. `twogoodblueberry.md` `twogoodblueberry.md`

One important thing: the `twogooddrinks` packed file does **not** contain actual `app/` or `components/` code content, so I cannot patch exact existing files line-by-line. It only shows the Repomix summary and an empty “Files” section. `twogooddrinks.md`  
So below is a clean drop-in implementation assuming a standard Next.js App Router project.

Before applying this, copy the Blueberry asset folder into:

```txt
public/assets
```

So images resolve like:

```txt
/assets/img/hero/hero-1.png
/assets/img/logo/logo.png
```

---

## 1. Replace / create `components/Header.tsx`

```tsx
"use client";

import Link from "next/link";
import { Menu, Search, Heart, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Wellness Journal", href: "/blog" },
  { label: "Shop Locator", href: "/about-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-100 bg-[#f8f8fb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-gray-500">
          <p>Hydrate • Heal • Feel Good</p>

          <div className="hidden items-center gap-5 md:flex">
            <Link href="/login" className="hover:text-[#6c7fd8]">
              Sign In
            </Link>
            <Link href="/register" className="hover:text-[#6c7fd8]">
              Create Account
            </Link>
            <Link href="/checkout" className="hover:text-[#6c7fd8]">
              Checkout
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5">
        <button
          type="button"
          className="rounded-lg border border-gray-200 p-2 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Link href="/" className="shrink-0">
          <img
            src="/assets/img/logo/logo.png"
            alt="2gooD"
            className="h-auto w-32"
          />
        </Link>

        <form className="hidden flex-1 items-center overflow-hidden rounded-xl border border-gray-200 bg-white md:flex">
          <input
            type="search"
            placeholder="Search wellness products..."
            className="h-12 flex-1 px-4 text-sm outline-none"
          />
          <button
            type="submit"
            className="flex h-12 w-14 items-center justify-center bg-[#6c7fd8] text-white"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/login"
            className="hidden items-center gap-2 text-sm text-gray-600 hover:text-[#6c7fd8] sm:flex"
          >
            <User size={21} />
            <span>Account</span>
          </Link>

          <Link
            href="/wishlist"
            className="relative rounded-lg border border-gray-200 p-2 text-gray-600 hover:text-[#6c7fd8]"
            aria-label="Wishlist"
          >
            <Heart size={21} />
            <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#6c7fd8] text-xs text-white">
              3
            </span>
          </Link>

          <Link
            href="/cart"
            className="relative rounded-lg border border-gray-200 p-2 text-gray-600 hover:text-[#6c7fd8]"
            aria-label="Cart"
          >
            <ShoppingBag size={21} />
            <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#6c7fd8] text-xs text-white">
              4
            </span>
          </Link>
        </div>
      </div>

      <nav className="hidden border-t border-gray-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-9 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-[#3d4750] transition hover:text-[#6c7fd8]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <aside className="h-full w-80 max-w-[85%] bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <img
                src="/assets/img/logo/logo.png"
                alt="2gooD"
                className="w-28"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-5 flex items-center overflow-hidden rounded-lg border border-gray-200">
              <input
                type="search"
                placeholder="Search..."
                className="h-11 flex-1 px-3 text-sm outline-none"
              />
              <Search size={19} className="mr-3 text-gray-500" />
            </div>

            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg border border-gray-100 px-4 py-3 text-sm font-medium text-gray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
```

---

## 2. Replace / create `components/Footer.tsx`

```tsx
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const wellnessCategories = [
  "Natural Drinking Water",
  "Jeera Wellness Drinks",
  "Herbal Infusions",
  "Flavoured Wellness Drinks",
  "Healthy Drinks",
  "Wellness Bundles",
];

const companyLinks = [
  "About us",
  "Delivery",
  "Legal Notice",
  "Terms & conditions",
  "Secure payment",
  "Contact us",
];

const accountLinks = [
  "Sign In",
  "View Cart",
  "Return Policy",
  "Become a Vendor",
  "Affiliate Program",
  "Payments",
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="mb-5 border-b border-gray-200 pb-4 text-lg font-bold text-[#3d4750]">
        {title}
      </h4>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-sm text-[#686e7d] transition hover:text-[#6c7fd8]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img
            src="/assets/img/logo/logo.png"
            alt="2gooD"
            className="mb-7 w-36"
          />

          <p className="mb-7 max-w-md text-sm leading-7 text-[#686e7d]">
            2gooD is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="#">
              <img
                src="/assets/img/app/android.png"
                alt="Android app"
                className="w-32 rounded-md"
              />
            </Link>
            <Link href="#">
              <img
                src="/assets/img/app/apple.png"
                alt="Apple app"
                className="w-32 rounded-md"
              />
            </Link>
          </div>
        </div>

        <FooterColumn title="Wellness Categories" items={wellnessCategories} />
        <FooterColumn title="Company" items={companyLinks} />
        <FooterColumn title="Account" items={accountLinks} />

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="mb-5 border-b border-gray-200 pb-4 text-lg font-bold text-[#3d4750]">
            Contact
          </h4>

          <ul className="space-y-4 text-sm leading-6 text-[#686e7d]">
            <li className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#6c7fd8]" size={18} />
              <span>971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="shrink-0 text-[#6c7fd8]" size={18} />
              <Link href="tel:+009876543210" className="hover:text-[#6c7fd8]">
                +00 9876543210
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="shrink-0 text-[#6c7fd8]" size={18} />
              <Link
                href="mailto:example@email.com"
                className="hover:text-[#6c7fd8]"
              >
                example@email.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 py-5 text-center text-sm text-[#686e7d]">
        Copyright © 2gooD all rights reserved.
      </div>
    </footer>
  );
}
```

---

## 3. Replace `app/page.tsx`

```tsx
import Link from "next/link";

const categories = [
  {
    title: "Wellness Drinks",
    desc: "Pure water & wellness drinks",
    image: "/assets/img/category/1.svg",
  },
  {
    title: "Herbal Care",
    desc: "Natural blends & soothing sips",
    image: "/assets/img/category/2.svg",
  },
  {
    title: "Jeera Drinks",
    desc: "Refreshing everyday favorites",
    image: "/assets/img/category/3.svg",
  },
  {
    title: "Healthy Drinks",
    desc: "Light bites for mindful munching",
    image: "/assets/img/category/4.svg",
  },
];

const featuredProducts = [
  {
    badge: "New",
    category: "Healthy Drink",
    title: "Roasted Trail Mix Drink Pack",
    price: "$16",
    meta: "250g Pack",
    image: "/assets/img/product/1.jpg",
  },
  {
    badge: "Hot",
    category: "Jeera Drink",
    title: "Classic Jeera Refresh Drink",
    price: "Best Seller",
    meta: "300 ml",
    image: "/assets/img/product/2.jpg",
  },
  {
    category: "Jeera Drink",
    title: "Herbal Infusion Wellness Pack",
    price: "$18",
    meta: "4 Sachets",
    image: "/assets/img/product/3.jpg",
  },
  {
    badge: "Sale",
    category: "Herbal Care",
    title: "Premium Drinking Water Pack",
    price: "In Stock",
    meta: "Pack",
    image: "/assets/img/product/4.jpg",
  },
];

const newArrivals = [
  {
    badge: "New",
    category: "Drinks",
    title: "Crunchy Seed Mix Pack",
    price: "$22",
    meta: "200g",
    image: "/assets/img/new-product/1.jpg",
  },
  {
    category: "Herbal",
    title: "Tulsi Infusion",
    price: "$6",
    oldPrice: "$8",
    meta: "20 Tea Bags",
    image: "/assets/img/new-product/11.jpg",
  },
  {
    badge: "Trend",
    category: "Leaves",
    title: "Mineral Water Bottle Pack",
    price: "$1",
    meta: "In Stock",
    image: "/assets/img/new-product/20.jpg",
  },
  {
    category: "Herbal Infusions",
    title: "Baked Millet Drink Bites",
    price: "In Stock",
    meta: "Pack",
    image: "/assets/img/new-product/4.jpg",
  },
  {
    badge: "Sale",
    category: "Botanical Beverages",
    title: "Jeera Digestive Drink Pack",
    price: "2 Left",
    meta: "6 Bottles",
    image: "/assets/img/new-product/5.jpg",
  },
  {
    category: "Fruit",
    title: "Chamomile Herbal Blend",
    price: "$17",
    meta: "25 Tea Bags",
    image: "/assets/img/new-product/6.jpg",
  },
  {
    category: "Botanical Beverages",
    title: "Cumin Seed Wellness Mix",
    price: "$29",
    oldPrice: "$31",
    meta: "20 Tea Bags",
    image: "/assets/img/new-product/7.jpg",
  },
  {
    category: "Vegetable",
    title: "Natural Lemon Herbal Cooler",
    price: "$10",
    meta: "500 ml",
    image: "/assets/img/new-product/8.jpg",
  },
];

const services = [
  {
    title: "Free Shipping",
    desc: "Free shipping on all US order or above $200",
    image: "/assets/img/services/1.png",
  },
  {
    title: "24x7 Support",
    desc: "Contact us 24 hours a day, 7 days a week",
    image: "/assets/img/services/2.png",
  },
  {
    title: "30 Days Return",
    desc: "Simply return it within 30 days for an exchange",
    image: "/assets/img/services/3.png",
  },
  {
    title: "Payment Secure",
    desc: "Contact us 24 hours a day, 7 days a week",
    image: "/assets/img/services/4.png",
  },
];

const vendors = [
  {
    name: "Mira Fashion Pvt. Ltd.",
    sales: "Sales - 587",
    image: "/assets/img/vendors/vendor-1.png",
  },
  {
    name: "Eelna Fashion Pvt. Ltd.",
    sales: "Sales - 428",
    image: "/assets/img/vendors/vendor-2.jpg",
  },
  {
    name: "Mario Fashion Pvt. Ltd.",
    sales: "Sales - 1024",
    image: "/assets/img/vendors/vendor-3.jpg",
  },
  {
    name: "Maria Fashion Pvt. Ltd.",
    sales: "Sales - 210",
    image: "/assets/img/vendors/vendor-4.jpg",
  },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Wellness Customer",
    image: "/assets/img/testimonials/1.png",
    quote:
      "2gooD has made healthy choices much easier for me. The jeera drinks feel refreshing, the herbal infusions are soothing, and the overall quality feels truly wellness-focused.",
  },
  {
    name: "Neha Kapoor",
    role: "Lifestyle Buyer",
    image: "/assets/img/testimonials/2.png",
    quote:
      "I love that 2gooD is more than just an online store. The website helps me discover wellness products and shop in a simple, convenient way.",
  },
  {
    name: "Omar Hassan",
    role: "Returning Customer",
    image: "/assets/img/testimonials/3.png",
    quote:
      "From natural drinking water to healthy drinks, 2gooD brings together products that fit perfectly into my daily routine.",
  },
];

const blogs = [
  {
    date: "June 30, 2024",
    tag: "Organic",
    title: "Best Sellers:- BlueBerry Mojito",
    image: "/assets/img/blog/7.jpg",
  },
  {
    date: "June 29, 2023",
    tag: "Organic",
    title: "Best Sellers:- Mint Herbal infusion",
    image: "/assets/img/blog/8.jpg",
  },
  {
    date: "Jan 10, 2022",
    tag: "Organic",
    title: "Best Sellers:- Ginger Jeera Drink",
    image: "/assets/img/blog/9.jpg",
  },
  {
    date: "Feb 12, 2022",
    tag: "Organic",
    title: "Best Sellers:- Lemon Jeera Drink",
    image: "/assets/img/blog/10.jpg",
  },
];

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-bold text-[#3d4750] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-7 text-[#686e7d]">{subtitle}</p>
      )}
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: {
    badge?: string;
    category: string;
    title: string;
    price: string;
    oldPrice?: string;
    meta: string;
    image: string;
  };
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-[#f8f8fb]">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#6c7fd8] px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#6c7fd8]">
          {product.category}
        </p>

        <h3 className="mb-4 line-clamp-2 text-base font-semibold text-[#3d4750]">
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-[#3d4750]">{product.price}</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>
          <span className="text-sm text-[#686e7d]">{product.meta}</span>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="overflow-hidden bg-[#f8f8fb]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 font-medium text-[#6c7fd8]">
              Hydrate • Heal • Feel Good
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#3d4750] md:text-6xl">
              Discover 2gooD Wellness Products for Everyday Living
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#686e7d]">
              Shop pure drinking water, flavorful jeera drinks, soothing herbal
              infusions, and better-for-you beverages designed for a healthier
              daily routine.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-xl bg-[#6c7fd8] px-7 py-3 font-semibold text-white transition hover:bg-[#5667c8]"
              >
                Shop Now
              </Link>
              <Link
                href="/about-us"
                className="rounded-xl border border-gray-200 bg-white px-7 py-3 font-semibold text-[#3d4750] transition hover:border-[#6c7fd8] hover:text-[#6c7fd8]"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {["100% Natural Choices", "Fresh Daily Wellness", "Pure Hydration"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white p-4 text-sm font-semibold text-[#3d4750] shadow-sm"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-[#dfe5ff]" />
            <img
              src="/assets/img/hero/hero-1.png"
              alt="2gooD wellness drinks"
              className="relative mx-auto w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle
          title="Shop by Wellness"
          subtitle="Browse healthy drinks, herbal care, jeera drinks, and wellness-first daily products."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="mx-auto mb-5 h-16 w-16"
              />
              <h3 className="mb-2 text-lg font-bold text-[#3d4750]">
                {category.title}
              </h3>
              <p className="text-sm text-[#686e7d]">{category.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            title="Featured wellness picks"
            subtitle="Popular 2gooD products picked for everyday hydration and wellness routines."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-[#eef2ff] p-8">
          <img
            src="/assets/img/banner-one/one.jpg"
            alt="Healthy drinks"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-bold text-[#3d4750]">
              Healthy Drinks & Smart Bites
            </h3>
            <p className="mt-3 text-[#686e7d]">
              Wholesome drinking for busy days
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#3d4750] shadow-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#fff6ed] p-8">
          <img
            src="/assets/img/banner-one/two.jpg"
            alt="Pure water and herbal drinks"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-bold text-[#3d4750]">
              Pure Water & Herbal Drinks
            </h3>
            <p className="mt-3 text-[#686e7d]">
              Daily hydration with natural goodness
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#3d4750] shadow-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[url('/assets/img/banner-two/banner.png')] bg-cover bg-center py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-lg rounded-3xl bg-white/90 p-8 shadow-sm backdrop-blur">
            <p className="font-semibold text-[#6c7fd8]">Wellness Offer</p>
            <h3 className="mt-3 text-4xl font-bold text-[#3d4750]">
              Natural Drinks for Better Days
            </h3>
            <Link
              href="/products"
              className="mt-7 inline-flex rounded-xl bg-[#6c7fd8] px-7 py-3 font-semibold text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle
          title="New Wellness Arrivals"
          subtitle="Freshly added drinks, herbal blends, and better-for-you essentials."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={`${product.title}-${product.image}`} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 h-14 w-14"
              />
              <h3 className="mb-2 text-lg font-bold text-[#3d4750]">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-[#686e7d]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle title="Top Vendors" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vendors.map((vendor) => (
            <article
              key={vendor.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                className="mx-auto mb-5 h-20 w-20 rounded-full object-cover"
              />
              <h3 className="font-bold text-[#3d4750]">{vendor.name}</h3>
              <p className="mt-2 text-sm text-[#686e7d]">{vendor.sales}</p>
              <p className="mt-3 text-xs text-[#686e7d]">
                Fruits | Drinks | Wellness
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="Testimonials" />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-[#3d4750]">{item.name}</h3>
                    <p className="text-sm text-[#686e7d]">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-[#686e7d]">“{item.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle title="Wellness Journal" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <p className="mb-3 text-xs uppercase tracking-wide text-[#6c7fd8]">
                  {blog.date} - {blog.tag}
                </p>
                <h3 className="font-semibold leading-7 text-[#3d4750]">
                  {blog.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl bg-[#6c7fd8] px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">Newsletter.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Subscribe for wellness product updates, offers, and healthy daily
            living tips.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-xl px-4 text-sm text-[#3d4750] outline-none"
            />
            <button
              type="submit"
              className="h-12 rounded-xl bg-white px-7 font-semibold text-[#3d4750]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
```

---

## 4. Ensure layout uses Header and Footer

Update `app/layout.tsx` like this:

```tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "2gooD Wellness Store",
  description: "Wellness drinks, herbal infusions, jeera drinks, and healthy essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 5. Required dependency

The code uses icons from `lucide-react`.

```bash
npm install lucide-react
```

If you do not want any new dependency, replace those icons with simple text or SVGs.

---

## Notes

Use this as the direct implementation path:

```txt
public/assets              ← copy from twogoodBlueberry assets
components/Header.tsx      ← replace/create
components/Footer.tsx      ← replace/create
app/page.tsx               ← replace homepage
app/layout.tsx             ← ensure Header/Footer wrapping
```

This keeps the conversion simple, reusable, and avoids importing the full old HTML template scripts/jquery/plugins into Next.js.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
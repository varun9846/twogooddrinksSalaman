"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { productsService, type ProductApiResponse } from "@/lib/services/productsService";

const categories = [
  {
    title: "Wellness Drinks",
    subtitle: "Pure water & wellness drinks",
    icon: "/assets/img/category/1.svg",
    color: "bg-[#fff1f1]",
  },
  {
    title: "Herbal Care",
    subtitle: "Natural blends & soothing sips",
    icon: "/assets/img/category/2.svg",
    color: "bg-[#e9fff8]",
  },
  {
    title: "Jeera Drinks",
    subtitle: "Refreshing everyday favorites",
    icon: "/assets/img/category/3.svg",
    color: "bg-[#f3f1ff]",
  },
  {
    title: "Healthy Snacks",
    subtitle: "Light bites for mindful tasting",
    icon: "/assets/img/category/4.svg",
    color: "bg-[#fff9e6]",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6c7fd8]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}

function HomeProductCard({ product }: { product: ProductApiResponse }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden border-b border-slate-100 bg-[#f8f8fb]">
        {product.Badge ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#6c7fd8] px-3 py-1 text-xs font-semibold text-white">
            {product.Badge}
          </span>
        ) : null}

        <Link href={`/shop/${product.id}`}>
          <img
            src={product.image}
            alt={product.product_name}
            className="h-64 w-full object-contain p-5 transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
          {product.product_category}
        </p>

        <h3 className="mt-3 line-clamp-1 text-xl font-semibold text-slate-900">
          {product.product_name}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600">
          {product.product_description}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <span className="text-lg font-semibold text-slate-900">
              {product.price}
            </span>
            <p className="mt-1 text-xs text-slate-500">Stock: {product.Stock}</p>
          </div>

          <Link
            href={`/shop/${product.id}`}
            className="rounded-full bg-[#6c7fd8] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5768b0] hover:shadow-lg"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [products, setProducts] = useState<ProductApiResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        const data = await productsService.getAllProducts();
        if (!cancelled && data?.success && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  const featuredProducts = useMemo(() => products.slice(0, 4), [products]);
  const newArrivals = useMemo(() => products.slice(8, 12), [products]);

  return (
    <main className="pb-16">
      <section className="overflow-hidden bg-[#f6f7ff]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6c7fd8]">
              Hydrate • Heal • Feel Good
            </p>

            <h1 className="mb-[22px] text-[40px] font-bold leading-[1.12] text-[#3d4750] sm:text-[46px] lg:text-[52px]">
              Discover <span className="text-[#6c7fd8]">2gooD Wellness</span>{" "}
              Products for Everyday Living
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Shop pure drinks, herbal infusions, seasonal wellness picks, and
              mindful essentials made for a brighter daily routine.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-[#6c7fd8] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5768b0] hover:shadow-lg"
              >
                Shop Now
              </Link>

              <Link
                href="/about-us"
                className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#6c7fd8] hover:text-[#6c7fd8] hover:shadow-lg"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative flex min-w-0 items-center justify-center">
            <div className="absolute -right-8 top-8 h-[520px] w-[520px] rounded-full bg-[#eef1ff] opacity-60 blur-3xl" />
            <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              <img
                src="/assets/img/hero/hero-1.png"
                alt="2gooD wellness products"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Shop by wellness"
          title="Browse healthy drinks, herbal care, jeera blends, and mindful essentials."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              href="/shop"
              key={category.title}
              className={`${category.color} group rounded-[28px] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <img
                src={category.icon}
                alt={category.title}
                className="mx-auto mb-4 h-14 w-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <h3 className="text-lg font-semibold text-slate-900">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{category.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Featured wellness picks"
            title="Customer favorites for taste, hydration, and everyday health."
          />

          {loading ? (
            <p className="text-center text-sm text-slate-500">Loading featured products…</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <HomeProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className="inline-flex rounded-full bg-[#6c7fd8] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5768b0] hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 md:px-6">
        <article className="group relative overflow-hidden rounded-[30px] bg-[#edf1ff] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="/assets/img/banner-one/one.jpg"
            alt="Healthy drinks"
            className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Healthy Drinks & Smart Bites
            </h3>
            <p className="mt-3 text-slate-600">
              Wholesome picks for busy days and mindful routines.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c7fd8] hover:text-white"
            >
              Shop Now
            </Link>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-[30px] bg-[#fff7ea] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="/assets/img/banner-one/two.jpg"
            alt="Pure water and herbal drinks"
            className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Pure Water & Herbal Drinks
            </h3>
            <p className="mt-3 text-slate-600">
              Daily hydration that feels fresh, clean, and uplifting.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c7fd8] hover:text-white"
            >
              Shop Now
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="New wellness arrivals"
          title="Freshly added drinks, herbs, and healthier essentials."
        />

        {loading ? (
          <p className="text-center text-sm text-slate-500">Loading new arrivals…</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {newArrivals.map((product) => (
              <HomeProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 md:px-6">
        <div className="group relative overflow-hidden rounded-[24px] bg-[#6c7fd8] p-8 shadow-[0_15px_35px_rgba(108,127,216,0.25)] md:p-14">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-5">
            <div className="text-center lg:col-span-3 lg:text-left">
              <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-white/80">
                Stay Connected
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-[0.02rem] text-white md:text-4xl">
                Subscribe to our Newsletter
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-[24px] text-white/90">
                Subscribe for wellness updates, best sellers, and fresh,
                exclusive shopping offers right in your inbox.
              </p>
            </div>

            <div className="w-full lg:col-span-2">
              <form className="flex w-full flex-col gap-3 rounded-none sm:flex-row sm:items-center sm:gap-2.5 sm:rounded-[12px] sm:border sm:border-white/20 sm:bg-white/10 sm:p-1.5 sm:backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-[10px] border border-white/20 bg-white px-5 text-[14px] text-[#2b2b2d] placeholder-[#686e7d] outline-none"
                  required
                />

                <button
                  type="submit"
                  className="h-12 rounded-[10px] bg-[#2b2b2d] px-7 text-[14px] font-semibold tracking-[0.03rem] text-white transition-all duration-300 hover:bg-white hover:text-[#6c7fd8]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
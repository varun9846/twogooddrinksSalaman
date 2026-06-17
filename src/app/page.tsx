"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AboutSection from "@/components/common/AboutSection";
import { homeContent } from "@/lib/site-content";
import {
  productsService,
  type ProductApiResponse,
} from "@/lib/services/productsService";

const categories = [
  {
    title: "Packaged Drinking Water",
    subtitle: "Fresh sealed water for daily hydration",
    icon: "/assets/img/category/1.svg",
    color: "bg-[#fff1f1]",
  },
  {
    title: "Home Delivery",
    subtitle: "Bottles and jars delivered to your door",
    icon: "/assets/img/category/2.svg",
    color: "bg-[#e9fff8]",
  },
  {
    title: "Office Hydration",
    subtitle: "Reliable bulk water supply for teams",
    icon: "/assets/img/category/3.svg",
    color: "bg-[#f3f1ff]",
  },
  {
    title: "Bulk Orders",
    subtitle: "500ml, 1L packs, and 20L jars",
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
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
      ) : null}
    </div>
  );
}

function HomeProductCard({ product }: { product: ProductApiResponse }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden border-b border-slate-100 bg-[#f8f8fb]">
        {product.Badge ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#0f766e] px-3 py-1 text-xs font-semibold text-white">
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
            <p className="mt-1 text-xs text-slate-500">
              Stock: {product.Stock}
            </p>
          </div>
          <Link
            href={`/shop/${product.id}`}
            className="rounded-full bg-[#0f766e] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5768b0] hover:shadow-lg"
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
    
      <section className="relative overflow-hidden bg-[#f6f7ff]">
        <div className="relative min-h-[430px] lg:min-h-[460px]">
          <img
            src={homeContent.hero.image}
            alt="2goodplus packaged drinking water"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />

          {/* dark/white overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-center px-4 py-16 md:px-6 lg:min-h-[460px]">
            <div className="max-w-2xl py-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
                {homeContent.hero.eyebrow}
              </p>

              <h1 className="mb-6 text-[42px] font-bold leading-[1.12] text-[#3d4750] sm:text-[52px] lg:text-[68px]">
               <span className="text-[#0f766e]">  Pure Water.Pure Life.</span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-slate-700">
                {homeContent.hero.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href={homeContent.hero.ctaHref}
                  className="rounded-full bg-[#0f766e] px-5 py-4 text-base font-semibold !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c5a52] hover:text-white"
                >
                  {homeContent.hero.ctaLabel}
                </Link>

                <Link
                  href={homeContent.hero.secondaryCtaHref}
                  className="rounded-full border border-[#0f766e]/30 bg-white px-5 py-4 text-base font-semibold text-[#0f766e] transition-all duration-300 hover:-translate-y-1 hover:border-[#0f766e] hover:bg-[#0f766e] hover:text-white hover:shadow-xl"
                >
                  {homeContent.hero.secondaryCtaLabel} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-8 max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 rounded-[28px] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.trustStats.map((stat) => (
            <div
              key={stat.title}
              className="flex items-center gap-4 rounded-[20px] border border-slate-100 bg-white p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0f766e]/10 text-xl text-[#0f766e]">
                {stat.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {stat.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Water solutions"
          title="Packaged drinking water for homes, offices, and everyday use."
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

      <section className="bg-white py-4">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow={homeContent.whyChoose.eyebrow}
            title={homeContent.whyChoose.title}
            text={homeContent.whyChoose.description}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {homeContent.whyChoose.cards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-slate-100 bg-[#f8fafc] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0f766e] text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutSection variant="home" />

      {/* <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Featured products"
            title="Order fresh 2goodplus drinking water for daily hydration."
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
              className="inline-flex rounded-full bg-[#0f766e] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5768b0] hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section> */}

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 md:px-6">
        <article className="group relative overflow-hidden rounded-[30px] bg-[#edf1ff] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="/assets/img/banner-one/one.jpg"
            alt="Packaged drinking water for home"
            className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Fresh Water for Your Family
            </h3>
            <p className="mt-3 text-slate-600">
              Clean packaged drinking water sealed fresh for everyday trust.
            </p>
            <Link
              href="/about-us"
              className="mt-6 inline-flex rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold !text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c5a52] hover:text-white"
            >
              Order Now
            </Link>
          </div>
        </article>
        <article className="group relative overflow-hidden rounded-[30px] bg-[#fff7ea] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="/assets/img/banner-one/two.jpg"
            alt="Bulk packaged water delivery"
            className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Bulk Supply for Offices
            </h3>
            <p className="mt-3 text-slate-600">
              Need regular water delivery for your office or business? We can
              help.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f766e] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </article>
      </section>

      {/* <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="More from 2goodplus"
          title="Freshly added water packs and hydration essentials."
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
      </section> */}

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 md:px-6">
        <div className="group relative overflow-hidden rounded-[24px] bg-[#0f766e] p-8 shadow-[0_15px_35px_rgba(108,127,216,0.25)] md:p-14">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-5">
            <div className="text-center lg:col-span-3 lg:text-left">
              <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-white/80">
                Stay Connected
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-[0.02rem] text-white md:text-4xl">
                Need water delivered regularly?
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-[24px] text-white/90">
                Send us your requirement for home, office, or bulk supply and
                our team will get back to you quickly.
              </p>
            </div>
            <div className="w-full text-center lg:col-span-2 lg:text-right">
              <Link
                href="/contact-us"
                className="inline-flex rounded-[10px] bg-white px-7 py-3 text-[14px] font-bold tracking-[0.03rem] text-[#0f766e] transition-all duration-300 hover:bg-white/90"
              >
                Contact 2goodplus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

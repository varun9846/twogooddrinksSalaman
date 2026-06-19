"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AboutSection from "@/components/common/AboutSection";
import { homeContent } from "@/lib/site-content";
import DeliveryCoverage from "@/components/common/DeliveryCoverage";
import WaterWaveDivider from "@/components/common/WaterWaveDivider";
import WaterDroplets from "@/components/common/WaterDroplets";
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

const bulkOrderItems = [
  "Corporate Orders",
  "Events & Weddings",
  "Hotels & Restaurants",
  "Retailers & Distributors",
  "Schools & Institutions",
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
    <div className="mx-auto mb-10 max-w-2xl px-4 text-center sm:px-0">
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
    <main className="overflow-hidden pb-6">
      <section className="water-ripple relative isolate overflow-hidden bg-[#f6f7ff]">
        <WaterDroplets />
        <div className="relative min-h-[unset] sm:min-h-[420px] lg:min-h-[500px]">
          <img
            src={homeContent.hero.image}
            alt="2goodplus packaged drinking water"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-35 sm:object-center sm:opacity-100"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/82 to-white/55 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/65 sm:to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[unset] max-w-7xl items-center px-4 py-10 sm:min-h-[420px] sm:px-6 sm:py-14 lg:min-h-[500px] lg:py-16">
            <div className="w-full max-w-[620px] text-center sm:text-left">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0f766e] sm:mb-4 sm:text-sm">
                {homeContent.hero.eyebrow}
              </p>

              <h1 className="mb-4 text-[clamp(32px,11vw,44px)] font-bold leading-[1.08] text-[#3d4750] sm:text-[54px] lg:text-[68px]">
                <span className="text-[#0f766e]">Pure Water. Pure Life.</span>
              </h1>

              <p className="mx-auto max-w-xl text-sm leading-7 text-slate-700 sm:mx-0 sm:text-base sm:leading-8 lg:text-lg">
                {homeContent.hero.description}
              </p>

              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href={homeContent.hero.ctaHref}
                  className="water-ripple relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#0f766e] px-6 py-3.5 text-sm font-semibold !text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c5a52] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  {homeContent.hero.ctaLabel}
                </Link>

                <Link
                  href={homeContent.hero.secondaryCtaHref}
                  className="water-ripple relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-[#0f766e]/30 bg-white/95 px-6 py-3.5 text-sm font-semibold !text-[#0f172a] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f766e] hover:!text-white sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  {homeContent.hero.secondaryCtaLabel} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaterWaveDivider />

      <section className="relative z-10 mx-auto mt-2 max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 rounded-[28px] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.trustStats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-start gap-4 rounded-[20px] border border-slate-100 bg-white p-4 sm:flex-row sm:items-center"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0f766e]/10 text-xl text-[#0f766e]">
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

      <WaterWaveDivider />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Water solutions"
          title="Packaged drinking water for homes, offices, and everyday use."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              href="/shop"
              key={category.title}
              className={`${category.color} group rounded-[28px] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7`}
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

      <WaterWaveDivider />

      <section className="relative overflow-hidden bg-white py-4">
        <WaterDroplets />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow={homeContent.whyChoose.eyebrow}
            title={homeContent.whyChoose.title}
            text={homeContent.whyChoose.description}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.whyChoose.cards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-slate-100 bg-[#f8fafc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7"
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

      <WaterWaveDivider />
      <AboutSection variant="home" />
      <WaterWaveDivider />
      <DeliveryCoverage />
      <WaterWaveDivider />

      <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-16 md:px-6 md:py-20">
        <WaterDroplets />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
                Bulk Orders
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Need bulk quantities for your business or event?
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Ideal for hotels, restaurants, institutions, offices, retailers,
                and distributors. Bulk order rates and dealership pricing are
                negotiable based on quantity requirements.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact-us"
                  className="water-ripple relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#0f766e] px-7 py-4 text-sm font-bold !text-white shadow-[0_12px_30px_rgba(15,118,110,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c5a52] sm:w-auto"
                >
                  For Bulk Orders contact us
                </Link>
                <a
                  href="tel:+919967399880"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#0f766e]/25 bg-white px-7 py-4 text-sm font-bold text-[#0f766e] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8f7f4] sm:w-auto"
                >
                  Call +91 99673 99880
                </a>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#0f766e] p-6 text-white shadow-[0_20px_55px_rgba(15,118,110,0.22)] sm:p-8 lg:p-10">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                    Bulk Order Information
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Customized pricing for
                  </h3>
                </div>
                <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl sm:flex">
                  💧
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {bulkOrderItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0f766e]">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-sm leading-7 text-white/85">
                  Contact us with your quantity requirement, delivery location,
                  and frequency. Our team will share a custom quotation for your
                  order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaterWaveDivider />

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
        <article className="group relative overflow-hidden rounded-[30px] bg-[#edf1ff] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
          <img
            src="/assets/img/banner-one/one.jpg"
            alt="Packaged drinking water for home"
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative mx-auto max-w-xl py-10 px-5 sm:px-7">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Fresh Water for Your Family
            </h3>
            <p className="mt-3 text-slate-600 sm:text-base">
              Clean packaged drinking water sealed fresh for everyday trust.
            </p>
            <Link
              href="/shop"
              className="water-ripple relative mt-6 inline-flex overflow-hidden rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c5a52]"
            >
              Order Now
            </Link>
          </div>
        </article>
        <article className="group relative overflow-hidden rounded-[30px] bg-[#fff7ea] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
          <img
            src="/assets/img/banner-one/two.jpg"
            alt="Bulk packaged water delivery"
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative mx-auto max-w-xl py-10 px-5 sm:px-7">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Bulk Supply for Offices
            </h3>
            <p className="mt-3 text-slate-600 sm:text-base">
              Need regular water delivery for your office or business? We can
              help.
            </p>
            <Link
              href="/contact-us"
              className="water-ripple relative mt-6 inline-flex overflow-hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f766e] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 md:px-6">
        <div className="water-ripple group relative overflow-hidden rounded-[24px] bg-[#0f766e] p-8 shadow-[0_15px_35px_rgba(108,127,216,0.25)] md:p-14">
          <WaterDroplets />
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
                className="water-ripple relative inline-flex overflow-hidden rounded-[10px] bg-white px-7 py-3 text-[14px] font-bold tracking-[0.03rem] text-[#0f766e] transition-all duration-300 hover:bg-white/90"
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

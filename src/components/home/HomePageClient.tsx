"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DeliveryCoverage from "@/components/common/DeliveryCoverage";
import SectionHeading from "@/components/common/SectionHeading";
import WaterDroplets from "@/components/common/WaterDroplets";
import WaterWaveDivider from "@/components/common/WaterWaveDivider";
import ProductCard from "@/components/shop/ProductCard";
import { productsService } from "@/lib/services/productsService";
import { homeContent } from "@/lib/site-content";
import type { ProductDto } from "@/types/product";

const categories = [
  {
    title: "Packaged Drinking Water",
    subtitle: "Fresh sealed water bottles",
    icon: "/assets/img/category/1.svg",
    href: "/shop?category=Packaged%20Drinking%20Water",
  },
  {
    title: "Healthy Drinks",
    subtitle: "Refreshing daily wellness drinks",
    icon: "/assets/img/category/7.svg",
    href: "/shop?category=Healthy%20Drinks",
  },
  {
    title: "Office Hydration",
    subtitle: "Light herbal hydration options",
    icon: "/assets/img/category/3.svg",
    href: "/shop?category=Herbal%20Infusions",
  },
  {
    title: "Bulk Orders",
    subtitle: "Hotels, offices, and events",
    icon: "/assets/img/category/4.svg",
    href: "/contact-us",
  },
  {
    title: "Home Delivery",
    subtitle: "Doorstep hydration support",
    icon: "/assets/img/category/2.svg",
    href: "/contact-us",
  },
];

const services = [
  {
    icon: "ri-water-flash-line",
    title: "Purified Water",
    text: "Clean packaged drinking water processed for consistent taste, freshness, and daily trust.",
  },
  {
    icon: "ri-truck-line",
    title: "Fast Delivery",
    text: "Doorstep delivery support for homes, offices, hotels, restaurants, and institutional orders.",
  },
  {
    icon: "ri-store-2-line",
    title: "Bulk Pricing",
    text: "Negotiable quantity-based rates for retailers, distributors, events, and corporate purchases.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Quality Focused",
    text: "Reliable handling, sealed packaging, and consistent quality control for every supply requirement.",
  },
];

const testimonials = [
  {
    name: "Hotel Partner",
    role: "Hospitality order",
    text: "The delivery support is dependable and the team is quick with bulk requirements.",
  },
  {
    name: "Office Buyer",
    role: "Corporate supply",
    text: "Simple ordering, clean packaging, and regular supply helped us manage daily hydration better.",
  },
  {
    name: "Event Customer",
    role: "Wedding order",
    text: "They handled large quantities smoothly and gave clear pricing based on our requirement.",
  },
];

const bulkOrderItems = [
  "Corporate Orders",
  "Events & Weddings",
  "Hotels & Restaurants",
  "Retailers & Distributors",
  "Schools & Institutions",
];

export default function HomePageClient() {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        const data = await productsService.getAllProducts();
        if (!cancelled && data?.success && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Failed to load home products", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  const featuredProducts = useMemo(() => products.slice(0, 8), [products]);
  const newProducts = useMemo(() => products.slice(4, 12), [products]);

  return (
    <main className="overflow-hidden">
      <section
        className="water-ripple group relative isolate overflow-hidden bg-[#f6f7ff] font-Poppins"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-once="true"
      >
        <WaterDroplets />

        {/* Soft animated background glow */}
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#0f766e]/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl animate-pulse" />

        {/* Floating water bubbles */}
        <span className="absolute left-[8%] top-[22%] hidden h-5 w-5 rounded-full border border-[#0f766e]/20 bg-white/40 backdrop-blur-sm animate-bounce sm:block" />
        <span className="absolute right-[16%] top-[18%] hidden h-8 w-8 rounded-full border border-[#0f766e]/20 bg-white/30 backdrop-blur-sm lg:block" />
        <span className="absolute bottom-[18%] left-[44%] hidden h-4 w-4 rounded-full border border-[#0f766e]/20 bg-white/40 backdrop-blur-sm md:block" />

        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          speed={900}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div className="relative min-h-[unset] sm:min-h-[420px] lg:min-h-[500px]">
              <img
                src={homeContent.hero.image}
                alt="2goodplus packaged drinking water"
                className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-35 transition-transform duration-[1800ms] ease-out group-hover:scale-105 sm:object-center sm:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/82 to-white/55 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/65 sm:to-transparent" />

              {/* Shine animation on hover */}
              <div className="pointer-events-none absolute inset-y-0 left-[-45%] hidden w-[35%] rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%] lg:block" />

              <div className="relative z-10 mx-auto flex min-h-[unset] max-w-7xl items-center px-4 py-10 sm:min-h-[420px] sm:px-6 sm:py-14 lg:min-h-[500px] lg:py-16">
                <div
                  className="w-full max-w-[620px] text-center sm:text-left"
                  data-aos="fade-right"
                  data-aos-duration="900"
                  data-aos-delay="150"
                  data-aos-once="true"
                >
                  <p className="animate__animated animate__fadeInDown mb-3 font-Poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0f766e] sm:mb-4 sm:text-sm">
                    {homeContent.hero.eyebrow}
                  </p>

                  <h1 className="animate__animated animate__fadeInUp mb-4 font-quicksand text-[clamp(32px,11vw,44px)] font-bold leading-[1.08] text-[#3d4750] sm:text-[54px] lg:text-[68px]">
                    <span className="relative inline-block text-[#0f766e]">
                      Pure Water. Pure Life.
                      <span className="absolute -bottom-2 left-1/2 h-[4px] w-[70%] -translate-x-1/2 rounded-full bg-[#0f766e]/20 sm:left-0 sm:translate-x-0" />
                    </span>
                  </h1>

                  <p
                    className="mx-auto max-w-xl font-Poppins text- leading-7 text-slate-700 sm:mx-0 sm:text-base sm:leading-8 lg:text-lg"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    {homeContent.hero.description}
                  </p>

                  <div
                    className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
                    data-aos="zoom-in"
                    data-aos-delay="450"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <Link
                      href={homeContent.hero.ctaHref}
                      className="water-ripple relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#0f766e] px-6 py-3.5 font-Poppins text-sm font-semibold !text-white shadow-[0_12px_30px_rgba(15,118,110,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#0c5a52] hover:shadow-[0_18px_40px_rgba(15,118,110,0.35)] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                    >
                      <span className="relative z-10 font-Poppins">
                        {homeContent.hero.ctaLabel}
                      </span>

                      <i className="ri-arrow-right-line relative z-10 ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href={homeContent.hero.secondaryCtaHref}
                      className="water-ripple relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-[#0f766e]/30 bg-white/95 px-6 py-3.5 font-Poppins text-sm font-semibold text-[#0f172a] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#0f766e] hover:bg-[#0f766e] hover:!text-white sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                    >
                      <span className="relative z-10 font-Poppins">
                        {homeContent.hero.secondaryCtaLabel}
                      </span>

                      <i className="ri-arrow-right-line relative z-10 ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Bottom wave divider */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-[42px] w-full"
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,48 C180,90 360,10 540,42 C720,74 900,92 1080,48 C1260,4 1350,28 1440,54 L1440,90 L0,90 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      <section className="section-category mt-[10px] mb-[50px] max-[1199px]:mb-[35px]">
        <div className="bb-container">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2400, disableOnInteraction: false }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={category.title}>
                <Link
                  href={category.href}
                  className="bb-card group flex h-full flex-col items-center p-[25px] text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="mb-[18px] flex h-[70px] w-[70px] items-center justify-center rounded-[20px] bg-[#0f766e]/10 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="h-[42px] w-[42px] object-contain"
                    />
                  </div>
                  <h3 className="font-quicksand text-[17px] font-bold text-[#3d4750]">
                    {category.title}
                  </h3>
                  <p className="mt-[8px] font-Poppins text-[13px] font-light leading-[22px] text-[#686e7d]">
                    {category.subtitle}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <WaterWaveDivider />

      <section className="section-deal overflow-hidden py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container">
          <div className="grid gap-[24px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div
              className="rounded-[24px] bg-[#0f766e] p-[35px] text-white"
              data-aos="fade-right"
            >
              <p className="mb-[8px] font-Poppins text-[14px] uppercase tracking-[0.18rem] text-white/80">
                Need Bulk Quantities?
              </p>
              <h2 className="font-quicksand text-[34px] font-bold leading-[1.2] max-[767px]:text-[28px]">
                Bulk order rates and dealership pricing are negotiable.
              </h2>
              <p className="mt-[16px] font-Poppins text-[15px] leading-[28px] text-white/85">
                Ideal for hotels, restaurants, institutions, offices, retailers,
                and distributors. Share your quantity requirement and get a
                custom quotation.
              </p>
              <div className="mt-[22px] grid gap-[10px] sm:grid-cols-2">
                {bulkOrderItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-[8px] font-Poppins text-[14px]"
                  >
                    <i className="ri-checkbox-circle-line text-[18px]" /> {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact-us"
                className="mt-[28px] inline-flex rounded-[10px] bg-white px-[22px] py-[11px] font-Poppins text-[14px] font-semibold !text-[#0f766e] transition hover:-translate-y-1 hover:bg-[#e7fffb]"
              >
                For Bulk Orders Contact Us
              </Link>
            </div>
            <div className="grid gap-[20px] sm:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="bb-card p-[24px]"
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                >
                  <div className="mb-[18px] flex h-[54px] w-[54px] items-center justify-center rounded-[16px] bg-[#0f766e]/10 text-[#0f766e]">
                    <i className={`${service.icon} text-[28px]`} />
                  </div>
                  <h3 className="font-quicksand text-[19px] font-bold text-[#3d4750]">
                    {service.title}
                  </h3>
                  <p className="mt-[10px] font-Poppins text-[14px] font-light leading-[26px] text-[#686e7d]">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-new-product bg-white py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container">
          <SectionHeading
            eyebrow="Fresh products"
            title="Shop our hydration range"
            text="Blueberry-style product cards with your existing dynamic product API and teal brand theme."
          />
          {loading ? (
            <div className="flex justify-center py-[50px]">
              <span className="bb-loader-ring" />
            </div>
          ) : featuredProducts.length ? (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={24}
              className="bb-swiper pb-[45px]"
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id} className="h-auto pb-[8px]">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="rounded-[20px] border border-[#eee] bg-[#f8f8fb] p-[40px] text-center font-Poppins text-[#686e7d]">
              No products found. Add products in your database to show them
              here.
            </div>
          )}
        </div>
      </section>

      <section className="section-banner-two py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container">
          <div className="grid gap-[24px] lg:grid-cols-2">
            <div
              className="relative overflow-hidden rounded-[24px] bg-[#e9fff8] p-[35px]"
              data-aos="fade-right"
            >
              <h3 className="font-quicksand text-[28px] font-bold text-[#3d4750]">
                Daily hydration packs
              </h3>
              <p className="mt-[12px] max-w-[420px] font-Poppins text-[15px] leading-[28px] text-[#686e7d]">
                Choose packaged drinking water for families, teams, retail
                counters, and events.
              </p>
              <Link href="/shop" className="bb-btn-2 mt-[22px]">
                Order Now
              </Link>
              <i className="ri-water-flash-line absolute bottom-[-34px] right-[24px] text-[150px] !text-[#0f766e]/10" />
            </div>
            <div
              className="relative overflow-hidden rounded-[24px] bg-[#fff6e8] p-[35px]"
              data-aos="fade-left"
            >
              <h3 className="font-quicksand text-[28px] font-bold text-[#3d4750]">
                Custom quotation
              </h3>
              <p className="mt-[12px] max-w-[420px] font-Poppins text-[15px] leading-[28px] text-[#686e7d]">
                Need regular supply or dealership pricing? Contact us with
                quantity and delivery area.
              </p>
              <Link href="/contact-us" className="bb-btn-1 mt-[22px]">
                Contact Us
              </Link>
              <i className="ri-customer-service-2-line absolute bottom-[-34px] right-[24px] text-[150px] text-[#0f766e]/10" />
            </div>
          </div>
        </div>
      </section>

      {newProducts.length ? (
        <section className="section-product-tabs bg-white py-[50px] max-[1199px]:py-[35px]">
          <div className="bb-container">
            <SectionHeading
              eyebrow="New arrivals"
              title="More products to explore"
            />
            <div className="grid grid-cols-1 gap-[24px] min-[576px]:grid-cols-2 min-[992px]:grid-cols-4">
              {newProducts.slice(0, 4).map((product, index) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <DeliveryCoverage />

      <section className="section-testimonials py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by homes and businesses"
            text="Simple ordering, dependable delivery, and flexible bulk pricing for different requirements."
          />
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            className="bb-swiper pb-[45px]"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <article className="bb-card p-[28px] text-center">
                  <div className="mx-auto mb-[18px] flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#0f766e]/10 text-[#0f766e]">
                    <i className="ri-double-quotes-l text-[30px]" />
                  </div>
                  <p className="font-Poppins text-[15px] font-light leading-[28px] text-[#686e7d]">
                    “{testimonial.text}”
                  </p>
                  <h4 className="mt-[18px] font-quicksand text-[18px] font-bold text-[#3d4750]">
                    {testimonial.name}
                  </h4>
                  <p className="mt-[4px] font-Poppins text-[13px] text-[#0f766e]">
                    {testimonial.role}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { products } from "@/lib/products";

const categories = [
  {
    title: "Wellness Drinks",
    subtitle: "Pure water & wellness drinks",
    icon: "/assets/img/category/1.svg",
    color: "bg-[#fef1f1]",
  },
  {
    title: "Herbal Care",
    subtitle: "Natural blends & soothing sips",
    icon: "/assets/img/category/2.svg",
    color: "bg-[#e1fcf2]",
  },
  {
    title: "Jeera Drinks",
    subtitle: "Refreshing everyday favorites",
    icon: "/assets/img/category/3.svg",
    color: "bg-[#f4f1fe]",
  },
  {
    title: "Healthy Snacks",
    subtitle: "Light bites for mindful tasting",
    icon: "/assets/img/category/4.svg",
    color: "bg-[#fbf9e4]",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[32px] bg-white px-6 py-12 shadow-sm sm:px-10 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-[#dbe1ff] bg-[#f4f6ff] px-4 py-2 text-sm font-semibold tracking-[0.16em] text-[#6c7fd8]">
              Hydrate - Heal - Feel Good
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Discover <span className="text-[#6c7fd8]">2gooD Wellness</span> Products for Everyday Living
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Shop natural drinks, flavorful jeera blends, soothing herbal infusions, and better-for-you beverages designed for a healthier daily routine.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-full bg-[#6c7fd8] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#5768b0]">
                Shop Now
              </Link>
              <Link href="/about-us" className="rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#6c7fd8] hover:text-[#6c7fd8]">
                Our Story
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "100%", detail: "Natural Choices" },
                { label: "Fresh", detail: "Daily Wellness" },
                { label: "Pure", detail: "Hydration" },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -right-8 top-8 h-[520px] w-[520px] rounded-full bg-[#eef1ff] blur-3xl opacity-60" />
            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              <img src="/assets/img/hero/hero-1.png" alt="2gooD wellness products" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className={`${category.color} rounded-[24px] p-8 text-center shadow-sm`}>
              <img src={category.icon} alt={category.title} className="mx-auto mb-4 h-12 w-12" />
              <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[32px] bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6c7fd8]">Featured wellness picks</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Customer favorites for taste, hydration, and everyday health.</h2>
          </div>
          <div className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700">
            Limited time highlights
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 4).map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
              <div className="relative overflow-hidden border-b border-slate-200">
                {product.badge ? (
                  <span className="absolute left-4 top-4 rounded-full bg-[#6c7fd8] px-4 py-2 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                ) : null}
                <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{product.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="space-x-2 text-slate-900">
                    <span className="text-lg font-semibold">{product.price}</span>
                    {product.oldPrice ? <span className="text-sm line-through text-slate-400">{product.oldPrice}</span> : null}
                  </div>
                  <Link
                    href={`/shop/${product.id}`}
                    className="rounded-full bg-[#6c7fd8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5768b0]"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

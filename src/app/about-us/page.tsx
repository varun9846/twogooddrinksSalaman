import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="rounded-[32px] bg-white p-10 shadow-sm md:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6c7fd8]">
              About 2gooD
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Wellness products designed for daily refreshment.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              2gooD is built to bring the premium UI of the Blueberry theme into a fast Next.js storefront with clean
              navigation and modern responsive layout.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-[#6c7fd8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5768b0]"
              >
                Browse Wellness Products
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#6c7fd8] hover:text-[#6c7fd8]"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="rounded-[28px] bg-[#f8fafc] p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Why 2gooD?</h2>
            <ul className="mt-6 space-y-5 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6c7fd8]/10 text-[#6c7fd8]">
                  ✓
                </span>
                <span>Clean, lifestyle-first product presentation.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6c7fd8]/10 text-[#6c7fd8]">
                  ✓
                </span>
                <span>Reusable components with Next.js routing.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6c7fd8]/10 text-[#6c7fd8]">
                  ✓
                </span>
                <span>Optimized for future backend integration.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

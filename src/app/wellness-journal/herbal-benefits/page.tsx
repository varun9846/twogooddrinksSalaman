"use client";
import Link from "next/link";

const benefitsData = [
  {
    title: "Jeera Extract & Cumin Seed Solubles",
    category: "Digestive Balance",
    color: "bg-indigo-50/80 border-indigo-100 text-indigo-700",
    iconColor: "text-indigo-500",
    desc: "Cumin stimulates pancreatic enzyme production, reinforcing absorption curves and minimizing post-meal bloating instantly.",
    highlights: ["Enhances gut motility", "Calms acidic flareups", "Rich in traditional iron bio-elements"]
  },
  {
    title: "Hibiscus & Rose Petal Decoctions",
    category: "Antioxidant Shield",
    color: "bg-rose-50/80 border-rose-100 text-rose-700",
    iconColor: "text-rose-500",
    desc: "Densely infused with anthocyanins, hibiscus balances blood pressure ranges naturally while fortifying the vascular system.",
    highlights: ["Slashes environmental oxidative stress", "Supports kidney micro-filtration", "Organic Vitamin C payload"]
  },
  {
    title: "Ginger & Turmeric Root Concentrates",
    category: "Anti-Inflammatory",
    color: "bg-amber-50/80 border-amber-100 text-amber-700",
    iconColor: "text-amber-500",
    desc: "Active gingerols and curcumin directly suppress pro-inflammatory pathways, mitigating tissue wear and joint fatigue safely.",
    highlights: ["Relieves chronic muscle tightness", "Boosts macro immune responsiveness", "Optimizes natural bile flow"]
  },
  {
    title: "Lemongrass & Green Tea Infusions",
    category: "Metabolic Cleanse",
    color: "bg-emerald-50/80 border-emerald-100 text-emerald-700",
    iconColor: "text-emerald-500",
    desc: "A natural, non-jittery thermogenic flush agent that optimizes safe metabolic cycles while sharpening neurological clarity.",
    highlights: ["Smooth lipid processing support", "Flushes accumulated fluid weight", "Sustained clean attention spans"]
  }
];

export default function HerbalBenefitsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] py-12 font-Poppins text-[#2b2b2d]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex items-center text-[13px] font-medium text-[#686e7d]">
          <Link href="/" className="hover:text-[#0f766e] transition-colors duration-200">Home</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <Link href="/wellness-journal" className="hover:text-[#0f766e] transition-colors duration-200">Wellness Journal</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <span className="text-[#0f766e]">Herbal Drink Benefits</span>
        </nav>

        {/* Section Heading Group */}
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0f766e]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f766e]">
            Botanical Almanac
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#2b2b2d] md:text-5xl leading-[1.15]">
            The Clinical Advantages of <span className="text-[#0f766e]">Standardized Herbal Infusions</span>
          </h1>
          <p className="mt-5 text-[16px] leading-[28px] text-[#686e7d] max-w-2xl">
            Every drink is formulated to marry time-tested Ayurvedic insights with precise contemporary biological standards. Sip with true structural intention.
          </p>
        </div>

        {/* Dynamic Card Matrix Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((item) => (
            <article 
              key={item.title}
              className="group relative flex flex-col justify-between rounded-[24px] border border-[#eef0f4] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(43,43,45,0.08)] hover:border-[#0f766e]/30"
            >
              <div>
                {/* Category Capsule Tag */}
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold tracking-wide rounded-lg border ${item.color} mb-5`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${item.iconColor.replace('text', 'bg')}`} />
                  {item.category}
                </span>
                
                <h2 className="text-[18px] font-bold leading-[24px] text-[#2b2b2d] mb-3 transition-colors duration-300 group-hover:text-[#0f766e]">
                  {item.title}
                </h2>
                
                <p className="text-[14px] leading-[24px] text-[#686e7d] mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Functional Micro Highlights */}
              <div className="border-t border-[#f1f3f5] pt-5 mt-auto">
                <ul className="space-y-3">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px] font-medium text-[#4b5563]">
                      <svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-[20px]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Educational Callout Banner */}
        <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#f3f1ff] via-white to-[#f8f9fa] border border-[#0f766e]/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0f766e]/5 blur-3xl" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-[22px] font-bold text-[#2b2b2d] flex items-center gap-3">
              <svg className="w-6 h-6 text-[#0f766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Zero Refined Sugars. Zero Syrups. Pure Extractions.
            </h3>
            <p className="text-[15px] leading-[26px] text-[#686e7d] mt-3">
              Unlike mainstream fitness beverages packed with sucrose overrides, <span className="font-semibold text-[#2b2b2d]">2gooD</span> uses real raw botanical extracts micro-balanced with natural, low-glycemic plant sweeteners.
            </p>
          </div>
          
          <Link
            href="/shop"
            className="relative z-10 whitespace-nowrap h-12 inline-flex items-center justify-center rounded-xl bg-[#0f766e] px-8 text-[15px] font-semibold text-white shadow-lg shadow-[#0f766e]/20 transition-all duration-300 hover:bg-[#2b2b2d] hover:shadow-xl hover:-translate-y-0.5"
          >
            Shop the Infusions Range
          </Link>
        </section>

      </div>
    </main>
  );
}
"use client";
import Link from "next/link";

const lifestylePillars = [
  {
    title: "Restorative Sleep Architecture",
    category: "Recovery",
    color: "bg-indigo-50/80 border-indigo-100 text-indigo-700",
    iconColor: "text-indigo-500",
    desc: "Optimize your circadian rhythm through temperature regulation, light exposure management, and consistent wind-down protocols.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  },
  {
    title: "Mindful Kinetic Movement",
    category: "Vitality",
    color: "bg-rose-50/80 border-rose-100 text-rose-700",
    iconColor: "text-rose-500",
    desc: "Shift from punitive exercise to joyful movement. Focus on mobility, functional strength, and daily non-exercise activity thermogenesis (NEAT).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Nutrient-Dense Fueling",
    category: "Nourishment",
    color: "bg-emerald-50/80 border-emerald-100 text-emerald-700",
    iconColor: "text-emerald-500",
    desc: "Prioritize whole, unprocessed foods rich in micronutrients, fiber, and healthy fats to sustain stable energy and robust gut microbiome diversity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Cognitive & Stress Resilience",
    category: "Mindset",
    color: "bg-amber-50/80 border-amber-100 text-amber-700",
    iconColor: "text-amber-500",
    desc: "Implement daily nervous system regulation practices like breathwork, meditation, and digital detoxing to maintain mental clarity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

const featuredArticles = [
  {
    title: "The 20-Minute Morning Protocol for Sustained Energy",
    excerpt: "Why delaying caffeine intake by 90 minutes and prioritizing sunlight exposure can completely transform your afternoon productivity.",
    readTime: "5 min read",
    tag: "Habit Stacking"
  },
  {
    title: "Decoding Food Labels: A Practical Guide to Clean Eating",
    excerpt: "Learn to identify hidden sugars, inflammatory seed oils, and artificial additives masquerading as 'healthy' alternatives in the grocery aisle.",
    readTime: "7 min read",
    tag: "Nutrition"
  },
  {
    title: "The Science of Cold Exposure and Metabolic Adaptation",
    excerpt: "How brief, controlled cold therapy stimulates brown fat activation, reduces systemic inflammation, and enhances dopamine baseline levels.",
    readTime: "6 min read",
    tag: "Biohacking"
  }
];

export default function HealthyLifestylePage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] py-12 font-Poppins text-[#2b2b2d]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex items-center text-[13px] font-medium text-[#686e7d]">
          <Link href="/" className="hover:text-[#6c7fd8] transition-colors duration-200">Home</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <Link href="/wellness-journal" className="hover:text-[#6c7fd8] transition-colors duration-200">Wellness Journal</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <span className="text-[#6c7fd8]">Healthy Lifestyle</span>
        </nav>

        {/* Hero Section Banner */}
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#6c7fd8] via-[#5a6fc9] to-[#4a5cb8] p-8 md:p-16 text-white shadow-[0_20px_40px_-10px_rgba(108,127,216,0.3)] mb-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-[#2b2b2d]/10 blur-3xl" aria-hidden="true" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Holistic Wellness
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Cultivating a Sustainable <br className="hidden md:block" />
              <span className="text-white/90">Healthy Lifestyle</span>
            </h1>
            <p className="mt-5 text-[16px] leading-[28px] text-white/85 max-w-2xl">
              True health is not a destination, but a dynamic equilibrium. Explore evidence-based strategies to harmonize your physical, mental, and metabolic well-being for the long term.
            </p>
          </div>
        </section>

        {/* The 4 Pillars of Health Grid */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-[#6c7fd8]" />
            <h2 className="text-[22px] font-bold text-[#2b2b2d]">The Four Pillars of Vitality</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lifestylePillars.map((pillar) => (
              <article 
                key={pillar.title}
                className="group relative flex flex-col justify-between rounded-[24px] border border-[#eef0f4] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(43,43,45,0.08)] hover:border-[#6c7fd8]/30"
              >
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold tracking-wide rounded-lg border mb-5 ${pillar.color}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${pillar.iconColor.replace('text', 'bg')}`} />
                    {pillar.category}
                  </div>
                  
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8f9fa] ${pillar.iconColor} transition-colors duration-300 group-hover:bg-[#6c7fd8] group-hover:text-white`}>
                    {pillar.icon}
                  </div>

                  <h3 className="text-[18px] font-bold leading-[24px] text-[#2b2b2d] mb-3 transition-colors duration-300 group-hover:text-[#6c7fd8]">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-[14px] leading-[24px] text-[#686e7d]">
                    {pillar.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Featured Insights Section */}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-[#6c7fd8]" />
              <h2 className="text-[22px] font-bold text-[#2b2b2d]">Latest Editorial Insights</h2>
            </div>
            <Link href="/wellness-journal" className="hidden md:inline-flex items-center gap-1 text-[14px] font-semibold text-[#6c7fd8] hover:text-[#5a6fc9] transition-colors">
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredArticles.map((article, idx) => (
              <Link 
                href={`/wellness-journal/article-${idx + 1}`} 
                key={article.title}
                className="group flex flex-col rounded-[24px] border border-[#eef0f4] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(43,43,45,0.08)]"
              >
                {/* Abstract Visual Header for Article Card */}
                <div className="h-40 w-full bg-gradient-to-br from-[#f3f1ff] to-[#eef0f4] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <svg className="w-24 h-24 text-[#6c7fd8]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#6c7fd8] border border-[#6c7fd8]/20">
                      {article.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-[18px] font-bold leading-[26px] text-[#2b2b2d] mb-3 transition-colors duration-300 group-hover:text-[#6c7fd8]">
                    {article.title}
                  </h3>
                  <p className="text-[14px] leading-[24px] text-[#686e7d] mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#94a3b8] pt-4 border-t border-[#f1f3f5]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {article.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-6 text-center md:hidden">
            <Link href="/wellness-journal" className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#6c7fd8] hover:text-[#5a6fc9] transition-colors">
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>

        {/* Bottom Community / Newsletter Callout Banner */}
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f3f1ff] via-white to-[#f8f9fa] border border-[#6c7fd8]/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#6c7fd8]/5 blur-3xl" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-[22px] font-bold text-[#2b2b2d] flex items-center gap-3">
              <svg className="w-6 h-6 text-[#6c7fd8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Join the 2gooD Wellness Community
            </h3>
            <p className="text-[15px] leading-[26px] text-[#686e7d] mt-3">
              Receive weekly, science-backed insights on nutrition, movement, and mindset directly to your inbox. No spam, just actionable strategies for a better you.
            </p>
          </div>
          
          <div className="relative z-10 flex w-full md:w-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="h-12 w-full md:w-72 rounded-xl border border-[#e2e8f0] bg-white px-4 text-[14px] text-[#2b2b2d] outline-none transition-all duration-200 placeholder:text-[#94a3b8] focus:border-[#6c7fd8] focus:ring-4 focus:ring-[#6c7fd8]/10"
            />
            <button className="h-12 whitespace-nowrap inline-flex items-center justify-center rounded-xl bg-[#6c7fd8] px-6 text-[14px] font-semibold text-white shadow-lg shadow-[#6c7fd8]/20 transition-all duration-300 hover:bg-[#2b2b2d] hover:shadow-xl hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
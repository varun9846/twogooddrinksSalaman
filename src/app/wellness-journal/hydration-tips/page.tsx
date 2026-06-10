"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function HydrationTipsPage() {
  const [calculatorWeight, setCalculatorWeight] = useState("");
  const [calculatedOz, setCalculatedOz] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNum = parseFloat(calculatorWeight);
    if (!isNaN(weightNum) && weightNum > 0) {
      setCalculatedOz(Math.round(weightNum * 0.5));
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] py-12 font-Poppins text-[#2b2b2d]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex items-center text-[13px] font-medium text-[#686e7d]">
          <Link href="/" className="hover:text-[#6c7fd8] transition-colors duration-200">Home</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <Link href="/wellness-journal" className="hover:text-[#6c7fd8] transition-colors duration-200">Wellness Journal</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <span className="text-[#6c7fd8]">Hydration Tips</span>
        </nav>

        {/* Hero Section Banner */}
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#6c7fd8] via-[#5a6fc9] to-[#4a5cb8] p-8 md:p-16 text-white shadow-[0_20px_40px_-10px_rgba(108,127,216,0.3)] mb-12">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-[#2b2b2d]/10 blur-3xl" aria-hidden="true" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Optimal Living
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              The Art of Hydration
            </h1>
            <p className="mt-5 text-[16px] leading-[28px] text-white/85 max-w-xl">
              Water isn't just a basic need—it is the foundational fuel for cellular performance, mental clarity, and metabolic function. Discover your ideal daily rhythm.
            </p>
          </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-3">
          
          {/* Main Informative Feed */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Essential Tips Breakdown */}
            <div className="rounded-[24px] border border-[#eef0f4] bg-white p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h2 className="text-[22px] font-bold text-[#2b2b2d] mb-8 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-[#6c7fd8]" />
                Strategic Daily Hydration Rules
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "The Golden Morning Glass",
                    desc: "Drink 16oz of ambient water immediately upon waking. Sleep naturally dehydrates your system; jumpstart your digestion and wake up your internal organs before adding coffee or food.",
                    icon: <svg className="w-6 h-6 text-[#6c7fd8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  },
                  {
                    num: "02",
                    title: "Interval Sipping Over Gulping",
                    desc: "Your body absorbs fluid best when consumed steadily in small increments. Chugging large volumes overrides renal capacity, sending water straight out of your system without structural absorption.",
                    icon: <svg className="w-6 h-6 text-[#6c7fd8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  },
                  {
                    num: "03",
                    title: "Pre-empt Hunger Triggers",
                    desc: "Mild dehydration frequently mimics food cravings in the brain. Drink a glass of water 20 minutes before regular meal slots to ground genuine nutritional signals.",
                    icon: <svg className="w-6 h-6 text-[#6c7fd8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  }
                ].map((item) => (
                  <div key={item.num} className="group flex gap-5 items-start">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6c7fd8]/5 text-[#6c7fd8] transition-colors duration-300 group-hover:bg-[#6c7fd8] group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#2b2b2d] mb-1">{item.title}</h3>
                      <p className="text-[15px] leading-[26px] text-[#686e7d]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Flags */}
            <div className="rounded-[24px] border-l-4 border-[#f59e0b] bg-[#fffbeb]/50 p-6 md:p-8 shadow-sm backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#2b2b2d] mb-2">Recognizing Silent Dehydration Flags</h3>
                  <p className="text-[15px] leading-[26px] text-[#686e7d]">
                    If you are already experiencing a dry mouth or mild fatigue, your tissues are running on low reserves. Watch out for brain fog, random headaches, and reduced muscle elasticity during simple physical movements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Interactive Smart Widget */}
          <div className="space-y-8">
            
            {/* Custom Hydration Calculator Applet */}
            <div className="rounded-[24px] border border-[#eef0f4] bg-white p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-8">
              <h3 className="text-[20px] font-bold text-[#2b2b2d] mb-2">Smart Baseline Calculator</h3>
              <p className="text-[14px] leading-[22px] text-[#686e7d] mb-6">
                Calculate your custom base-level daily water intake recommendations instantly.
              </p>
              
              <form onSubmit={handleCalculate} className="space-y-5">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#686e7d] mb-2">
                    Your Weight (in lbs)
                  </label>
                  <input
                    type="number"
                    value={calculatorWeight}
                    onChange={(e) => setCalculatorWeight(e.target.value)}
                    placeholder="e.g., 160"
                    className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#f8f9fa] px-4 text-[15px] text-[#2b2b2d] outline-none transition-all duration-200 placeholder:text-[#94a3b8] focus:border-[#6c7fd8] focus:bg-white focus:ring-4 focus:ring-[#6c7fd8]/10"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-[#6c7fd8] text-[15px] font-semibold text-white shadow-lg shadow-[#6c7fd8]/20 transition-all duration-300 hover:bg-[#5a6fc9] hover:shadow-xl hover:shadow-[#6c7fd8]/30 active:scale-[0.98]"
                >
                  Calculate Targets
                </button>
              </form>

              {calculatedOz !== null && (
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#6c7fd8]/5 to-[#6c7fd8]/10 p-5 border border-[#6c7fd8]/20 text-center animate-in fade-in zoom-in duration-300">
                  <p className="text-[13px] font-medium text-[#686e7d] uppercase tracking-wide">Your Recommended Baseline</p>
                  <p className="text-[36px] font-extrabold text-[#6c7fd8] mt-1 leading-none">
                    {calculatedOz} <span className="text-[16px] font-semibold text-[#2b2b2d]">oz / day</span>
                  </p>
                  <p className="text-[13px] text-[#686e7d] mt-3 bg-white/60 inline-block px-3 py-1 rounded-full border border-[#6c7fd8]/10">
                    Roughly {Math.ceil(calculatedOz / 8)} glasses of water per day.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Product Banner */}
            <div className="relative overflow-hidden rounded-[24px] bg-[#2b2b2d] p-8 text-center text-white shadow-xl">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#6c7fd8]/20 blur-3xl" />
              <div className="relative z-10">
                <h4 className="text-[20px] font-bold mb-3">Looking for More Flavor?</h4>
                <p className="text-[14px] text-white/70 leading-[24px] mb-6">
                  Infuse your routine with trace minerals and botanicals using our curated 2gooD Wellness Water blends.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-[#6c7fd8] px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#2b2b2d] hover:shadow-lg"
                >
                  Explore Infusions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
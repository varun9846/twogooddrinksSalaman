"use client";

import Link from "next/link";
import { aboutContent } from "@/lib/site-content";

type AboutSectionProps = {
  variant?: "home" | "page";
};

export default function AboutSection({ variant = "page" }: AboutSectionProps) {
  const isHome = variant === "home";

  return (
    <section className={isHome ? "mx-auto max-w-7xl px-4 py-16 md:px-6" : ""}>
      <div className="rounded-[32px] bg-white p-8 shadow-sm md:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-xl font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
              {aboutContent.eyebrow}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {isHome ? aboutContent.homeTitle : aboutContent.heroTitle}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {isHome ? aboutContent.homeDescription : aboutContent.heroDescription}
            </p>

            {!isHome ? (
              <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                {aboutContent.storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-[#0f766e] px-6 py-3 text-sm font-semibold !text-white transition hover:-translate-y-1 hover:bg-[#0c5a52] hover:text-white"
              >
                Order Water
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#0f766e] hover:text-[#0f766e]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] bg-[#f8fafc] p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              What makes us reliable?
            </h3>
            <ul className="mt-6 space-y-5 text-slate-600">
              {aboutContent.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f766e]/10 text-[#0f766e]">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[24px] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
                Our promise
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tested, trusted, and delivered fresh — every bottle is handled
                with the care your family deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

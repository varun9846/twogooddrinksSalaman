"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MODAL_DELAY_MS = 7000;

export default function NewsletterModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsOpen(false);
    setEmail("");

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, MODAL_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    console.log("Newsletter email:", email);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-4">
      <button
        type="button"
        aria-label="Close newsletter modal"
        className="absolute inset-0 bg-black/55 backdrop-blur-[3px]"
        onClick={closeModal}
      />

      <div className="relative z-10 w-full max-w-[390px] overflow-hidden rounded-[24px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.32)]">
        <button
          type="button"
          aria-label="Close"
          onClick={closeModal}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#f8fafc] text-[#3d4750] transition hover:bg-[#0f766e] hover:text-white"
        >
          <i className="ri-close-line text-[20px]" />
        </button>

        <div className="relative px-5 py-7 text-center sm:px-7">
          <div className="absolute -left-14 -top-14 h-32 w-32 rounded-full bg-[#0f766e]/10 blur-2xl" />
          <div className="absolute -bottom-16 -right-14 h-36 w-36 rounded-full bg-[#14b8a6]/10 blur-2xl" />

          <div className="relative">
            <div className="mx-auto mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#e8f7f4] text-[#0f766e] shadow-[0_10px_24px_rgba(15,118,110,0.14)]">
              <i className="ri-mail-send-line text-[25px]" />
            </div>

            <p className="mb-2 font-Poppins text-[11px] font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Stay Updated
            </p>

            <h2 className="font-quicksand text-[24px] font-bold leading-[1.18] tracking-[0.02rem] text-[#3d4750] sm:text-[26px]">
              Subscribe to our Newsletter
            </h2>

            <p className="mx-auto mt-3 max-w-[300px] font-Poppins text-[13px] font-light leading-[23px] tracking-[0.03rem] text-[#686e7d]">
              Get updates about new drinks, packaged water, bulk offers, and
              special discounts.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-5 max-w-[310px]">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                className="mb-3 h-[44px] w-full rounded-[13px] border border-[#e5e7eb] bg-white px-4 text-center font-Poppins text-[13px] text-[#3d4750] outline-none transition placeholder:text-[#a0a6b3] focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
              />

              <button
                type="submit"
                className="h-[44px] w-full rounded-[13px] bg-[#0f766e] px-5 font-Poppins text-[14px] font-semibold tracking-[0.03rem] !text-white transition hover:-translate-y-1 hover:bg-[#0c5f58] hover:shadow-[0_14px_28px_rgba(15,118,110,0.26)]"
              >
                Subscribe Now
              </button>
            </form>

            <button
              type="button"
              onClick={closeModal}
              className="mt-4 font-Poppins text-[13px] font-medium text-[#686e7d] transition hover:text-[#0f766e]"
            >
              No thanks, maybe later
            </button>

            <div className="mx-auto mt-5 flex max-w-[290px] flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-[#f0fdfa] px-3 py-1 font-Poppins text-[10px] font-medium text-[#0f766e]">
                New Offers
              </span>
              <span className="rounded-full bg-[#f0fdfa] px-3 py-1 font-Poppins text-[10px] font-medium text-[#0f766e]">
                Bulk Orders
              </span>
              <span className="rounded-full bg-[#f0fdfa] px-3 py-1 font-Poppins text-[10px] font-medium text-[#0f766e]">
                Wellness Updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
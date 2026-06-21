"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const productLinks = [
  { label: "Packaged Drinking Water", href: "/shop?category=Packaged%20Drinking%20Water" },
  { label: "Healthy Drinks", href: "/shop?category=Healthy%20Drinks" },
  { label: "Herbal Infusions", href: "/shop?category=Herbal%20Infusions" },
  { label: "Bulk Orders", href: "/contact-us" },
];

const companyLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Shop", href: "/shop" },
  { label: "My Cart", href: "/my-cart" },
];

const accountLinks = [
  { label: "Sign In", href: "/login" },
  { label: "Create Account", href: "/register" },
  { label: "Checkout", href: "/checkout" },
];

const socialLinks = [
  { label: "Facebook", icon: "ri-facebook-fill", href: "#" },
  { label: "Instagram", icon: "ri-instagram-line", href: "#" },
  { label: "LinkedIn", icon: "ri-linkedin-fill", href: "#" },
  { label: "WhatsApp", icon: "ri-whatsapp-line", href: "https://wa.me/919967399880" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="bb-footer-widget mb-[35px]">
      <h4 className="mb-[20px] border-b border-[#eee] pb-[15px] font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
        {title}
      </h4>
      <ul>
        {links.map((item) => (
          <li key={item.label} className="mb-[12px]">
            <Link
              href={item.href}
              className="font-Poppins text-[14px] font-normal leading-[24px] tracking-[0.03rem] text-[#686e7d] transition-all duration-300 hover:pl-[6px] hover:text-[#0f766e]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className={`bb-footer mt-[50px] border-t border-[#eee] bg-white max-[1199px]:mt-[35px] transform transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container flex flex-wrap">
          <div className="w-full px-[12px] lg:w-[25%]">
            <div className="bb-footer-widget mb-[35px]">
              <Link href="/" className="mb-[25px] inline-flex items-center gap-[12px]">
                <img
                  src="/assets/img/logo/logo-icon2.png"
                  alt="2good Plus logo"
                  className="h-[70px] w-auto object-contain"
                />
              </Link>
              <p className="mb-[22px] max-w-[380px] font-Poppins text-[14px] font-light leading-[27px] tracking-[0.03rem] text-[#686e7d]">
                2good Plus delivers pure, safe, and refreshing packaged drinking water for homes,
                offices, hotels, restaurants, retailers, events, and institutional bulk orders.
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border border-[#eee] text-[#686e7d] transition-all duration-300 hover:-translate-y-1 hover:border-[#0f766e] hover:bg-[#0f766e] hover:text-white"
                    aria-label={item.label}
                  >
                    <i className={`${item.icon} text-[18px]`} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full px-[12px] sm:w-1/2 lg:w-[16.66%]">
            <FooterColumn title="Products" links={productLinks} />
          </div>
          <div className="w-full px-[12px] sm:w-1/2 lg:w-[16.66%]">
            <FooterColumn title="Company" links={companyLinks} />
          </div>
          <div className="w-full px-[12px] sm:w-1/2 lg:w-[16.66%]">
            <FooterColumn title="Account" links={accountLinks} />
          </div>

          <div className="w-full px-[12px] sm:w-1/2 lg:w-[25%]">
            <div className="bb-footer-widget mb-[35px]">
              <h4 className="mb-[20px] border-b border-[#eee] pb-[15px] font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                Contact
              </h4>
              <ul>
                <li className="mb-[14px] flex items-start gap-[12px]">
                  <i className="ri-map-pin-line mt-[4px] text-[18px] text-[#0f766e]" />
                  <p className="font-Poppins text-[14px] font-light leading-[25px] tracking-[0.03rem] text-[#686e7d]">
                    Plot No. 24, DIC Industrial Estate, Rania, Kanpur Dehat - 209304,
                    Uttar Pradesh, India
                  </p>
                </li>
                <li className="mb-[14px] flex items-center gap-[12px]">
                  <i className="ri-phone-line text-[18px] text-[#0f766e]" />
                  <Link href="tel:+919967399880" className="font-Poppins text-[14px] text-[#686e7d] transition hover:text-[#0f766e]">
                    +91 99673 99880
                  </Link>
                </li>
                <li className="mb-[14px] flex items-center gap-[12px]">
                  <i className="ri-mail-line text-[18px] text-[#0f766e]" />
                  <Link href="mailto:Corporate@gmhospitality.in" className="font-Poppins text-[14px] text-[#686e7d] transition hover:text-[#0f766e]">
                    Corporate@gmhospitality.in
                  </Link>
                </li>
                <li className="flex items-start gap-[12px]">
                  <i className="ri-time-line mt-[4px] text-[18px] text-[#0f766e]" />
                  <p className="font-Poppins text-[14px] font-light leading-[25px] tracking-[0.03rem] text-[#686e7d]">
                    Monday – Saturday
                    <br />
                    8:00 AM – 8:00 PM
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#eee] py-[14px]">
        <div className="bb-container flex flex-wrap items-center justify-between gap-[14px] max-[991px]:flex-col">
          <p className="font-Poppins text-[13px] leading-[26px] tracking-[0.03rem] text-[#686e7d]">
            Copyright © 2026{" "}
            <Link href="/" className="font-semibold text-[#0f766e] transition hover:text-[#3d4750]">
              2good Plus
            </Link>{" "}
            all rights reserved.
          </p>
          <div className="flex items-center gap-[10px] font-Poppins text-[13px] text-[#686e7d]">
            <i className="ri-shield-check-line text-[18px] text-[#0f766e]" />
            Secure checkout • Fresh delivery • Bulk order support
          </div>
        </div>
      </div>
    </footer>
  );
}

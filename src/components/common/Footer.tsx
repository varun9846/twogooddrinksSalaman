import Link from "next/link";

const wellnessCategories = [
  { label: "Natural Drinking Water", href: "/shop" },
  { label: "Jeera Wellness Drinks", href: "/shop" },
  { label: "Herbal Infusions", href: "/shop" },
  { label: "Flavoured Wellness Drinks", href: "/shop" },
  { label: "Healthy Drinks", href: "/shop" },
  { label: "Wellness Bundles", href: "/shop" },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  // { label: "Delivery", href: "/track-order" },
  // { label: "Legal Notice", href: "/faq" },
  // { label: "Terms & conditions", href: "/terms" },
  // { label: "Secure payment", href: "/checkout" },
  { label: "Contact us", href: "/contact" },
];

const accountLinks = [
  { label: "Sign In", href: "/login" },
  { label: "View Cart", href: "/cart" },
  { label: "Return Policy", href: "/faq" },
  { label: "Become a Vendor", href: "/shop" },
  { label: "Affiliate Program", href: "/products" },
  { label: "Payments", href: "/checkout" },
];

const socialLinks = [
  {
    name: "facebook",
    icon: "/assets/img/social/facebook.svg",
    href: "#",
  },
  {
    name: "twitter",
    icon: "/assets/img/social/twitter.svg",
    href: "#",
  },
  {
    name: "linkedin",
    icon: "/assets/img/social/linkedin.svg",
    href: "#",
  },
  {
    name: "instagram",
    icon: "/assets/img/social/instagram.svg",
    href: "#",
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="bb-footer-widget">
      <h4 className="mb-5 border-b border-white/10 pb-4 font-quicksand text-[18px] font-bold text-slate-700">
        {title}
      </h4>

      <ul>
        {links.map((item) => (
          <li key={item.label} className="mb-4">
            <Link
              href={item.href}
              className="font-Poppins text-[14px] leading-5 text-slate-300 transition hover:text-[#0f766e]"
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
  return (
    <footer className="bb-footer mt-[50px] bg-[#f8f8fb] text-slate-700 max-[1199px]:mt-[35px]">
      <div className="border-t border-white/10">
        <div className="py-[50px] max-[1199px]:py-[35px]">
          <div className="mx-auto flex max-w-[1320px] flex-wrap px-3">
            {/* About */}
            <div className="w-full px-3 lg:w-[25%]">
              <div className="mb-10 flex flex-col lg:mb-0">
                <Link href="/" className="mb-7 flex items-center gap-3">
                  <img
                    src="/assets/img/logo/logo-icon.png"
                    alt="2gooD logo icon"
                    className="h-11 w-11 shrink-0 object-contain"
                  />
                  <span className="font-Poppins text-3xl font-bold tracking-[0.03rem] text-slate-700">
                    2gooD
                  </span>
                </Link>

                <p className="mb-7 max-w-[400px] font-Poppins text-[14px] leading-[27px] text-slate-500">
                  2gooD is the biggest market of grocery products. Get your
                  daily needs from our store.
                </p>

                <div className="-m-[7px] flex flex-wrap">
                  <Link href="#" className="m-[7px]">
                    <img
                      src="/assets/img/app/android.png"
                      alt="Android app"
                      className="max-w-[140px] rounded-[5px] max-[1399px]:max-w-[120px]"
                    />
                  </Link>

                  <Link href="#" className="m-[7px]">
                    <img
                      src="/assets/img/app/apple.png"
                      alt="Apple app"
                      className="max-w-[140px] rounded-[5px] max-[1399px]:max-w-[120px]"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2  lg:w-[16.66%]">
              <FooterColumn
                title="Wellness Categories"
                links={wellnessCategories}
              />
            </div>

            <div className="w-full px-3 sm:w-1/2 lg:w-[16.66%]">
              <FooterColumn title="Company" links={companyLinks} />
            </div>

            <div className="w-full px-3 sm:w-1/2 text-slate-700 lg:w-[16.66%]">
              <FooterColumn title="Account" links={accountLinks} />
            </div>

            {/* Contact */}
            <div className="w-full px-3 sm:w-1/2 lg:w-[25%]">
              <div className="bb-footer-widget">
                <h4 className="mb-5 border-b border-white/10 pb-4 font-quicksand text-[18px] font-bold text-slate-700">
                  Contact
                </h4>
                <ul>
                  <li className="mb-4 flex items-start">
                    <span className="mr-3 mt-1 text-[#0f766e]">📍</span>
                    <p className="font-Poppins text-[14px] leading-7 text-slate-500">
                      Plot No. 24, DIC Industrial Estate, Rania, Kanpur Dehat -
                      209304, Uttar Pradesh, India
                    </p>
                  </li>

                  <li className="mb-4 flex items-center">
                    <span className="mr-3 text-[#0f766e]">☎</span>
                    <Link
                      href="tel:+919967399880"
                      className="font-Poppins text-[14px] text-slate-500 transition hover:text-[#0f766e]"
                    >
                      +91 99673 99880
                    </Link>
                  </li>

                  {/* <li className="mb-4 flex items-center">
                    <span className="mr-3 text-[#0f766e]">💬</span>
                    <Link
                      href="https://wa.me/919967399880"
                      target="_blank"
                      className="font-Poppins text-[14px] text-slate-500 transition hover:text-[#0f766e]"
                    >
                      Chat on WhatsApp
                    </Link>
                  </li> */}

                  <li className="mb-4 flex items-center">
                    <span className="mr-3 text-[#0f766e]">✉</span>
                    <Link
                      href="mailto:Corporate@gmhospitality.in"
                      className="font-Poppins text-[14px] text-slate-500 transition hover:text-[#0f766e]"
                    >
                      Corporate@gmhospitality.in
                    </Link>
                  </li>

                  <li className="mb-5 flex items-start">
                    <span className="mr-3 mt-1 text-[#0f766e]">🕒</span>
                    <p className="font-Poppins text-[14px] leading-7 text-slate-500">
                      Monday – Saturday
                      <br />
                      8:00 AM – 8:00 PM
                    </p>
                  </li>
                </ul>
  {/* 
                  <ul className="flex flex-wrap items-center">
                    <li className="pr-[5px]">
                      <Link
                        href="#"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] bg-[#3d4750] transition-all duration-300 hover:bg-[#0f766e]"
                      >
                        <i className="ri-facebook-fill text-[16px] text-white"></i>
                      </Link>
                    </li>

                    <li className="pr-[5px]">
                      <Link
                        href="#"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] bg-[#3d4750] transition-all duration-300 hover:bg-[#0f766e]"
                      >
                        <i className="ri-twitter-fill text-[16px] text-white"></i>
                      </Link>
                    </li>

                    <li className="pr-[5px]">
                      <Link
                        href="#"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] bg-[#3d4750] transition-all duration-300 hover:bg-[#0f766e]"
                      >
                        <i className="ri-linkedin-fill text-[16px] text-white"></i>
                      </Link>
                    </li>

                    <li className="pr-[5px]">
                      <Link
                        href="#"
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] bg-[#3d4750] transition-all duration-300 hover:bg-[#0f766e]"
                      >
                        <i className="ri-instagram-line text-[16px] text-white"></i>
                      </Link>
                    </li>
                  </ul> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-4">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-6 max-[991px]:flex-col">
            <div className="font-Poppins text-[13px] leading-7 tracking-[1px] text-slate-600">
              Copyright © 2026{" "}
              <Link
                href="/"
                className="font-medium text-[#0f766e] transition hover:text-white"
              >
                2gooD
              </Link>{" "}
              all rights reserved.
            </div>

            <div>
              <img
                src="/assets/img/payment/payment.png"
                alt="Payment methods"
                className="max-h-8 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

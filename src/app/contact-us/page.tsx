import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeading from "@/components/common/SectionHeading";
import { contactContent } from "@/lib/site-content";

const contactCards = [
  {
    icon: "ri-phone-line",
    title: "Phone",
    text: contactContent.phone,
    href: `tel:${contactContent.phone.replace(/\s/g, "")}`,
  },
  {
    icon: "ri-whatsapp-line",
    title: "WhatsApp",
    text: "Chat with us on WhatsApp",
    href: `https://wa.me/${contactContent.whatsapp.replace(/[^0-9]/g, "")}`,
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    text: contactContent.email,
    href: `mailto:${contactContent.email}`,
  },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactContent.mapQuery)}&output=embed`;

  return (
    <main>
      <Breadcrumb title="Contact Us" current="Contact Us" />

      <section className="section-contact py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container">
          <SectionHeading
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
            text={contactContent.description}
          />

          <div className="mb-[35px] grid gap-[24px] md:grid-cols-3">
            {contactCards.map((card, index) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="bb-card p-[25px] text-center"
                data-aos="fade-up"
                data-aos-delay={index * 90}
              >
                <div className="mx-auto mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-[#0f766e]/10 text-[#0f766e]">
                  <i className={`${card.icon} text-[30px]`} />
                </div>
                <h3 className="font-quicksand text-[18px] font-bold text-[#3d4750]">{card.title}</h3>
                <p className="mt-[8px] break-words font-Poppins text-[14px] font-light leading-[24px] text-[#686e7d]">
                  {card.text}
                </p>
              </a>
            ))}
          </div>

          <div className="grid gap-[30px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[24px] border border-[#eee] bg-white p-[30px] shadow-sm max-[575px]:p-[20px]" data-aos="fade-right">
              <h2 className="mb-[18px] font-quicksand text-[26px] font-bold text-[#3d4750]">
                Send us a message
              </h2>
              <form className="space-y-[18px]">
                <div className="grid gap-[18px] sm:grid-cols-2">
                  <input className="bb-input" type="text" placeholder="Your name" />
                  <input className="bb-input" type="email" placeholder="Your email" />
                </div>
                <input className="bb-input" type="tel" placeholder="Phone number" />
                <select className="bb-input" defaultValue="">
                  <option value="" disabled>Order type</option>
                  <option>Home Delivery</option>
                  <option>Corporate Order</option>
                  <option>Hotel / Restaurant</option>
                  <option>Retailer / Distributor</option>
                  <option>Event / Wedding</option>
                </select>
                <textarea className="bb-input min-h-[150px] resize-none" placeholder="Tell us your requirement" />
                <button type="submit" className="bb-btn-2 water-ripple">
                  Send Message
                </button>
              </form>
            </div>

            <aside className="rounded-[24px] border border-[#eee] bg-white p-[30px] shadow-sm max-[575px]:p-[20px]" data-aos="fade-left">
              <h2 className="mb-[18px] font-quicksand text-[26px] font-bold text-[#3d4750]">
                {contactContent.panelTitle}
              </h2>
              <div className="space-y-[18px] font-Poppins text-[14px] leading-[26px] text-[#686e7d]">
                <div className="flex gap-[12px]">
                  <i className="ri-map-pin-line mt-[4px] text-[20px] text-[#0f766e]" />
                  <div>
                    <p className="font-semibold text-[#3d4750]">Address</p>
                    <p>{contactContent.address}</p>
                  </div>
                </div>
                <div className="flex gap-[12px]">
                  <i className="ri-time-line mt-[4px] text-[20px] text-[#0f766e]" />
                  <div>
                    <p className="font-semibold text-[#3d4750]">Business Hours</p>
                    <p>{contactContent.businessHours}</p>
                  </div>
                </div>
                <div className="flex gap-[12px]">
                  <i className="ri-truck-line mt-[4px] text-[20px] text-[#0f766e]" />
                  <div>
                    <p className="font-semibold text-[#3d4750]">Delivery Coverage</p>
                    <p>Kanpur | Kanpur Dehat | Unnao | Raibareli | Lucknow | Unchahar</p>
                  </div>
                </div>
              </div>

              <div className="mt-[24px] overflow-hidden rounded-[20px] border border-[#eee] bg-[#f8f8fb]">
                <iframe
                  title="2goodplus location map"
                  src={mapSrc}
                  className="h-[310px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

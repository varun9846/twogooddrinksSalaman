import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeading from "@/components/common/SectionHeading";
import { aboutContent } from "@/lib/site-content";

const services = [
  {
    icon: "ri-water-flash-line",
    title: "Pure Hydration",
    text: "Fresh packaged drinking water prepared for daily home and business requirements.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Quality Handling",
    text: "A careful process focused on consistency, safety, sealed packaging, and trust.",
  },
  {
    icon: "ri-truck-line",
    title: "Delivery Support",
    text: "Supply support for homes, offices, hotels, restaurants, institutions, and events.",
  },
  {
    icon: "ri-store-2-line",
    title: "Bulk Orders",
    text: "Negotiable rates and custom quotations based on quantity and delivery requirement.",
  },
];

const teamValues = [
  "Customer-first service",
  "Fresh and safe supply",
  "Transparent communication",
  "Reliable delivery planning",
];

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb title="About Us" current="About Us" />

      <section className="section-about py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container">
          <div className="grid gap-[35px] lg:grid-cols-2 lg:items-center">
            <div className="relative" data-aos="fade-right">
              <div className="overflow-hidden rounded-[30px] border border-[#eee] bg-white p-[20px] shadow-sm">
                <img
                  src="/assets/img/about/one.png"
                  alt="About 2good Plus"
                  className="h-[430px] w-full rounded-[22px] object-cover max-[767px]:h-[300px]"
                />
              </div>
              <div className="absolute bottom-[-22px] right-[25px] rounded-[20px] bg-[#0f766e] px-[24px] py-[18px] text-white shadow-xl max-[575px]:static max-[575px]:mt-[18px]">
                <p className="font-quicksand text-[28px] font-bold leading-[1]">7+</p>
                <p className="mt-[6px] font-Poppins text-[13px] leading-[20px]">Quality focused steps</p>
              </div>
            </div>

            <div data-aos="fade-left">
              <p className="mb-[8px] font-Poppins text-[14px] font-medium uppercase tracking-[0.18rem] text-[#0f766e]">
                {aboutContent.eyebrow}
              </p>
              <h1 className="font-quicksand text-[42px] font-bold leading-[1.2] tracking-[0.03rem] text-[#3d4750] max-[767px]:text-[32px]">
                {aboutContent.heroTitle}
              </h1>
              <p className="mt-[18px] font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                {aboutContent.heroDescription}
              </p>
              <div className="mt-[24px] space-y-[13px]">
                {aboutContent.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-[10px] font-Poppins text-[14px] text-[#686e7d]">
                    <i className="ri-checkbox-circle-line text-[20px] text-[#0f766e]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[70px] rounded-[30px] border border-[#eee] bg-white p-[30px] shadow-sm max-[767px]:p-[20px]" data-aos="fade-up">
            <SectionHeading align="left" eyebrow="Our story" title={aboutContent.homeTitle} text={aboutContent.homeDescription} />
            <div className="grid gap-[18px] lg:grid-cols-2">
              {aboutContent.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-services bg-white py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container">
          <SectionHeading
            eyebrow="Our services"
            title="Designed for homes, offices, and businesses"
            text="The Blueberry layout has been adapted for your teal water brand with clean cards, icons, and scroll animations."
          />
          <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="bb-card p-[25px] text-center" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="mx-auto mb-[18px] flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[#0f766e]/10 text-[#0f766e]">
                  <i className={`${service.icon} text-[32px]`} />
                </div>
                <h3 className="font-quicksand text-[18px] font-bold text-[#3d4750]">
                  {service.title}
                </h3>
                <p className="mt-[10px] font-Poppins text-[14px] font-light leading-[25px] text-[#686e7d]">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-team py-[50px] max-[1199px]:py-[35px]">
        <div className="bb-container">
          <div className="grid gap-[24px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-aos="fade-right">
              <SectionHeading align="left" eyebrow="Our promise" title="Simple, honest, and dependable hydration support" />
              <p className="font-Poppins text-[15px] font-light leading-[28px] text-[#686e7d]">
                Our team focuses on clear communication, responsive support, fresh supply, and
                practical order handling for every customer requirement.
              </p>
            </div>
            <div className="grid gap-[16px] sm:grid-cols-2" data-aos="fade-left">
              {teamValues.map((value) => (
                <div key={value} className="rounded-[18px] border border-[#eee] bg-white p-[20px] shadow-sm">
                  <i className="ri-star-smile-line mb-[12px] block text-[28px] text-[#0f766e]" />
                  <h3 className="font-quicksand text-[18px] font-bold text-[#3d4750]">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

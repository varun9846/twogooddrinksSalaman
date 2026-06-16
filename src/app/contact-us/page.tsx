import { contactContent } from "@/lib/site-content";

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${contactContent.whatsapp.replace(/[^0-9]/g, "")}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contactContent.mapQuery,
  )}&output=embed`;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="grid gap-10 rounded-[32px] bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
            {contactContent.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {contactContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {contactContent.description}
          </p>

          <form className="mt-10 space-y-5 rounded-[28px] bg-[#f8fafc] p-6 md:p-8">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0f766e]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0f766e]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0f766e]"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#0f766e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5768b0]"
            >
              Send Message
            </button>
          </form>
        </div>

        <aside className="h-fit rounded-[28px] bg-[#f8fafc] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            {contactContent.panelTitle}
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Phone</p>
              <a href={`tel:${contactContent.phone}`} className="hover:text-[#0f766e]">
                {contactContent.phone}
              </a>
            </div>

            <div>
              <p className="font-semibold text-slate-900">WhatsApp</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0f766e]"
              >
                Chat with us on WhatsApp →
              </a>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <a href={`mailto:${contactContent.email}`} className="hover:text-[#0f766e]">
                {contactContent.email}
              </a>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Address</p>
              <p>{contactContent.address}</p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Business hours</p>
              <p>{contactContent.businessHours}</p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
            <iframe
              title="2goodplus location map"
              src={mapSrc}
              className="h-[280px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

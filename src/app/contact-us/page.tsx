export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <section className="grid gap-10 rounded-[32px] bg-white p-10 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6c7fd8]">
            Get in touch
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Contact our wellness team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Have a question about your order, product details, or the upcoming integration? Send us a message and we will
            respond quickly.
          </p>
        </div>

        <form className="space-y-5 rounded-[28px] bg-[#f8fafc] p-8">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#6c7fd8]"
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
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#6c7fd8]"
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
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#6c7fd8]"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-[#6c7fd8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5768b0]"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

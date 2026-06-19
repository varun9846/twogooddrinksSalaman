const deliveryAreas = [
  "Kanpur",
  "Kanpur Dehat",
  "Unnao",
  "Raibareli",
  "Lucknow",
  "Unchahar",
];

const mapSrc =
  "https://www.google.com/maps?q=Kanpur,Lucknow,Unnao,Raibareli,Unchahar&output=embed";

export default function DeliveryCoverage() {
  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
            Delivery Coverage
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            Fresh water delivered across your city
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            2goodplus currently delivers packaged drinking water across Kanpur,
            Kanpur Dehat, Unnao, Raibareli, Lucknow, and Unchahar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[28px] border border-slate-200 bg-[#f8fafc] p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Available Service Areas
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Place your order online or contact us for home, office, shop, and
              bulk water delivery support in these locations.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliveryAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f7f4] text-[#0f766e]">
                    <i className="ri-map-pin-line text-lg" />
                  </span>
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-[#0f766e] p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Need bulk delivery?
              </p>

              <h4 className="mt-2 text-xl font-semibold">
                Contact us for regular jar and bottle supply.
              </h4>

              <a
                href="/contact-us"
                className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold !text-[#0f766e] transition hover:-translate-y-1"
              >
                Contact Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <iframe
              title="2goodplus delivery coverage map"
              src={mapSrc}
              className="h-[420px] w-full border-0 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
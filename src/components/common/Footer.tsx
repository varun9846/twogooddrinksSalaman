export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-white">2gooD</h2>
            <p className="mt-3 text-sm text-slate-400">
              A wellness-first storefront experience built with clean React and Next.js routing.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="/shop" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Stay in touch</h3>
            <p className="mt-4 text-sm text-slate-400">
              Discover wellness products, clean ingredients, and modern shop flows for your next product launch.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} 2gooD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

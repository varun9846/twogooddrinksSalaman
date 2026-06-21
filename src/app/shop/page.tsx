import { Suspense } from "react";
import ShopPageClient from "@/components/shop/ShopPageClient";

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <main>
          <section className="py-[70px] text-center">
            <div className="bb-container flex justify-center">
              <span className="bb-loader-ring" />
            </div>
          </section>
        </main>
      }
    >
      <ShopPageClient />
    </Suspense>
  );
}

import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main>
      <section className="py-[60px]">
        <div className="mx-auto max-w-[760px] px-4">
          <div className="rounded-[24px] bg-white p-[36px] text-center shadow-sm">
            <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#0f766e]">Payment Gateway</p>
            <h1 className="font-quicksand text-[32px] font-bold text-[#3d4750]">Payment will be integrated later</h1>
            <p className="mt-[14px] font-Poppins text-[15px] leading-[26px] text-[#686e7d]">
              Your cart is ready. The payment provider can be connected here in the next phase.
            </p>
            <Link
              href="/my-cart"
              className="mt-[24px] inline-flex rounded-[12px] bg-[#0f766e] px-[24px] py-[12px] font-Poppins text-[14px] font-semibold text-white hover:bg-[#5a6cb8]"
            >
              Back to My Cart
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

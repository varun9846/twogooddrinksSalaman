import MyCartClient from "@/components/cart/MyCartClient";

export default function MyCartPage() {
  return (
    <main>
      <section className="py-[50px] max-[767px]:py-[35px]">
        <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="mb-[30px] text-center">
            <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#0f766e]">Checkout Preview</p>
            <h1 className="font-quicksand text-[34px] font-bold text-[#3d4750] max-[767px]:text-[28px]">
              My Cart
            </h1>
          </div>
          <MyCartClient />
        </div>
      </section>
    </main>
  );
}

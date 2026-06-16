import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/shop/ProductCard";
import ProductActions from "@/components/shop/ProductActions";
import { getRelatedProducts, products } from "@/lib/products";
import { getProductById as getProductByIdFromDb } from "@/lib/services/product.service";
import type { ProductDto } from "@/types/product";

interface ProductDetailsPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product: ProductDto) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = await params;
  const product = await getProductByIdFromDb(productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <main>
      <section className="section-product py-[50px] max-[767px]:py-[35px]">
        <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="mb-[25px] font-Poppins text-[14px] text-[#686e7d]">
            <Link href="/" className="hover:text-[#0f766e]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-[#0f766e]">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-[#3d4750]">{product.product_name}</span>
          </div>

          <div className="grid gap-[35px] rounded-[24px] border border-[#eee] bg-white p-[24px] shadow-sm lg:grid-cols-2">
            <div className="rounded-[20px] bg-[#f8f8fb] p-[25px]">
              <img
                src={product.image}
                alt={product.product_name}
                className="mx-auto h-[480px] max-h-[70vh] w-full object-contain"
              />
            </div>

            <div>
              {product.Badge ? (
                <span className="mb-[14px] inline-block rounded-full bg-[#0f766e] px-[12px] py-[5px] font-Poppins text-[12px] font-semibold text-white">
                  {product.Badge}
                </span>
              ) : null}

              <p className="font-Poppins text-[14px] font-medium text-[#0f766e]">
                {product.product_category}
              </p>

              <h1 className="mt-[8px] font-quicksand text-[34px] max-[767px]:text-[28px] font-bold leading-tight text-[#3d4750]">
                {product.product_name}
              </h1>

              <p className="mt-[16px] font-Poppins text-[15px] leading-[28px] text-[#686e7d]">
                {product.product_description}
              </p>

              <div className="mt-[22px] flex flex-wrap items-center gap-[20px]">
                <span className="font-quicksand text-[28px] font-bold text-[#3d4750]">
                  {product.price}
                </span>
                <span className="rounded-full bg-[#f1f3ff] px-[12px] py-[6px] font-Poppins text-[13px] text-[#0f766e]">
                  {product.Tag}
                </span>
                <span className="font-Poppins text-[14px] text-[#686e7d]">
                  Stock: {product.Stock}
                </span>
              </div>

              <ProductActions productId={product.id} />

              <div className="mt-[28px] grid gap-[12px] sm:grid-cols-3">
                {[
                  "Secure checkout",
                  "Fast delivery",
                  "Fresh stock",
                ].map((item) => (
                  <div key={item} className="rounded-[14px] border border-[#eee] bg-[#f8f8fb] p-[14px] text-center font-Poppins text-[13px] text-[#4b5563]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts?.length > 0 ? (
        <section className="pb-[60px]">
          <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="mb-[28px] text-center">
              <h2 className="font-quicksand text-[30px] font-bold text-[#3d4750]">Related Products</h2>
            </div>
            <div className="grid grid-cols-1 gap-[24px] min-[576px]:grid-cols-2 min-[992px]:grid-cols-4">
              {relatedProducts?.map((relatedProduct: ProductDto) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

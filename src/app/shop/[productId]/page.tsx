import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductActions from "@/components/shop/ProductActions";
import ProductCard from "@/components/shop/ProductCard";
import { getAllProducts, getProductById } from "@/lib/services/product.service";
import type { ProductDto } from "@/types/product";

export const dynamic = "force-dynamic";

interface ProductDetailsPageProps {
  params: Promise<{
    productId: string;
  }>;
}

const productHighlights = [
  { icon: "ri-shield-check-line", label: "Quality focused" },
  { icon: "ri-truck-line", label: "Fast delivery" },
  { icon: "ri-customer-service-2-line", label: "Bulk support" },
];

function splitProductDetails(details?: string | null) {
  if (!details) return [];

  return details
    .split(/\r?\n|•|,|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) {
    notFound();
  }

  const categoryProducts = await getAllProducts(product.product_category);
  const relatedProducts = categoryProducts
    .filter((item) => item.id !== product.id)
    .slice(0, 4);
  const packSize = product.product_packsize ? `${product.product_packsize} ml` : "Standard pack";
  const productDetails = splitProductDetails(product.product_details);

  return (
    <main>
      <Breadcrumb
        title="Product Details"
        current={product.product_name}
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
        ]}
      />

      <section className="section-product py-[50px] max-[767px]:py-[35px]">
        <div className="bb-container">
          <div className="grid gap-[35px] rounded-[24px] border border-[#eee] bg-white p-[24px] shadow-sm lg:grid-cols-[0.95fr_1.05fr]" data-aos="fade-up">
            <div>
              <div className="relative overflow-hidden rounded-[22px] border border-[#eee] bg-[#f8f8fb] p-[25px]">
                {product.Badge ? (
                  <span className="absolute left-[18px] top-[18px] rounded-full bg-[#0f766e] px-[12px] py-[5px] font-Poppins text-[12px] font-semibold text-white">
                    {product.Badge}
                  </span>
                ) : null}
                <img
                  src={product.image}
                  alt={product.product_name}
                  className="mx-auto h-[480px] max-h-[70vh] w-full object-contain transition duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-[16px] grid grid-cols-3 gap-[12px]">
                {[product.image, product.image, product.image].map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="rounded-[16px] border border-[#eee] bg-[#f8f8fb] p-[10px]"
                  >
                    <img
                      src={image}
                      alt={`${product.product_name} ${index + 1}`}
                      className="h-[95px] w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-Poppins text-[14px] font-medium leading-[24px] tracking-[0.03rem] text-[#0f766e]">
                {product.product_category}
              </p>
              <h1 className="mt-[8px] font-quicksand text-[36px] font-bold leading-[1.2] tracking-[0.03rem] text-[#3d4750] max-[767px]:text-[30px]">
                {product.product_name}
              </h1>

              <div className="mt-[12px] flex flex-wrap items-center gap-[12px]">
                <span className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <i key={star} className="ri-star-fill mr-[2px] text-[16px] text-[#fea99a]" />
                  ))}
                  <i className="ri-star-line text-[16px] text-[#777]" />
                </span>
                <span className="font-Poppins text-[13px] text-[#686e7d]">Fresh stock available</span>
              </div>

              <p className="mt-[18px] font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                {product.product_subdescription || product.product_description}
              </p>

              <div className="mt-[22px] flex flex-wrap items-center gap-[14px]">
                <span className="font-quicksand text-[30px] font-bold text-[#3d4750]">
                  {product.price}
                </span>
                {product.Tag ? (
                  <span className="rounded-full bg-[#f0fdfa] px-[12px] py-[6px] font-Poppins text-[13px] text-[#0f766e]">
                    {product.Tag}
                  </span>
                ) : null}
                <span className="rounded-full bg-[#f8f8fb] px-[12px] py-[6px] font-Poppins text-[13px] text-[#686e7d]">
                  {packSize}
                </span>
                <span className="rounded-full bg-[#f8f8fb] px-[12px] py-[6px] font-Poppins text-[13px] text-[#686e7d]">
                  Stock: {product.Stock}
                </span>
              </div>

              <ProductActions productId={product.id} />

              <div className="mt-[28px] grid gap-[12px] sm:grid-cols-3">
                {productHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[14px] border border-[#eee] bg-[#f8f8fb] p-[14px] text-center"
                  >
                    <i className={`${item.icon} mb-[6px] block text-[24px] text-[#0f766e]`} />
                    <p className="font-Poppins text-[13px] text-[#4b5563]">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-[28px] rounded-[18px] border border-[#eee] bg-[#f8f8fb] p-[18px]">
                <h3 className="mb-[8px] font-quicksand text-[18px] font-bold text-[#3d4750]">
                  Need bulk quantity?
                </h3>
                <p className="font-Poppins text-[14px] font-light leading-[25px] text-[#686e7d]">
                  Bulk order rates are negotiable based on quantity requirements. Contact us for a custom quotation.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-[14px] inline-flex font-Poppins text-[14px] font-semibold text-[#0f766e] hover:text-[#3d4750]"
                >
                  Contact for bulk orders <i className="ri-arrow-right-line ml-[5px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-product-description pb-[50px] max-[767px]:pb-[35px]">
        <div className="bb-container">
          <div className="rounded-[24px] border border-[#eee] bg-white shadow-sm" data-aos="fade-up">
            <div className="flex flex-wrap border-b border-[#eee]">
              <div className="border-r border-[#eee] px-[24px] py-[16px]">
                <span className="font-quicksand text-[17px] font-bold text-[#0f766e]">
                  Description
                </span>
              </div>
              <div className="px-[24px] py-[16px]">
                <span className="font-quicksand text-[17px] font-bold text-[#3d4750]">
                  Product Details
                </span>
              </div>
            </div>

            <div className="grid gap-[30px] p-[28px] lg:grid-cols-2">
              <div>
                <h2 className="mb-[12px] font-quicksand text-[24px] font-bold text-[#3d4750]">
                  Product Description
                </h2>
                <p className="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                  {product.product_description}
                </p>
              </div>

              <div>
                <h2 className="mb-[12px] font-quicksand text-[24px] font-bold text-[#3d4750]">
                  Product Details
                </h2>
                {productDetails.length > 0 ? (
                  <ul className="space-y-[12px]">
                    {productDetails.map((detail) => (
                      <li key={detail} className="flex gap-[10px] font-Poppins text-[15px] font-light leading-[26px] text-[#686e7d]">
                        <i className="ri-check-double-line mt-[4px] text-[18px] text-[#0f766e]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-Poppins text-[15px] font-light leading-[28px] text-[#686e7d]">
                    Product details will be updated soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="section-related-product bg-white py-[50px] max-[767px]:py-[35px]">
          <div className="bb-container">
            <div className="mb-[28px] text-center" data-aos="fade-up">
              <p className="mb-[8px] font-Poppins text-[14px] font-medium uppercase tracking-[0.18rem] text-[#0f766e]">
                Related Products
              </p>
              <h2 className="font-quicksand text-[32px] font-bold text-[#3d4750]">
                You may also like
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-[24px] min-[576px]:grid-cols-2 min-[992px]:grid-cols-4">
              {relatedProducts.map((relatedProduct: ProductDto, index) => (
                <div key={relatedProduct.id} data-aos="fade-up" data-aos-delay={index * 80}>
                  <ProductCard product={relatedProduct} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

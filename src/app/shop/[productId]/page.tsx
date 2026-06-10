import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/shop/ProductCard";


import {
  getProductById,
  getRelatedProducts,
  productCategories,
  products,
} from "@/lib/products";

interface ProductDetailsPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <main>
      <section className="section-product py-[50px] max-[767px]:py-[35px]">
        <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="mb-[30px]">
            <p className="font-Poppins text-[14px] text-[#686e7d]">
              <Link href="/" className="hover:text-[#6c7fd8]">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/shop" className="hover:text-[#6c7fd8]">
                Shop
              </Link>{" "}
              / <span className="text-[#3d4750]">{product.product_name}</span>
            </p>
          </div>

          <div className="flex flex-wrap mx-[-12px]">
            <aside className="min-[992px]:w-[25%] w-full px-[12px] max-[991px]:order-2 max-[991px]:mt-[30px]">
              <div className="bb-shop-sidebar sticky top-[20px]">
                <div className="border border-[#eee] rounded-[20px] p-[20px] mb-[24px]">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#3d4750] mb-[18px]">
                    Categories
                  </h4>

                  <ul>
                    {productCategories.map((category) => (
                      <li
                        key={category}
                        className="flex items-center justify-between border-b border-[#eee] last:border-b-0 py-[10px]"
                      >
                        <span className="font-Poppins text-[14px] text-[#686e7d]">
                          {category}
                        </span>
                        <span className="font-Poppins text-[13px] text-[#777]">
                          {
                            products.filter(
                              (item) => item.product_category === category
                            ).length
                          }
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[#eee] rounded-[20px] p-[20px]">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#3d4750] mb-[18px]">
                    Latest Products
                  </h4>

                  <div className="space-y-[16px]">
                    {products.slice(0, 4).map((item) => (
                      <Link
                        href={`/shop/${item.id}`}
                        key={item.id}
                        className="flex gap-[12px] group"
                      >
                        <img
                          src={item.image}
                          alt={item.product_name}
                          className="w-[70px] h-[70px] object-contain border border-[#eee] rounded-[12px] p-[6px]"
                        />

                        <div>
                          <h5 className="font-quicksand text-[14px] font-semibold text-[#3d4750] group-hover:text-[#6c7fd8] line-clamp-2">
                            {item.product_name}
                          </h5>
                          <p className="font-Poppins text-[13px] text-[#686e7d] mt-[4px]">
                            {item.price}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="min-[992px]:w-[75%] w-full px-[12px]">
              <div className="flex flex-wrap mx-[-12px]">
                <div className="min-[768px]:w-[50%] w-full px-[12px]">
                  <div className="bb-single-pro-img border border-[#eee] rounded-[20px] overflow-hidden bg-[#f8f8fb]">
                    <img
                      src={product.image}
                      alt={product.product_name}
                      className="w-full h-[520px] max-[767px]:h-[360px] object-contain p-[30px]"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-[12px] mt-[16px]">
                    {[product.image, product.image, product.image, product.image].map(
                      (image, index) => (
                        <div
                          key={`${image}-${index}`}
                          className="border border-[#eee] rounded-[14px] bg-[#fff] p-[8px]"
                        >
                          <img
                            src={image}
                            alt={`${product.product_name} ${index + 1}`}
                            className="w-full h-[80px] object-contain"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="min-[768px]:w-[50%] w-full px-[12px] max-[767px]:mt-[30px]">
                  <div className="bb-single-pro-contact">
                    <span className="inline-block mb-[12px] bg-[#f1f3ff] text-[#6c7fd8] font-Poppins text-[13px] px-[12px] py-[5px] rounded-full">
                      {product.Tag}
                    </span>

                    <h1 className="font-quicksand text-[30px] max-[575px]:text-[24px] leading-[1.3] font-bold text-[#3d4750] mb-[12px]">
                      {product.product_name}
                    </h1>

                    <div className="flex items-center gap-[10px] mb-[16px]">
                      <span className="flex">
                        <i className="ri-star-fill text-[17px] mr-[2px] text-[#fea99a]" />
                        <i className="ri-star-fill text-[17px] mr-[2px] text-[#fea99a]" />
                        <i className="ri-star-fill text-[17px] mr-[2px] text-[#fea99a]" />
                        <i className="ri-star-fill text-[17px] mr-[2px] text-[#fea99a]" />
                        <i className="ri-star-line text-[17px] text-[#777]" />
                      </span>
                      <span className="font-Poppins text-[14px] text-[#686e7d]">
                        992 Ratings
                      </span>
                    </div>

                    <p className="font-Poppins text-[15px] text-[#686e7d] leading-[28px] mb-[20px]">
                      {product.product_description}
                    </p>

                    <div className="mb-[20px]">
                      <span className="font-quicksand text-[28px] font-bold text-[#3d4750]">
                        {product.price}
                      </span>
                    </div>

                    <ul className="space-y-[10px] mb-[24px]">
                      <li className="font-Poppins text-[14px] text-[#686e7d]">
                        <span className="font-semibold text-[#3d4750]">Category:</span>{" "}
                        {product.product_category}
                      </li>
                      <li className="font-Poppins text-[14px] text-[#686e7d]">
                        <span className="font-semibold text-[#3d4750]">SKU:</span>{" "}
                        {product.id.toUpperCase()}
                      </li>
                      <li className="font-Poppins text-[14px] text-[#686e7d]">
                        <span className="font-semibold text-[#3d4750]">Stock:</span>{" "}
                        {product.Stock > 0 ? `${product.Stock} In stock` : "Out of stock"}
                      </li>
                      <li className="font-Poppins text-[14px] text-[#686e7d]">
                        <span className="font-semibold text-[#3d4750]">Badge:</span>{" "}
                        {product.Badge ?? "Regular"}
                      </li>
                    </ul>

                    <div className="mb-[24px]">
                      <h5 className="font-quicksand text-[16px] font-bold text-[#3d4750] mb-[10px]">
                        Weight
                      </h5>

                      <div className="flex flex-wrap gap-[10px]">
                        {["250g", "500g", "1kg", "2kg"].map((weight) => (
                          <button
                            key={weight}
                            className="border border-[#eee] rounded-[10px] px-[14px] py-[8px] font-Poppins text-[14px] text-[#686e7d] hover:border-[#6c7fd8] hover:text-[#6c7fd8]"
                          >
                            {weight}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-[12px]">
                      <button className="bg-[#6c7fd8] text-white font-Poppins text-[14px] font-medium px-[24px] py-[12px] rounded-[10px] hover:bg-[#3d4750] transition-all duration-300">
                        Add To Cart
                      </button>

                      <button className="border border-[#eee] text-[#3d4750] font-Poppins text-[14px] font-medium px-[24px] py-[12px] rounded-[10px] hover:border-[#6c7fd8] hover:text-[#6c7fd8] transition-all duration-300">
                        View Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bb-single-pro-tab mt-[50px] border border-[#eee] rounded-[20px] p-[24px]">
                <div className="flex flex-wrap gap-[20px] border-b border-[#eee] pb-[14px] mb-[18px]">
                  <button className="font-quicksand text-[16px] font-bold text-[#6c7fd8]">
                    Detail
                  </button>
                  <button className="font-quicksand text-[16px] font-bold text-[#3d4750]">
                    Information
                  </button>
                  <button className="font-quicksand text-[16px] font-bold text-[#3d4750]">
                    Reviews
                  </button>
                </div>

                <p className="font-Poppins text-[14px] text-[#686e7d] leading-[28px] mb-[18px]">
                  {product.product_description} This product is selected for daily
                  wellness routines, hydration support and easy lifestyle usage.
                </p>

                <ul className="grid min-[768px]:grid-cols-2 gap-[12px]">
                  <li className="font-Poppins text-[14px] text-[#686e7d]">
                    <span className="font-semibold text-[#3d4750]">Form Factor:</span>{" "}
                    Whole Seller
                  </li>
                  <li className="font-Poppins text-[14px] text-[#686e7d]">
                    <span className="font-semibold text-[#3d4750]">Quantity:</span> 1
                  </li>
                  <li className="font-Poppins text-[14px] text-[#686e7d]">
                    <span className="font-semibold text-[#3d4750]">Container:</span> Pouch
                  </li>
                  <li className="font-Poppins text-[14px] text-[#686e7d]">
                    <span className="font-semibold text-[#3d4750]">Shelf Life:</span> 12
                    Months
                  </li>
                </ul>
              </div>

              {relatedProducts.length > 0 && (
                <div className="mt-[50px]">
                  <h2 className="font-quicksand text-[26px] font-bold text-[#3d4750] mb-[24px]">
                    Related Products
                  </h2>

                  <div className="grid grid-cols-1 min-[576px]:grid-cols-2 min-[1200px]:grid-cols-4 gap-[24px]">
                    {relatedProducts.map((item) => (
                      <ProductCard key={item.id} product={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
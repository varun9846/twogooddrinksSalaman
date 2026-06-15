import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductActions from "@/components/shop/ProductActions";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  return (
    <div className="bb-pro-box bg-[#fff] border border-[#eee] rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="bb-pro-img relative overflow-hidden border-b border-[#eee]">
        <Link href={`/shop/${product.id}`} className="block bg-[#f8f8fb]">
          <img
            src={product.image}
            alt={product.product_name}
            className="w-full h-[260px] object-contain p-[20px] transition-all duration-300 hover:scale-105"
          />
        </Link>

        {product.Badge && (
          <span className="absolute top-[15px] left-[15px] bg-[#6c7fd8] text-white text-[12px] font-Poppins px-[12px] py-[4px] rounded-[20px]">
            {product.Badge}
          </span>
        )}
      </div>

      <div className="bb-pro-contact p-[20px]">
        <div className="bb-pro-subtitle mb-[8px] flex items-center justify-between">
          <span className="font-Poppins text-[13px] text-[#777]">
            {product.product_category}
          </span>

          <span className="flex">
            <i className="ri-star-fill text-[15px] mr-[2px] text-[#fea99a]" />
            <i className="ri-star-fill text-[15px] mr-[2px] text-[#fea99a]" />
            <i className="ri-star-fill text-[15px] mr-[2px] text-[#fea99a]" />
            <i className="ri-star-fill text-[15px] mr-[2px] text-[#fea99a]" />
            <i className="ri-star-line text-[15px] text-[#777]" />
          </span>
        </div>

        <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
          <Link
            href={`/shop/${product.id}`}
            className="font-quicksand block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem] hover:text-[#6c7fd8]"
          >
            {product.product_name}
          </Link>
        </h4>

        <p className="font-Poppins text-[14px] text-[#686e7d] font-light leading-[24px] tracking-[0.03rem] mb-[14px] line-clamp-2">
          {product.product_description}
        </p>

        <div className="bb-price flex items-center justify-between">
          <div>
            <span className="new-price text-[#686e7d] font-quicksand text-[16px] font-bold">
              {product.price}
            </span>
          </div>

          <span className="font-Poppins text-[13px] text-[#777]">
            Stock: {product.Stock}
          </span>
        </div>

        <div className="mt-[14px]">
          <span className="inline-block text-[12px] font-Poppins text-[#6c7fd8] bg-[#f1f3ff] px-[10px] py-[4px] rounded-full">
            {product.Tag}
          </span>
        </div>

        <ProductActions productId={product.id} compact />
      </div>
    </div>
  );
}

import Link from "next/link";
import ProductActions from "@/components/shop/ProductActions";
import type { ProductDto } from "@/types/product";

interface ProductCardProps {
  product: ProductDto;
}

export default function ProductCard({ product }: ProductCardProps) {
  const packSize = product.product_packsize ? `${product.product_packsize} ml` : "Pack";

  return (
    <article className="bb-pro-box group h-full overflow-hidden rounded-[20px] border border-[#eee] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
      <div className="bb-pro-img relative overflow-hidden border-b border-[#eee] bg-[#f8f8fb]">
        <Link href={`/shop/${product.id}`} className="block">
          <img
            src={product.image}
            alt={product.product_name}
            className="max-h-[260px] h-auto w-full object-contain p-[22px] transition-all duration-500 group-hover:scale-110"
          />
        </Link>

        {product.Badge ? (
          <span className="absolute left-[15px] top-[15px] rounded-[20px] bg-[#0f766e] px-[12px] py-[4px] font-Poppins text-[12px] font-medium text-white">
            {product.Badge}
          </span>
        ) : null}

        <div className="absolute right-[15px] top-[15px] flex flex-col gap-[8px] opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Link
            href={`/shop/${product.id}`}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-white text-[#0f766e] shadow-sm transition hover:bg-[#0f766e] hover:text-white"
            aria-label={`View ${product.product_name}`}
          >
            <i className="ri-eye-line text-[18px]" />
          </Link>
        </div>
      </div>

      <div className="bb-pro-contact p-[20px]">
        <div className="bb-pro-subtitle mb-[8px] flex items-center justify-between gap-[12px]">
          <span className="line-clamp-1 font-Poppins text-[13px] font-light tracking-[0.03rem] text-[#777]">
            {product.product_category}
          </span>
          <span className="flex shrink-0">
            {[1, 2, 3, 4].map((star) => (
              <i key={star} className="ri-star-fill mr-[2px] text-[15px] text-[#fea99a]" />
            ))}
            <i className="ri-star-line text-[15px] text-[#777]" />
          </span>
        </div>

        <h3 className="bb-pro-title mb-[8px]">
          <Link
            href={`/shop/${product.id}`}
            className="line-clamp-1 font-quicksand text-[16px] font-bold leading-[20px] tracking-[0.03rem] text-[#3d4750] transition hover:text-[#0f766e]"
          >
            {product.product_name}
          </Link>
        </h3>

        <p className="mb-[14px] line-clamp-2 font-Poppins text-[14px] font-light leading-[24px] tracking-[0.03rem] text-[#686e7d]">
          {product.product_description}
        </p>

        <div className="bb-price flex items-center justify-between gap-[12px]">
          <span className="new-price font-quicksand text-[18px] font-bold text-[#3d4750]">
            {product.price}
          </span>
          <span className="rounded-full bg-[#f0fdfa] px-[10px] py-[4px] font-Poppins text-[12px] text-[#0f766e]">
            {packSize}
          </span>
        </div>

        <div className="mt-[12px] flex flex-wrap items-center gap-[8px]">
          {product.Tag ? (
            <span className="inline-block rounded-full bg-[#f8f8fb] px-[10px] py-[4px] font-Poppins text-[12px] text-[#686e7d]">
              {product.Tag}
            </span>
          ) : null}
          <span className="inline-block rounded-full bg-[#f8f8fb] px-[10px] py-[4px] font-Poppins text-[12px] text-[#686e7d]">
            Stock: {product.Stock}
          </span>
        </div>

        <ProductActions productId={product.id} compact />
      </div>
    </article>
  );
}

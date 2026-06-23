import type { Product } from "@prisma/client";
import { formatPrice, roundCurrency, toNumber } from "@/lib/utils/numbers";
import type { ProductDto } from "@/types/product";

export function toProductDto(product: Product): ProductDto {
  return {
    id: product.id,
    product_name: product.productName,
    product_packsize: product.productPacksize,
    product_description: product.productDescription,
    product_subdescription: product.productSubDescription,
    product_details: product.productDetails,
    product_category: product.productCategory,
    price: formatPrice(product.price),
    Stock: product.stock,
    image: product.image,
    Badge: product.badge ?? undefined,
    Tag: product.tag ?? "",
    isActive: product.isActive,
  };
}

export function toProductDtoList(products: Product[]): ProductDto[] {
  return products.map(toProductDto);
}

export function getLineTotal(quantity: number, price: Product["price"]): number {
  return roundCurrency(toNumber(price) * quantity);
}

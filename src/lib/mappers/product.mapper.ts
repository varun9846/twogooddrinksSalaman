import type { Product } from "@prisma/client";
import type { ProductDto } from "@/types/product";
import { formatPrice, toNumber } from "@/lib/utils/numbers";

export function toProductDto(product: Product): ProductDto {
  return {
    id: product.id,
    product_name: product.productName,
    product_packsize: product.productPacksize,
    product_description: product.productDescription,
    product_category: product.productCategory,
    price: formatPrice(product.price),
    Stock: product.stock,
    image: product.image,
    Badge: product.badge ?? undefined,
    Tag: product.tag ?? "",
    isActive: true,
  };
}

export function toProductDtoList(products: Product[]): ProductDto[] {
  return products.map(toProductDto);
}

export function getLineTotal(quantity: number, price: Product["price"]): number {
  return toNumber(price) * quantity;
}

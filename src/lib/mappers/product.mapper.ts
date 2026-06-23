import type { Badge, Category, Prisma, Product, Tag } from "@prisma/client";
import { formatPrice, roundCurrency, toNumber } from "@/lib/utils/numbers";
import type { ProductDto, ProductLookupDto } from "@/types/product";

export type ProductWithRelations = Product & {
  category?: Category | null;
  badge?: Badge | null;
  tag?: Tag | null;
};

type LookupRecord = {
  id: string;
  name: string;
};

export function toProductDto(product: ProductWithRelations): ProductDto {
  const categoryName = product.category?.name ?? product.productCategory;
  const badgeName = product.badge?.name ?? null;
  const tagName = product.tag?.name ?? "";

  return {
    id: product.id,
    product_name: product.productName,
    product_packsize: product.productPacksize,
    product_description: product.productDescription,
    product_subdescription: product.productSubDescription,
    product_details: product.productDetails,
    product_category: categoryName,
    product_category_id: product.productCategory,
    price: formatPrice(product.price),
    Stock: product.stock,
    image: product.image,
    Badge: badgeName,
    badge_id: product.badgeId ?? null,
    Tag: tagName,
    tag_id: product.tagId ?? null,
    isActive: product.isActive,
  };
}

export function toProductDtoList(products: ProductWithRelations[]): ProductDto[] {
  return products.map(toProductDto);
}

export function toLookupDto(item: LookupRecord): ProductLookupDto {
  return {
    id: item.id,
    name: item.name,
  };
}

export function toLookupDtoList(items: LookupRecord[]): ProductLookupDto[] {
  return items.map(toLookupDto);
}

export function getLineTotal(quantity: number, price: Prisma.Decimal): number {
  return roundCurrency(toNumber(price) * quantity);
}

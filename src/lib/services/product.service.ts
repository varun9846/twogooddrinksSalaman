import { Prisma } from "@prisma/client";
import { toProductDto, toProductDtoList } from "@/lib/mappers/product.mapper";
import { prisma } from "@/lib/prisma";
import type { ProductDto } from "@/types/product";

export const PRODUCT_MENU_CATEGORIES = [
  "Healthy Drinks",
  "Packaged Drinking Water",
  "Herbal Infusions",
] as const;

export type ProductMenuCategoryName =
  (typeof PRODUCT_MENU_CATEGORIES)[number];

export interface ProductMenuItem {
  id: string;
  name: string;
  href: string;
}

export interface ProductMenuCategory {
  category: ProductMenuCategoryName;
  href: string;
  products: ProductMenuItem[];
}

export async function getAllProducts(category?: string): Promise<ProductDto[]> {
  const where: Prisma.ProductWhereInput = {};

  if (category) {
    where.productCategory = {
      equals: category,
      mode: "insensitive",
    };
  }

  const products = await prisma.product.findMany({
    where :{isActive: true},
    orderBy: {
      createdAt: "desc",
    },
  });

  return toProductDtoList(products);
}

export async function getProductById(
  productId: string,
): Promise<ProductDto | null> {
  const product = await prisma.product.findUnique({
    where: {
      isActive: true,
      id: productId,
    },
  });

  return product ? toProductDto(product) : null;
}

export async function getProductMenu(): Promise<ProductMenuCategory[]> {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
      productCategory: {
        in: [...PRODUCT_MENU_CATEGORIES],
      },
    },
    select: {id: true,productName: true,productCategory: true,},
    orderBy: [{productCategory: "desc",},{productName: "desc",},],
  });

  return PRODUCT_MENU_CATEGORIES.map((category) => ({
    category,
    href: `/shop?category=${encodeURIComponent(category)}`,
    products: products
      .filter((product) => product.productCategory === category)
      .map((product) => ({
        id: product.id,
        name: product.productName,
        href: `/shop/${product.id}`,
      })),
  }));
}

export const productService = {
  getAllProducts,
  getProductById,
  getProductMenu,
};

export default productService;

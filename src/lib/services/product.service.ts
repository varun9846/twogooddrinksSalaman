import type { Prisma } from "@prisma/client";
import { toProductDto, toProductDtoList } from "@/lib/mappers/product.mapper";
import { prisma } from "@/lib/prisma";
import type { ProductDto } from "@/types/product";
import type {
  ProductMenuCategory,
  ProductMenuItem,
} from "@/types/product.response";

function normalizeCategory(category: string) {
  return category.trim();
}

export async function getAllProducts(category?: string): Promise<ProductDto[]> {
  const where: Prisma.ProductWhereInput = {
    isActive: true,
  };

  const cleanCategory = category?.trim();

  if (cleanCategory) {
    where.productCategory = {
      equals: cleanCategory,
      mode: "insensitive",
    };
  }

  const products = await prisma.product.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });

  return toProductDtoList(products);
}

export async function getProductById(
  productId: string,
): Promise<ProductDto | null> {
  const cleanProductId = productId.trim();

  if (!cleanProductId) return null;

  const product = await prisma.product.findFirst({
    where: {
      id: cleanProductId,
      isActive: true,
    },
  });

  return product ? toProductDto(product) : null;
}

export async function getProductMenu(): Promise<ProductMenuCategory[]> {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      productName: true,
      productCategory: true,
    },
    orderBy: [
      {
        productCategory: "asc",
      },
      {
        productName: "asc",
      },
    ],
  });

  const menuMap = new Map<string, ProductMenuItem[]>();

  products.forEach((product) => {
    const category = normalizeCategory(product.productCategory);
    if (!category) return;

    const currentProducts = menuMap.get(category) ?? [];

    currentProducts.push({
      id: product.id,
      name: product.productName,
      href: `/shop/${product.id}`,
    });

    menuMap.set(category, currentProducts);
  });

  return Array.from(menuMap.entries())
    .sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB))
    .map(([category, products]) => ({
      category,
      href: `/shop?category=${encodeURIComponent(category)}`,
      products,
    }));
}

export const productService = {
  getAllProducts,
  getProductById,
  getProductMenu,
};

export default productService;

import type { Prisma } from "@prisma/client";
import { toProductDto, toProductDtoList } from "@/lib/mappers/product.mapper";
import { prisma } from "@/lib/prisma";
import type { ProductDto } from "@/types/product";
import type {
  ProductMenuCategory,
  ProductMenuItem,
} from "@/types/product.response";

const productInclude = {
  category: true,
  badge: true,
  tag: true,
} satisfies Prisma.ProductInclude;

function normalizeText(value: string) {
  return value.trim();
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

function buildCategoryFilter(category?: string): Prisma.ProductWhereInput | undefined {
  const cleanCategory = category?.trim();
  if (!cleanCategory) return undefined;

  const filters: Prisma.ProductWhereInput[] = [
    {
      category: {
        is: {
          name: {
            equals: cleanCategory,
            mode: "insensitive",
          },
        },
      },
    },
  ];

  if (isUuid(cleanCategory)) {
    filters.push({ productCategory: cleanCategory });
  }

  return { OR: filters };
}

export async function getAllProducts(category?: string): Promise<ProductDto[]> {
  const where: Prisma.ProductWhereInput = {
    isActive: true,
    ...buildCategoryFilter(category),
  };

  const products = await prisma.product.findMany({
    where,
    include: productInclude,
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
    include: productInclude,
  });

  return product ? toProductDto(product) : null;
}

export async function getProductMenu(): Promise<ProductMenuCategory[]> {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
      category: {
        is: {
          isActive: true,
        },
      },
    },
    select: {
      id: true,
      productName: true,
      category: {
        select: {
          name: true,
        },
      },
    },
    orderBy: [
      {
        category: {
          name: "asc",
        },
      },
      {
        productName: "asc",
      },
    ],
  });

  const menuMap = new Map<string, ProductMenuItem[]>();

  products.forEach((product) => {
    const category = normalizeText(product.category.name);
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

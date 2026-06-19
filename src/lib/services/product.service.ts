import { toProductDto, toProductDtoList } from "@/lib/mappers/product.mapper";
import { prisma } from "@/lib/prisma";
import type { ProductDto } from "@/types/product";

export async function getAllProducts(): Promise<ProductDto[]> {
  

 const products = await prisma.product.findMany({
  where: { isActive: true },
  orderBy: { createdAt: "desc"},
});
  return toProductDtoList(products);
}

export async function getProductById(productId: string): Promise<ProductDto | null> {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  return product ? toProductDto(product) : null;
}

export const productService = {
  getAllProducts,
  getProductById,
};

export default productService;

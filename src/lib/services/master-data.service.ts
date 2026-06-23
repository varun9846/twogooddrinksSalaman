import { toLookupDtoList } from "@/lib/mappers/product.mapper";
import { prisma } from "@/lib/prisma";
import type { ProductLookupDto } from "@/types/product";

const activeLookupOrder = {
  name: "asc",
} as const;

export async function getActiveCategories(): Promise<ProductLookupDto[]> {
  const categories = await prisma.category.findMany({
    where: { isActive: true },
    select: { id: true, name: true },
    orderBy: activeLookupOrder,
  });

  return toLookupDtoList(categories);
}

export async function getActiveBadges(): Promise<ProductLookupDto[]> {
  const badges = await prisma.badge.findMany({
    where: { isActive: true },
    select: { id: true, name: true },
    orderBy: activeLookupOrder,
  });

  return toLookupDtoList(badges);
}

export async function getActiveTags(): Promise<ProductLookupDto[]> {
  const tags = await prisma.tag.findMany({
    where: { isActive: true },
    select: { id: true, name: true },
    orderBy: activeLookupOrder,
  });

  return toLookupDtoList(tags);
}

export const masterDataService = {
  getActiveCategories,
  getActiveBadges,
  getActiveTags,
};

export default masterDataService;

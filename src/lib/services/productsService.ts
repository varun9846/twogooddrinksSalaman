import apiClient from "@/lib/apiClient";
import type { ProductDto } from "@/types/product";

export type ProductApiResponse = ProductDto;

export interface ProductMenuItem {
  id: string;
  name: string;
  href: string;
}

export interface ProductMenuCategory {
  category: string;
  href: string;
  products: ProductMenuItem[];
}

export const productsService = {
  getAllProducts: async (category?: string) => {
    const response = await apiClient.post<{
      success: boolean;
      product: ProductApiResponse | null;
      products: ProductApiResponse[];
    }>("/api/products", {
      category,
    });

    return response.data;
  },

  getProductById: async (productId: string) => {
    const response = await apiClient.post<{
      success: boolean;
      product: ProductApiResponse | null;
      products: ProductApiResponse[];
    }>("/api/products", {
      productId,
    });

    return response.data;
  },

  getProductMenu: async () => {
    const response = await apiClient.post<{
      success: boolean;
      menu: ProductMenuCategory[];
    }>("/api/products/menu", {});

    return response.data;
  },
};

export default productsService;

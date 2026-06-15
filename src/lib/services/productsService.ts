import apiClient from "@/lib/apiClient";
import type { ProductDto } from "@/types/product";

export type ProductApiResponse = ProductDto;

export const productsService = {
  getAllProducts: async () => {
    const response = await apiClient.get<{
      success: boolean;
      products: ProductApiResponse[];
    }>("/api/products");

    return response.data;
  },

  getProductById: async (productId: string) => {
    const response = await apiClient.get<{
      success: boolean;
      product: ProductApiResponse | null;
    }>("/api/products", {
      params: { productId },
    });

    return response.data;
  },
};

export default productsService;

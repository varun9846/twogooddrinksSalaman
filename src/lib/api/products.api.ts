import apiClient from "@/lib/apiClient";
import type {
  ProductMenuApiResponse,
  ProductMenuCategory,
  ProductsApiResponse,
} from "@/types/product.response";

export type { ProductMenuCategory, ProductsApiResponse };

export const productsApi = {
  getAllProducts: async (category?: string) => {
    const response = await apiClient.post<ProductsApiResponse>("/api/products", {
      category,
    });
    return response.data;
  },

  getProductById: async (productId: string) => {
    const response = await apiClient.post<ProductsApiResponse>("/api/products", {
      productId,
    });
    return response.data;
  },

  getProductMenu: async () => {
    const response = await apiClient.post<ProductMenuApiResponse>(
      "/api/products/menu",
      {},
    );
    return response.data;
  },
};

export default productsApi;

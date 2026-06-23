import type { ApiResponse } from "@/types/api";
import type { ProductDto, ProductLookupDto } from "@/types/product";

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

export type ProductsPayload = {
  success: true;
  product: ProductDto | null;
  products: ProductDto[];
};

export type ProductsApiResponse = ApiResponse<ProductsPayload> & ProductsPayload;

export type ProductMenuPayload = {
  success: true;
  menu: ProductMenuCategory[];
};

export type ProductMenuApiResponse = ApiResponse<ProductMenuPayload> & ProductMenuPayload;

export type ProductLookupPayload = {
  success: true;
  items: ProductLookupDto[];
};

export type ProductLookupApiResponse = ApiResponse<ProductLookupPayload> &
  ProductLookupPayload;

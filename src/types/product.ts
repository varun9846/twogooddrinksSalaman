export interface ProductDto {
  id: string;
  product_name: string;
  product_description: string;
  product_category: string;
  price: string;
  Stock: number;
  image: string;
  Badge?: string;
  Tag: string;
  isActive: boolean;
  product_packsize: number;
}

export interface ProductsListResponse {
  success: boolean;
  products: ProductDto[];
  product?: ProductDto | null;
}

export interface ProductDetailResponse {
  success: boolean;
  product: ProductDto | null;
  products: ProductDto[];
}

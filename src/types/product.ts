export interface ProductDto {
  id: string;
  product_name: string;
  product_description: string;
  product_subdescription: string;
  product_details: string;
  product_category: string;
  product_category_id?: string;
  price: string;
  Stock: number;
  image: string;
  Badge?: string | null;
  badge_id?: string | null;
  Tag: string;
  tag_id?: string | null;
  isActive?: boolean;
  product_packsize?: number | null;
}

export interface ProductLookupDto {
  id: string;
  name: string;
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

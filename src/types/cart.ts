export interface CartProduct {
  id: string;
  product_name: string;
  product_description: string;
  product_subdescription: string;
  product_details: string;
  product_category: string;
  price: number;
  stock: number;
  image: string;
  badge: string | null;
  tag: string | null;
}

export interface CartItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  line_total: number;
  product: CartProduct;
}

export interface Cart {
  order_id: string | null;
  total: number;
  item_count: number;
  items: CartItem[];
}

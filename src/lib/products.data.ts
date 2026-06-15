import type { ProductDto } from "@/types/product";

export const products: ProductDto[] = [
  {
    id: "pure-spring-water-daily-pack",
    product_name: "Pure Spring Water Daily Pack",
    product_description: "Clean and refreshing bottled water for everyday hydration.",
    product_category: "Natural Drinking Water",
    price: "$15",
    Stock: 24,
    image: "/assets/img/new-product/1.jpg",
    Badge: "New",
    Tag: "Hydration",
  },
  {
    id: "roofaza-jeera-refresh-drink",
    product_name: "Roofaza Jeera Refresh Drink",
    product_description: "A refreshing cumin-based drink crafted for flavorful hydration.",
    product_category: "Jeera Drink",
    price: "$25",
    Stock: 18,
    image: "/assets/img/new-product/2.jpg",
    Badge: "Popular",
    Tag: "Wellness Drink",
  },
  {
    id: "blueberry-jeera-crunch-mix",
    product_name: "BlueBerry Jeera Crunch Mix",
    product_description: "Light, flavorful snack bites for mindful everyday munching.",
    product_category: "Healthy Snacks",
    price: "$10",
    Stock: 30,
    image: "/assets/img/new-product/3.jpg",
    Badge: "Best Seller",
    Tag: "Snack",
  },
  {
    id: "calm-herbal-orange-refill-pack",
    product_name: "Calm Herbal Orange Refill Pack",
    product_description: "A soothing infusion blend made for restful, calming moments.",
    product_category: "Herbal Infusion",
    price: "$25",
    Stock: 16,
    image: "/assets/img/new-product/4.jpg",
    Badge: "New",
    Tag: "Herbal",
  },
  {
    id: "avacardo-cumin-wellness-jar",
    product_name: "Avacardo Cumin Wellness Jar",
    product_description: "Pantry essential made to elevate wellness drinks and recipes.",
    product_category: "Wellness Jar",
    price: "$32",
    Stock: 14,
    image: "/assets/img/new-product/5.jpg",
    Badge: "Trending",
    Tag: "Wellness",
  },
  {
    id: "cardamom-herbal-tea-blend",
    product_name: "Cardamom Herbal Tea Blend",
    product_description: "A warm and aromatic blend perfect for daily tea rituals.",
    product_category: "Herbal Tea",
    price: "$41",
    Stock: 20,
    image: "/assets/img/new-product/6.jpg",
    Badge: "Premium",
    Tag: "Tea",
  },
  {
    id: "spiced-millet-energy-bites",
    product_name: "Spiced Millet Energy Bites",
    product_description: "Nutritious crunchy bites made for wholesome snacking.",
    product_category: "Healthy Snacks",
    price: "$29",
    Stock: 22,
    image: "/assets/img/new-product/7.jpg",
    Badge: "Hot",
    Tag: "Energy",
  },
  {
    id: "date-sweetened-wellness-dip",
    product_name: "Date Sweetened Wellness Dip",
    product_description: "Naturally sweet dip for healthy snack platters and light bites.",
    product_category: "Wellness Dip",
    price: "$9",
    Stock: 12,
    image: "/assets/img/new-product/8.jpg",
    Badge: "Sale",
    Tag: "Dip",
  },
  {
    id: "daily-hydration-combo-pack",
    product_name: "Daily Hydration Combo Pack",
    product_description: "A convenient starter bundle with everyday wellness essentials.",
    product_category: "Combo Pack",
    price: "$35",
    Stock: 10,
    image: "/assets/img/new-product/10.jpg",
    Badge: "Combo",
    Tag: "Hydration",
  },
  {
    id: "lemon-jeera-spark-drink",
    product_name: "Lemon Jeera Spark Drink",
    product_description: "Bright citrus flavor paired with a refreshing jeera twist.",
    product_category: "Jeera Drink",
    price: "$22",
    Stock: 26,
    image: "/assets/img/new-product/11.jpg",
    Badge: "Fresh",
    Tag: "Citrus",
  },
  {
    id: "herb-crisp-snack-box",
    product_name: "Herb Crisp Snack Box",
    product_description: "Oven-crisp savory snack box with balanced herbal seasoning.",
    product_category: "Healthy Snacks",
    price: "$18",
    Stock: 28,
    image: "/assets/img/new-product/12.jpg",
    Badge: "New",
    Tag: "Snack",
  },
  {
    id: "velvet-herbal-trail-mix",
    product_name: "Velvet Herbal Trail Mix",
    product_description: "Crunchy snack blend for smart and satisfying snacking breaks.",
    product_category: "Trail Mix",
    price: "$25",
    Stock: 15,
    image: "/assets/img/new-product/13.jpg",
    Badge: "Popular",
    Tag: "Trail Mix",
  },
];

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId) ?? null;
}

export function getRelatedProducts(product: ProductDto) {
  return products
    .filter((item) => item.id !== product.id && item.product_category === product.product_category)
    .slice(0, 4);
}

export const productCategories = Array.from(new Set(products.map((product) => product.product_category)));

export const productTags = Array.from(new Set(products.map((product) => product.Tag)));

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  oldPrice?: string;
  image: string;
  badge?: string;
  tag: string;
}

export const products: Product[] = [
  {
    id: "roasted-trail-mix",
    name: "Roasted Trail Mix Drink Pack",
    category: "Healthy Drink",
    description: "A balanced roasted herbal blend for daily energy and hydration.",
    price: "$12",
    oldPrice: "$16",
    image: "/assets/img/product/1.jpg",
    badge: "New",
    tag: "Wellness",
  },
  {
    id: "mint-cooler",
    name: "Mint Cooler Herbal Tonic",
    category: "Herbal Care",
    description: "Fresh and cooling tonic made for daily wellness refreshment.",
    price: "$18",
    image: "/assets/img/product/2.jpg",
    badge: "Best Seller",
    tag: "Herbal",
  },
  {
    id: "citrus-boost",
    name: "Citrus Boost Hydration",
    category: "Cold Drinks",
    description: "Vitamin-rich citrus water for mood and energy support.",
    price: "$14",
    oldPrice: "$19",
    image: "/assets/img/product/3.jpg",
    badge: "Popular",
    tag: "Cold",
  },
  {
    id: "ginger-zen",
    name: "Ginger Zen Infusion",
    category: "Herbal Care",
    description: "A warming ginger infusion that supports digestion and calm.",
    price: "$13",
    image: "/assets/img/product/4.jpg",
    tag: "Herbal",
  },
  {
    id: "berry-blend",
    name: "Berry Blend Wellness Shot",
    category: "Health Booster",
    description: "Antioxidant-rich berry shot for a morning wellness boost.",
    price: "$10",
    oldPrice: "$12",
    image: "/assets/img/product/back-1.jpg",
    tag: "Boost",
  },
  {
    id: "calm-coconut",
    name: "Calm Coconut Cooler",
    category: "Wellness Drinks",
    description: "Light coconut hydration with botanical adaptogens.",
    price: "$15",
    image: "/assets/img/product/back-2.jpg",
    tag: "Relax",
  },
];

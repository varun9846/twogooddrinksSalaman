This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/app/**/*.{ts,tsx}, src/components/**/*.{ts,tsx}, src/lib/**/*.{ts,tsx}, src/store/**/*.{ts,tsx}, src/types/**/*.{ts,tsx}, src/auth.ts, src/middleware.ts, src/styles/**/*.css, prisma/**/*.prisma, sql/**/*.sql, README.md, architecture.md, AGENTS.md, instructions.prompt.md.md, package.json, next.config.ts, tsconfig.json, eslint.config.mjs
- Files matching these patterns are excluded: **/node_modules/**, **/.next/**, **/out/**, **/*.log, package-lock.json, yarn.lock, pnpm-lock.yaml, **/tsconfig.tsbuildinfo, **/next-env.d.ts, .eslintrc.json, .prettierrc, postcss.config.mjs, tailwind.config.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
AGENTS.md
architecture.md
eslint.config.mjs
instructions.prompt.md.md
next.config.ts
package.json
prisma/schema.prisma
README.md
sql/01_schema.sql
sql/02_seed_products.sql
sql/03_seed_test_user.sql
src/app/(auth)/login/page.tsx
src/app/(auth)/register/page.tsx
src/app/about-us/page.tsx
src/app/api/auth/[...nextauth]/route.ts
src/app/api/cart/add/route.ts
src/app/api/cart/items/[itemId]/route.ts
src/app/api/cart/route.ts
src/app/api/products/route.ts
src/app/api/register/route.ts
src/app/cart/page.tsx
src/app/checkout/page.tsx
src/app/contact-us/page.tsx
src/app/layout.tsx
src/app/my-cart/page.tsx
src/app/page.tsx
src/app/shop/[productId]/page.tsx
src/app/shop/page.tsx
src/app/wellness-journal/healthy-lifestyle/page.tsx
src/app/wellness-journal/herbal-benefits/page.tsx
src/app/wellness-journal/hydration-tips/page.tsx
src/auth.ts
src/components/cart/MyCartClient.tsx
src/components/common/AboutSection.tsx
src/components/common/CartSidebar.tsx
src/components/common/DeliveryCoverage.tsx
src/components/common/FloatingWhatsApp.tsx
src/components/common/Footer.tsx
src/components/common/Header.tsx
src/components/common/WaterDroplets.tsx
src/components/common/WaterWaveDivider.tsx
src/components/providers/AuthProvider.tsx
src/components/shop/ProductActions.tsx
src/components/shop/ProductCard.tsx
src/lib/apiClient.ts
src/lib/mappers/cart.mapper.ts
src/lib/mappers/product.mapper.ts
src/lib/prisma.ts
src/lib/products.data.ts
src/lib/products.ts
src/lib/services/cart.service.ts
src/lib/services/product.service.ts
src/lib/services/productsService.ts
src/lib/services/user.service.ts
src/lib/site-content.ts
src/lib/utils/api-response.ts
src/lib/utils/auth.ts
src/lib/utils/numbers.ts
src/lib/validators/user.validator.ts
src/middleware.ts
src/store/useCartStore.ts
src/store/useUiStore.ts
src/store/useWishlistStore.ts
src/styles/globals.css
src/types/cart.ts
src/types/next-auth.d.ts
src/types/product.ts
tsconfig.json
```

# Files

## File: src/components/common/DeliveryCoverage.tsx
````typescript
const deliveryAreas = [
  "Kanpur",
  "Kanpur Dehat",
  "Unnao",
  "Raibareli",
  "Lucknow",
  "Unchahar",
];
const mapSrc =
  "https://www.google.com/maps?q=Kanpur,Lucknow,Unnao,Raibareli,Unchahar&output=embed";
export default function DeliveryCoverage() {
  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
            Delivery Coverage
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            Fresh water delivered across your city
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            2goodplus currently delivers packaged drinking water across Kanpur,
            Kanpur Dehat, Unnao, Raibareli, Lucknow, and Unchahar.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[28px] border border-slate-200 bg-[#f8fafc] p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Available Service Areas
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Place your order online or contact us for home, office, shop, and
              bulk water delivery support in these locations.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliveryAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f7f4] text-[#0f766e]">
                    <i className="ri-map-pin-line text-lg" />
                  </span>
                  {area}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-[#0f766e] p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Need bulk delivery?
              </p>
              <h4 className="mt-2 text-xl font-semibold">
                Contact us for regular jar and bottle supply.
              </h4>
              <a
                href="/contact-us"
                className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold !text-[#0f766e] transition hover:-translate-y-1"
              >
                Contact Now
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <iframe
              title="2goodplus delivery coverage map"
              src={mapSrc}
              className="h-[420px] w-full border-0 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/common/FloatingWhatsApp.tsx
````typescript
import Link from "next/link";
const whatsappNumber = "919967399880";
export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi, I am interested in 2good Plus wellness products.",
  );
  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[998] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] max-[575px]:bottom-5 max-[575px]:right-5"
    >
      <i className="ri-whatsapp-line text-[30px]" />
    </Link>
  );
}
````

## File: src/components/common/WaterDroplets.tsx
````typescript
export default function WaterDroplets() {
  return (
    <div className="droplet-layer" aria-hidden="true">
      <span className="droplet" />
      <span className="droplet" />
      <span className="droplet" />
      <span className="droplet" />
      <span className="droplet" />
    </div>
  );
}
````

## File: src/components/common/WaterWaveDivider.tsx
````typescript
export default function WaterWaveDivider() {
  return (
    <div className="water-wave-divider">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64 C240,120 480,0 720,56 C960,112 1200,24 1440,72 L1440,120 L0,120 Z"
          fill="#f8fafc"
        />
      </svg>
    </div>
  );
}
````

## File: AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
````

## File: architecture.md
````markdown
src/
├── app/                           # App Router Core
│   ├── layout.tsx                 # Root layout (Includes global Providers, Header, Footer)
│   ├── page.tsx                   # Homepage (index.html)
│   ├── (auth)/                    # Auth Route Group
│   │   ├── login/page.tsx         # login.html
│   │   └── register/page.tsx      # register.html
│   ├── shop/
│   │   ├── page.tsx               # Shop Catalog (Grid/List views)
│   │   └── [productId]/page.tsx   # Dynamic Product Details
│   ├── cart/page.tsx              # cart.html
│   ├── checkout/page.tsx          # checkout.html
│   └── api/                       # Next.js Route Handlers (BFF layer)
├── components/                    # Modular UI Component Layer
│   ├── common/                    # Header, Footer, Custom Selectors
│   ├── product/                   # ProductCard, ProductGrid, Rating
│   ├── cart/                      # CartSidebar overlay
│   └── ui/                        # Reusable Primitive Elements (Buttons, Inputs)
├── store/                         # Global State Management (Zustand or React Context)
│   ├── useCartStore.ts            # Client-side Cart state & persistent sync
│   └── useWishlistStore.ts        # Client-side Wishlist state
└── styles/
    └── globals.css                # Custom Tailwind layer directives
````

## File: eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: sql/02_seed_products.sql
````sql
INSERT INTO products (id, product_name, product_description, product_category, price, stock, image, badge, tag)
VALUES
  ('pure-spring-water-daily-pack', 'Pure Spring Water Daily Pack', 'Clean and refreshing bottled water for everyday hydration.', 'Natural Drinking Water', 15, 24, '/assets/img/new-product/1.jpg', 'New', 'Hydration'),
  ('roofaza-jeera-refresh-drink', 'Roofaza Jeera Refresh Drink', 'A refreshing cumin-based drink crafted for flavorful hydration.', 'Jeera Drink', 25, 18, '/assets/img/new-product/2.jpg', 'Popular', 'Wellness Drink'),
  ('blueberry-jeera-crunch-mix', 'BlueBerry Jeera Crunch Mix', 'Light, flavorful snack bites for mindful everyday munching.', 'Healthy Snacks', 10, 30, '/assets/img/new-product/3.jpg', 'Best Seller', 'Snack'),
  ('calm-herbal-orange-refill-pack', 'Calm Herbal Orange Refill Pack', 'A soothing infusion blend made for restful, calming moments.', 'Herbal Infusion', 25, 16, '/assets/img/new-product/4.jpg', 'New', 'Herbal'),
  ('avacardo-cumin-wellness-jar', 'Avacardo Cumin Wellness Jar', 'Pantry essential made to elevate wellness drinks and recipes.', 'Wellness Jar', 32, 14, '/assets/img/new-product/5.jpg', 'Trending', 'Wellness'),
  ('cardamom-herbal-tea-blend', 'Cardamom Herbal Tea Blend', 'A warm and aromatic blend perfect for daily tea rituals.', 'Herbal Tea', 41, 20, '/assets/img/new-product/6.jpg', 'Premium', 'Tea'),
  ('spiced-millet-energy-bites', 'Spiced Millet Energy Bites', 'Nutritious crunchy bites made for wholesome snacking.', 'Healthy Snacks', 29, 22, '/assets/img/new-product/7.jpg', 'Hot', 'Energy'),
  ('date-sweetened-wellness-dip', 'Date Sweetened Wellness Dip', 'Naturally sweet dip for healthy snack platters and light bites.', 'Wellness Dip', 9, 12, '/assets/img/new-product/8.jpg', 'Sale', 'Dip'),
  ('daily-hydration-combo-pack', 'Daily Hydration Combo Pack', 'A convenient starter bundle with everyday wellness essentials.', 'Combo Pack', 35, 10, '/assets/img/new-product/10.jpg', 'Combo', 'Hydration'),
  ('lemon-jeera-spark-drink', 'Lemon Jeera Spark Drink', 'Bright citrus flavor paired with a refreshing jeera twist.', 'Jeera Drink', 22, 26, '/assets/img/new-product/11.jpg', 'Fresh', 'Citrus'),
  ('herb-crisp-snack-box', 'Herb Crisp Snack Box', 'Oven-crisp savory snack box with balanced herbal seasoning.', 'Healthy Snacks', 18, 28, '/assets/img/new-product/12.jpg', 'New', 'Snack'),
  ('velvet-herbal-trail-mix', 'Velvet Herbal Trail Mix', 'Crunchy snack blend for smart and satisfying snacking breaks.', 'Trail Mix', 25, 15, '/assets/img/new-product/13.jpg', 'Popular', 'Trail Mix')
ON CONFLICT (id) DO UPDATE SET
  product_name = EXCLUDED.product_name,
  product_description = EXCLUDED.product_description,
  product_category = EXCLUDED.product_category,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  image = EXCLUDED.image,
  badge = EXCLUDED.badge,
  tag = EXCLUDED.tag,
  updated_at = NOW();
````

## File: sql/03_seed_test_user.sql
````sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
INSERT INTO users (name, email, password, phone_number, address)
VALUES (
  'Test Customer',
  'customer@twogood.test',
  crypt('Password@123', gen_salt('bf')),
  '+96898060405',
  'Muscat, Oman'
)
ON CONFLICT (email) DO UPDATE SET
  name = EXCLUDED.name,
  password = EXCLUDED.password,
  phone_number = EXCLUDED.phone_number,
  address = EXCLUDED.address,
  updated_at = NOW();
````

## File: src/app/api/auth/[...nextauth]/route.ts
````typescript
export const runtime = "nodejs";
import { handlers } from "@/auth";
export const { GET, POST } = handlers;
````

## File: src/components/providers/AuthProvider.tsx
````typescript
"use client";
import { SessionProvider } from "next-auth/react";
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider refetchOnWindowFocus={false}>{children}</SessionProvider>;
}
````

## File: src/lib/apiClient.ts
````typescript
import axios from "axios";
const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  (typeof window === "undefined" ? process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000" : "");
export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default apiClient;
````

## File: src/lib/mappers/cart.mapper.ts
````typescript
import type { OrderItem, Product } from "@prisma/client";
import type { Cart, CartItem } from "@/types/cart";
import { getLineTotal } from "@/lib/mappers/product.mapper";
import { roundCurrency, toNumber } from "@/lib/utils/numbers";
type OrderItemWithProduct = OrderItem & { product: Product };
export function mapOrderItemsToCart(
  orderId: string | null,
  items: OrderItemWithProduct[],
  orderTotal?: number,
): Cart {
  const cartItems: CartItem[] = items.map((item) => ({
    id: item.id,
    order_id: item.orderId,
    product_id: item.productId,
    quantity: item.quantity,
    line_total: getLineTotal(item.quantity, item.product.price),
    product: {
      id: item.product.id,
      product_name: item.product.productName,
      product_description: item.product.productDescription,
      product_category: item.product.productCategory,
      price: toNumber(item.product.price),
      stock: item.product.stock,
      image: item.product.image,
      badge: item.product.badge,
      tag: item.product.tag,
    },
  }));
  const calculatedTotal =
    orderTotal ??
    cartItems.reduce((sum, item) => sum + item.line_total, 0);
  return {
    order_id: orderId,
    total: roundCurrency(calculatedTotal),
    item_count: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    items: cartItems,
  };
}
export function emptyCart(): Cart {
  return mapOrderItemsToCart(null, [], 0);
}
````

## File: src/lib/mappers/product.mapper.ts
````typescript
import type { Product } from "@prisma/client";
import type { ProductDto } from "@/types/product";
import { formatPrice, toNumber } from "@/lib/utils/numbers";
export function toProductDto(product: Product): ProductDto {
  return {
    id: product.id,
    product_name: product.productName,
    product_description: product.productDescription,
    product_category: product.productCategory,
    price: formatPrice(product.price),
    Stock: product.stock,
    image: product.image,
    Badge: product.badge ?? undefined,
    Tag: product.tag ?? "",
  };
}
export function toProductDtoList(products: Product[]): ProductDto[] {
  return products.map(toProductDto);
}
export function getLineTotal(quantity: number, price: Product["price"]): number {
  return toNumber(price) * quantity;
}
````

## File: src/lib/prisma.ts
````typescript
import { PrismaClient } from "@prisma/client";
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
export default prisma;
````

## File: src/lib/services/cart.service.ts
````typescript
import { OrderStatus, type Prisma } from "@prisma/client";
import { emptyCart, mapOrderItemsToCart } from "@/lib/mappers/cart.mapper";
import { prisma } from "@/lib/prisma";
import { clampQuantity, roundCurrency, toNumber } from "@/lib/utils/numbers";
import type { Cart } from "@/types/cart";
type TransactionClient = Prisma.TransactionClient;
async function getPendingOrder(userId: string) {
  return prisma.order.findFirst({
    where: {
      userId,
      status: OrderStatus.pending,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
async function recalculateOrderTotal(
  tx: TransactionClient,
  orderId: string,
) {
  const items = await tx.orderItem.findMany({
    where: { orderId },
    include: {
      product: {
        select: { price: true },
      },
    },
  });
  const total = items.reduce(
    (sum, item) => sum + item.quantity * toNumber(item.product.price),
    0,
  );
  await tx.order.update({
    where: { id: orderId },
    data: { total: roundCurrency(total) },
  });
}
async function fetchCartItems(orderId: string) {
  return prisma.orderItem.findMany({
    where: { orderId },
    include: { product: true },
    orderBy: { createdAt: "desc" },
  });
}
export async function getCart(userId: string): Promise<Cart> {
  const order = await getPendingOrder(userId);
  if (!order) {
    return emptyCart();
  }
  const items = await fetchCartItems(order.id);
  return mapOrderItemsToCart(order.id, items, toNumber(order.total));
}
export async function addToCart(
  userId: string,
  productId: string,
  quantity = 1,
): Promise<Cart> {
  const safeQuantity = clampQuantity(quantity);
  await prisma.$transaction(async (tx) => {
    const product = await tx.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      throw new Error("Product not found.");
    }
    if (product.stock < safeQuantity) {
      throw new Error("Not enough stock available.");
    }
    let order = await tx.order.findFirst({
      where: {
        userId,
        status: OrderStatus.pending,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!order) {
      order = await tx.order.create({
        data: {
          userId,
          total: 0,
          status: OrderStatus.pending,
        },
      });
    }
    const existingItem = await tx.orderItem.findUnique({
      where: {
        orderId_productId: {
          orderId: order.id,
          productId,
        },
      },
    });
    const nextQuantity = (existingItem?.quantity ?? 0) + safeQuantity;
    if (nextQuantity > product.stock) {
      throw new Error("Selected quantity exceeds available stock.");
    }
    if (existingItem) {
      await tx.orderItem.update({
        where: { id: existingItem.id },
        data: { quantity: nextQuantity },
      });
    } else {
      await tx.orderItem.create({
        data: {
          orderId: order.id,
          productId,
          quantity: safeQuantity,
        },
      });
    }
    await recalculateOrderTotal(tx, order.id);
  });
  return getCart(userId);
}
export async function updateCartItem(
  userId: string,
  itemId: string,
  quantity: number,
): Promise<Cart> {
  const safeQuantity = Number(quantity || 0);
  const order = await getPendingOrder(userId);
  if (!order) {
    throw new Error("Cart not found.");
  }
  const item = await prisma.orderItem.findFirst({
    where: {
      id: itemId,
      orderId: order.id,
    },
    include: {
      product: {
        select: { stock: true },
      },
    },
  });
  if (!item) {
    throw new Error("Cart item not found.");
  }
  if (safeQuantity <= 0) {
    await prisma.orderItem.delete({
      where: { id: itemId },
    });
    await recalculateOrderTotal(prisma, order.id);
    return getCart(userId);
  }
  if (safeQuantity > item.product.stock) {
    throw new Error("Selected quantity exceeds available stock.");
  }
  await prisma.orderItem.update({
    where: { id: itemId },
    data: { quantity: safeQuantity },
  });
  await recalculateOrderTotal(prisma, order.id);
  return getCart(userId);
}
export async function removeCartItem(
  userId: string,
  itemId: string,
): Promise<Cart> {
  const order = await getPendingOrder(userId);
  if (!order) {
    return getCart(userId);
  }
  await prisma.orderItem.deleteMany({
    where: {
      id: itemId,
      orderId: order.id,
    },
  });
  await recalculateOrderTotal(prisma, order.id);
  return getCart(userId);
}
export const cartService = {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
};
export default cartService;
````

## File: src/lib/services/product.service.ts
````typescript
import { toProductDto, toProductDtoList } from "@/lib/mappers/product.mapper";
import { prisma } from "@/lib/prisma";
import type { ProductDto } from "@/types/product";
export async function getAllProducts(): Promise<ProductDto[]> {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  return toProductDtoList(products);
}
export async function getProductById(productId: string): Promise<ProductDto | null> {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  return product ? toProductDto(product) : null;
}
export const productService = {
  getAllProducts,
  getProductById,
};
export default productService;
````

## File: src/lib/services/productsService.ts
````typescript
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
````

## File: src/lib/services/user.service.ts
````typescript
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import type { RegisterUserInput } from "@/lib/validators/user.validator";
import { validateRegisterInput } from "@/lib/validators/user.validator";
const userPublicSelect = {
  id: true,
  name: true,
  email: true,
  phoneNumber: true,
  address: true,
  createdAt: true,
  updatedAt: true,
} as const;
export async function getUserByEmail(email: string) {
  return prisma.user.findFirst({
    where: {
      email: {
        equals: email.trim().toLowerCase(),
        mode: "insensitive",
      },
    },
  });
}
export async function createUser(input: RegisterUserInput) {
  const safeInput = validateRegisterInput(input);
  const existingUser = await getUserByEmail(safeInput.email);
  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }
  const hashedPassword = await bcrypt.hash(safeInput.password, 10);
  return prisma.user.create({
    data: {
      name: safeInput.name,
      email: safeInput.email,
      password: hashedPassword,
      phoneNumber: safeInput.phoneNumber,
      address: safeInput.address,
    },
    select: userPublicSelect,
  });
}
export const userService = {
  getUserByEmail,
  createUser,
};
export default userService;
````

## File: src/lib/utils/api-response.ts
````typescript
import { NextResponse } from "next/server";
export function jsonSuccess<T extends Record<string, unknown>>(
  data: T,
  status = 200,
) {
  return NextResponse.json(data, { status });
}
export function jsonError(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}
export function getErrorMessage(error: unknown, fallback: string): string {
  return error instanceof Error ? error.message : fallback;
}
````

## File: src/lib/utils/auth.ts
````typescript
import { auth } from "@/auth";
export async function getAuthenticatedUserId(): Promise<string | null> {
  const session = await auth();
  return session?.user?.id ?? null;
}
export async function requireAuthenticatedUserId(): Promise<string> {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  return userId;
}
````

## File: src/lib/utils/numbers.ts
````typescript
export function toNumber(value: string | number | null | undefined): number {
  return Number(value ?? 0);
}
export function roundCurrency(value: number): number {
  return Number(value.toFixed(2));
}
export function formatPrice(value: string | number): string {
  return `$${toNumber(value)}`;
}
export function clampQuantity(quantity: number, minimum = 1): number {
  return Math.max(minimum, Number(quantity || minimum));
}
export function parseRequestString(value: unknown, fallback = ""): string {
  return String(value ?? fallback);
}
export function parseRequestNumber(value: unknown, fallback = 0): number {
  return Number(value ?? fallback);
}
````

## File: src/lib/validators/user.validator.ts
````typescript
export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
  phone_number?: string;
  address?: string;
}
export interface SafeRegisterUserInput {
  name: string;
  email: string;
  password: string;
  phoneNumber: string | null;
  address: string | null;
}
export function validateRegisterInput(input: RegisterUserInput): SafeRegisterUserInput {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const password = input.password;
  const phoneNumber = input.phone_number?.trim() || null;
  const address = input.address?.trim() || null;
  if (!name || !email || !password) {
    throw new Error("Name, email and password are required.");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }
  return { name, email, password, phoneNumber, address };
}
````

## File: src/middleware.ts
````typescript
import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
const protectedRoutePrefixes = ["/my-cart", "/cart", "/checkout", "/payment"];
const authRoutes = ["/login", "/register"];
export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });
  const isProtectedRoute = protectedRoutePrefixes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }
  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\..*).*)"],
};
````

## File: src/store/useUiStore.ts
````typescript
import { create } from 'zustand';
interface UiState {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  toggleCart: () => void;
  toggleMobileMenu: () => void;
  closeAll: () => void;
}
export const useUiStore = create<UiState>((set) => ({
  isCartOpen: false,
  isMobileMenuOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeAll: () => set({ isCartOpen: false, isMobileMenuOpen: false }),
}));
````

## File: src/store/useWishlistStore.ts
````typescript

````

## File: src/types/cart.ts
````typescript
export interface CartProduct {
  id: string;
  product_name: string;
  product_description: string;
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
````

## File: src/types/next-auth.d.ts
````typescript
import type { DefaultSession } from "next-auth";
export {};
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phone_number?: string | null;
      address?: string | null;
    } & DefaultSession["user"];
  }
  interface User {
    phone_number?: string | null;
    address?: string | null;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    phone_number?: string | null;
    address?: string | null;
  }
}
````

## File: src/types/product.ts
````typescript
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
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````

## File: instructions.prompt.md.md
````markdown
# UI Refinement Next.js

**User:** Anonymous  
**Created:** 6/10/2026 10:47:30  
**Updated:** 6/10/2026 10:51:45  
**Exported:** 6/10/2026 10:56:23  
**Link:** [https://chatgpt.com/c/6a290878-eee0-83ea-8e76-865b4f1a4666](https://chatgpt.com/c/6a290878-eee0-83ea-8e76-865b4f1a4666)  

## Prompt:
6/10/2026, 10:47:26 AM

Behave as senior software engineer and help me resolve an issue which is as follows :
##Context:-
i am sharing you two code files
twogooddrinks:- this is a next js project whose Frontend UI  is being built using the twogoodBlueberry file which is shared below
twogoodBlueberry:- this is a website UI HTML pages which we are basically converting into the next js project.

Tasks:-

1. i want to refine the Ui of Homepage in Next js project  to include all the content that is present in Home page Html.

2. refine the Header and Footer component in Next js project to look  like the one present in the twogoodBlueberry Html files

provide the code to be changes in Next js project 

===================================
##Instructions :-
1. Analyse the files shared with you for understanding the entire context,
2. Donot overengineer the context above, keep it simple easy and fast implementation .
3. the code should be highly optisimised, clean and reusable

[Attachment: twogoodblueberry.md]

[Attachment: twogooddrinks.md]

## Response:
6/10/2026, 10:47:27 AM

> **Checking file existence and content**
>
>
> **Reading full "twogooddrinks" file**
>
>
> **Parsing HTML from markdown file**
>
>
> **Extracting HTML sections and headings**
>
>
> **Considering HTML snippets and file citations**
>
> I need to extract header/footer HTML snippets, maybe check around specific lines. But I'm unsure about the exact citation approach since line ranges might be required. 
> I’ll probably use Python extraction, but file citations should work even without specific markers. I’ll also consider app-router and possibly involve Tailwind for styling.
>
> **Deciding on Tailwind installation and extracting content**
>
> I’m not sure if Tailwind is installed because the project seems empty. Since the Next.js implementation doesn’t include app/components files, I can’t inspect it directly. Still, I’ll provide code using the HTML content I have and maybe use BS4 to extract product names, categories, and images.
>
> **Extracting header and footer content from HTML**
>
>
> **Extracting additional content details**
>
> I might need to extract the full texts for categories, product prices, and banners to ensure I have all the necessary content. Once I have that, I can craft a clearer implementation or response, depending on the user's needs. It's important to get all the details right.
>
> **Extracting categories, products, banners, services, testimonials, blogs**
>
>
> **Considering line numbers for citations**
>
> I'm thinking I might need to include line numbers for citations, but I’m not sure if I should create them myself. If I use the file search results, they might not have lines. I'll probably search more precisely to get exact line markers for my citations to be more accurate.
>
> **Final code structure and file setup**
>
> I need to provide the code, potentially without citations or markers. There aren't any Next.js files in the project, and I should mention that. I'll offer a compact code structure with arrays and CSS. I’ll assume an app router with Tailwind and use public paths for images. I won’t overengineer this and will keep it simple yet reusable, providing the necessary files: `Header.tsx`, `Footer.tsx`, `page.tsx`, and optional `globals.css`.
>
> Thought for 1m 18s

I’ll map the current Next.js structure against the source HTML homepage, then give you minimal drop-in component/page changes instead of a large redesign.

I analyzed both uploads. The source HTML homepage includes these homepage sections: hero, wellness categories, featured picks, two banner areas, new arrivals, services, vendors, testimonials, blog/newsletter/footer content. The source header nav includes Home, Products, Wellness Journal, Shop Locator, About Us, Contact Us; footer includes logo/description/app buttons, Wellness Categories, Company, Account, and Contact columns. `twogoodblueberry.md` `twogoodblueberry.md`

One important thing: the `twogooddrinks` packed file does **not** contain actual `app/` or `components/` code content, so I cannot patch exact existing files line-by-line. It only shows the Repomix summary and an empty “Files” section. `twogooddrinks.md`  
So below is a clean drop-in implementation assuming a standard Next.js App Router project.

Before applying this, copy the Blueberry asset folder into:

```txt
public/assets
```

So images resolve like:

```txt
/assets/img/hero/hero-1.png
/assets/img/logo/logo.png
```

---

## 1. Replace / create `components/Header.tsx`

```tsx
"use client";

import Link from "next/link";
import { Menu, Search, Heart, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Wellness Journal", href: "/blog" },
  { label: "Shop Locator", href: "/about-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-100 bg-[#f8f8fb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-gray-500">
          <p>Hydrate • Heal • Feel Good</p>

          <div className="hidden items-center gap-5 md:flex">
            <Link href="/login" className="hover:text-[#0f766e]">
              Sign In
            </Link>
            <Link href="/register" className="hover:text-[#0f766e]">
              Create Account
            </Link>
            <Link href="/checkout" className="hover:text-[#0f766e]">
              Checkout
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5">
        <button
          type="button"
          className="rounded-lg border border-gray-200 p-2 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Link href="/" className="shrink-0">
          <img
            src="/assets/img/logo/logo.png"
            alt="2gooD"
            className="h-auto w-32"
          />
        </Link>

        <form className="hidden flex-1 items-center overflow-hidden rounded-xl border border-gray-200 bg-white md:flex">
          <input
            type="search"
            placeholder="Search wellness products..."
            className="h-12 flex-1 px-4 text-sm outline-none"
          />
          <button
            type="submit"
            className="flex h-12 w-14 items-center justify-center bg-[#0f766e] text-white"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/login"
            className="hidden items-center gap-2 text-sm text-gray-600 hover:text-[#0f766e] sm:flex"
          >
            <User size={21} />
            <span>Account</span>
          </Link>

          <Link
            href="/wishlist"
            className="relative rounded-lg border border-gray-200 p-2 text-gray-600 hover:text-[#0f766e]"
            aria-label="Wishlist"
          >
            <Heart size={21} />
            <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#0f766e] text-xs text-white">
              3
            </span>
          </Link>

          <Link
            href="/cart"
            className="relative rounded-lg border border-gray-200 p-2 text-gray-600 hover:text-[#0f766e]"
            aria-label="Cart"
          >
            <ShoppingBag size={21} />
            <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#0f766e] text-xs text-white">
              4
            </span>
          </Link>
        </div>
      </div>

      <nav className="hidden border-t border-gray-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-9 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-[#3d4750] transition hover:text-[#0f766e]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <aside className="h-full w-80 max-w-[85%] bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <img
                src="/assets/img/logo/logo.png"
                alt="2gooD"
                className="w-28"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-5 flex items-center overflow-hidden rounded-lg border border-gray-200">
              <input
                type="search"
                placeholder="Search..."
                className="h-11 flex-1 px-3 text-sm outline-none"
              />
              <Search size={19} className="mr-3 text-gray-500" />
            </div>

            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg border border-gray-100 px-4 py-3 text-sm font-medium text-gray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
```

---

## 2. Replace / create `components/Footer.tsx`

```tsx
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const wellnessCategories = [
  "Natural Drinking Water",
  "Jeera Wellness Drinks",
  "Herbal Infusions",
  "Flavoured Wellness Drinks",
  "Healthy Drinks",
  "Wellness Bundles",
];

const companyLinks = [
  "About us",
  "Delivery",
  "Legal Notice",
  "Terms & conditions",
  "Secure payment",
  "Contact us",
];

const accountLinks = [
  "Sign In",
  "View Cart",
  "Return Policy",
  "Become a Vendor",
  "Affiliate Program",
  "Payments",
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="mb-5 border-b border-gray-200 pb-4 text-lg font-bold text-[#3d4750]">
        {title}
      </h4>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-sm text-[#686e7d] transition hover:text-[#0f766e]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img
            src="/assets/img/logo/logo.png"
            alt="2gooD"
            className="mb-7 w-36"
          />

          <p className="mb-7 max-w-md text-sm leading-7 text-[#686e7d]">
            2gooD is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="#">
              <img
                src="/assets/img/app/android.png"
                alt="Android app"
                className="w-32 rounded-md"
              />
            </Link>
            <Link href="#">
              <img
                src="/assets/img/app/apple.png"
                alt="Apple app"
                className="w-32 rounded-md"
              />
            </Link>
          </div>
        </div>

        <FooterColumn title="Wellness Categories" items={wellnessCategories} />
        <FooterColumn title="Company" items={companyLinks} />
        <FooterColumn title="Account" items={accountLinks} />

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="mb-5 border-b border-gray-200 pb-4 text-lg font-bold text-[#3d4750]">
            Contact
          </h4>

          <ul className="space-y-4 text-sm leading-6 text-[#686e7d]">
            <li className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#0f766e]" size={18} />
              <span>971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="shrink-0 text-[#0f766e]" size={18} />
              <Link href="tel:+009876543210" className="hover:text-[#0f766e]">
                +00 9876543210
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="shrink-0 text-[#0f766e]" size={18} />
              <Link
                href="mailto:example@email.com"
                className="hover:text-[#0f766e]"
              >
                example@email.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 py-5 text-center text-sm text-[#686e7d]">
        Copyright © 2gooD all rights reserved.
      </div>
    </footer>
  );
}
```

---

## 3. Replace `app/page.tsx`

```tsx
import Link from "next/link";

const categories = [
  {
    title: "Wellness Drinks",
    desc: "Pure water & wellness drinks",
    image: "/assets/img/category/1.svg",
  },
  {
    title: "Herbal Care",
    desc: "Natural blends & soothing sips",
    image: "/assets/img/category/2.svg",
  },
  {
    title: "Jeera Drinks",
    desc: "Refreshing everyday favorites",
    image: "/assets/img/category/3.svg",
  },
  {
    title: "Healthy Drinks",
    desc: "Light bites for mindful munching",
    image: "/assets/img/category/4.svg",
  },
];

const featuredProducts = [
  {
    badge: "New",
    category: "Healthy Drink",
    title: "Roasted Trail Mix Drink Pack",
    price: "$16",
    meta: "250g Pack",
    image: "/assets/img/product/1.jpg",
  },
  {
    badge: "Hot",
    category: "Jeera Drink",
    title: "Classic Jeera Refresh Drink",
    price: "Best Seller",
    meta: "300 ml",
    image: "/assets/img/product/2.jpg",
  },
  {
    category: "Jeera Drink",
    title: "Herbal Infusion Wellness Pack",
    price: "$18",
    meta: "4 Sachets",
    image: "/assets/img/product/3.jpg",
  },
  {
    badge: "Sale",
    category: "Herbal Care",
    title: "Premium Drinking Water Pack",
    price: "In Stock",
    meta: "Pack",
    image: "/assets/img/product/4.jpg",
  },
];

const newArrivals = [
  {
    badge: "New",
    category: "Drinks",
    title: "Crunchy Seed Mix Pack",
    price: "$22",
    meta: "200g",
    image: "/assets/img/new-product/1.jpg",
  },
  {
    category: "Herbal",
    title: "Tulsi Infusion",
    price: "$6",
    oldPrice: "$8",
    meta: "20 Tea Bags",
    image: "/assets/img/new-product/11.jpg",
  },
  {
    badge: "Trend",
    category: "Leaves",
    title: "Mineral Water Bottle Pack",
    price: "$1",
    meta: "In Stock",
    image: "/assets/img/new-product/20.jpg",
  },
  {
    category: "Herbal Infusions",
    title: "Baked Millet Drink Bites",
    price: "In Stock",
    meta: "Pack",
    image: "/assets/img/new-product/4.jpg",
  },
  {
    badge: "Sale",
    category: "Botanical Beverages",
    title: "Jeera Digestive Drink Pack",
    price: "2 Left",
    meta: "6 Bottles",
    image: "/assets/img/new-product/5.jpg",
  },
  {
    category: "Fruit",
    title: "Chamomile Herbal Blend",
    price: "$17",
    meta: "25 Tea Bags",
    image: "/assets/img/new-product/6.jpg",
  },
  {
    category: "Botanical Beverages",
    title: "Cumin Seed Wellness Mix",
    price: "$29",
    oldPrice: "$31",
    meta: "20 Tea Bags",
    image: "/assets/img/new-product/7.jpg",
  },
  {
    category: "Vegetable",
    title: "Natural Lemon Herbal Cooler",
    price: "$10",
    meta: "500 ml",
    image: "/assets/img/new-product/8.jpg",
  },
];

const services = [
  {
    title: "Free Shipping",
    desc: "Free shipping on all US order or above $200",
    image: "/assets/img/services/1.png",
  },
  {
    title: "24x7 Support",
    desc: "Contact us 24 hours a day, 7 days a week",
    image: "/assets/img/services/2.png",
  },
  {
    title: "30 Days Return",
    desc: "Simply return it within 30 days for an exchange",
    image: "/assets/img/services/3.png",
  },
  {
    title: "Payment Secure",
    desc: "Contact us 24 hours a day, 7 days a week",
    image: "/assets/img/services/4.png",
  },
];

const vendors = [
  {
    name: "Mira Fashion Pvt. Ltd.",
    sales: "Sales - 587",
    image: "/assets/img/vendors/vendor-1.png",
  },
  {
    name: "Eelna Fashion Pvt. Ltd.",
    sales: "Sales - 428",
    image: "/assets/img/vendors/vendor-2.jpg",
  },
  {
    name: "Mario Fashion Pvt. Ltd.",
    sales: "Sales - 1024",
    image: "/assets/img/vendors/vendor-3.jpg",
  },
  {
    name: "Maria Fashion Pvt. Ltd.",
    sales: "Sales - 210",
    image: "/assets/img/vendors/vendor-4.jpg",
  },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Wellness Customer",
    image: "/assets/img/testimonials/1.png",
    quote:
      "2gooD has made healthy choices much easier for me. The jeera drinks feel refreshing, the herbal infusions are soothing, and the overall quality feels truly wellness-focused.",
  },
  {
    name: "Neha Kapoor",
    role: "Lifestyle Buyer",
    image: "/assets/img/testimonials/2.png",
    quote:
      "I love that 2gooD is more than just an online store. The website helps me discover wellness products and shop in a simple, convenient way.",
  },
  {
    name: "Omar Hassan",
    role: "Returning Customer",
    image: "/assets/img/testimonials/3.png",
    quote:
      "From natural drinking water to healthy drinks, 2gooD brings together products that fit perfectly into my daily routine.",
  },
];

const blogs = [
  {
    date: "June 30, 2024",
    tag: "Organic",
    title: "Best Sellers:- BlueBerry Mojito",
    image: "/assets/img/blog/7.jpg",
  },
  {
    date: "June 29, 2023",
    tag: "Organic",
    title: "Best Sellers:- Mint Herbal infusion",
    image: "/assets/img/blog/8.jpg",
  },
  {
    date: "Jan 10, 2022",
    tag: "Organic",
    title: "Best Sellers:- Ginger Jeera Drink",
    image: "/assets/img/blog/9.jpg",
  },
  {
    date: "Feb 12, 2022",
    tag: "Organic",
    title: "Best Sellers:- Lemon Jeera Drink",
    image: "/assets/img/blog/10.jpg",
  },
];

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-bold text-[#3d4750] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-7 text-[#686e7d]">{subtitle}</p>
      )}
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: {
    badge?: string;
    category: string;
    title: string;
    price: string;
    oldPrice?: string;
    meta: string;
    image: string;
  };
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-[#f8f8fb]">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#0f766e] px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#0f766e]">
          {product.category}
        </p>

        <h3 className="mb-4 line-clamp-2 text-base font-semibold text-[#3d4750]">
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-[#3d4750]">{product.price}</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>
          <span className="text-sm text-[#686e7d]">{product.meta}</span>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="overflow-hidden bg-[#f8f8fb]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 font-medium text-[#0f766e]">
              Hydrate • Heal • Feel Good
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#3d4750] md:text-6xl">
              Discover 2gooD Wellness Products for Everyday Living
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#686e7d]">
              Shop pure drinking water, flavorful jeera drinks, soothing herbal
              infusions, and better-for-you beverages designed for a healthier
              daily routine.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-xl bg-[#0f766e] px-7 py-3 font-semibold text-white transition hover:bg-[#5667c8]"
              >
                Shop Now
              </Link>
              <Link
                href="/about-us"
                className="rounded-xl border border-gray-200 bg-white px-7 py-3 font-semibold text-[#3d4750] transition hover:border-[#0f766e] hover:text-[#0f766e]"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {["100% Natural Choices", "Fresh Daily Wellness", "Pure Hydration"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white p-4 text-sm font-semibold text-[#3d4750] shadow-sm"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-[#dfe5ff]" />
            <img
              src="/assets/img/hero/hero-1.png"
              alt="2gooD wellness drinks"
              className="relative mx-auto w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle
          title="Shop by Wellness"
          subtitle="Browse healthy drinks, herbal care, jeera drinks, and wellness-first daily products."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="mx-auto mb-5 h-16 w-16"
              />
              <h3 className="mb-2 text-lg font-bold text-[#3d4750]">
                {category.title}
              </h3>
              <p className="text-sm text-[#686e7d]">{category.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            title="Featured wellness picks"
            subtitle="Popular 2gooD products picked for everyday hydration and wellness routines."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-[#eef2ff] p-8">
          <img
            src="/assets/img/banner-one/one.jpg"
            alt="Healthy drinks"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-bold text-[#3d4750]">
              Healthy Drinks & Smart Bites
            </h3>
            <p className="mt-3 text-[#686e7d]">
              Wholesome drinking for busy days
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#3d4750] shadow-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#fff6ed] p-8">
          <img
            src="/assets/img/banner-one/two.jpg"
            alt="Pure water and herbal drinks"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-bold text-[#3d4750]">
              Pure Water & Herbal Drinks
            </h3>
            <p className="mt-3 text-[#686e7d]">
              Daily hydration with natural goodness
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#3d4750] shadow-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[url('/assets/img/banner-two/banner.png')] bg-cover bg-center py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-lg rounded-3xl bg-white/90 p-8 shadow-sm backdrop-blur">
            <p className="font-semibold text-[#0f766e]">Wellness Offer</p>
            <h3 className="mt-3 text-4xl font-bold text-[#3d4750]">
              Natural Drinks for Better Days
            </h3>
            <Link
              href="/products"
              className="mt-7 inline-flex rounded-xl bg-[#0f766e] px-7 py-3 font-semibold text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle
          title="New Wellness Arrivals"
          subtitle="Freshly added drinks, herbal blends, and better-for-you essentials."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={`${product.title}-${product.image}`} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 h-14 w-14"
              />
              <h3 className="mb-2 text-lg font-bold text-[#3d4750]">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-[#686e7d]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle title="Top Vendors" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vendors.map((vendor) => (
            <article
              key={vendor.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                className="mx-auto mb-5 h-20 w-20 rounded-full object-cover"
              />
              <h3 className="font-bold text-[#3d4750]">{vendor.name}</h3>
              <p className="mt-2 text-sm text-[#686e7d]">{vendor.sales}</p>
              <p className="mt-3 text-xs text-[#686e7d]">
                Fruits | Drinks | Wellness
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f8fb] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle title="Testimonials" />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-[#3d4750]">{item.name}</h3>
                    <p className="text-sm text-[#686e7d]">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-[#686e7d]">“{item.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionTitle title="Wellness Journal" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <p className="mb-3 text-xs uppercase tracking-wide text-[#0f766e]">
                  {blog.date} - {blog.tag}
                </p>
                <h3 className="font-semibold leading-7 text-[#3d4750]">
                  {blog.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl bg-[#0f766e] px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">Newsletter.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Subscribe for wellness product updates, offers, and healthy daily
            living tips.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-xl px-4 text-sm text-[#3d4750] outline-none"
            />
            <button
              type="submit"
              className="h-12 rounded-xl bg-white px-7 font-semibold text-[#3d4750]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
```

---

## 4. Ensure layout uses Header and Footer

Update `app/layout.tsx` like this:

```tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "2gooD Wellness Store",
  description: "Wellness drinks, herbal infusions, jeera drinks, and healthy essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 5. Required dependency

The code uses icons from `lucide-react`.

```bash
npm install lucide-react
```

If you do not want any new dependency, replace those icons with simple text or SVGs.

---

## Notes

Use this as the direct implementation path:

```txt
public/assets              ← copy from twogoodBlueberry assets
components/Header.tsx      ← replace/create
components/Footer.tsx      ← replace/create
app/page.tsx               ← replace homepage
app/layout.tsx             ← ensure Header/Footer wrapping
```

This keeps the conversion simple, reusable, and avoids importing the full old HTML template scripts/jquery/plugins into Next.js.



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
````

## File: prisma/schema.prisma
````prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

enum OrderStatus {
  paid
  pending
  failed
}

model User {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name        String   @db.VarChar(150)
  email       String   @unique @db.VarChar(255)
  password    String
  phoneNumber String?  @map("phone_number") @db.VarChar(50)
  address     String?
  createdAt   DateTime @default(now()) @map("created_at") @db.Timestamptz(6)
  updatedAt   DateTime @default(now()) @updatedAt @map("updated_at") @db.Timestamptz(6)
  orders      Order[]

  @@map("users")
}

model Product {
  id                  String      @id
  productName         String      @map("product_name") @db.VarChar(255)
  productDescription  String      @map("product_description")
  productCategory     String      @map("product_category") @db.VarChar(150)
  price               Decimal     @db.Decimal(10, 2)
  stock               Int         @default(0)
  image               String
  badge               String?     @db.VarChar(80)
  tag                 String?     @db.VarChar(100)
  createdAt           DateTime    @default(now()) @map("created_at") @db.Timestamptz(6)
  updatedAt           DateTime    @default(now()) @updatedAt @map("updated_at") @db.Timestamptz(6)
  orderItems          OrderItem[]

  @@map("products")
}

model Order {
  id        String      @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId    String      @map("user_id") @db.Uuid
  total     Decimal     @default(0) @db.Decimal(10, 2)
  status    OrderStatus @default(pending)
  createdAt DateTime    @default(now()) @map("created_at") @db.Timestamptz(6)
  updatedAt DateTime    @default(now()) @updatedAt @map("updated_at") @db.Timestamptz(6)
  user      User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  items     OrderItem[]

  @@index([userId, status])
  @@map("orders")
}

model OrderItem {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  orderId   String   @map("order_id") @db.Uuid
  productId String   @map("product_id")
  quantity  Int      @default(1)
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz(6)
  updatedAt DateTime @default(now()) @updatedAt @map("updated_at") @db.Timestamptz(6)
  order     Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  product   Product  @relation(fields: [productId], references: [id], onDelete: Restrict)

  @@unique([orderId, productId])
  @@index([orderId])
  @@index([productId])
  @@map("order_items")
}
````

## File: sql/01_schema.sql
````sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  phone_number VARCHAR(50),
  address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(255) PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_description TEXT NOT NULL,
  product_category VARCHAR(150) NOT NULL,
  price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  image TEXT NOT NULL,
  badge VARCHAR(80),
  tag VARCHAR(100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total NUMERIC(10, 2) NOT NULL DEFAULT 0 CHECK (total >= 0),
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('paid', 'pending', 'failed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id VARCHAR(255) NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(order_id, product_id)
);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(LOWER(email));
CREATE INDEX IF NOT EXISTS idx_orders_user_status ON orders(user_id, status);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
DROP TRIGGER IF EXISTS users_set_updated_at ON users;
CREATE TRIGGER users_set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
DROP TRIGGER IF EXISTS products_set_updated_at ON products;
CREATE TRIGGER products_set_updated_at
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
DROP TRIGGER IF EXISTS orders_set_updated_at ON orders;
CREATE TRIGGER orders_set_updated_at
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
DROP TRIGGER IF EXISTS order_items_set_updated_at ON order_items;
CREATE TRIGGER order_items_set_updated_at
BEFORE UPDATE ON order_items
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
````

## File: src/app/api/cart/add/route.ts
````typescript
export const runtime = "nodejs";
import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";
import { parseRequestNumber, parseRequestString } from "@/lib/utils/numbers";
import cartService from "@/lib/services/cart.service";
export async function POST(request: Request) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return jsonError("Please login first.", 401);
    }
    const body = await request.json();
    const productId = parseRequestString(body.productId);
    if (!productId) {
      return jsonError("Product id is required.");
    }
    const cart = await cartService.addToCart(
      userId,
      productId,
      parseRequestNumber(body.quantity, 1),
    );
    return jsonSuccess({ message: "Product added to cart.", cart });
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to add product to cart."));
  }
}
````

## File: src/app/api/cart/items/[itemId]/route.ts
````typescript
export const runtime = "nodejs";
import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";
import { parseRequestNumber } from "@/lib/utils/numbers";
import cartService from "@/lib/services/cart.service";
interface RouteContext {
  params: Promise<{
    itemId: string;
  }>;
}
export async function PATCH(request: Request, context: RouteContext) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return jsonError("Unauthorized", 401);
    }
    const { itemId } = await context.params;
    const body = await request.json();
    const cart = await cartService.updateCartItem(
      userId,
      itemId,
      parseRequestNumber(body.quantity, 0),
    );
    return jsonSuccess({ message: "Cart updated.", cart });
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to update cart item."));
  }
}
export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return jsonError("Unauthorized", 401);
    }
    const { itemId } = await context.params;
    const cart = await cartService.removeCartItem(userId, itemId);
    return jsonSuccess({ message: "Item removed from cart.", cart });
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to remove cart item."));
  }
}
````

## File: src/app/api/cart/route.ts
````typescript
export const runtime = "nodejs";
import { jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { getAuthenticatedUserId } from "@/lib/utils/auth";
import cartService from "@/lib/services/cart.service";
export async function GET() {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return jsonError("Unauthorized", 401);
  }
  const cart = await cartService.getCart(userId);
  return jsonSuccess({ cart });
}
````

## File: src/app/api/products/route.ts
````typescript
import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import productService from "@/lib/services/product.service";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");
    if (productId) {
      const product = await productService.getProductById(productId);
      return jsonSuccess({
        success: true,
        product,
        products: product ? [product] : [],
      });
    }
    const products = await productService.getAllProducts();
    return jsonSuccess({
      success: true,
      product: null,
      products,
    });
  } catch (error) {
    console.error("PRODUCTS_GET_ERROR", error);
    return jsonError("Failed to fetch products", 500);
  }
}
````

## File: src/app/api/register/route.ts
````typescript
export const runtime = "nodejs";
import { getErrorMessage, jsonError, jsonSuccess } from "@/lib/utils/api-response";
import { parseRequestString } from "@/lib/utils/numbers";
import userService from "@/lib/services/user.service";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await userService.createUser({
      name: parseRequestString(body.name),
      email: parseRequestString(body.email),
      password: parseRequestString(body.password),
      phone_number: body.phone_number ? parseRequestString(body.phone_number) : undefined,
      address: body.address ? parseRequestString(body.address) : undefined,
    });
    return jsonSuccess(
      {
        message: "Account created successfully.",
        user,
      },
      201,
    );
  } catch (error) {
    return jsonError(getErrorMessage(error, "Unable to create account."));
  }
}
````

## File: src/app/cart/page.tsx
````typescript
import { redirect } from "next/navigation";
export default function CartPage() {
  redirect("/my-cart");
}
````

## File: src/app/my-cart/page.tsx
````typescript
import MyCartClient from "@/components/cart/MyCartClient";
export default function MyCartPage() {
  return (
    <main>
      <section className="py-[50px] max-[767px]:py-[35px]">
        <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="mb-[30px] text-center">
            <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#0f766e]">Checkout Preview</p>
            <h1 className="font-quicksand text-[34px] font-bold text-[#3d4750] max-[767px]:text-[28px]">
              My Cart
            </h1>
          </div>
          <MyCartClient />
        </div>
      </section>
    </main>
  );
}
````

## File: src/auth.ts
````typescript
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import userService from "@/lib/services/user.service";
export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = String(credentials?.email || "").trim().toLowerCase();
        const password = String(credentials?.password || "");
        if (!email || !password) {
          return null;
        }
        const user = await userService.getUserByEmail(email);
        if (!user) {
          return null;
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          return null;
        }
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          phone_number: user.phoneNumber,
          address: user.address,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.phone_number = user.phone_number ?? null;
        token.address = user.address ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = String(token.id || "");
        session.user.name = token.name || session.user.name;
        session.user.email = token.email || session.user.email;
        session.user.phone_number = (token.phone_number as string | null) ?? null;
        session.user.address = (token.address as string | null) ?? null;
      }
      return session;
    },
  },
});
````

## File: src/components/cart/MyCartClient.tsx
````typescript
"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
export default function MyCartClient() {
  const cart = useCartStore((state) => state.cart);
  const isLoading = useCartStore((state) => state.isLoading);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const updateItem = useCartStore((state) => state.updateItem);
  const removeItem = useCartStore((state) => state.removeItem);
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);
  if (isLoading && !cart) {
    return (
      <div className="rounded-[20px] bg-white p-[40px] text-center shadow-sm">
        <p className="font-Poppins text-[#686e7d]">Loading your cart...</p>
      </div>
    );
  }
  if (!cart || cart.items.length === 0) {
    return (
      <div className="rounded-[20px] bg-white p-[40px] text-center shadow-sm">
        <h2 className="font-quicksand text-[28px] font-bold text-[#3d4750]">Your cart is empty</h2>
        <p className="mt-3 font-Poppins text-[#686e7d]">Add wellness products from the shop to continue.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-[12px] bg-[#0f766e] px-[24px] py-[12px] font-Poppins text-[14px] font-semibold text-white hover:bg-[#5a6cb8]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="grid gap-[24px] lg:grid-cols-[1fr_360px]">
      <div className="rounded-[20px] bg-white p-[24px] shadow-sm">
        <h2 className="mb-[20px] font-quicksand text-[24px] font-bold text-[#3d4750]">Cart Items</h2>
        <div className="space-y-[16px]">
          {cart.items.map((item) => (
            <div key={item.id} className="flex flex-col gap-[16px] rounded-[16px] border border-[#eee] p-[16px] sm:flex-row sm:items-center">
              <img
                src={item.product.image}
                alt={item.product.product_name}
                className="h-[110px] w-[110px] rounded-[12px] bg-[#f8f8fb] object-contain p-[10px]"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-quicksand text-[17px] font-bold text-[#3d4750]">
                  {item.product.product_name}
                </h3>
                <p className="mt-1 font-Poppins text-[13px] text-[#686e7d]">
                  {item.product.product_category}
                </p>
                <p className="mt-2 font-Poppins text-[14px] font-semibold text-[#3d4750]">
                  ${item.product.price.toFixed(2)} each
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="flex items-center rounded-md border border-[#e5e7eb]">
                  <button
                    type="button"
                    onClick={() => updateItem(item.id, item.quantity - 1)}
                    className="px-3 py-2 text-[#3d4750]"
                  >
                    -
                  </button>
                  <span className="min-w-10 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateItem(item.id, item.quantity + 1)}
                    className="px-3 py-2 text-[#3d4750]"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="rounded-md border border-red-100 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
              <div className="font-quicksand text-[18px] font-bold text-[#3d4750] sm:w-[90px] sm:text-right">
                ${item.line_total.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="h-fit rounded-[20px] bg-white p-[24px] shadow-sm">
        <h2 className="mb-[18px] font-quicksand text-[24px] font-bold text-[#3d4750]">Order Summary</h2>
        <div className="space-y-[12px] border-b border-[#eee] pb-[18px] font-Poppins text-[14px] text-[#686e7d]">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{cart.item_count}</span>
          </div>
          <div className="flex justify-between">
            <span>Status</span>
            <span>Pending</span>
          </div>
        </div>
        <div className="mt-[18px] flex justify-between font-quicksand text-[22px] font-bold text-[#3d4750]">
          <span>Total</span>
          <span>${cart.total.toFixed(2)}</span>
        </div>
        <Link
          href="/checkout"
          className="mt-[22px] block w-full rounded-[12px] bg-[#0f766e] px-[20px] py-[13px] text-center font-Poppins text-[14px] font-semibold text-white hover:bg-[#5a6cb8]"
        >
          Pay Now
        </Link>
        <p className="mt-3 text-center font-Poppins text-[12px] text-[#9ca3af]">
          Payment gateway integration will be added later.
        </p>
      </aside>
    </div>
  );
}
````

## File: src/components/shop/ProductActions.tsx
````typescript
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCartStore } from "@/store/useCartStore";
import { useUiStore } from "@/store/useUiStore";
interface ProductActionsProps {
  productId: string;
  compact?: boolean;
}
export default function ProductActions({ productId, compact = false }: ProductActionsProps) {
  const router = useRouter();
  const { status } = useSession();
  const addToCart = useCartStore((state) => state.addToCart);
  const isLoading = useCartStore((state) => state.isLoading);
  const toggleCart = useUiStore((state) => state.toggleCart);
  const [message, setMessage] = useState<string | null>(null);
  const redirectToLogin = (callbackUrl: string) => {
    alert("Please login first to continue.");
    router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  };
  const handleAddToCart = async () => {
    setMessage(null);
    if (status !== "authenticated") {
      redirectToLogin("/shop");
      return;
    }
    try {
      await addToCart(productId, 1);
      setMessage("Added to cart");
      toggleCart();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to add product.");
    }
  };
  const handleBuyNow = async () => {
    setMessage(null);
    if (status !== "authenticated") {
      redirectToLogin(`/my-cart?buyNow=${productId}`);
      return;
    }
    try {
      await addToCart(productId, 1);
      router.push("/my-cart");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to continue.");
    }
  };
  return (
    <div className={compact ? "mt-[16px]" : "mt-[24px]"}>
      <div className={compact ? "flex flex-col gap-[10px]" : "flex flex-wrap gap-[12px]"}>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isLoading || status === "loading"}
          className="flex-1 rounded-[12px] bg-[#f3f4f6] px-[18px] py-[12px] font-Poppins text-[14px] font-medium text-[#1f2937] transition-all duration-200 hover:bg-[#e5e7eb] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={isLoading || status === "loading"}
          className="flex-1 rounded-[12px] bg-[#4f46e5] px-[18px] py-[12px] font-Poppins text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#4338ca] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Buy Now
        </button>
      </div>
      {message ? <p className="mt-2 text-center text-[12px] text-[#0f766e]">{message}</p> : null}
    </div>
  );
}
````

## File: src/app/(auth)/login/page.tsx
````typescript
"use client";
import Link from "next/link";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/shop";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setIsSubmitting(false);
    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }
    router.push(callbackUrl);
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-[16px]">
      {error ? (
        <div className="rounded-[12px] bg-red-50 px-[14px] py-[10px] font-Poppins text-[13px] text-red-600">
          {error}
        </div>
      ) : null}
      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
          placeholder="Enter password"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[12px] bg-[#0f766e] px-[20px] py-[13px] font-Poppins text-[14px] font-semibold text-white transition hover:bg-[#5a6cb8] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Signing in..." : "Login"}
      </button>
      <p className="text-center font-Poppins text-[14px] text-[#686e7d]">
        New customer?{" "}
        <Link href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-semibold text-[#0f766e]">
          Create account
        </Link>
      </p>
    </form>
  );
}
export default function LoginPage() {
  return (
    <main>
      <section className="py-[60px]">
        <div className="mx-auto grid max-w-[980px] overflow-hidden rounded-[24px] bg-white shadow-sm md:grid-cols-2">
          <div className="hidden bg-[#f8f8fb] md:block">
            <img src="/assets/img/login/login.png" alt="Login" className="h-full w-full object-cover" />
          </div>
          <div className="p-[32px] md:p-[44px]">
            <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#0f766e]">Welcome back</p>
            <h1 className="mb-[24px] font-quicksand text-[32px] font-bold text-[#3d4750]">Login to continue</h1>
            <Suspense>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
````

## File: src/app/about-us/page.tsx
````typescript
import AboutSection from "@/components/common/AboutSection";
export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <AboutSection variant="page" />
    </main>
  );
}
````

## File: src/app/checkout/page.tsx
````typescript
import Link from "next/link";
export default function CheckoutPage() {
  return (
    <main>
      <section className="py-[60px]">
        <div className="mx-auto max-w-[760px] px-4">
          <div className="rounded-[24px] bg-white p-[36px] text-center shadow-sm">
            <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#0f766e]">Payment Gateway</p>
            <h1 className="font-quicksand text-[32px] font-bold text-[#3d4750]">Payment will be integrated later</h1>
            <p className="mt-[14px] font-Poppins text-[15px] leading-[26px] text-[#686e7d]">
              Your cart is ready. The payment provider can be connected here in the next phase.
            </p>
            <Link
              href="/my-cart"
              className="mt-[24px] inline-flex rounded-[12px] bg-[#0f766e] px-[24px] py-[12px] font-Poppins text-[14px] font-semibold text-white hover:bg-[#5a6cb8]"
            >
              Back to My Cart
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
````

## File: src/app/wellness-journal/healthy-lifestyle/page.tsx
````typescript
"use client";
import Link from "next/link";
const lifestylePillars = [
  {
    title: "Restorative Sleep Architecture",
    category: "Recovery",
    color: "bg-indigo-50/80 border-indigo-100 text-indigo-700",
    iconColor: "text-indigo-500",
    desc: "Optimize your circadian rhythm through temperature regulation, light exposure management, and consistent wind-down protocols.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  },
  {
    title: "Mindful Kinetic Movement",
    category: "Vitality",
    color: "bg-rose-50/80 border-rose-100 text-rose-700",
    iconColor: "text-rose-500",
    desc: "Shift from punitive exercise to joyful movement. Focus on mobility, functional strength, and daily non-exercise activity thermogenesis (NEAT).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Nutrient-Dense Fueling",
    category: "Nourishment",
    color: "bg-emerald-50/80 border-emerald-100 text-emerald-700",
    iconColor: "text-emerald-500",
    desc: "Prioritize whole, unprocessed foods rich in micronutrients, fiber, and healthy fats to sustain stable energy and robust gut microbiome diversity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Cognitive & Stress Resilience",
    category: "Mindset",
    color: "bg-amber-50/80 border-amber-100 text-amber-700",
    iconColor: "text-amber-500",
    desc: "Implement daily nervous system regulation practices like breathwork, meditation, and digital detoxing to maintain mental clarity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];
const featuredArticles = [
  {
    title: "The 20-Minute Morning Protocol for Sustained Energy",
    excerpt: "Why delaying caffeine intake by 90 minutes and prioritizing sunlight exposure can completely transform your afternoon productivity.",
    readTime: "5 min read",
    tag: "Habit Stacking"
  },
  {
    title: "Decoding Food Labels: A Practical Guide to Clean Eating",
    excerpt: "Learn to identify hidden sugars, inflammatory seed oils, and artificial additives masquerading as 'healthy' alternatives in the grocery aisle.",
    readTime: "7 min read",
    tag: "Nutrition"
  },
  {
    title: "The Science of Cold Exposure and Metabolic Adaptation",
    excerpt: "How brief, controlled cold therapy stimulates brown fat activation, reduces systemic inflammation, and enhances dopamine baseline levels.",
    readTime: "6 min read",
    tag: "Biohacking"
  }
];
export default function HealthyLifestylePage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] py-12 font-Poppins text-[#2b2b2d]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {}
        <nav className="mb-8 flex items-center text-[13px] font-medium text-[#686e7d]">
          <Link href="/" className="hover:text-[#0f766e] transition-colors duration-200">Home</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <Link href="/wellness-journal" className="hover:text-[#0f766e] transition-colors duration-200">Wellness Journal</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <span className="text-[#0f766e]">Healthy Lifestyle</span>
        </nav>
        {}
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0f766e] via-[#5a6fc9] to-[#4a5cb8] p-8 md:p-16 text-white shadow-[0_20px_40px_-10px_rgba(108,127,216,0.3)] mb-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-[#2b2b2d]/10 blur-3xl" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Holistic Wellness
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Cultivating a Sustainable <br className="hidden md:block" />
              <span className="text-white/90">Healthy Lifestyle</span>
            </h1>
            <p className="mt-5 text-[16px] leading-[28px] text-white/85 max-w-2xl">
              True health is not a destination, but a dynamic equilibrium. Explore evidence-based strategies to harmonize your physical, mental, and metabolic well-being for the long term.
            </p>
          </div>
        </section>
        {}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-[#0f766e]" />
            <h2 className="text-[22px] font-bold text-[#2b2b2d]">The Four Pillars of Vitality</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lifestylePillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group relative flex flex-col justify-between rounded-[24px] border border-[#eef0f4] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(43,43,45,0.08)] hover:border-[#0f766e]/30"
              >
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold tracking-wide rounded-lg border mb-5 ${pillar.color}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${pillar.iconColor.replace('text', 'bg')}`} />
                    {pillar.category}
                  </div>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8f9fa] ${pillar.iconColor} transition-colors duration-300 group-hover:bg-[#0f766e] group-hover:text-white`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-[18px] font-bold leading-[24px] text-[#2b2b2d] mb-3 transition-colors duration-300 group-hover:text-[#0f766e]">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] leading-[24px] text-[#686e7d]">
                    {pillar.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        {}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-[#0f766e]" />
              <h2 className="text-[22px] font-bold text-[#2b2b2d]">Latest Editorial Insights</h2>
            </div>
            <Link href="/wellness-journal" className="hidden md:inline-flex items-center gap-1 text-[14px] font-semibold text-[#0f766e] hover:text-[#5a6fc9] transition-colors">
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredArticles.map((article, idx) => (
              <Link
                href={`/wellness-journal/article-${idx + 1}`}
                key={article.title}
                className="group flex flex-col rounded-[24px] border border-[#eef0f4] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(43,43,45,0.08)]"
              >
                {}
                <div className="h-40 w-full bg-gradient-to-br from-[#f3f1ff] to-[#eef0f4] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <svg className="w-24 h-24 text-[#0f766e]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0f766e] border border-[#0f766e]/20">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-[18px] font-bold leading-[26px] text-[#2b2b2d] mb-3 transition-colors duration-300 group-hover:text-[#0f766e]">
                    {article.title}
                  </h3>
                  <p className="text-[14px] leading-[24px] text-[#686e7d] mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#94a3b8] pt-4 border-t border-[#f1f3f5]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {article.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link href="/wellness-journal" className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#0f766e] hover:text-[#5a6fc9] transition-colors">
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
        {}
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f3f1ff] via-white to-[#f8f9fa] border border-[#0f766e]/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0f766e]/5 blur-3xl" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-[22px] font-bold text-[#2b2b2d] flex items-center gap-3">
              <svg className="w-6 h-6 text-[#0f766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Join the 2good PlusWellness Community
            </h3>
            <p className="text-[15px] leading-[26px] text-[#686e7d] mt-3">
              Receive weekly, science-backed insights on nutrition, movement, and mindset directly to your inbox. No spam, just actionable strategies for a better you.
            </p>
          </div>
          <div className="relative z-10 flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full md:w-72 rounded-xl border border-[#e2e8f0] bg-white px-4 text-[14px] text-[#2b2b2d] outline-none transition-all duration-200 placeholder:text-[#94a3b8] focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
            />
            <button className="h-12 whitespace-nowrap inline-flex items-center justify-center rounded-xl bg-[#0f766e] px-6 text-[14px] font-semibold text-white shadow-lg shadow-[#0f766e]/20 transition-all duration-300 hover:bg-[#2b2b2d] hover:shadow-xl hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
````

## File: src/app/wellness-journal/herbal-benefits/page.tsx
````typescript
"use client";
import Link from "next/link";
const benefitsData = [
  {
    title: "Jeera Extract & Cumin Seed Solubles",
    category: "Digestive Balance",
    color: "bg-indigo-50/80 border-indigo-100 text-indigo-700",
    iconColor: "text-indigo-500",
    desc: "Cumin stimulates pancreatic enzyme production, reinforcing absorption curves and minimizing post-meal bloating instantly.",
    highlights: ["Enhances gut motility", "Calms acidic flareups", "Rich in traditional iron bio-elements"]
  },
  {
    title: "Hibiscus & Rose Petal Decoctions",
    category: "Antioxidant Shield",
    color: "bg-rose-50/80 border-rose-100 text-rose-700",
    iconColor: "text-rose-500",
    desc: "Densely infused with anthocyanins, hibiscus balances blood pressure ranges naturally while fortifying the vascular system.",
    highlights: ["Slashes environmental oxidative stress", "Supports kidney micro-filtration", "Organic Vitamin C payload"]
  },
  {
    title: "Ginger & Turmeric Root Concentrates",
    category: "Anti-Inflammatory",
    color: "bg-amber-50/80 border-amber-100 text-amber-700",
    iconColor: "text-amber-500",
    desc: "Active gingerols and curcumin directly suppress pro-inflammatory pathways, mitigating tissue wear and joint fatigue safely.",
    highlights: ["Relieves chronic muscle tightness", "Boosts macro immune responsiveness", "Optimizes natural bile flow"]
  },
  {
    title: "Lemongrass & Green Tea Infusions",
    category: "Metabolic Cleanse",
    color: "bg-emerald-50/80 border-emerald-100 text-emerald-700",
    iconColor: "text-emerald-500",
    desc: "A natural, non-jittery thermogenic flush agent that optimizes safe metabolic cycles while sharpening neurological clarity.",
    highlights: ["Smooth lipid processing support", "Flushes accumulated fluid weight", "Sustained clean attention spans"]
  }
];
export default function HerbalBenefitsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] py-12 font-Poppins text-[#2b2b2d]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {}
        <nav className="mb-8 flex items-center text-[13px] font-medium text-[#686e7d]">
          <Link href="/" className="hover:text-[#0f766e] transition-colors duration-200">Home</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <Link href="/wellness-journal" className="hover:text-[#0f766e] transition-colors duration-200">Wellness Journal</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <span className="text-[#0f766e]">Herbal Drink Benefits</span>
        </nav>
        {}
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0f766e]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f766e]">
            Botanical Almanac
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#2b2b2d] md:text-5xl leading-[1.15]">
            The Clinical Advantages of <span className="text-[#0f766e]">Standardized Herbal Infusions</span>
          </h1>
          <p className="mt-5 text-[16px] leading-[28px] text-[#686e7d] max-w-2xl">
            Every drink is formulated to marry time-tested Ayurvedic insights with precise contemporary biological standards. Sip with true structural intention.
          </p>
        </div>
        {}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between rounded-[24px] border border-[#eef0f4] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(43,43,45,0.08)] hover:border-[#0f766e]/30"
            >
              <div>
                {}
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold tracking-wide rounded-lg border ${item.color} mb-5`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${item.iconColor.replace('text', 'bg')}`} />
                  {item.category}
                </span>
                <h2 className="text-[18px] font-bold leading-[24px] text-[#2b2b2d] mb-3 transition-colors duration-300 group-hover:text-[#0f766e]">
                  {item.title}
                </h2>
                <p className="text-[14px] leading-[24px] text-[#686e7d] mb-6">
                  {item.desc}
                </p>
              </div>
              {}
              <div className="border-t border-[#f1f3f5] pt-5 mt-auto">
                <ul className="space-y-3">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px] font-medium text-[#4b5563]">
                      <svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-[20px]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        {}
        <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#f3f1ff] via-white to-[#f8f9fa] border border-[#0f766e]/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden">
          {}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0f766e]/5 blur-3xl" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-[22px] font-bold text-[#2b2b2d] flex items-center gap-3">
              <svg className="w-6 h-6 text-[#0f766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Zero Refined Sugars. Zero Syrups. Pure Extractions.
            </h3>
            <p className="text-[15px] leading-[26px] text-[#686e7d] mt-3">
              Unlike mainstream fitness beverages packed with sucrose overrides, <span className="font-semibold text-[#2b2b2d]">2gooD</span> uses real raw botanical extracts micro-balanced with natural, low-glycemic plant sweeteners.
            </p>
          </div>
          <Link
            href="/shop"
            className="relative z-10 whitespace-nowrap h-12 inline-flex items-center justify-center rounded-xl bg-[#0f766e] px-8 text-[15px] font-semibold text-white shadow-lg shadow-[#0f766e]/20 transition-all duration-300 hover:bg-[#2b2b2d] hover:shadow-xl hover:-translate-y-0.5"
          >
            Shop the Infusions Range
          </Link>
        </section>
      </div>
    </main>
  );
}
````

## File: src/app/wellness-journal/hydration-tips/page.tsx
````typescript
"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function HydrationTipsPage() {
  const [calculatorWeight, setCalculatorWeight] = useState("");
  const [calculatedOz, setCalculatedOz] = useState<number | null>(null);
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNum = parseFloat(calculatorWeight);
    if (!isNaN(weightNum) && weightNum > 0) {
      setCalculatedOz(Math.round(weightNum * 0.5));
    }
  };
  return (
    <main className="min-h-screen bg-[#f8f9fa] py-12 font-Poppins text-[#2b2b2d]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {}
        <nav className="mb-8 flex items-center text-[13px] font-medium text-[#686e7d]">
          <Link href="/" className="hover:text-[#0f766e] transition-colors duration-200">Home</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <Link href="/wellness-journal" className="hover:text-[#0f766e] transition-colors duration-200">Wellness Journal</Link>
          <span className="mx-2 text-[#cbd5e1]">/</span>
          <span className="text-[#0f766e]">Hydration Tips</span>
        </nav>
        {}
        <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0f766e] via-[#5a6fc9] to-[#4a5cb8] p-8 md:p-16 text-white shadow-[0_20px_40px_-10px_rgba(108,127,216,0.3)] mb-12">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-[#2b2b2d]/10 blur-3xl" aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Optimal Living
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              The Art of Hydration
            </h1>
            <p className="mt-5 text-[16px] leading-[28px] text-white/85 max-w-xl">
              Water isn't just a basic need—it is the foundational fuel for cellular performance, mental clarity, and metabolic function. Discover your ideal daily rhythm.
            </p>
          </div>
        </section>
        <div className="grid gap-10 lg:grid-cols-3">
          {}
          <div className="lg:col-span-2 space-y-8">
            {}
            <div className="rounded-[24px] border border-[#eef0f4] bg-white p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h2 className="text-[22px] font-bold text-[#2b2b2d] mb-8 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-[#0f766e]" />
                Strategic Daily Hydration Rules
              </h2>
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "The Golden Morning Glass",
                    desc: "Drink 16oz of ambient water immediately upon waking. Sleep naturally dehydrates your system; jumpstart your digestion and wake up your internal organs before adding coffee or food.",
                    icon: <svg className="w-6 h-6 text-[#0f766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  },
                  {
                    num: "02",
                    title: "Interval Sipping Over Gulping",
                    desc: "Your body absorbs fluid best when consumed steadily in small increments. Chugging large volumes overrides renal capacity, sending water straight out of your system without structural absorption.",
                    icon: <svg className="w-6 h-6 text-[#0f766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  },
                  {
                    num: "03",
                    title: "Pre-empt Hunger Triggers",
                    desc: "Mild dehydration frequently mimics food cravings in the brain. Drink a glass of water 20 minutes before regular meal slots to ground genuine nutritional signals.",
                    icon: <svg className="w-6 h-6 text-[#0f766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  }
                ].map((item) => (
                  <div key={item.num} className="group flex gap-5 items-start">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f766e]/5 text-[#0f766e] transition-colors duration-300 group-hover:bg-[#0f766e] group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#2b2b2d] mb-1">{item.title}</h3>
                      <p className="text-[15px] leading-[26px] text-[#686e7d]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {}
            <div className="rounded-[24px] border-l-4 border-[#f59e0b] bg-[#fffbeb]/50 p-6 md:p-8 shadow-sm backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#2b2b2d] mb-2">Recognizing Silent Dehydration Flags</h3>
                  <p className="text-[15px] leading-[26px] text-[#686e7d]">
                    If you are already experiencing a dry mouth or mild fatigue, your tissues are running on low reserves. Watch out for brain fog, random headaches, and reduced muscle elasticity during simple physical movements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="space-y-8">
            {}
            {
}
            {}
            <div className="relative overflow-hidden rounded-[24px] bg-[#2b2b2d] p-8 text-center text-white shadow-xl">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#0f766e]/20 blur-3xl" />
              <div className="relative z-10">
                <h4 className="text-[20px] font-bold mb-3">Looking for More Flavor?</h4>
                <p className="text-[14px] text-white/70 leading-[24px] mb-6">
                  Infuse your routine with trace minerals and botanicals using our curated 2good Plus Wellness Water blends.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-[#0f766e] px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#2b2b2d] hover:shadow-lg"
                >
                  Explore Infusions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
````

## File: src/components/common/CartSidebar.tsx
````typescript
"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useUiStore } from "@/store/useUiStore";
import { useCartStore } from "@/store/useCartStore";
export default function CartSidebar() {
  const { status } = useSession();
  const { isCartOpen, toggleCart } = useUiStore();
  const cart = useCartStore((state) => state.cart);
  const isLoading = useCartStore((state) => state.isLoading);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const updateItem = useCartStore((state) => state.updateItem);
  const removeItem = useCartStore((state) => state.removeItem);
  useEffect(() => {
    if (isCartOpen && status === "authenticated") {
      fetchCart();
    }
  }, [isCartOpen, status, fetchCart]);
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 sidebar-transition ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleCart}
      />
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-2xl sidebar-transition transform ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800">Your Shopping Cart</h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-black text-2xl" aria-label="Close cart">
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            {status === "loading" || isLoading ? (
              <p className="text-gray-500 text-center mt-10">Loading cart...</p>
            ) : null}
            {status === "unauthenticated" ? (
              <div className="mt-10 text-center">
                <p className="mb-4 text-gray-500">Please login first to view your cart.</p>
                <Link
                  href="/login?callbackUrl=/shop"
                  onClick={toggleCart}
                  className="inline-flex rounded-md bg-[#0f766e] px-5 py-3 text-sm font-medium text-white hover:bg-[#5a6cb8]"
                >
                  Login
                </Link>
              </div>
            ) : null}
            {status === "authenticated" && !isLoading && (!cart || cart.items.length === 0) ? (
              <p className="text-gray-500 text-center mt-10">Your cart is currently empty.</p>
            ) : null}
            {status === "authenticated" && cart?.items.length ? (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex gap-3 rounded-[14px] border border-[#eee] p-3">
                    <img
                      src={item.product.image}
                      alt={item.product.product_name}
                      className="h-20 w-20 rounded-[10px] bg-[#f8f8fb] object-contain p-2"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-quicksand text-[14px] font-semibold text-[#3d4750]">
                        {item.product.product_name}
                      </h3>
                      <p className="mt-1 font-Poppins text-[13px] text-[#686e7d]">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="flex items-center rounded-md border border-[#e5e7eb]">
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-[#3d4750]"
                          >
                            -
                          </button>
                          <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-[#3d4750]"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Subtotal:</span>
              <span>${(cart?.total || 0).toFixed(2)}</span>
            </div>
            <Link
              href="/my-cart"
              onClick={toggleCart}
              className="block w-full rounded-md bg-[#0f766e] py-3 text-center font-medium text-white transition-colors hover:bg-[#5a6cb8]"
            >
              View My Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
````

## File: src/lib/products.data.ts
````typescript
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
````

## File: src/store/useCartStore.ts
````typescript
import { create } from "zustand";
import type { Cart } from "@/types/cart";
import apiClient from "@/lib/apiClient";
interface CartState {
  cart: Cart | null;
  isLoading: boolean;
  error: string | null;
  fetchCart: () => Promise<Cart | null>;
  addToCart: (productId: string, quantity?: number) => Promise<Cart | null>;
  updateItem: (itemId: string, quantity: number) => Promise<Cart | null>;
  removeItem: (itemId: string) => Promise<Cart | null>;
  clearLocalCart: () => void;
}
type CartResponse = {
  message?: string;
  cart?: Cart | null;
};
async function parseResponse(response: { data?: CartResponse }): Promise<CartResponse> {
  const data = response?.data ?? {};
  if (data.message && !data.cart) {
    throw new Error(data.message);
  }
  return data;
}
export const useCartStore = create<CartState>((set) => ({
  cart: null,
  isLoading: false,
  error: null,
  fetchCart: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get("/api/cart", { headers: { "Cache-Control": "no-store" } });
      const data = await parseResponse(response);
      const cart = data.cart ?? null;
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load cart.";
      set({ error: message, isLoading: false });
      return null;
    }
  },
  addToCart: async (productId, quantity = 1) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/api/cart/add", { productId, quantity });
      const data = await parseResponse(response);
      const cart = data.cart ?? null;
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to add product.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },
  updateItem: async (itemId, quantity) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.patch(`/api/cart/items/${itemId}`, { quantity });
      const data = await parseResponse(response);
      const cart = data.cart ?? null;
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to update item.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },
  removeItem: async (itemId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.delete(`/api/cart/items/${itemId}`);
      const data = await parseResponse(response);
      const cart = data.cart ?? null;
      set({ cart, isLoading: false });
      return cart;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to remove item.";
      set({ error: message, isLoading: false });
      throw error;
    }
  },
  clearLocalCart: () => set({ cart: null, error: null, isLoading: false }),
}));
````

## File: src/app/(auth)/register/page.tsx
````typescript
"use client";
import Link from "next/link";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import apiClient from "@/lib/apiClient";
function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/shop";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const updateField = (field: keyof typeof form, value: string) => {
    setForm((old) => ({ ...old, [field]: value }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await apiClient.post("/api/register", form);
    } catch (error: unknown) {
      const message =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Unable to create account.";
      setError(message);
      setIsSubmitting(false);
      return;
    }
    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    setIsSubmitting(false);
    if (result?.error) {
      router.push("/login");
      return;
    }
    router.push(callbackUrl);
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-[16px]">
      {error ? (
        <div className="rounded-[12px] bg-red-50 px-[14px] py-[10px] font-Poppins text-[13px] text-red-600">
          {error}
        </div>
      ) : null}
      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Name</label>
        <input
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
          placeholder="Full name"
        />
      </div>
      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Password</label>
        <input
          type="password"
          required
          minLength={6}
          value={form.password}
          onChange={(event) => updateField("password", event.target.value)}
          className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
          placeholder="Minimum 6 characters"
        />
      </div>
      <div className="grid gap-[16px] sm:grid-cols-2">
        <div>
          <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Phone</label>
          <input
            value={form.phone_number}
            onChange={(event) => updateField("phone_number", event.target.value)}
            className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
            placeholder="Phone number"
          />
        </div>
        <div>
          <label className="mb-[8px] block font-Poppins text-[14px] font-medium text-[#3d4750]">Address</label>
          <input
            value={form.address}
            onChange={(event) => updateField("address", event.target.value)}
            className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
            placeholder="Address"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[12px] bg-[#0f766e] px-[20px] py-[13px] font-Poppins text-[14px] font-semibold text-white transition hover:bg-[#5a6cb8] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Creating account..." : "Create Account"}
      </button>
      <p className="text-center font-Poppins text-[14px] text-[#686e7d]">
        Already have an account?{" "}
        <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-semibold text-[#0f766e]">
          Login
        </Link>
      </p>
    </form>
  );
}
export default function RegisterPage() {
  return (
    <main>
      <section className="py-[60px]">
        <div className="mx-auto max-w-[760px] rounded-[24px] bg-white p-[32px] shadow-sm md:p-[44px]">
          <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#0f766e]">Join 2gooD</p>
          <h1 className="mb-[24px] font-quicksand text-[32px] font-bold text-[#3d4750]">Create your account</h1>
          <Suspense>
            <RegisterForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
````

## File: src/components/common/AboutSection.tsx
````typescript
"use client";
import Link from "next/link";
import { aboutContent } from "@/lib/site-content";
type AboutSectionProps = {
  variant?: "home" | "page";
};
export default function AboutSection({ variant = "page" }: AboutSectionProps) {
  const isHome = variant === "home";
  return (
    <section className={isHome ? "mx-auto max-w-7xl px-4 py-16 md:px-6" : ""}>
      <div className="rounded-[32px] bg-white p-8 shadow-sm md:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-xl font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
              {aboutContent.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {isHome ? aboutContent.homeTitle : aboutContent.heroTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {isHome ? aboutContent.homeDescription : aboutContent.heroDescription}
            </p>
            {!isHome ? (
              <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                {aboutContent.storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about-us"
                className="rounded-full bg-[#0f766e] px-6 py-3 text-sm font-semibold !text-white transition hover:-translate-y-1 hover:bg-[#0c5a52] hover:text-white"
              >
                Order Water
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#0f766e] hover:text-[#0f766e]"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="rounded-[28px] bg-[#f8fafc] p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              What makes us reliable?
            </h3>
            <ul className="mt-6 space-y-5 text-slate-600">
              {aboutContent.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f766e]/10 text-[#0f766e]">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[24px] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
                Our promise
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tested, trusted, and delivered fresh — every bottle is handled
                with the care your family deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
````

## File: src/components/shop/ProductCard.tsx
````typescript
import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductActions from "@/components/shop/ProductActions";
interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bb-pro-box bg-[#fff] border border-[#eee] rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="bb-pro-img relative overflow-hidden border-b border-[#eee]">
        <Link href={`/shop/${product.id}`} className="block bg-[#f8f8fb]">
          <img
            src={product.image}
            alt={product.product_name}
            className="w-full h-[260px] object-contain p-[20px] transition-all duration-300 hover:scale-105"
          />
        </Link>
        {product.Badge && (
          <span className="absolute top-[15px] left-[15px] bg-[#0f766e] text-white text-[12px] font-Poppins px-[12px] py-[4px] rounded-[20px]">
            {product.Badge}
          </span>
        )}
      </div>
      <div className="bb-pro-contact p-[20px]">
        <div className="bb-pro-subtitle mb-[8px] flex items-center justify-between">
          <span className="font-Poppins text-[13px] text-[#777]">
            {product.product_category}
          </span>
          <span className="flex">
            <i className="ri-star-fill text-[15px] mr-[2px] text-[#fea99a]" />
            <i className="ri-star-fill text-[15px] mr-[2px] text-[#fea99a]" />
            <i className="ri-star-fill text-[15px] mr-[2px] text-[#fea99a]" />
            <i className="ri-star-fill text-[15px] mr-[2px] text-[#fea99a]" />
            <i className="ri-star-line text-[15px] text-[#777]" />
          </span>
        </div>
        <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
          <Link
            href={`/shop/${product.id}`}
            className="font-quicksand block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem] hover:text-[#0f766e]"
          >
            {product.product_name}
          </Link>
        </h4>
        <p className="font-Poppins text-[14px] text-[#686e7d] font-light leading-[24px] tracking-[0.03rem] mb-[14px] line-clamp-2">
          {product.product_description}
        </p>
        <div className="bb-price flex items-center justify-between">
          <div>
            <span className="new-price text-[#686e7d] font-quicksand text-[16px] font-bold">
              {product.price}
            </span>
          </div>
          <span className="font-Poppins text-[13px] text-[#777]">
            Stock: {product.Stock}
          </span>
        </div>
        <div className="mt-[14px]">
          <span className="inline-block text-[12px] font-Poppins text-[#0f766e] bg-[#f1f3ff] px-[10px] py-[4px] rounded-full">
            {product.Tag}
          </span>
        </div>
        <ProductActions productId={product.id} compact />
      </div>
    </div>
  );
}
````

## File: src/lib/products.ts
````typescript
export type { ProductDto as Product } from "@/types/product";
export {
  products,
  getProductById,
  getRelatedProducts,
  productCategories,
  productTags,
} from "./products.data";
````

## File: src/lib/site-content.ts
````typescript
export const homeContent = {
  hero: {
    eyebrow: "2goodplus Packaged Drinking Water",
    title: "Pure Water. Pure Life.",
    highlightedWord: "Pure Life.",
    description:
      "Every drop of 2goodplus packaged drinking water is purified through a 7-stage filtration process, tested to BIS standards, and sealed fresh — so you can trust every sip your family takes, every single day.",
    ctaLabel: "Order now →",
    ctaHref: "/about-us",
    secondaryCtaLabel: "Contact for bulk orders",
    secondaryCtaHref: "/contact-us",
    image: "/assets/img/hero/hero-b1.png",
  },
  trustStats: [
    {
      icon: "💧",
      title: "7-Stage Filtration",
      label: "Lab-tested purity",
    },
    {
      icon: "🏠",
      title: "10,000+ Happy Homes",
      label: "Across the region",
    },
    {
      icon: "✓",
      title: "BIS Certified",
      label: "Standard IS 14543",
    },
    {
      icon: "🚚",
      title: "Delivery within 24 hours",
      label: "Order before 12 PM",
    },
  ],
  whyChoose: {
    eyebrow: "Why choose 2goodplus",
    title: "Why families trust 2goodplus",
    description:
      "Clean, safe, and reliable packaged drinking water for homes, offices, and everyday hydration.",
    cards: [
      {
        title: "Purity You Can Taste",
        description:
          "Our 7-stage reverse osmosis system removes 99.9% of impurities, bacteria, and heavy metals. What’s left? Only the minerals your body needs and the clean taste you deserve. No shortcuts, no compromises.",
      },
      {
        title: "Safety Sealed at Source",
        description:
          "Each bottle is sealed at our state-of-the-art plant under ISO-controlled conditions. From fill to cap, no human hands touch your water. That’s the kind of safety standard we hold ourselves to every single day.",
      },
      {
        title: "Delivered to Your Door",
        description:
          "Skip the supermarket queue. Order 500ml bottles, 1L packs, or 20L bulk jars online or by phone — and we’ll bring them straight to your home or office, on a schedule that works for you.",
      },
    ],
  },
};
export const aboutContent = {
  eyebrow: "About 2goodplus",
  heroTitle: "We started with one simple belief — everyone deserves clean water.",
  heroDescription:
    "2goodplus was born from a family’s need for truly safe drinking water. Today, we supply thousands of homes and businesses with water that is tested, trusted, and delivered fresh every day.",
  homeTitle: "Clean water, made simple for everyday life.",
  homeDescription:
    "2goodplus exists to make safe packaged drinking water easy to trust and easy to order. From purification to sealing and delivery, every step is handled with care so families and businesses can rely on fresh water every day.",
  storyParagraphs: [
    "At 2goodplus, we believe clean water should never feel like a luxury or a question mark. It should be something every family can depend on without worrying about purity, safety, or freshness. That belief became the starting point for our packaged drinking water brand.",
    "We began with a simple goal: create drinking water that we would confidently serve in our own homes. To achieve that, our water goes through a careful 7-stage purification process designed to remove impurities, bacteria, heavy metals, and unwanted particles while keeping the taste clean and refreshing.",
    "Every bottle is processed and sealed under controlled conditions, reducing unnecessary handling and helping maintain consistent quality from the plant to your doorstep. Our process is built around trust, because when customers choose drinking water for their family, office, shop, or event, trust matters more than anything else.",
    "Today, 2goodplus serves homes and businesses with packaged drinking water options for daily use, office hydration, travel, events, and bulk requirements. Whether you need small bottles, 1L packs, or 20L jars, our team focuses on dependable service and timely delivery.",
    "We are here to make hydration simple: pure water, clear communication, responsible handling, and delivery that fits your routine.",
  ],
  highlights: [
    "7-stage purification process",
    "BIS standard-focused quality checks",
    "Freshly sealed packaged drinking water",
    "Home, office, and bulk delivery support",
  ],
};
export const contactContent = {
  eyebrow: "Contact us",
  title: "Get in touch — we’re happy to help",
  description:
    "Got a question about an order? Need bulk pricing for your office? Or just want to know more about how we make our water? We’re just a message away. Our team responds within a few hours on business days.",
  panelTitle: "Contact details",
  phone: "+91-9967399880",
  whatsapp: "+91-9967399880",
  email: "Corporate@gmhospitality.in",
  address:
    "Plot No. 24, DIC Industrial Sate Raniya, Kanpur Dehat- 209 304, Uttar Pradesh",
  businessHours: "Monday – Saturday, 8:00 AM – 8:00 PM",
  mapQuery:
    "Plot No. 24, DIC Industrial Sate Raniya, Kanpur Dehat 209304 Uttar Pradesh",
};
````

## File: src/styles/globals.css
````css
@import "tailwindcss";
@tailwind base;
@tailwind components;
@tailwind utilities;
:root {
  color-scheme: light;
  background: #f8f8fb;
  color: #0f172a;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  min-height: 100vh;
  width: 100%;
  background: #f8f8fb;
  color: #0f172a;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}
html,
body,
main,
section {
  width: 100%;
}
main {
  overflow-x: clip;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
textarea,
select {
  font: inherit;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
.sidebar-transition {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.water-ripple {
  position: relative;
  overflow: hidden;
}
.water-ripple::after {
  content: "";
  position: absolute;
  inset: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(15, 118, 110, 0.35);
  border-radius: 999px;
  transform: translate(-50%, -50%) scale(0);
  animation: ripplePulse 2.8s infinite;
}
@keyframes ripplePulse {
  0% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(9);
  }
}
.water-wave-divider {
  line-height: 0;
  overflow: hidden;
  background: transparent;
}
.water-wave-divider svg {
  display: block;
  width: 100%;
  height: 0px;
}
.droplet-layer {
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.droplet {
  position: absolute;
  top: -20px;
  width: 9px;
  height: 13px;
  border-radius: 999px 999px 999px 0;
  background: rgba(15, 118, 110, 0.16);
  transform: rotate(-45deg);
  animation: dropletFall 7s linear infinite;
}
.droplet:nth-child(1) {
  left: 12%;
  animation-delay: 0s;
}
.droplet:nth-child(2) {
  left: 34%;
  animation-delay: 1.4s;
}
.droplet:nth-child(3) {
  left: 58%;
  animation-delay: 2.8s;
}
.droplet:nth-child(4) {
  left: 76%;
  animation-delay: 4.2s;
}
.droplet:nth-child(5) {
  left: 90%;
  animation-delay: 5.6s;
}
@keyframes dropletFall {
  0% {
    opacity: 0;
    transform: translateY(0) rotate(-45deg);
  }
  15% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(520px) rotate(-45deg);
  }
}
````

## File: package.json
````json
{
  "name": "twogooddrinks",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "jumpstart": "next build && next start",
    "lint": "eslint",
    "postinstall": "prisma generate",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:studio": "prisma studio"
  },
  "dependencies": {
    "@prisma/client": "^5.22.0",
    "axios": "^1.17.0",
    "bcryptjs": "^3.0.2",
    "lucide-react": "^1.17.0",
    "next": "16.2.7",
    "next-auth": "^5.0.0-beta.29",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "remixicon": "^4.9.1",
    "zustand": "^5.0.14"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.7",
    "prisma": "^5.22.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: src/app/contact-us/page.tsx
````typescript
import { contactContent } from "@/lib/site-content";
export default function ContactPage() {
  const whatsappHref = `https://wa.me/${contactContent.whatsapp.replace(/[^0-9]/g, "")}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contactContent.mapQuery,
  )}&output=embed`;
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="grid gap-10 rounded-[32px] bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
            {contactContent.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {contactContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {contactContent.description}
          </p>
          <form className="mt-10 space-y-5 rounded-[28px] bg-[#f8fafc] p-6 md:p-8">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0f766e]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0f766e]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0f766e]"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#0f766e] px-6 py-3 text-sm font-semibold !text-white transition hover:-translate-y-1 hover:bg-[#0c5a52] hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>
        <aside className="h-fit rounded-[28px] bg-[#f8fafc] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            {contactContent.panelTitle}
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Phone</p>
              <a href={`tel:${contactContent.phone}`} className="hover:text-[#0f766e]">
                {contactContent.phone}
              </a>
            </div>
            <div>
              <p className="font-semibold text-slate-900">WhatsApp</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0f766e]"
              >
                Chat with us on WhatsApp →
              </a>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <a href={`mailto:${contactContent.email}`} className="hover:text-[#0f766e]">
                {contactContent.email}
              </a>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Address</p>
              <p>{contactContent.address}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Business hours</p>
              <p>{contactContent.businessHours}</p>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
            <iframe
              title="2goodplus location map"
              src={mapSrc}
              className="h-[280px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from "next";
import "@/styles/globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import CartSidebar from "@/components/common/CartSidebar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "remixicon/fonts/remixicon.css";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
export const metadata: Metadata = {
  title: "2good Plus - Wellness Drinks Store",
  description:
    "Hydration products, wellness drinks, herbal infusions, and healthy essentials.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 pt-[105px] text-slate-900 antialiased max-[575px]:pt-[88px]">
        {" "}
        <AuthProvider>
          <CartSidebar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
            <FloatingWhatsApp />
        </AuthProvider>
      </body>
    </html>
  );
}
````

## File: src/app/shop/[productId]/page.tsx
````typescript
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/shop/ProductCard";
import ProductActions from "@/components/shop/ProductActions";
import { getRelatedProducts, products } from "@/lib/products";
import { getProductById as getProductByIdFromDb } from "@/lib/services/product.service";
import type { ProductDto } from "@/types/product";
interface ProductDetailsPageProps {
  params: Promise<{
    productId: string;
  }>;
}
export function generateStaticParams() {
  return products.map((product: ProductDto) => ({
    productId: product.id,
  }));
}
export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = await params;
  const product = await getProductByIdFromDb(productId);
  if (!product) {
    notFound();
  }
  const relatedProducts = getRelatedProducts(product);
  return (
    <main>
      <section className="section-product py-[50px] max-[767px]:py-[35px]">
        <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="mb-[25px] font-Poppins text-[14px] text-[#686e7d]">
            <Link href="/" className="hover:text-[#0f766e]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-[#0f766e]">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-[#3d4750]">{product.product_name}</span>
          </div>
          <div className="grid gap-[35px] rounded-[24px] border border-[#eee] bg-white p-[24px] shadow-sm lg:grid-cols-2">
            <div className="rounded-[20px] bg-[#f8f8fb] p-[25px]">
              <img
                src={product.image}
                alt={product.product_name}
                className="mx-auto h-[480px] max-h-[70vh] w-full object-contain"
              />
            </div>
            <div>
              {product.Badge ? (
                <span className="mb-[14px] inline-block rounded-full bg-[#0f766e] px-[12px] py-[5px] font-Poppins text-[12px] font-semibold text-white">
                  {product.Badge}
                </span>
              ) : null}
              <p className="font-Poppins text-[14px] font-medium text-[#0f766e]">
                {product.product_category}
              </p>
              <h1 className="mt-[8px] font-quicksand text-[34px] max-[767px]:text-[28px] font-bold leading-tight text-[#3d4750]">
                {product.product_name}
              </h1>
              <p className="mt-[16px] font-Poppins text-[15px] leading-[28px] text-[#686e7d]">
                {product.product_description}
              </p>
              <div className="mt-[22px] flex flex-wrap items-center gap-[20px]">
                <span className="font-quicksand text-[28px] font-bold text-[#3d4750]">
                  {product.price}
                </span>
                <span className="rounded-full bg-[#f1f3ff] px-[12px] py-[6px] font-Poppins text-[13px] text-[#0f766e]">
                  {product.Tag}
                </span>
                <span className="font-Poppins text-[14px] text-[#686e7d]">
                  Stock: {product.Stock}
                </span>
              </div>
              <ProductActions productId={product.id} />
              <div className="mt-[28px] grid gap-[12px] sm:grid-cols-3">
                {[
                  "Secure checkout",
                  "Fast delivery",
                  "Fresh stock",
                ].map((item) => (
                  <div key={item} className="rounded-[14px] border border-[#eee] bg-[#f8f8fb] p-[14px] text-center font-Poppins text-[13px] text-[#4b5563]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {relatedProducts?.length > 0 ? (
        <section className="pb-[60px]">
          <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="mb-[28px] text-center">
              <h2 className="font-quicksand text-[30px] font-bold text-[#3d4750]">Related Products</h2>
            </div>
            <div className="grid grid-cols-1 gap-[24px] min-[576px]:grid-cols-2 min-[992px]:grid-cols-4">
              {relatedProducts?.map((relatedProduct: ProductDto) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
````

## File: src/components/common/Footer.tsx
````typescript
import Link from "next/link";
const wellnessCategories = [
  { label: "Natural Drinking Water", href: "/shop" },
  { label: "Jeera Wellness Drinks", href: "/shop" },
  { label: "Herbal Infusions", href: "/shop" },
  { label: "Flavoured Wellness Drinks", href: "/shop" },
  { label: "Healthy Drinks", href: "/shop" },
  { label: "Wellness Bundles", href: "/shop" },
];
const ProductsAndServices = [
  { label: "Natural Drinking Water", href: "/contact-us" },
  { label: "Hydration Drinks", href: "/contact-us" },
  { label: "Bulk Orders", href: "/contact-us" },
  { label: "Home Delivery", href: "/contact-us" },
];
const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];
const accountLinks = [
  { label: "Sign In", href: "/login" },
  { label: "View Cart", href: "/cart" },
];
const socialLinks = [
  {
    name: "facebook",
    icon: "/assets/img/social/facebook.svg",
    href: "#",
  },
  {
    name: "twitter",
    icon: "/assets/img/social/twitter.svg",
    href: "#",
  },
  {
    name: "linkedin",
    icon: "/assets/img/social/linkedin.svg",
    href: "#",
  },
  {
    name: "instagram",
    icon: "/assets/img/social/instagram.svg",
    href: "#",
  },
];
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="bb-footer-widget">
      <h4 className="mb-5 border-b border-white/10 pb-4 font-quicksand text-[18px] font-bold text-slate-700">
        {title}
      </h4>
      <ul>
        {links.map((item) => (
          <li key={item.label} className="mb-4">
            <Link
              href={item.href}
              className="font-Poppins text-[14px] leading-5 text-slate-300 transition hover:text-[#0f766e]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function Footer() {
  return (
    <footer className="bb-footer mt-[50px] bg-[#f8f8fb] text-slate-700 max-[1199px]:mt-[35px]">
      <div className="border-t border-white/10">
        <div className="py-[50px] max-[1199px]:py-[35px]">
          <div className="mx-auto flex max-w-[1320px] flex-wrap px-3">
            {}
            <div className="w-full px-3 lg:w-[25%]">
              <div className="mb-10 flex flex-col lg:mb-0">
                <Link href="/" className="mb-7 flex items-center gap-3">
                  <img
                    src="/assets/img/logo/logo-icon2.png"
                    alt="2gooD logo icon"
                    className="h-16 w-16 shrink-0 object-contain"
                  />
                </Link>
                <p className="mb-7 max-w-[400px] font-Poppins text-[14px] leading-[27px] text-slate-500">
                  2good plus is committed to delivering pure, safe, and refreshing
                  packaged drinking water. With advanced purification processes
                  and strict quality standards, we ensure every bottle provides
                  freshness and trust for homes, offices, events, and
                  businesses.
                </p>
                {
}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2  lg:w-[16.66%]">
              <FooterColumn title="Products" links={ProductsAndServices} />
            </div>
            <div className="w-full px-3 sm:w-1/2 text-slate-700 lg:w-[16.66%]">
              <FooterColumn title="Account" links={accountLinks} />
            </div>
            <div className="w-full px-3 sm:w-1/2 lg:w-[16.66%]">
              <FooterColumn title="Company" links={companyLinks} />
            </div>
            {}
            <div className="w-full px-3 sm:w-1/2 lg:w-[25%]">
              <div className="bb-footer-widget">
                <h4 className="mb-5 border-b border-white/10 pb-4 font-quicksand text-[18px] font-bold text-slate-700">
                  Contact
                </h4>
                <ul>
                  <li className="mb-4 flex items-start">
                    <span className="mr-3 mt-1 text-[#0f766e]">📍</span>
                    <p className="font-Poppins text-[14px] leading-7 text-slate-500">
                      Plot No. 24, DIC Industrial Estate, Rania, Kanpur Dehat -
                      209304, Uttar Pradesh, India
                    </p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <span className="mr-3 text-[#0f766e]">☎</span>
                    <Link
                      href="tel:+919967399880"
                      className="font-Poppins text-[14px] text-slate-500 transition hover:text-[#0f766e]"
                    >
                      +91 99673 99880
                    </Link>
                  </li>
                  {
}
                  <li className="mb-4 flex items-center">
                    <span className="mr-3 text-[#0f766e]">✉</span>
                    <Link
                      href="mailto:Corporate@gmhospitality.in"
                      className="font-Poppins text-[14px] text-slate-500 transition hover:text-[#0f766e]"
                    >
                      Corporate@gmhospitality.in
                    </Link>
                  </li>
                  <li className="mb-5 flex items-start">
                    <span className="mr-3 mt-1 text-[#0f766e]">🕒</span>
                    <p className="font-Poppins text-[14px] leading-7 text-slate-500">
                      Monday – Saturday
                      <br />
                      8:00 AM – 8:00 PM
                    </p>
                  </li>
                </ul>
                {
}
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="border-t border-white/10 py-4">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-6 max-[991px]:flex-col">
            <div className="font-Poppins text-[13px] leading-7 tracking-[1px] text-slate-600">
              Copyright © 2026{" "}
              <Link
                href="/"
                className="font-medium text-[#0f766e] transition hover:text-white"
              >
                2gooD
              </Link>{" "}
              all rights reserved.
            </div>
            <div>
              <img
                src="/assets/img/payment/payment.png"
                alt="Payment methods"
                className="max-h-8 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
````

## File: src/app/shop/page.tsx
````typescript
"use client";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/shop/ProductCard";
import type { Product } from "@/lib/products";
import { productsService } from "@/lib/services/productsService";
function getPriceNumber(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}
export default function ShopPage() {
  //// Make 1 state for page and use it for all. if need only only then make new state.
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");
  const [productsState, setProductsState] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };
  const handlePriceChange = (range: string) => {
    setSelectedPrices((prev) =>
      prev.includes(range) ? prev.filter((item) => item !== range) : [...prev, range],
    );
  };
  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedPrices([]);
    setSelectedTags([]);
    setSortBy("latest");
  };
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsState];
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter((product) =>
        [product.product_name, product.product_description, product.product_category, product.Tag]
          .join(" ")
          .toLowerCase()
          .includes(query),
      );
    }
    if (selectedCategory) {
      result = result.filter((product) => product.product_category === selectedCategory);
    }
    if (selectedTags.length > 0) {
      result = result.filter((product) => selectedTags.includes(product.Tag));
    }
    if (selectedPrices.length > 0) {
      result = result.filter((product) => {
        const price = getPriceNumber(product.price);
        return selectedPrices.some((range) => {
          if (range === "Under $15") return price < 15;
          if (range === "$15 - $30") return price >= 15 && price <= 30;
          if (range === "Above $30") return price > 30;
          return true;
        });
      });
    }
    if (sortBy === "price-low") {
      result.sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
    }
    if (sortBy === "price-high") {
      result.sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
    }
    if (sortBy === "name") {
      result.sort((a, b) => a.product_name.localeCompare(b.product_name));
    }
    return result;
  }, [productsState, searchQuery, selectedCategory, selectedPrices, selectedTags, sortBy]);
  const hasActiveFilters =
    Boolean(searchQuery) || selectedCategory || selectedPrices.length > 0 || selectedTags.length > 0;
  const productCategories = useMemo(() => {
    return Array.from(new Set(productsState.map((p) => p.product_category)));
  }, [productsState]);
  const productTags = useMemo(() => {
    return Array.from(new Set(productsState.map((p) => p.Tag)));
  }, [productsState]);
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const data = await productsService.getAllProducts();
        if (!cancelled) {
          if (data?.success && Array.isArray(data.products)) {
            setProductsState(data.products);
            setError(null);
          } else {
            setProductsState([]);
            setError('Failed to load products');
          }
        }
      } catch (error) {
        if (!cancelled) {
          setError('Failed to load products');
          setProductsState([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);
  return (
    <main>
      <section className="section-shop overflow-x-hidden py-[50px] max-[767px]:py-[35px]">
        <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="mb-[35px] text-center">
            <p className="font-Poppins text-[14px] text-[#0f766e] font-medium mb-[8px]">
              Hydrate • Heal • Feel Good
            </p>
            <h1 className="font-quicksand text-[34px] max-[767px]:text-[28px] font-bold text-[#3d4750] mb-[10px]">
              Shop Wellness Products
            </h1>
            <p className="font-Poppins text-[15px] text-[#686e7d] max-w-[620px] mx-auto leading-[26px]">
              Explore natural hydration products, jeera drinks, herbal infusions, and healthy daily essentials.
            </p>
          </div>
          <div className="flex flex-wrap mx-[-12px]">
            <aside className="min-[992px]:w-[25%] w-full px-[12px] order-2 max-[991px]:order-1 max-[991px]:mb-[35px]">
              <div className="bb-shop-sidebar sticky top-[88px] space-y-[24px] lg:top-[100px]">
                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Search
                  </h4>
                  <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products..."
                    className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
                  />
                </div>
                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Categories
                  </h4>
                  <ul className="space-y-[4px]">
                    {productCategories.map((category) => {
                      const isSelected = selectedCategory === category;
                      return (
                        <li
                          key={category}
                          onClick={() => handleCategoryClick(category)}
                          className={`flex items-center justify-between py-[10px] px-[8px] rounded-[8px] cursor-pointer transition-all ${
                            isSelected ? "bg-indigo-50/80" : "hover:bg-[#f9fafb]"
                          }`}
                        >
                          <span
                            className={`font-Poppins text-[14px] transition-colors ${
                              isSelected ? "text-[#4f46e5] font-medium" : "text-[#4b5563]"
                            }`}
                          >
                            {category}
                          </span>
                          <span
                            className={`font-Poppins text-[12px] font-medium px-[8px] py-[2px] rounded-full transition-colors ${
                              isSelected ? "bg-[#4f46e5] text-white" : "bg-[#f3f4f6] text-[#6b7280]"
                            }`}
                          >
                            {productsState.filter((product) => product.product_category === category).length}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Price Range
                  </h4>
                  <div className="space-y-[12px]">
                    {["Under $15", "$15 - $30", "Above $30"].map((range) => (
                      <label key={range} className="flex items-center gap-[10px] font-Poppins text-[14px] text-[#4b5563] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedPrices.includes(range)}
                          onChange={() => handlePriceChange(range)}
                          className="w-4 h-4 accent-[#4f46e5]"
                        />
                        {range}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-[8px]">
                    {productTags.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleTagClick(tag)}
                          className={`rounded-full px-[12px] py-[6px] font-Poppins text-[12px] transition ${
                            isSelected
                              ? "bg-[#4f46e5] text-white"
                              : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb]"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {hasActiveFilters ? (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="w-full rounded-[12px] bg-[#3d4750] px-[18px] py-[12px] font-Poppins text-[14px] font-medium text-white transition hover:bg-[#2b2b2d]"
                  >
                    Clear Filters
                  </button>
                ) : null}
              </div>
            </aside>
            <div className="min-[992px]:w-[75%] w-full px-[12px] order-1 max-[991px]:order-2">
              <div className="mb-[24px] flex flex-wrap items-center justify-between gap-[16px] rounded-[20px] border border-[#e5e7eb] bg-white p-[18px] shadow-sm">
                <p className="font-Poppins text-[14px] text-[#686e7d]">
                  Showing <span className="font-semibold text-[#3d4750]">{filteredAndSortedProducts?.length}</span> products
                </p>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-[12px] border border-[#e5e7eb] bg-white px-[14px] py-[10px] font-Poppins text-[14px] text-[#4b5563] outline-none focus:border-[#0f766e]"
                >
                  <option value="latest">Sort by latest</option>
                  <option value="name">Sort by name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              {filteredAndSortedProducts?.length > 0 ? (
                <div className="grid grid-cols-1 gap-[24px] min-[576px]:grid-cols-2 min-[1200px]:grid-cols-3">
                  {filteredAndSortedProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-[20px] border border-[#e5e7eb] bg-white py-[60px] text-center">
                  <p className="font-Poppins text-[16px] text-[#6b7280]">No products match your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
````

## File: src/components/common/Header.tsx
````typescript
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useUiStore } from "@/store/useUiStore";
import { useCartStore } from "@/store/useCartStore";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];
export default function Header() {
  const { data: session, status } = useSession();
  const toggleCart = useUiStore((state) => state.toggleCart);
  const cart = useCartStore((state) => state.cart);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const clearLocalCart = useCartStore((state) => state.clearLocalCart);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    if (status === "authenticated") {
      fetchCart();
    }
    if (status === "unauthenticated") {
      clearLocalCart();
    }
  }, [status, fetchCart, clearLocalCart]);
  useEffect(() => {
    if (!mobileOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);
  const cartCount = cart?.item_count || 0;
  return (
    <header className="bb-header fixed left-0 top-0 z-[999] w-full border-b border-[#eee] bg-white/95 shadow-sm backdrop-blur-md">
      <div className="py-5 max-[991px]:py-4">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8 px-4 max-[767px]:gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/assets/img/logo/logo-icon2.png"
              alt="2gooD Logo"
              className="h-20 w-20 shrink-0 object-contain transition-transform duration-300 hover:scale-105 max-[575px]:h-16 max-[575px]:w-16"
            />
          </Link>
          <nav className="hidden items-center gap-10 font-Poppins text-[17px] font-semibold text-[#3d4750] lg:flex">
            {" "}
            {navItems.map((item) => (
              <div key={item.label} className="group relative py-3">
                <Link
                  href={item.href}
                  className="whitespace-nowrap transition hover:text-[#0f766e]"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-5 max-[575px]:gap-4">
            <div className="group relative">
              {
}
              <ul className="invisible absolute right-0 top-full z-30 mt-4 min-w-[190px] rounded-[10px] border border-[#eee] bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {status === "authenticated" ? (
                  <>
                    <li className="border-b border-[#eee] px-3 py-2 text-sm text-[#3d4750]">
                      Hi, {session?.user?.name || "Customer"}
                    </li>
                    <li>
                      <Link
                        href="/my-cart"
                        className="block rounded-md px-3 py-2 text-sm text-[#686e7d] transition hover:text-[#0f766e]"
                      >
                        My Cart
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm text-[#686e7d] transition hover:text-[#0f766e]"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        href="/login"
                        className="block rounded-md px-3 py-2 text-sm text-[#686e7d] transition hover:text-[#0f766e]"
                      >
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/register"
                        className="block rounded-md px-3 py-2 text-sm text-[#686e7d] transition hover:text-[#0f766e]"
                      >
                        Create Account
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <button
              type="button"
              onClick={toggleCart}
              className="relative text-[#3d4750] transition hover:text-[#0f766e]"
              aria-label="Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#0f766e] text-[11px] font-bold text-white">
                {cartCount}
              </span>
            </button>
            <a
              href="tel:+919967399880"
              className="hidden lg:flex items-center gap-3 rounded-full bg-[#0f766e] px-4 py-2 text-white shadow-md transition hover:bg-[#0d5f59]"
            >
              <i className="ri-phone-fill text-lg text-white" />
              <div className="leading-tight">
                <p className="text-xs text-white">+91 99673 99880</p>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="hidden text-[#3d4750] transition hover:text-[#0f766e] max-lg:block"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="h-full w-[340px] max-w-[85vw] overflow-y-auto bg-white px-5 py-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between border-b border-[#eee] pb-3">
              <span className="font-Poppins text-base font-semibold text-[#3d4750]">
                2good Plus Menu
              </span>
              <span className="rounded-full bg-[#0f766e]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-red-500"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <ul>
              {navItems.map((item) => (
                <li key={item.label} className="mb-3">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-[10px] border border-[#eee] p-3 text-[15px] font-medium text-[#686e7d]"
                  >
                    {item.label}
                  </Link>
                  {
}
                </li>
              ))}
              {status === "authenticated" ? (
                <>
                  <li className="mb-3">
                    <Link
                      href="/my-cart"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-[10px] border border-[#eee] p-3 text-[15px] font-medium text-[#686e7d]"
                    >
                      My Cart
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="block w-full rounded-[10px] border border-[#eee] p-3 text-left text-[15px] font-medium text-[#686e7d]"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mb-3">
                    <Link
                      href="/login"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-[10px] border border-[#eee] p-3 text-[15px] font-medium text-[#686e7d]"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-[10px] border border-[#eee] p-3 text-[15px] font-medium text-[#686e7d]"
                    >
                      Create Account
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
}
````

## File: src/app/page.tsx
````typescript
"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AboutSection from "@/components/common/AboutSection";
import { homeContent } from "@/lib/site-content";
import DeliveryCoverage from "@/components/common/DeliveryCoverage";
import WaterWaveDivider from "@/components/common/WaterWaveDivider";
import WaterDroplets from "@/components/common/WaterDroplets";
import {
  productsService,
  type ProductApiResponse,
} from "@/lib/services/productsService";
const categories = [
  {
    title: "Packaged Drinking Water",
    subtitle: "Fresh sealed water for daily hydration",
    icon: "/assets/img/category/1.svg",
    color: "bg-[#fff1f1]",
  },
  {
    title: "Home Delivery",
    subtitle: "Bottles and jars delivered to your door",
    icon: "/assets/img/category/2.svg",
    color: "bg-[#e9fff8]",
  },
  {
    title: "Office Hydration",
    subtitle: "Reliable bulk water supply for teams",
    icon: "/assets/img/category/3.svg",
    color: "bg-[#f3f1ff]",
  },
  {
    title: "Bulk Orders",
    subtitle: "500ml, 1L packs, and 20L jars",
    icon: "/assets/img/category/4.svg",
    color: "bg-[#fff9e6]",
  },
];
function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl px-4 text-center sm:px-0">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
      ) : null}
    </div>
  );
}
function HomeProductCard({ product }: { product: ProductApiResponse }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden border-b border-slate-100 bg-[#f8f8fb]">
        {product.Badge ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#0f766e] px-3 py-1 text-xs font-semibold text-white">
            {product.Badge}
          </span>
        ) : null}
        <Link href={`/shop/${product.id}`}>
          <img
            src={product.image}
            alt={product.product_name}
            className="h-64 w-full object-contain p-5 transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
          {product.product_category}
        </p>
        <h3 className="mt-3 line-clamp-1 text-xl font-semibold text-slate-900">
          {product.product_name}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600">
          {product.product_description}
        </p>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <span className="text-lg font-semibold text-slate-900">
              {product.price}
            </span>
            <p className="mt-1 text-xs text-slate-500">
              Stock: {product.Stock}
            </p>
          </div>
          <Link
            href={`/shop/${product.id}`}
            className="rounded-full bg-[#0f766e] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5768b0] hover:shadow-lg"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
export default function HomePage() {
  const [products, setProducts] = useState<ProductApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    async function loadProducts() {
      try {
        const data = await productsService.getAllProducts();
        if (!cancelled && data?.success && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadProducts();
    return () => {
      cancelled = true;
    };
  }, []);
  const featuredProducts = useMemo(() => products.slice(0, 4), [products]);
  const newArrivals = useMemo(() => products.slice(8, 12), [products]);
  return (
    <main className="overflow-hidden pb-16">
      <section className="water-ripple relative overflow-hidden bg-[#f6f7ff]">
        <WaterDroplets />
        <div className="relative min-h-[430px] lg:min-h-[460px]">
          <img
            src={homeContent.hero.image}
            alt="2goodplus packaged drinking water"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
          {}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl items-center px-4 py-16 md:px-6 lg:min-h-[460px]">
            <div className="max-w-2xl py-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
                {homeContent.hero.eyebrow}
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-[#3d4750] sm:text-[44px] md:text-[52px] lg:text-[68px]">
                <span className="text-[#0f766e]">PureWater. Pure Life.</span>
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                {homeContent.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href={homeContent.hero.ctaHref}
                  className="water-ripple relative overflow-hidden rounded-full bg-[#0f766e] px-5 py-4 text-base font-semibold !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c5a52]"
                >
                  {homeContent.hero.ctaLabel}
                </Link>
                <Link
                  href={homeContent.hero.secondaryCtaHref}
                  className="water-ripple relative overflow-hidden rounded-full border border-[#0f766e]/30 bg-white px-5 py-4 text-base font-semibold !text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f766e] hover:!text-white"
                >
                  {homeContent.hero.secondaryCtaLabel} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WaterWaveDivider />
      <section className="relative z-10 mx-auto mt-2 max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 rounded-[28px] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.trustStats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-start gap-4 rounded-[20px] border border-slate-100 bg-white p-4 sm:flex-row sm:items-center"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0f766e]/10 text-xl text-[#0f766e]">
                {stat.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {stat.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <WaterWaveDivider />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Water solutions"
          title="Packaged drinking water for homes, offices, and everyday use."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              href="/shop"
              key={category.title}
              className={`${category.color} group rounded-[28px] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7`}
            >
              <img
                src={category.icon}
                alt={category.title}
                className="mx-auto mb-4 h-14 w-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <h3 className="text-lg font-semibold text-slate-900">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{category.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
      <WaterWaveDivider />
      <section className="relative overflow-hidden bg-white py-4">
        <WaterDroplets />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow={homeContent.whyChoose.eyebrow}
            title={homeContent.whyChoose.title}
            text={homeContent.whyChoose.description}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.whyChoose.cards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-slate-100 bg-[#f8fafc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0f766e] text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WaterWaveDivider />
      <AboutSection variant="home" />
      <WaterWaveDivider />
      <DeliveryCoverage />
      <WaterWaveDivider />
      {
}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 md:px-6">
        <article className="group relative overflow-hidden rounded-[30px] bg-[#edf1ff] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
          <img
            src="/assets/img/banner-one/one.jpg"
            alt="Packaged drinking water for home"
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative mx-auto max-w-xl py-10 px-5 sm:px-7">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Fresh Water for Your Family
            </h3>
            <p className="mt-3 text-slate-600 sm:text-base">
              Clean packaged drinking water sealed fresh for everyday trust.
            </p>
            <Link
              href="/about-us"
              className="water-ripple relative mt-6 inline-flex overflow-hidden rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c5a52]"
            >
              Order Now
            </Link>
          </div>
        </article>
        <article className="group relative overflow-hidden rounded-[30px] bg-[#fff7ea] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
          <img
            src="/assets/img/banner-one/two.jpg"
            alt="Bulk packaged water delivery"
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative mx-auto max-w-xl py-10 px-5 sm:px-7">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Bulk Supply for Offices
            </h3>
            <p className="mt-3 text-slate-600 sm:text-base">
              Need regular water delivery for your office or business? We can
              help.
            </p>
            <Link
              href="/contact-us"
              className="water-ripple relative mt-6 inline-flex overflow-hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f766e] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </article>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 md:px-6">
        <div className="water-ripple group relative overflow-hidden rounded-[24px] bg-[#0f766e] p-8 shadow-[0_15px_35px_rgba(108,127,216,0.25)] md:p-14">
          <WaterDroplets />
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-5">
            <div className="text-center lg:col-span-3 lg:text-left">
              <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-white/80">
                Stay Connected
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-[0.02rem] text-white md:text-4xl">
                Need water delivered regularly?
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-[24px] text-white/90">
                Send us your requirement for home, office, or bulk supply and
                our team will get back to you quickly.
              </p>
            </div>
            <div className="w-full text-center lg:col-span-2 lg:text-right">
              <Link
                href="/contact-us"
                className="water-ripple relative inline-flex overflow-hidden rounded-[10px] bg-white px-7 py-3 text-[14px] font-bold tracking-[0.03rem] text-[#0f766e] transition-all duration-300 hover:bg-white/90"
              >
                Contact 2goodplus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
````

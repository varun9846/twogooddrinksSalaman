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
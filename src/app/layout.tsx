import type { Metadata } from "next";
import "@/styles/globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import CartSidebar from "@/components/common/CartSidebar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
// 1. Icons
import "remixicon/fonts/remixicon.css";

// 2. Animate On Scroll (AOS)
import "aos/dist/aos.css"; // Optimized package style instead of local asset

// 3. Swiper (Carousels)
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // If you use navigation arrows
import "swiper/css/pagination"; // If you use pagination dots

// 4. Slick (Alternative Carousels)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 5. Animate.css (Pure CSS Animations)
import "animate.css/animate.min.css"; // Optimized package style instead of local asset
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
      <body className="bg-slate-50 text-slate-900 antialiased max-[575px]:pt-[68px]">
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

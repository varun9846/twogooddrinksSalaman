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
      <body className="bg-slate-50 pt-[86px] text-slate-900 antialiased max-[575px]:pt-[68px]">
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

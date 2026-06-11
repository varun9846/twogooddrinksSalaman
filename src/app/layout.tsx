import type { Metadata } from "next";
import "@/styles/globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import CartSidebar from "@/components/common/CartSidebar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "remixicon/fonts/remixicon.css";

export const metadata: Metadata = {
  title: "2gooD - Wellness Drinks Store",
  description: "Hydration products, wellness drinks, herbal infusions, and healthy essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <AuthProvider>
          <CartSidebar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

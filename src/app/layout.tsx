import type { Metadata } from "next";
import "@/styles/globals.css";
import CartSidebar from "@/components/common/CartSidebar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "2good - eCommerce Platform",
  description: "Next-gen storefront experience built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <CartSidebar />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

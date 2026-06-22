import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import "@/styles/globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import AnimationProvider from "@/components/providers/AnimationProvider";
import CartSidebar from "@/components/common/CartSidebar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PageLoader from "@/components/common/PageLoader";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2good Plus - Wellness Drinks Store",
  description:
    "Hydration products, wellness drinks, herbal infusions, packaged drinking water, and bulk water delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${quicksand.variable} bg-[#f8f8fb] font-Poppins text-[#3d4750] antialiased`}
      >
        <AuthProvider>
          <AnimationProvider />
          <PageLoader />
          <CartSidebar />
          <Header />
          <main className="min-h-screen overflow-x-clip">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </AuthProvider>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import {Inter} from "next/font/google"
import Footer from "@/components/footer/FooterComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Loading from "./loading";
import Error from "./error";

export const metadata: Metadata = {
  title: "KIKO",
  description: "Delivery service for your needs.",
  keywords: ["ecommerce", "products", "fashion", "items"],
  icons: "/assets/image/vann-commerce.png",
  openGraph: {
    title: "Product",
    description: "This looking for products",
    images: ["https://miro.medium.com/v2/resize:fit:658/0*7dm80aIWTAZ5ckUW.png"]
  }
};

const inter = Inter({
	weight: ["400", "500", "600", "700"], // you can pass multiple weights
	subsets : ["latin"], 
	display: "swap", // swap means font will be displayed immediately. 
  variable: "--font-inter", // you can pass custom css variable name
});


export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`bg-[#FFF4D7] ${inter.variable}`}>
      <header className="bg-gray-50">
        <NavbarComponent/>  
      </header>
      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </ErrorBoundary>
      <Footer/>
    </body>
  );
}

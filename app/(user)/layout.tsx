import { Metadata } from "next";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import {Inter} from "next/font/google"

export const metadata: Metadata = {
  title: "KIKO",
  description: "Delivery service for your needs.",
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
        {children}
    </body>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Custom Traditional Jewellery Design`,
    template: `%s | ${brand.name}`,
  },
  description:
    "One-of-a-kind custom traditional jewellery by ZA MEHR. Book a free design consultation for Navratna, Polki, Kundan, and heritage pieces.",
  keywords: [
    "custom navratna jewelry",
    "polki jewelry",
    "kundan jewelry",
    "meenakari jewelry",
    "traditional indian jewelry",
    "custom bridal jewelry",
    "heirloom jewelry redesign",
    "ZA MEHR",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-pearl text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gracie | Premium Bakery in Buea, Cameroon",
  description: "Best cakes in Buea. Custom birthday cakes, wedding cakes, and elegant desserts delivered in Buea, Limbe, and Douala.",
  keywords: ["Best cakes in Buea", "Birthday cakes in Buea", "Wedding cakes Cameroon", "Bakery Buea", "Custom cakes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Americana Dream | Vintage American Style",
  description:
    "A vintage Americana website celebrating the classic American spirit. Built for Amirhossein Bakhshi — from Iran to the USA.",
  keywords: ["Americana", "Vintage", "American Dream", "Route 66", "USA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased paper text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}

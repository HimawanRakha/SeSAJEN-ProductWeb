import type { Metadata } from "next";
import { Montagu_Slab } from "next/font/google";
import "./globals.css";

const montaguSlab = Montagu_Slab({
  subsets: ["latin"],
  variable: "--font-montagu-slab",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SeSAJEN",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montaguSlab.variable} antialiased`}>{children}</body>
    </html>
  );
}

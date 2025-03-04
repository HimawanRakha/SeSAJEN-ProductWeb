import type { Metadata } from "next";
import { Montagu_Slab } from "next/font/google";
import "./globals.css";

// Import font dengan benar
const montaguSlab = Montagu_Slab({
  subsets: ["latin"],
  variable: "--font-montagu-slab",
  weight: ["400"], // Sesuaikan dengan kebutuhan (400, 700, dll.)
});

export const metadata: Metadata = {
  title: "Create Next App",
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

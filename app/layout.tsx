import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Loopd Community - Where Generations Connect",
  description:
    "Bringing seniors and youth together through art, stories, games, music, and shared moments that build friendship and belonging.",
  keywords: [
    "intergenerational",
    "senior activities",
    "youth volunteering",
    "senior companionship",
    "community",
    "art for seniors",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

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
  title: "Loopd Community - Bridging Generations Through Technology",
  description:
    "Connecting seniors with youth volunteers to build confidence, skills, and community connections through technology mentorship.",
  keywords: [
    "senior technology",
    "youth mentorship",
    "digital literacy",
    "intergenerational",
    "community",
    "technology education",
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

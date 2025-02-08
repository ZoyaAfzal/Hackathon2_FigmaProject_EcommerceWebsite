import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNavbar from "@/components/topNavbar";
import MainNav from "@/components/mainNav";
import Footer from "@/components/footer";
import {
  ClerkProvider,
} from '@clerk/nextjs'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nike Ecommerce Marketplace",
  description: "Created with Next.js and Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <TopNavbar />
          <MainNav />
          {children}
          <Footer />
        </body>
      </html>
      </ClerkProvider>
  
  );
}

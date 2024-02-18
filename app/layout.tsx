import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLinks from '@/app/ui/nav-links';
import Footer from "@/app/ui/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krewe Live",
  description: "Krewe Live",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col">
          <div className="w-full flex-none">
            <NavLinks />
          </div>
          <div className="p-6 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-screen w-screen bg-stone-100">{children}</div>
            <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLinks from '@/app/ui/nav-links';
import Footer from "@/app/ui/footer";

import '@/app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <body className={`${inter.className}`}>
        <div className="flex h-screen flex-col no-underline">
          <div className="w-full flex-none no-underline">
            <NavLinks />
          </div>
          <div className="mt-16 pt-2 mx-auto mb-auto max-w-7xl min-h-fit sm:mt-0 sm:pt-0 sm:px-6 lg:px-8 w-full bg-stone-200">
            <>
              {children}
            </>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

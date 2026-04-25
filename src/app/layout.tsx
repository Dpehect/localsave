import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LocalSave | Gıda İsrafını Önle",
  description: "Yerel esnaftan indirimli, taze ürünler.",
};

import { Toaster } from "sonner";
import Providers from "./providers";
import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>
          <div className="flex bg-[#030711]">
            <Sidebar />
            <main className="flex-1 min-h-screen lg:pl-20 pb-20 lg:pb-0">
              {children}
            </main>
          </div>
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}

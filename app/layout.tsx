import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memeitizer Infinite Crafter",
  description: "Combine elements to create new ones, forever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="">
      <body className={inter.className}>
        <div className="relative flex items-center flex-col justify-center min-w-96 mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

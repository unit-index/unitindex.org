import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <Link href="/" className="text-white mr-4 no-underline">Home</Link>
          <Link href="/about" className="text-white mr-4 no-underline">About</Link>
          <Link href="/devs" className="text-white no-underline">Devs</Link>
          <Link href="/blog" className="text-white mr-4 no-underline">Blog</Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

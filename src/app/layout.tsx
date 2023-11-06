import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fight Matcher",
  description: "Find matches across combat sports disciplines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-mainBackground text-mainText container mx-auto p-4`}
      >
        <nav className="w-100vw h-auto">
          <header className="flex justify-between items-center mb-4 ">
            <Link href="/">Combat Connect</Link>
          </header>
        </nav>
        {children}
      </body>
    </html>
  );
}

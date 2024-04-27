import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Orbitron } from "next/font/google";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sobchain",
  description: "Where Tears are Coins, and Your Smiles, the Reward.",
};

const orbiton = Orbitron({
  subsets: ["latin"],
  variable: "--default-font",
  weight: "800",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbiton.className} `}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="20" />
      </head>
      <body className="bg-[#131732] text-white">
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

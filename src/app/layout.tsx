import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar/page";
import Footer from "./_components/footer/page";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Fivs Records",
  description: "View Your Investments, Track Clients, All From A Single Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    > 
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

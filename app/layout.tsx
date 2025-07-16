import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jane's Portfolio",
  description: "A brief portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
        <link rel="icon" href="/favicon.ico" />
        {/* or for PNG */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </head>

      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

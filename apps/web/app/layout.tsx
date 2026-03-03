import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nepcoin.app"), // change to your domain
  title: {
    default: "NepCoin (नेपकोइन) – Nepali Crypto Price Tracker",
    template: "%s | NepCoin",
  },
  description:
    "Track live crypto prices in Nepali numerals. Monitor BTC, ETH, SOL in NPR with real-time updates designed for Nepali users.",
  keywords: [
    "Nepali crypto",
    "BTC price in NPR",
    "ETH price Nepal",
    "Crypto tracker extension",
    "NepCoin",
  ],
  authors: [{ name: "NepCoin Team" }],
  creator: "NepCoin",
  openGraph: {
    title: "NepCoin – Live Crypto Prices in NPR",
    description:
      "Real-time BTC, ETH, SOL tracking in NPR using Nepali digits.",
    url: "https://nepcoin.app",
    siteName: "NepCoin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NepCoin – Nepali Crypto Tracker",
    description:
      "Live crypto prices in NPR with localized Nepali numerals.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-neutral-950 text-neutral-200 antialiased flex min-h-screen flex-col">

        {/* Navigation */}
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-neutral-950/70 border-b border-neutral-800">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-800 bg-neutral-950">
          <Footer />
        </footer>

      </body>
    </html>
  );
}
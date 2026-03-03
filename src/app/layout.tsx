import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frameclear",
    template: "%s | Frameclear",
  },
  description:
    "Your digital dev friend — we design and build fast, modern web experiences that help your product grow.",
  keywords: [
    "web agency",
    "web development",
    "digital agency",
    "web design",
    "Next.js",
    "React",
    "frontend development",
  ],
  authors: [{ name: "Frameclear" }],
  creator: "Frameclear",
  metadataBase: new URL("https://frameclear.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frameclear.dev",
    siteName: "Frameclear",
    title: "Frameclear — Your Digital Dev Friend",
    description:
      "We design and build fast, modern web experiences that help your product grow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Frameclear — Digital Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frameclear — Your Digital Dev Friend",
    description:
      "We design and build fast, modern web experiences that help your product grow.",
    images: ["/og-image.png"],
    creator: "@frameclear",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.className}`}>
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

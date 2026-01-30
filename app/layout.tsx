import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import AnimatedBackground from "../components/AnimatedBackground";
import { WeddingRibbon } from "../components/WeddingRibbon";
import { WeddingCardOpening } from "../components/WeddingCardOpening";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiệp mời Thanh Tùng - Hương Giang | 13.02.2026",
  description: "Trân trọng kính mời bạn đến chung vui cùng gia đình chúng mình.",
  icons: {
    icon: "/images/logo_text.png",
    apple: "/images/logo_text.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${serif.variable} ${script.variable} font-serif antialiased bg-[#0a0a0a] text-ink`}
      >
        <div className="min-h-screen min-h-[100dvh] relative overflow-hidden">
          <Suspense fallback={null}>
          <WeddingCardOpening />
        </Suspense>
          <AnimatedBackground />
          <WeddingRibbon />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}

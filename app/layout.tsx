import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import AnimatedBackground from "../components/AnimatedBackground";
import { WeddingRibbon } from "../components/WeddingRibbon";
import { WeddingCardOpening } from "../components/WeddingCardOpening";
import { MobileRedSeal } from "../components/MobileRedSeal";
import { invitation } from "../lib/invitation";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${serif.variable} ${script.variable} font-serif antialiased bg-cream-light text-ink`}
      >
        <div className="min-h-screen relative overflow-hidden">
          <WeddingCardOpening />
          <AnimatedBackground />
          <WeddingRibbon />
          <MobileRedSeal data={invitation} />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}

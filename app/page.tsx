import { Suspense } from "react";
import { invitation } from "../lib/invitation";
import { InvitationHeaderSection } from "../components/InvitationHeaderSection";
import { WeddingInfoSection } from "../components/WeddingInfoSection";
import { CountdownSection } from "../components/CountdownSection";
import { QuoteSection } from "../components/QuoteSection";
import { GallerySection } from "../components/GallerySection";
import { LocationSection } from "../components/LocationSection";
import { WishesSection } from "../components/WishesSection";
import { FooterSection } from "../components/FooterSection";
import { BackgroundMusic } from "../components/BackgroundMusic";

export default function HomePage() {
  return (
    <main className="bg-paper">
      <Suspense fallback={null}>
        <InvitationHeaderSection data={invitation} />
      </Suspense>
      <WeddingInfoSection data={invitation} />
      <CountdownSection data={invitation} />
      <Suspense fallback={null}>
        <QuoteSection data={invitation} />
      </Suspense>
      <GallerySection data={invitation} />
      <LocationSection data={invitation} />
      <WishesSection />
      <FooterSection data={invitation} />
      <BackgroundMusic />
    </main>
  );
}

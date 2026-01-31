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
import { ModeSwitcher } from "../components/ModeSwitcher";

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <main className="bg-paper">
      <ModeSwitcher />
      <InvitationHeaderSection data={invitation} />
      <WeddingInfoSection data={invitation} />
      <CountdownSection data={invitation} />
      <QuoteSection data={invitation} />
      <GallerySection data={invitation} />
      <LocationSection data={invitation} />
      <WishesSection />
      <FooterSection data={invitation} />
      <BackgroundMusic />
    </main>
  );
}

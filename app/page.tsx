import { invitation } from "../lib/invitation";
import { InvitationHeaderSection } from "../components/InvitationHeaderSection";
import { WeddingInfoSection } from "../components/WeddingInfoSection";
import { CountdownSection } from "../components/CountdownSection";
import { QuoteSection } from "../components/QuoteSection";
import { GallerySection } from "../components/GallerySection";
import { LocationSection } from "../components/LocationSection";
import { RSVPSection } from "../components/RSVPSection";
import { WishesSection } from "../components/WishesSection";
import { GiftingSection } from "../components/GiftingSection";
import { FooterSection } from "../components/FooterSection";
import { BackgroundMusic } from "../components/BackgroundMusic";
import { WeddingCardOpening } from "../components/WeddingCardOpening";
import { MobileRedSeal } from "../components/MobileRedSeal";

export default function HomePage() {
  return (
    <>
      {/* Opening animation – luôn hiện mỗi lần reload, cho đến khi user nhấn mở thiệp */}
      <WeddingCardOpening />

      <main className="bg-paper">
        <InvitationHeaderSection data={invitation} />
        <WeddingInfoSection data={invitation} />
        <CountdownSection data={invitation} />
        <QuoteSection data={invitation} />
        <GallerySection data={invitation} />
        <LocationSection data={invitation} />
        <WishesSection />
        <GiftingSection data={invitation} />
        <FooterSection data={invitation} />
        <BackgroundMusic />
        <MobileRedSeal data={invitation} />
      </main>
    </>
  );
}

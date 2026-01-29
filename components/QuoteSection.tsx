import { Heart } from "lucide-react";
import type { InvitationData } from "../lib/invitation";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

type QuoteSectionProps = {
  data: InvitationData;
};

export function QuoteSection({ data }: QuoteSectionProps) {
  return (
    <Section className="relative sm:py-40 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="relative grid grid-cols-12 gap-8 items-center">
          {/* Aesthetic Left Image - Larger */}
          <div className="hidden lg:block lg:col-span-4">
            <Reveal x={-40}>
              <div className="relative aspect-[3/4] rounded-full overflow-hidden border-[6px] border-white shadow-2xl rotate-[-2deg] grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
                  alt="Decor"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </Reveal>
          </div>

          {/* Main Quote Content */}
          <div className="col-span-12 lg:col-span-4 text-center px-4">
            <Reveal>
              <div className="mb-8 flex justify-center opacity-30">
                <Heart className="w-10 h-10 text-burgundy fill-burgundy" />
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink italic leading-[1.8] opacity-95 drop-shadow-sm font-medium">
                “{data.quote}”
              </p>
              <div className="gold-divider w-24 mt-10" />
            </Reveal>
          </div>

          {/* Aesthetic Right Image - Larger */}
          <div className="hidden lg:block lg:col-span-4">
            <Reveal x={40}>
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border-[6px] border-white shadow-2xl rotate-[2deg] grayscale-[0.2] hover:grayscale-0 transition-all duration-700 mt-12">
                <img
                  src="https://images.unsplash.com/photo-1544161515-436cefc65814?auto=format&fit=crop&q=80&w=1200"
                  alt="Decor"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Decorative Floating background quote for texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif text-burgundy/[0.03] pointer-events-none select-none italic">
        Forever
      </div>
    </Section>
  );
}

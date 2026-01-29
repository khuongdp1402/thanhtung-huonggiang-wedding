import { Flower, Heart } from "lucide-react";
import type { InvitationData } from "../lib/invitation";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

type WeddingInfoSectionProps = {
  data: InvitationData;
};

export function WeddingInfoSection({ data }: WeddingInfoSectionProps) {
  return (
    <Section id="thong-tin" className="relative py-16 lg:py-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        {/* Row 1: Parents info horizontally */}
        <div className="grid grid-cols-2 gap-4 md:gap-24 mb-12 sm:mb-20 px-2 sm:px-0">
          {/* Nhà trai */}
          <Reveal x={-20}>
            <div className="space-y-4 text-center md:text-left border-t border-gold/20 pt-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <p className="text-[0.7rem] uppercase tracking-[0.4em] text-burgundy font-bold">Nhà trai</p>
                <Flower className="w-3 h-3 text-gold/40" />
              </div>
              <div className="space-y-1">
                <p className="text-xl text-ink-dark font-serif font-medium leading-relaxed">{data.groom.parents.father}</p>
                <p className="text-xl text-ink-dark font-serif font-medium leading-relaxed">{data.groom.parents.mother}</p>
              </div>
            </div>
          </Reveal>

          {/* Nhà gái */}
          <Reveal x={20}>
            <div className="space-y-4 text-center md:text-right border-t border-gold/20 pt-8">
              <div className="inline-flex items-center gap-2 mb-2 md:flex-row-reverse">
                <p className="text-[0.8rem] uppercase tracking-[0.4em] text-burgundy font-bold">Nhà gái</p>
                <Flower className="w-3 h-3 text-gold/40" />
              </div>
              <div className="space-y-1">
                <p className="text-xl text-ink-dark font-serif font-medium leading-relaxed">{data.bride.parents.father}</p>
                <p className="text-xl text-ink-dark font-serif font-medium leading-relaxed">{data.bride.parents.mother}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Row 2: Visual Centerpiece (Couple + Ceremony) */}
        <div className="max-w-4xl mx-auto">
          <Reveal y={30}>
            <div className="text-center space-y-10 relative">
              {/* Overlapping Images Style */}
              <div className="relative h-64 sm:h-80 mb-16 mx-auto w-full max-w-md">
                <div className="absolute top-0 left-0 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white -rotate-6 z-0 transition-transform hover:z-20 hover:scale-105 duration-500">
                  <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600" alt="Wedding 1" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-10 right-0 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-6 z-10 transition-transform hover:z-20 hover:scale-105 duration-500">
                  <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600" alt="Wedding 2" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 min-w-full">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-6xl lg:text-7xl font-script text-burgundy font-bold whitespace-nowrap leading-relaxed drop-shadow-sm">
                      {data.groom.name}
                    </span>
                    <span className="text-lg sm:text-xl font-serif text-ink-dark font-bold tracking-[0.2em] uppercase mt-2">
                      Trưởng Nam
                    </span>
                  </div>

                  <span className="text-3xl sm:text-5xl font-script text-gold my-4 md:my-0 opacity-80">&</span>

                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-6xl lg:text-7xl font-script text-burgundy font-bold whitespace-nowrap leading-relaxed drop-shadow-sm">
                      {data.bride.name}
                    </span>
                    <span className="text-lg sm:text-xl font-serif text-ink-dark font-bold tracking-[0.2em] uppercase mt-2">
                      Ái Nữ
                    </span>
                  </div>
                </div>

                <div className="gold-divider w-32 mx-auto opacity-60" />

                <div className="space-y-8 mt-8">
                  <h3 className="text-xl sm:text-2xl text-burgundy font-bold tracking-[0.25em] uppercase mb-2">
                    Save The Date
                  </h3>
                  <p className="text-sm font-serif italic text-gold mb-6 tracking-widest uppercase opacity-80 decoration-slice">
                    — Ngày chung đôi —
                  </p>

                  <p className="text-5xl sm:text-6xl font-serif text-burgundy font-bold">
                    {data.ceremony.timeLabel}
                  </p>

                  <div className="space-y-3">
                    <p className="text-3xl sm:text-4xl text-ink-dark font-serif font-bold tracking-wide">
                      {data.ceremony.solarDateLabel}
                    </p>
                    <p className="text-xl text-ink font-semibold">
                      {data.ceremony.lunarDateLabel}
                    </p>
                  </div>
                </div>

                <div className="pt-12 border-t border-gold/20 inline-block px-12 mt-4">
                  <p className="text-base uppercase tracking-[0.4em] text-burgundy font-bold mb-6">
                    Địa điểm
                  </p>
                  <p className="text-4xl text-ink-dark font-serif font-black tracking-tight mb-4 leading-tight">
                    {data.ceremony.venueName}
                  </p>
                  <p className="text-xl text-ink font-bold max-w-[500px] mx-auto leading-relaxed">
                    {data.ceremony.address}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Background Decor icons */}
      <div className="absolute top-20 right-[-5%] opacity-[0.03] text-burgundy pointer-events-none select-none text-[20rem] font-serif rotate-12">
        Love
      </div>
    </Section>
  );
}

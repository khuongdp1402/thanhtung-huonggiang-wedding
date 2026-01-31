"use client";

import { Flower, Heart } from "lucide-react";
import type { InvitationData } from "../lib/invitation";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useMode } from "../lib/mode-context";

type WeddingInfoSectionProps = {
  data: InvitationData;
};

export function WeddingInfoSection({ data }: WeddingInfoSectionProps) {
  const { mode } = useMode();
  
  // Select ceremony based on mode
  const ceremony = mode === "bride" ? data.brideCeremony : data.groomCeremony;
  
  // Determine order of information based on mode
  const isBrideMode = mode === "bride";
  return (
    <Section id="thong-tin" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        {/* Câu thành ngữ – giữa banner và thông tin 2 nhà */}
        <Reveal y={16}>
          <div className="text-center py-8 sm:py-10">
            <p className="text-lg sm:text-xl font-serif text-burgundy italic font-medium opacity-90">
              &ldquo;Trăm năm tình viên mãn&rdquo;
            </p>
            <p className="text-lg sm:text-xl font-serif text-burgundy italic font-medium opacity-90 mt-2">
              &ldquo;Bạc đầu nghĩa phu thê&rdquo;
            </p>
          </div>
        </Reveal>

        {/* Row 1: Parents info horizontally */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-12 mb-12 sm:mb-20 px-0 items-center">
          {/* Left side parent info (changes based on mode) */}
          <Reveal x={-20}>
            <div className="space-y-4 text-center border-t border-gold/20 pt-6">
              <div className="flex flex-col items-center gap-2 mb-2">
                <p className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-burgundy font-bold whitespace-nowrap">
                  {isBrideMode ? "Nhà gái" : "Nhà trai"}
                </p>
                <div className="w-1 h-1 bg-gold/40 rounded-full" />
              </div>
              <div className="space-y-0.5">
                <p className="text-base sm:text-xl text-ink-dark font-serif font-medium leading-relaxed whitespace-nowrap">
                  {isBrideMode ? data.bride.parents.father : data.groom.parents.father}
                </p>
                <p className="text-base sm:text-xl text-ink-dark font-serif font-medium leading-relaxed whitespace-nowrap">
                  {isBrideMode ? data.bride.parents.mother : data.groom.parents.mother}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="h-24 w-px bg-gold/20 mx-auto" />

          {/* Right side parent info (changes based on mode) */}
          <Reveal x={20}>
            <div className="space-y-4 text-center border-t border-gold/20 pt-6">
              <div className="flex flex-col items-center gap-2 mb-2">
                <p className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-burgundy font-bold whitespace-nowrap">
                  {isBrideMode ? "Nhà trai" : "Nhà gái"}
                </p>
                <div className="w-1 h-1 bg-gold/40 rounded-full" />
              </div>
              <div className="space-y-0.5">
                <p className="text-base sm:text-xl text-ink-dark font-serif font-medium leading-relaxed whitespace-nowrap">
                  {isBrideMode ? data.groom.parents.father : data.bride.parents.father}
                </p>
                <p className="text-base sm:text-xl text-ink-dark font-serif font-medium leading-relaxed whitespace-nowrap">
                  {isBrideMode ? data.groom.parents.mother : data.bride.parents.mother}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Row 2: Visual Centerpiece (Couple + Ceremony) */}
        <div className="max-w-4xl mx-auto">
          <Reveal y={30}>
            <div className="text-center space-y-6 relative">
              {/* Overlapping Images Style */}
              <div className="relative h-64 sm:h-80 mb-8 mx-auto w-full max-w-md">
                {/* Left image (changes based on mode) */}
                <div className="absolute top-0 left-0 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white -rotate-6 z-0 transition-transform hover:z-20 hover:scale-105 duration-500">
                  <img 
                    src={isBrideMode 
                      ? "/images/z7481583702213_89ab3ded468fac26280cd38933981037.jpg?auto=format&fit=crop&q=80&w=600"
                      : "/images/z7481585343579_3930a96148bb262932c18954629fdfb1.jpg?auto=format&fit=crop&q=80&w=600"
                    } 
                    alt={isBrideMode ? "Cô dâu" : "Chú rể"} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {/* Right image (changes based on mode) */}
                <div className="absolute top-10 right-0 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-6 z-10 transition-transform hover:z-20 hover:scale-105 duration-500">
                  <img 
                    src={isBrideMode 
                      ? "/images/z7481585343579_3930a96148bb262932c18954629fdfb1.jpg?auto=format&fit=crop&q=80&w=600"
                      : "/images/z7481583702213_89ab3ded468fac26280cd38933981037.jpg?auto=format&fit=crop&q=80&w=600"
                    } 
                    alt={isBrideMode ? "Chú rể" : "Cô dâu"} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto">
                  {/* First name (left aligned) - changes based on mode */}
                  <div className="text-left">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-script text-burgundy font-bold leading-relaxed drop-shadow-sm">
                      {isBrideMode ? data.bride.name : data.groom.name}
                    </span>
                    <span className="block text-base sm:text-lg font-serif text-ink-dark font-bold tracking-[0.2em] uppercase mt-1">
                      {isBrideMode ? "Ái Nữ" : "Trưởng Nam"}
                    </span>
                  </div>
                  {/* Second name (right aligned) - changes based on mode */}
                  <div className="text-right">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-script text-burgundy font-bold leading-relaxed drop-shadow-sm">
                      {isBrideMode ? data.groom.name : data.bride.name}
                    </span>
                    <span className="block text-base sm:text-lg font-serif text-ink-dark font-bold tracking-[0.2em] uppercase mt-1">
                      {isBrideMode ? "Trưởng Nam" : "Ái Nữ"}
                    </span>
                  </div>
                </div>

                <div className="gold-divider w-32 mx-auto opacity-60" />

                <div className="space-y-4 mt-4">
                  {/* Ceremony title */}
                  <div className="mb-4">
                    <p className="text-2xl sm:text-3xl font-script text-burgundy font-bold">
                      {ceremony.title}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <div className="text-center">
                      <p className="text-ink/70 text-xs sm:text-sm uppercase tracking-wider font-semibold mb-0.5">Giờ làm lễ</p>
                      <p className="text-4xl sm:text-5xl font-serif text-burgundy font-bold">{ceremony.timeLabel}</p>
                    </div>
                    <div className="w-px h-10 bg-gold/30 hidden sm:block" />
                    <div className="text-center">
                      <p className="text-ink/70 text-xs sm:text-sm uppercase tracking-wider font-semibold mb-0.5">Giờ nhập tiệc</p>
                      <p className="text-4xl sm:text-5xl font-serif text-burgundy font-bold">{ceremony.receptionTimeLabel}</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-3xl sm:text-4xl text-ink-dark font-serif font-bold tracking-wide">
                      {ceremony.solarDateLabel}
                    </p>
                    <p className="text-xl text-ink font-semibold">
                      {ceremony.lunarDateLabel}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gold/20 inline-block px-8 mt-2">
                  <p className="text-base uppercase tracking-[0.4em] text-burgundy font-bold mb-3">
                    Địa điểm
                  </p>
                  <p className="text-4xl text-ink-dark font-serif font-black tracking-tight mb-2 leading-tight">
                    {ceremony.venueName}
                  </p>
                  <p className="text-xl text-ink font-bold max-w-[500px] mx-auto leading-relaxed">
                    {ceremony.address}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Chữ nền Love – resize cho mobile, bling nhẹ */}
      <div className="absolute top-20 right-[-5%] pointer-events-none select-none font-serif rotate-12 bg-bling-text">
        <span className="block text-[4rem] sm:text-[10rem] lg:text-[20rem] text-burgundy/10 sm:text-burgundy/[0.05] lg:text-burgundy/[0.03]">
          Love
        </span>
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import type { InvitationData } from "../lib/invitation";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

type InvitationHeaderSectionProps = {
  data: InvitationData;
};

export function InvitationHeaderSection({ data }: InvitationHeaderSectionProps) {
  return (
    <Section id="top" className="relative min-h-screen overflow-hidden flex items-center justify-center p-0 bg-cream-light">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left Side: Sharp Image (70% on desktop) */}
        <div className="lg:w-[70%] relative h-[60vh] lg:h-screen">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
            alt="Wedding Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream-light/10" />
        </div>

        {/* Right Side: Information (30% on desktop) */}
        <div className="lg:w-[30%] flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-cream-light relative z-10">
          <Reveal y={20}>
            <div className="mb-4">
              <Heart className="w-10 h-10 text-burgundy fill-burgundy/10 mx-auto" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-burgundy/60 text-[10px] sm:text-xs tracking-[0.5em] uppercase font-bold mb-6">
              Tân Lang & Tân Nương
            </h2>
          </Reveal>

          <div className="space-y-2 mb-10">
            <Reveal delay={0.4}>
              <h1 className="text-5xl sm:text-6xl font-script text-burgundy font-bold leading-tight">
                {data.groom.name}
              </h1>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex items-center justify-center">
                <div className="h-px w-8 bg-gold/30" />
                <span className="mx-4 text-2xl text-gold/60 font-serif">&</span>
                <div className="h-px w-8 bg-gold/30" />
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <h1 className="text-5xl sm:text-6xl font-script text-burgundy font-bold leading-tight">
                {data.bride.name}
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.8}>
            <div className="flex flex-col items-center gap-6">
              <div className="px-6 py-3 border-y border-burgundy/20">
                <p className="text-burgundy text-lg sm:text-xl font-serif tracking-[0.15em]">
                  {data.ceremony.solarDateLabel}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-burgundy/50 text-[10px] tracking-[0.4em] uppercase font-bold">
                  Trân trọng kính mời
                </p>
              </div>
            </div>
          </Reveal>

          {/* Decorative Sparkles */}
          <div className="absolute bottom-10 right-10 opacity-20 rotate-12">
            <Sparkles className="w-12 h-12 text-gold" />
          </div>
        </div>
      </div>
    </Section>
  );
}

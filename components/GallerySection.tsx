"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import type { InvitationData } from "../lib/invitation";
import { ImageWithFallback } from "./ImageWithFallback";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

type GallerySectionProps = {
  data: InvitationData;
};

type GalleryItemProps = {
  src: string;
  alt: string;
  className: string;
  parallax: number;
};

function GalleryItem({ src, alt, className, parallax }: GalleryItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`${className} group relative bg-white p-3 sm:p-4 shadow-card hover:shadow-2xl transition-all duration-500`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-light">
        <ImageWithFallback
          src={src}
          alt={alt}
          className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      </div>
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-8 bg-gold/20 rounded-full" />
      </div>
    </motion.div>
  );
}

export function GallerySection({ data }: GallerySectionProps) {
  return (
    <Section id="anh" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="title-primary text-sm sm:text-base mb-4">Bộ ảnh kỷ niệm</h2>
            <div className="gold-divider w-16" />
            <p className="mt-6 text-2xl sm:text-3xl font-serif text-ink italic opacity-90">
              “Những khoảnh khắc chúng mình yêu nhất.”
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {data.gallery.map((item, index) => (
            <div
              key={item.src}
              className={`${index % 2 === 0 ? 'lg:translate-y-12' : 'lg:-translate-y-12'} transition-transform`}
            >
              <GalleryItem
                src={item.src}
                alt={item.alt}
                className="w-full"
                parallax={index % 2 === 0 ? 20 : -20}
              />
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-32 text-center text-sm text-ink/50 italic font-medium">
            Tình yêu không chỉ là nhìn nhau, mà là cùng nhau nhìn về một hướng.
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

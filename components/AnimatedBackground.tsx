"use client";

import { motion } from "framer-motion";

const SPARKLE_ICON_COUNT = 18;
const sparklePositions = Array.from({ length: SPARKLE_ICON_COUNT }, (_, i) => {
  const angle = (i / SPARKLE_ICON_COUNT) * Math.PI * 2 + i * 0.7;
  const radius = 18 + (i % 5) * 8 + (i % 3) * 4;
  return {
    left: 50 + Math.cos(angle) * radius + (i % 2 === 0 ? 5 : -5),
    top: 50 + Math.sin(angle) * radius * 0.9 + (i % 3) * 2,
    size: 28 + (i % 4) * 12,
    rotate: (i * 37) % 360,
    opacity: 0.06 + (i % 5) * 0.025,
  };
});

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ backgroundColor: "transparent" }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-[0.05]"
        style={{
          backgroundImage: "url('/xi-character.png')",
          backgroundSize: "350px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
          mixBlendMode: "multiply",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {sparklePositions.map((pos, i) => (
        <div
          key={i}
          className="absolute bg-no-repeat bg-center bg-contain pointer-events-none"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            width: pos.size,
            height: pos.size,
            transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
            backgroundImage: "url('/happiness-sparkle-icon.png')",
            opacity: pos.opacity,
            mixBlendMode: "multiply",
          }}
        />
      ))}

      <div
        className="absolute inset-4 md:inset-8 border transform rotate-1"
        style={{
          borderColor: "rgba(212, 175, 55, 0.4)",
          borderWidth: "1.5px",
        }}
      />
      <div
        className="absolute inset-6 md:inset-10 border transform -rotate-1"
        style={{
          borderColor: "rgba(212, 175, 55, 0.3)",
          borderWidth: "1px",
        }}
      />

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px]"
          initial={{
            x: (i / 12) * 100 + "%",
            y: "110%",
            opacity: 0,
          }}
          animate={{
            y: "-10%",
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 10 + (i % 5) * 3,
            repeat: Infinity,
            delay: (i % 4) * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

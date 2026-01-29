'use client';

import { motion } from 'framer-motion';

// Random positions/sizes around center (chữ Hỷ) — stable per index for no layout shift
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

// Random positions for second bling layer
const BLING_ICON_COUNT = 12;
const blingPositions = Array.from({ length: BLING_ICON_COUNT }, (_, i) => {
    const angle = (i / BLING_ICON_COUNT) * Math.PI * 2 + i * 1.2;
    const radius = 25 + (i % 4) * 10;
    return {
        left: 50 + Math.cos(angle) * radius,
        top: 50 + Math.sin(angle) * radius * 0.9,
        size: 20 + (i % 3) * 8,
        rotate: (i * 45) % 360,
        opacity: 0.04 + (i % 3) * 0.02,
    };
});

// Random positions for the third layer (Floating Flowers/Sparkles)
const DECO_ICON_COUNT = 15;
const decoPositions = Array.from({ length: DECO_ICON_COUNT }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 20 + Math.random() * 20,
    rotate: Math.random() * 360,
    type: i % 2 === 0 ? "🌸" : "✨",
    duration: 15 + Math.random() * 15,
    delay: Math.random() * 10
}));

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
            {/* Hỷ Watermark (Xi Character) - Subtle Pulsing */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-[0.05]"
                style={{
                    backgroundImage: "url('/xi-character.png')",
                    backgroundSize: '350px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%)',
                    mixBlendMode: 'multiply'
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.03, 0.06, 0.03]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Happiness sparkle icons — random around chữ Hỷ */}
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
                        mixBlendMode: 'multiply',
                    }}
                />
            ))}

            {/* Bling sparkle icons — Second layer of background decor */}
            {blingPositions.map((pos, i) => (
                <motion.div
                    key={`bling-${i}`}
                    className="absolute bg-no-repeat bg-center bg-contain pointer-events-none"
                    style={{
                        left: `${pos.left}%`,
                        top: `${pos.top}%`,
                        width: pos.size,
                        height: pos.size,
                        transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
                        backgroundImage: "url('/bling-sparkle-icon.png')",
                        opacity: pos.opacity,
                        mixBlendMode: 'multiply',
                    }}
                    animate={{
                        opacity: [pos.opacity, pos.opacity * 1.5, pos.opacity],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 4 + (i % 3) * 2,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                />
            ))}

            {/* Decorative Floating Emojis (Flowers/Sparkles) - Fills the empty space */}
            {decoPositions.map((pos, i) => (
                <motion.div
                    key={`deco-${i}`}
                    className="absolute pointer-events-none select-none flex items-center justify-center font-serif text-burgundy/10"
                    style={{
                        left: `${pos.left}%`,
                        top: `${pos.top}%`,
                        fontSize: `${pos.size}px`,
                        rotate: pos.rotate
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-15, 15, -15],
                        rotate: [pos.rotate, pos.rotate + 10, pos.rotate],
                        opacity: [0.05, 0.12, 0.05]
                    }}
                    transition={{
                        duration: pos.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: pos.delay
                    }}
                >
                    {pos.type}
                </motion.div>
            ))}

            {/* Gold Geometric Frame Lines */}
            <div
                className="absolute inset-4 md:inset-8 border transform rotate-1 transition-transform"
                style={{ borderColor: 'rgba(212, 175, 55, 0.4)', borderWidth: '1.5px' }}
            />
            <div
                className="absolute inset-6 md:inset-10 border transform -rotate-1 transition-transform"
                style={{ borderColor: 'rgba(212, 175, 55, 0.3)', borderWidth: '1px' }}
            />

            {/* Floating Gold Sparkles */}
            {[...Array(16)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px]"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: "110%",
                        opacity: 0
                    }}
                    animate={{
                        y: "-10%",
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.2, 0]
                    }}
                    transition={{
                        duration: 10 + Math.random() * 15,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

export function WeddingCardOpening() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-cream-light overflow-hidden"
                >
                    {/* Perspective Container */}
                    <div className="relative w-[min(90vw,400px)] aspect-[3/4] preserve-3d cursor-pointer group"
                        onClick={handleOpen}>

                        {/* Shadow underneath */}
                        <div className="absolute inset-x-0 bottom-[-20px] h-10 bg-black/5 blur-xl rounded-full" />

                        {/* Back Side (The inside content slightly visible) */}
                        <div className="absolute inset-0 bg-white shadow-sm rounded-lg border border-gold/5" />

                        {/* Front Side (Folding part) */}
                        <motion.div
                            className="absolute inset-0 z-10 origin-left"
                            whileHover={{ rotateY: -10 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            {/* Card Cover */}
                            <div className="absolute inset-0 bg-white border border-gold/10 rounded-lg shadow-2xl flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                                {/* Paper Texture Overlay */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

                                {/* Decorative Border */}
                                <div className="absolute inset-4 border border-gold/20 pointer-events-none" />

                                {/* Red Seal Symbol */}
                                <div className="mb-8 relative">
                                    <div className="w-24 h-24 bg-burgundy rounded-full flex items-center justify-center shadow-lg relative z-10">
                                        <span className="text-white text-5xl font-serif">喜</span>
                                    </div>
                                    <div className="absolute inset-0 bg-burgundy blur-xl opacity-20 transform scale-125" />
                                </div>

                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <p className="text-burgundy text-sm sm:text-base tracking-[0.4em] uppercase font-bold mb-4">Trân trọng báo tin</p>
                                    <div className="h-px w-24 bg-gold/40 mx-auto mb-6" />

                                    <div className="mb-8 space-y-2">
                                        <p className="text-3xl sm:text-4xl font-script text-burgundy font-bold">Thanh Tùng</p>
                                        <p className="text-xl sm:text-2xl font-script text-gold">&</p>
                                        <p className="text-3xl sm:text-4xl font-script text-burgundy font-bold">Hương Giang</p>
                                    </div>

                                    <h2 className="text-lg sm:text-xl font-serif text-ink-dark/60 italic mb-8">
                                        (Chạm để mở thiệp)
                                    </h2>
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="text-gold/60"
                                    >
                                        <Heart className="w-8 h-8 fill-gold/10 mx-auto" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

"use client";

import { useMode } from "../lib/mode-context";
import { Flower } from "lucide-react";

export function ModeSwitcher() {
  const { mode } = useMode();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border-2 border-burgundy/20 rounded-full shadow-lg pointer-events-none"
        aria-label="Hiển thị chế độ"
      >
        <Flower className="w-4 h-4 text-burgundy" />
        <span className="text-sm font-serif font-semibold text-burgundy">
          {mode === "bride" ? "Nhà Gái" : "Nhà Trai"}
        </span>
      </div>
    </div>
  );
}

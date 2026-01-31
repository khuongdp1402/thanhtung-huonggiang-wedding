"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export type WeddingMode = "bride" | "groom";

type ModeContextType = {
  mode: WeddingMode;
  setMode: (mode: WeddingMode) => void;
  toggleMode: () => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  // Initialize mode from URL parameter or default to "bride"
  const getInitialMode = (): WeddingMode => {
    const modeParam = searchParams.get("mode");
    if (modeParam === "groom" || modeParam === "nhatrai") {
      return "groom";
    }
    if (modeParam === "bride" || modeParam === "nhagai") {
      return "bride";
    }
    return "bride";
  };

  const [mode, setModeState] = useState<WeddingMode>(getInitialMode);

  // Update URL when mode changes
  const setMode = (newMode: WeddingMode) => {
    setModeState(newMode);
    const params = new URLSearchParams(searchParams.toString());
    params.set("mode", newMode);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const toggleMode = () => {
    const newMode = mode === "bride" ? "groom" : "bride";
    setMode(newMode);
  };

  // Sync mode with URL parameter changes
  useEffect(() => {
    const modeFromUrl = getInitialMode();
    if (modeFromUrl !== mode) {
      setModeState(modeFromUrl);
    }
  }, [searchParams]);

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}

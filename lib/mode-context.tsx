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
  
  // Initialize mode from URL parameter or default to "groom"
  const getInitialMode = (): WeddingMode => {
    if (!searchParams) return "groom";
    const modeParam = searchParams.get("mode");
    if (modeParam === "bride" || modeParam === "nhagai") {
      return "bride";
    }
    if (modeParam === "groom" || modeParam === "nhatrai") {
      return "groom";
    }
    return "groom"; // Default to groom if no mode specified
  };

  const [mode, setModeState] = useState<WeddingMode>("groom");

  // Initialize mode on mount
  useEffect(() => {
    setModeState(getInitialMode());
  }, []);

  // Update URL when mode changes
  const setMode = (newMode: WeddingMode) => {
    setModeState(newMode);
    if (searchParams && router && pathname) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("mode", newMode);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  const toggleMode = () => {
    const newMode = mode === "bride" ? "groom" : "bride";
    setMode(newMode);
  };

  // Sync mode with URL parameter changes
  useEffect(() => {
    if (!searchParams) return;
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

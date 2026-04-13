"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

interface ScrollContextType {
  progress: number;
}

const ScrollContext = createContext<ScrollContextType>({ progress: 0 });

export function useScrollProgress() {
  return useContext(ScrollContext);
}

export function SmoothScroller({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ({ progress: p }: { progress: number }) => {
      setProgress(p);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ progress }}>
      {children}
    </ScrollContext.Provider>
  );
}

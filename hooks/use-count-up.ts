"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  options: { durationMs?: number; enabled?: boolean } = {}
) {
  const { durationMs = 1200, enabled = true } = options;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, durationMs, enabled]);

  return value;
}

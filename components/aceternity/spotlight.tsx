"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function Spotlight({ className }: { className?: string }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 35 });
  const sy = useSpring(my, { stiffness: 80, damping: 35 });
  const xp = useTransform(sx, [0, 1], ["0%", "100%"]);
  const yp = useTransform(sy, [0, 1], ["0%", "100%"]);
  const g = useMotionTemplate`radial-gradient(600px circle at ${xp} ${yp}, oklch(0.55 0.12 350 / 0.25), transparent 55%)`;

  useEffect(() => {
    const h = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", h, { passive: true });
    return () => window.removeEventListener("pointermove", h);
  }, [mx, my]);

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
      style={{ background: g }}
    />
  );
}

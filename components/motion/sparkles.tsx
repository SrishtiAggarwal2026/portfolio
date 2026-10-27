"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type SparklesProps = {
  count?: number;
  /** Seed keeps particle layout identical between server and client renders. */
  seed?: number;
  color?: string;
  className?: string;
};

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Drifting, twinkling golden particles for hero backdrops. */
export function Sparkles({
  count = 22,
  seed = 7,
  color = "var(--color-gold-glow)",
  className,
}: SparklesProps) {
  const reduceMotion = useReducedMotion();

  const particles = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand() * 100,
      top: rand() * 100,
      size: 2 + rand() * 4,
      duration: 3.5 + rand() * 4,
      delay: rand() * 5,
      drift: 10 + rand() * 24,
      star: rand() > 0.7,
    }));
  }, [count, seed]);

  if (reduceMotion) return null;

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute block"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.star ? p.size * 2.4 : p.size,
            height: p.star ? p.size * 2.4 : p.size,
          }}
          initial={{ opacity: 0, scale: 0.4, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.4, 1, 0.4],
            y: [0, -p.drift],
            rotate: p.star ? [0, 90] : 0,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.star ? (
            <svg viewBox="0 0 24 24" className="size-full" fill={color}>
              <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
            </svg>
          ) : (
            <span
              className="block size-full rounded-full"
              style={{ background: color, boxShadow: `0 0 ${p.size * 3}px ${color}` }}
            />
          )}
        </motion.span>
      ))}
    </div>
  );
}

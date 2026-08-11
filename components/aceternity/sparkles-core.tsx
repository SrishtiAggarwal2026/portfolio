"use client";

import { motion } from "framer-motion";

export function SparklesCore({ className }: { className?: string }) {
  const dots = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    x: `${(i * 17) % 100}%`,
    y: `${(i * 23) % 100}%`,
    s: 0.5 + (i % 5) * 0.15,
    d: 3 + (i % 4),
  }));
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-[var(--color-gold)]/40"
          style={{
            left: d.x,
            top: d.y,
            width: d.d,
            height: d.d,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [d.s, d.s * 1.4, d.s] }}
          transition={{ duration: 3 + (d.id % 3), repeat: Infinity, delay: d.id * 0.08 }}
        />
      ))}
    </div>
  );
}

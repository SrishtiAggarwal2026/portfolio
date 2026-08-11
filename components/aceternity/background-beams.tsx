"use client";

import { motion } from "framer-motion";

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute h-[120%] w-32 -translate-x-1/2 bg-gradient-to-b from-[var(--color-burgundy)]/25 via-transparent to-transparent blur-2xl"
          style={{ left: `${20 + i * 22}%`, top: "-10%" }}
          animate={{ opacity: [0.15, 0.35, 0.15], x: [-10, 10, -10] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

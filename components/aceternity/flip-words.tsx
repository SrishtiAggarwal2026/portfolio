"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FlipWords({
  words,
  interval = 2800,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => setI((x) => (x + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval, reduceMotion]);

  return (
    <span
      className={cn(
        "relative inline-block min-w-0 text-left sm:min-w-[10ch] md:min-w-[12ch]",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.35 }}
          className="text-[var(--color-gold)]"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

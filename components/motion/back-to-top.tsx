"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";

/** Floating button with a scroll-progress ring; appears after the first screen. */
export function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 600));

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-5 right-5 z-[70] grid size-12 place-items-center rounded-full bg-white/90 text-[var(--color-burgundy)] shadow-[0_8px_30px_-6px_rgba(123,59,94,0.35),0_0_20px_rgba(201,168,76,0.25)] backdrop-blur-md sm:bottom-8 sm:right-8"
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90">
            <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="2.5" />
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp className="relative size-4.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

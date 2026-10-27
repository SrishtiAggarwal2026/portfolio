"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.45em", filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Word-by-word blur-up reveal. Keeps the full text available to screen readers. */
export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.07,
  inView = false,
}: TextRevealProps) {
  const words = text.split(" ");
  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-10%" } }
    : { animate: "show" };

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden className="inline-block">
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}

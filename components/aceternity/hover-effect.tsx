"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverEffect({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[var(--color-gold)]/25 bg-card/95 p-6 shadow-xs transition-all duration-300 hover:border-[var(--color-gold)]/60 hover:shadow-xl hover:shadow-[rgba(201,168,76,0.12)]",
        className
      )}
    >
      <div className="relative z-[1]">{children}</div>
    </motion.div>
  );
}

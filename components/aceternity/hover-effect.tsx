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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className={cn(
        "rounded-2xl border border-[var(--color-border)] bg-card/90 p-6 shadow-md ring-1 ring-black/[0.04] transition-shadow hover:shadow-xl hover:ring-[var(--color-burgundy)]/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

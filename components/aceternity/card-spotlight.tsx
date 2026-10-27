"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CardSpotlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 350, damping: 24 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 bg-card p-6 shadow-xs transition-colors duration-300 hover:border-[var(--color-gold)] hover:shadow-xl",
        className
      )}
    >
      {/* Interactive cursor-tracking radial spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 168, 76, 0.12), transparent 75%)`
            : undefined,
        }}
        aria-hidden
      />
      <div className="relative z-[1]">{children}</div>
    </motion.div>
  );
}

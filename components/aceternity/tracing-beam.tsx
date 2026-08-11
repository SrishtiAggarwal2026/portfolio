"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function TracingBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const h = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 28,
  });

  return (
    <div ref={ref} className={cn("relative pl-8 md:pl-12", className)}>
      <div className="absolute bottom-0 left-0 top-0 w-px bg-[var(--color-border)]" aria-hidden />
      <motion.div
        className="absolute left-0 top-0 w-0.5 origin-top bg-gradient-to-b from-[var(--color-burgundy)] to-[var(--color-gold)]"
        style={{ height: h }}
      />
      {children}
    </div>
  );
}

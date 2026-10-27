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
      {/* Background track line */}
      <div className="absolute bottom-0 left-0 top-0 w-px bg-[var(--color-border)]" aria-hidden />

      {/* Gold tracing beam line */}
      <motion.div
        className="absolute left-0 top-0 w-0.5 origin-top bg-[var(--color-gold)]"
        style={{ height: h }}
      />

      {/* Glowing tracer bead */}
      <motion.div
        className="absolute -left-[3.5px] size-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_8px_rgba(201,168,76,0.9)] ring-2 ring-[var(--color-cream)] pointer-events-none"
        style={{ top: h }}
        aria-hidden
      />

      {children}
    </div>
  );
}

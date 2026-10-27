"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Maximum rotation in degrees. */
  max?: number;
  /** Rounded corners for the glare layer so it matches the child card. */
  glareClassName?: string;
};

/** 3D perspective tilt with a pointer-following glare highlight. */
export function TiltCard({ children, className, max = 7, glareClassName }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const glareOpacity = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 245, 219, 0.45), transparent 55%)`;
  const smoothGlare = useSpring(glareOpacity, { stiffness: 160, damping: 22 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    glareOpacity.set(1);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  };

  return (
    <div className={cn("[perspective:1000px]", className)}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative size-full"
      >
        {children}
        <motion.div
          aria-hidden
          className={cn("pointer-events-none absolute inset-0 z-30 mix-blend-soft-light", glareClassName)}
          style={{ background: glare, opacity: smoothGlare }}
        />
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

/** Soft golden light that trails the pointer on devices with a fine pointer. */
export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.6 });
  const background = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, rgba(226, 194, 110, 0.13), rgba(123, 59, 94, 0.05) 40%, transparent 70%)`;

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled || reduceMotion) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, reduceMotion, x, y]);

  if (!enabled || reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-multiply"
      style={{ background }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    />
  );
}

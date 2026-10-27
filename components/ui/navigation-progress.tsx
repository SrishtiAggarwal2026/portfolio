"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

export function NavigationProgress() {
  const pathname = usePathname();
  const [navTarget, setNavTarget] = useState<string | null>(null);

  // Declarative navigation state - true while targeting a different route
  const isNavigating = navTarget !== null && navTarget !== pathname;

  // Scroll reading progress at top of page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Intercept internal link clicks to trigger instant visual feedback
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        !href.startsWith("//") &&
        href !== pathname &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey &&
        target.target !== "_blank"
      ) {
        setNavTarget(href);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return (
    <>
      {/* Scroll reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] origin-left bg-gradient-to-r from-[var(--color-burgundy)] via-[var(--color-gold)] to-[var(--color-gold-glow)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Route change top loader */}
      {isNavigating && (
        <motion.div
          initial={{ width: "0%", opacity: 1 }}
          animate={{ width: "85%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 z-[101] h-[3px] bg-gradient-to-r from-[var(--color-burgundy)] to-[var(--color-gold)] shadow-[0_0_12px_rgba(201,168,76,0.8)] pointer-events-none"
        />
      )}
    </>
  );
}

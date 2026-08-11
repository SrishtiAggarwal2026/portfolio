"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const NOISE_SVG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")";

export function HeroBackground() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const smoothX = useSpring(mx, { stiffness: 60, damping: 36, mass: 0.5 });
  const smoothY = useSpring(my, { stiffness: 60, damping: 36, mass: 0.5 });
  const xp = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const yp = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  const spotlight = useMotionTemplate`radial-gradient(900px circle at ${xp} ${yp}, oklch(0.85 0.06 75 / 0.18), transparent 55%)`;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
      aria-hidden
    >
      {/* Cinematic video — slow drift via parent motion */}
      <motion.div
        className="absolute inset-0 origin-center scale-125"
        animate={{ scale: [1.18, 1.28] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <video
          className="absolute inset-0 size-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/mock1.jpg"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Still layer — color + texture, slow Ken Burns */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.12] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/mock1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-50 blur-2xl saturate-[0.75]"
        />
      </motion.div>

      {/* Dark readability stack — documentary grade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,oklch(0.35_0.06_45/0.35),transparent_50%)]" />

      {/* Warm rim lights */}
      <motion.div
        className="absolute -left-1/4 top-0 h-[min(600px,80vh)] w-[min(600px,80vh)] rounded-full bg-amber-500/15 blur-[100px]"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[min(500px,70vh)] w-[min(500px,70vh)] rounded-full bg-stone-400/10 blur-[90px]"
        animate={{ opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aceternity-style soft light */}
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        style={{ background: spotlight }}
      />

      {/* Micro grid — very subtle on dark */}
      <div
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,oklch(1_0_0/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.15)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{ backgroundImage: NOISE_SVG }}
      />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

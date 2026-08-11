"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { SECTION_IDS } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { HeroBackground } from "./hero-background";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const stagger = reduceMotion ? 0 : 0.1;
  const child = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 28 };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const item = {
    hidden: child,
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease },
    },
  };

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-28 text-white md:justify-center md:pb-24 md:pt-32"
    >
      <HeroBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col px-4 sm:px-6 lg:px-12">
        <motion.div
          className="flex max-w-4xl flex-col gap-10 md:gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="text-[0.65rem] font-medium tracking-[0.35em] text-stone-400 uppercase sm:text-xs"
          >
            {site.hero.eyebrow}
          </motion.p>

          <motion.div variants={item} className="self-start">
            <h1 className="inline-flex max-w-full flex-col items-start gap-1 font-heading font-semibold tracking-tighter">
              <span className="[width:fit-content] text-[clamp(3rem,11vw,6.5rem)] leading-[0.92] text-white">
                {site.hero.titleLead}
              </span>
              <span
                className="max-w-full bg-gradient-to-br from-amber-100 via-amber-50 to-stone-300 bg-clip-text text-[clamp(3.25rem,12vw,7.25rem)] leading-[0.92] tracking-tighter text-transparent drop-shadow-[0_0_40px_oklch(0.75_0.12_75/0.25)] [width:fit-content]"
              >
                {site.hero.titleAccent}
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-md text-lg leading-relaxed text-stone-300 md:text-xl md:leading-relaxed"
          >
            {site.hero.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
          >
            <motion.div
              className="sm:min-w-[220px]"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <Link
                href={ROUTES.about}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full justify-center border-0 bg-white font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_40px_-12px_rgba(0,0,0,0.5)]",
                  "transition-shadow hover:bg-stone-100 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_20px_50px_-15px_rgba(0,0,0,0.55)]"
                )}
              >
                {site.hero.primaryCta}
              </Link>
            </motion.div>

            <motion.div
              className="sm:min-w-[220px]"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <Link
                href={ROUTES.impact}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-12 w-full justify-center border border-white/25 bg-white/5 text-white backdrop-blur-sm",
                  "hover:bg-white/10 hover:text-white"
                )}
              >
                {site.hero.secondaryCta}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="max-w-lg space-y-2 pt-2">
            {site.hero.quoteLines.map((line) => (
              <p
                key={line}
                className="font-story text-lg font-normal leading-snug tracking-[0.02em] text-stone-300 italic md:text-xl"
              >
                {line}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

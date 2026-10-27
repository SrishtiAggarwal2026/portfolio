"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  MapPin,
  Sparkles,
  Trophy,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type TimelinePhase = {
  id: string;
  number?: string;
  title: string;
  headline?: string;
  summary?: string;
  location?: string;
  badge?: string;
  stat?: string;
  dot: "burgundy" | "gold" | "green";
  items: readonly string[];
};

const dotColors: Record<TimelinePhase["dot"], { bg: string; ring: string; glow: string; text: string }> = {
  burgundy: {
    bg: "bg-[var(--color-burgundy)]",
    ring: "ring-[var(--color-burgundy)]/40",
    glow: "shadow-[0_0_20px_rgba(114,47,55,0.4)]",
    text: "text-[var(--color-burgundy)]",
  },
  gold: {
    bg: "bg-[var(--color-gold)]",
    ring: "ring-[var(--color-gold)]/40",
    glow: "shadow-[0_0_20px_rgba(201,168,76,0.4)]",
    text: "text-[var(--color-gold)]",
  },
  green: {
    bg: "bg-emerald-600",
    ring: "ring-emerald-500/40",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    text: "text-emerald-700 dark:text-emerald-400",
  },
};

export function Timeline({
  phases,
  renderImage,
}: {
  phases: readonly TimelinePhase[];
  renderImage: (phase: TimelinePhase, index: number) => ReactNode;
}) {
  const scrollToPhase = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="relative">
      {/* Quick Navigation Jump Bar */}
      <div className="mb-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {phases.map((phase, i) => (
          <button
            key={phase.id}
            type="button"
            onClick={() => scrollToPhase(phase.id)}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-card/90 px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-xs backdrop-blur-md transition-all hover:scale-105 hover:border-[var(--color-gold)] hover:bg-[var(--color-cream)]/70 hover:text-[var(--color-burgundy)] cursor-pointer"
          >
            <span className="flex size-4 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-[0.65rem] font-bold text-[var(--color-burgundy)]">
              {phase.number || i + 1}
            </span>
            <span>{phase.title}</span>
          </button>
        ))}
      </div>

      {/* Central spine line with radiant gold/burgundy gradient */}
      <div
        className="absolute left-4 top-8 bottom-12 w-0.5 bg-gradient-to-b from-[var(--color-burgundy)] via-[var(--color-gold)] to-emerald-600 md:left-6"
        aria-hidden
      />

      <div className="space-y-16 md:space-y-24">
        {phases.map((phase, index) => {
          const color = dotColors[phase.dot];
          const isWinner = phase.id === "p4";

          return (
            <section
              key={phase.id}
              id={phase.id}
              className="relative scroll-mt-28"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,460px)] lg:items-start lg:gap-12">
                {/* Left Column: Spine node + Milestone Content Card */}
                <div className="relative flex gap-6 pl-10 md:gap-8 md:pl-16">
                  {/* Glowing Milestone Number Crest */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ type: "spring", stiffness: 350, damping: 24, delay: 0.05 }}
                    className={cn(
                      "absolute left-0 top-0 size-8 md:size-12 rounded-full border-2 border-background flex items-center justify-center font-bold text-white shadow-xl ring-4 transition-transform",
                      color.bg,
                      color.ring,
                      color.glow
                    )}
                    aria-hidden
                  >
                    {/* Pulsing beacon ping */}
                    <span
                      className={cn(
                        "absolute -inset-1 rounded-full animate-ping opacity-40",
                        color.bg
                      )}
                    />
                    <span className="relative text-xs md:text-sm tracking-tighter">
                      {phase.number || index + 1}
                    </span>
                  </motion.div>

                  {/* Main Milestone Card */}
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "group relative min-w-0 flex-1 overflow-hidden rounded-3xl border border-[var(--color-gold)]/25 bg-card/90 p-6 md:p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[var(--color-gold)]/60 hover:shadow-2xl hover:shadow-[rgba(201,168,76,0.12)]",
                      isWinner && "ring-2 ring-[var(--color-gold)]/50 bg-gradient-to-br from-card via-[var(--color-cream)]/25 to-card"
                    )}
                  >
                    {/* Top Pill Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-burgundy)] shadow-xs">
                          Phase {phase.number || index + 1}
                        </span>

                        {phase.badge && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/30 px-2.5 py-0.5 text-xs font-semibold text-foreground/80">
                            <Sparkles className="size-3 text-[var(--color-gold)]" />
                            {phase.badge}
                          </span>
                        )}
                      </div>

                      {/* Date Badge */}
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                        <CalendarDays className="size-3.5 text-[var(--color-gold)]" />
                        {phase.title}
                      </span>
                    </div>

                    {/* Headline & Title */}
                    <div className="mt-4 space-y-2">
                      {isWinner ? (
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-300">
                          <Trophy className="size-3.5 text-amber-600 dark:text-amber-400" />
                          Global Recognition &amp; Grant Winner
                        </div>
                      ) : null}

                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] dark:text-foreground">
                        {phase.headline || phase.title}
                      </h3>

                      {phase.summary && (
                        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                          {phase.summary}
                        </p>
                      )}

                      {phase.location && (
                        <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground/90 pt-1">
                          <MapPin className="size-3.5 text-[var(--color-gold)]" />
                          <span>Focus Area: {phase.location}</span>
                        </p>
                      )}
                    </div>

                    {/* Bullet Points with Checkmarks */}
                    <div className="mt-6 border-t border-border/60 pt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Key Accomplishments &amp; Milestones
                      </p>
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                          >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stat / Impact Highlight Footer */}
                    {phase.stat && (
                      <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/50 dark:bg-muted/40 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="size-4 text-[var(--color-burgundy)] dark:text-[var(--color-gold)]" />
                          <span className="text-xs font-semibold text-foreground/90">
                            Milestone Highlight:
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-extrabold text-[var(--color-burgundy)] dark:text-[var(--color-gold)]">
                          {phase.stat}
                        </span>
                      </div>
                    )}
                  </motion.article>
                </div>

                {/* Right Column: Visual Photo Showcase with reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="min-w-0 lg:sticky lg:top-28"
                >
                  {renderImage(phase, index)}
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Beyond 2026: Future Horizon Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 rounded-3xl border border-[var(--color-gold)]/30 bg-gradient-to-br from-[var(--color-burgundy)] via-[#541e24] to-[#2c0f13] p-8 text-white shadow-2xl md:p-12"
      >
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] backdrop-blur-md">
            Future Horizon · 2026 &amp; Beyond
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Scaling the Movement Across Delhi-NCR
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-white/80">
            With the backing of the IB Global Youth Action Fund and grassroots partnerships, the Rights to Reality Advocacy Clinic and Voices Unheard movement are expanding into new communities — onboarding 15 youth fellows, publishing an expanded slam poetry anthology, and driving permanent institutional welfare access for underserved families.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/initiative"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-2.5 text-xs sm:text-sm font-bold text-[var(--color-burgundy)] shadow-lg hover:brightness-110 transition-all"
            >
              Explore the 4 Pillars
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md"
            >
              Get Involved as a Volunteer
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

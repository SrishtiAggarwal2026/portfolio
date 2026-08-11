"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Phase = {
  id: string;
  title: string;
  dot: "burgundy" | "gold" | "green";
  items: readonly string[];
};

const dotClass: Record<Phase["dot"], string> = {
  burgundy: "bg-[var(--color-burgundy)]",
  gold: "bg-[var(--color-gold)]",
  green: "bg-emerald-700",
};

export function Timeline({
  phases,
  renderImage,
}: {
  phases: readonly Phase[];
  renderImage: (phase: Phase, index: number) => ReactNode;
}) {
  return (
    <div className="relative">
      <div
        className="absolute left-[11px] top-3 bottom-3 w-px bg-border md:left-[15px]"
        aria-hidden
      />
      <ul className="space-y-16 md:space-y-24">
        {phases.map((phase, index) => (
          <li key={phase.id}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] lg:items-start lg:gap-10">
              <div className="relative flex gap-6 pl-10 md:pl-12">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "absolute left-0 top-1 size-6 rounded-full ring-4 ring-background md:size-8",
                    dotClass[phase.dot]
                  )}
                  aria-hidden
                />
                <div className="min-w-0 flex-1 space-y-4">
                  <p className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-burgundy)] uppercase">
                    Phase {index + 1}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-foreground">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="min-w-0 sm:mx-auto sm:w-full sm:max-w-[400px] lg:mx-0 lg:w-full lg:max-w-[380px] lg:justify-self-end lg:pt-12"
              >
                {renderImage(phase, index)}
              </motion.div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

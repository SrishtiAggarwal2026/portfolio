"use client";

import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: number;
  suffix?: string;
  className?: string;
};

export function StatCard({ label, value, suffix = "", className }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const count = useCountUp(value, { enabled: inView });

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
    >
      <Card
        className={cn(
          "border-border/60 bg-card/90 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-xl hover:ring-amber-500/15 dark:shadow-black/30 dark:ring-white/5",
          className
        )}
      >
        <CardHeader className="pb-2">
          <CardDescription className="text-xs font-medium tracking-wide uppercase">
            {label}
          </CardDescription>
          <CardTitle className="font-heading text-4xl tabular-nums md:text-5xl">
            {count}
            {suffix}
          </CardTitle>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

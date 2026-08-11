"use client";

import Image from "next/image";
import { BookOpen, Network, Scale, Users } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

const iconMap = {
  network: Network,
  book: BookOpen,
  users: Users,
  scale: Scale,
} as const;

export function FutureVisionSection() {
  return (
    <SectionWrapper id={SECTION_IDS.future} variant="paper">
      <FadeIn>
        <SectionHeading
          eyebrow={site.future.eyebrow}
          title={site.future.heading}
          description="We scale through ethics and partnerships — not through volume alone."
          size="display"
        />
      </FadeIn>
      <div className="grid gap-6 sm:grid-cols-2">
        {site.future.items.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <FadeIn key={item.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
              >
                <Card
                  className={cn(
                    "group h-full overflow-hidden border-border/60 bg-card/90 shadow-md shadow-black/[0.04] ring-1 ring-black/[0.04]",
                    "transition-[box-shadow,transform] duration-300 hover:shadow-xl hover:shadow-amber-950/10 hover:ring-amber-500/20",
                    "dark:shadow-black/40 dark:ring-white/5"
                  )}
                >
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/15 to-transparent mix-blend-overlay" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-gradient-to-br from-muted/80 to-amber-50/40 shadow-inner dark:from-muted dark:to-amber-950/30">
                        <Icon className="size-5 text-foreground" aria-hidden />
                      </div>
                      <div className="min-w-0 space-y-1">
                        <CardTitle className="text-lg tracking-tight">{item.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

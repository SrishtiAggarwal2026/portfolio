"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { impactPage } from "@/data/site";
import { useCountUp } from "@/hooks/use-count-up";
function ImpactCounter({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const n = useCountUp(value, { enabled: inView });
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-[var(--color-gold)]/35 bg-[var(--color-cream)]/50 p-6 text-center shadow-sm"
    >
      <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-burgundy)] md:text-4xl">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export default function ImpactPage() {
  const testimonialItems = impactPage.testimonials.map(
    (t) => `"${t.quote}" — ${t.name}, ${t.role}`
  );

  return (
    <div className="flex min-w-0 flex-col">
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
        <BackgroundBeams />
        <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <h1 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
              Measuring What Matters
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">{impactPage.heroSub}</p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-muted shadow-lg ring-1 ring-[var(--color-burgundy)]/10 lg:mx-0 lg:max-w-none">
            <Image
              src={impactPage.heroImage.src}
              alt={impactPage.heroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="sr-only">Impact pillars</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {impactPage.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full overflow-hidden border-border bg-card shadow-sm hover:shadow-md transition-shadow pt-0 gap-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <CardHeader className="pt-4 pb-2 px-5 sm:px-6">
                  <CardTitle className="font-[family-name:var(--font-playfair)] text-xl text-foreground">
                    {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 px-5 sm:px-6">
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-burgundy)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/20 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {impactPage.counters.map((c) => (
            <ImpactCounter key={c.label} label={c.label} value={c.value} suffix={c.suffix} />
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-card py-10">
        <p className="mb-3 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Voices from the work
        </p>
        <InfiniteMovingCards items={[...testimonialItems]} speed={50} variant="headline" />
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
        <div className="mx-auto flex size-24 items-center justify-center rounded-2xl border-2 border-[var(--color-burgundy)]/30 bg-[var(--color-cream)] text-2xl font-bold text-[var(--color-burgundy)]">
          10
        </div>
        <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-foreground">
          {impactPage.sdg.title}
        </h2>
        <p className="mt-4 text-muted-foreground">{impactPage.sdg.body}</p>
        <p className="mt-4 text-sm text-muted-foreground">{impactPage.sdg.also}</p>
      </section>
    </div>
  );
}

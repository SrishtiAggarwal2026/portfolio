"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { TextReveal } from "@/components/motion/text-reveal";
import { impactPage } from "@/data/site";
import { useCountUp } from "@/hooks/use-count-up";
import { Award, CheckCircle2, HeartHandshake, Sparkles, Users } from "lucide-react";

function ImpactCounter({
  label,
  value,
  suffix,
  icon: Icon,
}: {
  label: string;
  value: number;
  suffix: string;
  icon: typeof Users;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const n = useCountUp(value, { enabled: inView });

  return (
    <CardSpotlight className="glass-panel rounded-2xl border-[var(--color-gold)]/35 bg-card/90 p-6 text-center shadow-xs hover:shadow-xl transition-all flex flex-col items-center justify-center">
        <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--color-burgundy)]/10 text-[var(--color-burgundy)] mb-3 transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-5" />
        </div>
        <div ref={ref}>
          <p className="text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] md:text-4xl tabular-nums">
            {n}
            {suffix}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        </div>
      </CardSpotlight>
  );
}

const counterIcons = [Users, Sparkles, Award, HeartHandshake];

export default function ImpactPage() {
  const testimonialItems = impactPage.testimonials.map(
    (t) => `"${t.quote}" — ${t.name}, ${t.role}`
  );

  return (
    <div className="flex min-w-0 flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-paper)] pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
        <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-burgundy)] shadow-xs">
              Tangible &amp; Lived Results
            </div>
            <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] sm:text-4xl md:text-5xl lg:text-6xl">
              <TextReveal text="Measuring What Matters" delay={0.15} />
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">{impactPage.heroSub}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-[var(--color-gold)]/35 bg-muted shadow-xl ring-1 ring-[var(--color-burgundy)]/10 lg:mx-0 lg:max-w-none group"
          >
            <Image
              src={impactPage.heroImage.src}
              alt={impactPage.heroImage.alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3 text-xs sm:text-sm font-medium text-foreground shadow-lg backdrop-blur-md">
              <span className="font-semibold text-[var(--color-burgundy)]">Grassroots Footprint: </span>
              <span className="text-muted-foreground">Empowering families across Delhi &amp; NCR</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numerical Impact Counters */}
      <section className="relative border-y border-[var(--color-gold)]/30 bg-[var(--color-cream)]/35 py-12 backdrop-blur-xs">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {impactPage.counters.map((c, i) => (
            <ImpactCounter
              key={c.label}
              label={c.label}
              value={c.value}
              suffix={c.suffix}
              icon={counterIcons[i] ?? Users}
            />
          ))}
        </div>
      </section>

      {/* Pillars of Impact: Visual 3-Card Grid */}
      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
            Core Scope
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-burgundy)] md:text-4xl">
            Pillars of Impact
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            How advocacy, ethical listening, and slam poetry create sustained transformation.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impactPage.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group glass-panel overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              {/* Photo Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  fill
                  placeholder="blur"
                  blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 rounded-full bg-[var(--color-burgundy)]/90 px-3 py-1 text-[11px] font-bold text-white shadow-xs backdrop-blur-xs">
                  {p.stat}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{p.title}</h3>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-[var(--color-gold)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Field Quotes Ticker */}
      <section className="overflow-hidden border-y border-[var(--color-gold)]/25 bg-card py-10">
        <p className="mb-3 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Voices from the field
        </p>
        <InfiniteMovingCards items={[...testimonialItems]} speed={50} variant="headline" />
      </section>

      {/* SDG Alignment: Compact Card */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/50 p-8 sm:p-10 shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#E5243B] text-2xl font-black text-white shadow-md animate-pulse">
              10
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-burgundy)]">
                United Nations Sustainable Development Goals
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                {impactPage.sdg.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {impactPage.sdg.body}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[var(--color-gold)]/20 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="rounded-full border border-emerald-600/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              SDG 4: Quality Education
            </span>
            <span className="rounded-full border border-orange-600/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-800 dark:text-orange-300">
              SDG 5: Gender Equality
            </span>
            <span className="rounded-full border border-red-600/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-800 dark:text-red-300">
              SDG 10: Reduced Inequalities
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

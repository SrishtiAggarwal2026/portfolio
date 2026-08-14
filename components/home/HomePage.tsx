"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, BookOpen, Building2, ExternalLink, GraduationCap, Heart, Mic2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { FlipWords } from "@/components/aceternity/flip-words";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { LampContainer } from "@/components/aceternity/lamp-container";
import { MovingBorder } from "@/components/aceternity/moving-border";
import { SparklesCore } from "@/components/aceternity/sparkles-core";
import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import { buttonVariants } from "@/components/ui/button";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { home, achievements } from "@/data/site";
import { useCountUp } from "@/hooks/use-count-up";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";

const statListVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const n = useCountUp(value, { enabled: inView });
  return (
    <motion.div variants={statItemVariants}>
      <WobbleCard>
        <div ref={ref} className="text-center">
        <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-burgundy)] md:text-4xl">
          {n}
          {suffix}
        </p>
        <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
      </div>
    </WobbleCard>
    </motion.div>
  );
}

type HomePageProps = {
  heroImage?: PublicGalleryImage | null;
};

export function HomePage({ heroImage }: HomePageProps) {
  return (
    <div className="flex min-w-0 flex-col">
      <section className="relative overflow-hidden bg-[var(--color-paper)] py-16 sm:py-20 md:py-28">
        <BackgroundBeams />
        <SparklesCore className="opacity-80" />
        <div className="relative z-[1] mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-burgundy)] sm:text-sm sm:tracking-[0.2em]">
              Rights to Reality Advocacy Clinic
            </p>
            <h1 className="mt-4 max-w-4xl text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.08]">
              Every Woman Deserves to Be <FlipWords words={home.flipWords} />
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {home.heroSub}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/initiative">
                <MovingBorder containerClassName="rounded-xl">
                  <span className="flex items-center gap-2 px-2 py-1 text-sm font-semibold">
                    Explore the Initiative <ArrowRight className="size-4" />
                  </span>
                </MovingBorder>
              </Link>
              <Link
                href="/impact"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "text-[var(--color-burgundy)]"
                )}
              >
                Our Impact
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: -1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] w-full min-w-0 max-w-lg justify-self-stretch sm:justify-self-end lg:max-w-none"
          >
            <div className="absolute inset-0 rotate-2 rounded-3xl bg-[var(--color-burgundy)]/15" aria-hidden />
            <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <Image
                src={heroImage?.src ?? "/placeholder.svg"}
                alt={
                  heroImage
                    ? `Community advocacy — ${heroImage.filename.replace(/\.[^.]+$/, "")}`
                    : "Voices Unheard — community advocacy"
                }
                fill
                sizes="(max-width: 1024px) 96vw, min(640px, 50vw)"
                quality={heroImage?.unoptimized ? undefined : 75}
                placeholder={heroImage ? "empty" : "blur"}
                blurDataURL={heroImage ? undefined : PLACEHOLDER_BLUR_DATA_URL}
                className="object-cover"
                priority
                unoptimized={heroImage?.unoptimized ?? false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-burgundy)]/40 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white drop-shadow sm:bottom-4 sm:left-4 sm:right-4 sm:text-sm">
                {heroImage ? "From the field" : "Voices Unheard in the community"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[var(--color-gold)]/30 bg-[var(--color-cream)]/60 py-16">
        <motion.div
          className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4"
          variants={statListVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
        >
          {home.stats.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-burgundy)]">
              <Building2 className="size-3.5" />
              <span>{home.rightsToReality.eyebrow}</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[var(--color-burgundy)] sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              {home.rightsToReality.title}
            </h2>
            <p className="text-lg font-medium leading-relaxed text-foreground">
              {home.rightsToReality.lead}
            </p>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {home.rightsToReality.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/60 px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
                Noida Sector 8
              </span>
              <span className="rounded-full border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/60 px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
                Vasant Kunj
              </span>
              <span className="rounded-full border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/60 px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
                Mahipalpur Camps
              </span>
              <span className="rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/60 px-3 py-1 text-xs font-semibold text-foreground">
                Partner: Hamari Pehchaan NGO
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-6"
          >
            {home.rightsToReality.pillars.map((pillar, i) => {
              const icons = [Building2, ShieldCheck, GraduationCap, Mic2];
              const Icon = icons[i] ?? Building2;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-all hover:border-[var(--color-gold)]/40 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-burgundy)]/10 text-[var(--color-burgundy)]">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/50 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--color-burgundy)]">
                      {pillar.badge}
                    </span>
                  </div>
                  <p className="mt-2.5 pl-12 text-sm leading-relaxed text-muted-foreground">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
            The Gap We Bridge
          </h2>
          <div className="relative mx-auto mt-10 max-w-3xl rounded-3xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]/45 px-3 py-8 shadow-sm sm:px-6 sm:py-12">
            <div className="relative mx-auto flex h-[min(370px,85vw)] sm:h-[400px] max-w-xl items-center justify-center">
              <svg
                viewBox="0 0 440 370"
                className="h-full w-full max-w-full"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
              <motion.circle
                cx="155"
                cy="145"
                r="95"
                fill="oklch(0.55 0.12 350 / 0.25)"
                stroke="var(--color-burgundy)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.circle
                cx="285"
                cy="145"
                r="95"
                fill="oklch(0.75 0.12 75 / 0.2)"
                stroke="var(--color-gold)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
              <motion.circle
                cx="220"
                cy="225"
                r="95"
                fill="oklch(0.45 0.08 250 / 0.2)"
                stroke="var(--color-burgundy)"
                strokeOpacity="0.5"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              </svg>
              <div className="pointer-events-none absolute left-1/2 top-[46.5%] -translate-x-1/2 -translate-y-1/2 px-4 text-center">
                <p className="rounded-full border border-[var(--color-burgundy)]/20 bg-background/85 px-4 py-2 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm">
                  {home.venn.center}
                </p>
              </div>
              <span className="absolute left-[3%] top-[10%] rounded-full border border-[var(--color-burgundy)]/20 bg-background/85 px-3 py-1 text-center text-xs font-semibold text-[var(--color-burgundy)] shadow-sm backdrop-blur-sm sm:left-[6%] sm:text-sm">
                {home.venn.circles[0]}
              </span>
              <span className="absolute right-[3%] top-[10%] rounded-full border border-[var(--color-gold)]/40 bg-background/85 px-3 py-1 text-center text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm sm:right-[6%] sm:text-sm">
                {home.venn.circles[1]}
              </span>
              <span className="absolute bottom-[3%] left-1/2 -translate-x-1/2 rounded-full border border-[var(--color-burgundy)]/20 bg-background/85 px-3 py-1 text-center text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm sm:bottom-[4%] sm:text-sm">
                {home.venn.circles[2]}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] border-y border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)] mb-12">
            Key Highlights
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card p-5 shadow-xs hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mb-3 block" role="img" aria-label="Highlight icon">
                  {h.emoji}
                </span>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {h.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-[var(--color-gold)]/35 bg-[var(--color-cream)]/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-burgundy)]">
                Official IB Project Showcase
              </h4>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Rights to Reality Advocacy Clinic & Voices Unheard has been officially featured in the International Baccalaureate (IB) Festival of Hope showcase, celebrating Srishti’s mission and community impact.
              </p>
            </div>
            <a
              href="https://ibo.org/festival-of-hope/youth-in-action/rights-to-reality-advocacy-clinic--voices-unheard?contentId=207578"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[var(--color-burgundy)] text-primary-foreground hover:bg-[var(--color-burgundy)]/90 font-semibold shrink-0 flex items-center gap-2"
              )}
            >
              View Official Showcase <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-card py-8">
        <p className="mb-2 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          From our Voices Unheard performances
        </p>
        <InfiniteMovingCards items={[...home.poemTicker]} speed={55} />
      </section>

      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <LampContainer>
          <p className="text-center text-balance font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--color-burgundy)] sm:text-2xl md:text-3xl">
            {home.ctaBanner}
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[var(--color-burgundy)] text-primary-foreground hover:bg-[var(--color-burgundy)]/90"
              )}
            >
              Meet Our Founder
            </Link>
          </div>
        </LampContainer>
      </section>
    </div>
  );
}

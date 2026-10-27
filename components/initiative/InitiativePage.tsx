"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  FileCheck2,
  Flag,
  GraduationCap,
  HeartHandshake,
  Megaphone,
  Mic2,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { StoryBlockPhoto } from "@/components/gallery/story-block-photo";
import { initiative, f1Data } from "@/data/site";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";
import { ReadingRoomSection } from "@/components/initiative/reading-room-section";
import { TextReveal } from "@/components/motion/text-reveal";

const serviceIcons = [Building2, FileCheck2, Users, ShieldCheck];
const stepIcons = [HeartHandshake, ShieldCheck, GraduationCap, Mic2];

type InitiativePageProps = {
  clinicPhoto?: PublicGalleryImage;
};

export default function InitiativePage({ clinicPhoto }: InitiativePageProps) {
  return (
    <div className="flex min-w-0 flex-col">
      {/* Hero Overview */}
      <section className="relative overflow-hidden bg-[var(--color-paper)] pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[1] mx-auto min-w-0 max-w-6xl px-4 sm:px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-burgundy)] shadow-xs">
            Advocacy · Creative Voice · Literacy
          </div>
          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
            <TextReveal text="Initiative" delay={0.15} />
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            A four-pillar model bridging grassroots welfare, performance poetry, youth marketing, and community literacy.
          </p>

          {/* 4 Pillars Bento */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {initiative.cards.map((card, i) => {
              const icons = [Building2, Mic2, Megaphone, BookOpen];
              const Icon = icons[i] ?? Building2;
              const delays = [0.08, 0.14, 0.2, 0.26];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delays[i] ?? 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="h-full flex flex-col"
                >
                  <Link
                    href={card.href}
                    className="shine-card group flex flex-col justify-between h-full w-full overflow-hidden rounded-2xl border border-[var(--color-gold)]/40 bg-white/90 shadow-xs transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-muted">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        placeholder="blur"
                        blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                        className={cn(
                          "object-cover transition-transform duration-500 group-hover:scale-105",
                          i === 2 ? "object-[50%_0%]" : i === 3 ? "object-[50%_50%]" : "object-[50%_15%]"
                        )}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-3 pt-7">
                        <span className="inline-block rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                          {card.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-start gap-2 mb-2.5 min-h-[3.5rem] sm:min-h-[4rem] text-[var(--color-burgundy)]">
                          <Icon className="size-4 shrink-0 mt-0.5" aria-hidden />
                          <h2 className="text-base font-bold tracking-tight text-foreground group-hover:text-[var(--color-burgundy)] transition-colors leading-snug">
                            {card.title}
                          </h2>
                        </div>
                        <p className="text-xs font-semibold text-foreground/90 leading-relaxed min-h-[4.25rem]">
                          {card.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[var(--color-gold)]/20 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-burgundy)]">
                        <span>Explore</span>
                        <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Section 1: Advocacy Clinic (Visual 2x2 Grid + Photo) */}
      <section id="clinic" className="scroll-mt-24 border-y border-[var(--color-gold)]/25 bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0 lg:col-span-7"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
              Direct Field Support
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-burgundy)]">
              Advocacy Clinic Framework
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Weekly clinics conducted across Noida Sector 8 &amp; Mahipalpur Anganwadi centers with Hamari Pahchan NGO.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {initiative.accordion.map((item, i) => {
                const Icon = serviceIcons[i] ?? Building2;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="glass-panel rounded-xl border border-[var(--color-gold)]/25 bg-card/80 p-4 shadow-2xs hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground leading-snug">{item.title}</h3>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      {item.content}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="min-w-0 w-full max-lg:mx-auto max-lg:max-w-md lg:col-span-5"
          >
            <StoryBlockPhoto
              image={clinicPhoto ?? {
                filename: "advocacy-clinic.jpeg",
                src: "/pillars/advocacy-clinic.jpeg",
                category: "Advocacy Clinic",
                unoptimized: false,
              }}
              label="Srishti at weekly Anganwadi clinic session"
              alt="Advocacy clinic session in the community"
              aspectClassName="aspect-[4/5]"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Voices Unheard Process (Horizontal 4-Step Pipeline) */}
      <section id="process" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
            Consent-First Pipeline
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-burgundy)] md:text-4xl">
            Voices Unheard Process
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            How private living-room conversations are ethically transformed into public stage advocacy.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {initiative.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? HeartHandshake;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative glass-panel rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-7 items-center justify-center rounded-full bg-[var(--color-burgundy)] text-xs font-bold text-white shadow-2xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="size-5 text-[var(--color-gold)]" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>

                {i < initiative.steps.length - 1 ? (
                  <div className="mt-4 hidden lg:flex justify-end text-[var(--color-gold)]/50" aria-hidden>
                    <ArrowRight className="size-4" />
                  </div>
                ) : (
                  <div className="mt-4 hidden lg:flex justify-end text-emerald-600 dark:text-emerald-400" aria-hidden>
                    <CheckCircle2 className="size-4" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section 3: F-1 World National Finals, Marketing & Social initiative — Team Blaze */}
      <section id="f1" className="scroll-mt-24 border-t border-[var(--color-gold)]/25 bg-[var(--color-paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
                <Flag className="size-3.5" /> Pillar 3 · Global Representation
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                F-1 World National Finals, Marketing &amp; Social initiative
              </h2>
              <p className="text-sm font-semibold text-[var(--color-burgundy)]">
                {f1Data.school} · {f1Data.role}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {f1Data.summary}
              </p>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                {f1Data.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-cream)]/40 p-4 transition-all hover:border-[var(--color-gold)] hover:shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg" role="img" aria-label={h.title}>
                        {h.emoji}
                      </span>
                      <p className="text-xs font-bold text-foreground">{h.title}</p>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              {/* Official Showcase Image */}
              <div className="group relative aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-gold)]/35 bg-muted shadow-lg">
                <Image
                  src={f1Data.media.teamPhoto}
                  alt="Team Blaze at F-1 World National Finals"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  placeholder="blur"
                  blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-5 pt-10 text-white">
                  <p className="text-sm font-bold">Team Blaze · Pit Display &amp; Showcase</p>
                  <p className="text-xs text-white/80">F-1 World National Finals, Marketing &amp; Social initiative</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Reading Room & Teacher Training Programme */}
      <ReadingRoomSection />

      {/* Section 4: Key Welfare Schemes */}
      <section className="bg-[var(--color-paper)] border-t border-[var(--color-gold)]/20 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
              Direct Beneficiary Support
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-burgundy)] md:text-4xl">
              Welfare Schemes Explained
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Key government protection and empowerment programs covered in our weekly community clinics.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {initiative.schemes.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                <CardSpotlight
                  className={cn(
                    "h-full overflow-hidden rounded-2xl glass-panel border-[var(--color-gold)]/30 shadow-xs hover:shadow-xl transition-all",
                    "border-t-4 border-t-[var(--color-gold)] p-5 flex flex-col justify-between"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold tracking-tight text-[var(--color-burgundy)]">{s.name}</h3>
                      <span className="rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/30 px-2 py-0.5 text-[10px] font-bold text-foreground uppercase tracking-wide">
                        {s.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs font-medium text-foreground">{s.full}</p>
                  </div>
                  <div className="mt-4 border-t border-[var(--color-gold)]/20 pt-3 text-xs leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-[var(--color-burgundy)]">Target: </span>
                    {s.who}
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

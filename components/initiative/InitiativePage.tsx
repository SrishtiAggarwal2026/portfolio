"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Flag,
  GraduationCap,
  HeartHandshake,
  Mic2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { PhotoCarousel, type CarouselItem } from "@/components/gallery/photo-carousel";
import { initiative, f1Data } from "@/data/site";
import { pillarGalleries, pillarVideos, type PillarKey } from "@/lib/pillar-galleries";
import { videoCaption } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";
import { ReadingRoomSection } from "@/components/initiative/reading-room-section";
import { TextReveal } from "@/components/motion/text-reveal";

const serviceIcons = [Building2, FileCheck2, Users, ShieldCheck];
const stepIcons = [HeartHandshake, ShieldCheck, GraduationCap, Mic2];

const toCarouselItems = (key: PillarKey): CarouselItem[] => [
  ...pillarVideos[key].map((video) => ({
    type: "video" as const,
    src: video.src,
    caption: videoCaption(video),
  })),
  ...pillarGalleries[key].map((image) => ({ type: "image" as const, image })),
];

const clinicItems = toCarouselItems("clinic");
const voicesItems = toCarouselItems("voices");
const f1Items = toCarouselItems("f1");

export default function InitiativePage() {
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
        </motion.div>
      </section>

      {/* Section 1: Advocacy Clinic (Visual 2x2 Grid + Photo) */}
      <section id="clinic" className="border-y border-[var(--color-gold)]/25 bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:px-6 grid-cols-1 lg:grid-cols-12 lg:items-center">
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
            <PhotoCarousel
              items={clinicItems}
              label="Advocacy Clinic photos"
              aspectClassName="aspect-[4/5]"
              sizes="(max-width: 1024px) 448px, 460px"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Voices Unheard Process (Horizontal 4-Step Pipeline) */}
      <section id="process" className="w-full mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
            <Mic2 className="size-3.5" /> Pillar 2 · Slam Poetry &amp; Creative Advocacy
          </div>
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

        {/* Featured Stage Performance Video */}
        <div className="mt-16 pt-12 border-t border-[var(--color-gold)]/20">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3.5 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
                <Mic2 className="size-3.5" /> Featured Stage Performance
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Bal Vivah — A Testimony in Verse
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adapted from firsthand testimonies documented during weekly on-ground listening circles in Delhi-NCR. This spoken-word performance captures the emotional urgency, human dignity, and grassroots push against child marriage.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-cream)]/70 px-3 py-1 text-xs font-medium text-foreground">
                  Original Spoken-Word Composition · Srishti Aggarwal
                </span>
                <Link
                  href="/voices"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-burgundy)] hover:text-[var(--color-gold)] transition-colors"
                >
                  Explore Full Voices Anthology <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--color-gold)]/35 bg-black shadow-xl">
                <video
                  src="/voices/bal-vivah.mp4"
                  poster="/voices/bal-vivah-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  className="size-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <PhotoCarousel
            items={voicesItems}
            label="Voices Unheard performance photos and videos"
            aspectClassName="aspect-[16/10]"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </motion.div>
      </section>

      {/* Section 3: F-1 World National Finals, Marketing & Social initiative — Team Blaze */}
      <section id="f1" className="border-t border-[var(--color-gold)]/25 bg-[var(--color-paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-12 lg:items-center">
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
              <PhotoCarousel
                items={f1Items}
                label="F1 in Schools and Team Blaze photos and videos"
                aspectClassName="aspect-[4/3] sm:aspect-square lg:aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
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

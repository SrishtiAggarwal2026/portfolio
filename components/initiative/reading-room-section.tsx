"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  HeartHandshake,
  Library,
  Sparkles,
  Users,
} from "lucide-react";
import { PhotoCarousel, type CarouselItem } from "@/components/gallery/photo-carousel";
import { readingRoom } from "@/data/site";
import { pillarGalleries } from "@/lib/pillar-galleries";

const carouselItems: CarouselItem[] = [
  ...pillarGalleries.readingRoom.map((image) => ({ type: "image" as const, image })),
  ...readingRoom.media
    .filter((item) => item.type === "video")
    .map((item) => ({ type: "video" as const, src: encodeURI(item.src), caption: item.alt })),
];

export function ReadingRoomSection() {
  return (
    <section id="reading-room" className="border-t border-[var(--color-gold)]/25 bg-[var(--color-paper)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-burgundy)] backdrop-blur-xs">
            <BookOpen className="size-3.5" aria-hidden />
            <span>Community Literacy Hub</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] sm:text-4xl">
            {readingRoom.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Srishti Aggarwal &amp; Vedika (Kitaab4U) in collaboration with SEWA Bharti in Shakurpur, Delhi.
          </p>
        </motion.div>

        {/* Visual Bento Overview */}
        <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-12 lg:items-stretch">
          {/* Left: Purpose & Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                <Building2 className="size-4" />
                <span>Shakurpur, Delhi · SEWA Bharti Center</span>
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Safe Learning Sanctuaries for Children
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {readingRoom.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Partnership Chips */}
            <div className="mt-6 pt-6 border-t border-[var(--color-gold)]/20 grid gap-2.5 sm:grid-cols-3 text-xs">
              <div className="rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/50 p-2.5 hover:border-[var(--color-gold)] transition-colors">
                <p className="font-bold text-[var(--color-burgundy)]">Kitaab4U (Vedika)</p>
                <p className="mt-0.5 text-muted-foreground">Community book drives</p>
              </div>
              <div className="rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/50 p-2.5 hover:border-[var(--color-gold)] transition-colors">
                <p className="font-bold text-[var(--color-burgundy)]">Srishti Aggarwal</p>
                <p className="mt-0.5 text-muted-foreground">Racks &amp; book donations</p>
              </div>
              <div className="rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/50 p-2.5 hover:border-[var(--color-gold)] transition-colors">
                <p className="font-bold text-[var(--color-burgundy)]">SEWA Bharti</p>
                <p className="mt-0.5 text-muted-foreground">Center venue partner</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Stat Tiles */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 p-5 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-burgundy)]/10 text-[var(--color-burgundy)]">
                <Library className="size-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[var(--color-burgundy)] tabular-nums">100+ Books</p>
                <p className="text-xs text-muted-foreground">Shelved and curated on permanent racks</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 p-5 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
                <HeartHandshake className="size-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-foreground">Youth-Led</p>
                <p className="text-xs text-muted-foreground">Peer-driven community literacy blueprint</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.19 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 p-5 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                <Sparkles className="size-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-foreground">Weekly Circles</p>
                <p className="text-xs text-muted-foreground">Regular reading sessions &amp; story time</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlights: 4 Clean Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {readingRoom.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-panel rounded-xl border border-[var(--color-gold)]/25 bg-card/70 p-4 shadow-xs hover:shadow-md transition-all"
            >
              <span className="text-2xl" role="img" aria-label={highlight.title}>
                {highlight.emoji}
              </span>
              <h4 className="mt-2 text-sm font-bold text-foreground">{highlight.title}</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{highlight.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo & Video Gallery */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6"
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-burgundy)] flex items-center gap-2">
                <Users className="size-5 text-[var(--color-gold)]" />
                <span>On-Ground Media Gallery</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Moments from the Shakurpur Reading Room, Book Bank setup &amp; Teacher Training workshops.
              </p>
            </div>
          </motion.div>

          <PhotoCarousel
            items={carouselItems}
            label="Reading Room and Teacher Training photos and videos"
            aspectClassName="aspect-[4/3] sm:aspect-[16/9]"
            sizes="(max-width: 1152px) 100vw, 1104px"
          />
        </div>
      </div>
    </section>
  );
}

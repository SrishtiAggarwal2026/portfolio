"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, MapPin, Mic2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Sparkles as SparkleField } from "@/components/motion/sparkles";
import { TextReveal } from "@/components/motion/text-reveal";
import { FeaturedPerformancePieces } from "@/components/voices/FeaturedPerformancePieces";
import { PublicPhotoGallery } from "@/components/gallery/public-photo-gallery";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { voicesPage } from "@/data/site";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";

type VoicesPageProps = {
  galleryImages: PublicGalleryImage[];
};

export default function VoicesPage({ galleryImages }: VoicesPageProps) {
  return (
    <div className="flex min-w-0 flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-charcoal)] pt-28 pb-20 text-primary-foreground sm:pt-36 sm:pb-24 md:pt-40 md:pb-28">
        <SparkleField count={34} seed={23} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[1] mx-auto max-w-4xl px-4 text-center sm:px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] backdrop-blur-md">
            <Mic2 className="size-3.5" /> Slam Poetry &amp; Creative Advocacy
          </div>
          <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-[var(--color-cream)] sm:text-5xl md:text-6xl">
            <TextReveal text="Where Stories Become Stanzas" delay={0.2} />
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
            {voicesPage.heroSub}
          </p>
        </motion.div>
      </section>

      {/* Creative Pipeline: 4 Steps */}
      <section className="w-full mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
            Creative Pipeline
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-burgundy)] md:text-4xl">
            How Stories Become Poetry
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A consent-first transformation from private living room conversations to public advocacy stages.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {voicesPage.flow.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-panel rounded-2xl border border-[var(--color-gold)]/30 bg-card/85 p-5 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="flex size-7 items-center justify-center rounded-full bg-[var(--color-burgundy)] text-xs font-bold text-white shadow-2xs">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>

              {i < voicesPage.flow.length - 1 ? (
                <div className="mt-4 hidden lg:flex justify-end text-[var(--color-gold)]/50" aria-hidden>
                  <ArrowRight className="size-4" />
                </div>
              ) : (
                <div className="mt-4 hidden lg:flex justify-end text-emerald-600 dark:text-emerald-400" aria-hidden>
                  <CheckCircle2 className="size-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spotlight Stanzas: Featured Performance Pieces */}
      <FeaturedPerformancePieces />

      {/* Featured Stage Performance Video */}
      <section className="w-full mx-auto min-w-0 max-w-5xl px-4 py-14 sm:px-6 md:py-20 border-t border-[var(--color-gold)]/20">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Bal Vivah — A Testimony in Verse
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adapted from firsthand testimonies documented during weekly on-ground listening circles in Delhi-NCR. This spoken-word performance captures the emotional urgency, human dignity, and grassroots push against child marriage.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-cream)]/70 px-3 py-1 text-xs font-medium text-foreground">
                Original Spoken-Word Composition · Srishti Aggarwal
              </span>
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
      </section>

      {/* Visual Archive Gallery */}
      <section className="min-w-0 border-y border-[var(--color-gold)]/20 bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
              Visual Archive
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-burgundy)] md:text-4xl">
              Performance &amp; Field Gallery
            </h2>
          </motion.div>
          <div className="mt-6">
            <PublicPhotoGallery images={galleryImages} variant="masonry" />
          </div>
        </div>
      </section>

      {/* Appearances Table */}
      <section className="w-full mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
            Schedule
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-burgundy)] md:text-4xl">
            Stage Appearances
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 min-w-0 overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 bg-card shadow-xs"
        >
          <Table>
            <TableHeader className="bg-[var(--color-cream)]/50">
              <TableRow>
                <TableHead className="font-semibold text-foreground">Event</TableHead>
                <TableHead className="font-semibold text-foreground">Date</TableHead>
                <TableHead className="font-semibold text-foreground">Venue</TableHead>
                <TableHead className="text-right font-semibold text-foreground">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {voicesPage.performances.map((row) => (
                <TableRow key={row.event} className="hover:bg-[var(--color-cream)]/30 transition-colors">
                  <TableCell className="font-semibold text-foreground">{row.event}</TableCell>
                  <TableCell className="text-muted-foreground flex items-center gap-1.5 text-xs sm:text-sm">
                    <Calendar className="size-3.5 text-[var(--color-burgundy)]" /> {row.date}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-xs sm:text-sm">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5 text-[var(--color-gold)]" /> {row.venue}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={row.status === "Upcoming" ? "default" : "secondary"}
                      className={row.status === "Upcoming" ? "bg-emerald-700 text-white hover:bg-emerald-800 text-[11px]" : "bg-muted text-muted-foreground text-[11px]"}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </section>

      {/* Direct CTA */}
      <section className="border-t border-[var(--color-gold)]/20 bg-[var(--color-paper)] py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/60 p-8 sm:p-10 text-center shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[var(--color-burgundy)]/10 text-[var(--color-burgundy)] mb-4">
              <Sparkles className="size-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-burgundy)] sm:text-3xl">
              Host a Performance or Share a Story
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Bring slam poetry to your school, festival, or community circle.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-burgundy)] px-6 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[var(--color-burgundy)]/90 transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                Get in Touch <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

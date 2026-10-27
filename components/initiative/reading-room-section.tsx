"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Library,
  Play,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { readingRoom } from "@/data/site";

type MediaItem = (typeof readingRoom.media)[number];

export function ReadingRoomSection() {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);

  const currentMedia: MediaItem | null =
    selectedMediaIndex !== null ? readingRoom.media[selectedMediaIndex] : null;

  const handlePrev = () => {
    if (selectedMediaIndex === null) return;
    setSelectedMediaIndex(
      (selectedMediaIndex - 1 + readingRoom.media.length) % readingRoom.media.length
    );
  };

  const handleNext = () => {
    if (selectedMediaIndex === null) return;
    setSelectedMediaIndex((selectedMediaIndex + 1) % readingRoom.media.length);
  };

  return (
    <section id="reading-room" className="scroll-mt-20 border-t border-[var(--color-gold)]/25 bg-[var(--color-paper)] py-16 md:py-24">
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
        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-stretch">
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

          {/* Media Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
            {readingRoom.media.map((item, index) => (
              <motion.button
                key={item.src}
                type="button"
                onClick={() => setSelectedMediaIndex(index)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--color-gold)]/30 bg-muted text-left transition-all hover:border-[var(--color-gold)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    placeholder="blur"
                    blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative size-full bg-slate-950">
                    <video
                      src={`${item.src}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={item.alt}
                      className="size-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                      <div className="flex size-11 items-center justify-center rounded-full bg-[var(--color-burgundy)] text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play className="size-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-black/80 p-2 text-white opacity-90 transition-opacity">
                  <div className="flex items-center justify-between text-[11px] font-medium">
                    <span className="truncate">{item.alt}</span>
                    <Badge variant="outline" className="ml-1 shrink-0 border-white/40 bg-black/30 text-[9px] text-white">
                      {item.type === "video" ? "Video" : "Photo"}
                    </Badge>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      <Dialog open={selectedMediaIndex !== null} onOpenChange={(open) => !open && setSelectedMediaIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[92vh] w-full max-w-[min(calc(100vw-2rem),32rem)] sm:max-w-[min(calc(100vw-2rem),36rem)] border border-slate-800 bg-slate-950 p-3 sm:p-4 text-slate-100 shadow-2xl rounded-2xl outline-none"
        >
          {currentMedia && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{currentMedia.alt}</DialogTitle>
                <DialogDescription>Shakurpur Reading Room media item</DialogDescription>
              </DialogHeader>

              {/* Clean Close Button */}
              <DialogClose
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="absolute right-3 top-3 z-30 size-8 rounded-full bg-slate-800/80 text-slate-300 backdrop-blur-xs hover:bg-slate-700 hover:text-white"
                  >
                    <X className="size-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                }
              />

              {/* Media Display Container */}
              <div className="relative flex h-[min(68vh,520px)] min-h-[280px] w-full items-center justify-center overflow-hidden rounded-xl bg-black/60 p-1">
                {currentMedia.type === "image" ? (
                  <Image
                    key={currentMedia.src}
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 90vw, 500px"
                    priority
                  />
                ) : (
                  <video
                    key={currentMedia.src}
                    src={currentMedia.src}
                    controls
                    autoPlay
                    playsInline
                    controlsList="nodownload"
                    className="max-h-full max-w-full rounded-lg object-contain"
                  />
                )}
              </div>

              {/* Footer Controls */}
              <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-800/80 pt-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handlePrev}
                  className="gap-1 text-xs shrink-0 border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  <ChevronLeft className="size-4" />
                  Previous
                </Button>

                <div className="min-w-0 flex-1 px-2 text-center">
                  <p className="truncate text-xs font-medium text-slate-200">{currentMedia.alt}</p>
                  <p className="text-[11px] tabular-nums text-slate-400">
                    {selectedMediaIndex! + 1} of {readingRoom.media.length}
                  </p>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleNext}
                  className="gap-1 text-xs shrink-0 border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  Next
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

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
  Play,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { readingRoom } from "@/data/site";
import { cn } from "@/lib/utils";

type MediaItem = (typeof readingRoom.media)[number];

export function ReadingRoomSection() {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);

  const currentMedia: MediaItem | null =
    selectedMediaIndex !== null ? readingRoom.media[selectedMediaIndex] : null;

  const isPortrait = currentMedia?.type === "video";

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
    <section id="reading-room" className="scroll-mt-20 border-t border-border bg-gradient-to-b from-background via-secondary/20 to-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header Badge & Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-burgundy)] backdrop-blur-xs">
            <BookOpen className="size-3.5" aria-hidden />
            <span>Community Literacy Initiative</span>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
            {readingRoom.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            A joint initiative by <strong className="font-semibold text-foreground">Srishti Aggarwal</strong> &amp;{" "}
            <strong className="font-semibold text-foreground">Vedika (Kitaab4U)</strong> in collaboration with{" "}
            <strong className="font-semibold text-foreground">SEWA Bharti</strong> in Shakurpur, Delhi.
          </p>
        </div>

        {/* Narrative & Story Cards Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <Card className="flex flex-col border-border/80 bg-card/60 shadow-sm backdrop-blur-xs lg:col-span-7">
            <CardHeader>
              <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-gold)]">
                <Building2 className="size-4" />
                <span>Shakurpur, Delhi · SEWA Bharti Center</span>
              </div>
              <CardTitle className="font-[family-name:var(--font-playfair)] text-2xl text-foreground">
                Expanding Access to Educational Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {readingRoom.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          {/* Featured Summary Callout & Media */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-cream)]/50 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-burgundy)] text-white shadow-xs">
                  <HeartHandshake className="size-5" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--color-burgundy)]">
                    Collaborative Youth Leadership
                  </h3>
                  <p className="text-xs text-muted-foreground">Srishti Aggarwal &amp; Vedika</p>
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex size-2 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  <span>
                    <strong>Kitaab4U (Vedika):</strong> Community book drive collection across local networks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex size-2 shrink-0 rounded-full bg-[var(--color-burgundy)]" />
                  <span>
                    <strong>Srishti Aggarwal:</strong> Donated structural book racks and contributed additional educational books.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 flex size-2 shrink-0 rounded-full bg-emerald-600" />
                  <span>
                    <strong>SEWA Bharti:</strong> Venue partner in Shakurpur providing safe space for regular reading circles.
                  </span>
                </li>
              </ul>
            </div>

            {/* Featured Image Spotlight */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
              <Image
                src="/books/Reading room 1.jpeg"
                alt="Children reading in Shakurpur Reading Room"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs font-semibold drop-shadow">Community Reading Space</p>
                <p className="text-[11px] text-white/85 drop-shadow">Regular reading circles and literacy sessions for children</p>
              </div>
            </div>

            {/* Quick Stats banner */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl border border-border bg-card p-3.5 text-center shadow-2xs">
                <div className="text-xl sm:text-2xl font-bold text-[var(--color-burgundy)] font-[family-name:var(--font-playfair)]">
                  100+
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">Books Collected &amp; Shelved</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-3.5 text-center shadow-2xs">
                <div className="text-xl sm:text-2xl font-bold text-[var(--color-gold)] font-[family-name:var(--font-playfair)]">
                  Shakurpur
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">Community Focus Area</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-[var(--color-gold)]" />
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--color-burgundy)]">
              Key Highlights
            </h3>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {readingRoom.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-border/70 bg-card transition-all hover:border-[var(--color-gold)]/40 hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                    <span className="text-2xl" role="img" aria-label={highlight.title}>
                      {highlight.emoji}
                    </span>
                    <CardTitle className="text-base font-semibold text-foreground">
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {highlight.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo & Video Gallery */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--color-burgundy)] flex items-center gap-2">
                <Users className="size-5 text-[var(--color-gold)]" />
                <span>Reading Room Gallery &amp; Video</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                On-ground moments at the Shakurpur Reading Room &amp; Book Bank initialization.
              </p>
            </div>
          </div>

          {/* Media Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
            {readingRoom.media.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setSelectedMediaIndex(index)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted text-left transition-all hover:border-[var(--color-gold)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative size-full bg-slate-950">
                    <video
                      src={`${item.src}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={item.alt}
                      className="size-full object-cover opacity-85 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                      <div className="flex size-11 items-center justify-center rounded-full bg-[var(--color-burgundy)] text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play className="size-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 text-white opacity-90 transition-opacity">
                  <div className="flex items-center justify-between text-[11px] font-medium">
                    <span className="truncate">{item.alt}</span>
                    <Badge variant="outline" className="ml-1 shrink-0 border-white/40 bg-black/30 text-[9px] text-white">
                      {item.type === "video" ? "Video" : "Photo"}
                    </Badge>
                  </div>
                </div>
              </button>
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

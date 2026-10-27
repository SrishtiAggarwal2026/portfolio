"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, HeartHandshake, Sparkles, Users } from "lucide-react";
import { Timeline } from "@/components/aceternity/timeline";
import { TimelinePhasePhoto } from "@/components/gallery/timeline-phase-photo";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { TextReveal } from "@/components/motion/text-reveal";
import { timelineData } from "@/data/site";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";

const imageLabels: Record<string, string> = {
  p1: "Early volunteering with Hamari Pahchan NGO — grassroots welfare intake across Delhi settlements",
  p2: "Rights to Reality Clinic formalisation — baseline surveys & peer volunteer training in Mahipalpur and Noida",
  p3: "Voices Unheard launch — adapting 100+ community narratives into slam poetry performed on premier stages",
  p4: "2026 Winner — Official International Baccalaureate Global Youth Action Fund USD 2,500 grant announcement",
};

type TimelinePageProps = {
  galleryImages: PublicGalleryImage[];
};

export default function TimelinePage({ galleryImages }: TimelinePageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenPhoto = (img: PublicGalleryImage) => {
    const idx = galleryImages.findIndex((item) => item.src === img.src);
    if (idx !== -1) {
      setLightboxIndex(idx);
    } else {
      setLightboxIndex(0);
    }
  };

  const getPhaseImages = (phaseId: string) => {
    let primary: PublicGalleryImage | undefined = undefined;
    const aux: PublicGalleryImage[] = [];

    if (galleryImages.length > 0) {
      if (phaseId === "p1") {
        primary =
          galleryImages.find((img) => img.filename.toLowerCase().includes("img_4851")) ||
          galleryImages.find((img) => img.filename.toLowerCase().includes("img_4850")) ||
          galleryImages[0];

        const a1 = galleryImages.find((img) => img.filename.toLowerCase().includes("img_4850"));
        const a2 = galleryImages.find((img) => img.filename.toLowerCase().includes("img_4853"));
        const a3 = galleryImages.find((img) => img.filename.toLowerCase().includes("img_4855"));
        if (a1 && a1.src !== primary.src) aux.push(a1);
        if (a2 && a2.src !== primary.src) aux.push(a2);
        if (a3 && a3.src !== primary.src) aux.push(a3);
      } else if (phaseId === "p2") {
        primary =
          galleryImages.find((img) => img.filename.toLowerCase().includes("community_dialogue")) ||
          galleryImages.find((img) => img.filename.toLowerCase().includes("2026_work_1")) ||
          galleryImages[1];

        const a1 = galleryImages.find((img) => img.filename.toLowerCase().includes("2026_work_1"));
        const a2 = galleryImages.find((img) => img.filename.toLowerCase().includes("2026_work_2"));
        const a3 = galleryImages.find((img) => img.filename.toLowerCase().includes("2026_work_3"));
        if (a1 && a1.src !== primary.src) aux.push(a1);
        if (a2 && a2.src !== primary.src) aux.push(a2);
        if (a3 && a3.src !== primary.src) aux.push(a3);
      } else if (phaseId === "p3") {
        primary =
          galleryImages.find((img) => img.filename.toLowerCase().includes("voices_stage_duet")) ||
          galleryImages.find((img) => img.filename.toLowerCase().includes("voices_performance")) ||
          galleryImages[2];

        const a1 = galleryImages.find((img) => img.filename.toLowerCase().includes("voices_performance"));
        const a2 = galleryImages.find((img) => img.filename.toLowerCase().includes("voices_ensemble"));
        if (a1 && a1.src !== primary.src) aux.push(a1);
        if (a2 && a2.src !== primary.src) aux.push(a2);
      } else if (phaseId === "p4") {
        primary =
          galleryImages.find((img) => img.filename.toLowerCase().includes("ib_winner")) ||
          galleryImages.find((img) => img.filename.toLowerCase().includes("img-1")) ||
          galleryImages[3];

        const a1 = galleryImages.find((img) => img.filename.toLowerCase().includes("img-1"));
        const a2 = galleryImages.find((img) => img.filename.toLowerCase().includes("2026_work_6"));
        const a3 = galleryImages.find((img) => img.filename.toLowerCase().includes("2026_work_5"));
        if (a1 && a1.src !== primary.src) aux.push(a1);
        if (a2 && a2.src !== primary.src) aux.push(a2);
        if (a3 && a3.src !== primary.src) aux.push(a3);
      }
    }

    return { primary, aux };
  };

  return (
    <div className="flex min-w-0 flex-col">
      {/* Lightbox for full screen photo inspection */}
      <GalleryLightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-paper)] pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 border-b border-[var(--color-gold)]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold)]/10 via-transparent to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[1] mx-auto min-w-0 max-w-6xl px-4 sm:px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-burgundy)] shadow-xs">
            <Sparkles className="size-3.5 text-[var(--color-gold)]" />
            12+ Months of Advocacy &amp; Action
          </div>

          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] sm:text-4xl md:text-5xl lg:text-6xl">
            <TextReveal text="Project Timeline" delay={0.15} />
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            From listening circles on the ground to slam poetry on public stages and international grant recognition — tracing the key milestones of Rights to Reality and Voices Unheard.
          </p>

          {/* Quick Stat Pill Bar */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <div className="flex items-center gap-2.5 rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 px-4 py-2.5 shadow-xs backdrop-blur-sm">
              <Calendar className="size-4 text-[var(--color-burgundy)]" />
              <div>
                <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">Duration</p>
                <p className="text-xs sm:text-sm font-bold text-foreground">12+ Active Months</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 px-4 py-2.5 shadow-xs backdrop-blur-sm">
              <Users className="size-4 text-[var(--color-burgundy)]" />
              <div>
                <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">Beneficiaries</p>
                <p className="text-xs sm:text-sm font-bold text-foreground">2,000+ Women</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 px-4 py-2.5 shadow-xs backdrop-blur-sm">
              <Award className="size-4 text-[var(--color-gold)]" />
              <div>
                <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">Global Recognition</p>
                <p className="text-xs sm:text-sm font-bold text-foreground">IB Global Winner</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-[var(--color-gold)]/30 bg-card/80 px-4 py-2.5 shadow-xs backdrop-blur-sm">
              <HeartHandshake className="size-4 text-emerald-600" />
              <div>
                <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">Partners</p>
                <p className="text-xs sm:text-sm font-bold text-foreground">Hamari Pahchan &amp; UP Ministry</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Interactive Timeline Section */}
      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Timeline
          phases={timelineData.phases}
          renderImage={(phase) => {
            const { primary, aux } = getPhaseImages(phase.id);
            return (
              <TimelinePhasePhoto
                image={primary}
                auxImages={aux}
                label={imageLabels[phase.id] ?? "Timeline phase image"}
                alt={`${phase.title} — ${phase.headline || "Field documentation photo"}`}
                location={phase.location}
                badge={phase.badge}
                onOpenLightbox={handleOpenPhoto}
              />
            );
          }}
        />
      </section>
    </div>
  );
}

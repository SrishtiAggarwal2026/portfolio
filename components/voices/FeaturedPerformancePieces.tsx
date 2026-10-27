"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  Mic2,
  Quote,
  Sparkles,
  X,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";

export type PerformancePiece = {
  id: string;
  pieceNumber: string;
  title: string;
  theme: string;
  venue: string;
  src: string;
  excerpt: string;
  fullStanzas: string[];
  origin: string;
  impactStat: string;
  focusArea: string;
  ethicalStandard: string;
};

const pieces: PerformancePiece[] = [
  {
    id: "piece-1",
    pieceNumber: "Piece 01",
    title: "Where Silence Breaks",
    theme: "Maternal Health & PMMVY Rights",
    venue: "School Auditorium & Youth Assemblies",
    src: "/images/voices_performance_compassion.jpg",
    excerpt:
      "Silence is not absence — it is a room waiting for a microphone. We sat on woven mats and counted heartbeats before we counted forms.",
    fullStanzas: [
      "They told us patience is a woman’s crown,\nbut crowns do not buy medicine when the sun goes down.",
      "We sat on woven mats and counted heartbeats before we counted forms —\nsilence is not absence;\nit is a room waiting for a microphone.",
      "A direct benefit transfer cannot rewrite every past,\nbut when a mother holds her own account,\nthe silence breaks at last.",
    ],
    origin:
      "Adapted from over 100 on-ground listening sessions with young mothers across Anganwadi Centres in Noida (Sector 8) and Mahipalpur. Srishti documented how practical barriers to the Pradhan Mantri Matru Vandana Yojana (PMMVY) were not simply bureaucratic delays — they were silent crises of personal dignity and economic autonomy. The piece explores the journey from quiet kitchen-table conversations to claiming constitutional entitlements.",
    impactStat: "100+ Lived Testimonies",
    focusArea: "Noida Sector 8 & Mahipalpur",
    ethicalStandard: "Informed Written Consent",
  },
  {
    id: "piece-2",
    pieceNumber: "Piece 02",
    title: "Living Room to Stage",
    theme: "Ethical Storytelling & Informed Consent",
    venue: "The British School Main Stage",
    src: "/images/voices_stage_duet.jpg",
    excerpt:
      "What we whisper in circles, we owe to the stage — with clear consent, with patient care, never claiming another’s grief as our own.",
    fullStanzas: [
      "A story is not borrowed fabric to wear for an applause;\nit is a sacred covenant with its own unwritten laws.",
      "We asked before we noted; we waited for the nod —\ntranslating quiet kitchen truths into the public broad.",
      "What we whisper in circles, we owe to the stage —\nwith consent, with dignity, line by measured page.",
    ],
    origin:
      "Addresses the core responsibility of student advocates: ensuring that marginalized communities are never treated as artistic fodder or passive subjects. Before any stanza was adapted, every community participant reviewed and consented to the documentation. Srishti trained five student peer volunteers in informed consent protocols so that human relationships always precede stage performance.",
    impactStat: "100% Consent-First Intake",
    focusArea: "Peri-urban Delhi Communities",
    ethicalStandard: "Dignity-First Intake Protocol",
  },
  {
    id: "piece-3",
    pieceNumber: "Piece 03",
    title: "The Architecture of Dignity",
    theme: "Grassroots Resistance & Legal Literacy",
    venue: "Delhi Youth Festival & Community Centers",
    src: "/images/voices_ensemble_uplift.jpg",
    excerpt:
      "We enroll schemes in the morning; we perform truth in the evening. A ration card is not paper — it is the roof over tomorrow.",
    fullStanzas: [
      "A stamp upon a paper will not mend a broken door,\nbut knowing that the law is yours reshapes the floor.",
      "We enroll schemes in the morning; we perform truth in the evening —\nnot as distant spectators, but as sisters in the believing.",
      "Brick by documented brick, the silent city clears;\nwe build the architecture of dignity from our shared tears.",
    ],
    origin:
      "Written in tribute to frontline Anganwadi workers, community mothers, and grassroots organizers across Israel Camp and Inder Camp in Mahipalpur. Through weekly Rights to Reality clinics, families learn to navigate social protection paperwork, turning daunting bureaucratic hurdles into collective legal empowerment and active citizenship.",
    impactStat: "2,000+ Women Reached",
    focusArea: "Inder & Israel Camps, Mahipalpur",
    ethicalStandard: "Constitutional Literacy",
  },
];

export function FeaturedPerformancePieces() {
  const [activeModalPiece, setActiveModalPiece] = useState<PerformancePiece | null>(null);

  // Prevent background scroll when modal is open and handle Escape key
  useEffect(() => {
    if (activeModalPiece) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveModalPiece(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeModalPiece]);

  return (
    <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24 border-t border-[var(--color-gold)]/20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-burgundy)] shadow-xs">
          <Sparkles className="size-3.5 text-[var(--color-gold)]" />
          Spotlight Stanzas
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-burgundy)] dark:text-foreground">
          Featured Performance Pieces
        </h2>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          Transforming firsthand community testimonies into spoken-word slam poetry performed at schools, youth summits, and literary festivals.
        </p>
      </motion.div>

      {/* 3-Column Luxury Card Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pieces.map((piece, index) => (
          <motion.article
            key={piece.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-gold)]/30 bg-card/95 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[var(--color-gold)] hover:shadow-2xl hover:shadow-[rgba(201,168,76,0.15)]"
          >
            <div>
              {/* Image Frame with Aspect Ratio & Vignette */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted border-b border-[var(--color-gold)]/20">
                <Image
                  src={piece.src}
                  alt={piece.title}
                  fill
                  placeholder="blur"
                  blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold)] backdrop-blur-md border border-[var(--color-gold)]/30 shadow-xs">
                    {piece.pieceNumber}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md border border-white/20">
                    <Mic2 className="size-3 text-[var(--color-gold)]" />
                    Stage Poetry
                  </span>
                </div>

                {/* Overlay Title at bottom of photo for cinematic feel */}
                <div className="absolute bottom-3.5 inset-x-4 pointer-events-none">
                  <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                    {piece.title}
                  </h3>
                  <p className="text-xs text-[var(--color-gold)] font-medium mt-0.5">
                    {piece.theme}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* Poetic Stanza Excerpt Blockquote */}
                <div className="relative rounded-2xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]/50 dark:bg-muted/40 p-4">
                  <Quote className="absolute -top-2.5 left-4 size-5 text-[var(--color-gold)] fill-[var(--color-gold)]/20" />
                  <p className="pt-1.5 text-xs sm:text-sm italic text-foreground/90 font-serif leading-relaxed">
                    &ldquo;{piece.excerpt}&rdquo;
                  </p>
                </div>

                {/* Origin Story Context */}
                <div className="space-y-1.5">
                  <p className="text-[0.7rem] uppercase font-bold tracking-wider text-muted-foreground">
                    Story Origin &amp; Context
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {piece.origin}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 pt-0 border-t border-border/50 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-4">
                <span className="inline-flex items-center gap-1 truncate max-w-[170px]">
                  <MapPin className="size-3 text-[var(--color-gold)] shrink-0" />
                  <span className="truncate">{piece.venue}</span>
                </span>
                <span className="font-semibold text-foreground/90 shrink-0">
                  {piece.impactStat}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalPiece(piece)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 py-2.5 text-xs font-bold text-[var(--color-burgundy)] transition-all hover:bg-[var(--color-burgundy)] hover:text-white hover:border-[var(--color-burgundy)] shadow-xs cursor-pointer"
              >
                <BookOpen className="size-3.5" />
                Read Full Stanzas &amp; Backstory
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* World-Class Poetry & Backstory Modal Dialog */}
      <AnimatePresence>
        {activeModalPiece && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Rich Dark Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveModalPiece(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative z-10 flex flex-col w-full max-w-2xl max-h-[92vh] overflow-hidden rounded-3xl border border-[var(--color-gold)]/50 bg-[var(--color-paper)] dark:bg-[#181214] shadow-2xl"
            >
              {/* Clean Top Navigation Bar */}
              <div className="shrink-0 border-b border-[var(--color-gold)]/20 bg-card/95 px-5 py-3.5 sm:px-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/40 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[var(--color-burgundy)] dark:text-[var(--color-gold)]">
                    {activeModalPiece.pieceNumber}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium hidden sm:inline">
                    {activeModalPiece.theme}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalPiece(null)}
                  className="flex size-8 items-center justify-center rounded-full bg-muted/80 hover:bg-[var(--color-burgundy)] hover:text-white transition-colors cursor-pointer text-foreground/80"
                  aria-label="Close dialog"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 overscroll-contain">
                {/* 1. Title & Performance Meta */}
                <div>
                  <h3
                    id="modal-title"
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] dark:text-foreground"
                  >
                    {activeModalPiece.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium flex items-center gap-1.5 mt-1">
                    <Mic2 className="size-3.5 text-[var(--color-gold)] shrink-0" />
                    <span>Performed live by Srishti Aggarwal · {activeModalPiece.venue}</span>
                  </p>
                </div>

                {/* 2. FULL PROMINENT PERFORMANCE PHOTOGRAPH (Clearly Visible, Full Color & Natural Contrast) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-[var(--color-gold)]/40 shadow-xl bg-black">
                  <Image
                    src={activeModalPiece.src}
                    alt={activeModalPiece.title}
                    fill
                    placeholder="blur"
                    blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 640px"
                    priority
                  />
                  {/* Subtle top floating badge for context */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold)] border border-[var(--color-gold)]/40 shadow-md">
                      Stage Photography
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white/90 border border-white/20 shadow-md">
                      {activeModalPiece.impactStat}
                    </span>
                  </div>
                </div>

                {/* 3. Stanza Anthology Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-burgundy)] dark:text-[var(--color-gold)]">
                    <Quote className="size-4" />
                    <span>Complete Slam Poetry Stanzas</span>
                  </div>

                  <div className="space-y-4 rounded-2xl border-l-4 border-l-[var(--color-gold)] border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/70 dark:bg-white/5 p-5 sm:p-6 shadow-xs">
                    {activeModalPiece.fullStanzas.map((stanza, idx) => (
                      <p
                        key={idx}
                        className="font-serif italic text-base sm:text-lg leading-relaxed text-foreground whitespace-pre-line"
                      >
                        &ldquo;{stanza}&rdquo;
                      </p>
                    ))}
                  </div>
                </div>

                {/* 4. Grassroots Context & Origin Story */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-burgundy)] dark:text-[var(--color-gold)]">
                    <HeartHandshake className="size-4" />
                    <span>Grassroots Origin &amp; Field Realities</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground bg-card/60 rounded-2xl p-4 sm:p-5 border border-border/80">
                    {activeModalPiece.origin}
                  </p>
                </div>

                {/* 5. Field Verification & Impact Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="rounded-2xl border border-[var(--color-gold)]/30 bg-card p-3.5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Focus Area
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                      {activeModalPiece.focusArea}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--color-gold)]/30 bg-card p-3.5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Documented Reach
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">
                      {activeModalPiece.impactStat}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--color-gold)]/30 bg-card p-3.5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Ethical Standard
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground mt-0.5 flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-3.5 shrink-0" />
                      {activeModalPiece.ethicalStandard}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Sticky Footer */}
              <div className="shrink-0 border-t border-[var(--color-gold)]/25 bg-card/95 px-5 py-3.5 sm:px-7 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/initiative"
                  onClick={() => setActiveModalPiece(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-burgundy)] dark:text-[var(--color-gold)] hover:underline"
                >
                  Explore Rights to Reality Clinic Pillars
                  <ArrowRight className="size-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveModalPiece(null)}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-burgundy)] px-5 py-2 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  Close Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

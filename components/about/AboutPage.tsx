"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Mic2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { PublicPhotoGallery } from "@/components/gallery/public-photo-gallery";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { TextReveal } from "@/components/motion/text-reveal";
import { about, siteMeta, achievements } from "@/data/site";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const icons = [BookOpen, ShieldCheck, HeartHandshake, GraduationCap, Mic2, Globe2];

const journeyChapters = [
  {
    id: "beginning",
    chapter: "Chapter 01",
    period: "November 2024",
    title: "The First Listening Circles: Groundwork in Delhi Slums",
    story: about.story.beginning,
    location: "Slum settlements across Delhi",
    badge: "Grassroots Foundation",
    highlights: [
      "Assisted women directly with birth certificates, ID documentation & welfare forms",
      "Identified practical and digital hurdles that prevented families from accessing legal rights",
      "Shifted from routine documentation to active, empathetic listening circles",
    ],
    imageLabel: "Firsthand community dialogue session in Delhi peri-urban settlement",
    imageAlt: "Srishti conducting community advocacy session in Delhi",
    imageMatch: ["community_dialogue", "4851", "4850"],
  },
  {
    id: "turning",
    chapter: "Chapter 02",
    period: "Mid 2025",
    title: "The Turning Point: 100+ Stories & The Silence of Privilege",
    story: about.story.turning,
    location: "Mahipalpur & Peri-urban Delhi",
    badge: "Ethical Listening",
    highlights: [
      "Documented 100+ firsthand life stories with rigorous informed consent",
      "Observed the stark gap between grassroots struggles and mainstream urban discourse",
      "Committed to bringing marginalized women's voices into premier public forums",
    ],
    imageLabel: "One-on-one story collection and listening circle with community mother",
    imageAlt: "Story collection and field listening session with informed consent",
    imageMatch: ["community_hearth", "5800", "5798"],
  },
  {
    id: "voices",
    chapter: "Chapter 03",
    period: "Late 2025",
    title: "Voices Unheard: Translating Grassroots Truth to Stage Verse",
    story: about.story.voices,
    location: "The British School & Lit Festivals",
    badge: "Creative Advocacy",
    highlights: [
      "Adapted 10 powerful community narratives into original spoken-word slam poems",
      "Performed live across school assemblies, cultural summits, and literary evenings",
      "Recruited and trained 5 student peer volunteers in ethical storytelling and consent protocols",
    ],
    imageLabel: "Live slam poetry performance at The British School auditorium",
    imageAlt: "Voices Unheard slam poetry performance on stage",
    imageMatch: ["voices_stage", "voices_performance", "voices_ensemble"],
  },
  {
    id: "clinic",
    chapter: "Chapter 04",
    period: "2026 & Beyond",
    title: "Rights to Reality: Institutional Reach & Global Recognition",
    story: about.story.clinic,
    location: "Noida Sector 8, Vasant Kunj & Mahipalpur",
    badge: "Global Impact & Scale",
    highlights: [
      "Expanded Rights to Reality Advocacy Clinic to multiple Anganwadi Centres",
      "Winner of International Baccalaureate (IB) Global Youth Action Fund (USD 2,500 grant)",
      "Acknowledged by UP Ministry of Women's Welfare — reached 2,000+ women & 800+ children",
    ],
    imageLabel: "Advocacy clinic session with mothers at Noida Sector 8 Anganwadi Centre",
    imageAlt: "Welfare scheme enrollment and awareness session at Anganwadi Clinic",
    imageMatch: ["2026_work_6", "2026_work_2", "ib_winner"],
  },
];

type AboutPageProps = {
  galleryImages: PublicGalleryImage[];
};

export default function AboutPage({ galleryImages }: AboutPageProps) {
  const getChapterImage = (matches: string[], fallbackIdx: number): PublicGalleryImage | undefined => {
    if (!galleryImages || galleryImages.length === 0) return undefined;
    for (const match of matches) {
      const found = galleryImages.find((img) =>
        img.filename.toLowerCase().includes(match.toLowerCase())
      );
      if (found) return found;
    }
    return galleryImages[fallbackIdx % galleryImages.length];
  };

  return (
    <div className="flex min-w-0 flex-col">
      {/* 1. HERO: Clean visual founder intro with smooth animations */}
      <section className="relative overflow-hidden bg-[var(--color-paper)] pt-24 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[1] mx-auto flex min-w-0 max-w-5xl flex-col items-center gap-6 px-4 text-center sm:gap-7 sm:px-6"
        >
          <div className="relative mx-auto size-[min(100vw-2rem,320px)] sm:size-[340px] max-w-full shrink-0">
            <div className="absolute -inset-2.5 rounded-full bg-[var(--color-gold)]/15 blur-xl animate-pulse" aria-hidden />
            <div className="relative size-full overflow-hidden rounded-full border-2 border-[var(--color-gold)]/40 shadow-2xl ring-4 ring-background">
              <ImageCircle />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-burgundy)] shadow-xs">
              Founder &amp; Youth Advocate
            </div>
            <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
              <TextReveal text={siteMeta.founder} delay={0.15} />
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {about.badges.map((b) => (
                <Badge
                  key={b}
                  variant="secondary"
                  className="border border-[var(--color-gold)]/30 bg-[var(--color-cream)]/80 text-center text-xs text-foreground shadow-xs sm:text-sm hover:border-[var(--color-gold)] transition-colors"
                >
                  {b}
                </Badge>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
              {about.tagline}
            </p>

            {/* Direct LinkedIn Profile Link */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={siteMeta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-button inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/90 px-4 py-2 text-xs sm:text-sm font-bold text-[var(--color-burgundy)] transition-all hover:scale-105"
              >
                <LinkedInIcon className="size-4" />
                <span>Connect with Srishti on LinkedIn</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE FOUNDER'S JOURNEY: Redesigned Editorial Chapters */}
      <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 border-t border-[var(--color-gold)]/20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-burgundy)] shadow-xs">
            <Sparkles className="size-3.5 text-[var(--color-gold)]" />
            The Founder&apos;s Journey
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-burgundy)] dark:text-foreground">
            From Fieldwork to Global Impact
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            How weekly volunteering in Delhi settlements evolved into an international-award-winning movement for maternal welfare and ethical storytelling.
          </p>
        </motion.div>

        {/* Structured Journey Chapters */}
        <div className="space-y-16 md:space-y-24">
          {journeyChapters.map((chapter, index) => {
            const photo = getChapterImage(chapter.imageMatch, index);
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={chapter.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12",
                  isEven && "lg:grid-flow-dense"
                )}
              >
                {/* Narrative Column */}
                <div
                  className={cn(
                    "space-y-4 lg:col-span-7",
                    isEven ? "lg:col-start-6" : "lg:col-start-1"
                  )}
                >
                  {/* Chapter Header Pill */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-burgundy)] px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                      {chapter.chapter}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3 py-0.5 text-xs font-semibold text-[var(--color-burgundy)]">
                      <Calendar className="size-3 text-[var(--color-gold)]" />
                      {chapter.period}
                    </span>
                    <span className="hidden sm:inline-flex rounded-full bg-muted/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {chapter.badge}
                    </span>
                  </div>

                  {/* Chapter Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] dark:text-foreground">
                    {chapter.title}
                  </h3>

                  {/* Rich Narrative Paragraph */}
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground bg-card/60 rounded-2xl p-4 sm:p-5 border border-border/80">
                    {chapter.story}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 pt-1">
                    <p className="text-[0.7rem] uppercase font-bold tracking-wider text-muted-foreground">
                      Key Milestones &amp; Focus:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-foreground/90">
                      {chapter.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Location Chip */}
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5 text-[var(--color-gold)]" />
                    <span>Focus Area: {chapter.location}</span>
                  </div>
                </div>

                {/* Photo Column */}
                <div
                  className={cn(
                    "lg:col-span-5",
                    isEven ? "lg:col-start-1" : "lg:col-start-8"
                  )}
                >
                  <figure className="group relative w-full space-y-2.5">
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-[var(--color-gold)]/35 bg-card shadow-xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[var(--color-gold)]">
                      {photo ? (
                        <Image
                          src={photo.src}
                          alt={chapter.imageAlt}
                          fill
                          placeholder="blur"
                          blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 420px"
                          quality={photo.unoptimized ? undefined : 80}
                          unoptimized={photo.unoptimized}
                        />
                      ) : (
                        <div className="size-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
                          Photo Archive
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                      {/* Top floating pill */}
                      <div className="absolute top-3.5 left-3.5 pointer-events-none">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold)] border border-[var(--color-gold)]/40 shadow-xs">
                          {chapter.chapter}
                        </span>
                      </div>
                    </div>
                    <figcaption className="px-1 text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
                      <span className="mt-0.5 text-[var(--color-gold)]">📷</span>
                      <span>{chapter.imageLabel}</span>
                    </figcaption>
                  </figure>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* 3. CORE VALUES: Clean 6-card grid with 1 sentence each */}
      <section className="border-y border-border bg-secondary/30 py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
              Guiding Principles
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((v, i) => {
              const Icon = icons[i] ?? BookOpen;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
                >
                  <CardSpotlight className="h-full p-5 sm:p-6">
                    <div className="size-11 rounded-xl bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-burgundy)] mb-3">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="font-bold text-foreground text-base sm:text-lg">{v.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </CardSpotlight>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. GLOBAL RECOGNITION & SCHOOL AWARD */}
      <section className="bg-[var(--color-cream)]/20 border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
                <Award className="size-4" /> Global Recognition
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                International Baccalaureate Grantee
              </h2>
              <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">
                {achievements.founderSnippet}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-xs font-bold text-[var(--color-burgundy)]">✓</span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Winner of the IB Global Youth Action Fund receiving approximately USD 2,500 in funding.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-xs font-bold text-[var(--color-burgundy)]">✓</span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Acknowledged by the Uttar Pradesh Ministry of Women’s Welfare, Child Development and Nutrition.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-xs font-bold text-[var(--color-burgundy)]">✓</span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Active on-ground implementation with Hamari Pahchan NGO across Noida and Mahipalpur.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={achievements.ibLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-burgundy)] px-5 py-2 text-xs font-bold text-white shadow-xs hover:brightness-110 transition-all"
                >
                  View Official IB Feature
                  <Globe2 className="size-3.5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--color-gold)]/40 bg-muted shadow-xl">
                <Image
                  src={achievements.schoolImage}
                  alt="Official IB recognition feature by The British School"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Official recognition poster by The British School, New Delhi
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. VISUAL ARCHIVE: Photo Gallery with category tabs */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
              Visual Archive
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              On-Ground Photo Gallery
            </h2>
          </div>
        </motion.div>
        <div>
          <PublicPhotoGallery images={galleryImages} variant="grid" />
        </div>
      </section>

      {/* 6. PARTNERSHIP STRIP */}
      <section className="border-t border-border bg-card py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-center">
          <div className="flex h-16 w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-center text-xs sm:text-sm font-semibold text-muted-foreground hover:border-[var(--color-gold)]/50 transition-colors">
            The British School, New Delhi
          </div>
          <div className="hidden h-10 w-px self-center bg-border md:block" aria-hidden />
          <div className="flex h-16 w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-center text-xs sm:text-sm font-semibold text-muted-foreground hover:border-[var(--color-gold)]/50 transition-colors">
            Hamari Pahchan NGO
          </div>
        </div>
      </section>
    </div>
  );
}

function ImageCircle() {
  return (
    <Image
      src="/profile_pic.jpeg"
      alt="Srishti Aggarwal - Founder"
      fill
      priority
      sizes="(max-width: 640px) 320px, 340px"
      className="object-cover object-[50%_25%]"
    />
  );
}

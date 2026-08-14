"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Mic2,
  ShieldCheck,
  Award,
  ExternalLink,
} from "lucide-react";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { Spotlight } from "@/components/aceternity/spotlight";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { PublicPhotoGallery } from "@/components/gallery/public-photo-gallery";
import { StoryBlockPhoto } from "@/components/gallery/story-block-photo";
import { Badge } from "@/components/ui/badge";
import { about, siteMeta, achievements } from "@/data/site";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";

const icons = [BookOpen, ShieldCheck, HeartHandshake, GraduationCap, Mic2, Globe2];

const storyBlocks = [
  {
    id: "beginning",
    title: "The Beginning",
    body: about.story.beginning,
    imageLabel: "Session at Mahipalpur community",
    imageAlt: "Advocacy session in Mahipalpur community",
    reverse: false,
  },
  {
    id: "turning",
    title: "The Turning Point",
    body: about.story.turning,
    imageLabel: "Documenting stories with consent",
    imageAlt: "Story documentation with informed consent",
    reverse: true,
  },
  {
    id: "voices",
    title: "Creating Voices Unheard",
    body: about.story.voices,
    imageLabel: "Poetry performance rehearsal",
    imageAlt: "Poetry performance rehearsal",
    reverse: false,
  },
  {
    id: "clinic",
    title: "The Advocacy Clinic",
    body: about.story.clinic,
    imageLabel: "Welfare scheme enrollment clinic",
    imageAlt: "Welfare scheme enrollment at the advocacy clinic",
    reverse: true,
  },
] as const;

type AboutPageProps = {
  galleryImages: PublicGalleryImage[];
};

export default function AboutPage({ galleryImages }: AboutPageProps) {
  return (
    <div className="flex min-w-0 flex-col">
      <section className="relative overflow-hidden bg-[var(--color-paper)] py-14 sm:py-16 md:py-24">
        <Spotlight />
        <div className="relative z-[1] mx-auto flex min-w-0 max-w-6xl flex-col items-center gap-6 px-4 text-center sm:gap-8 sm:px-6">
          <div className="relative mx-auto size-[min(100vw-2rem,400px)] max-w-full shrink-0 rounded-full ring-4 ring-[var(--color-burgundy)]/20">
            <div className="relative size-full overflow-hidden rounded-full bg-muted">
              <ImageCircle />
            </div>
          </div>
          <div>
            <h1 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)] sm:text-4xl md:text-5xl md:leading-tight">
              {siteMeta.founder}
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {about.badges.map((b) => (
                <Badge
                  key={b}
                  variant="secondary"
                  className="max-w-[min(100%,22rem)] text-balance border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/80 text-center text-xs leading-snug text-foreground sm:max-w-none sm:text-sm"
                >
                  {b}
                </Badge>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
              {about.tagline}
            </p>
          </div>
        </div>
      </section>



      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="sr-only">Her story</h2>
        <TracingBeam>
          <div className="space-y-20 md:space-y-28">
            {storyBlocks.map((block, blockIndex) => (
              <motion.article
                key={block.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className={cn(
                  "flex flex-col gap-6 md:flex-row md:items-center md:gap-10",
                  block.reverse && "md:flex-row-reverse"
                )}
              >
                <div className="min-w-0 flex-1 border-l-4 border-[var(--color-burgundy)] pl-5 md:pl-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-foreground">
                    <TextGenerateEffect text={block.title} />
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{block.body}</p>
                </div>
                <div className="min-w-0 flex-1">
                  <StoryBlockPhoto
                    image={galleryImages[blockIndex]}
                    label={block.imageLabel}
                    alt={block.imageAlt}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </TracingBeam>
      </section>

      <section className="border-y border-border bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
            Values
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((v, i) => {
              const Icon = icons[i] ?? BookOpen;
              return (
                <CardSpotlight key={v.title}>
                  <Icon className="size-8 text-[var(--color-burgundy)]" aria-hidden />
                  <p className="mt-3 font-semibold text-foreground">{v.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </CardSpotlight>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-x-auto overscroll-x-contain py-10 [-webkit-overflow-scrolling:touch] sm:overflow-x-visible">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-5 text-center font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--color-burgundy)] sm:text-3xl">
            Impact at a Glance
          </h2>
        </div>
        <div className="mx-auto flex min-w-max max-w-6xl gap-3 px-4 sm:min-w-0 sm:flex-wrap sm:justify-center sm:px-6">
          {about.statStrip.map((s) => (
            <span
              key={s}
              className="shrink-0 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-4 py-2 text-sm font-medium text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-cream)]/60 py-20 md:py-28">
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] text-[clamp(4rem,22vw,12rem)] leading-none text-[var(--color-burgundy)]/[0.06] select-none"
          aria-hidden
        >
          “
        </span>
        <blockquote className="relative z-[1] mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-balance font-[family-name:var(--font-playfair)] text-xl italic leading-snug text-foreground sm:text-2xl md:text-3xl">
            {about.quote}
          </p>
          <footer className="mt-6 text-sm font-medium text-muted-foreground">
            — {siteMeta.founder}
          </footer>
        </blockquote>
      </section>

      <section className="bg-[var(--color-cream)]/20 border-y border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/50 px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
                <Award className="size-4" /> Global Recognition & Grants
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
                {achievements.title}
              </h2>
              <p className="text-lg leading-relaxed text-foreground font-medium">
                {achievements.founderSnippet}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {achievements.recognition}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {achievements.ministryRecognition}
              </p>
              <div className="pt-2">
                <a
                  href={achievements.ibLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "border border-[var(--color-burgundy)] text-[var(--color-burgundy)] hover:bg-[var(--color-burgundy)]/5 font-semibold inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                  )}
                >
                  View on IB Website <ExternalLink className="size-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]/10 p-4 shadow-xl backdrop-blur-xs"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-black/5 shadow-md">
                <Image
                  src={achievements.schoolImage}
                  alt="Srishti Aggarwal school achievement announcement"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="mt-4 border-t border-[var(--color-gold)]/20 pt-4">
                <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                  {achievements.featuredBy}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
          Gallery
        </h2>
        <div className="mt-10">
          <PublicPhotoGallery images={galleryImages} variant="grid" />
        </div>
      </section>

      <section className="border-t border-border bg-card py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6 md:flex-row md:justify-center">
          <div className="flex h-24 w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 text-center text-sm font-medium text-muted-foreground">
            The British School, New Delhi
          </div>
          <div className="hidden h-16 w-px self-center bg-border md:block" aria-hidden />
          <div className="flex h-24 w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 text-center text-sm font-medium text-muted-foreground">
            Hamari Pahchan NGO
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">In official partnership</p>
      </section>
    </div>
  );
}

function ImageCircle() {
  return (
    <div className="relative size-full">
      <Image
        src="/profile_pic.jpeg"
        alt={`${siteMeta.founder}, founder of Voices Unheard`}
        fill
        unoptimized
        placeholder="empty"
        className="object-cover opacity-95"
        sizes="(max-width: 480px) 90vw, (max-width: 768px) 70vw, 400px"
        priority
      />
    </div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  GraduationCap,
  Images,
  Megaphone,
  Mic2,
  Play,
  Quote,
  Scale,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import {
  DraggableCardStack,
  type DraggableCardItem,
} from "@/components/aceternity/draggable-cards";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { Magnetic } from "@/components/motion/magnetic";
import { Sparkles } from "@/components/motion/sparkles";
import { TextReveal } from "@/components/motion/text-reveal";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { achievements, home } from "@/data/site";
import { useCountUp } from "@/hooks/use-count-up";
import { pillarGalleries, pillarVideos, type PillarKey } from "@/lib/pillar-galleries";
import { cn } from "@/lib/utils";

const pillars: {
  key: PillarKey;
  title: string;
  desc: string;
  tag: string;
  image: string;
  imageAlt: string;
  objectPosition: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  linkLabel: string;
}[] = [
  {
    key: "clinic",
    title: "Advocacy Clinic & Welfare Access",
    desc: "Weekly Anganwadi sessions guiding women through welfare scheme documentation, legal protections, and government entitlements.",
    tag: "Grassroots Action",
    image: "/Pillars%20Of%20Change/Advocacy%20Clinics/1%20Right%20Of%20Reality%20.jpeg",
    imageAlt: "Advocacy clinic session",
    objectPosition: "object-[50%_15%]",
    icon: Scale,
    href: "/initiative#clinic",
    linkLabel: "Learn more",
  },
  {
    key: "voices",
    title: "Voices Unheard: Slam Poetry Performance",
    desc: "Transforming lived community conversations into spoken-word poetry performed across school assemblies and literary festivals.",
    tag: "Stage Advocacy",
    image: "/Pillars%20Of%20Change/Voices%20Unheard%20%26%20Slam%20Poetry%20Performance/2.jpeg",
    imageAlt: "Voices Unheard slam poetry performance",
    objectPosition: "object-[50%_15%]",
    icon: Mic2,
    href: "/voices",
    linkLabel: "Learn more",
  },
  {
    key: "f1",
    title: "F-1 World National Finals, Marketing & Social initiative",
    desc: "Representing India at World Finals managing marketing, sustainability strategy, pit display design, and Women in STEM campaigns.",
    tag: "Marketing & Social initiative",
    image: "/Pillars%20Of%20Change/F1-Marketing%20%26%20Social%20initiative/1.jpeg",
    imageAlt: "F-1 World National Finals, Marketing & Social initiative",
    objectPosition: "object-[50%_0%]",
    icon: Megaphone,
    href: "/initiative#f1",
    linkLabel: "Learn more",
  },
  {
    key: "readingRoom",
    title: "Reading Room",
    desc: "Establishing community reading sanctuaries paired with educator training workshops alongside SEWA Bharti and Kitaab4U.",
    tag: "Community Literacy",
    image: "/Pillars%20Of%20Change/Teacher%20Training%20Program/1.jpeg",
    imageAlt: "Reading Room",
    objectPosition: "object-[50%_50%]",
    icon: BookOpen,
    href: "/initiative#reading-room",
    linkLabel: "Learn more",
  },
];

const pillarMedia = Object.fromEntries(
  pillars.map(({ key }) => [key, [...pillarVideos[key], ...pillarGalleries[key]]])
) as Record<PillarKey, (typeof pillarGalleries)[PillarKey]>;

const heroContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const statContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type StatCardProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  accent?: "burgundy" | "gold";
};

function ImpactStatCard({
  value,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  tag,
  icon: Icon,
  accent = "burgundy",
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const n = useCountUp(value, { enabled: inView });

  return (
    <motion.div
      variants={statItemVariants}
      className="h-full"
    >
      <CardSpotlight
        className={cn(
          "h-full flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-[var(--color-paper)] border border-[var(--color-gold)]/30 shadow-xs hover:shadow-xl transition-all",
          accent === "burgundy"
            ? "border-t-4 border-t-[var(--color-burgundy)]"
            : "border-t-4 border-t-[var(--color-gold)]"
        )}
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <div
              className={cn(
                "size-10 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-110",
                accent === "burgundy"
                  ? "bg-[var(--color-burgundy)]/10 text-[var(--color-burgundy)] border-[var(--color-burgundy)]/25"
                  : "bg-[var(--color-gold)]/15 text-[var(--color-gold)] border-[var(--color-gold)]/35"
              )}
            >
              <Icon className="size-4.5" />
            </div>
            <span className="inline-flex items-center rounded-full border border-[var(--color-gold)]/35 bg-[var(--color-cream)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--color-burgundy)]">
              {tag}
            </span>
          </div>

          <div ref={ref}>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-burgundy)] tabular-nums leading-none">
              {prefix}
              {n}
              <span className="text-[var(--color-gold)]">{suffix}</span>
            </p>
            <h3 className="mt-2 text-base font-bold text-foreground tracking-tight">
              {label}
            </h3>
          </div>
        </div>

        <p className="mt-3 pt-2.5 border-t border-[var(--color-gold)]/20 text-xs font-semibold text-foreground/85 leading-normal">
          {sublabel}
        </p>
      </CardSpotlight>
    </motion.div>
  );
}

export function HomePage() {
  const [pillarView, setPillarView] = useState<{ key: PillarKey; index: number } | null>(null);
  const heroCards: DraggableCardItem[] = useMemo(() => {
    // Number-wise images 1 to 6 from public/hero/
    return [
      {
        id: "hero-card-1",
        image: "/hero/1.jpeg",
        tag: "IB Global Grantee",
        title: "Rights to Reality — Srishti Aggarwal",
        desc: "On-ground advocacy sessions facilitating legal literacy and welfare scheme access.",
        badge: "Founder & Youth Advocate",
        location: "Mahipalpur, New Delhi",
      },
      {
        id: "hero-card-2",
        image: "/hero/2.jpeg",
        tag: "Field Clinic",
        title: "Legal Literacy & Women's Rights",
        desc: "Explaining labor protections and welfare schemes in accessible plain language.",
        badge: "2,000+ Women Reached",
        location: "Sector 8, Noida",
      },
      {
        id: "hero-card-3",
        image: "/hero/3.jpeg",
        tag: "Literacy Initiative",
        title: "Shakurpur Community Reading Room",
        desc: "Partnering with SEWA Bharti & Kitaab4U with 1,000+ donated books.",
        badge: "800+ Children Impacted",
        location: "Shakurpur Hub",
      },
      {
        id: "hero-card-4",
        image: "/hero/4.jpeg",
        tag: "Spoken-Word Advocacy",
        title: "Voices Unheard Slam Poetry",
        desc: "Adapting firsthand community narratives into slam poetry for public stages.",
        badge: "10 Original Stanzas",
        location: "School & Festival Stages",
      },
      {
        id: "hero-card-5",
        image: "/hero/5.jpeg",
        tag: "Direct Support",
        title: "Door-to-Door Scheme Enrollment",
        desc: "Hands-on assistance for PMMVY, Sukanya Samriddhi Yojana, and civic entitlements.",
        badge: "Consent-First",
        location: "Delhi Slum Clusters",
      },
      {
        id: "hero-card-6",
        image: "/hero/6.jpeg",
        tag: "Global Recognition",
        title: "International Baccalaureate Showcase",
        desc: "Awarded a USD 2,500 grant through the IB Festival of Hope.",
        badge: "USD $2,500 Grant",
        location: "Festival of Hope",
      },
    ];
  }, []);

  return (
    <div className="flex min-w-0 flex-col bg-[var(--color-paper)]">
      {/* 1. HERO SECTION: Smooth staggered entrance with Radiant Shine */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        {/* Radiant Ambient Background Shine */}
        <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center overflow-hidden">
          <div className="h-[480px] w-[920px] max-w-full rounded-full bg-gradient-to-b from-[var(--color-gold)]/22 via-[var(--color-cream)]/35 to-transparent blur-3xl opacity-80 animate-pulse-subtle" />
        </div>
        <div className="glow-ambient-gold -top-24 -left-20 size-[380px] sm:size-[480px] opacity-60" />
        <div className="glow-ambient-gold top-1/4 -right-20 size-[360px] sm:size-[440px] opacity-55" />
        <Sparkles count={26} seed={11} />

        <div className="relative z-[1] mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:px-6 grid-cols-1 lg:grid-cols-12 lg:items-center lg:gap-14">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="show"
            className="min-w-0 lg:col-span-6 xl:col-span-6"
          >
            {/* Floating badge with Radiant Shimmer */}
            <motion.div
              variants={heroItemVariants}
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="shine-badge inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/55 bg-[var(--color-cream)]/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-burgundy)]"
            >
              <span className="size-1.5 rounded-full bg-[var(--color-gold)] animate-ping" />
              Winner · IB Global Youth Action Fund
            </motion.div>

            <motion.h1
              variants={heroItemVariants}
              className="mt-4 text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]"
            >
              <TextReveal text="Rights on the ground." delay={0.25} />{" "}
              <br className="hidden sm:inline" />
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-shimmer-gold inline-block"
              >
                Voices on the stage.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={heroItemVariants}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed font-semibold text-foreground/90 sm:text-lg"
            >
              A youth-led clinic securing government welfare entitlements for women in Delhi NCR — and sharing their lived realities through spoken-word poetry.
            </motion.p>

            <motion.div variants={heroItemVariants} className="mt-7 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link
                  href="/initiative"
                  className="shine-button group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-burgundy)] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore The Work <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/about"
                  className="shine-card inline-flex items-center justify-center rounded-full border border-[var(--color-burgundy)]/35 bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--color-burgundy)] hover:bg-[var(--color-cream)]/85 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Meet Srishti
                </Link>
              </Magnetic>
            </motion.div>

            {/* Quick Partner Trust Badges */}
            <motion.div
              variants={heroItemVariants}
              className="mt-9 pt-6 border-t border-[var(--color-gold)]/25 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs text-muted-foreground"
            >
              <span className="font-semibold text-foreground mr-1">In partnership with:</span>
              <span className="rounded-md bg-white/80 border border-[var(--color-gold)]/35 px-2.5 py-1 font-semibold text-foreground hover:border-[var(--color-gold)] shadow-[0_2px_8px_rgba(201,168,76,0.12)] transition-colors">
                Hamari Pahchan NGO
              </span>
              <span className="rounded-md bg-white/80 border border-[var(--color-gold)]/35 px-2.5 py-1 font-semibold text-foreground hover:border-[var(--color-gold)] shadow-[0_2px_8px_rgba(201,168,76,0.12)] transition-colors">
                The British School
              </span>
              <span className="rounded-md bg-white/80 border border-[var(--color-gold)]/35 px-2.5 py-1 font-semibold text-foreground hover:border-[var(--color-gold)] shadow-[0_2px_8px_rgba(201,168,76,0.12)] transition-colors">
                SEWA Bharti &amp; Kitaab4U
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end"
          >
            {/* Luminous Glow Halo behind card deck */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-[var(--color-gold)]/25 via-[var(--color-gold-glow)]/20 to-[var(--color-burgundy)]/10 blur-3xl opacity-75 animate-pulse-subtle" />
            <DraggableCardStack items={heroCards} autoDragIntervalMs={3000} />
          </motion.div>
        </div>
      </section>

      {/* 2. STATS AT A GLANCE: Pure numbers with Ambient Warmth */}
      <section className="relative border-y border-[var(--color-gold)]/30 bg-gradient-to-b from-[var(--color-cream)]/50 via-[var(--color-cream)]/25 to-[var(--color-cream)]/50 py-12 sm:py-16 overflow-hidden">
        <div className="glow-ambient-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] opacity-35" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            variants={statContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
          >
            <ImpactStatCard
              value={2000}
              suffix="+"
              label="Women Reached"
              sublabel="Educated & enrolled in government welfare schemes."
              tag="Legal Literacy"
              icon={Users}
              accent="burgundy"
            />
            <ImpactStatCard
              value={800}
              suffix="+"
              label="Children Impacted"
              sublabel="Access to learning spaces & book banks."
              tag="Reading Room"
              icon={GraduationCap}
              accent="gold"
            />
            <ImpactStatCard
              value={2500}
              prefix="$"
              suffix=" USD"
              label="IB Global Grant"
              sublabel="Festival of Hope Youth Action Fund grant winner."
              tag="Global Winner"
              icon={Award}
              accent="burgundy"
            />
            <ImpactStatCard
              value={12}
              suffix="+ Mos"
              label="Fieldwork"
              sublabel="Consistent clinics in Noida & Mahipalpur."
              tag="Sustained"
              icon={Calendar}
              accent="gold"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. PILLARS OF CHANGE: Photo-driven visual cards with Radiant Shine */}
      <section className="relative overflow-x-clip w-full mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {/* Soft Ambient Gold Aura */}
        <div className="glow-ambient-gold -top-24 right-10 size-[420px] opacity-45" />
        <div className="glow-ambient-gold bottom-10 left-10 size-[380px] opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10 relative z-[1]"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
            What We Do
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Pillars of Change
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch relative z-[1]">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const photoCount = pillarGalleries[pillar.key].length;
            const videoCount = pillarVideos[pillar.key].length;
            const openPhotos = () => {
              if (pillarMedia[pillar.key].length > 0) setPillarView({ key: pillar.key, index: 0 });
            };
            return (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.07 }}
                className="h-full flex flex-col"
              >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${photoCount} photos${videoCount > 0 ? ` and ${videoCount} videos` : ""}: ${pillar.title}`}
                    onClick={openPhotos}
                    onKeyDown={(e) => {
                      if (e.target !== e.currentTarget) return;
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openPhotos();
                      }
                    }}
                    className="shine-card group flex flex-col justify-between h-full w-full cursor-pointer rounded-2xl sm:rounded-3xl border border-[var(--color-gold)]/40 bg-white/85 backdrop-blur-md transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-muted">
                      <Image
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        placeholder="blur"
                        blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                        className={cn(
                          "object-cover transition-transform duration-500 group-hover:scale-105",
                          pillar.objectPosition
                        )}
                      />
                      <div className="absolute right-3 top-3 flex items-center gap-1.5">
                        {videoCount > 0 ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                            <Play className="size-3 fill-white" aria-hidden />
                            {videoCount}
                          </span>
                        ) : null}
                        {photoCount > 0 ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                            <Images className="size-3" aria-hidden />
                            {photoCount}
                          </span>
                        ) : null}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-3 pt-7">
                        <span className="inline-block rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                          {pillar.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-start gap-2 mb-2.5 min-h-[3.5rem] sm:min-h-[4rem] text-[var(--color-burgundy)]">
                          <Icon className="size-4 shrink-0 mt-0.5" />
                          <h3 className="text-base font-bold text-foreground group-hover:text-[var(--color-burgundy)] transition-colors leading-snug">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-xs font-semibold text-foreground/90 leading-relaxed min-h-[4.25rem]">
                          {pillar.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[var(--color-gold)]/20 flex items-center justify-between gap-2 text-xs font-semibold text-[var(--color-burgundy)]">
                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                          <Images className="size-3.5" aria-hidden />
                          View gallery
                        </span>
                        <Link
                          href={pillar.href}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-1 -mr-2 hover:bg-[var(--color-gold)]/15"
                        >
                          {pillar.linkLabel}
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
              </motion.div>
            );
          })}
        </div>

        <GalleryLightbox
          images={pillarView ? pillarMedia[pillarView.key] : []}
          index={pillarView?.index ?? null}
          onClose={() => setPillarView(null)}
          onChangeIndex={(index) => setPillarView((v) => (v ? { ...v, index } : v))}
        />
      </section>

      {/* 4. VISUAL PHOTO SNAPSHOTS: Zero text, high proof with Shine */}
      <section className="relative border-y border-[var(--color-gold)]/25 bg-[var(--color-cream)]/35 py-14 sm:py-20 overflow-hidden">
        <div className="glow-ambient-gold -top-20 -right-20 size-[450px] opacity-35" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-burgundy)]">
                Field Archive
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                In The Communities
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-burgundy)] hover:underline"
            >
              View complete archive <ArrowRight className="size-3.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
            {[
              {
                src: "/in-the-communities/right-of-reality.jpeg",
                caption: "Right to Reality · Advocacy Clinic",
              },
              {
                src: "/in-the-communities/voice-unheard-theatre.jpg",
                caption: "Voice Unheard Theatre · Delhi",
                position: "object-left",
              },
              {
                src: "/in-the-communities/f1.png",
                caption: "F-1 · Marketing & Social Initiative",
              },
              {
                src: "/in-the-communities/teacher-training-programe.jpg",
                caption: "Teacher Training Programme · Shakurpur",
              },
            ].map((photo, i) => (
              <motion.div
                key={photo.caption}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="shine-card group relative aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--color-gold)]/35 bg-muted shadow-xs"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                  className={cn(
                    "object-cover transition-transform duration-500 group-hover:scale-105",
                    photo.position || "object-[50%_15%]"
                  )}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6 text-white">
                  <p className="text-[11px] font-semibold leading-tight">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL RECOGNITION BANNER with Golden Luster */}
      <section className="relative overflow-x-clip w-full mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
        <div className="glow-ambient-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[520px] opacity-45" />
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="shine-card relative rounded-3xl border border-[var(--color-gold)]/50 bg-gradient-to-r from-[var(--color-cream)]/90 via-white/80 to-[var(--color-cream)]/90 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_12px_40px_-8px_rgba(201,168,76,0.25)]"
        >
          <div className="space-y-2 max-w-xl">
            <span className="shine-badge inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-white/70 px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-[var(--color-burgundy)]">
              <Award className="size-3.5" /> International Baccalaureate
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Winner, Global Youth Action Fund
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-foreground/90 leading-relaxed">
              Awarded <span className="font-bold text-[var(--color-burgundy)]">USD 2,500</span> by the IB Festival of Hope and acknowledged by the UP Ministry of Women’s Welfare.
            </p>
          </div>
          <Magnetic className="shrink-0">
            <a
              href={achievements.ibLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button inline-flex items-center gap-2 rounded-full bg-[var(--color-burgundy)] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              Official IB Showcase <ExternalLink className="size-3.5" />
            </a>
          </Magnetic>
        </motion.div>
      </section>

      {/* 6. POEM TICKER */}
      <section className="border-y border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 py-6 overflow-hidden">
        <InfiniteMovingCards items={[...home.poemTicker]} speed={55} />
      </section>

      {/* 7. WARM PERSONAL CLOSING with Radiant Accents */}
      <section className="relative overflow-x-clip w-full mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 text-center">
        <div className="glow-ambient-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[440px] opacity-40" />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-[1]"
        >
          <Quote className="size-7 mx-auto text-[var(--color-gold)] mb-3" />
          <p className="font-serif italic font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground max-w-xl mx-auto">
            &ldquo;What we whisper in community circles, we owe to the stage — with dignity and care.&rdquo;
          </p>
          <p className="mt-3 text-sm font-bold text-foreground">
            Srishti Aggarwal
          </p>
          <p className="text-xs font-semibold text-foreground/80">
            Founder, Rights to Reality &amp; Voices Unheard
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <Link
                href="/contact"
                className="shine-button rounded-full bg-[var(--color-burgundy)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get in Touch
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/about"
                className="shine-card rounded-full border border-[var(--color-burgundy)]/30 bg-white/75 px-6 py-2.5 text-sm font-semibold text-[var(--color-burgundy)] hover:bg-[var(--color-cream)]/85 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Read Story
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

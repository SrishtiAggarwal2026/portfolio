"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Building2,
  Ear,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Mic2,
  PenLine,
  Users,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import { StoryBlockPhoto } from "@/components/gallery/story-block-photo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { initiative } from "@/data/site";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";
import { ReadingRoomSection } from "@/components/initiative/reading-room-section";

const stepIcons = [HeartHandshake, Ear, Users, PenLine, MessageCircle, Mic2];

type InitiativePageProps = {
  clinicPhoto?: PublicGalleryImage;
};

export default function InitiativePage({ clinicPhoto }: InitiativePageProps) {
  return (
    <div className="flex min-w-0 flex-col">
      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h1 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
          The Initiative
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Grassroots welfare support, ethical storytelling through slam poetry, and youth-led community reading rooms.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <WobbleCard className="h-full flex flex-col justify-between border-[var(--color-gold)]/30 bg-[var(--color-cream)]/40">
            <div>
              <Building2 className="size-10 text-[var(--color-burgundy)]" aria-hidden />
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                {initiative.cards[0].title}
              </h2>
              <p className="mt-2 text-muted-foreground">{initiative.cards[0].desc}</p>
            </div>
            <Link
              href="#clinic"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-burgundy)] hover:underline"
            >
              Learn more <ArrowDown className="size-4" />
            </Link>
          </WobbleCard>
          <WobbleCard className="h-full flex flex-col justify-between border-[var(--color-burgundy)]/20 bg-card">
            <div>
              <GraduationCap className="size-10 text-[var(--color-burgundy)]" aria-hidden />
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                {initiative.cards[1].title}
              </h2>
              <p className="mt-2 text-muted-foreground">{initiative.cards[1].desc}</p>
            </div>
            <Link
              href="#process"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-burgundy)] hover:underline"
            >
              Learn more <ArrowDown className="size-4" />
            </Link>
          </WobbleCard>
          <WobbleCard className="h-full flex flex-col justify-between border-[var(--color-gold)]/30 bg-[var(--color-cream)]/40">
            <div>
              <BookOpen className="size-10 text-[var(--color-gold)]" aria-hidden />
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                Reading Room &amp; Book Bank
              </h2>
              <p className="mt-2 text-muted-foreground">Community literacy in Shakurpur with SEWA Bharti &amp; Kitaab4U.</p>
            </div>
            <Link
              href="#reading-room"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-burgundy)] hover:underline"
            >
              Learn more <ArrowDown className="size-4" />
            </Link>
          </WobbleCard>
        </div>
      </section>

      <section id="clinic" className="scroll-mt-24 border-y border-border bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_minmax(0,400px)] lg:items-start">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
              Advocacy Clinic
            </h2>
            <Accordion className="mt-6 w-full" defaultValue={[]}>
              {initiative.accordion.map((item, i) => (
                <AccordionItem key={item.title} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="min-w-0 w-full max-lg:mx-auto max-lg:max-w-md">
            <StoryBlockPhoto
              image={clinicPhoto}
              label="Srishti at advocacy clinic session"
              alt="Advocacy clinic session in the community"
              aspectClassName="aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-border bg-[var(--color-paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl text-left">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)] sm:text-4xl">
              Voices Unheard
            </h2>
            <ol className="relative mt-10 space-y-0 border-l-2 border-[var(--color-gold)]/50 pl-8">
              {initiative.steps.map((step, i) => {
                const Icon = stepIcons[i] ?? HeartHandshake;
                return (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <span className="absolute -left-[25px] top-0 flex size-8 items-center justify-center rounded-full border-2 border-[var(--color-burgundy)] bg-background text-xs font-bold text-[var(--color-burgundy)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 shrink-0 text-[var(--color-gold)]" aria-hidden />
                      <span className="font-medium text-foreground text-base sm:text-lg">{step}</span>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <ReadingRoomSection />

      <WelfareSchemesSection />
    </div>
  );
}

function WelfareSchemesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Women's Welfare",
    "Safety & Legal",
    "Girls & Children",
    "Education Support",
  ] as const;

  const filteredSchemes =
    selectedCategory === "All"
      ? initiative.schemes
      : initiative.schemes.filter((s) => s.category === selectedCategory);

  return (
    <section className="border-t border-border bg-[var(--color-paper)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-burgundy)]">
            <Sparkles className="size-3.5" />
            <span>Community Outreach Material</span>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[var(--color-burgundy)] sm:text-4xl">
            Welfare Schemes Explained
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Government welfare schemes and social protection programmes documented and distributed in brochures by Srishti during grassroots advocacy sessions.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer",
                selectedCategory === cat
                  ? "bg-[var(--color-burgundy)] text-white shadow-sm ring-2 ring-[var(--color-burgundy)]/20"
                  : "border border-border bg-card text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scheme Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSchemes.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
            >
              <Card
                className={cn(
                  "h-full flex flex-col justify-between overflow-hidden border-border bg-card shadow-xs transition-all hover:border-[var(--color-gold)]/50 hover:shadow-md pt-0 gap-0",
                  "border-t-4 border-t-[var(--color-gold)]"
                )}
              >
                <div>
                  <div className="p-5 pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <Badge variant="outline" className="border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/50 text-[11px] font-semibold text-[var(--color-burgundy)]">
                        {s.category}
                      </Badge>
                      <span className="rounded-md bg-[var(--color-burgundy)]/10 px-2 py-0.5 text-[11px] font-bold text-[var(--color-burgundy)]">
                        {s.benefit}
                      </span>
                    </div>
                    <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-foreground">
                      {s.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground/90 mt-0.5">{s.full}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>

                  <div className="px-5 pb-4">
                    <div className="rounded-lg border border-border/80 bg-secondary/25 p-2.5 text-xs text-muted-foreground">
                      <strong className="font-semibold text-foreground">Eligibility: </strong>
                      {s.who}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/70 bg-muted/20 px-5 py-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Key Highlights
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground/90">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 shrink-0 text-[var(--color-burgundy)]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Panel 6: We Are Here to Support You */}
        <div className="mt-16 sm:mt-20 rounded-3xl border border-[var(--color-gold)]/30 bg-gradient-to-br from-[var(--color-cream)]/40 via-card to-[var(--color-cream)]/20 p-6 sm:p-10 shadow-sm">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
              <HeartHandshake className="size-4" />
              <span>Advocacy Clinic Direct Support</span>
            </div>
            <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[var(--color-burgundy)]">
              We Are Here to Support You
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Information. Guidance. Empowerment. Hands-on assistance every step of the way.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {initiative.clinicSupport.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/80 p-5 shadow-2xs transition-all hover:border-[var(--color-gold)]/40 hover:shadow-xs"
              >
                <span className="text-2xl block mb-2" role="img" aria-label={item.title}>
                  {item.emoji}
                </span>
                <h4 className="font-semibold text-foreground text-base">{item.title}</h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-[var(--color-gold)]/20 pt-6 text-center">
            <p className="font-[family-name:var(--font-playfair)] text-base sm:text-lg font-semibold text-[var(--color-burgundy)]">
              &ldquo;Know Your Rights. Access Your Benefits. Build Your Future.&rdquo;
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Rights to Reality Advocacy Clinic · In Partnership with Hamari Pehchaan NGO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { initiative } from "@/data/site";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";

import { BookOpen } from "lucide-react";
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
          <WobbleCard className="border-[var(--color-gold)]/30 bg-[var(--color-cream)]/40">
            <Building2 className="size-10 text-[var(--color-burgundy)]" aria-hidden />
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
              {initiative.cards[0].title}
            </h2>
            <p className="mt-2 text-muted-foreground">{initiative.cards[0].desc}</p>
            <Link
              href="#clinic"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-burgundy)] hover:underline"
            >
              Learn more <ArrowDown className="size-4" />
            </Link>
          </WobbleCard>
          <WobbleCard className="border-[var(--color-burgundy)]/20 bg-card">
            <GraduationCap className="size-10 text-[var(--color-burgundy)]" aria-hidden />
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
              {initiative.cards[1].title}
            </h2>
            <p className="mt-2 text-muted-foreground">{initiative.cards[1].desc}</p>
            <Link
              href="#process"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-burgundy)] hover:underline"
            >
              Learn more <ArrowDown className="size-4" />
            </Link>
          </WobbleCard>
          <WobbleCard className="border-[var(--color-gold)]/30 bg-[var(--color-cream)]/40">
            <BookOpen className="size-10 text-[var(--color-gold)]" aria-hidden />
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
              Reading Room &amp; Book Bank
            </h2>
            <p className="mt-2 text-muted-foreground">Community literacy in Shakurpur with SEWA Bharti &amp; Kitaab4U.</p>
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

      <section id="process" className="scroll-mt-24 mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
          Voices Unheard Process
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
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[25px] top-0 flex size-8 items-center justify-center rounded-full border-2 border-[var(--color-burgundy)] bg-background text-xs font-bold text-[var(--color-burgundy)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex gap-3">
                  <Icon className="mt-0.5 size-5 shrink-0 text-[var(--color-gold)]" aria-hidden />
                  <span className="font-medium text-foreground">{step}</span>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </section>

      <ReadingRoomSection />

      <section className="bg-[var(--color-paper)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
            Welfare Schemes Explained
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {initiative.schemes.map((s) => (
              <Card
                key={s.name}
                className={cn(
                  "overflow-hidden border-border shadow-sm",
                  "border-t-4 border-t-[var(--color-gold)]"
                )}
              >
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-playfair)]">{s.name}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{s.full}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Who it benefits: </span>
                    {s.who}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Scale, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { FadeIn } from "@/components/shared/fade-in";
import { ImageStrip } from "@/components/shared/image-strip";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

function PointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-600/60 dark:bg-amber-400/50"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Panel({
  title,
  kicker,
  items,
}: {
  title: string;
  kicker: string;
  items: readonly string[];
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-50/30 p-6 shadow-xl shadow-black/[0.06] ring-1 ring-black/[0.04]",
        "md:p-8 dark:from-card dark:via-card dark:to-amber-950/25 dark:shadow-black/40 dark:ring-white/5"
      )}
    >
      <h3 className="font-heading text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{kicker}</p>
      <PointList items={items} />
    </div>
  );
}

export function SolutionSection() {
  return (
    <SectionWrapper id={SECTION_IDS.solution} variant="depth">
      <FadeIn>
        <SectionHeading
          eyebrow="Approach"
          title="Two engines, one mission"
          description="Legal literacy meets creative testimony — rigor for systems, warmth for people."
          size="display"
        />
      </FadeIn>

      <FadeIn delay={0.05} className="mb-10">
        <ImageStrip
          items={[
            { src: "/mock1.jpg", alt: "Clinic session" },
            { src: "/mock2.jpg", alt: "Creative work" },
            { src: "/mock1.jpg", alt: "Community" },
          ]}
        />
      </FadeIn>

      <div className="mt-4 grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
        <FadeIn className="order-2 lg:order-1 lg:col-span-7">
          <Tabs defaultValue="clinic" className="w-full gap-8">
            <TabsList className="h-auto w-full max-w-none flex-wrap gap-1 rounded-xl bg-muted/60 p-1.5 sm:max-w-xl">
              <TabsTrigger value="clinic" className="gap-2 rounded-lg px-4 py-2">
                <Scale className="size-4 opacity-70" aria-hidden />
                {site.solution.clinic.title}
              </TabsTrigger>
              <TabsTrigger value="voices" className="gap-2 rounded-lg px-4 py-2">
                <Sparkles className="size-4 opacity-70" aria-hidden />
                {site.solution.voices.title}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="clinic" className="mt-2">
              <Panel
                title={site.solution.clinic.title}
                kicker="Structured support for real questions — with follow-through."
                items={site.solution.clinic.points}
              />
            </TabsContent>
            <TabsContent value="voices" className="mt-2">
              <Panel
                title={site.solution.voices.title}
                kicker="Art and narrative as evidence — not decoration."
                items={site.solution.voices.points}
              />
            </TabsContent>
          </Tabs>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="order-1 lg:sticky lg:top-28 lg:order-2 lg:col-span-5"
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/20 ring-1 ring-white/20">
            <Image
              src="/mock1.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent mix-blend-overlay" />
            <p className="absolute bottom-6 left-6 right-6 font-story text-sm leading-relaxed text-white/90">
              The clinic is where law becomes conversation — and conversation becomes
              change.
            </p>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

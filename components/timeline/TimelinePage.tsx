"use client";

import { Timeline } from "@/components/aceternity/timeline";
import { TimelinePhasePhoto } from "@/components/gallery/timeline-phase-photo";
import { timelineData } from "@/data/site";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";

const imageLabels: Record<string, string> = {
  p1: "Early volunteering — documentation support",
  p2: "Clinic formalisation — surveys in Mahipalpur",
  p3: "Voices Unheard — performances and scale-up",
  p4: "2026 Winner — Global Youth Action Fund victory & expanded Anganwadi clinics",
};

type TimelinePageProps = {
  galleryImages: PublicGalleryImage[];
};

export default function TimelinePage({ galleryImages }: TimelinePageProps) {
  return (
    <div className="flex min-w-0 flex-col">
      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h1 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
          Project Timeline
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          From first sessions in the community to poetry on stage — a year of listening, enrolling, and
          amplifying.
        </p>
        <div className="mt-16">
          <Timeline
            phases={timelineData.phases}
            renderImage={(phase, index) => {
              let image: PublicGalleryImage | undefined = undefined;
              if (galleryImages.length > 0) {
                if (phase.id === "p1") {
                  image = galleryImages.find((img) => img.filename.toLowerCase().includes("img_4850")) || galleryImages[4 % galleryImages.length];
                } else if (phase.id === "p2") {
                  image = galleryImages.find((img) => img.filename.toLowerCase().includes("img_4853")) || galleryImages[5 % galleryImages.length];
                } else if (phase.id === "p3") {
                  image = galleryImages.find((img) => img.filename.toLowerCase().includes("img_5800")) || galleryImages[6 % galleryImages.length];
                } else if (phase.id === "p4") {
                  image = galleryImages.find((img) => img.filename.toLowerCase().includes("2026_work_1")) || galleryImages[0];
                } else {
                  image = galleryImages[(index + 4) % galleryImages.length];
                }
              }
              return (
                <TimelinePhasePhoto
                  image={image}
                  label={imageLabels[phase.id] ?? "Timeline phase image"}
                  alt={`${phase.title} — field photo`}
                />
              );
            }}
          />
        </div>
      </section>
    </div>
  );
}

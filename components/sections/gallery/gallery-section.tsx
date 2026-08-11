"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { EditorialImage } from "@/components/shared/editorial-image";
import { FadeIn } from "@/components/shared/fade-in";
import { ImageStrip } from "@/components/shared/image-strip";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  alt: string;
  kind: "image" | "video";
};

const ITEMS: GalleryItem[] = [
  { src: "/mock1.jpg", alt: "Community workshop (placeholder)", kind: "image" },
  { src: "/mock2.jpg", alt: "Listening session (placeholder)", kind: "image" },
  { src: "/video.mp4", alt: "Field footage (placeholder)", kind: "video" },
  { src: "/mock2.jpg", alt: "Gathering (placeholder)", kind: "image" },
  { src: "/mock1.jpg", alt: "Clinic moment (placeholder)", kind: "image" },
  { src: "/mock2.jpg", alt: "Voices in the room (placeholder)", kind: "image" },
];

export function GallerySection() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(() => ITEMS[activeIndex] ?? ITEMS[0], [activeIndex]);

  return (
    <SectionWrapper id={SECTION_IDS.gallery} variant="depth">
      <FadeIn>
        <SectionHeading
          eyebrow={site.gallery.eyebrow}
          title={site.gallery.heading}
          description={site.gallery.caption}
          size="display"
        />
      </FadeIn>

      <FadeIn delay={0.04} className="mb-10">
        <EditorialImage
          src="/mock1.jpg"
          alt="Gallery highlight"
          aspectClassName="aspect-[2.2/1] md:aspect-[2.8/1]"
          priority
        />
      </FadeIn>

      <FadeIn delay={0.06} className="mb-10">
        <ImageStrip
          items={[
            { src: "/mock2.jpg", alt: "Moment A" },
            { src: "/mock1.jpg", alt: "Moment B" },
            { src: "/mock2.jpg", alt: "Moment C" },
          ]}
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {ITEMS.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setOpen(true);
              }}
              className={cn(
                "group mb-4 w-full break-inside-avoid text-left",
                "rounded-xl ring-1 ring-foreground/10 transition-shadow hover:shadow-md",
                "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              )}
            >
              <div className="overflow-hidden rounded-xl bg-muted">
                <AspectRatio ratio={item.kind === "video" ? 16 / 9 : 4 / 3}>
                  {item.kind === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <video
                      className="pointer-events-none absolute inset-0 size-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      poster="/mock2.jpg"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                </AspectRatio>
              </div>
              <div className="px-3 py-2">
                <p className="text-xs text-muted-foreground">
                  {item.kind === "video" ? "Video" : "Image"} ·{" "}
                  <span className="text-foreground">Open preview</span>
                </p>
              </div>
            </button>
          ))}
        </div>
      </FadeIn>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{active.kind === "video" ? "Video" : "Image"}</DialogTitle>
            <DialogDescription>{active.alt}</DialogDescription>
          </DialogHeader>
          <div className="relative overflow-hidden rounded-lg border border-border/80 bg-muted">
            <AspectRatio ratio={active.kind === "video" ? 16 / 9 : 4 / 3}>
              {active.kind === "image" ? (
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 720px, 90vw"
                  className="object-contain"
                />
              ) : (
                <video
                  className="absolute inset-0 size-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/mock2.jpg"
                >
                  <source src={active.src} type="video/mp4" />
                </video>
              )}
            </AspectRatio>
          </div>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}

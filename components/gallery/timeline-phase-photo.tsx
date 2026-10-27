"use client";

import Image from "next/image";
import { Camera, Eye, MapPin } from "lucide-react";
import { useState } from "react";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { PlaceholderImage } from "@/components/placeholder-image";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { cn } from "@/lib/utils";

type TimelinePhasePhotoProps = {
  image: PublicGalleryImage | undefined;
  auxImages?: PublicGalleryImage[];
  label: string;
  alt: string;
  location?: string;
  badge?: string;
  onOpenLightbox?: (img: PublicGalleryImage) => void;
};

export function TimelinePhasePhoto({
  image,
  auxImages = [],
  label,
  alt,
  location,
  badge,
  onOpenLightbox,
}: TimelinePhasePhotoProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PublicGalleryImage | undefined>(image);

  // Sync if image prop changes
  const activePhoto = selectedPhoto || image;

  if (!activePhoto) {
    return (
      <PlaceholderImage
        label={label}
        alt={alt}
        aspectClassName="aspect-[16/10] w-full"
        width={480}
        height={300}
      />
    );
  }

  const allThumbnails = image ? [image, ...auxImages.filter((x) => x.src !== image.src)] : auxImages;

  return (
    <figure className="group relative w-full space-y-3">
      {/* Main photo card with glow & border */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-card border border-[var(--color-gold)]/30 shadow-lg ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[var(--color-gold)]/60"
      >
        <Image
          src={activePhoto.src}
          alt={alt}
          fill
          placeholder="blur"
          blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          quality={activePhoto.unoptimized ? undefined : 80}
          unoptimized={activePhoto.unoptimized}
        />

        {/* Gradient shadow for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
          {badge ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[0.7rem] font-semibold text-white tracking-wide uppercase">
              {badge}
            </span>
          ) : (
            <span />
          )}

          {location ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[0.7rem] font-medium text-white/90">
              <MapPin className="size-3 text-[var(--color-gold)]" />
              {location}
            </span>
          ) : null}
        </div>

        {/* Lightbox zoom hint on hover */}
        {onOpenLightbox ? (
          <button
            type="button"
            onClick={() => onOpenLightbox(activePhoto)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px] cursor-pointer"
            aria-label="View photo in full screen"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 text-[var(--color-burgundy)] px-3.5 py-1.5 text-xs font-semibold shadow-lg">
              <Eye className="size-3.5" /> View Photo
            </span>
          </button>
        ) : null}
      </div>

      {/* Auxiliary thumbnails if more than 1 photo available */}
      {allThumbnails.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {allThumbnails.map((thumb, idx) => {
            const isSelected = activePhoto.src === thumb.src;
            return (
              <button
                key={thumb.src}
                type="button"
                onClick={() => setSelectedPhoto(thumb)}
                className={cn(
                  "relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition-all cursor-pointer",
                  isSelected
                    ? "border-[var(--color-gold)] ring-2 ring-[var(--color-gold)]/40 scale-105"
                    : "border-border/80 opacity-70 hover:opacity-100"
                )}
                aria-label={`View photo ${idx + 1}`}
              >
                <Image
                  src={thumb.src}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                  unoptimized={thumb.unoptimized}
                />
              </button>
            );
          })}
          <span className="text-[0.7rem] text-muted-foreground whitespace-nowrap pl-1">
            {allThumbnails.length} photos
          </span>
        </div>
      )}

      {/* Caption plaque */}
      <figcaption className="flex items-start gap-2 px-1 text-xs text-muted-foreground leading-relaxed">
        <Camera className="mt-0.5 size-3.5 shrink-0 text-[var(--color-gold)]" />
        <span>{label}</span>
      </figcaption>
    </figure>
  );
}

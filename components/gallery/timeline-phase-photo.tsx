"use client";

import Image from "next/image";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { PlaceholderImage } from "@/components/placeholder-image";

type TimelinePhasePhotoProps = {
  image: PublicGalleryImage | undefined;
  label: string;
  alt: string;
};

export function TimelinePhasePhoto({ image, label, alt }: TimelinePhasePhotoProps) {
  if (!image) {
    return (
      <PlaceholderImage
        label={label}
        alt={alt}
        aspectClassName="aspect-[400/250] w-full max-w-[400px]"
        width={400}
        height={250}
      />
    );
  }

  return (
    <figure className="w-full space-y-2.5">
      <div className="relative aspect-[400/250] w-full overflow-hidden rounded-2xl bg-muted shadow-sm ring-1 ring-border">
        <Image
          src={image.src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 96vw, 360px"
          quality={image.unoptimized ? undefined : 75}
          unoptimized={image.unoptimized}
          loading="lazy"
          placeholder="empty"
        />
      </div>
      <figcaption className="px-1 text-left text-xs text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

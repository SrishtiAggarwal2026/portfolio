"use client";

import Image from "next/image";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { PlaceholderImage } from "@/components/placeholder-image";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";

type StoryBlockPhotoProps = {
  image: PublicGalleryImage | undefined;
  label: string;
  alt: string;
  aspectClassName?: string;
};

export function StoryBlockPhoto({
  image,
  label,
  alt,
  aspectClassName = "aspect-[4/3]",
}: StoryBlockPhotoProps) {
  if (!image) {
    return (
      <PlaceholderImage label={label} alt={alt} aspectClassName={aspectClassName} width={400} height={300} />
    );
  }

  return (
    <figure className="group space-y-2">
      <div
        className={`relative overflow-hidden rounded-2xl bg-muted ring-1 ring-[var(--color-gold)]/30 shadow-md ${aspectClassName}`}
      >
        <Image
          src={image.src}
          alt={alt}
          fill
          placeholder="blur"
          blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 96vw, min(480px, 45vw)"
          quality={image.unoptimized ? undefined : 75}
          unoptimized={image.unoptimized}
        />
      </div>
      <figcaption className="text-center text-xs text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

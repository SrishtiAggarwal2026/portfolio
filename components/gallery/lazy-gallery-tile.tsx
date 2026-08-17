"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { getGalleryImageCaption } from "@/lib/utils";

function altFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "").replace(/_/g, " ");
  return `Community and advocacy — ${base}`;
}

type GalleryTileProps = {
  image: PublicGalleryImage;
  index: number;
  onOpen: (index: number) => void;
};

export function LazyGalleryTile({
  image,
  index,
  onOpen,
}: GalleryTileProps) {
  const caption = getGalleryImageCaption(image.filename, index);

  return (
    <div
      onClick={() => onOpen(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(index);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${caption}`}
      className="group relative flex w-full min-w-0 flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)]/70 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-burgundy)] cursor-zoom-in"
      style={{ minHeight: "0px" }}
    >
      {/* Compact 4:3 Aspect Ratio Container */}
      <div
        className="relative w-full aspect-[4/3] overflow-hidden bg-muted"
        style={{ aspectRatio: "4 / 3", width: "100%" }}
      >
        <Image
          src={image.src}
          alt={altFromFilename(image.filename)}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          className="object-cover object-[center_20%] transition-transform duration-500 will-change-transform group-hover:scale-105"
          quality={75}
          unoptimized={image.unoptimized}
          loading="lazy"
          decoding="async"
        />

        {/* Hover zoom overlay badge */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex size-8 items-center justify-center rounded-full bg-white/95 text-foreground shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <ZoomIn className="size-4 text-[var(--color-burgundy)]" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Compact 36px Fixed Height Caption Area */}
      <div
        className="flex w-full shrink-0 items-center justify-center border-t border-border/60 bg-card px-2 text-center"
        style={{ height: "36px", minHeight: "36px", maxHeight: "36px" }}
      >
        <p
          className="truncate text-[11px] font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
          title={caption}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}

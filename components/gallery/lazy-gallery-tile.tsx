"use client";

import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn, getGalleryImageCaption } from "@/lib/utils";

function altFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "").replace(/_/g, " ");
  return `Community and advocacy — ${base}`;
}

type LazyGalleryTileProps = {
  image: PublicGalleryImage;
  /** Load immediately (above-the-fold strip). */
  eager: boolean;
  aspectClassName: string;
  rounded: "xl" | "2xl";
  captionSize: "xs" | "sm";
  index: number;
  onOpen: (index: number) => void;
};

export function LazyGalleryTile({
  image,
  eager,
  aspectClassName,
  rounded,
  captionSize,
  index,
  onOpen,
}: LazyGalleryTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "80px 0px",
    amount: 0.01,
  });
  const shouldLoad = eager || inView;

  const roundClass = rounded === "xl" ? "rounded-xl" : "rounded-2xl";
  const capClass = captionSize === "xs" ? "px-2 py-1.5 text-[0.65rem]" : "px-3 py-2 text-xs";

  return (
    <figure
      className={cn(
        "overflow-hidden bg-muted ring-1 ring-border",
        roundClass,
        "[content-visibility:auto] [contain-intrinsic-size:auto_280px]"
      )}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="group block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={`Open gallery: ${getGalleryImageCaption(image.filename, index)}`}
      >
        <div
          ref={ref}
          className={cn("relative w-full overflow-hidden bg-muted", aspectClassName, roundClass)}
        >
          {shouldLoad ? (
            <Image
              src={image.src}
              alt={altFromFilename(image.filename)}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 96vw, (max-width: 1024px) 42vw, 280px"
              quality={image.unoptimized ? undefined : 75}
              unoptimized={image.unoptimized}
              loading="lazy"
              decoding="async"
              placeholder="empty"
            />
          ) : (
            <div
              className="absolute inset-0 motion-safe:animate-pulse bg-gradient-to-br from-muted to-muted-foreground/10"
              aria-hidden
            />
          )}
        </div>
      </button>
      <figcaption
        className={cn(
          "border-t border-border text-center text-muted-foreground",
          capClass
        )}
      >
        {getGalleryImageCaption(image.filename, index)}
      </figcaption>
    </figure>
  );
}

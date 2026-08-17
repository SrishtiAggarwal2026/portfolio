"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { getGalleryImageCaption } from "@/lib/utils";

function altFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "").replace(/_/g, " ");
  return `Community and advocacy — ${base}`;
}

type GalleryLightboxProps = {
  images: PublicGalleryImage[];
  index: number | null;
  onClose: () => void;
  onChangeIndex: (i: number) => void;
};

export function GalleryLightbox({
  images,
  index,
  onClose,
  onChangeIndex,
}: GalleryLightboxProps) {
  const open = index !== null;
  const count = images.length;
  const current = index !== null && index >= 0 && index < count ? images[index] : null;
  const caption =
    index !== null && count > 0 && current ? getGalleryImageCaption(current.filename, index) : "";

  const goPrev = useCallback(() => {
    if (index === null || count === 0) return;
    onChangeIndex((index - 1 + count) % count);
  }, [index, count, onChangeIndex]);

  const goNext = useCallback(() => {
    if (index === null || count === 0) return;
    onChangeIndex((index + 1) % count);
  }, [index, count, onChangeIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    // Lock body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, goPrev, goNext, onClose]);

  if (!open || !current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="flex w-full max-w-6xl items-center justify-between py-2 text-white">
        <span className="text-sm font-medium tracking-wide text-white/75">
          Photo {index! + 1} of {count}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="size-10 rounded-full text-white/80 hover:bg-white/10 hover:text-white"
          aria-label="Close lightbox"
        >
          <X className="size-5" />
        </Button>
      </div>

      {/* Main Image Area with Previous/Next Controls */}
      <div className="relative flex w-full max-w-6xl flex-1 items-center justify-center py-2">
        {/* Previous Button */}
        {count > 1 && (
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 z-10 flex size-12 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/80 hover:text-white sm:left-4"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>
        )}

        {/* Center Image */}
        <div className="relative h-[min(75vh,700px)] w-full max-w-4xl overflow-hidden rounded-xl">
          <Image
            src={current.src}
            alt={altFromFilename(current.filename)}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            quality={75}
            unoptimized={current.unoptimized}
            priority
          />
        </div>

        {/* Next Button */}
        {count > 1 && (
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 z-10 flex size-12 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/80 hover:text-white sm:right-4"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>
        )}
      </div>

      {/* Bottom Caption Bar */}
      <div className="w-full max-w-3xl pb-2 text-center text-white">
        <p className="text-sm font-medium text-white/90 sm:text-base">
          {caption}
        </p>
      </div>
    </div>
  );
}

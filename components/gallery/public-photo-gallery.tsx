"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { getGalleryImageCaption } from "@/lib/utils";

function altFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "").replace(/_/g, " ");
  return `Community and advocacy — ${base}`;
}

type PublicPhotoGalleryProps = {
  images: PublicGalleryImage[];
  variant?: "grid" | "masonry";
  className?: string;
};

export function PublicPhotoGallery({
  images,
  className,
}: PublicPhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  const goNext = useCallback(() => {
    if (count === 0) return;
    setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    if (count === 0) return;
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlaying || count <= 1) return;
    const interval = setInterval(goNext, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goNext, count]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex !== null) return; // Lightbox handles its own keys
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, lightboxIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  if (count === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border/80 p-12 text-center">
        <p className="text-sm text-muted-foreground">Photos will be added soon.</p>
      </div>
    );
  }

  const currentImage = images[currentIndex];
  const caption = getGalleryImageCaption(currentImage.filename, currentIndex);

  // Visible thumbnail strip window (around current index)
  const thumbCount = 7;
  const half = Math.floor(thumbCount / 2);
  const thumbs = Array.from({ length: Math.min(thumbCount, count) }, (_, i) => {
    const idx = (currentIndex - half + i + count) % count;
    return { idx, img: images[idx] };
  });

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-6 ${className || ""}`}>
      {/* Lightbox Modal on full click */}
      <GalleryLightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />

      {/* Main Carousel Card */}
      <div
        className="group relative w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 16:10 / 4:3 Responsive Main Viewport */}
        <div
          onClick={() => setLightboxIndex(currentIndex)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLightboxIndex(currentIndex);
            }
          }}
          aria-label={`View photo in fullscreen: ${caption}`}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black/90 cursor-zoom-in flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-burgundy)]"
        >
          {/* Ambient blurred backdrop for aesthetic framing */}
          <Image
            src={currentImage.src}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover blur-2xl scale-125 opacity-40 pointer-events-none"
            quality={45}
            priority
          />

          {/* Main Focused Image (object-contain ensures zero distortion or clipping) */}
          <div className="relative size-full p-2 sm:p-4 flex items-center justify-center">
            <Image
              key={currentImage.src}
              src={currentImage.src}
              alt={altFromFilename(currentImage.filename)}
              fill
              className="object-contain transition-transform duration-500 will-change-transform group-hover:scale-[1.02]"
              quality={75}
              priority
            />
          </div>

          {/* Hover Zoom Prompt */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <ZoomIn className="size-3.5" />
            <span>Fullscreen</span>
          </div>

          {/* Slide Indicator Badge */}
          <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {currentIndex + 1} / {count}
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Caption & Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/80 bg-card px-4 py-3 sm:px-6">
          <p className="text-xs sm:text-sm font-medium text-foreground text-center sm:text-left truncate max-w-lg">
            {caption}
          </p>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="h-8 gap-1.5 text-xs"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="size-3" /> Pause
                </>
              ) : (
                <>
                  <Play className="size-3" /> Slideshow
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
        {thumbs.map(({ idx, img }) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={`${img.src}-${idx}`}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to photo ${idx + 1}`}
              className={`relative size-14 sm:size-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                isSelected
                  ? "border-[var(--color-burgundy)] ring-2 ring-[var(--color-burgundy)]/30 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
                quality={45}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

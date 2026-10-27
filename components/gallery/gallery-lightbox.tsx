"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { videoCaption, type PublicGalleryImage } from "@/lib/public-gallery-image";
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

export function GalleryLightbox({ images, index, onClose, onChangeIndex }: GalleryLightboxProps) {
  const open = index !== null;
  const count = images.length;
  const current = index !== null && index >= 0 && index < count ? images[index] : null;
  const isVideo = current?.mediaType === "video";
  const caption =
    index !== null && count > 0 && current
      ? isVideo
        ? videoCaption(current)
        : getGalleryImageCaption(current.filename, index, current.category)
      : "";

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
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, goPrev, goNext]);

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent
        showCloseButton
        className="max-h-[min(92vh,900px)] max-w-[min(calc(100vw-1rem),56rem)] gap-3 border-border p-3 sm:max-w-[min(calc(100vw-2rem),56rem)] sm:p-4"
      >
        {current ? (
          <>
            <DialogHeader className="sr-only">
              <DialogTitle>
                Gallery {isVideo ? "video" : "image"} {index! + 1} of {count}
              </DialogTitle>
              <DialogDescription>{caption}</DialogDescription>
            </DialogHeader>
            <div className="relative h-[min(78vh,720px)] min-h-[200px] w-full overflow-hidden rounded-lg bg-muted">
              {isVideo ? (
                <video
                  key={current.src}
                  src={`${current.src}#t=0.1`}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={caption}
                  className="size-full bg-black object-contain"
                />
              ) : (
                <Image
                  src={current.src}
                  alt={altFromFilename(current.filename)}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96vw, min(896px, 92vw)"
                  quality={current.unoptimized ? undefined : 75}
                  unoptimized={current.unoptimized}
                  loading="lazy"
                  placeholder="empty"
                />
              )}
            </div>
            <p className="truncate px-1 text-center text-xs text-muted-foreground">{caption}</p>
            <div className="flex items-center justify-between gap-2 border-t border-border pt-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1"
                onClick={goPrev}
                disabled={count < 2}
              >
                <ChevronLeft className="size-4" aria-hidden />
                Previous
              </Button>
              <span className="text-xs tabular-nums text-muted-foreground">
                {index! + 1} / {count}
              </span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1"
                onClick={goNext}
                disabled={count < 2}
              >
                Next
                <ChevronRight className="size-4" aria-hidden />
              </Button>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

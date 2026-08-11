"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { GalleryPagination } from "@/components/gallery/gallery-pagination";
import { LazyGalleryTile } from "@/components/gallery/lazy-gallery-tile";

const MASONRY_ASPECTS = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[5/6]",
  "aspect-[3/4]",
  "aspect-[4/5]",
] as const;

/** Eager-load first N thumbnails on the *current* page only (keep low to save bandwidth). */
const EAGER_GRID = 3;
const EAGER_MASONRY = 4;

export const DEFAULT_GALLERY_PAGE_SIZE = 9;

type PublicPhotoGalleryProps = {
  images: PublicGalleryImage[];
  variant: "grid" | "masonry";
  className?: string;
  /** Items per page (default {@link DEFAULT_GALLERY_PAGE_SIZE}). */
  pageSize?: number;
};

export function PublicPhotoGallery({
  images,
  variant,
  className,
  pageSize = DEFAULT_GALLERY_PAGE_SIZE,
}: PublicPhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const galleryTopRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(images.length / pageSize));

  useEffect(() => {
    setPage(1);
    setLightboxIndex(null);
  }, [images.length, pageSize]);

  useEffect(() => {
    setPage((p) => Math.min(Math.max(1, p), totalPages));
  }, [totalPages]);

  const handlePageChange = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(1, next), totalPages);
      setPage(clamped);
      setLightboxIndex(null);
      requestAnimationFrame(() => {
        galleryTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    [totalPages]
  );

  if (images.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        New photos from performances and clinics are added regularly — please check back soon.
      </p>
    );
  }

  const start = (page - 1) * pageSize;
  const pageImages = images.slice(start, start + pageSize);
  const eagerCount = variant === "masonry" ? EAGER_MASONRY : EAGER_GRID;

  return (
    <>
      <GalleryLightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />

      <div ref={galleryTopRef} className="scroll-mt-24">
        {variant === "masonry" ? (
          <div className={cn("columns-1 gap-4 sm:columns-2 lg:columns-3", className)}>
            {pageImages.map((img, i) => {
              const globalIndex = start + i;
              return (
                <div key={`${page}-${img.src}`} className="mb-4 break-inside-avoid">
                  <LazyGalleryTile
                    image={img}
                    index={globalIndex}
                    eager={i < eagerCount}
                    aspectClassName={MASONRY_ASPECTS[globalIndex % MASONRY_ASPECTS.length]}
                    rounded="xl"
                    captionSize="xs"
                    onOpen={setLightboxIndex}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
            {pageImages.map((img, i) => {
              const globalIndex = start + i;
              return (
                <LazyGalleryTile
                  key={`${page}-${img.src}`}
                  image={img}
                  index={globalIndex}
                  eager={i < eagerCount}
                  aspectClassName="aspect-[4/3]"
                  rounded="2xl"
                  captionSize="sm"
                  onOpen={setLightboxIndex}
                />
              );
            })}
          </div>
        )}
      </div>

      <GalleryPagination
        page={page}
        totalPages={totalPages}
        totalItems={images.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
}

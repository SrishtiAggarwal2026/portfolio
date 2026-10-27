"use client";

import { useCallback, useMemo, useRef, useState } from "react";
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

export const DEFAULT_GALLERY_PAGE_SIZE = 12;

type PublicPhotoGalleryProps = {
  images: PublicGalleryImage[];
  variant: "grid" | "masonry";
  className?: string;
  /** Items per page (default {@link DEFAULT_GALLERY_PAGE_SIZE}). */
  pageSize?: number;
  /** Show category filter pills (default true). */
  showCategoryFilters?: boolean;
};

export function PublicPhotoGallery({
  images,
  variant,
  className,
  pageSize = DEFAULT_GALLERY_PAGE_SIZE,
  showCategoryFilters = true,
}: PublicPhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [pageState, setPageState] = useState(1);
  const galleryTopRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    images.forEach((img) => {
      if (img.category) set.add(img.category);
    });
    return ["All", ...Array.from(set)];
  }, [images]);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return images;
    return images.filter((img) => img.category === selectedCategory);
  }, [images, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredImages.length / pageSize));
  const page = Math.min(Math.max(1, pageState), totalPages);

  const handlePageChange = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(1, next), totalPages);
      setPageState(clamped);
      setLightboxIndex(null);
      requestAnimationFrame(() => {
        galleryTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    [totalPages]
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPageState(1);
    setLightboxIndex(null);
  };

  if (images.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        New photos from performances and clinics are added regularly — please check back soon.
      </p>
    );
  }

  const start = (page - 1) * pageSize;
  const pageImages = filteredImages.slice(start, start + pageSize);
  const eagerCount = variant === "masonry" ? EAGER_MASONRY : EAGER_GRID;

  return (
    <>
      <GalleryLightbox
        images={filteredImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />

      <div ref={galleryTopRef} className="scroll-mt-24">
        {/* Category Filter Pills */}
        {showCategoryFilters && categories.length > 2 && (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const count =
                cat === "All" ? images.length : images.filter((img) => img.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all shadow-xs",
                    isActive
                      ? "bg-[var(--color-burgundy)] text-white shadow-md ring-2 ring-[var(--color-gold)]/40"
                      : "border border-[var(--color-gold)]/30 bg-card text-muted-foreground hover:bg-[var(--color-cream)]/70 hover:text-foreground"
                  )}
                >
                  {cat} <span className="opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        )}

        {variant === "masonry" ? (
          <div className={cn("columns-1 gap-4 sm:columns-2 lg:columns-3", className)}>
            {pageImages.map((img, i) => {
              const globalIndex = start + i;
              return (
                <div key={`${selectedCategory}-${page}-${img.src}`} className="mb-4 break-inside-avoid">
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
                  key={`${selectedCategory}-${page}-${img.src}`}
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
        totalItems={filteredImages.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
}

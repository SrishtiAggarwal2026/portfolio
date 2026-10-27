"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, Play } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn, getGalleryImageCaption } from "@/lib/utils";

export type CarouselItem =
  | { type: "image"; image: PublicGalleryImage; caption?: string }
  | { type: "video"; src: string; caption: string };

type PhotoCarouselProps = {
  items: CarouselItem[];
  /** Accessible name for the carousel region. */
  label: string;
  aspectClassName?: string;
  sizes?: string;
  autoPlayMs?: number;
  className?: string;
};

const slideVariants = {
  enter: (direction: number) => ({ x: direction >= 0 ? "100%" : "-100%", opacity: 0.4 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction >= 0 ? "-100%" : "100%", opacity: 0.4 }),
};

function captionFor(item: CarouselItem, index: number): string {
  if (item.caption) return item.caption;
  return item.type === "image"
    ? getGalleryImageCaption(item.image.filename, index, item.image.category)
    : "";
}

export function PhotoCarousel({
  items,
  label,
  aspectClassName = "aspect-[4/3]",
  sizes = "(max-width: 1024px) 100vw, 560px",
  autoPlayMs = 5000,
  className,
}: PhotoCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [hovered, setHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);

  const count = items.length;
  const current = items[index];
  const imageItems = useMemo(
    () => items.flatMap((item) => (item.type === "image" ? [item.image] : [])),
    [items]
  );

  const go = useCallback(
    (delta: number) => setSlide(([i]) => [(i + delta + count) % count, delta]),
    [count]
  );
  const goTo = (target: number) => setSlide(([i]) => [target, target >= i ? 1 : -1]);

  const paused =
    hovered || lightboxIndex !== null || !!reduceMotion || count < 2 || current?.type === "video";

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => go(1), autoPlayMs);
    return () => window.clearTimeout(timer);
  }, [paused, index, go, autoPlayMs]);

  // Scroll only the thumbnail strip, never the page.
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [index, reduceMotion]);

  if (count === 0 || !current) return null;

  const openLightbox = () => {
    if (current.type === "image") setLightboxIndex(imageItems.indexOf(current.image));
  };

  const caption = captionFor(current, index);

  return (
    <>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          }
        }}
        className={cn(
          "min-w-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-4",
          className
        )}
      >
        <div
          className={cn(
            "group relative w-full overflow-hidden rounded-2xl border border-[var(--color-gold)]/35 bg-slate-950 shadow-lg",
            aspectClassName
          )}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              drag={count > 1 && current.type === "image" ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragStart={() => {
                draggedRef.current = true;
              }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              onTapStart={() => {
                draggedRef.current = false;
              }}
              onTap={() => {
                if (!draggedRef.current) openLightbox();
              }}
              className={cn("absolute inset-0", current.type === "image" && "cursor-zoom-in")}
            >
              {current.type === "image" ? (
                <>
                  <Image
                    src={current.image.src}
                    alt=""
                    aria-hidden
                    fill
                    sizes="64px"
                    className="scale-110 object-cover opacity-50 blur-2xl"
                    draggable={false}
                  />
                  <Image
                    src={current.image.src}
                    alt={caption}
                    fill
                    sizes={sizes}
                    placeholder="blur"
                    blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                    className="object-contain"
                    draggable={false}
                  />
                </>
              ) : (
                <video
                  src={current.src}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={caption}
                  className="size-full bg-black object-contain"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </>
          ) : null}

          <div className="pointer-events-none absolute right-3 top-3 z-10 flex items-center gap-1.5">
            <span className="rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-semibold tabular-nums text-white backdrop-blur-sm">
              {index + 1} / {count}
            </span>
            {current.type === "image" ? (
              <button
                type="button"
                onClick={openLightbox}
                aria-label="View full size"
                className="pointer-events-auto flex size-7 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75"
              >
                <Expand className="size-3.5" aria-hidden />
              </button>
            ) : null}
          </div>

          {caption && current.type === "image" ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-10">
              <p className="truncate text-xs font-medium text-white sm:text-sm">{caption}</p>
            </div>
          ) : null}
        </div>

        {count > 1 ? (
          <div
            ref={thumbsRef}
            className="relative mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]"
          >
            {items.map((item, i) => (
              <button
                key={item.type === "image" ? item.image.src : item.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show item ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-900 transition",
                  i === index
                    ? "border-[var(--color-gold)] opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                {item.type === "image" ? (
                  <Image src={item.image.src} alt="" fill sizes="80px" className="object-cover" />
                ) : (
                  <span className="flex size-full items-center justify-center text-white">
                    <Play className="size-4 fill-white" aria-hidden />
                  </span>
                )}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <GalleryLightbox
        images={imageItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </>
  );
}

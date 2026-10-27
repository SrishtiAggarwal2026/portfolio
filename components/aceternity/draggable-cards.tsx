"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { cn } from "@/lib/utils";

export type DraggableCardItem = {
  id: string | number;
  image: string;
  tag: string;
  title: string;
  desc: string;
  badge?: string;
  location?: string;
};

export const DEFAULT_HERO_CARDS: DraggableCardItem[] = [
  {
    id: "grant-winner",
    image: "/hero/1.jpeg",
    tag: "Global Recognition",
    title: "International Baccalaureate Showcase",
    desc: "Awarded a USD 2,500 grant through the IB Festival of Hope to strengthen community clinics.",
    badge: "USD $2,500 Grant",
    location: "Festival of Hope",
  },
  {
    id: "legal-clinics",
    image: "/hero/2.jpeg",
    tag: "Field Clinic",
    title: "Rights to Reality — Srishti Aggarwal",
    desc: "On-ground advocacy sessions with women in Mahipalpur and Noida, facilitating legal literacy and welfare scheme access.",
    badge: "2,000+ Women Reached",
    location: "Sector 8, Noida",
  },
  {
    id: "community-dialogue",
    image: "/hero/3.jpeg",
    tag: "Community Dialogue",
    title: "Legal Literacy & Women's Rights",
    desc: "Explaining labor rights, domestic protection acts, and welfare schemes in accessible plain language.",
    badge: "Direct Outreach",
    location: "Mahipalpur, New Delhi",
  },
  {
    id: "voices-unheard",
    image: "/hero/4.jpeg",
    tag: "Spoken-Word Advocacy",
    title: "Voices Unheard Slam Poetry",
    desc: "Adapting firsthand community narratives into powerful slam poetry for school assemblies and festivals.",
    badge: "10 Original Stanzas",
    location: "School & Festival Stages",
  },
  {
    id: "field-outreach",
    image: "/hero/5.jpeg",
    tag: "Direct Support",
    title: "Door-to-Door Scheme Enrollment",
    desc: "Assisting families with paperwork for PMMVY, Sukanya Samriddhi Yojana, and civic entitlements.",
    badge: "Consent-First",
    location: "Delhi Slum Clusters",
  },
  {
    id: "reading-room",
    image: "/hero/6.jpeg",
    tag: "Volunteer Hub",
    title: "Shakurpur Community Reading Room",
    desc: "Partnering with SEWA Bharti & Kitaab4U to create a dedicated children's library with 1,000+ donated books.",
    badge: "800+ Children Impacted",
    location: "Shakurpur Hub",
  },
];

interface DraggableCardStackProps {
  items?: DraggableCardItem[];
  autoDragIntervalMs?: number;
  className?: string;
}

export function DraggableCardStack({
  items = DEFAULT_HERO_CARDS,
  autoDragIntervalMs = 3000,
  className,
}: DraggableCardStackProps) {
  const [cards, setCards] = useState<DraggableCardItem[]>(items);
  const [prevItems, setPrevItems] = useState(items);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);

  // Sync cards when props change without effect waterfall
  if (items !== prevItems) {
    setPrevItems(items);
    setCards(items);
    setActiveIdx(0);
  }

  // Framer Motion controls for the top card
  const topControls = useAnimation();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 250], [-10, 10]);

  // Dismiss top card with smooth physics and cycle it to back
  const cycleCard = useCallback(
    async (direction: "left" | "right" = "right") => {
      const exitX = direction === "right" ? 520 : -520;
      const exitRotate = direction === "right" ? 14 : -14;

      // Animate top card cleanly off-screen
      await topControls.start({
        x: exitX,
        opacity: 0,
        rotate: exitRotate,
        transition: { duration: 0.32, ease: [0.32, 0.72, 0, 1] },
      });

      // Shift cards in state
      setCards((prev) => {
        if (prev.length <= 1) return prev;
        const next = [...prev];
        const top = next.shift()!;
        next.push(top);
        return next;
      });

      setActiveIdx((prev) => (prev + 1) % (items.length || 1));
      setProgress(0);

      // Instantly reset top card position for the new incoming top card
      x.set(0);
      topControls.set({ x: 0, opacity: 1, rotate: 0 });
    },
    [topControls, items.length, x]
  );

  const prevCard = useCallback(async () => {
    // Reverse cycle
    setProgress(0);
    setCards((prev) => {
      if (prev.length <= 1) return prev;
      const next = [...prev];
      const bottom = next.pop()!;
      next.unshift(bottom);
      return next;
    });
    setActiveIdx((prev) => (prev - 1 + (items.length || 1)) % (items.length || 1));
    x.set(0);
    topControls.set({ x: 0, opacity: 1, rotate: 0 });
  }, [topControls, items.length, x]);

  // 3-Second Auto Drag Timer
  useEffect(() => {
    if (isHovered || isDragging) return;

    const tickMs = 50;
    const increment = (tickMs / autoDragIntervalMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          cycleCard("right");
          return 0;
        }
        return prev + increment;
      });
    }, tickMs);

    return () => clearInterval(timer);
  }, [isHovered, isDragging, autoDragIntervalMs, cycleCard]);

  // Handle Drag Release
  const handleDragEnd = async (
    _: unknown,
    info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    setIsDragging(false);
    const swipeThreshold = 85;
    const velocityThreshold = 280;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      await cycleCard("right");
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      await cycleCard("left");
    } else {
      // Spring back to center naturally
      topControls.start({
        x: 0,
        rotate: 0,
        transition: { type: "spring", stiffness: 450, damping: 28 },
      });
    }
  };

  return (
    <div
      className={cn("relative flex w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px] flex-col items-center select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Physical Stack Stage */}
      <div className="relative h-[500px] sm:h-[560px] lg:h-[600px] w-full flex items-center justify-center">
        {cards.slice(0, 3).map((card, index) => {
          const isTop = index === 0;

          // Natural organic deck stacking
          // Card 0 (top): straight, natural
          // Card 1: tilted -3deg, offset y: 12
          // Card 2: tilted +3deg, offset y: 24
          const initialRotate = isTop ? 0 : index === 1 ? -3.5 : 3;
          const initialY = isTop ? 0 : index === 1 ? 12 : 24;
          const initialScale = isTop ? 1 : index === 1 ? 0.95 : 0.90;
          const zIndex = 30 - index * 10;
          const opacity = isTop ? 1 : index === 1 ? 0.92 : 0.72;

          return (
            <motion.div
              key={card.id}
              className={cn(
                "absolute inset-x-2 top-2 bottom-6 sm:inset-x-0 rounded-3xl p-2.5 sm:p-3 bg-white/95 border border-[var(--color-gold)]/45 shadow-[0_22px_55px_rgba(61,26,44,0.15),0_0_28px_rgba(201,168,76,0.22),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-hidden transition-colors",
                isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
              )}
              style={{
                zIndex,
                transformOrigin: "bottom center",
                ...(isTop ? { x, rotate } : {}),
              }}
              animate={
                isTop
                  ? topControls
                  : {
                    rotate: initialRotate,
                    y: initialY,
                    scale: initialScale,
                    opacity,
                    transition: { type: "spring", stiffness: 350, damping: 26 },
                  }
              }
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.02 }}
            >
              {/* Pure Photo Card with Specular Glare */}
              <div className="relative size-full overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/5">
                <Image
                  src={card.image}
                  alt={card.title || "Field photo"}
                  fill
                  sizes="(max-width: 768px) 92vw, 540px"
                  placeholder="blur"
                  blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                  className="object-cover pointer-events-none select-none"
                  priority={isTop}
                />
                {/* Subtle Specular Glare */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-70" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Minimalist Story-Bar Progress Navigation */}
      <div className="mt-2 flex w-full items-center justify-between gap-3 px-3">
        {/* Subtle Prev/Next arrows */}
        <button
          type="button"
          onClick={prevCard}
          aria-label="Previous photo card"
          className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-[var(--color-cream)]/60 transition-colors"
        >
          <ChevronLeft className="size-4" />
        </button>

        {/* Minimalist Story Bars */}
        <div className="flex items-center gap-1.5 flex-1">
          {items.map((_, i) => {
            const isActive = i === activeIdx;
            const isCompleted = i < activeIdx;

            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  const diff = (i - activeIdx + items.length) % items.length;
                  for (let step = 0; step < diff; step++) {
                    cycleCard("right");
                  }
                }}
                aria-label={`Jump to photo ${i + 1}`}
                className="relative h-1 flex-1 overflow-hidden rounded-full bg-[var(--color-gold)]/25 hover:bg-[var(--color-gold)]/50 transition-colors"
              >
                <div
                  className="h-full bg-[var(--color-burgundy)] transition-all duration-75 ease-linear"
                  style={{
                    width: isActive ? `${progress}%` : isCompleted ? "100%" : "0%",
                  }}
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => cycleCard("right")}
          aria-label="Next photo card"
          className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-[var(--color-cream)]/60 transition-colors"
        >
          <ChevronRight className="size-4" />
        </button>

        <span className="text-[11px] font-bold tabular-nums text-foreground tracking-tight">
          {activeIdx + 1}/{items.length}
        </span>
      </div>
    </div>
  );
}

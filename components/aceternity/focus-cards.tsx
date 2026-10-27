"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";

export type FocusCard = {
  title: string;
  src: string;
  subtitle?: string;
  tag?: string;
};

export const FocusCards = ({
  cards,
  className,
}: {
  cards: FocusCard[];
  className?: string;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full",
        className
      )}
    >
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: FocusCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group rounded-3xl relative bg-card overflow-hidden h-[380px] sm:h-[420px] md:h-[440px] w-full transition-all duration-300 ease-out border border-[var(--color-gold)]/30 shadow-md",
        hovered !== null && hovered !== index && "blur-xs scale-[0.98] opacity-65",
        hovered === index && "scale-[1.02] shadow-2xl border-[var(--color-gold)] ring-2 ring-[var(--color-gold)]/40"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
        className="object-cover object-center absolute inset-0 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Floating tag at top-left */}
      {card.tag && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold)] backdrop-blur-md border border-[var(--color-gold)]/30 shadow-xs">
            {card.tag}
          </span>
        </div>
      )}

      {/* Elegant bottom gradient overlay for legible text without obscuring photo */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 pt-20 pb-5 px-5 sm:px-6 transition-all duration-300 bg-gradient-to-t from-black/95 via-black/70 to-transparent",
          hovered === index ? "opacity-100" : "opacity-90"
        )}
      >
        <div className="text-lg md:text-xl font-bold text-white tracking-tight drop-shadow-sm">
          {card.title}
        </div>
        {card.subtitle && (
          <p className="text-xs sm:text-sm text-white/85 mt-1.5 line-clamp-2 leading-relaxed">
            {card.subtitle}
          </p>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

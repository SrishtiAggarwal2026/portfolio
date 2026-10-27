"use client";

import { cn } from "@/lib/utils";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = 40,
  variant = "default",
  itemClassName,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  variant?: "default" | "headline";
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];
  const headline = variant === "headline";
  return (
    <div className="relative overflow-hidden px-4 py-4 sm:px-6">
      <div
        className="ticker-track flex w-max gap-8 whitespace-nowrap pr-10"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {doubled.map((t, i) => (
          <span
            key={`${i}-${t.slice(0, 12)}`}
            className={cn(
              headline
                ? "inline-flex shrink-0 items-center font-serif text-base italic text-[var(--color-burgundy)] sm:text-lg"
                : "inline-block w-[min(88vw,760px)] shrink-0 whitespace-normal px-2 text-center font-serif text-base leading-relaxed italic text-[var(--color-burgundy)] sm:text-lg md:text-xl",
              itemClassName
            )}
          >
            “{t}”
            <span className="mx-6 text-[var(--color-gold)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

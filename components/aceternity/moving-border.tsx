"use client";

import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl p-[2px]", containerClassName)}>
      <span
        className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,var(--color-burgundy),var(--color-gold),var(--color-burgundy))] opacity-90"
        aria-hidden
      />
      <div
        className={cn(
          "relative rounded-[10px] bg-primary px-6 py-2.5 text-primary-foreground",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

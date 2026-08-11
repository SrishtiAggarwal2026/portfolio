"use client";

export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[var(--color-burgundy)]/15 bg-gradient-to-b from-[var(--color-cream)]/80 to-[var(--color-paper)] px-4 py-12 sm:rounded-3xl sm:px-8 sm:py-16 md:px-12 ${className ?? ""}`}
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,oklch(0.75_0.12_75/0.35),transparent_70%)] blur-2xl"
        aria-hidden
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

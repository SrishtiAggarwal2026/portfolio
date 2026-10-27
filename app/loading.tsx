export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-[var(--color-paper)]/90 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing spinner ring */}
        <div className="size-16 rounded-full border-2 border-[var(--color-gold)]/20 border-t-[var(--color-burgundy)] border-r-[var(--color-gold)] animate-spin" />
        
        {/* Inner center badge */}
        <div className="absolute flex size-10 items-center justify-center rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/40 shadow-xs">
          <span className="size-3 rounded-full bg-[var(--color-burgundy)] animate-pulse" />
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-burgundy)] animate-pulse">
          Voices Unheard
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Rights to Reality Advocacy Clinic
        </p>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

type TimelineItemProps = {
  phase: string;
  detail: string;
  index: number;
  isLast?: boolean;
};

export function TimelineItem({
  phase,
  detail,
  index,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 md:gap-10">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-sm font-medium tabular-nums",
            "ring-1 ring-foreground/10"
          )}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        {!isLast ? (
          <div
            className="mt-2 w-px flex-1 min-h-[2rem] bg-border"
            aria-hidden
          />
        ) : null}
      </div>
      <div className={cn("pb-12", isLast && "pb-0")}>
        <h3 className="font-heading text-lg font-semibold">{phase}</h3>
        <p className="mt-2 max-w-xl text-muted-foreground leading-relaxed">
          {detail}
        </p>
      </div>
    </div>
  );
}

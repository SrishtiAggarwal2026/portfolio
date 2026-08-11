import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?:
    | "default"
    | "muted"
    | "contrast"
    | "paper"
    | "depth"
    | "night"
    | "wash";
};

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
  variant = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-20 md:py-28",
        variant === "muted" && "bg-muted/50",
        variant === "contrast" && "bg-foreground text-background",
        variant === "paper" &&
          "bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-100/80 dark:from-stone-950 dark:via-stone-900/80 dark:to-stone-950",
        variant === "depth" &&
          "bg-gradient-to-b from-background via-muted/30 to-background shadow-[inset_0_1px_0_0_oklch(0_0_0/0.06)] dark:shadow-[inset_0_1px_0_0_oklch(1_0_0/0.06)]",
        variant === "night" &&
          "bg-zinc-950 text-zinc-50 [&_.text-muted-foreground]:text-zinc-400",
        variant === "wash" &&
          "bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,oklch(0.96_0.02_85/0.5),transparent_55%)]",
        className
      )}
    >
      <div
        className={cn(
          "relative z-[1] mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

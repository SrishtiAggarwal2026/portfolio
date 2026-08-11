import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  /** Larger display type for major section breaks */
  size?: "default" | "display";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  size = "default",
  className,
}: SectionHeadingProps) {
  const inverse = tone === "inverse";

  return (
    <div
      className={cn(
        "mb-12 max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Badge
          variant={inverse ? "outline" : "secondary"}
          className={cn(
            "font-medium tracking-wide uppercase",
            inverse && "border-white/25 bg-transparent text-background"
          )}
        >
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "font-heading font-semibold tracking-tight text-balance",
          size === "display" &&
            "text-4xl tracking-tighter md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]",
          size === "default" && "text-3xl md:text-4xl",
          inverse && "text-background"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-lg leading-relaxed text-pretty",
            inverse ? "text-background/75" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  width?: number;
  height?: number;
  sizes?: string;
};

export function PlaceholderImage({
  label,
  alt,
  className,
  aspectClassName = "aspect-video",
}: PlaceholderImageProps) {
  return (
    <figure className={cn("space-y-2", className)}>
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-muted ring-1 ring-border",
          aspectClassName
        )}
      >
        <ImageIcon className="size-8 text-muted-foreground/50" aria-hidden />
      </div>
      <figcaption className="text-center text-xs text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

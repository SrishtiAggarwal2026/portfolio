import Image from "next/image";
import { PLACEHOLDER_BLUR_DATA_URL } from "@/lib/image-placeholder";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  /** Used for `sizes` (responsive srcset), not layout — image fills the aspect box via `fill`. */
  width?: number;
  height?: number;
  sizes?: string;
};

export function PlaceholderImage({
  label,
  alt,
  className,
  aspectClassName = "aspect-video",
  width = 800,
  sizes,
}: PlaceholderImageProps) {
  return (
    <figure className={cn("space-y-2", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-border",
          aspectClassName
        )}
      >
        <Image
          src="/placeholder.svg"
          alt={alt}
          fill
          sizes={sizes ?? `(max-width: 768px) 100vw, ${width}px`}
          placeholder="blur"
          blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
          className="object-cover opacity-90 transition-opacity duration-500"
        />
      </div>
      <figcaption className="text-center text-xs text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

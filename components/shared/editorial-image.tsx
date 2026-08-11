import Image from "next/image";
import { cn } from "@/lib/utils";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/** Full-width narrative image with soft mask and gradient blend */
export function EditorialImage({
  src,
  alt,
  className,
  aspectClassName = "aspect-[21/9] md:aspect-[2.4/1]",
  priority = false,
  sizes = "(min-width: 1024px) 72rem, 100vw",
}: EditorialImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/15 ring-1 ring-black/5 dark:shadow-black/40 dark:ring-white/10",
        aspectClassName,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-center transition-transform duration-[2s] ease-out hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent dark:from-zinc-950/50" />
    </div>
  );
}

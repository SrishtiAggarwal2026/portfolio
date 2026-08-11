import Image from "next/image";
import { cn } from "@/lib/utils";

type StripItem = {
  src: string;
  alt: string;
};

type ImageStripProps = {
  items: StripItem[];
  className?: string;
};

/** Row of related images — adds rhythm and human texture */
export function ImageStrip({ items, className }: ImageStripProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4",
        items.length === 2 && "sm:grid-cols-2",
        className
      )}
    >
      {items.map((item, i) => (
        <div
          key={`${item.src}-${i}`}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
        </div>
      ))}
    </div>
  );
}

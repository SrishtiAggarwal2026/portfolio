"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <Card
        className={cn(
          "group/card h-full overflow-hidden border-border/60 bg-card/90 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.04]",
          "transition-[box-shadow,transform] duration-300 hover:shadow-2xl hover:shadow-amber-950/10 hover:ring-amber-500/15",
          "dark:shadow-black/40 dark:ring-white/5 dark:hover:ring-amber-400/20"
        )}
      >
        {imageSrc ? (
          <div className="relative h-44 overflow-hidden sm:h-48">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-60 mix-blend-overlay" />
          </div>
        ) : null}
        <CardHeader className="gap-3">
          <CardTitle className="text-lg leading-snug tracking-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

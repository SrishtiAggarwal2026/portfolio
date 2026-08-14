"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SparklesCore } from "@/components/aceternity/sparkles-core";
import { PublicPhotoGallery } from "@/components/gallery/public-photo-gallery";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { voicesPage } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";
import { cn } from "@/lib/utils";

type VoicesPageProps = {
  galleryImages: PublicGalleryImage[];
};

export default function VoicesPage({ galleryImages }: VoicesPageProps) {
  return (
    <div className="flex min-w-0 flex-col">
      <section className="relative overflow-hidden bg-[var(--color-charcoal)] py-16 text-primary-foreground sm:py-20 md:py-28">
        <SparklesCore className="opacity-90" />
        <div className="relative z-[1] mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-cream)] sm:text-4xl md:text-5xl">
            Where Stories Become Stanzas
          </h1>
          <p className="mt-6 text-pretty text-base text-white/80 sm:text-lg">{voicesPage.heroSub}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-center font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
          How Stories Become Poetry
        </h2>
        <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-2 md:gap-3">
          {voicesPage.flow.map((step, i) => (
            <Fragment key={step}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-full max-w-xs flex-1 rounded-2xl border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/60 px-3 py-3.5 text-center text-xs font-semibold whitespace-nowrap text-foreground shadow-xs sm:max-w-none sm:px-3 sm:py-4 sm:text-xs md:text-sm lg:px-4 lg:text-base"
              >
                {step}
              </motion.div>
              {i < voicesPage.flow.length - 1 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="shrink-0 text-[var(--color-burgundy)]"
                  aria-hidden
                >
                  <ArrowRight className="hidden size-4 shrink-0 sm:block md:size-5" />
                  <ArrowDown className="size-4 shrink-0 sm:hidden" />
                </motion.div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="min-w-0 bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)]">
            Performance Gallery
          </h2>
          <div className="mt-10">
            <PublicPhotoGallery images={galleryImages} variant="grid" />
          </div>
        </div>
      </section>

      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--color-burgundy)] sm:text-3xl">
          Upcoming & Past Performances
        </h2>
        <div className="mt-8 min-w-0 rounded-xl border border-border bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {voicesPage.performances.map((row) => (
                <TableRow key={row.event}>
                  <TableCell className="font-medium">{row.event}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.venue}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={row.status === "Upcoming" ? "default" : "secondary"}>
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--color-paper)] py-16 md:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <Card className="border-[var(--color-burgundy)]/25 bg-[var(--color-cream)]/50">
            <CardContent className="space-y-6 p-6 text-center sm:p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--color-burgundy)]">
                Contribute Your Voice
              </h2>
              <p className="text-muted-foreground">Have a story to share? We listen with dignity.</p>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-[var(--color-burgundy)] text-primary-foreground hover:bg-[var(--color-burgundy)]/90"
                )}
              >
                Get in Touch
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

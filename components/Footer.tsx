"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navLinks, siteMeta } from "@/data/site";

/** Project site credit year (per initiative branding). */
const year = 2026;

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--color-gold)]/25 bg-footer-grain bg-[var(--color-cream)]/35 backdrop-blur-xs overflow-hidden">
      {/* Subtle top shimmer accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 md:grid-cols-3"
        >
          {/* Column 1: Org info, Award & LinkedIn */}
          <div>
            <p className="text-xl font-bold tracking-tight text-[var(--color-burgundy)]">
              {siteMeta.org}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{siteMeta.description}</p>

            {/* Animated Winner Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 px-3.5 py-1 text-xs font-medium text-[var(--color-burgundy)] shadow-xs transition-shadow duration-300 hover:shadow-md">
              <span className="relative flex size-2 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--color-gold)] opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[var(--color-gold)]" />
              </span>
              IB Global Youth Action Fund Winner
            </div>

            {/* LinkedIn Connect */}
            <div className="mt-4">
              <a
                href={siteMeta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1.5 text-xs font-semibold text-[var(--color-burgundy)] hover:bg-[var(--color-burgundy)] hover:text-white hover:border-[var(--color-burgundy)] transition-all shadow-xs"
              >
                <LinkedInIcon className="size-3.5" />
                <span>Connect with Srishti on LinkedIn</span>
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links with sliding arrows */}
          <div className="md:justify-self-center">
            <p className="text-sm font-semibold text-foreground tracking-wide uppercase">Quick Links</p>
            <ul className="mt-3.5 space-y-2.5 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 rounded-sm transition-colors duration-200 hover:text-[var(--color-burgundy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <span className="text-[var(--color-gold)] text-xs opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Partnerships */}
          <div>
            <p className="text-sm font-semibold text-foreground tracking-wide uppercase">Partnerships</p>
            <p className="mt-3 text-sm text-muted-foreground">
              In official partnership with{" "}
              <span className="font-semibold text-foreground">{siteMeta.partnerNgo}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Supported through{" "}
              <span className="font-semibold text-foreground">{siteMeta.school}</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Community literacy in Shakurpur with SEWA Bharti &amp; Kitaab4U.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-burgundy)] hover:text-[var(--color-gold)] transition-colors group"
              >
                <span>Partner or invite our clinic</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        <Separator className="my-10 bg-[var(--color-gold)]/20" />

        {/* Bottom Bar with Back to Top & LinkedIn */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <p>
              © {year} {siteMeta.founder} · {siteMeta.org}
            </p>
            <span className="text-[var(--color-gold)]/50">·</span>
            <a
              href={siteMeta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-burgundy)] font-medium hover:underline"
              aria-label="Srishti Aggarwal on LinkedIn"
            >
              <LinkedInIcon className="size-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="text-center sm:text-right hidden md:block">
            Rights to Reality Advocacy Clinic &amp; Voices Unheard
          </p>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 px-3.5 py-1.5 text-xs font-medium text-[var(--color-burgundy)] shadow-xs hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)] transition-all cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="size-3.5 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

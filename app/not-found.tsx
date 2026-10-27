"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Compass,
  Home,
  Mic2,
  Calendar,
  Sparkles,
  Users,
  Layers,
  Search,
} from "lucide-react";
import { siteMeta } from "@/data/site";

const quickLinks = [
  {
    href: "/",
    label: "Home",
    description: "Movement overview, core statistics, and live community impact.",
    icon: Home,
  },
  {
    href: "/about",
    label: "About Founder",
    description: "Srishti Aggarwal's journey, values, and community commitments.",
    icon: Users,
  },
  {
    href: "/initiative",
    label: "Initiative (4 Pillars)",
    description: "Advocacy Clinic, Voices Unheard, F-1 World National Finals & Reading Room.",
    icon: Layers,
  },
  {
    href: "/voices",
    label: "Voices Unheard",
    description: "Consent-based slam poetry performances and spoken-word archive.",
    icon: Mic2,
  },
  {
    href: "/timeline",
    label: "Project Timeline",
    description: "12+ months from grassroots listening to international grant recognition.",
    icon: Calendar,
  },
  {
    href: "/contact",
    label: "Get Involved",
    description: "Volunteer with our clinics or partner with our advocacy movement.",
    icon: HeartHandshakeIcon,
  },
];

function HeartHandshakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold)]/15 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-burgundy)] shadow-xs">
          <Compass className="size-3.5 text-[var(--color-gold)] animate-spin-slow" />
          Page Not Found · Error 404
        </div>

        {/* Artistic 404 Display */}
        <div className="relative mt-6 select-none">
          <span className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tight text-[var(--color-burgundy)]/15 dark:text-white/10">
            404
          </span>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-burgundy)] dark:text-foreground">
              Story In Uncharted Waters
            </h1>
          </div>
        </div>

        {/* Poetic subtext fitting Voices Unheard */}
        <p className="mx-auto mt-2 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          &ldquo;Silence is not absence — it is a room waiting for a microphone.&rdquo;
        </p>
        <p className="mx-auto mt-1 max-w-lg text-sm text-muted-foreground/80">
          The page you are looking for may have been moved, renamed, or does not exist — but the work on the ground continues.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-burgundy)] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[rgba(114,47,55,0.25)] hover:brightness-110 transition-all hover:scale-105"
          >
            <ArrowLeft className="size-4" />
            Return to Homepage
          </Link>
          <Link
            href="/initiative"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-card px-6 py-3 text-sm font-bold text-foreground shadow-xs hover:bg-[var(--color-cream)]/70 transition-all hover:border-[var(--color-gold)]"
          >
            <Sparkles className="size-4 text-[var(--color-gold)]" />
            Explore the 4 Pillars
          </Link>
        </div>

        {/* Helpful directory of core destinations */}
        <div className="mt-14 pt-10 border-t border-[var(--color-gold)]/20 text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            <Search className="size-3.5 text-[var(--color-gold)]" />
            <span>Navigate to key sections</span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col justify-between rounded-2xl border border-[var(--color-gold)]/25 bg-card/80 p-4 transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[var(--color-cream)]/50 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--color-gold)]/15 text-[var(--color-burgundy)] group-hover:scale-110 transition-transform">
                      <Icon className="size-4 text-[var(--color-burgundy)]" />
                    </div>
                    <span className="text-sm font-bold text-foreground group-hover:text-[var(--color-burgundy)] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer Brand note */}
        <p className="mt-10 text-xs text-muted-foreground/60">
          {siteMeta.org} · {siteMeta.school}
        </p>
      </motion.div>
    </div>
  );
}

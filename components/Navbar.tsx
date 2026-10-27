"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { navLinks, siteMeta } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() ?? 0;
    const diff = current - prev;

    if (current < 40) {
      setVisible(true);
    } else if (diff > 8) {
      // scrolling down - tuck away
      setVisible(false);
      setMobileOpen(false);
    } else if (diff < -8) {
      // scrolling up - reveal
      setVisible(true);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 sm:top-5 inset-x-0 z-50 mx-auto flex max-w-fit items-center justify-center px-3 sm:px-4"
      >
        <div className="flex items-center gap-1 sm:gap-2 rounded-full border border-[var(--color-gold)]/45 bg-white/90 px-3 sm:px-4 py-1.5 shadow-[0_12px_36px_rgba(201,168,76,0.15),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)] backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10">
          {/* Brand mark with Srishti Aggarwal & Rights to Reality */}
          <Link
            href="/"
            className="group flex items-center gap-2 pr-2.5 sm:pr-3.5 border-r border-[var(--color-gold)]/30 transition-transform duration-200 active:scale-95 focus-visible:outline-none"
          >
            {/* Small circular avatar / badge */}
            <div className="relative size-7 sm:size-8 shrink-0 overflow-hidden rounded-full border border-[var(--color-gold)]/50 ring-1 ring-background shadow-xs">
              <Image
                src="/profile_pic.jpeg"
                alt="Srishti Aggarwal"
                fill
                sizes="32px"
                className="object-cover object-[50%_25%]"
              />
            </div>

            {/* Name & Subtitle */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1">
                <span className="font-extrabold tracking-tight text-xs sm:text-[13px] text-[var(--color-burgundy)] group-hover:text-[var(--color-gold)] transition-colors leading-tight">
                  {siteMeta.founder}
                </span>
              </div>
              <span className="text-[10px] font-medium text-muted-foreground/85 tracking-wide leading-none hidden lg:block">
                Rights to Reality
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              const isCta = l.href === "/contact";

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative whitespace-nowrap rounded-full px-3 py-1 text-[13px] font-medium transition-all duration-200",
                    active
                      ? "text-white font-semibold shadow-xs"
                      : isCta
                      ? "text-[var(--color-burgundy)] font-semibold hover:bg-[var(--color-gold)]/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-[var(--color-cream)]/60"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 z-[-1] rounded-full bg-[var(--color-burgundy)] shadow-[0_2px_12px_rgba(123,59,94,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex lg:hidden p-2.5 -mr-1 rounded-full text-[var(--color-burgundy)] hover:bg-[var(--color-cream)]/70 transition-all active:scale-95 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        {mobileOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-14 inset-x-3 mx-auto max-w-xs rounded-3xl border border-[var(--color-gold)]/40 bg-[var(--color-paper)]/98 p-3 shadow-2xl backdrop-blur-2xl lg:hidden ring-1 ring-black/5"
          >
            {/* Header in mobile menu */}
            <div className="flex items-center gap-2.5 px-3 py-2 border-b border-[var(--color-gold)]/20 mb-1">
              <div className="relative size-8 shrink-0 overflow-hidden rounded-full border border-[var(--color-gold)]/50">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Srishti Aggarwal"
                  fill
                  sizes="32px"
                  className="object-cover object-[50%_25%]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xs text-[var(--color-burgundy)]">
                  {siteMeta.founder}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Rights to Reality &amp; Voices Unheard
                </span>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((l, index) => {
                const active = pathname === l.href;
                const isCta = l.href === "/contact";

                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-[var(--color-burgundy)] text-white font-semibold shadow-xs"
                          : isCta
                          ? "bg-[var(--color-cream)] text-[var(--color-burgundy)] font-bold border border-[var(--color-gold)]/40"
                          : "text-foreground hover:bg-[var(--color-cream)]/70"
                      )}
                    >
                      <span>{l.label}</span>
                      {active && <span className="size-1.5 rounded-full bg-white" />}
                      {isCta && !active && <ArrowRight className="size-3 text-[var(--color-gold)]" />}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </motion.header>
    </AnimatePresence>
  );
}

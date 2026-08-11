"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { navLinks, siteMeta } from "@/data/site";
import { cn } from "@/lib/utils";

function HeartMicIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 6c-2.5 0-4.5 2-4.5 4.5 0 3.5 4.5 8 4.5 8s4.5-4.5 4.5-8C20.5 8 18.5 6 16 6z"
        fill="currentColor"
        className="text-[var(--color-burgundy)]"
      />
      <path
        d="M12 22v3h8v-3M16 25v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-[var(--color-burgundy)]"
      />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Desktop: real hover. Mobile sheet: no hover background — touch browsers keep :hover after tap and look like a second “active” row. */
  function navLinkClass(href: string, placement: "bar" | "sheet") {
    const active = pathname === href;
    return cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      active
        ? "bg-secondary font-semibold text-[var(--color-burgundy)] shadow-sm ring-1 ring-[var(--color-burgundy)]/10"
        : cn(
            "text-muted-foreground",
            placement === "bar" && "hover:bg-secondary hover:text-foreground",
            placement === "sheet" && "active:bg-secondary/40"
          )
    );
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-shadow duration-300",
        elevated ? "border-border shadow-sm" : "border-border/80 shadow-none"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <HeartMicIcon className="size-7 shrink-0 sm:size-8" />
          <span className="truncate font-[family-name:var(--font-playfair)] text-base font-semibold tracking-tight text-[var(--color-burgundy)] sm:text-lg md:text-xl">
            {siteMeta.title}
          </span>
        </Link>

        <nav
          className="hidden max-w-[calc(100%-12rem)] flex-wrap items-center justify-end gap-x-0.5 gap-y-1 lg:flex"
          aria-label="Main"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(navLinkClass(l.href, "bar"), "shrink-0 px-2 py-2 text-sm lg:px-2.5")}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="w-[min(100%,320px)]">
            <SheetHeader>
              <SheetTitle className="font-[family-name:var(--font-playfair)] text-left">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={navLinkClass(l.href, "sheet")}
                  aria-current={pathname === l.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

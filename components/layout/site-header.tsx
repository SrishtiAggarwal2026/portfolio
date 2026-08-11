import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.home}
          className="group flex min-w-0 flex-col leading-tight"
        >
          <span className="truncate text-sm font-semibold tracking-tight">
            {site.org.fullName}
          </span>
          <span className="truncate text-xs text-muted-foreground">
            {site.org.shortName}
          </span>
        </Link>
        <nav
          className="hidden items-center gap-1 overflow-x-auto md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/60 px-4 py-2 md:hidden">
        <nav
          className="flex max-w-full gap-2 overflow-x-auto pb-1"
          aria-label="Primary mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

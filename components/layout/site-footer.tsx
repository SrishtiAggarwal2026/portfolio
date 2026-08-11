import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS } from "@/lib/constants";
import { site } from "@/lib/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold">{site.org.fullName}</p>
            <p className="mt-1 text-sm text-muted-foreground">{site.org.tagline}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {year} {site.org.shortName}. All rights reserved.
          </p>
        </div>
        <Separator className="my-8" />
        <nav
          className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
          aria-label="Footer"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {site.org.description}
        </p>
      </div>
    </footer>
  );
}

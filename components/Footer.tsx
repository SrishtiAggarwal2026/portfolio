import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navLinks, siteMeta } from "@/data/site";

/** Project site credit year (per initiative branding). */
const year = 2026;

export function Footer() {
  return (
    <footer className="border-t border-border bg-footer-grain bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--color-burgundy)]">
              {siteMeta.org}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{siteMeta.description}</p>
          </div>
          <div className="md:justify-self-center">
            <p className="text-sm font-semibold text-foreground">Quick links</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {navLinks.slice(0, 6).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-sm transition-colors hover:text-[var(--color-burgundy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Partner</p>
            <p className="mt-3 text-sm text-muted-foreground">
              In partnership with{" "}
              <span className="font-medium text-foreground">{siteMeta.partnerNgo}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{siteMeta.school}</span>
            </p>
          </div>
        </div>
        <Separator className="my-10" />
        <p className="mx-auto max-w-prose px-2 text-center text-xs leading-relaxed text-pretty text-muted-foreground break-words">
          © {year} {siteMeta.founder} · {siteMeta.org}
        </p>
      </div>
    </footer>
  );
}

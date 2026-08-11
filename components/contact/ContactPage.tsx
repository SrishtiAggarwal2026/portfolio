"use client";

import { useSearchParams } from "next/navigation";
import { HoverEffect } from "@/components/aceternity/hover-effect";
import { MovingBorder } from "@/components/aceternity/moving-border";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, siteMeta } from "@/data/site";
import { getFormSubmitActionUrl, getFormSubmitThankYouUrl } from "@/lib/form-submit";
import { cn } from "@/lib/utils";

const involvementOptions = [
  "Volunteer",
  "Partner (NGO / school)",
  "Share a story",
  "Media / general inquiry",
];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";
  const formAction = getFormSubmitActionUrl();
  const thankYouUrl = getFormSubmitThankYouUrl();

  return (
    <div className="flex min-w-0 flex-col">
      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h1 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
          Get Involved
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Whether you want to volunteer, host a performance, or share a story — start here.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contact.involvement.map((item) => (
            <HoverEffect key={item.title}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </HoverEffect>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/25 py-16 md:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--color-burgundy)]">
            Contact
          </h2>
          {sent ? (
            <p
              className="mt-8 rounded-lg border border-[var(--color-burgundy)]/25 bg-[var(--color-cream)]/50 p-4 text-sm font-medium text-[var(--color-burgundy)]"
              role="status"
            >
              Thanks — your message was sent. We&apos;ll get back to you soon.
            </p>
          ) : null}
          <form
            action={formAction ?? undefined}
            method="POST"
            className="mt-8 space-y-6"
          >
            <input type="hidden" name="_subject" value={`Get involved — ${siteMeta.title}`} />
            {thankYouUrl ? <input type="hidden" name="_next" value={thankYouUrl} /> : null}
            <input type="hidden" name="_template" value="table" />
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                disabled={!formAction}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="your.email@organisation.org"
                disabled={!formAction}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org">Organisation (optional)</Label>
              <Input
                id="org"
                name="org"
                placeholder="School, NGO, or company"
                disabled={!formAction}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="involve">How you&apos;d like to get involved</Label>
              <select
                id="involve"
                name="involve"
                required
                defaultValue=""
                disabled={!formAction}
                className={cn(
                  "flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none",
                  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                  !formAction && "cursor-not-allowed opacity-60"
                )}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {involvementOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us more…"
                disabled={!formAction}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Submissions are delivered by{" "}
              <a
                href="https://formsubmit.co"
                className="underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                FormSubmit
              </a>
              . You may need to confirm your email the first time a message arrives.
            </p>
            <button
              type="submit"
              className="cursor-pointer border-0 bg-transparent p-0 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!formAction}
            >
              <MovingBorder containerClassName="rounded-xl">
                <span className="flex items-center gap-2 px-4 py-2 text-sm font-semibold">
                  Send message
                </span>
              </MovingBorder>
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-center font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--color-burgundy)]">
          Partnership
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/40 px-6 py-8">
                <p className="text-balance text-center font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {siteMeta.partnerNgo}
                </p>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                On-ground partner for welfare access and community trust.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/40 px-6 py-8">
                <p className="text-balance text-center font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {siteMeta.school}
                </p>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Institutional home for youth leadership and performances.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

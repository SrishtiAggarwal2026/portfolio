"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowDown, Send, HeartHandshake, School, Sparkles } from "lucide-react";
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

const tabToOptionMap: Record<string, string> = {
  "Volunteer With Us": "Volunteer",
  "Partner as an NGO/School": "Partner (NGO / school)",
  "Share Your Story": "Share a story",
};

const tabIcons: Record<string, React.ElementType> = {
  "Volunteer With Us": HeartHandshake,
  "Partner as an NGO/School": School,
  "Share Your Story": Sparkles,
};

export default function ContactPage() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";
  const [selectedInvolvement, setSelectedInvolvement] = useState<string>("Volunteer");
  const formAction = getFormSubmitActionUrl();
  const thankYouUrl = getFormSubmitThankYouUrl();

  const handleTabClick = (title: string) => {
    const mapped = tabToOptionMap[title] ?? "Volunteer";
    setSelectedInvolvement(mapped);
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex min-w-0 flex-col">
      <section className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h1 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
          Get Involved
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Whether you want to volunteer, host a performance, or share a story — select a pathway below to start.
        </p>

        {/* 3 Clickable Involvement Tabs */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contact.involvement.map((item) => {
            const mappedVal = tabToOptionMap[item.title] ?? "Volunteer";
            const isSelected = selectedInvolvement === mappedVal;
            const Icon = tabIcons[item.title] ?? HeartHandshake;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => handleTabClick(item.title)}
                className={cn(
                  "group relative flex flex-col justify-between rounded-2xl border p-6 text-left transition-all duration-300 cursor-pointer",
                  isSelected
                    ? "border-[var(--color-burgundy)] bg-[var(--color-cream)]/90 shadow-md ring-2 ring-[var(--color-burgundy)]/25 -translate-y-1"
                    : "border-border bg-card/90 shadow-xs hover:-translate-y-1 hover:border-[var(--color-gold)]/50 hover:shadow-md"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-xl transition-colors",
                        isSelected
                          ? "bg-[var(--color-burgundy)] text-white shadow-xs"
                          : "bg-muted text-muted-foreground group-hover:bg-[var(--color-burgundy)]/10 group-hover:text-[var(--color-burgundy)]"
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-burgundy)] px-2.5 py-0.5 text-[11px] font-semibold text-white">
                        <CheckCircle2 className="size-3" /> Selected
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
                        Click to select ↓
                      </span>
                    )}
                  </div>
                  <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-burgundy)]">
                  <span>Fill details below</span>
                  <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="scroll-mt-24 border-y border-border bg-secondary/25 py-16 md:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="text-center sm:text-left">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-semibold text-[var(--color-burgundy)]">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Direct inbox for Srishti Aggarwal · Rights to Reality &amp; Voices Unheard
            </p>
          </div>

          {sent ? (
            <div
              className="mt-8 rounded-2xl border border-[var(--color-burgundy)]/30 bg-[var(--color-cream)]/70 p-6 text-center shadow-xs"
              role="status"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[var(--color-burgundy)] text-white">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-burgundy)]">
                Thank You!
              </h3>
              <p className="mt-1.5 text-sm text-foreground/90">
                Your message has been sent successfully. We will get back to you shortly.
              </p>
            </div>
          ) : null}

          <form
            action={formAction}
            method="POST"
            className="mt-8 space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs"
          >
            {/* FormSubmit Configurations */}
            <input type="hidden" name="_subject" value={`New Get Involved Inquiry — ${siteMeta.title}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for reaching out to Srishti Aggarwal (Rights to Reality & Voices Unheard). We have received your inquiry and will be in touch soon."
            />
            {thankYouUrl ? <input type="hidden" name="_next" value={thankYouUrl} /> : null}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your full name"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your.email@domain.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="org">Organisation / School (optional)</Label>
              <Input
                id="org"
                name="org"
                placeholder="School, NGO, university, or company"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="involve">How you&apos;d like to get involved *</Label>
              <select
                id="involve"
                name="involve"
                required
                value={selectedInvolvement}
                onChange={(e) => setSelectedInvolvement(e.target.value)}
                className={cn(
                  "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none cursor-pointer",
                  "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
                )}
              >
                {involvementOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Message *</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us more about how you'd like to collaborate or get involved…"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[var(--color-burgundy)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-burgundy)]/90 hover:shadow-md cursor-pointer"
              >
                <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-center font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-semibold text-[var(--color-burgundy)]">
          Key Partnerships
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card className="border-border shadow-xs hover:border-[var(--color-gold)]/40 hover:shadow-md transition-all">
            <CardContent className="space-y-4 p-6">
              <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/40 px-6 py-8">
                <p className="text-balance text-center font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {siteMeta.partnerNgo}
                </p>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                On-ground partner for grassroots welfare access, Anganwadi outreach, and community trust.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border shadow-xs hover:border-[var(--color-gold)]/40 hover:shadow-md transition-all">
            <CardContent className="space-y-4 p-6">
              <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-[var(--color-burgundy)]/20 bg-[var(--color-cream)]/40 px-6 py-8">
                <p className="text-balance text-center font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {siteMeta.school}
                </p>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Institutional home for student leadership, IB Global Grant nomination, and public performances.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

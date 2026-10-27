"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Building, GraduationCap, HeartHandshake, Mail, Send, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TextReveal } from "@/components/motion/text-reveal";
import { contact, siteMeta } from "@/data/site";
import { getFormSubmitActionUrl, getFormSubmitThankYouUrl } from "@/lib/form-submit";
import { cn } from "@/lib/utils";

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

const involvementOptions = [
  "Volunteer at Community Clinics",
  "Partner School or NGO",
  "Host a Slam Poetry Performance",
  "Share a Story (Confidential)",
  "General Inquiry",
];

const involvementIcons = [Users, GraduationCap, HeartHandshake];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";
  const formAction = getFormSubmitActionUrl();
  const thankYouUrl = getFormSubmitThankYouUrl();

  return (
    <div className="flex min-w-0 flex-col">
      {/* Hero Overview */}
      <section className="relative overflow-hidden bg-[var(--color-paper)] pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[1] mx-auto min-w-0 max-w-6xl px-4 sm:px-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)]/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-burgundy)] shadow-xs">
            Connect · Collaborate · Amplify
          </div>
          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-[var(--color-burgundy)] sm:text-4xl md:text-5xl">
            <TextReveal text="Get Involved" delay={0.15} />
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Join on-ground clinics, host a slam poetry assembly, or partner as an institution.
          </p>

          {/* 3 Quick Action Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contact.involvement.map((item, i) => {
              const Icon = involvementIcons[i] ?? HeartHandshake;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="glass-panel rounded-2xl border border-[var(--color-gold)]/35 bg-card/90 p-6 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-burgundy)]/10 text-[var(--color-burgundy)] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground">
                        {item.badge}
                      </span>
                    </div>
                    <h2 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="border-y border-[var(--color-gold)]/25 bg-secondary/25 py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 sm:p-10 border-[var(--color-gold)]/40 shadow-xl relative overflow-hidden"
          >
            <div className="text-center mb-8 relative z-[1]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
                <Mail className="size-3.5" /> Direct Contact
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-burgundy)]">
                Send a Message
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                We respond to inquiries within 24–48 hours.
              </p>
            </div>

            {sent ? (
              <p
                className="mb-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-sm font-semibold text-emerald-800 dark:text-emerald-300"
                role="status"
              >
                ✨ Thank you! Your message was sent successfully. We will be in touch shortly.
              </p>
            ) : null}

            <form
              action={formAction ?? undefined}
              method="POST"
              className="space-y-5 relative z-[1]"
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    disabled={!formAction}
                    className="h-11 md:h-10 border-[var(--color-gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40 bg-background/80"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your.email@example.org"
                    disabled={!formAction}
                    className="h-11 md:h-10 border-[var(--color-gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40 bg-background/80"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="org" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Organisation (optional)
                </Label>
                <Input
                  id="org"
                  name="org"
                  placeholder="School, NGO, or institution"
                  disabled={!formAction}
                  className="h-11 md:h-10 border-[var(--color-gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40 bg-background/80"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="involve" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Area of Interest
                </Label>
                <select
                  id="involve"
                  name="involve"
                  required
                  defaultValue=""
                  disabled={!formAction}
                  className={cn(
                    "flex h-11 w-full rounded-md border border-[var(--color-gold)]/30 bg-background/80 px-3 py-2 text-base shadow-xs outline-none md:h-10 md:text-sm",
                    "focus-visible:border-[var(--color-burgundy)] focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40",
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

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your ideas, collaboration interests, or questions…"
                  disabled={!formAction}
                  className="border-[var(--color-gold)]/30 focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40 bg-background/80"
                />
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={!formAction}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-burgundy)] px-7 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[var(--color-burgundy)]/90 transition-all disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Send Message <Send className="size-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* In Official Partnership */}
      <section className="w-full mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold text-[var(--color-burgundy)]">
            Collaborative Network
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-burgundy)] md:text-4xl">
            In Official Partnership
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <Card className="glass-panel border-[var(--color-gold)]/30 shadow-xs hover:shadow-xl transition-all overflow-hidden p-6 sm:p-8 h-full">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--color-burgundy)]/10 text-[var(--color-burgundy)]">
                    <Building className="size-5" />
                  </div>
                  <span className="rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/30 px-3 py-0.5 text-xs font-semibold text-[var(--color-burgundy)]">
                    Grassroots Field Partner
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--color-burgundy)]">
                    {siteMeta.partnerNgo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    On-ground collaboration for Anganwadi clinics across Noida &amp; Mahipalpur, welfare enrollment, and community storytelling circles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <Card className="glass-panel border-[var(--color-gold)]/30 shadow-xs hover:shadow-xl transition-all overflow-hidden p-6 sm:p-8 h-full">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
                    <GraduationCap className="size-5" />
                  </div>
                  <span className="rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/30 px-3 py-0.5 text-xs font-semibold text-[var(--color-burgundy)]">
                    Institutional Home
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--color-burgundy)]">
                    {siteMeta.school}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Supporting youth advocacy leadership, volunteer mentorship, literary assemblies, and the IB Global Youth Action Fund development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Direct LinkedIn Channel Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="glass-panel border-[var(--color-gold)]/40 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[var(--color-cream)]/50 via-card to-[var(--color-cream)]/30 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0077b5]/15 text-[#0077b5] border border-[#0077b5]/30 shadow-xs">
                  <LinkedInIcon className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    Connect Directly on LinkedIn
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Reach out to Srishti Aggarwal for speaker invitations, literary assembly features, and youth advocacy partnerships.
                  </p>
                </div>
              </div>
              <a
                href={siteMeta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0077b5] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:brightness-110 transition-all shrink-0 hover:scale-105"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}

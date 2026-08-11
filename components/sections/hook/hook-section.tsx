import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { FadeIn } from "@/components/shared/fade-in";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")";

export function HookSection() {
  return (
    <section
      id={SECTION_IDS.hook}
      className="relative scroll-mt-20 overflow-hidden border-y border-amber-200/35 py-24 md:py-32 dark:border-amber-900/25"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/mock2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_45%] opacity-25 blur-2xl saturate-[0.85] dark:opacity-20"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/95 via-stone-100/92 to-amber-50/88 dark:from-stone-950/95 dark:via-stone-900/92 dark:to-stone-950/90" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-multiply dark:opacity-20 dark:mix-blend-soft-light"
        style={{ backgroundImage: NOISE }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,oklch(0.92_0.05_75/0.35),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,oklch(0.4_0.06_75/0.2),transparent_55%)]" />

      <div className="relative z-[1] mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-8 flex justify-center">
            <div className="relative h-24 w-40 overflow-hidden rounded-2xl shadow-lg ring-2 ring-amber-200/50 dark:ring-amber-800/40 sm:h-28 sm:w-48">
              <Image
                src="/mock1.jpg"
                alt=""
                fill
                sizes="200px"
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className="font-sans text-[0.65rem] font-semibold tracking-[0.4em] text-amber-900/50 uppercase dark:text-amber-200/45">
            The story
          </p>
        </FadeIn>
        <div className="mt-10 space-y-7 font-story text-[1.4rem] font-normal leading-[1.5] tracking-[0.02em] text-stone-800 md:text-[1.55rem] dark:text-stone-100">
          {site.hook.lines.map((line, i) => (
            <FadeIn key={line} delay={0.08 + i * 0.12}>
              <p className="text-balance">{line}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

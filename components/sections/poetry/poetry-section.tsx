import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function PoetrySection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.poetry}
      variant="contrast"
      className="relative overflow-hidden !bg-transparent py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/mock2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-35 blur-[2px] saturate-[0.75]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_30%_20%,oklch(0.25_0.05_75/0.5),transparent_55%)]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.55 0.1 75 / 0.35), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.45 0.08 250 / 0.2), transparent 45%)",
        }}
        aria-hidden
      />
      <FadeIn>
        <SectionHeading
          eyebrow={site.poetry.eyebrow}
          title={site.poetry.heading}
          align="center"
          tone="inverse"
          size="display"
          className="relative z-[1] max-w-2xl"
        />
      </FadeIn>
      <FadeIn delay={0.08}>
        <div className="relative z-[1] mx-auto max-w-2xl text-center">
          <blockquote className="space-y-5 font-story text-lg font-normal leading-relaxed tracking-[0.02em] md:text-xl md:leading-relaxed">
            {site.poetry.lines.map((line) => (
              <p key={line} className="text-balance">
                {line}
              </p>
            ))}
          </blockquote>
          <p className="mt-10 text-sm text-background/65">{site.poetry.attribution}</p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}

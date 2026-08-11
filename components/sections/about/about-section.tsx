import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { EditorialImage } from "@/components/shared/editorial-image";
import { FadeIn } from "@/components/shared/fade-in";
import { ImageStrip } from "@/components/shared/image-strip";
import { ParallaxMedia } from "@/components/shared/parallax-media";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

const cardBase =
  "border-border/70 bg-card/80 shadow-md shadow-black/[0.03] ring-1 ring-black/[0.03] transition-shadow duration-300 hover:shadow-lg hover:ring-amber-500/10 dark:ring-white/5";

export function AboutSection() {
  return (
    <SectionWrapper id={SECTION_IDS.about} variant="depth">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-8 lg:col-span-7">
          <FadeIn>
            <SectionHeading
              eyebrow={site.about.eyebrow}
              title={site.about.heading}
              description={site.about.lead}
              size="display"
            />
          </FadeIn>
          <FadeIn delay={0.06} className="lg:max-w-xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We work in the space between law and lived experience — where dignity
              is negotiated in hallways, classrooms, and kitchens.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="lg:col-span-5 lg:row-span-2">
          <ParallaxMedia
            src="/mock2.jpg"
            alt="Community gathering"
            className="lg:translate-y-8"
            imageClassName="object-[center_40%]"
          />
        </FadeIn>

        <FadeIn className="lg:col-span-12">
          <ImageStrip
            items={[
              { src: "/mock1.jpg", alt: "Workshop moment" },
              { src: "/mock2.jpg", alt: "Listening circle" },
              { src: "/mock1.jpg", alt: "Field notes" },
            ]}
          />
        </FadeIn>

        <FadeIn className="lg:col-span-6">
          <Card className={cardBase}>
            <div className="relative aspect-[2/1] overflow-hidden">
              <Image
                src="/mock1.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl tracking-tight">On the ground</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {site.about.body[0]}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {site.about.body[1]}
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:col-span-6">
          <Card
            className={cn(
              cardBase,
              "overflow-hidden border-dashed border-amber-900/15 bg-gradient-to-br from-card to-amber-50/20 dark:border-amber-500/20 dark:from-card dark:to-amber-950/20"
            )}
          >
            <div className="relative aspect-[2/1] overflow-hidden">
              <Image
                src="/mock2.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl tracking-tight">Principles</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Consent-first storytelling. Plain language. No hero theater — shared
                work, shared risk, shared credit.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              We treat every intake as a relationship, not a transaction. If we are
              not the right door, we help you find it — without leaving you alone at
              the threshold.
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn className="lg:col-span-12">
          <EditorialImage
            src="/mock1.jpg"
            alt="Advocacy in the field"
            aspectClassName="aspect-[5/2] md:aspect-[21/7]"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Real rooms, real questions — documentation placeholder until final photography
            ships.
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

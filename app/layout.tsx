import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import { NavigationProgress } from "@/components/ui/navigation-progress";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/motion/back-to-top";
import { CursorGlow } from "@/components/motion/cursor-glow";
import { MotionProvider } from "@/components/motion/motion-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { siteMeta } from "@/data/site";
import { rootSeoMetadata } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  ...rootSeoMetadata,
  title: {
    default: `${siteMeta.title} · ${siteMeta.org}`,
    template: `%s · ${siteMeta.title}`,
  },
  description: siteMeta.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${newsreader.variable} h-full scroll-smooth overflow-x-hidden`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        <MotionProvider>
          <NavigationProgress />
          <CursorGlow />
          <JsonLd />
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-[220%] rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-transform duration-200 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <Navbar />
          <main
            id="main-content"
            className="relative flex min-w-0 w-full flex-1 flex-col outline-none"
            tabIndex={-1}
          >
            {children}
          </main>
          <Footer />
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}

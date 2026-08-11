import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/seo/json-ld";
import { siteMeta } from "@/data/site";
import { rootSeoMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth overflow-x-hidden`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
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
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IDQODE — Designing Ideas. Creating Digital Experiences.",
    template: "%s — IDQODE",
  },
  description:
    "IDQODE adalah brand digital kreatif independen oleh Kasih Afrillia yang menggabungkan desain grafis, UI/UX, dan pengembangan perangkat lunak.",
  keywords: ["IDQODE", "Kasih Afrillia", "graphic design", "UI/UX", "web development", "portfolio", "Indonesia"],
  authors: [{ name: "Kasih Afrillia" }],
  openGraph: {
    title: "IDQODE — Creative Digital Studio",
    description: "Where Creativity Meets Technology.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <LanguageProvider>
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}

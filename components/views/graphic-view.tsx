"use client";

import Link from "next/link";
import { ArrowUpRight, BadgeCheck, LayoutGrid, Megaphone, Newspaper, Share2, Sparkles } from "lucide-react";
import { Reveal } from "../reveal";
import { ButtonLink, Container, Eyebrow, PageHeader } from "../ui";
import { BusinessCardFace } from "../visuals";
import { CtaBlock } from "./home-view";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const areas = [
  { icon: BadgeCheck, label: { id: "Desain Kartu Nama", en: "Business Card Design" } },
  { icon: Sparkles, label: { id: "Branding & Identitas", en: "Branding & Identity" } },
  { icon: Megaphone, label: { id: "Materi Pemasaran Digital", en: "Digital Marketing Materials" } },
  { icon: Share2, label: { id: "Desain Media Sosial", en: "Social Media Design" } },
  { icon: LayoutGrid, label: { id: "Desain Promosi", en: "Promotional Design" } },
  { icon: Newspaper, label: { id: "Layout & Editorial", en: "Layout & Editorial Design" } },
];

export function GraphicView() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(dict.nav.graphic)} title={t(dict.graphic.title)} description={t(dict.graphic.description)} />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>{t(dict.graphic.featured)}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <Link
              href="/portfolio/idqode-business-card"
              className="group mt-8 grid overflow-hidden rounded-[2rem] border border-border bg-card transition-colors hover:border-primary/40 md:grid-cols-12"
            >
              <div className="relative flex min-h-80 items-center justify-center bg-navy p-10 md:col-span-7 md:p-16 [container-type:inline-size]">
                <div className="relative w-full max-w-md transition-transform duration-700 group-hover:scale-[1.03]">
                  <BusinessCardFace side="back" className="absolute left-[8%] top-[-16%] rotate-6" />
                  <BusinessCardFace side="front" className="relative -rotate-3" />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8 p-8 md:col-span-5 md:p-12">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t(dict.businessCard.label)}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">{t(dict.businessCard.title)}</h2>
                  <p className="mt-4 text-pretty leading-relaxed text-muted">{t(dict.businessCard.description)}</p>
                </div>
                <div className="flex items-center gap-3">
                  {["#0F172A", "#E5D9C5", "#8C6D46"].map((c) => (
                    <span key={c} className="h-8 w-8 rounded-full ring-1 ring-border" style={{ background: c }} title={c} />
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium group-hover:text-primary">
                    {t(dict.common.viewDetails)}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container>
          <Reveal>
            <Eyebrow>{t(dict.graphic.areas)}</Eyebrow>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <li key={a.label.en}>
                <Reveal delay={i * 0.04}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-card-hover">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-violet">
                      <a.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-medium">{t(a.label)}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href="/services#graphic" variant="secondary">
              {t(dict.nav.services)}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBlock />
    </>
  );
}

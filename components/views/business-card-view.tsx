"use client";

import Link from "next/link";
import { ArrowLeft, Check, Info } from "lucide-react";
import { Reveal } from "../reveal";
import { Container, Eyebrow } from "../ui";
import { BusinessCardFace, QrPattern } from "../visuals";
import { Logo } from "../logo";
import { CtaBlock } from "./home-view";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const palette = [
  { name: "Navy", hex: "#0F172A", text: "#E5D9C5" },
  { name: "Warm Beige", hex: "#E5D9C5", text: "#0F172A" },
  { name: "Brown Accent", hex: "#8C6D46", text: "#F4F6FC" },
];

const printing = [
  { id: "Cetak satu sisi", en: "Single-sided printing" },
  { id: "Cetak dua sisi", en: "Double-sided printing" },
  { id: "Variasi sudut membulat", en: "Rounded card variations" },
  { id: "Opsi cetak Bluswhite", en: "Bluswhite printing options" },
  { id: "Laminasi glossy", en: "Glossy lamination" },
  { id: "Laminasi doff (matte)", en: "Matte lamination" },
  { id: "Tanpa laminasi", en: "No lamination" },
];

function Panel({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-border bg-card p-6 md:p-8 ${className}`}>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function BusinessCardView() {
  const { t } = useLang();
  return (
    <>
      <header className="relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-40">
        <Container>
          <Link href="/portfolio/graphic-design" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t(dict.common.backToPortfolio)}
          </Link>
          <div className="mt-10">
            <Eyebrow>{t(dict.businessCard.label)}</Eyebrow>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-7xl">{t(dict.businessCard.title)}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">{t(dict.businessCard.description)}</p>
          </div>
          <Reveal delay={0.1}>
            <div className="relative mt-14 flex items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-[radial-gradient(ellipse_at_center,#1a2440,#0b1020)] px-6 py-20 md:py-28 [container-type:inline-size]">
              <div className="relative grid w-full max-w-4xl gap-8 md:grid-cols-2">
                <BusinessCardFace side="front" className="md:-rotate-3" />
                <BusinessCardFace side="back" className="md:rotate-3" />
              </div>
            </div>
          </Reveal>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted">
            <Info className="h-3.5 w-3.5" aria-hidden="true" />
            {t(dict.businessCard.conceptNote)}
          </p>
        </Container>
      </header>

      <section className="py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Panel title={t(dict.businessCard.front)}>
              <div className="[container-type:inline-size]">
                <BusinessCardFace side="front" />
              </div>
            </Panel>
          </Reveal>
          <Reveal delay={0.06}>
            <Panel title={t(dict.businessCard.back)}>
              <div className="[container-type:inline-size]">
                <BusinessCardFace side="back" />
              </div>
            </Panel>
          </Reveal>

          <Reveal className="md:col-span-2">
            <Panel title={t(dict.businessCard.variations)}>
              <div className="grid gap-8 md:grid-cols-2">
                {[false, true].map((rounded) => (
                  <figure key={String(rounded)} className="[container-type:inline-size]">
                    <BusinessCardFace side="front" rounded={rounded} />
                    <figcaption className="mt-4 text-sm text-muted">
                      {rounded ? t(dict.businessCard.rounded) : t(dict.businessCard.sharp)}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Panel>
          </Reveal>

          <Reveal>
            <Panel title={t(dict.businessCard.typography)} className="h-full">
              <Logo className="text-4xl" />
              <p className="mt-6 text-5xl font-semibold tracking-tight">Aa</p>
              <p className="mt-3 text-sm text-muted">Geist — Semibold / Medium / Regular</p>
              <p className="mt-6 font-mono text-sm text-muted">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</p>
            </Panel>
          </Reveal>

          <Reveal delay={0.06}>
            <Panel title={t(dict.businessCard.palette)} className="h-full">
              <ul className="flex flex-col gap-3">
                {palette.map((c) => (
                  <li
                    key={c.hex}
                    className="flex items-center justify-between rounded-2xl px-5 py-6"
                    style={{ background: c.hex, color: c.text }}
                  >
                    <span className="font-medium">{c.name}</span>
                    <span className="font-mono text-sm">{c.hex}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>

          <Reveal>
            <Panel title={t(dict.businessCard.qr)} className="h-full">
              <div className="flex items-center gap-6">
                <div className="w-28 shrink-0 rounded-2xl bg-beige p-3">
                  <QrPattern className="w-full text-navy" />
                </div>
                <div>
                  <p className="text-pretty leading-relaxed text-foreground/85">{t(dict.businessCard.qrText)}</p>
                  <p className="mt-3 text-xs text-muted">{t(dict.businessCard.qrNote)}</p>
                </div>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.06}>
            <Panel title={t(dict.businessCard.printing)} className="h-full">
              <ul className="flex flex-col gap-3">
                {printing.map((p) => (
                  <li key={p.en} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {t(p)}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </Container>
      </section>

      <CtaBlock />
    </>
  );
}

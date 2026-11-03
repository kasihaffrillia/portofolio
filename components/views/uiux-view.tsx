"use client";

import { Reveal } from "../reveal";
import { Container, Eyebrow, PageHeader, Tag } from "../ui";
import { InterfaceMock, PlaceholderBadge, Wireframe } from "../visuals";
import { CtaBlock } from "./home-view";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const scope = [
  { id: "Antarmuka Website", en: "Website Interface" },
  { id: "Desain Dashboard", en: "Dashboard Design" },
  { id: "Antarmuka Aplikasi", en: "Application Interface" },
  { id: "Wireframe", en: "Wireframes" },
  { id: "Prototipe", en: "Prototypes" },
  { id: "Design System", en: "Design Systems" },
];

const cinemax = {
  overview: {
    id: "Desain antarmuka untuk CINEMAX, aplikasi desktop manajemen bioskop yang mencakup daftar film, pemesanan tiket, pemilihan kursi, kode promo, riwayat transaksi, dan dashboard analitik.",
    en: "Interface design for CINEMAX, a cinema management desktop application covering movie listings, ticket booking, seat selection, promo codes, transaction history, and an analytics dashboard.",
  },
  objectives: {
    id: ["Alur pemesanan yang jelas dari film hingga kursi.", "Informasi transaksi yang mudah dibaca.", "Tampilan konsisten di seluruh layar."],
    en: ["A clear booking flow from movie to seat.", "Easy-to-read transaction information.", "A consistent look across every screen."],
  },
  problem: {
    id: "Aplikasi manajemen dengan banyak fitur berisiko terasa rumit. Tantangannya adalah menyajikan banyak informasi tanpa membingungkan pengguna.",
    en: "Feature-rich management applications risk feeling complicated. The challenge was presenting a lot of information without confusing users.",
  },
  exploration: {
    id: "Eksplorasi berfokus pada hierarki visual, pengelompokan menu, dan representasi denah kursi yang mudah dipahami.",
    en: "Exploration focused on visual hierarchy, menu grouping, and an easy-to-understand seat map representation.",
  },
  decisions: {
    id: ["Navigasi samping untuk akses cepat antar modul.", "Warna kontras untuk status kursi tersedia, dipilih, dan terisi.", "Kartu ringkasan pada dashboard untuk data penting."],
    en: ["Side navigation for quick access between modules.", "Contrasting colors for available, selected, and taken seat states.", "Summary cards on the dashboard for key data."],
  },
  tools: ["CustomTkinter", "Python"],
};

export function UiuxView() {
  const { t, tl } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(dict.nav.uiux)} title={t(dict.uiux.title)} description={t(dict.uiux.description)}>
        <ul className="mt-10 flex flex-wrap gap-2">
          {scope.map((s) => (
            <li key={s.en}>
              <Tag>{t(s)}</Tag>
            </li>
          ))}
        </ul>
      </PageHeader>

      <section id="cinemax" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Featured · CINEMAX</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">CINEMAX</h2>
            <p className="mt-3 text-muted">{t({ id: "Antarmuka Aplikasi Desktop", en: "Desktop Application Interface" })}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] border border-border bg-surface p-6 md:p-12">
              <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet/25 blur-3xl" aria-hidden="true" />
              <div className="relative h-full">
                <InterfaceMock variant="dashboard" />
              </div>
              <PlaceholderBadge />
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <dl className="flex flex-col gap-8">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{t(dict.common.tools)}</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {cinemax.tools.map((tool) => (
                      <Tag key={tool}>{tool}</Tag>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{t(dict.uiux.objectives)}</dt>
                  <dd className="mt-3">
                    <ul className="flex flex-col gap-2 text-sm text-foreground/85">
                      {tl(cinemax.objectives).map((o) => (
                        <li key={o} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </Reveal>
            <div className="flex flex-col gap-10 md:col-span-8">
              {[
                { title: dict.uiux.overview, text: cinemax.overview },
                { title: dict.uiux.problem, text: cinemax.problem },
                { title: dict.uiux.exploration, text: cinemax.exploration },
              ].map((b) => (
                <Reveal key={b.title.en}>
                  <h3 className="text-xl font-semibold">{t(b.title)}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted">{t(b.text)}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal>
              <figure className="rounded-3xl border border-border bg-card p-6">
                <div className="aspect-[16/10]">
                  <Wireframe />
                </div>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">{t(dict.uiux.wireframe)}</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.06}>
              <figure className="relative rounded-3xl border border-border bg-card p-6">
                <div className="relative aspect-[16/10]">
                  <InterfaceMock variant="seats" />
                  <PlaceholderBadge />
                </div>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">{t(dict.uiux.finalUi)}</figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-violet/10 p-8 md:p-10">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{t(dict.uiux.decisions)}</h3>
              <ol className="mt-6 grid gap-6 md:grid-cols-3">
                {tl(cinemax.decisions).map((d, i) => (
                  <li key={d}>
                    <span className="font-mono text-sm text-primary">0{i + 1}</span>
                    <p className="mt-2 text-pretty leading-relaxed">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBlock />
    </>
  );
}

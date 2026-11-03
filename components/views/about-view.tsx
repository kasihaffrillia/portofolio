"use client";

import { QMark } from "../logo";
import { Reveal } from "../reveal";
import { Container, Eyebrow, PageHeader, Tag, TextLink } from "../ui";
import { CtaBlock } from "./home-view";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const approach = [
  { n: "01", title: { id: "Memahami", en: "Understand" }, text: { id: "Mendengarkan ide dan kebutuhan sebagai titik awal setiap karya.", en: "Listening to ideas and needs as the starting point of every work." } },
  { n: "02", title: { id: "Eksplorasi", en: "Explore" }, text: { id: "Menjelajahi arah visual, struktur, dan alur pengguna.", en: "Exploring visual direction, structure, and user flows." } },
  { n: "03", title: { id: "Merancang", en: "Design" }, text: { id: "Menerjemahkan eksplorasi menjadi desain yang jelas dan konsisten.", en: "Translating exploration into clear, consistent design." } },
  { n: "04", title: { id: "Membangun", en: "Build" }, text: { id: "Mewujudkan desain menjadi produk digital yang fungsional.", en: "Turning design into functional digital products." } },
];

const values = [
  { id: "Kreatif", en: "Creative" },
  { id: "Modern", en: "Modern" },
  { id: "Minimalis", en: "Minimalist" },
  { id: "Profesional", en: "Professional" },
  { id: "Inovatif", en: "Innovative" },
  { id: "Detail", en: "Detail-oriented" },
  { id: "Berbasis Teknologi", en: "Technology-driven" },
];

const skills = [
  { group: { id: "Desain Grafis", en: "Graphic Design" }, items: ["Branding", "Business Card", "Social Media", "Layout"] },
  { group: { id: "UI/UX", en: "UI/UX" }, items: ["Interface Design", "Wireframing", "Prototyping", "Dashboard"] },
  { group: { id: "Pengembangan", en: "Development" }, items: ["Python", "CustomTkinter", "React", "Laravel", "Filament", "MySQL"] },
  { group: { id: "Data", en: "Data" }, items: ["Statistical Analysis", "Data Visualization"] },
];

export function AboutView() {
  const { t, tl } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(dict.about.label)} title={t(dict.about.title)} />

      <section className="py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="sticky top-28 flex aspect-square items-center justify-center rounded-[2rem] border border-border bg-card p-16">
              <QMark className="h-full w-full text-foreground" />
            </div>
          </Reveal>
          <div className="flex flex-col gap-6 md:col-span-7">
            {tl(dict.about.paragraphs).map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={i === 0 ? "text-balance text-2xl font-medium leading-snug tracking-tight md:text-3xl" : "text-pretty text-lg leading-relaxed text-muted"}>
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal>
              <div className="mt-6 rounded-3xl border border-border bg-card p-8">
                <Eyebrow>{t(dict.about.missionLabel)}</Eyebrow>
                <p className="mt-4 text-pretty text-lg leading-relaxed">{t(dict.about.mission)}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-violet/10 p-8">
                <Eyebrow>{t(dict.about.founderLabel)}</Eyebrow>
                <p className="mt-4 text-2xl font-semibold tracking-tight">Kasih Afrillia</p>
                <p className="mt-1 text-muted">{t(dict.experience.positioning)}</p>
                <div className="mt-6">
                  <TextLink href="/experience">{t(dict.nav.experience)}</TextLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{t(dict.about.approachLabel)}</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">{t(dict.about.approachTitle)}</h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {approach.map((a, i) => (
              <li key={a.n} className="bg-card p-7">
                <Reveal delay={i * 0.06}>
                  <span className="font-mono text-sm text-primary">{a.n}</span>
                  <h3 className="mt-8 text-xl font-semibold">{t(a.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t(a.text)}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <Container className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>{t(dict.about.valuesLabel)}</Eyebrow>
            <ul className="mt-8 flex flex-wrap gap-3">
              {values.map((v) => (
                <li key={v.en} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm transition-colors hover:border-primary/50">
                  {t(v)}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow>{t(dict.about.skillsLabel)}</Eyebrow>
            <dl className="mt-8 flex flex-col divide-y divide-border border-y border-border">
              {skills.map((s) => (
                <div key={s.group.en} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center">
                  <dt className="w-36 shrink-0 text-sm font-medium">{t(s.group)}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <CtaBlock />
    </>
  );
}

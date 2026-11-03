"use client";

import { Reveal } from "../reveal";
import { Container, PageHeader, Tag } from "../ui";
import { InterfaceMock, PlaceholderBadge } from "../visuals";
import { CtaBlock } from "./home-view";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import { programmingProjects } from "@/lib/content";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" aria-hidden="true" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function ProgrammingView() {
  const { t, tl } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(dict.nav.programming)} title={t(dict.programming.title)} description={t(dict.programming.description)}>
        <nav aria-label="Projects" className="mt-10 flex flex-wrap gap-2">
          {programmingProjects.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <span className="mr-2 font-mono text-xs text-primary">{p.number}</span>
              {p.title}
            </a>
          ))}
        </nav>
      </PageHeader>

      {programmingProjects.map((p, idx) => (
        <section key={p.slug} id={p.slug} className={`scroll-mt-24 border-b border-border py-20 md:py-28 ${idx % 2 ? "bg-surface" : ""}`}>
          <Container>
            <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="font-mono text-sm text-primary">PROJECT {p.number}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{p.title}</h2>
                <p className="mt-3 text-muted">{t(p.type)}</p>
              </div>
              <div className="md:col-span-5">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {p.stackLabel === "focus" ? t(dict.programming.focus) : t(dict.programming.stack)}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <figure className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] border border-border bg-card p-6 md:p-12">
                <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
                <div className="relative h-full">
                  <InterfaceMock variant={p.slug === "gs-material-store" ? "landing" : p.slug === "cinemax" ? "seats" : "dashboard"} />
                </div>
                <PlaceholderBadge />
                <figcaption className="sr-only">{t(dict.programming.screenshots)}</figcaption>
              </figure>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-12">
              <Reveal className="md:col-span-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{t(dict.programming.overview)}</h3>
                <p className="mt-4 text-pretty text-lg leading-relaxed">{t(p.description)}</p>
              </Reveal>
              <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 md:col-span-7">
                {[
                  { title: dict.programming.features, items: tl(p.features) },
                  { title: dict.programming.process, items: tl(p.process) },
                  { title: dict.programming.challenges, items: tl(p.challenges) },
                  { title: dict.programming.learning, items: tl(p.learning) },
                ].map((b) => (
                  <div key={b.title.en} className="bg-card p-6">
                    <h3 className="mb-4 text-sm font-semibold">{t(b.title)}</h3>
                    <BulletList items={b.items} />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <div className="pt-24 md:pt-32">
        <CtaBlock />
      </div>
    </>
  );
}

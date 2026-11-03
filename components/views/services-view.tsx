"use client";

import { Reveal } from "../reveal";
import { ButtonLink, Container, PageHeader, TextLink } from "../ui";
import { serviceIcons } from "../service-card";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import { services } from "@/lib/content";

export function ServicesView() {
  const { t, tl } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(dict.services.label)} title={t(dict.services.title)} description={t(dict.services.description)} />

      <section className="py-16 md:py-24">
        <Container className="flex flex-col gap-6">
          {services.map((s, idx) => {
            const Icon = serviceIcons[s.slug];
            return (
              <Reveal key={s.slug}>
                <article
                  id={s.slug}
                  className="group grid scroll-mt-28 gap-10 rounded-[2rem] border border-border bg-card p-8 transition-colors hover:bg-card-hover md:grid-cols-12 md:p-12"
                >
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-sm text-muted">
                        {s.number} / 0{services.length}
                      </span>
                    </div>
                    <h2 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">{t(s.title)}</h2>
                    <p className="mt-4 text-pretty leading-relaxed text-muted">{t(s.description)}</p>
                    <div className="mt-8">
                      <TextLink href={s.href}>{t(dict.common.viewDetails)}</TextLink>
                    </div>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2 md:col-span-7">
                    {tl(s.detailed).map((item, i) => (
                      <li key={item} className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4">
                        <span className="font-mono text-xs text-primary">
                          {String.fromCharCode(65 + idx)}
                          {i + 1}
                        </span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-border bg-gradient-to-br from-primary/15 to-violet/15 p-10 md:flex-row md:items-center md:p-14">
              <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight md:text-4xl">{t(dict.services.ctaTitle)}</h2>
              <ButtonLink href="/contact">{t(dict.common.discuss)}</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

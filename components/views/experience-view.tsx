"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "../reveal";
import { Container, Eyebrow, PageHeader } from "../ui";
import { CtaBlock } from "./home-view";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const timeline = [
  {
    kind: "education" as const,
    status: "current" as const,
    title: "Universitas Bina Sarana Informatika (UBSI)",
    place: "Kramat, Jakarta",
    major: { id: "Sistem Informasi", en: "Information Systems" },
  },
  {
    kind: "internship" as const,
    title: "PKL — Kantor Kecamatan Tungkal Jaya",
    responsibilities: {
      id: ["Pengelolaan dokumen administrasi.", "Input data.", "Pengarsipan dokumen.", "Mendukung layanan administrasi publik."],
      en: ["Administrative document management.", "Data entry.", "Document archiving.", "Supporting public administrative services."],
    },
  },
  {
    kind: "education" as const,
    status: "previous" as const,
    title: "SMK Telkom Purwokerto",
    major: { id: "Pengembangan Perangkat Lunak dan Gim (PPLG)", en: "Software and Game Development (PPLG)" },
  },
];

export function ExperienceView() {
  const { t, tl } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(dict.experience.label)} title={t(dict.experience.title)} />

      <section className="py-20 md:py-28">
        <Container className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="rounded-[2rem] border border-border bg-card p-8 md:sticky md:top-28">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet text-2xl font-semibold text-background">
                KA
              </div>
              <h2 className="mt-8 text-3xl font-semibold tracking-tight">Kasih Afrillia</h2>
              <p className="mt-2 text-muted">{t(dict.experience.positioning)}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">Founder · IDQODE · Indonesia</p>
            </div>
          </Reveal>
          <div className="flex flex-col gap-5 md:col-span-7">
            {tl(dict.experience.bio).map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className={i === 0 ? "text-balance text-2xl font-medium leading-snug tracking-tight" : "text-pretty text-lg leading-relaxed text-muted"}>{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>{t(dict.experience.timeline)}</Eyebrow>
          </Reveal>
          <ol className="relative mt-14 border-l border-border md:ml-4">
            {timeline.map((item, i) => {
              const Icon = item.kind === "education" ? GraduationCap : Briefcase;
              return (
                <li key={item.title} className="relative pb-14 pl-10 last:pb-0 md:pl-14">
                  <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <Reveal delay={i * 0.06}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                        {item.kind === "education" ? t(dict.experience.education) : t(dict.experience.internship)}
                      </span>
                      {"status" in item && (
                        <span
                          className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                            item.status === "current" ? "bg-primary/15 text-primary" : "bg-card-hover text-muted"
                          }`}
                        >
                          {item.status === "current" ? t(dict.experience.current) : t(dict.experience.previous)}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:bg-card-hover md:p-8">
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{item.title}</h3>
                      {"place" in item && <p className="mt-1 text-sm text-muted">{item.place}</p>}
                      {"major" in item && item.major && (
                        <p className="mt-4 text-sm">
                          <span className="text-muted">{t(dict.experience.major)}: </span>
                          {t(item.major)}
                        </p>
                      )}
                      {"responsibilities" in item && item.responsibilities && (
                        <div className="mt-4">
                          <p className="text-sm text-muted">{t(dict.experience.responsibilities)}</p>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {tl(item.responsibilities).map((r) => (
                              <li key={r} className="flex gap-3 text-sm">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" aria-hidden="true" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <div className="pt-24 md:pt-32">
        <CtaBlock />
      </div>
    </>
  );
}

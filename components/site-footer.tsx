"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "./ui";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import { navLinks, portfolioLinks, services, socials } from "@/lib/content";

export function SiteFooter() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const columns = [
    { title: t(dict.footer.quickLinks), links: navLinks.map((l) => ({ href: l.href, label: t(dict.nav[l.key]) })) },
    { title: t(dict.footer.services), links: services.map((s) => ({ href: "/services#" + s.slug, label: t(s.title) })) },
    { title: t(dict.footer.portfolio), links: portfolioLinks.map((l) => ({ href: l.href, label: t(dict.nav[l.key]) })) },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo className="text-2xl" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{t(dict.footer.description)}</p>
            <p className="mt-6 text-sm text-muted">
              <span className="text-foreground">Email</span> — {t(dict.footer.placeholder)}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{col.title}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{t(dict.footer.connect)}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {socials
                .filter((s) => s.key !== "email")
                .map((s) => (
                  <li key={s.key} className="text-sm text-foreground/80">
                    {s.label}
                    <span className="block text-xs text-muted">{t(dict.footer.placeholder)}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-balance text-2xl font-medium tracking-tight md:text-4xl">
            <span className="text-gradient">{t(dict.footer.closing)}</span>
          </p>
          <div className="mt-8 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:justify-between">
            <p>
              © {year} IDQODE — Kasih Afrillia. {t(dict.footer.rights)}
            </p>
            <p className="font-mono uppercase tracking-[0.2em]">Design × Experience × Technology</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

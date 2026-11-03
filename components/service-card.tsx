"use client";

import { Code2, LayoutTemplate, PenTool } from "lucide-react";
import { TextLink } from "./ui";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import type { Category, Service } from "@/lib/content";

export const serviceIcons: Record<Category, typeof PenTool> = {
  graphic: PenTool,
  uiux: LayoutTemplate,
  programming: Code2,
};

export function ServiceCard({ service }: { service: Service }) {
  const { t, tl } = useLang();
  const Icon = serviceIcons[service.slug];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card-hover md:p-8">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-violet/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface text-primary transition-colors group-hover:border-primary/50">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-mono text-sm text-muted">{service.number}</span>
      </div>
      <h3 className="mt-8 text-2xl font-semibold tracking-tight">{t(service.title)}</h3>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{t(service.description)}</p>
      <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
        {tl(service.highlights).map((h) => (
          <li key={h} className="flex items-center gap-3 text-sm text-foreground/85">
            <span className="h-1 w-1 rounded-full bg-violet" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <TextLink href={service.href}>{t(dict.common.viewDetails)}</TextLink>
      </div>
    </article>
  );
}

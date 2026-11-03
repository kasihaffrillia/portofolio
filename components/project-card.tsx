"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "./visuals";
import { Tag } from "./ui";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import { categoryLabel, type Project } from "@/lib/content";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const { t } = useLang();
  return (
    <Link
      href={project.href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className={`relative overflow-hidden border-b border-border ${large ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
        <ProjectVisual category={project.category} accent={project.accent} slug={project.slug} />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{t(categoryLabel[project.category])}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{t(project.type)}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">{t(dict.common.viewDetails)}</span>
          </span>
        </div>
        <p className="text-pretty text-sm leading-relaxed text-muted">{t(project.description)}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

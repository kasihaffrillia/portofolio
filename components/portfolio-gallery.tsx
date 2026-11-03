"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import { projects, type Category } from "@/lib/content";

const filters: { value: "all" | Category; key: "allProjects" | "graphic" | "uiux" | "programming" }[] = [
  { value: "all", key: "allProjects" },
  { value: "graphic", key: "graphic" },
  { value: "uiux", key: "uiux" },
  { value: "programming", key: "programming" },
];

export function PortfolioGallery() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<"all" | Category>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label={t(dict.portfolio.filterLabel)} className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f.value === "all" ? projects.length : projects.filter((p) => p.category === f.value).length;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              aria-pressed={active === f.value}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                active === f.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {t(dict.nav[f.key])}
              <span className="ml-2 font-mono text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout={!reduce} className="mt-10 grid gap-6 md:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => {
            const span = visible.length > 2 && i % 3 === 0 ? "md:col-span-4" : visible.length > 2 && i % 3 === 1 ? "md:col-span-2" : "md:col-span-3";
            return (
              <motion.li
                key={project.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className={span}
              >
                <ProjectCard project={project} large={span === "md:col-span-4"} />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

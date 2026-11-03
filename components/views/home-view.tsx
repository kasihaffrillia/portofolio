"use client";

import { motion, useReducedMotion } from "framer-motion";
import { QMark } from "../logo";
import { Reveal } from "../reveal";
import { ButtonLink, Container, Eyebrow, TextLink } from "../ui";
import { ServiceCard } from "../service-card";
import { ProjectCard } from "../project-card";
import { BusinessCardFace, InterfaceMock } from "../visuals";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import { projects, services } from "@/lib/content";

function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const float = (delay: number) =>
    reduce ? {} : { animate: { y: [0, -10, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay } };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/4 top-20 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-40 h-[24rem] w-[24rem] rounded-full bg-violet/20 blur-[120px]" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{t(dict.hero.label)}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                {t(dict.hero.title)
                  .split(" ")
                  .map((word, i, arr) =>
                    i >= arr.length - 2 ? (
                      <span key={i} className="text-gradient">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    ),
                  )}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted">{t(dict.hero.description)}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/portfolio">{t(dict.common.exploreWork)}</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  {t(dict.common.collaborate)}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="relative hidden h-[30rem] lg:col-span-5 lg:block" aria-hidden="true">
            <motion.div
              className="absolute right-0 top-0 h-56 w-56 rounded-[2.5rem] border border-border bg-card/70 p-10 text-foreground backdrop-blur"
              {...float(0)}
            >
              <QMark className="h-full w-full" />
            </motion.div>
            <motion.div className="absolute left-0 top-24 aspect-[16/10] w-72 [container-type:inline-size]" {...float(1.2)}>
              <InterfaceMock variant="dashboard" />
            </motion.div>
            <motion.div className="absolute bottom-6 right-6 w-64 rotate-[-6deg] [container-type:inline-size]" {...float(2.4)}>
              <BusinessCardFace side="front" rounded />
            </motion.div>
            <div className="absolute bottom-0 left-8 flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 font-mono text-xs text-muted backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary motion-reduce:animate-none" />
              Design × Experience × Technology
            </div>
          </div>
        </div>

        <Reveal delay={0.3}>
          <p
            className="mt-24 select-none text-center text-[22vw] font-semibold leading-none tracking-tighter text-foreground/[0.04] md:text-[16vw]"
            aria-hidden="true"
          >
            IDQODE
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function HomeView() {
  const { t } = useLang();
  return (
    <>
      <Hero />

      <section className="border-t border-border py-24 md:py-32" aria-labelledby="what-we-do">
        <Container>
          <Reveal>
            <Eyebrow>{t(dict.home.whatWeDo)}</Eyebrow>
            <h2 id="what-we-do" className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              {t(dict.home.whatWeDoTitle)}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-24 md:py-32" aria-labelledby="selected">
        <Container>
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>{t(dict.home.selected)}</Eyebrow>
              <h2 id="selected" className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                {t(dict.home.selectedTitle)}
              </h2>
            </div>
            <TextLink href="/portfolio">{t(dict.common.allWorks)}</TextLink>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            <Reveal className="md:col-span-3">
              <ProjectCard project={projects[0]} large />
            </Reveal>
            <Reveal className="md:col-span-2" delay={0.08}>
              <ProjectCard project={projects[2]} />
            </Reveal>
            <Reveal className="md:col-span-2">
              <ProjectCard project={projects[1]} />
            </Reveal>
            <Reveal className="md:col-span-3" delay={0.08}>
              <ProjectCard project={projects[3]} large />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{t(dict.home.philosophyLabel)}</Eyebrow>
            </div>
            <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight md:col-span-8 md:text-4xl">
              {t(dict.home.philosophy)}
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <CtaBlock />
    </>
  );
}

export function CtaBlock() {
  const { t } = useLang();
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-8 py-16 text-center md:px-16 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-violet/20" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">{t(dict.home.ctaTitle)}</h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted">{t(dict.home.ctaText)}</p>
              <div className="mt-9 flex justify-center">
                <ButtonLink href="/contact">{t(dict.common.collaborate)}</ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

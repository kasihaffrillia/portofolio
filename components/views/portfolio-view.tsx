"use client";

import { Container, PageHeader } from "../ui";
import { PortfolioGallery } from "../portfolio-gallery";
import { CtaBlock } from "./home-view";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

export function PortfolioView() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(dict.portfolio.label)} title={t(dict.portfolio.title)} description={t(dict.portfolio.description)} />
      <section className="py-16 md:py-24">
        <Container>
          <PortfolioGallery />
        </Container>
      </section>
      <CtaBlock />
    </>
  );
}

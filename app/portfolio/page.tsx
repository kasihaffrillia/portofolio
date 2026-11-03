import type { Metadata } from "next";
import { PortfolioView } from "@/components/views/portfolio-view";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kumpulan karya IDQODE di desain grafis, UI/UX, dan pemrograman.",
};

export default function Page() {
  return <PortfolioView />;
}

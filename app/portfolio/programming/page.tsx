import type { Metadata } from "next";
import { ProgrammingView } from "@/components/views/programming-view";

export const metadata: Metadata = {
  title: "Programming",
  description: "Proyek pemrograman IDQODE: CINEMAX, GS Material Store, dan analisis data.",
};

export default function Page() {
  return <ProgrammingView />;
}

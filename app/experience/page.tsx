import type { Metadata } from "next";
import { ExperienceView } from "@/components/views/experience-view";

export const metadata: Metadata = {
  title: "Experience",
  description: "Pendidikan dan pengalaman Kasih Afrillia, pendiri IDQODE.",
};

export default function Page() {
  return <ExperienceView />;
}

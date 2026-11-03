import type { Metadata } from "next";
import { AboutView } from "@/components/views/about-view";

export const metadata: Metadata = {
  title: "About",
  description: "Tentang IDQODE — brand digital kreatif yang menggabungkan desain, pengalaman, dan teknologi.",
};

export default function Page() {
  return <AboutView />;
}

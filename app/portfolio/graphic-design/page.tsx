import type { Metadata } from "next";
import { GraphicView } from "@/components/views/graphic-view";

export const metadata: Metadata = {
  title: "Graphic Design",
  description: "Karya desain grafis IDQODE: kartu nama, branding, dan materi visual.",
};

export default function Page() {
  return <GraphicView />;
}

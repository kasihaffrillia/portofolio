import type { Metadata } from "next";
import { UiuxView } from "@/components/views/uiux-view";

export const metadata: Metadata = {
  title: "UI/UX Design",
  description: "Karya desain UI/UX IDQODE, termasuk studi kasus antarmuka CINEMAX.",
};

export default function Page() {
  return <UiuxView />;
}

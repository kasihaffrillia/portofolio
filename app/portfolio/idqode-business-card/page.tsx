import type { Metadata } from "next";
import { BusinessCardView } from "@/components/views/business-card-view";

export const metadata: Metadata = {
  title: "IDQODE Business Card",
  description: "Studi kasus desain kartu nama IDQODE dengan palet navy, beige, dan cokelat.",
};

export default function Page() {
  return <BusinessCardView />;
}

import type { Metadata } from "next";
import { ServicesView } from "@/components/views/services-view";

export const metadata: Metadata = {
  title: "Services",
  description: "Layanan IDQODE: desain grafis, desain UI/UX, dan pemrograman.",
};

export default function Page() {
  return <ServicesView />;
}

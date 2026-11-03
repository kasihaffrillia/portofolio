import type { Metadata } from "next";
import { ContactView } from "@/components/views/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi IDQODE untuk kolaborasi desain dan pengembangan digital.",
};

export default function Page() {
  return <ContactView />;
}

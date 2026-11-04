import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to get in touch.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactSection />;
}

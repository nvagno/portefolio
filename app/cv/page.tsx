import type { Metadata } from "next";
import { ExperienceSection } from "@/components/experience/experience";

export const metadata: Metadata = {
  title: "CV",
  description: "Research and professional experience, education, technical expertise and honours.",
  alternates: { canonical: "/cv" },
};

export default function Page() {
  return <ExperienceSection />;
}

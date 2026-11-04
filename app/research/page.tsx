import type { Metadata } from "next";
import { ResearchInterests } from "@/components/research/interests";

export const metadata: Metadata = {
  title: "Research Interests",
  description: "Research interests in computer vision for remote sensing, geospatial machine learning and ML methodology.",
  alternates: { canonical: "/research" },
};

export default function Page() {
  return <ResearchInterests />;
}

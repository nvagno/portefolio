import type { Metadata } from "next";
import { SelectedWork } from "@/components/research/work";

export const metadata: Metadata = {
  title: "Research & Projects",
  description: "Selected research and engineering projects: UAV-based citrus yield estimation, a geospatial AI platform, forecasting and security prototypes.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <SelectedWork />;
}

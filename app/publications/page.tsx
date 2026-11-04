import type { Metadata } from "next";
import { Publications } from "@/components/research/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications and scientific work.",
  alternates: { canonical: "/publications" },
};

export default function Page() {
  return <Publications />;
}

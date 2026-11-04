import type { MetadataRoute } from "next";
import { nav, site } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date("2026-11-04"),
  }));
}

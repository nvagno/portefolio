import Link from "next/link";
import { interests } from "@/content/profile";
import { Page } from "@/components/section/section";

export function ResearchInterests() {
  return (
    <Page
      title="Research Interests"
      lede="My work sits where machine learning meets geospatial data. These are the questions I keep returning to."
    >
      <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {interests.map((it, i) => (
          <li key={it.title} className="border-t border-rule pt-4">
            <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-1 text-lg font-semibold leading-snug">{it.title}</h2>
            <p className="mt-2 text-ink-2">{it.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-12 text-ink-2">
        These interests come out of concrete work, described on the{" "}
        <Link href="/projects" className="link">
          Projects
        </Link>{" "}
        page.
      </p>
    </Page>
  );
}

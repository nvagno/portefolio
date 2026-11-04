import Link from "next/link";
import { publications } from "@/content/profile";
import { Page } from "@/components/section/section";

export function Publications() {
  return (
    <Page title="Publications & Scientific Work">
      {publications.length === 0 ? (
        <div className="max-w-[64ch] space-y-4 text-ink-2">
          <p>
            I have no peer-reviewed publications yet. My main scientific contribution so far is the{" "}
            <Link href="/projects#citrus-yield" className="link">
              UAV-based citrus yield estimation study
            </Link>{" "}
            carried out at the Computer Networks Group (GRC), Universitat Politècnica de València.
            It covers dataset construction, detection and segmentation models, an ablation on
            orthomosaic resampling, and the georeferencing and deduplication of detections.
          </p>
          <p className="text-sm text-muted">
            Articles, reports and theses will be listed here with full references as they become
            available.
          </p>
        </div>
      ) : (
        <ol className="space-y-6">
          {publications.map((p) => (
            <li key={p.title} className="grid gap-1 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
              <span className="font-mono text-sm text-muted">{p.year}</span>
              <p className="text-ink-2">
                {p.authors}.{" "}
                {p.href ? (
                  <a href={p.href} className="link text-ink">
                    {p.title}
                  </a>
                ) : (
                  <span className="text-ink">{p.title}</span>
                )}
                . <em>{p.venue}</em>.
              </p>
            </li>
          ))}
        </ol>
      )}
    </Page>
  );
}

import Image from "next/image";
import {
  education,
  experience,
  expertise,
  figures,
  honours,
  languages,
  type Entry,
} from "@/content/profile";
import { Page, Subsection } from "@/components/section/section";

const sections = [
  { id: "experience", title: "Research & professional experience" },
  { id: "education", title: "Education" },
  { id: "expertise", title: "Technical expertise" },
  { id: "honours", title: "Honours & languages" },
];

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <ol className="divide-y divide-rule">
      {entries.map((e) => (
        <li key={e.title + e.period} className="grid gap-1 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
          <p className="font-mono text-[0.8125rem] text-muted sm:pt-[0.15rem]">{e.period}</p>
          <div>
            <p className="font-semibold leading-snug">{e.title}</p>
            <p className="text-ink-2">
              {e.href ? (
                <a href={e.href} className="link" target="_blank" rel="noopener noreferrer">
                  {e.org}
                </a>
              ) : (
                e.org
              )}
              <span className="text-muted"> · {e.place}</span>
            </p>
            {e.details && (
              <ul className="mt-2 space-y-1 text-ink-2">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ExperienceSection() {
  return (
    <Page title="Curriculum Vitae">
      <nav aria-label="CV sections" className="mb-12 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="link">
            {s.title}
          </a>
        ))}
      </nav>

      <div className="space-y-14">
        <Subsection id="experience" title={sections[0].title}>
          <Timeline entries={experience} />
        </Subsection>

        <Subsection id="education" title={sections[1].title}>
          <Timeline entries={education} />
        </Subsection>

        <Subsection id="expertise" title={sections[2].title}>
          <dl className="divide-y divide-rule">
            {expertise.map((e) => (
              <div key={e.area} className="grid gap-1 py-5 sm:grid-cols-[15rem_minmax(0,1fr)] sm:gap-8">
                <dt className="font-semibold leading-snug">{e.area}</dt>
                <dd className="text-ink-2">{e.items}</dd>
              </div>
            ))}
          </dl>
        </Subsection>

        <Subsection id="honours" title={sections[3].title}>
          <div className="grid gap-8 py-5 sm:grid-cols-2 sm:gap-10">
            <ul className="space-y-2">
              {honours.map((h) => (
                <li key={h.event}>
                  <span className="font-semibold">{h.title}</span>
                  <span className="text-ink-2">, {h.event}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink-2">{languages}</p>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {figures.map((f, i) => (
              <li key={f.src}>
                <figure>
                  <Image
                    src={f.src}
                    alt={f.caption}
                    width={f.w}
                    height={f.h}
                    sizes="(min-width: 1024px) 220px, 45vw"
                    className="aspect-[4/3] w-full border border-rule object-cover"
                  />
                  <figcaption className="mt-2 text-sm leading-snug text-muted">
                    <span className="font-semibold text-ink-2">({String.fromCharCode(97 + i)})</span>{" "}
                    {f.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Subsection>
      </div>
    </Page>
  );
}

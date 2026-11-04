import Image from "next/image";
import { work, type Work, type WorkKind } from "@/content/profile";
import { Page, Subsection } from "@/components/section/section";

const groups: { kind: WorkKind; heading: string; note: string }[] = [
  {
    kind: "Research",
    heading: "Research",
    note: "Supervised research with a scientific question, a dataset and a validation protocol.",
  },
  {
    kind: "Engineering",
    heading: "Engineering",
    note: "Systems designed and built for production or as reference implementations.",
  },
  {
    kind: "Experiment",
    heading: "Experiments & prototypes",
    note: "Smaller self-directed studies exploring a method or an idea.",
  },
];

function Field({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6">
      <dt className="label pt-[0.2rem]">{term}</dt>
      <dd className="text-ink-2">{children}</dd>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  if (items.length === 1) return <>{items[0]}</>;
  return (
    <ul className="space-y-1.5">
      {items.map((s) => (
        <li key={s} className="relative pl-4 before:absolute before:left-0 before:text-muted before:content-['–']">
          {s}
        </li>
      ))}
    </ul>
  );
}

function Entry({ w, n }: { w: Work; n: string }) {
  return (
    <article id={w.id} aria-labelledby={`${w.id}-t`} className="scroll-mt-6 py-10 first:pt-8">
      <p className="font-mono text-xs text-muted">{n}</p>
      <h3 id={`${w.id}-t`} className="mt-1 max-w-[42rem] text-xl font-semibold leading-snug tracking-tight sm:text-[1.375rem]">
        {w.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{w.context}</p>

      <div className={w.figure ? "mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]" : "mt-7"}>
        <dl className="max-w-[46rem] space-y-5">
          <Field term="Problem">{w.problem}</Field>
          <Field term="Objective">{w.objective}</Field>
          <Field term="Approach">
            <List items={w.approach} />
          </Field>
          <Field term="Methods">{w.methods}</Field>
          <Field term={w.kind === "Research" ? "Results" : "Outcome"}>
            <List items={w.outcomes} />
          </Field>
          {w.links && w.links.length > 0 && (
            <Field term="Code">
              <span className="flex flex-wrap gap-x-5 gap-y-1">
                {w.links.map((l) => (
                  <a key={l.href} href={l.href} className="link" target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </span>
            </Field>
          )}
        </dl>

        {w.figure && (
          <figure className="max-w-sm lg:max-w-none">
            <Image
              src={w.figure.src}
              alt={w.figure.alt}
              width={w.figure.width}
              height={w.figure.height}
              sizes="(min-width: 1024px) 240px, 384px"
              className="w-full border border-rule"
            />
            <figcaption className="mt-2 text-sm leading-snug text-muted">
              <span className="font-semibold text-ink-2">Fig. 1.</span> {w.figure.caption}
            </figcaption>
          </figure>
        )}
      </div>
    </article>
  );
}

export function SelectedWork() {
  const numbered = groups
    .map((g) => ({ ...g, items: work.filter((w) => w.kind === g.kind) }))
    .filter((g) => g.items.length > 0);

  return (
    <Page
      title="Selected Research & Projects"
      lede="Every entry uses the same structure: the problem, the objective, the approach, and what came out of it. Research, engineering and smaller experiments are listed separately."
    >
      <nav aria-label="Projects on this page" className="mb-14 border-l-2 border-rule pl-5">
        <ol className="space-y-3">
          {numbered.map((g, gi) => (
            <li key={g.kind}>
              <span className="font-semibold">
                {gi + 1}. {g.heading}
              </span>
              <ol className="mt-1 space-y-1">
                {g.items.map((w, i) => (
                  <li key={w.id} className="text-ink-2">
                    <span className="mr-2 font-mono text-xs text-muted">
                      {gi + 1}.{i + 1}
                    </span>
                    <a href={`#${w.id}`} className="link">
                      {w.title}
                    </a>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-16">
        {numbered.map((g, gi) => (
          <Subsection key={g.kind} id={g.kind.toLowerCase()} title={`${gi + 1}. ${g.heading}`} note={g.note}>
            <div className="divide-y divide-rule">
              {g.items.map((w, i) => (
                <Entry key={w.id} w={w} n={`${gi + 1}.${i + 1}`} />
              ))}
            </div>
          </Subsection>
        ))}
      </div>
    </Page>
  );
}

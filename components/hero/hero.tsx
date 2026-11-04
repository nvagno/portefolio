import Image from "next/image";
import Link from "next/link";
import { links, site } from "@/content/profile";
import { Icon } from "@/components/icons/icons";

const presence = [
  { label: "Email", href: `mailto:${site.email}`, handle: site.email, icon: "email" as const, external: false },
  ...links.map((l) => ({ ...l, external: true })),
];

export function HeroSection() {
  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-4 py-12 sm:px-8 md:grid-cols-[minmax(0,1fr)_14rem] md:gap-14 md:py-16">
      <article>
        <h1 className="sr-only">{site.fullName}</h1>

        <Image
          src={site.portrait}
          alt={`Portrait of ${site.name}`}
          width={320}
          height={320}
          priority
          sizes="160px"
          className="mb-5 aspect-square w-32 border border-rule object-cover sm:float-left sm:mb-2 sm:mr-7 sm:w-40"
        />

        <div className="space-y-4 text-[1.0625rem] leading-[1.7] text-ink-2">
          <p className="text-ink">
            I am a final-year <strong className="font-semibold">engineering student in Computer Science</strong> at{" "}
            <a href="https://esiroi.univ-reunion.fr" className="link" target="_blank" rel="noopener noreferrer">
              ESIROI, Université de La Réunion
            </a>
            . My work is about getting computer vision models to produce <em>measurements</em>, not
            just predictions: counting, locating and mapping objects in aerial and UAV imagery so
            that the results hold up on the ground.
          </p>
          <p>
            Most recently, I designed a drone-imagery pipeline for citrus yield estimation at the
            Computer Networks Group (GRC) of the Universitat Politècnica de València. The difficult
            parts sit between the detector and the map: building a reliable dataset, detecting small
            and occluded fruits at full resolution, georeferencing detections and counting each tree
            only once across overlapping views.
          </p>
          <p>
            I came to research from engineering. Over three years at Numer I built production
            systems for an aerial-imagery analytics platform, from training pipelines to event-driven
            inference on AWS and Java backends. I still design experiments to be reproducible and
            prototypes to run in production.
          </p>
        </div>

        <h2 className="mt-10 clear-both text-lg font-semibold">Currently and recently</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-2 marker:text-muted">
          <li>
            <strong className="font-semibold text-ink">Engineering student</strong>, Computer Science,
            ESIROI, Université de La Réunion (2025–2027).
          </li>
          <li>
            <strong className="font-semibold text-ink">Research intern</strong>, Computer Networks Group
            (GRC), Universitat Politècnica de València (Apr.–Aug. 2026).{" "}
            <Link href="/projects#citrus-yield" className="link">
              Project
            </Link>
          </li>
          <li>
            <strong className="font-semibold text-ink">MLOps developer</strong>, Numer, for the Birdia
            aerial-imagery platform (2022–2025).{" "}
            <Link href="/projects#geospatial-platform" className="link">
              Project
            </Link>
          </li>
          <li>
            <strong className="font-semibold text-ink">Teaching assistant</strong>, HEI, Antananarivo
            (2024–2025).
          </li>
        </ul>

        <p className="mt-8 text-ink-2">
          More on my{" "}
          <Link href="/research" className="link">research interests</Link>,{" "}
          <Link href="/projects" className="link">projects</Link>,{" "}
          <Link href="/publications" className="link">publications</Link> and{" "}
          <Link href="/cv" className="link">CV</Link>.
        </p>
      </article>

      <aside className="space-y-10 border-t border-rule pt-8 text-sm md:border-l md:border-t-0 md:pl-8 md:pt-1">
        <div>
          <h2 className="label">Online presence</h2>
          <ul className="mt-3 space-y-2.5">
            {presence.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="group flex items-center gap-2.5 text-ink-2 hover:text-ink"
                  {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon name={p.icon} className="size-[18px] shrink-0 text-muted group-hover:text-ink" />
                  <span>{p.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label">Open to</h2>
          <p className="mt-3 leading-relaxed text-ink-2">
            A six-month end-of-studies internship from <strong className="font-semibold text-ink">February 2027</strong>,
            Paris / Île-de-France.{" "}
            <Link href="/contact" className="link">
              Get in touch
            </Link>
          </p>
        </div>
      </aside>
    </div>
  );
}

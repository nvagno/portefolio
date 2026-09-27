"use client";

import Image from "next/image";

const css = `
  .exp-card { transition: transform 250ms ease, box-shadow 250ms ease; }
  .exp-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px -16px rgba(83, 53, 152, 0.25); }
  .logo-tile { transition: transform 250ms ease, box-shadow 250ms ease; }
  .logo-tile:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -12px rgba(83, 53, 152, 0.25); }
`;

interface Job {
  role: string;
  org: string;
  logo: string;
  location: string;
  period: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    role: "Research Intern",
    org: "GRC (UPV)",
    logo: "/logo-grc.png",
    location: "Valencia, Spain",
    period: "Apr. 2026 – Aug. 2026",
    bullets: [
      "Development of regression models for predicting citrus orchard yield",
      "Fine-tuning of YOLOv11 models for fruit detection and tree crown segmentation",
      "Data augmentation (crop, mosaic, contrast, brightness)",
      "Model validation and prevention of data leakage",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "HEI",
    logo: "/logo-hei.png",
    location: "Antananarivo, Madagascar",
    period: "2024 – 2025",
    bullets: [
      "Object-oriented programming (PROG2): encapsulation, polymorphism, inheritance, and abstraction",
      "Backend API implementation (PROG3): MVC pattern, unit testing, and integration testing",
      "Computer science mathematics (THEORIE1 P2): IEEE 754 standard, Diffie-Hellman key exchange",
    ],
  },
  {
    role: "Software Developer",
    org: "Numer",
    logo: "/logo-numer.png",
    location: "Antananarivo, Madagascar",
    period: "2022 – 2025",
    bullets: [
      "Backend development with Spring Boot, Hibernate, and Spring Security",
      "Event-driven architectures on AWS (Lambda, SQS, EventBridge)",
      "Automated testing with JUnit, Mockito, Spring Testcontainers, and SonarQube",
      "Image processing pipelines with OpenCV and geospatial data processing with GeoPandas",
      "Deployment and lifecycle management of a YOLOv11 model on AWS Lambda",
      "Participation in Agile ceremonies (Scrum)",
    ],
  },
];

export function ExperienceSection() {
  return (
    <>
      <style>{css}</style>

      {/* Companies strip */}
      <section className="bg-[var(--brand-soft)] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <p className="eyebrow mb-8">They trusted me</p>
          <div className="grid grid-cols-3 gap-3 sm:flex sm:justify-center sm:gap-6">
            {jobs.map((job) => (
              <div
                key={job.org}
                className="logo-tile bg-white rounded-2xl px-3 py-5 sm:px-8 sm:py-6 flex flex-col items-center gap-3 sm:w-[180px]"
              >
                <div className="w-full sm:w-28 h-16 relative">
                  <Image
                    src={job.logo}
                    alt={`${job.org} logo`}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                <span className="font-[Poppins] font-semibold text-[14px] text-[var(--ink)]">
                  {job.org}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience cards */}
      <section id="experience" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-3">Collaborations</p>
            <h2 className="title-text">Professional Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <article
                key={job.role + job.org}
                className="exp-card bg-white rounded-3xl border border-[var(--line)] p-8 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-14 relative shrink-0">
                    <Image
                      src={job.logo}
                      alt={`${job.org} logo`}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-[Poppins] font-semibold text-[15px] text-[var(--brand)]">
                      {job.org}
                    </p>
                    <p className="font-[Questrial] text-[13px] text-[#8F8F8F]">
                      {job.location}
                    </p>
                  </div>
                </div>

                <h3 className="font-[Poppins] font-bold text-[22px] leading-tight text-[var(--ink)]">
                  {job.role}
                </h3>
                <span className="self-start mt-3 mb-6 font-[Questrial] text-[13px] text-[var(--brand)] bg-[var(--brand-soft)] rounded-full px-4 py-1">
                  {job.period}
                </span>

                <ul className="space-y-3">
                  {job.bullets.map((b) => (
                    <li key={b} className="content-text flex gap-3">
                      <span className="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

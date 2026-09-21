"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

const css = `
  .exp-track { overflow-x: scroll; scrollbar-width: none; -ms-overflow-style: none; cursor: grab; scroll-snap-type: x proximity; }
  .exp-track::-webkit-scrollbar { display: none; }
  .exp-track:active { cursor: grabbing; }
  .exp-card { scroll-snap-align: start; }
  .exp-nav-btn { transition: border-color 200ms, color 200ms; }
  .exp-nav-btn:hover { border-color: #2563EB; color: #2563EB; }
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
    logo: "/logos/grc.svg",
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
    logo: "/logos/hei.svg",
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
    logo: "/logos/numer.svg",
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(index);
  };

  const handlePrev = () => scrollToIndex(Math.max(active - 1, 0));
  const handleNext = () => scrollToIndex(Math.min(active + 1, jobs.length - 1));

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    const onUp = () => {
      isDown = false;
    };

    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.2;
    };

    track.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    track.addEventListener("mousemove", onMove);

    return () => {
      track.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      track.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      id="experience"
      className="bg-[#EEF3FC] border-t border-[#D9E4F5]"
      style={sans}
    >
      <style>{css}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-[11px] text-[#8CA0C4] tracking-[0.08em] uppercase mb-2"
              style={mono}
            >
              Collaborations
            </p>
            <h2 className="text-[28px] font-medium text-[#0F2A4D] tracking-tight">
              Professional Experience
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous"
              className="exp-nav-btn w-9 h-9 flex items-center justify-center border border-[#D9E4F5] text-[#8CA0C4]"
              style={mono}
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next"
              className="exp-nav-btn w-9 h-9 flex items-center justify-center border border-[#D9E4F5] text-[#8CA0C4]"
              style={mono}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="exp-track flex gap-5 px-6 md:px-10 max-w-6xl mx-auto pb-2"
      >
        {jobs.map((job) => (
          <div
            key={job.role + job.org}
            className="exp-card shrink-0 w-[300px] sm:w-[360px] bg-white border border-[#D9E4F5] p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 relative shrink-0 overflow-hidden">
                <Image src={job.logo} alt={`${job.org} logo`} fill sizes="48px" />
              </div>
              <p className="text-[11px] text-[#8CA0C4] text-right" style={mono}>
                {job.period}
              </p>
            </div>

            <h3 className="text-[15px] font-medium text-[#0F2A4D]">
              {job.role}
            </h3>
            <p className="text-[13px] text-[#4F6488] mt-1">{job.org}</p>
            <p className="text-[12px] text-[#8CA0C4] mt-1 mb-5">
              {job.location}
            </p>

            <ul className="space-y-2">
              {job.bullets.map((b) => (
                <li
                  key={b}
                  className="text-[13px] text-[#4F6488] leading-relaxed flex gap-2"
                >
                  <span className="text-[#2563EB]">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20">
        <div className="flex items-center gap-2 mt-6">
          {jobs.map((job, i) => (
            <button
              key={job.role + job.org}
              type="button"
              aria-label={`Go to ${job.org}`}
              onClick={() => scrollToIndex(i)}
              className="h-px transition-all duration-200"
              style={{
                width: active === i ? "20px" : "8px",
                background: active === i ? "#2563EB" : "#D9E4F5",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

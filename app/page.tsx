"use client";

import { ExperienceSection } from "@/components/experience/experience";
import PhotoGallery from "@/components/gallery/gallery";
import { HeroSection } from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExperienceSection />
      <PhotoGallery />
    </div>
  );
}

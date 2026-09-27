import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const css = `
  .track { overflow-x: scroll; scrollbar-width: none; -ms-overflow-style: none; cursor: grab; }
  .track::-webkit-scrollbar { display: none; }
  .track:active { cursor: grabbing; }
`;

interface Photo {
  id: number;
  src: string;
  alt: string;
  label: string;
}

type LoadedMap = Record<number, boolean>;

const photos: Photo[] = [
  {
    id: 1,
    src: "/livecoding.png",
    alt: "2nd place",
    label: "Orange Live Coding",
  },
  { id: 2, src: "/imbadax.jpg", alt: "3rd Place", label: "ImbadaX Madagascar" },
  { id: 3, src: "/hackathon.jpg", alt: "Winner", label: "Hackathon intra-HEI" },
  {
    id: 4,
    src: "/erasmus.jpeg",
    alt: "Internship UPV",
    label: "Erasmus Internship at UPV",
  },
  {
    id: 5,
    src: "/zoovalencia.jpeg",
    alt: "Bioparc Valencia",
    label: "Bioparc València",
  },
  {
    id: 6,
    src: "/oceanographie.jpeg",
    alt: "Oceanogràfic de València",
    label: "Oceanogràfic de València",
  },
];

export default function PhotoGallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<LoadedMap>({});
  const trackRef = useRef<HTMLDivElement>(null);

  const handleLoad = (id: number): void =>
    setLoaded((prev) => ({ ...prev, [id]: true }));

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
      track.scrollLeft =
        scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.2;
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
    <>
      <style>{css}</style>

      <section className="bg-[var(--brand-soft)] py-24">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">
              {photos.length.toString().padStart(2, "0")} photos
            </p>
            <h2 className="title-text">Behind the experience</h2>
            <p className="content-text mt-2">A selection of special moments</p>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="track flex gap-6 px-6 md:px-10 max-w-6xl mx-auto"
        >
          {photos.map((photo) => {
            const isHovered = hovered === photo.id;

            return (
              <div
                key={photo.id}
                className="relative shrink-0 w-[260px] h-[360px] overflow-hidden rounded-3xl bg-white shadow-md"
                onMouseEnter={() => setHovered(photo.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Skeleton */}
                {!loaded[photo.id] && (
                  <div className="absolute inset-0 bg-[#E4E0F2] animate-pulse" />
                )}

                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="800px"
                  onLoad={() => handleLoad(photo.id)}
                  className="object-cover"
                  style={{
                    transform: isHovered ? "scale(1.06)" : "scale(1)",
                    transition: "transform 400ms ease",
                  }}
                />

                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[var(--brand-dark)]/90 to-transparent">
                  <span className="block font-[Poppins] font-semibold text-[15px] text-white">
                    {photo.label}
                  </span>
                  <span className="block font-[Questrial] text-[13px] text-white/70">
                    {photo.alt}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

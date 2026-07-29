import Image from "next/image";

import { cn } from "@/lib/utils";

type University = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

const universities: University[] = [
  { name: "University of Pennsylvania", logo: "/logos/penn.svg", width: 72, height: 72 },
  { name: "Harvard University", logo: "/logos/harvard.svg", width: 160, height: 44 },
  { name: "Columbia University", logo: "/logos/columbia.png", width: 200, height: 48 },
  { name: "MIT", logo: "/logos/mit.svg", width: 110, height: 56 },
  { name: "Princeton University", logo: "/logos/princeton.svg", width: 160, height: 40 },
  { name: "Stanford University", logo: "/logos/stanford.svg", width: 160, height: 34 },
  { name: "Wellesley College", logo: "/logos/wellesley.svg", width: 120, height: 72 },
];

function UniversityCard({ name, logo, width, height }: University) {
  return (
    <div
      className={cn(
        "flex h-28 w-48 shrink-0 items-center justify-center rounded-lg bg-white px-6 py-4 shadow-sm",
        "md:h-32 md:w-52"
      )}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={width}
        height={height}
        className="max-h-16 w-auto object-contain md:max-h-20"
      />
    </div>
  );
}

function MarqueeTrack() {
  return (
    <div className="marquee-track flex w-max">
      <ul className="flex items-center gap-6 pr-6" aria-label="University partners">
        {universities.map((uni) => (
          <li key={uni.name}>
            <UniversityCard {...uni} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-6 pr-6" aria-hidden>
        {universities.map((uni) => (
          <li key={`${uni.name}-duplicate`}>
            <UniversityCard {...uni} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function UniversityBanner() {
  return (
    <section
      className="marquee-banner overflow-hidden bg-gray-light py-12 md:py-14"
      aria-label="Our university partners"
    >
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gold">
        Our University Partners
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-light to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-light to-transparent md:w-24" />

        <div className="overflow-hidden">
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}

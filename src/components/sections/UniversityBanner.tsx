import Image from "next/image";

import { cn } from "@/lib/utils";

type University = {
  name: string;
  logo: string;
  logoHeight: number;
};

const universities: University[] = [
  { name: "Stanford University", logo: "/logos/stanford.svg", logoHeight: 28 },
  { name: "MIT", logo: "/logos/mit.svg", logoHeight: 36 },
  { name: "Columbia University", logo: "/logos/columbia.svg", logoHeight: 56 },
  { name: "Princeton University", logo: "/logos/princeton.svg", logoHeight: 56 },
  { name: "University of Pennsylvania", logo: "/logos/penn.svg", logoHeight: 56 },
];

function UniversityCard({ name, logo, logoHeight }: University) {
  return (
    <div
      className={cn(
        "flex w-44 shrink-0 flex-col items-center gap-3 rounded-lg bg-white p-5 shadow-sm",
        "md:w-48"
      )}
    >
      <div className="flex h-16 w-full items-center justify-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={120}
          height={logoHeight}
          className="max-h-16 w-auto object-contain"
          style={{ height: logoHeight, width: "auto" }}
        />
      </div>
      <p className="text-center text-xs font-medium leading-snug text-navy md:text-sm">
        {name}
      </p>
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

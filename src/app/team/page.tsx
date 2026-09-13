import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JoinTeamCTA, TeamLeadership } from "@/components/sections/TeamSections";

export const metadata: Metadata = {
  title: "Our Team | Constellate Strategy Group",
  description:
    "Meet the student leaders behind Constellate — an intercollegiate pro-bono consulting firm united by a belief that consulting can be a force for community good.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-navy px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-16">
          <div className="container mx-auto grid max-w-6xl gap-5 md:gap-8 lg:grid-cols-[160px_1fr_1fr]">
            <p className="pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              § &nbsp;Our Team
            </p>
            <h1 className="font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
              Meet the <em className="text-gold">people</em> behind Constellate.
            </h1>
            <p className="max-w-[42ch] pt-3 font-serif text-lg italic leading-relaxed text-white/80 md:text-xl">
              Student leaders from universities across the country, united by a
              belief that consulting can be a force for community good.
            </p>
          </div>
        </section>

        <TeamLeadership />
        <JoinTeamCTA />
      </main>
      <Footer />
    </>
  );
}

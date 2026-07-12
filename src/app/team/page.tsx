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
        <section className="bg-gradient-to-b from-navy to-navy-light px-6 pb-20 pt-32 md:px-12 md:pt-40 lg:px-16">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              The People Behind Constellate Strategy Group
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Meet Our Team
            </h1>
          </div>
        </section>

        <TeamLeadership />
        <JoinTeamCTA />
      </main>
      <Footer />
    </>
  );
}

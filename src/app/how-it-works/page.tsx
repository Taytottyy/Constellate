import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HowItWorks } from "@/components/sections/HowItWorks";

export const metadata: Metadata = {
  title: "How It Works | Constellate Strategy Group",
  description:
    "Learn how Constellate connects student consulting teams with startups, small businesses, and nonprofits through a structured, impact-driven engagement process.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-navy px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-16">
          <div className="container mx-auto grid max-w-6xl gap-5 md:gap-8 lg:grid-cols-[160px_1fr_1fr]">
            <p className="pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              § &nbsp;Our Process
            </p>
            <h1 className="font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
              How it <em className="text-gold">works</em>
            </h1>
            <p className="max-w-[42ch] pt-3 font-serif text-lg italic leading-relaxed text-white/80 md:text-xl">
              From first conversation to final deliverable, we guide every
              engagement with structure, mentorship, and a shared commitment to
              impact.
            </p>
          </div>
        </section>

        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}

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
        <section className="bg-gradient-to-b from-navy to-navy-light px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-16">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              Our Process
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              How It Works
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
              From first conversation to final deliverable, we guide every engagement
              with structure, mentorship, and a shared commitment to impact.
            </p>
          </div>
        </section>

        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}

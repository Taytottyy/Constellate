import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Our Services | Constellate Strategy Group",
  description:
    "Student-led teams deliver professional-grade consulting across strategic planning, market research, operations, marketing, and financial analysis for startups, small businesses, and nonprofits.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-navy px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-16">
          <div className="container mx-auto grid max-w-6xl gap-5 md:gap-8 lg:grid-cols-[160px_1fr_1fr]">
            <p className="pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
              § &nbsp;What We Offer
            </p>
            <h1 className="font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
              Our <em className="text-gold">services</em>
            </h1>
            <p className="max-w-[42ch] pt-3 font-serif text-lg italic leading-relaxed text-white/80 md:text-xl">
              Student-led teams deliver professional-grade consulting across the
              disciplines that matter most to small businesses and nonprofits.
            </p>
          </div>
        </section>

        <Services />
      </main>
      <Footer />
    </>
  );
}

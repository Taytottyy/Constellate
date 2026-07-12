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
        <section className="bg-gradient-to-b from-navy to-navy-light px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-16">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              What We Offer
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
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

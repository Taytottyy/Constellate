"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Step = {
  numeral: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    numeral: "i.",
    title: "Apply & Get Matched",
    description:
      "Students and organizations submit applications. We pair teams based on skills, interests, and project needs.",
  },
  {
    numeral: "ii.",
    title: "Scope the Challenge",
    description:
      "Consulting teams work with clients to define objectives, deliverables, and a clear project timeline.",
  },
  {
    numeral: "iii.",
    title: "Deliver Solutions",
    description:
      "Teams conduct research, develop recommendations, and present actionable strategies to client leadership.",
  },
  {
    numeral: "iv.",
    title: "Create Lasting Impact",
    description:
      "Clients implement insights while students gain real consulting experience and meaningful career development.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="bg-cream px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-deep">
            § &nbsp;The Process
          </p>

          <h2 className="mt-5 font-serif text-4xl font-normal leading-[1.02] tracking-[-0.02em] text-navy md:text-5xl">
            From application to <em className="text-gold-deep">lasting impact</em>
          </h2>

          <p className="mx-auto mt-6 max-w-[46ch] font-serif text-lg italic leading-relaxed text-navy md:text-[19.5px]">
            Every engagement moves through the same four stages, with structure
            and mentorship guiding students and clients at each step.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-gold-deep">
            Engagement Timeline
          </h3>

          <motion.ol
            className="mt-4 border-t border-rule"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {steps.map((step) => (
              <motion.li
                key={step.numeral}
                variants={rowVariants}
                className="grid grid-cols-[32px_1fr] items-baseline gap-x-4 gap-y-1 border-b border-rule py-[18px] sm:grid-cols-[40px_minmax(0,0.8fr)_minmax(0,1.2fr)]"
              >
                <span className="font-mono text-[11px] tracking-[0.1em] text-gold-deep">
                  {step.numeral}
                </span>
                <span className="font-serif text-[18.5px] font-medium italic leading-snug text-navy">
                  {step.title}
                </span>
                <span className="col-start-2 text-[13.5px] leading-relaxed text-gray-muted sm:col-start-auto">
                  {step.description}
                </span>
              </motion.li>
            ))}
          </motion.ol>

          <div className="mt-8 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 border border-navy bg-navy px-7 py-[18px] text-xs font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:border-navy-light hover:bg-navy-light"
            >
              Get Started <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

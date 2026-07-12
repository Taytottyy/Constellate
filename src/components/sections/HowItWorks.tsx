"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ClipboardList,
  Handshake,
  Lightbulb,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Apply & Get Matched",
    description:
      "Students and organizations submit applications. We pair teams based on skills, interests, and project needs.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Scope the Challenge",
    description:
      "Consulting teams work with clients to define objectives, deliverables, and a clear project timeline.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver Solutions",
    description:
      "Teams conduct research, develop recommendations, and present actionable strategies to client leadership.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Create Lasting Impact",
    description:
      "Clients implement insights while students gain real consulting experience and meaningful career development.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">
            The Process
          </h2>
        </div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className={cn(
                "relative flex flex-col rounded-xl border border-navy/8 bg-gray-light p-6",
                "transition-shadow duration-300 hover:shadow-md"
              )}
            >
              <span className="font-heading text-4xl font-semibold text-gold/40">
                {step.number}
              </span>
              <div className="mt-4 flex size-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <step.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-muted md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

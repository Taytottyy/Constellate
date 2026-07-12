"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  FlaskConical,
  LineChart,
  Megaphone,
  Package,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: LineChart,
    title: "Management",
    description:
      "Strategic planning, competitive positioning, and organizational design to help teams scale with clarity.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Brand positioning, audience targeting, and go-to-market plans tailored to resource-constrained teams.",
  },
  {
    icon: Package,
    title: "Product",
    description:
      "Product strategy, user research, and roadmap development to turn ideas into offerings customers love.",
  },
  {
    icon: FlaskConical,
    title: "Research & Operations",
    description:
      "Market analysis, workflow optimization, and data-driven insights that improve efficiency and decisions.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-gray-light py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">
            What We Offer
          </h2>
        </div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={cn(
                "group rounded-xl border border-navy/8 bg-white p-6",
                "transition-all duration-300 hover:border-gold/30 hover:shadow-md"
              )}
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold">
                <service.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-muted md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

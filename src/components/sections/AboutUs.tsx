"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, HeartHandshake, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type StatCard = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const stats: StatCard[] = [
  { icon: GraduationCap, label: "Universities Represented", value: "—" },
  { icon: Briefcase, label: "Projects Completed", value: "—" },
  { icon: HeartHandshake, label: "Organizations Served", value: "—" },
];

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function StatCardItem({ icon: Icon, label, value }: StatCard) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-navy/8 bg-white p-6 shadow-sm",
        "transition-shadow duration-300 hover:shadow-md"
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
      </div>
      <div>
        <p className="font-heading text-3xl font-semibold tracking-tight text-navy md:text-4xl">
          {value}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-muted md:text-base">{label}</p>
      </div>
    </motion.div>
  );
}

export function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-gray-light py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={textVariants}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              About Us
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl">
              Our Mission
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-muted md:text-lg md:leading-relaxed">
              Constellate is an intercollegiate pro-bono consulting firm that connects
              student talent with small businesses and nonprofit organizations, helping
              under-resourced and underserved organizations solve real-world challenges
              while giving aspiring business leaders hands-on consulting experience, career
              development, and opportunities to create tangible community impact.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardContainerVariants}
          >
            {stats.map((stat) => (
              <StatCardItem key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

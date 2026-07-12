"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { ConstellationBackground } from "@/components/sections/ConstellationBackground";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-navy to-navy-light">
      <ConstellationBackground />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-6 pb-20 pt-32 md:px-12 md:pt-40 lg:px-16">
        <motion.div
          className="max-w-3xl"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Where Student Talent Meets{" "}
            <span className="text-gold">Real-World Impact</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            Constellate is an intercollegiate pro-bono consulting firm bridging the gap
            between ambitious student talent and under-resourced startups, small
            businesses, and nonprofits. We aim to solve complex, real-world strategic
            challenges while providing tangible, career-defining leadership experience
            to undergraduates.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              nativeButton={false}
              render={<Link href="#contact" />}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
            >
              Partner With Us
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/team" />}
              variant="navy-outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Join our Team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

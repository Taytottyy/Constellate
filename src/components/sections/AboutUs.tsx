"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-gray-light py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          className="mx-auto max-w-3xl text-center"
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
            Constellate is an intercollegiate pro-bono consulting firm bridging the gap
            between ambitious student talent and under-resourced startups, small
            businesses, and nonprofits. We aim to solve complex, real-world strategic
            challenges while providing tangible, career-defining leadership experience
            to undergraduates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

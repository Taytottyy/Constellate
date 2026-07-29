"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.12),transparent_60%)]"
      />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={variants}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            Get Involved
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Ready to Make an Impact?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            Whether you&apos;re a small business, nonprofit, or ambitious student —
            Constellate Strategy Group is building partnerships that create real change. Reach out
            to learn how we can work together.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeYNEiDOvmzXweKklYl985uoGV7RR_76-Y2sajVHeAUngu_ZA/viewform?usp=sharing&ouid=114681356999768003800"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
            >
              Partner With Us
            </Button>
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfhuqtybNI6RuZfxReG2hIwvzLBhNjKLuWqhSkRLn_mOMGqFQ/viewform?usp=sharing&ouid=114681356999768003800"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="navy-outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Join our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

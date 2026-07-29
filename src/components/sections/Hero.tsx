"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { ConstellationBackground } from "@/components/sections/ConstellationBackground";
import { Button } from "@/components/ui/button";

const HEADLINE = "Where Student Talent Meets Real-World Impact";
const GOLD_START = HEADLINE.indexOf("Real-World Impact");

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

function TypewriterHeadline() {
  const shouldReduceMotion = useReducedMotion();
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (shouldReduceMotion) {
      setText(HEADLINE);
      setShowCursor(false);
      return;
    }

    setShowCursor(true);
    let index = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const schedule = (fn: () => void, ms: number) => {
      timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const tick = () => {
      if (!deleting) {
        index += 1;
        setText(HEADLINE.slice(0, index));

        if (index === HEADLINE.length) {
          schedule(() => {
            deleting = true;
            tick();
          }, 2400);
          return;
        }

        schedule(tick, 55);
        return;
      }

      index -= 1;
      setText(HEADLINE.slice(0, index));

      if (index === 0) {
        deleting = false;
        schedule(tick, 500);
        return;
      }

      schedule(tick, 28);
    };

    schedule(tick, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [shouldReduceMotion]);

  const plain = text.slice(0, Math.min(text.length, GOLD_START));
  const gold = text.length > GOLD_START ? text.slice(GOLD_START) : "";

  return (
    <h1 className="mx-auto min-h-[3.2em] max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-tight text-white md:min-h-[2.6em] md:text-5xl lg:text-6xl xl:text-7xl">
      <span className="sr-only">{HEADLINE}</span>
      <span aria-hidden>
        {plain}
        {gold ? <span className="text-gold">{gold}</span> : null}
        {showCursor ? (
          <span className="typewriter-cursor ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-gold align-middle" />
        ) : null}
      </span>
    </h1>
  );
}

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
        <div className="mx-auto max-w-3xl text-center">
          <TypewriterHeadline />

          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              Constellate is an intercollegiate pro-bono consulting firm bridging the gap
              between ambitious student talent and under-resourced startups, small
              businesses, and nonprofits. We aim to solve complex, real-world strategic
              challenges while providing tangible, career-defining leadership experience
              to undergraduates.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

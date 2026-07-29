"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { executiveTeam, getInitials } from "@/data/team";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function TeamLeadership() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-gray-light py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            Leadership
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Executive Team
          </h2>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {executiveTeam.map((member) => (
            <motion.article
              key={member.name}
              variants={cardVariants}
              className={cn(
                "flex flex-col items-center rounded-xl border border-navy/8 bg-white p-8 text-center shadow-sm",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              )}
            >
              {member.image ? (
                <div className="relative size-24 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="size-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex size-24 items-center justify-center rounded-full bg-gray-light text-xl font-semibold text-navy"
                  aria-hidden
                >
                  {getInitials(member.name)}
                </div>
              )}

              <h3 className="mt-5 text-lg font-bold text-navy">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-gold">{member.role}</p>
              {member.university ? (
                <p className="mt-1 text-xs text-gray-muted">{member.university}</p>
              ) : null}

              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex size-9 items-center justify-center rounded-lg text-navy/60 transition-colors hover:bg-navy/5 hover:text-navy"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon className="size-5" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function JoinTeamCTA() {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,166,35,0.1),transparent_60%)]"
      />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={variants}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Want to be part of Constellate?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            We recruit driven students from universities across the country.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhuqtybNI6RuZfxReG2hIwvzLBhNjKLuWqhSkRLn_mOMGqFQ/viewform?usp=sharing&ouid=114681356999768003800"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-gold px-8 text-base font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

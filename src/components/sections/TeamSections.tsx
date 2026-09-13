"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { executiveTeam, getInitials } from "@/data/team";

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
  visible: { transition: { staggerChildren: 0.08 } },
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
    <section className="bg-paper px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-4 border-b border-rule pb-8 md:grid-cols-[160px_1fr] md:gap-8">
          <p className="pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-deep">
            Leadership
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-[-0.01em] text-navy md:text-[33px]">
            The <em className="text-gold-deep">executive team.</em>
          </h2>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {executiveTeam.map((member) => (
            <motion.article
              key={member.name}
              variants={cardVariants}
              className="flex flex-col bg-navy p-4 pb-5 outline outline-1 outline-rule transition-colors duration-300 hover:bg-navy-light md:p-5 md:pb-6"
            >
              <div className="relative aspect-square overflow-hidden bg-navy-light">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className="grid size-full place-items-center font-serif text-4xl font-medium italic text-cream"
                    aria-hidden
                  >
                    {getInitials(member.name)}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-[20.5px] font-medium italic leading-tight tracking-[-0.005em] text-cream">
                    {member.name}
                  </h3>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 flex size-[26px] shrink-0 items-center justify-center text-white/50 transition-colors hover:text-gold"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon className="size-3.5" />
                  </a>
                </div>
                <p className="text-xs text-white/70">{member.role}</p>
                {member.university ? (
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-gold">
                    {member.university}
                  </p>
                ) : null}
              </div>
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
    <section className="bg-navy px-6 py-20 md:px-12 md:py-24 lg:px-16">
      <motion.div
        className="container mx-auto grid max-w-6xl gap-5 md:gap-8 lg:grid-cols-[160px_1fr_1fr]"
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={variants}
      >
        <p className="pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
          § &nbsp;Join Us
        </p>
        <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-[-0.02em] text-white md:text-5xl">
          Want to be part of <em className="text-gold">Constellate?</em>
        </h2>
        <div className="pt-3">
          <p className="max-w-[42ch] font-serif text-lg italic leading-relaxed text-white/80 md:text-xl">
            We recruit driven students from universities across the country.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhuqtybNI6RuZfxReG2hIwvzLBhNjKLuWqhSkRLn_mOMGqFQ/viewform?usp=sharing&ouid=114681356999768003800"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-4 border border-gold bg-gold px-7 py-[18px] text-xs font-medium uppercase tracking-[0.14em] text-navy transition-colors hover:border-gold-light hover:bg-gold-light"
          >
            Apply Now <span aria-hidden>↗</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

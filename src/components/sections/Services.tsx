"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  FlaskConical,
  LineChart,
  Megaphone,
  Package,
  type LucideIcon,
} from "lucide-react";

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

const faceClass =
  "absolute inset-0 flex flex-col p-6 [backface-visibility:hidden]";

function FlipCard({ service, index }: { service: Service; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div variants={cardVariants} className="[perspective:1200px]">
      <button
        type="button"
        onClick={() => setFlipped((isFlipped) => !isFlipped)}
        aria-pressed={flipped}
        className="group block h-72 w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
      >
        <motion.div
          className="relative size-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: [0.4, 0.2, 0.2, 1] }
          }
        >
          <div
            className={`${faceClass} border border-rule bg-white transition-colors duration-300 group-hover:border-gold`}
            aria-hidden={flipped}
          >
            <span className="font-mono text-[11px] tracking-[0.1em] text-gold-deep">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="mt-5 flex size-11 items-center justify-center bg-navy text-gold">
              <service.icon className="size-5" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="mt-5 font-serif text-[28px] font-normal leading-tight tracking-[-0.01em] text-navy">
              {service.title}
            </h3>
            <span className="mt-auto font-mono text-[10px] uppercase tracking-[0.14em] text-gray-muted transition-colors group-hover:text-gold-deep">
              Tap to flip ↻
            </span>
          </div>

          <div
            className={`${faceClass} bg-navy [transform:rotateY(180deg)]`}
            aria-hidden={!flipped}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
              {service.title}
            </span>
            <p className="mt-5 font-serif text-xl italic leading-relaxed text-white/90">
              {service.description}
            </p>
            <span className="mt-auto font-mono text-[10px] uppercase tracking-[0.14em] text-white/50 transition-colors group-hover:text-gold">
              ↺ Flip back
            </span>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="bg-paper px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-deep">
            § &nbsp;Our Services
          </p>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-[1.02] tracking-[-0.02em] text-navy md:text-5xl">
            What we <em className="text-gold-deep">offer</em>
          </h2>
          <p className="mt-5 font-serif text-lg italic text-gray-muted">
            Tap a card to see what each practice covers.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <FlipCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

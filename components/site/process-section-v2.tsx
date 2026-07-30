"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  { num: "01", title: "Listen", desc: "We start by understanding your workflow, pain points, and goals." },
  { num: "02", title: "Design", desc: "We map the ideal system — not a template, but a custom solution." },
  { num: "03", title: "Build", desc: "We develop and test your system. You see progress weekly." },
  { num: "04", title: "Support", desc: "We don't disappear after launch. Ongoing optimization is part of the package." },
];

export function ProcessSectionV2() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium">How We Work</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            From discovery to deployment.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold tracking-[-0.04em] text-white/[0.06]">{step.num}</div>
              <div className="mt-2 h-0.5 w-8 bg-blue/50" />
              <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue transition hover:text-purple"
          >
            Learn more about our approach <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

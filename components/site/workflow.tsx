"use client";

import { motion } from "framer-motion";
import { Reveal } from "./motion";
import { Search, FileCode, Rocket, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We map your workflows, pain points, and goals. No assumptions — just a deep understanding of where you are and where you want to be.",
  },
  {
    icon: FileCode,
    title: "Design & Build",
    desc: "We architect and develop your custom system. You see progress weekly, with full transparency and zero surprises.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We deploy, integrate, and train your team. Your system goes live with full documentation and support.",
  },
  {
    icon: HeartHandshake,
    title: "Grow Together",
    desc: "Ongoing optimization, updates, and support. Your system evolves as your business grows.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="section-padding relative overflow-hidden px-5">
      <div className="glow-orb left-1/4 top-1/3 h-80 w-80 bg-gold/8" />
      <div className="mx-auto max-w-premium">
        <Reveal>
          <span className="label-premium">How We Work</span>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            From concept to launch
            <br />
            <span className="text-gradient-ember">in weeks, not months.</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-ember/30 via-gold/20 to-transparent md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <Reveal delay={i * 0.1} key={step.title}>
                <div className="grid items-start gap-6 md:grid-cols-[80px_1fr] md:gap-10">
                  {/* Step number + icon */}
                  <div className="relative flex items-center gap-4 md:flex-col md:items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ember/10 text-ember ring-1 ring-ember/20">
                      <step.icon size={24} />
                    </div>
                    <span className="text-sm font-mono text-ember/60 md:mt-2">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="glass-premium-card rounded-4xl p-7 md:p-9">
                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-7 text-white/75">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <Link href="/contact" className="btn-primary group">
              Start Your Project
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

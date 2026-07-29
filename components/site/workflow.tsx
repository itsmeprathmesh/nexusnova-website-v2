"use client";

import { motion } from "framer-motion";
import { Reveal } from "./motion";
import { Smartphone, Bell, Calendar, UserCheck } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Patient books online",
    desc: "Self-scheduling via website, WhatsApp, or Instagram — 24/7.",
  },
  {
    icon: Bell,
    title: "Automated reminders",
    desc: "WhatsApp and SMS reminders at 48h, 24h, and 2h before appointment.",
  },
  {
    icon: Calendar,
    title: "Smart scheduling",
    desc: "Real-time calendar sync. No double-booking. Instant rescheduling.",
  },
  {
    icon: UserCheck,
    title: "Follow-up & recall",
    desc: "Automated post-visit follow-ups and recall campaigns for repeat visits.",
  },
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
];

export function WorkflowSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow eyebrow-health">How it works</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
            Your clinic&apos;s automation system in motion.
          </h2>
          <p className="mt-5 max-w-2xl text-slate-400">
            From first contact to follow-up — every step is automated so your
            team focuses on patients, not admin.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* Smart connection line (desktop) */}
          <div className="absolute left-0 right-0 top-12 hidden h-px md:block">
            <svg className="h-2 w-full" viewBox="0 0 1200 8" fill="none">
              <motion.path
                d="M0 4 L1200 4"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ strokeDashoffset: 2000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "linear" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((step, i) => (
            <Reveal delay={i * 0.08} key={step.title}>
              <div className="relative flex flex-col items-center text-center">
                <div className="glass-health flex h-24 w-24 items-center justify-center rounded-full">
                  <step.icon className="text-teal-300" size={32} />
                </div>
                <p className="mt-2 text-sm text-teal-300/60">0{i + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    title: "Private Cosmetic Practice",
    challenge: "High inquiry volume on social media leading to 6+ hour delays in booking consultation calls.",
    solution: "Deployed 24/7 AI Intake Agent across Instagram DM, WhatsApp, and Web Chat with instant deposit collection.",
    result: "3.8x increase in booked consultations within 30 days; decreased inquiry response time from 6 hours to 22 seconds.",
    gradient: "from-blue/20 via-blue/5 to-transparent",
    border: "border-blue/20",
  },
  {
    title: "Multi-Doctor Dental Implant Center",
    challenge: "High no-show rate (35%) on complimentary implant evaluations and heavy receptionist phone fatigue.",
    solution: "Implemented ClinicOS automated multi-touch SMS reminders, pre-op digital questionnaires, and waitlist auto-fill.",
    result: "No-show rates dropped to under 8%, saving an estimated $14,000/month in previously wasted surgeon schedule time.",
    gradient: "from-purple/20 via-purple/5 to-transparent",
    border: "border-purple/20",
  },
];

export function HolographicCases() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium font-mono text-[10px]">_case.studies()</span>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Real transformations from{" "}
            <span className="text-gradient-blue">practices like yours.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 perspective-[1000px]">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, rotateX: 2, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-[6.4px] border ${c.border} bg-white/[0.02] p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <ArrowUpRight size={16} className="text-white/45 transition group-hover:text-blue" />
                </div>

                <div className="mt-5 space-y-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">Challenge</p>
                    <p className="mt-1 text-sm text-white/75">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">Solution</p>
                    <p className="mt-1 text-sm text-white/75">{c.solution}</p>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/[0.04] pt-4">
                  <p className="font-mono text-sm font-semibold text-blue/80">
                    <span className="text-blue/50">&gt;</span> {c.result}
                  </p>
                </div>

                <Link
                  href="/portfolio"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.12em] text-blue/60 transition hover:text-blue"
                >
                  View full case study
                  <ArrowUpRight size={12} />
                </Link>
              </div>

              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-white/[0.02] to-transparent blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

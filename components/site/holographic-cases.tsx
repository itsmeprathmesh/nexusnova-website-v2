"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    title: "Restaurant Growth System",
    industry: "Restaurant / Café",
    outcome: "40% more online orders",
    gradient: "from-blue/20 via-blue/5 to-transparent",
    border: "border-blue/20",
  },
  {
    title: "Clinic Appointment Funnel",
    industry: "Clinic / Healthcare",
    outcome: "40% fewer no-shows",
    gradient: "from-purple/20 via-purple/5 to-transparent",
    border: "border-purple/20",
  },
  {
    title: "Real Estate Lead Engine",
    industry: "Real Estate / Builder",
    outcome: "50% faster follow-up",
    gradient: "from-cyan/20 via-cyan/5 to-transparent",
    border: "border-cyan/20",
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
          <span className="label-premium font-mono text-[10px]">_case_studies.load()</span>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Real results from{" "}
            <span className="text-gradient-blue">businesses like yours.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 perspective-[1000px]">
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
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
                    {c.industry}
                  </span>
                  <ArrowUpRight size={16} className="text-white/20 transition group-hover:text-blue" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm font-mono text-white/40">{c.outcome}</p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <Link
                  href="/portfolio"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.12em] text-blue/60 transition hover:text-blue"
                >
                  View case study
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

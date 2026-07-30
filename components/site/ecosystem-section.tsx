"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarClock, RefreshCw } from "lucide-react";
import Link from "next/link";

const systemModules = [
  {
    id: "01",
    icon: MessageCircle,
    badge: "MODULE 01",
    title: "24/7 AI Inbound Lead Capture",
    desc: "Custom AI voice and text agents respond instantly to patient inquiries across WhatsApp, web chat, and social channels in under 30 seconds.",
    outcome: "0 missed patient leads during off-hours",
    color: "text-blue",
    gradient: "from-blue/20 to-transparent",
  },
  {
    id: "02",
    icon: CalendarClock,
    badge: "MODULE 02",
    title: "Automated Onboarding & Scheduling",
    desc: "Syncs directly with your existing calendar/EHR to pre-qualify patients, collect initial intake forms, and collect consultation deposits automatically.",
    outcome: "Saves 15+ hours/week of front-desk manual work",
    color: "text-purple",
    gradient: "from-purple/20 to-transparent",
  },
  {
    id: "03",
    icon: RefreshCw,
    badge: "MODULE 03",
    title: "Patient Reactivation Engine",
    desc: "Automated SMS/email follow-up sequences for canceled consultations, biannual check-ups, and post-care routine follow-ups.",
    outcome: "Recovers $10k+ in lost treatment revenue monthly",
    color: "text-cyan",
    gradient: "from-cyan/20 to-transparent",
  },
];

export function EcosystemSection() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium font-mono text-[10px]">_clinicos.modules()</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Three modules.{" "}
            <span className="text-gradient-blue">One integrated system for your practice.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            ClinicOS combines AI-powered lead capture, automated scheduling, and patient reactivation into a single platform designed for healthcare practices.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {systemModules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[6.4px] border border-white/[0.06] bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-0 transition group-hover:opacity-100`} />
                <div className="relative">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-blue/50">{mod.badge}</span>
                  <Icon className={`mt-4 ${mod.color}`} size={28} />
                  <h3 className="mt-4 text-2xl font-bold text-white">{mod.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{mod.desc}</p>
                  <div className="mt-5 border-t border-white/[0.04] pt-4">
                    <p className="font-mono text-xs text-white/30">
                      <span className="text-blue/50">&gt;</span> {mod.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-blue/50 transition hover:text-blue"
          >
            &gt; Explore all ClinicOS features
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarClock, RefreshCw } from "lucide-react";

const systemModules = [
  {
    id: "01",
    icon: MessageCircle,
    badge: "INBOUND TRIAGE",
    title: "24/7 AI Patient Intake Agent",
    desc: "Custom voice and text AI agents trained on your clinic's specific treatments, pricing, and doctor schedules. Instantly answers patient questions and pre-qualifies consultations on Web, WhatsApp, and Phone.",
    outcome: "Immediate response time (under 15 seconds) 24/7.",
    color: "text-blue",
    gradient: "from-blue/20 to-transparent",
  },
  {
    id: "02",
    icon: CalendarClock,
    badge: "WORKFLOW AUTOMATION",
    title: "Automated EHR & Calendar Scheduling",
    desc: "Directly syncs booked consultations into your electronic health record (EHR) or calendar software. Automatically sends intake forms, medical history questionnaires, and deposit payment links before the visit.",
    outcome: "Eliminates 80% of front-desk paperwork and manual entry.",
    color: "text-purple",
    gradient: "from-purple/20 to-transparent",
  },
  {
    id: "03",
    icon: RefreshCw,
    badge: "REVENUE RETENTION",
    title: "Patient Reactivation & Follow-Up System",
    desc: "Automated multi-stage sequences that follow up on pending consultation requests, send post-treatment care instructions, and trigger automated reminders for annual check-ups or follow-up procedures.",
    outcome: "Recovers $12,000+ per doctor in missed follow-up procedures.",
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
          <span className="label-premium font-mono text-[10px]">_core.capabilities()</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            The ClinicOS Engine{" "}
            <span className="text-gradient-blue">Blueprint</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            A unified AI layer that integrates with your existing clinic workflow to automate patient management end-to-end.
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
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles, Gem, Stethoscope, Heart } from "lucide-react";

const specialties = [
  {
    icon: Sparkles,
    title: "Medical Aesthetics & Dermatology",
    desc: "Automates consultation fee collection, procedure pre-screening, treatment package inquiries, and periodic maintenance reminders.",
    gradient: "from-purple/20 to-transparent",
    color: "text-purple",
  },
  {
    icon: Gem,
    title: "Dental & Implant Centers",
    desc: "Handles high-ticket implant and cosmetic inquiries, automatically triages dental emergencies, and manages bi-annual hygiene recall schedules.",
    gradient: "from-blue/20 to-transparent",
    color: "text-blue",
  },
  {
    icon: Stethoscope,
    title: "Private Surgical & Orthopedic",
    desc: "Qualifies surgical candidates, distributes pre-op prep instructions, and manages post-op check-in workflows seamlessly.",
    gradient: "from-cyan/20 to-transparent",
    color: "text-cyan",
  },
  {
    icon: Heart,
    title: "Wellness, Longevity & HRT Clinics",
    desc: "Automates recurring lab work reminders, subscription billing updates, and intake questionnaire collection for ongoing treatment plans.",
    gradient: "from-purple/20 to-transparent",
    color: "text-purple",
  },
];

export function SpecialtyGrid() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium font-mono text-[10px]">_specialty.workflows()</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Configured for Your{" "}
            <span className="text-gradient-blue">Specific Practice Model</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {specialties.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[6.4px] border border-white/[0.06] bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 transition group-hover:opacity-100`} />
                <div className="relative">
                  <Icon className={spec.color} size={28} />
                  <h3 className="mt-4 text-xl font-bold text-white">{spec.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{spec.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

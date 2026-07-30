"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layers, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const systems = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Fast, SEO-optimized websites built on Next.js with premium animation and design detail.",
    color: "text-blue",
    gradient: "from-blue/20 to-transparent",
  },
  {
    icon: Zap,
    title: "AI Automation",
    desc: "Chatbots, WhatsApp automation, and workflow systems that handle intake, reminders, and follow-up.",
    color: "text-purple",
    gradient: "from-purple/20 to-transparent",
  },
  {
    icon: Layers,
    title: "CRM & Dashboards",
    desc: "Lead source tracking, pipeline stages, and KPI dashboards for data-driven decisions.",
    color: "text-cyan",
    gradient: "from-cyan/20 to-transparent",
  },
  {
    icon: Cpu,
    title: "Branding & Growth",
    desc: "Logo, identity, and UI/UX paired with local SEO so the right people find you.",
    color: "text-blue",
    gradient: "from-blue/20 to-transparent",
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
          <span className="label-premium">Our AI Ecosystem</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Four systems.{" "}
            <span className="text-gradient-blue">Built custom for your business.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Each one is custom-built for your business — no templates, no
            one-size-fits-all.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {systems.map((system, i) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[6.4px] border border-white/[0.06] bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-0 transition group-hover:opacity-100`} />
                <div className="relative">
                  <Icon className={system.color} size={28} />
                  <h3 className="mt-4 text-2xl font-bold text-white">{system.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{system.desc}</p>
                  <Link
                    href="/solutions"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue transition hover:text-purple"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "End-to-End Encrypted Patient Data Transport",
    desc: "Secure Webhook Processing with TLS 1.3 encryption for all patient inquiries and medical data in transit and at rest.",
  },
  {
    title: "99.9% System Uptime",
    desc: "Instant Zero-Latency AI Triage Processing with multi-region CDN failover ensuring your clinic never misses a lead.",
  },
  {
    title: "Seamless API Integrations",
    desc: "Native connections across WhatsApp Business API, Custom Web Portals, and EHR Systems with zero-downtime deployment.",
  },
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium font-mono text-[10px]">_infrastructure.security()</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Built for Data Privacy,{" "}
            <span className="text-gradient-blue">Speed, and Reliability</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-mono text-white/30">
            Healthcare-ready web architecture designed to handle high patient volumes while keeping operational data secure.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[6.4px] border border-white/[0.06] bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="relative">
                <h3 className="text-lg font-bold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

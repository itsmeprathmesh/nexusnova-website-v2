"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "68%", label: "Of After-Hours Inquiries Go Unanswered", desc: "Patients seeking private care usually reach out to 3 clinics at once. The first practice to respond gets the appointment." },
  { number: "4.5 Hours", label: "Daily Front-Desk Time Lost", desc: "Staff spend hours answering routine cost questions, rescheduling appointments, and manually texting reminders instead of focusing on in-person care." },
  { number: "32%", label: "Average Patient No-Show Rate", desc: "Without automated multi-channel SMS/WhatsApp reminders and deposit collection, unconfirmed appointments leak clinic revenue." },
];

export function StatStrip() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium font-mono text-[10px]">_clinic.bottleneck.analysis()</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            The High Cost of Manual{" "}
            <span className="text-gradient-blue">Front-Desk Operations</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[6.4px] border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <div className="stat-number font-mono">{stat.number}</div>
              <div className="mt-3 text-sm font-semibold text-white">{stat.label}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

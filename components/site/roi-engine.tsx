"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: "01",
    headline: "The 5-Minute Lead Drop-Off",
    desc: "Patient intent degrades exponentially after 300 seconds. If a prospect inquiring about a $3,000 procedure (e.g., Dental Implants, Aesthetics, Orthopedics) waits longer than 5 minutes for a response, their probability of booking drops by 80%. ClinicOS eliminates this delay completely.",
  },
  {
    id: "02",
    headline: "The Administrative Payroll Trap",
    desc: "Paying administrative staff to manually call, leave voicemails, and send manual booking reminders costs average practices $35,000–$60,000 annually in wasted labor hours. Automated scheduling handles 90% of routine bookings at zero marginal cost.",
  },
  {
    id: "03",
    headline: "Late Cancelation Revenue Recovery",
    desc: "When a patient cancels 24 hours prior to an appointment, front-desk staff rarely have time to manually call back-burner leads. Our automated waitlist engine instantly blasts waiting prospects to fill empty slots automatically.",
  },
];

export function ROISection() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium font-mono text-[10px]">_financial.impact.model()</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            The Math Behind{" "}
            <span className="text-gradient-blue">Lost Clinic Revenue</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-mono text-white/55">
            Every unhandled call or delayed message directly transfers thousands in lifetime patient value to competing practices in your area.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[6.4px] border border-white/[0.06] bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue/20 via-purple/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <span className="font-mono text-xs text-blue/50">0{card.id}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{card.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

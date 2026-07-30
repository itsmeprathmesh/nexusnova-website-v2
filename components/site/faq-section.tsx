"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Will this replace our current front-desk team?",
    a: "No. ClinicOS is designed to augment your existing front-desk team, not replace them. It handles the repetitive, high-volume tasks—answering routine pricing questions, handling late-night inquiries, and sending booking reminders—so your staff can focus on delivering exceptional in-person care to patients in the clinic.",
  },
  {
    q: "How long does integration take, and will it disrupt our daily operations?",
    a: "Full deployment takes less than 14 days. Because we handle all custom AI training, software mapping, and API connections on our end, your practice experiences zero operational downtime.",
  },
  {
    q: "How does the AI handle complex or urgent medical questions?",
    a: "Safety is engineered into the core system. The AI is strictly trained on your clinic's approved clinical boundaries. Whenever a prospect asks a complex medical question or indicates a medical emergency, the system immediately executes a smart handoff to your clinical team via SMS or internal notification.",
  },
  {
    q: "Can ClinicOS integrate with our existing EHR/EMR or Calendar system?",
    a: "Yes. We build custom API hooks and integrations that connect directly to standard practice management software, custom CRMs, Google Calendar, Outlook, and custom web portals.",
  },
  {
    q: "How does deposit collection work?",
    a: "During the automated booking conversation, the AI provides a secure payment link (Stripe, PayPal, or local processor). Once the deposit is paid, the system automatically confirms the appointment and locks the slot on your schedule.",
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.04]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left font-mono text-sm text-white/70 transition hover:text-white"
      >
        <span className="flex items-start gap-3">
          <span className="text-blue/50 mt-0.5">&gt;</span>
          <span>{q}</span>
        </span>
        <ChevronDown
          size={14}
          className={`shrink-0 text-white/30 transition duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-6 font-mono text-sm leading-7 text-white/40">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium font-mono text-[10px]">_frequently.asked()</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Everything You Need to Know{" "}
            <span className="text-gradient-blue">About ClinicOS</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

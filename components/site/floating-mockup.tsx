"use client";

import { motion } from "framer-motion";

export function FloatingMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.21, 0.8, 0.35, 1] }}
      className="perspective floating relative"
    >
      <div className="absolute -inset-8 rounded-full bg-teal-500/[.12] blur-3xl" />
      <div className="glass-health relative overflow-hidden rounded-[1.75rem] p-2 sm:p-3">
        <div className="rounded-[1.3rem] border border-white/10 bg-[#0b1020]/95 p-4 sm:p-5">
          {/* Header */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400/70" />
            <span className="ml-2 min-w-0 truncate rounded-full bg-white/[.045] px-3 py-1 text-[11px] text-slate-300/45 sm:ml-4">
              clinic.nexusnova.io/dashboard
            </span>
          </div>

          {/* Metrics */}
          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-teal-300">
                  Today&apos;s Appointments
                </p>
                <p className="mt-3 text-3xl font-semibold text-[#F8FAFC]">
                  24
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.28em] text-teal-300/60">
                  No-shows
                </p>
                <p className="mt-3 text-lg font-semibold text-green-400">
                  2 (8.3%)
                </p>
              </div>
              <span className="rounded-full border border-teal-300/20 bg-teal-400/[.1] px-3 py-1 text-xs text-teal-200">
                Automated
              </span>
            </div>

            {/* Mini bar chart */}
            <div className="mt-6 flex h-24 items-end gap-2">
              {[65, 72, 58, 80, 68, 88, 76].map((height, index) => (
                <span
                  key={height}
                  className={`flex-1 rounded-t-md ${
                    index === 5
                      ? "bg-teal-400"
                      : "bg-gradient-to-t from-teal-950 to-teal-400/80"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {[
              ["Patients Today", "24"],
              ["Reminders Sent", "48"],
              ["Avg Response", "<5 min"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[.025] px-3 py-3"
              >
                <p className="text-[11px] text-slate-300/45">{label}</p>
                <p className="mt-1 text-sm font-semibold text-[#F8FAFC]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

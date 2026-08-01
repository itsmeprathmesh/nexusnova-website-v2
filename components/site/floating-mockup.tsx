"use client";

import { motion } from "framer-motion";

export function FloatingMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
      className="perspective floating relative"
    >
      <div className="absolute -inset-8 rounded-full bg-ember/[.1] blur-3xl" />
      <div className="glass-premium relative overflow-hidden rounded-4xl p-2 sm:p-3">
        <div className="rounded-3xl border border-white/10 bg-midnight/95 p-4 sm:p-5">
          {/* Header */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-ember" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-crimson/60" />
            <span className="ml-2 min-w-0 truncate rounded-full bg-white/[.045] px-3 py-1 text-[11px] text-white/70 sm:ml-4">
              dashboard.nexusnova.io
            </span>
          </div>

          {/* Metrics */}
          <div className="rounded-3xl border border-white/10 bg-white/[.035] p-4 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-ember">
                  Today&apos;s Appointments
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">24</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.28em] text-ember/60">
                  No-shows
                </p>
                <p className="mt-3 text-lg font-semibold text-gold">2 (8.3%)</p>
              </div>
              <span className="rounded-full border border-ember/20 bg-ember/[.1] px-3 py-1 text-xs text-ember/80">
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
                      ? "bg-ember"
                      : "bg-gradient-to-t from-ember/80 to-ember/30"
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
                className="rounded-2xl border border-white/10 bg-white/[.025] px-3 py-3"
              >
                <p className="text-[11px] text-white/70">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

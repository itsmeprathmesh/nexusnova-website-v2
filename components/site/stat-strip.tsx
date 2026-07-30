"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "6", label: "Industries Served" },
  { number: "4", label: "Core Systems Built" },
  { number: "1:1", label: "Founder-led Delivery" },
  { number: "Nagpur", label: "Based & Building in India" },
];

export function StatStrip() {
  return (
    <div className="stat-strip font-mono">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 + i * 0.1 }}
          className="stat-item"
        >
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "AI Models Deployed" },
  { number: "12", label: "Enterprise Clients" },
  { number: "98%", label: "Automation Accuracy" },
  { number: "24/7", label: "Support & Monitoring" },
];

export function StatStrip() {
  return (
    <div className="stat-strip">
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

"use client";

import { Activity, Info, Expand, CheckCircle } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function GlassCardTilt({ children, className = "", floatDelay = 0 }: { children: React.ReactNode; className?: string; floatDelay?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [3, -3]);
  const rotateY = useTransform(x, [-80, 80], [-3, 3]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const b = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - b.left - b.width / 2);
        y.set(e.clientY - b.top - b.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
      className={cn("glass-card p-4", className)}
    >
      {children}
    </motion.div>
  );
}

export function HeroCards() {
  return (
    <div className="flex flex-col gap-3">
      {/* Card 1 — Status */}
      <GlassCardTilt floatDelay={0}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <Activity size={11} className="text-white/70" />
            </span>
            <span className="text-[13px] font-medium text-white/70">Status</span>
          </div>
          <Info size={12} className="text-white/55" />
        </div>
        <svg viewBox="0 0 200 55" className="mt-3 w-full">
          <motion.path
            d="M10 45 Q30 10, 50 8 T90 8 T130 8 T150 10 T190 45"
            fill="none"
            stroke="rgba(254,117,1,0.5)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
          <motion.path
            d="M10 45 Q30 12, 50 9 T90 9 T130 9 T150 12 T190 45"
            fill="none"
            stroke="rgba(255,233,70,0.15)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
          />
        </svg>
        <p className="mt-1 text-center text-[11px] font-medium uppercase tracking-[0.08em] text-white/75">Focused</p>
      </GlassCardTilt>

      {/* Card 2 — Analysis */}
      <GlassCardTilt className="p-5" floatDelay={0.5}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[14px] font-medium text-white/90">Cognitive Load</p>
            <p className="text-[12px] text-white/75 leading-relaxed mt-0.5">
              Real-time analysis of neural processing capacity across brain regions.
            </p>
          </div>
          <Expand size={14} className="mt-0.5 shrink-0 text-white/55" />
        </div>

        <div className="mt-4 flex items-center gap-4">
          {/* Two-part brain graphic */}
          <div className="relative flex h-12 w-20 shrink-0 items-center overflow-hidden rounded-full border border-white/10">
            <div className="flex h-full w-1/2 items-center justify-center bg-ember/10">
              <span className="text-[10px] font-semibold text-ember">L</span>
            </div>
            <div className="flex h-full w-1/2 items-center justify-center bg-gold/8">
              <span className="text-[10px] font-semibold text-gold">R</span>
            </div>
            <div className="absolute inset-0 rounded-full border border-white/5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-white/60">Logical</span>
              <span className="text-ember">78%</span>
            </div>
            <div className="mt-1 h-1.5 w-full rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-ember to-gold"
                initial={{ width: "0%" }}
                whileInView={{ width: "78%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px]">
              <span className="text-white/60">Creative</span>
              <span className="text-gold">64%</span>
            </div>
            <div className="mt-1 h-1.5 w-full rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gold to-ember"
                initial={{ width: "0%" }}
                whileInView={{ width: "64%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Segment bar */}
        <div className="mt-4 flex gap-1">
          {[20, 35, 50, 35, 20].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-full bg-white/10"
              style={{ height: "3px" }}
            >
              <motion.div
                className="h-full rounded-full bg-ember/40"
                initial={{ width: "0%" }}
                whileInView={{ width: `${h * 2}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
      </GlassCardTilt>

      {/* Card 3 — Metric */}
      <GlassCardTilt floatDelay={1}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <CheckCircle size={11} className="text-white/70" />
            </span>
            <span className="text-[13px] font-medium text-white/70">Accuracy</span>
          </div>
        </div>

        <div className="mt-3 flex items-end gap-3">
          <div className="flex-1">
            <svg viewBox="0 0 160 32" className="w-full">
              <motion.path
                d="M0 24 Q10 20, 20 22 T40 12 T60 10 T80 8 T100 16 T120 14 T140 18 T160 20"
                fill="none"
                stroke="rgba(254,117,1,0.5)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3 }}
              />
              <motion.path
                d="M0 26 Q10 22, 20 24 T40 16 T60 14 T80 12 T100 18 T120 16 T140 20 T160 22"
                fill="none"
                stroke="rgba(255,233,70,0.15)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>
          </div>
          <span className="label-glass whitespace-nowrap text-[10px]">94.2%</span>
        </div>
      </GlassCardTilt>
    </div>
  );
}

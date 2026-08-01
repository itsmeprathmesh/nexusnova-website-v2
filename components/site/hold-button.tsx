"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HoldButton({ href = "/contact", label = "Start a Project" }: { href?: string; label?: string }) {
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startHold = () => {
    setHolding(true);
    setProgress(0);
    interval.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (interval.current) clearInterval(interval.current);
          window.location.href = href;
          return 100;
        }
        return p + 2;
      });
    }, 20);
  };

  const endHold = () => {
    setHolding(false);
    if (interval.current) clearInterval(interval.current);
    setProgress(0);
  };

  return (
    <div className="relative inline-flex">
      <Link
        href={href}
        onMouseDown={startHold}
        onMouseUp={endHold}
        onMouseLeave={endHold}
        onTouchStart={startHold}
        onTouchEnd={endHold}
        className="relative z-10 flex h-14 items-center gap-3 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-8 font-mono text-xs uppercase tracking-[0.15em] text-white/70 transition hover:text-white"
      >
        <span className="relative z-10 flex items-center gap-3">
          {holding ? (
            <motion.span
              key="hold-release"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Release to launch
            </motion.span>
          ) : (
            <>
              <span className="text-blue/60">&gt;</span>
              {label}
              <span className="text-[10px] text-white/45">hold to blast</span>
            </>
          )}
        </span>
        <motion.div
          className="absolute inset-0 origin-left bg-gradient-to-r from-blue/20 via-purple/10 to-transparent"
          style={{ scaleX: progress / 100 }}
        />
        <div
          className="absolute inset-y-1 left-1 w-0.5 rounded-full bg-blue/60 transition-all duration-200"
          style={{ opacity: holding ? 1 : 0 }}
        />
      </Link>
    </div>
  );
}

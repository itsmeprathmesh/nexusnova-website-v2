"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Overview", "Technology", "Use Cases"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Overview");

  return (
    <header className="relative z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <nav className="flex items-center justify-between rounded-full bg-glass backdrop-blur-xl px-3 py-1.5">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 pl-1"
          aria-label="NexusNova home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white/10 text-white ring-1 ring-white/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            Nexus<span className="text-ember">Nova</span>
          </span>
        </Link>

        {/* Center nav pills */}
        <div className="hidden items-center gap-0.5 rounded-full bg-white/[0.04] px-1 py-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-150 ${
                active === item
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:bg-white/[0.06] hover:text-white/80"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary-pill h-9 px-5 text-[13px] max-md:hidden">
            Let&apos;s Connect
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:bg-white/5 hover:text-white md:hidden"
            aria-label={open ? "Close" : "Menu"}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="glass-card-strong mt-2 p-2 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActive(item); setOpen(false); }}
                className={`block w-full rounded-xl px-4 py-2.5 text-left text-sm transition ${
                  active === item ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/[0.06]"
                }`}
              >
                {item}
              </button>
            ))}
            <Link onClick={() => setOpen(false)} href="/contact" className="btn-primary-pill mt-2 block w-full px-4 py-2.5 text-center text-sm">
              Let&apos;s Connect
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

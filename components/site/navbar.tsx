"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  ["Patient Intake", "/solutions#intake"],
  ["Appointments", "/solutions#appointments"],
  ["Follow-up & Recall", "/solutions#recall"],
  ["Lead CRM", "/solutions#crm"],
];

const industries = [
  ["Dental Clinics", "/industries#dental"],
  ["Skin & Cosmetics", "/industries#skin"],
  ["Physiotherapy", "/industries#physio"],
  ["Eye Clinics", "/industries#eye"],
  ["Multi-specialty", "/industries#multi"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500 sm:px-6 ${
        scrolled ? "pt-2" : "pt-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-[#030307]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "neuro-glass"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="NexusNova Studio home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 text-blue-300 ring-1 ring-blue-400/20 transition group-hover:ring-blue-400/40">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="flex flex-col">
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-blue-300/60">
              Studio
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#F1F5F9]">
              Nexus<span className="text-blue-300">Nova</span>
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Solutions */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("solutions")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-slate-200">
              Solutions <ChevronDown size={12} />
            </button>
            <AnimatePresence>
              {dropdown === "solutions" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-full mt-1 w-52 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#030307]/95 p-1.5 backdrop-blur-2xl"
                >
                  {solutions.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-200"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("industries")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-slate-200">
              Industries <ChevronDown size={12} />
            </button>
            <AnimatePresence>
              {dropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-full mt-1 w-52 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#030307]/95 p-1.5 backdrop-blur-2xl"
                >
                  {industries.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-200"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link className="rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-slate-200" href="/portfolio">
            Case Studies
          </Link>
          <Link className="rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-slate-200" href="/blog">
            Resources
          </Link>
          <Link className="rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-slate-200" href="/about">
            About
          </Link>

          <Link href="/contact" className="btn-neuro ml-3 px-5 py-2.5 text-sm">
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-slate-400 transition hover:border-blue-400/30 hover:text-slate-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="neuro-glass-strong mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl p-3 lg:hidden"
          >
            <p className="px-3 pb-1 pt-2 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-blue-300/50">
              Solutions
            </p>
            {solutions.map(([label, href]) => (
              <Link
                onClick={() => setOpen(false)}
                key={label}
                href={href}
                className="block rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-200"
              >
                {label}
              </Link>
            ))}
            <p className="mt-3 px-3 pb-1 pt-2 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-blue-300/50">
              Industries
            </p>
            {industries.map(([label, href]) => (
              <Link
                onClick={() => setOpen(false)}
                key={label}
                href={href}
                className="block rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-200"
              >
                {label}
              </Link>
            ))}
            <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Link
              onClick={() => setOpen(false)}
              href="/portfolio"
              className="block rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-200"
            >
              Case Studies
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/blog"
              className="block rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-200"
            >
              Resources
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/about"
              className="block rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-200"
            >
              About
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="btn-neuro mt-4 block px-5 py-3 text-center text-sm"
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

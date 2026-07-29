"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["Work", "/portfolio"],
  ["Services", "/solutions"],
  ["Process", "/#process"],
  ["About", "/about"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className={`mx-auto flex max-w-premium items-center justify-between rounded-full px-6 py-2.5 transition-all duration-500 ${
          scrolled
            ? "bg-[#090506]/80 shadow-premium backdrop-blur-2xl"
            : "bg-glass backdrop-blur-2xl"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
          aria-label="NexusNova Studio home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-ember/20 to-rust/20 text-ember ring-1 ring-ember/30 transition group-hover:ring-ember/50">
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

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-4 h-10 px-5 text-sm">
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-premium-strong mx-auto mt-2 max-w-premium overflow-hidden rounded-3xl p-3 md:hidden"
          >
            {links.map(([label, href]) => (
              <Link
                onClick={() => setOpen(false)}
                key={label}
                href={href}
                className="block rounded-2xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="btn-primary mt-3 block px-5 py-3 text-center text-sm"
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

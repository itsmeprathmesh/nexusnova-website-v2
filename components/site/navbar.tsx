"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Services", "/#services"],
  ["Case Studies", "/portfolio"],
  ["Pricing", "/#pricing"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="NexusNova Studio home"
        >
          <span className="accent-gradient flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-[0_0_30px_rgba(123,44,245,.32)] transition group-hover:scale-105">
            <Sparkles size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-violet-300/70">
              Studio
            </span>
            <span className="text-sm font-semibold tracking-wide text-[#F8FAFC] sm:text-base">
              Nexus<span className="text-violet-300">Nova</span>
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <Link className="nav-link" key={label} href={href}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-lux ml-4 px-5 py-3 text-sm">
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#F8FAFC] transition hover:border-violet-400/40 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-3 lg:hidden"
        >
          {links.map(([label, href]) => (
            <Link
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-violet-400/[0.1] hover:text-violet-200"
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
          <Link
            onClick={() => setOpen(false)}
            className="btn-lux mt-3 block px-5 py-3.5 text-center text-sm"
            href="/contact"
          >
            Book a Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}

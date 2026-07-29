"use client";

import { Menu, Sparkles, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

const resources = [
  ["Blog", "/blog"],
  ["Guides", "/blog"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="NexusNova Studio home"
        >
          <span className="accent-gradient-health flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-[0_0_30px_rgba(20,184,166,.32)] transition group-hover:scale-105">
            <Sparkles size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-teal-300/70">
              Studio
            </span>
            <span className="text-sm font-semibold tracking-wide text-[#F8FAFC] sm:text-base">
              Nexus<span className="text-teal-300">Nova</span>
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("solutions")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="nav-link inline-flex items-center gap-1">
              Solutions <ChevronDown size={14} />
            </button>
            {dropdown === "solutions" && (
              <div className="absolute left-0 top-full mt-1 w-56 rounded-2xl border border-white/10 bg-[#0a0d14]/95 p-2 backdrop-blur-2xl">
                {solutions.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-teal-400/10 hover:text-teal-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("industries")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="nav-link inline-flex items-center gap-1">
              Industries <ChevronDown size={14} />
            </button>
            {dropdown === "industries" && (
              <div className="absolute left-0 top-full mt-1 w-56 rounded-2xl border border-white/10 bg-[#0a0d14]/95 p-2 backdrop-blur-2xl">
                {industries.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-teal-400/10 hover:text-teal-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className="nav-link" href="/portfolio">
            Case Studies
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("resources")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="nav-link inline-flex items-center gap-1">
              Resources <ChevronDown size={14} />
            </button>
            {dropdown === "resources" && (
              <div className="absolute left-0 top-full mt-1 w-44 rounded-2xl border border-white/10 bg-[#0a0d14]/95 p-2 backdrop-blur-2xl">
                {resources.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-teal-400/10 hover:text-teal-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className="nav-link" href="/about">
            About
          </Link>

          <Link
            href="/contact"
            className="btn-lux btn-lux-health ml-4 px-5 py-3 text-sm"
          >
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#F8FAFC] transition hover:border-teal-400/40 lg:hidden"
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
          <p className="px-4 pb-2 pt-2 text-xs font-semibold uppercase tracking-wider text-teal-300/60">
            Solutions
          </p>
          {solutions.map(([label, href]) => (
            <Link
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm text-slate-300 transition hover:bg-teal-400/[0.1] hover:text-teal-200"
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
          <p className="mt-3 px-4 pb-2 pt-2 text-xs font-semibold uppercase tracking-wider text-teal-300/60">
            Industries
          </p>
          {industries.map(([label, href]) => (
            <Link
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm text-slate-300 transition hover:bg-teal-400/[0.1] hover:text-teal-200"
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
          <hr className="my-3 border-white/10" />
          <Link
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-teal-400/[0.1] hover:text-teal-200"
            href="/portfolio"
          >
            Case Studies
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-teal-400/[0.1] hover:text-teal-200"
            href="/blog"
          >
            Resources
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-teal-400/[0.1] hover:text-teal-200"
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="btn-lux btn-lux-health mt-4 block px-5 py-3.5 text-center text-sm"
            href="/contact"
          >
            Book a Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}

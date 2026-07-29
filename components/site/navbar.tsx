"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/portfolio" },
  { label: "Careers", href: "/contact" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="text-sm font-semibold tracking-tight text-white" aria-label="NexusNova home">
          Nexus<span className="text-white/60">Nova</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-nav text-white/50 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className="text-nav text-white/50 transition hover:text-white max-md:hidden">
            Login
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 text-nav text-white transition hover:text-white/70"
            aria-label="Menu"
          >
            <Menu size={15} />
            <span className="max-md:hidden">Menu</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="mx-auto mt-1 max-w-[1440px] px-6 sm:px-8 lg:px-10"
          >
            <div className="rounded-lg border border-white/5 bg-[#121212] p-3 md:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-white/5" />
              <button
                onClick={() => setOpen(false)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

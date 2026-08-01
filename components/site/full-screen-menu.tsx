"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/lib/nav-links";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease } },
};

export function FullScreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05060A]/95 backdrop-blur-[var(--glass-blur-lg)]"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-8 top-8 flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            aria-label="Close menu"
          >
            <X size={18} />
            <span className="hidden sm:inline">Close</span>
          </button>

          <motion.nav
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div key={link.label} variants={item}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`group relative text-4xl font-bold tracking-[-0.02em] transition sm:text-5xl ${
                      isActive ? "text-white" : "text-white/55 hover:text-white/70"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -right-4 -top-2 text-xs text-ember">.</span>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease }}
            className="absolute bottom-12 text-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/55">NexusNova Studio</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

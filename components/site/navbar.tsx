"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/portfolio" },
  { label: "Careers", href: "/contact" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/blog" },
];

function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setDirection(y > lastY.current && y > 80 ? "down" : "up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}

function MagneticLink({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const strength = Math.max(0, 1 - dist / 100);
    x.set(dx * 0.2 * strength);
    y.set(dy * 0.2 * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const direction = useScrollDirection();
  const hidden = direction === "down";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5"
    >
      <nav
        className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "navbar-condensed py-2" : "navbar-glass"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-sm font-semibold tracking-tight text-white"
          aria-label="NexusNova home"
        >
          Nexus<span className="text-white/60">Nova</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <MagneticLink
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:text-white"
            >
              {link.label}
            </MagneticLink>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className="text-sm text-white/50 transition hover:text-white max-md:hidden">
            Login
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 text-sm text-white transition hover:text-white/70"
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
            <div className="navbar-glass rounded-lg p-3 md:hidden">
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
              <hr className="my-2 border-white/10" />
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
    </motion.header>
  );
}

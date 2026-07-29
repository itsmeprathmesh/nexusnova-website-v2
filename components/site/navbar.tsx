"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { navLinks } from "@/lib/nav-links";
import { FullScreenMenu } from "./full-screen-menu";

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
  const pathname = usePathname();
  const direction = useScrollDirection();
  const hidden = direction === "down";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <MagneticLink
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="ml-1.5 inline-block h-1 w-1 rounded-full bg-ember" />
                  )}
                </MagneticLink>
              );
            })}
          </div>

          <div className="flex items-center gap-5">
            <button className="text-sm text-white/50 transition hover:text-white max-md:hidden">
              Login
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-1.5 text-sm text-white transition hover:text-white/70"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Menu size={15} />
              <span className="max-md:hidden">Menu</span>
            </button>
          </div>
        </nav>
      </motion.header>

      <FullScreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

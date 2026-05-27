"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { type ComponentProps, useEffect, useState } from "react";

type OrbGridBackgroundProps = ComponentProps<"div">;

export function OrbGridBackground({
  className = "",
  style,
  ...props
}: OrbGridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        background: "#0A0D14",
        backgroundImage: `
          linear-gradient(to right, rgba(148, 163, 184, .09) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, .09) 1px, transparent 1px),
          radial-gradient(circle at 50% 60%, rgba(217, 70, 239, .17) 0%, rgba(123, 44, 245, .1) 34%, rgba(13, 110, 253, .08) 54%, transparent 72%)
        `,
        backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        ...style,
      }}
      {...props}
    />
  );
}

export function ImageWithSkeleton({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <LoadingImage
      alt={alt}
      className={className}
      key={src}
      sizes={sizes}
      src={src}
    />
  );
}

function LoadingImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">(
    "loading",
  );
  const optimized =
    src.startsWith("/") ||
    /^https:\/\/images\.unsplash\.com\//.test(src) ||
    /^https:\/\/[^/]+\.supabase\.co\//.test(src);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {status === "loading" && (
        <span aria-hidden className="skeleton skeleton-media absolute inset-0" />
      )}
      <Image
        alt={alt}
        className={cn(
          "media-fade object-cover",
          status === "loaded" && "is-loaded",
          status === "failed" && "hidden",
        )}
        fill
        onError={() => setStatus("failed")}
        onLoad={() => setStatus("loaded")}
        sizes={sizes}
        src={src}
        unoptimized={!optimized}
      />
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.8, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MouseGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { stiffness: 70, damping: 22 });
  const springY = useSpring(y, { stiffness: 70, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(540px circle at ${springX}px ${springY}px, rgba(13, 110, 253, .13), transparent 54%)`;

  useEffect(() => {
    const updateCursor = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden opacity-80 md:block"
      style={{ background: spotlight }}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute -ml-48 -mt-48 h-96 w-96 rounded-full bg-blue-500/[.08] blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 90, -50, 0],
          y: [0, 60, 14, 0],
          scale: [1, 1.14, 0.94, 1],
        }}
        transition={{ duration: 22, repeat: Infinity }}
        className="absolute right-16 top-28 h-[390px] w-[390px] rounded-full bg-violet-600/10 blur-[135px]"
      />
      <motion.div
        animate={{ x: [0, -70, 58, 0], y: [0, 35, -18, 0] }}
        transition={{ duration: 26, repeat: Infinity }}
        className="absolute bottom-16 left-12 h-[390px] w-[390px] rounded-full bg-fuchsia-500/[.08] blur-[130px]"
      />
    </motion.div>
  );
}

export function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [5, -5]);
  const rotateY = useTransform(x, [-80, 80], [-5, 5]);

  return (
    <motion.div
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - bounds.left - bounds.width / 2);
        y.set(event.clientY - bounds.top - bounds.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.21, 0.8, 0.35, 1] }}
      className="perspective floating relative"
    >
      <div className="absolute -inset-8 rounded-full bg-violet-500/[.12] blur-3xl" />
      <div className="glass-warm relative overflow-hidden rounded-[1.75rem] p-2 sm:p-3">
        <div className="rounded-[1.3rem] border border-white/10 bg-[#0b1020]/95 p-4 sm:p-5">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
            <span className="ml-2 min-w-0 truncate rounded-full bg-white/[.045] px-3 py-1 text-[11px] text-slate-300/45 sm:ml-4">
              studio.nexusnova.io/growth
            </span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-violet-300">
                  Qualified pipeline
                </p>
                <p className="mt-3 text-3xl font-semibold text-[#F8FAFC]">
                  +148%
                </p>
              </div>
              <span className="rounded-full border border-blue-300/20 bg-blue-400/[.1] px-3 py-1 text-xs text-blue-200">
                Live
              </span>
            </div>
            <div className="mt-6 flex h-24 items-end gap-2">
              {[30, 52, 43, 72, 60, 92, 80].map((height, index) => (
                <span
                  key={height}
                  className={`flex-1 rounded-t-md ${
                    index === 5
                      ? "bg-fuchsia-400"
                      : "bg-gradient-to-t from-blue-950 to-violet-400/80"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {[
              ["Leads", "42"],
              ["Conversion", "8.4%"],
              ["Response", "<24h"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[.025] px-3 py-3"
              >
                <p className="text-[11px] text-slate-300/45">{label}</p>
                <p className="mt-1 text-sm font-semibold text-[#F8FAFC]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

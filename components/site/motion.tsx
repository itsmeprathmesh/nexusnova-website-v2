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
  ...props
}: OrbGridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        background: "#090506",
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px),
          radial-gradient(circle at 50% 30%, rgba(254,117,1,0.06) 0%, rgba(202,67,0,0.03) 30%, transparent 60%)
        `,
        backgroundSize: "64px 64px, 64px 64px, 100% 100%",
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
        <span aria-hidden className="skeleton absolute inset-0" />
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
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealScale({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MouseGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { stiffness: 40, damping: 20 });
  const springY = useSpring(y, { stiffness: 40, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(254,117,1,0.06), transparent 50%)`;

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
        className="absolute -ml-48 -mt-48 h-96 w-96 rounded-full bg-ember/[.04] blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, 40, 8, 0],
          scale: [1, 1.08, 0.98, 1],
        }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute right-24 top-40 h-[400px] w-[400px] rounded-full bg-crimson/10 blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, -50, 35, 0], y: [0, 25, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-28 left-20 h-[400px] w-[400px] rounded-full bg-ember/[.05] blur-[140px]"
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
  const rotateX = useTransform(y, [-80, 80], [3, -3]);
  const rotateY = useTransform(x, [-80, 80], [-3, 3]);

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
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn("glass-premium-card", className)}
    >
      {children}
    </motion.div>
  );
}

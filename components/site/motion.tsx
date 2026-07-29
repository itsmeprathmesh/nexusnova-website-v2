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
        background: "#030307",
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(74,143,231,0.08) 0%, rgba(139,92,246,0.05) 34%, transparent 70%)
        `,
        backgroundSize: "48px 48px, 48px 48px, 100% 100%",
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
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.8, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MouseGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { stiffness: 60, damping: 25 });
  const springY = useSpring(y, { stiffness: 60, damping: 25 });
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${springX}px ${springY}px, rgba(74,143,231,0.08), transparent 50%)`;

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
        className="absolute -ml-48 -mt-48 h-96 w-96 rounded-full bg-blue-400/[.06] blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 50, 10, 0],
          scale: [1, 1.1, 0.96, 1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute right-20 top-32 h-[360px] w-[360px] rounded-full bg-purple-500/10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -60, 48, 0], y: [0, 30, -15, 0] }}
        transition={{ duration: 24, repeat: Infinity }}
        className="absolute bottom-20 left-16 h-[360px] w-[360px] rounded-full bg-blue-400/[.06] blur-[120px]"
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
  const rotateX = useTransform(y, [-80, 80], [4, -4]);
  const rotateY = useTransform(x, [-80, 80], [-4, 4]);

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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

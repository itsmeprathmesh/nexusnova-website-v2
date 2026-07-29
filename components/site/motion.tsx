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

export function OrbGridBackground({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        background: "#0A0503",
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px),
          radial-gradient(circle at 50% 30%, rgba(254,117,1,0.05), transparent 60%)
        `,
        backgroundSize: "64px 64px, 64px 64px, 100% 100%",
      }}
      {...props}
    />
  );
}

export function ImageWithSkeleton({
  src, alt, className = "", sizes = "(max-width: 768px) 100vw, 33vw",
}: { src: string; alt: string; className?: string; sizes?: string }) {
  return <LoadingImage alt={alt} className={className} key={src} sizes={sizes} src={src} />;
}

function LoadingImage({ src, alt, className, sizes }: { src: string; alt: string; className: string; sizes: string }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
  const optimized = src.startsWith("/") || /^https:\/\/images\.unsplash\.com\//.test(src) || /^https:\/\/[^/]+\.supabase\.co\//.test(src);
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {status === "loading" && <span aria-hidden className="skeleton absolute inset-0 rounded-none" />}
      <Image
        alt={alt}
        className={cn("object-cover", status === "loaded" && "opacity-100", status !== "loaded" && "opacity-0", status === "failed" && "hidden")}
        fill onError={() => setStatus("failed")} onLoad={() => setStatus("loaded")}
        sizes={sizes} src={src} unoptimized={!optimized}
      />
    </div>
  );
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
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
  const bg = useMotionTemplate`radial-gradient(600px at ${springX}px ${springY}px, rgba(254,117,1,0.04), transparent)`;

  useEffect(() => {
    const update = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ background: bg as unknown as string }} />
  );
}

export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [3, -3]);
  const rotateY = useTransform(x, [-80, 80], [-3, 3]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const b = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - b.left - b.width / 2);
        y.set(e.clientY - b.top - b.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

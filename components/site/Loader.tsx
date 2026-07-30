"use client";

import { useEffect, useState } from "react";

export default function Loader({ onDone }: { onDone?: () => void }) {
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(
    typeof window !== "undefined" && sessionStorage.getItem("nn_loaded") === "1"
  );

  useEffect(() => {
    if (hidden) {
      onDone?.();
      return;
    }
    const interval = setInterval(() => {
      setPct((prev) => {
        const next = Math.min(100, prev + Math.random() * 18);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setHidden(true);
            sessionStorage.setItem("nn_loaded", "1");
            onDone?.();
          }, 400);
        }
        return next;
      });
    }, 180);
    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center"
      style={{
        background: "#050806",
        transition: "opacity .8s ease, visibility .8s ease",
        opacity: pct >= 100 ? 0 : 1,
        visibility: pct >= 100 ? "hidden" : "visible",
      }}
    >
      <div
        className="mb-7 text-xs uppercase tracking-[0.3em]"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#cda86a" }}
      >
        NexusNova Studio
      </div>
      <div
        className="font-semibold tabular-nums"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(48px, 10vw, 96px)",
          color: "#f2f0e9",
        }}
      >
        {Math.floor(pct)}%
      </div>
      <div style={{ width: 200, height: 1, background: "rgba(255,255,255,0.12)", marginTop: 24, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "#29b087", width: `${pct}%` }} />
      </div>
    </div>
  );
}

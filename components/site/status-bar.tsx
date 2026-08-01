"use client";

import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const t = new Date();
    setTime(t.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }));
    const id = setInterval(() => {
      const n = new Date();
      setTime(n.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }));
    }, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-5 bg-[#030508] border-b border-white/[0.04] font-mono text-[9px] uppercase tracking-[0.12em] text-white/45 flex items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <span className="text-blue/50">NEXUSNOVA</span>
        <span className="text-white/40">|</span>
        <span className="text-blue/30">v1.0</span>
        <span className="text-white/40">|</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
          <span className="text-white/45">ONLINE</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-white/40">IST</span>
        <span className="text-blue/40">{time}</span>
      </div>
    </div>
  );
}

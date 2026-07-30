"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, CheckCircle, ChevronRight, Loader2 } from "lucide-react";

const businessTypes = [
  "Restaurant / Café", "Clinic / Healthcare Practice", "Real Estate / Builder",
  "Salon / Beauty", "Coaching Institute", "Local Service Business", "SaaS / Tech",
  "E-commerce", "Other",
];

type Step = "init" | "fill" | "transmit" | "done";

function typeText(text: string, onDone: () => void) {
  let i = 0;
  const interval = setInterval(() => {
    i++;
    if (i >= text.length) { clearInterval(interval); onDone(); }
  }, 20);
  return () => clearInterval(interval);
}

export function AiTerminalForm() {
  const [step, setStep] = useState<Step>("init");
  const [typed, setTyped] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (step === "init") {
      setTyped("");
      const cleanup = typeText("_initialize_project()  Initializing NexusNova AI intake system...  Scanning business requirements...  Ready.", () => {
        setTimeout(() => setStep("fill"), 300);
      });
      return cleanup;
    }
  }, [step]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setStep("transmit");

    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setLoading(false);
      if (res.ok) {
        setStep("done");
        e.currentTarget.reset();
      } else {
        setError("Transmission failed. Please try again.");
        setStep("fill");
      }
    } catch {
      setLoading(false);
      setError("Connection error. Please try again.");
      setStep("fill");
    }
  }

  if (step === "init") {
    return (
      <div className="rounded-[6.4px] border border-blue/20 bg-black/40 p-8 font-mono">
        <div className="flex items-center gap-2 text-blue/60">
          <Terminal size={14} />
          <span className="text-xs uppercase tracking-[0.15em]">nexusnova_terminal v1.0</span>
        </div>
        <div className="mt-6 space-y-1 text-sm text-blue/40">
          {typed.split("  ").map((line, i) => (
            <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-2">
              <ChevronRight size={12} className="mt-0.5 shrink-0 text-blue/30" />
              <span>{line}</span>
            </motion.p>
          ))}
          {typed.length > 0 && <span className="inline-block h-4 w-2 animate-pulse bg-blue/50" />}
        </div>
      </div>
    );
  }

  if (step === "transmit") {
    return (
      <div className="rounded-[6.4px] border border-blue/20 bg-black/40 p-8 font-mono">
        <div className="flex items-center gap-2 text-blue/60">
          <Terminal size={14} />
          <span className="text-xs uppercase tracking-[0.15em]">_transmit()</span>
        </div>
        <div className="mt-6 space-y-3 text-sm">
          <p className="flex items-center gap-2 text-blue/50">
            <Loader2 size={14} className="animate-spin" />
            Encrypting data...
          </p>
          <p className="flex items-center gap-2 text-blue/40">
            <Loader2 size={14} className="animate-spin" />
            Transmitting to NexusNova secure intake...
          </p>
          <p className="flex items-center gap-2 text-blue/30">
            <span className="inline-block h-3 w-2 animate-pulse bg-blue/30" />
            Waiting for acknowledgment...
          </p>
        </div>
      </div>
    );
  }

  if (step === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[6.4px] border border-blue/20 bg-black/40 p-8 font-mono text-center"
      >
        <CheckCircle size={40} className="mx-auto text-blue" />
        <h3 className="mt-4 text-lg font-bold text-white">Transmission Successful</h3>
        <p className="mt-2 text-sm text-blue/60">
          _acknowledged()  We&apos;ll contact you within 24 hours with a custom roadmap.
        </p>
        <button
          onClick={() => setStep("init")}
          className="mt-6 text-xs uppercase tracking-[0.15em] text-blue/40 transition hover:text-blue"
        >
          Start new transmission
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-[6.4px] border border-blue/20 bg-black/40 p-8 font-mono">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue/60">
          <Terminal size={14} />
          <span className="text-xs uppercase tracking-[0.15em]">_fill_details()</span>
        </div>
        <span className="text-[10px] text-white/20">STEP 2/4</span>
      </div>

      <form ref={formRef} onSubmit={submit} className="mt-6 space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["name", "your_name"],
            ["business_name", "business_name"],
            ["phone", "phone / whatsapp"],
            ["email", "email"],
          ].map(([n, l]) => (
            <label key={n} className="block">
              <span className="text-xs text-white/30">&gt; {l}</span>
              <input
                required
                name={n}
                type={n === "email" ? "email" : "text"}
                className="mt-1 w-full border-b border-white/10 bg-transparent px-2 py-2.5 text-sm text-white outline-none transition focus:border-blue/50"
              />
            </label>
          ))}
        </div>

        <label className="block">
          <span className="text-xs text-white/30">&gt; business_type</span>
          <select
            required
            name="business_type"
            className="mt-1 w-full border-b border-white/10 bg-transparent px-2 py-2.5 text-sm text-white outline-none transition focus:border-blue/50"
          >
            <option value="" className="bg-[#05070A]">Select type</option>
            {businessTypes.map((t) => (
              <option className="bg-[#05070A]" key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs text-white/30">&gt; project_description</span>
          <textarea
            required
            name="message"
            rows={3}
            className="mt-1 w-full border-b border-white/10 bg-transparent px-2 py-2.5 text-sm text-white outline-none transition focus:border-blue/50"
          />
        </label>

        {error && <p className="text-xs text-red/60">{error}</p>}

        <button
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 border border-blue/30 bg-blue/10 px-5 py-3 text-sm font-mono text-blue transition hover:bg-blue/20 disabled:opacity-50"
        >
          {loading ? "Transmitting..." : "Transmit"}
          <Send size={14} />
        </button>

        <p className="text-center text-[10px] text-white/15">
          Encrypted transmission · Reply within 24 hours
        </p>
      </form>
    </div>
  );
}

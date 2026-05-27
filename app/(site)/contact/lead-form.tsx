"use client";
import { useState } from "react";
import { Send } from "lucide-react";
const fields = [
  ["name", "Name"],
  ["business_name", "Business name"],
  ["phone", "Phone / WhatsApp"],
  ["email", "Email"],
  ["service_needed", "Service needed"],
  ["budget", "Budget range"],
  ["timeline", "Timeline"],
];
export function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      setDone(true);
      (e.target as HTMLFormElement).reset();
    } else setError("Something went wrong. Please try again or WhatsApp us.");
  }
  return (
    <form
      aria-busy={loading}
      onSubmit={submit}
      className="glass-warm rounded-[2rem] p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold text-slate-50">
        Request a strategy call
      </h2>
      <p className="mb-7 mt-3 text-sm leading-7 text-slate-400">
        Tell us what you need for your website, CRM, or AI automation workflow.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map(([n, l]) => (
          <label key={n} className="text-sm text-slate-300">
            {l}
            <input
              required
              name={n}
              type={n === "email" ? "email" : "text"}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.045] px-4 py-3 text-slate-50 outline-none transition focus:border-violet-400 focus:shadow-[0_0_25px_rgba(123,44,245,.15)]"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block text-sm text-slate-300">
        Project message
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.045] px-4 py-3 text-slate-50 outline-none transition focus:border-violet-400 focus:shadow-[0_0_25px_rgba(123,44,245,.15)]"
        />
      </label>
      {error && <p className="mt-4 text-red-300">{error}</p>}
      {done && (
        <p className="mt-4 rounded-2xl bg-blue-500/10 p-4 text-blue-200">
          Inquiry received. We also sent you a confirmation email.
        </p>
      )}
      <button
        disabled={loading}
        className="mt-5 flex w-full items-center justify-center gap-2 btn-lux px-6 py-4 disabled:opacity-60"
      >
        {loading && (
          <span aria-hidden className="skeleton h-4 w-4 rounded-full [--skeleton-delay:.1s]" />
        )}
        {loading ? "Sending..." : "Send Inquiry"}
        <Send size={18} />
      </button>
    </form>
  );
}

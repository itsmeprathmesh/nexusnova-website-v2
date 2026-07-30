"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const fields = [
  ["name", "Your name"],
  ["business_name", "Business name"],
  ["business_type", "Business type"],
  ["phone", "Phone / WhatsApp"],
  ["email", "Email"],
  ["message", "Tell us about your project and goals"],
];

const businessTypes = [
  "Restaurant / Café",
  "Clinic / Healthcare Practice",
  "Real Estate / Builder",
  "Salon / Beauty",
  "Coaching Institute",
  "Local Service Business",
  "SaaS / Tech",
  "E-commerce",
  "Other",
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
      className="glass-premium rounded-5xl p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold text-white">
        Book a Strategy Call
      </h2>
      <p className="mb-7 mt-3 text-sm leading-7 text-white/50">
        Tell us about your business. We&apos;ll prepare a custom roadmap for
        your call.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.slice(0, 5).map(([n, l]) => (
          <label key={n} className="text-sm text-white/60">
            {l}
            <input
              required
              name={n}
              type={n === "email" ? "email" : "text"}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.03] px-4 py-3 text-white outline-none transition focus:border-ember/50 focus:shadow-[0_0_25px_rgba(254,117,1,.12)]"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block text-sm text-white/60">
        Business type
        <select
          required
          name="business_type"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-midnight px-4 py-3 text-white outline-none transition focus:border-ember/50"
        >
          <option value="" className="bg-midnight">Select type</option>
          {businessTypes.map((t) => (
            <option className="bg-midnight" key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-4 block text-sm text-white/60">
        Tell us about your project
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.03] px-4 py-3 text-white outline-none transition focus:border-ember/50 focus:shadow-[0_0_25px_rgba(254,117,1,.12)]"
        />
      </label>
      {error && <p className="mt-4 text-crimson/80">{error}</p>}
      {done && (
        <p className="mt-4 rounded-2xl bg-ember/10 p-4 text-ember/80">
          Inquiry received. We&apos;ll contact you within 24 hours with a
          custom roadmap.
        </p>
      )}
      <button
        disabled={loading}
        className="btn-primary mt-5 flex w-full items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Book Your Strategy Call"}
        <Send size={18} />
      </button>
    </form>
  );
}

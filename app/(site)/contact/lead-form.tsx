"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const fields = [
  ["name", "Your name"],
  ["clinic_name", "Clinic / Business name"],
  ["clinic_type", "Clinic type"],
  ["phone", "Phone / WhatsApp"],
  ["email", "Email"],
  ["patient_volume", "Monthly patient volume"],
  ["message", "Tell us about your current workflow and pain points"],
];

const clinicTypes = [
  "Dental Clinic",
  "Skin & Cosmetics Clinic",
  "Physiotherapy Center",
  "Eye Clinic",
  "Multi-specialty Clinic",
  "Other Healthcare",
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
      className="glass-health rounded-[2rem] p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold text-slate-50">
        Book a Strategy Call
      </h2>
      <p className="mb-7 mt-3 text-sm leading-7 text-slate-400">
        Tell us about your clinic. We&apos;ll prepare a custom automation
        roadmap for your call.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.slice(0, 5).map(([n, l]) => (
          <label key={n} className="text-sm text-slate-300">
            {l}
            <input
              required
              name={n}
              type={n === "email" ? "email" : "text"}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.045] px-4 py-3 text-slate-50 outline-none transition focus:border-teal-400 focus:shadow-[0_0_25px_rgba(20,184,166,.15)]"
            />
          </label>
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-300">
          Clinic type
          <select
            required
            name="clinic_type"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0A0D14] px-4 py-3 text-slate-50 outline-none transition focus:border-teal-400"
          >
            <option value="" className="bg-[#0A0D14]">
              Select type
            </option>
            {clinicTypes.map((t) => (
              <option className="bg-[#0A0D14]" key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm text-slate-300">
          Monthly patient volume
          <select
            required
            name="patient_volume"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0A0D14] px-4 py-3 text-slate-50 outline-none transition focus:border-teal-400"
          >
            <option value="" className="bg-[#0A0D14]">
              Select volume
            </option>
            {["< 100", "100–300", "300–500", "500–1000", "1000+"].map((v) => (
              <option className="bg-[#0A0D14]" key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm text-slate-300">
        Tell us about your workflow and pain points
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.045] px-4 py-3 text-slate-50 outline-none transition focus:border-teal-400 focus:shadow-[0_0_25px_rgba(20,184,166,.15)]"
        />
      </label>
      {error && <p className="mt-4 text-red-300">{error}</p>}
      {done && (
        <p className="mt-4 rounded-2xl bg-teal-500/10 p-4 text-teal-200">
          Inquiry received. We&apos;ll contact you within 24 hours with a
          custom automation roadmap.
        </p>
      )}
      <button
        disabled={loading}
        className="btn-lux btn-lux-health mt-5 flex w-full items-center justify-center gap-2 px-6 py-4 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Book Your Strategy Call"}
        <Send size={18} />
      </button>
    </form>
  );
}

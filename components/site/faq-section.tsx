import { Reveal } from "./motion";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section id="faq" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="eyebrow eyebrow-health">FAQ</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Questions clinic owners ask before starting.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {faqs.map(([q, a]) => (
            <Reveal key={q}>
              <details className="glass-health rounded-3xl p-6">
                <summary className="cursor-pointer text-lg font-bold">
                  {q}
                </summary>
                <p className="mt-4 text-slate-400">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

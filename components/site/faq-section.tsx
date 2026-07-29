import { Reveal } from "./motion";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden px-5">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="label-premium">FAQ</span>
          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Questions we hear
            <br />
            <span className="text-gradient-ember">before starting.</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map(([q, a], i) => (
            <Reveal delay={i * 0.04} key={q}>
              <details className="glass-premium-card rounded-3xl p-6 transition hover:bg-white/[.06]">
                <summary className="cursor-pointer text-lg font-semibold text-white">
                  {q}
                </summary>
                <p className="mt-4 leading-7 text-white/50">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

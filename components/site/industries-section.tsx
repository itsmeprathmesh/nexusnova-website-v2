import { Quote } from "lucide-react";
import { Reveal } from "./motion";

const testimonials = [
  {
    quote: "NexusNova built our complete patient automation system. No-shows dropped 40% in the first month. Our staff actually has time to breathe now.",
    author: "Dr. Priya Sharma",
    role: "Owner, SmileCare Dental",
  },
  {
    quote: "The website they built for us is hands down the best in our region. Patients constantly compliment it. Bookings went up 3x.",
    author: "Rohit Mehta",
    role: "Director, Mehta Physiotherapy",
  },
  {
    quote: "We were skeptical about AI automation, but the results speak for themselves. Lead response time went from hours to seconds.",
    author: "Ananya Kapoor",
    role: "CEO, Kapoor Skin Clinic",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden px-5">
      <div className="glow-orb right-0 top-1/2 h-80 w-80 bg-ember/10" />
      <div className="mx-auto max-w-premium">
        <Reveal>
          <span className="label-premium">Testimonials</span>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Trusted by clinic
            <br />
            <span className="text-gradient-ember">owners like you.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal delay={i * 0.08} key={t.author}>
              <div className="glass-premium-card rounded-4xl p-8 md:p-9">
                <Quote size={24} className="text-ember/40" />
                <p className="mt-5 leading-7 text-white/60">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-white/5 pt-5">
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-white/65">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

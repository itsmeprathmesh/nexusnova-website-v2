import Link from 'next/link';
import { ArrowRight, Check, Sparkles, Zap, ShieldCheck, Bot, BarChart3, Smartphone, Palette, MessageCircle, Star, Workflow } from 'lucide-react';
import { demoProjects, faqs, pricing, services, stats } from '@/lib/data';
import { FloatingMockup, ImageWithSkeleton, OrbGridBackground, Reveal, TiltCard } from './motion';
import type { CSSProperties } from 'react';

type Project = { title: string; slug?: string; industry: string; summary: string; results?: string; image_url?: string };
type Plan = { name: string; price: string | number; desc?: string; description?: string; features: string[]; popular?: boolean };
type Testimonial = { name: string; role?: string; company?: string; quote: string; rating?: number };
function projectSlug(p: Project) { return p.slug || p.title.toLowerCase().replaceAll(' ', '-'); }

export function Hero() {
  const figures = ["24h", "AI", "NGP", "01"];

  return (
    <section className="lux-bg noise relative isolate overflow-hidden px-5 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      <OrbGridBackground className="opacity-85 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />
      <div className="orb -left-20 top-28 h-72 w-72 bg-blue-500/20" />
      <div className="orb -right-16 top-20 h-80 w-80 bg-fuchsia-500/15" />
      <div className="hero-beam absolute left-1/2 top-24 h-px w-[min(72rem,90%)] -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr] lg:gap-12">
          <Reveal>
            <div>
              <p className="eyebrow">
                <Sparkles size={13} />
                AI agency in Nagpur, India
              </p>
              <h1 className="text-gradient mt-7 max-w-3xl text-[clamp(2.75rem,6.8vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
                Premium websites and AI automation built for growth.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                NexusNova Studio is a premium AI agency in Nagpur creating
                website development, CRM, and business automation systems for
                ambitious companies across India.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="btn-lux px-7 py-4" href="/contact">
                  Start your project
                </Link>
                <Link className="btn-outline gap-2 px-7 py-4" href="#work">
                  View selected work <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mt-11 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-400">
                {["Strategy-led design", "AI automation", "Conversion systems"].map(
                  (item) => (
                    <span className="flex items-center gap-2" key={item}>
                      <Check className="text-violet-300" size={15} />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>
          <div className="lg:pl-5">
            <FloatingMockup />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal delay={index * 0.04} key={stat}>
              <TiltCard className="glass h-full rounded-2xl px-4 py-5 sm:px-6 sm:py-6">
                <p className="text-xl font-semibold text-violet-300 sm:text-2xl">
                  {figures[index]}
                </p>
                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  {stat}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemSection(){const items=[['Weak first impression','Visitors judge your brand in seconds. We create premium visual hierarchy, proof blocks, and fast mobile layouts.'],['Leads are getting lost','Every inquiry should be saved, tracked, emailed, and followed up through a clean admin pipeline.'],['Website feels generic','Your site needs a strong offer, case studies, pricing clarity, and micro-interactions that feel high-end.']];return <section className="relative px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.35em] text-violet-300">Problems we solve</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">A premium website is not decoration. It is your online sales machine.</h2></Reveal><div className="mt-12 grid gap-5 md:grid-cols-3">{items.map(([t,d],i)=><Reveal delay={i*.06} key={t}><TiltCard className="glass-warm rounded-[2rem] p-7"><div className="accent-gradient mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-white"><Zap size={20}/></div><h3 className="text-2xl font-bold">{t}</h3><p className="mt-4 leading-7 text-slate-400">{d}</p></TiltCard></Reveal>)}</div></div></section>}

export function Industries(){const industries=['Restaurants & Cafes','Clinics & Doctors','Real Estate & Builders','Salons & Beauty','Coaching Classes','Local Service Businesses'];return <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.35em] text-blue-300">Focused industries</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Designed for businesses that need inquiries, bookings, trust, and repeat clients.</h2><p className="mt-5 max-w-2xl text-slate-400">Each industry gets tailored pages, WhatsApp CTAs, testimonial blocks, offer sections, local SEO structure, and an admin panel for updating content.</p></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map((x,i)=><Reveal delay={i*.04} key={x}><div className="card-3d glass rounded-3xl p-7"><h3 className="text-xl font-bold text-slate-50">{x}</h3><p className="mt-3 text-slate-400">Landing pages, lead capture, portfolio visuals, appointment CTAs, and follow-up automation.</p></div></Reveal>)}</div></div></section>}

export function Services() {
  const icons = [Palette, Workflow, Bot, ShieldCheck];

  return (
    <section id="services" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[.8fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Expertise</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] text-[#F8FAFC] sm:text-5xl lg:text-6xl">
                AI solutions and web development for modern businesses.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end">
              AI automation services, website development, branding, and CRM
              workflows tailored for businesses that expect polish and
              measurable results.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal delay={index * 0.04} key={service.title}>
                <TiltCard className="service-card glass-warm group rounded-[1.6rem] p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-6">
                    <div className="accent-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-[0_12px_32px_rgba(123,44,245,.22)]">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-medium tracking-[0.24em] text-violet-300/70">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-.03em] text-[#F8FAFC] sm:text-[1.7rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-400">
                    {service.solution}
                  </p>
                  <div className="mt-7 flex gap-3 border-t border-white/10 pt-5">
                    <Check className="mt-1 shrink-0 text-blue-300" size={16} />
                    <p className="text-sm leading-6 text-slate-300">
                      {service.outcome}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LocalPresence() {
  const localServices = [
    [
      "Website Development in Nagpur",
      "Premium responsive websites for local companies that need clearer services, stronger trust signals, and easier enquiry journeys.",
    ],
    [
      "AI Automation for Businesses",
      "Practical automation for lead capture, follow-up notifications, CRM workflows, and repeatable customer operations.",
    ],
    [
      "Digital Transformation Across India",
      "Modern website and business systems for startups and established teams ready to replace scattered manual processes.",
    ],
  ];

  return (
    <section id="nagpur-ai-agency" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[.35em] text-blue-300">
            Nagpur, Maharashtra / India
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            An AI agency and website development partner in Nagpur.
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            NexusNova Studio helps businesses in Nagpur and across India
            improve how they attract enquiries, manage leads, and deliver
            digital experiences through thoughtful design and useful
            automation.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {localServices.map(([title, description], index) => (
            <Reveal delay={index * 0.05} key={title}>
              <div className="glass h-full rounded-3xl p-7">
                <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <Link className="text-blue-300 transition hover:text-violet-300" href="#services">
              Explore AI automation and web development services
            </Link>
            <Link className="text-blue-300 transition hover:text-violet-300" href="/portfolio">
              View website and automation case studies
            </Link>
            <Link className="text-blue-300 transition hover:text-violet-300" href="/contact">
              Discuss a Nagpur business project
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function WebsiteAudit(){const points=['Brand clarity score','Mobile UX and spacing','CTA and conversion flow','Local SEO foundations','Lead automation opportunities','Trust and case-study proof'];return <section className="px-5 py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]"><Reveal><div className="sticky top-28"><p className="text-sm uppercase tracking-[.35em] text-fuchsia-300">Free audit funnel</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Give clients a reason to contact you before they are ready to buy.</h2><p className="mt-5 text-slate-400">A website audit lead magnet helps business owners understand what is broken and positions NexusNova as the expert.</p><Link href="/contact" className="btn-lux mt-8 inline-flex px-7 py-4">Get a Website and SEO Audit</Link></div></Reveal><div className="grid gap-4 sm:grid-cols-2">{points.map((p,i)=><Reveal delay={i*.04} key={p}><div className="glass rounded-3xl p-6"><p className="text-sm text-violet-300/80">Audit {String(i+1).padStart(2,'0')}</p><h3 className="mt-4 text-lg font-bold">{p}</h3></div></Reveal>)}</div></div></section>}

export function Work({projects=demoProjects}:{projects?:Project[]}) {
  return (
    <section id="work" className="content-fade px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[.35em] text-violet-300">
            Case studies
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Website and automation work built around business outcomes.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal delay={index * .05} key={projectSlug(project)}>
              <Link
                href={`/portfolio/${projectSlug(project)}`}
                className="group block"
              >
                <TiltCard className="glass-warm overflow-hidden rounded-[2rem]">
                  <div className="relative h-60 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(13,110,253,.5),transparent_32%),radial-gradient(circle_at_70%_40%,rgba(217,70,239,.35),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(123,44,245,.55),transparent_36%)]">
                    {project.image_url && (
                      <ImageWithSkeleton
                        alt={`${project.title} website development case study`}
                        className="absolute inset-0 h-full w-full"
                        src={project.image_url}
                      />
                    )}
                    <div className="absolute inset-5 rounded-[1.5rem] border border-white/15 bg-white/[.04] backdrop-blur-[2px] transition group-hover:scale-[1.03]" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#0A0D14]/70 px-3 py-1 text-sm text-blue-200">
                      {project.industry}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-black group-hover:text-violet-300">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-slate-400">{project.summary}</p>
                    <p className="mt-5 text-sm font-semibold text-blue-300">
                      {project.results}
                    </p>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            className="btn-outline mt-10 inline-flex px-6 py-3"
            href="/portfolio"
          >
            Explore all website and automation case studies
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Comparison(){const rows=[['Template-looking website','Luxury custom visual system'],['Only contact form','Lead CRM + admin pipeline'],['No follow-up','Email alerts + client confirmation'],['Static content','Admin CRUD for blog, pricing, work'],['Generic colors','Electric blue and purple identity']];return <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><h2 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">The goal is not just beautiful design. The goal is credibility + conversion.</h2></Reveal><div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04]"><table className="w-full text-left"><thead className="bg-violet-500/10 text-violet-200"><tr><th className="p-5">Before</th><th className="p-5">After NexusNova</th></tr></thead><tbody>{rows.map(([a,b])=><tr className="border-t border-white/10" key={a}><td className="p-5 text-white/42">{a}</td><td className="p-5 font-bold text-blue-200">{b}</td></tr>)}</tbody></table></div></div></section>}

export function Process(){const steps=[['Discover','We define offer, target customer, pages, features, and conversion goals.'],['Design','We craft the premium visual system, sections, mobile UX, and interaction flow.'],['Build','We develop frontend, backend, admin dashboard, database, and email automation.'],['Launch','We deploy on Vercel, connect domain, check SEO, and guide your updates.']];return <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.35em] text-fuchsia-300">Process</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">A clear delivery system clients can trust.</h2></Reveal><div className="mt-12 grid gap-4 md:grid-cols-4">{steps.map(([s,d],i)=><Reveal delay={i*.06} key={s}><div className="glass rounded-3xl p-7"><p className="text-sm text-violet-300/70">0{i+1}</p><h3 className="mt-4 text-2xl font-black">{s}</h3><p className="mt-3 text-slate-400">{d}</p></div></Reveal>)}</div></div></section>}

export function TechStack(){const stack=['Next.js','TypeScript','Tailwind CSS','Framer Motion','Supabase','Clerk','Resend','Vercel'];return <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.35em] text-blue-300">Production stack</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Fast, secure, scalable, and easy to manage.</h2></Reveal><div className="mt-12 flex flex-wrap gap-3">{stack.map((x,i)=><Reveal delay={i*.03} key={x}><span className="rounded-full border border-white/10 bg-white/[.045] px-5 py-3 text-slate-300">{x}</span></Reveal>)}</div></div></section>}

export function Pricing({plans=pricing}:{plans?:Plan[]}){return <section id="pricing" className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.35em] text-violet-300">Pricing</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Transparent packages with premium positioning.</h2></Reveal><div className="mt-12 grid gap-6 md:grid-cols-3">{plans.map((p,i)=>{const price=typeof p.price==='number'?(p.price===0?'Custom':`₹${p.price.toLocaleString('en-IN')}`):p.price;return <Reveal delay={i*.05} key={p.name}><TiltCard className={`glass rounded-[2rem] p-8 ${p.popular?'ring-2 ring-violet-400/60':''}`}>{p.popular&&<span className="accent-gradient rounded-full px-3 py-1 text-sm font-bold text-white">Most Popular</span>}<h3 className="mt-5 text-2xl font-black">{p.name}</h3><p className="mt-4 text-5xl font-black text-gradient">{price}</p><p className="mt-3 text-slate-400">{p.desc||p.description}</p><ul className="mt-7 space-y-3">{(p.features||[]).map(f=><li className="flex gap-2 text-slate-300" key={f}><Check className="shrink-0 text-blue-300" size={18}/>{f}</li>)}</ul><Link className="btn-lux mt-8 block px-5 py-3 text-center" href="/contact">Get Started</Link></TiltCard></Reveal>})}</div></div></section>}

export function Testimonials({testimonials=[]}:{testimonials?:Testimonial[]}){const fallback=[{name:'Demo Cafe Brand',role:'Restaurant growth concept',company:'NexusNova Demo',quote:'The layout makes the business feel premium and sends customers directly to WhatsApp and booking actions.'},{name:'Clinic Website Concept',role:'Healthcare landing page',company:'NexusNova Demo',quote:'The structure explains services clearly, builds trust, and captures inquiries without confusing visitors.'},{name:'Real Estate Concept',role:'Builder portfolio system',company:'NexusNova Demo',quote:'The case study style makes projects feel credible with visuals, results, and clear contact flow.'}];const list=testimonials.length?testimonials:fallback;return <section className="px-5 py-24"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.35em] text-fuchsia-300">Trust signals</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Designed to make visitors feel confidence immediately.</h2></Reveal><div className="mt-12 grid gap-5 md:grid-cols-3">{list.map((t,i)=><Reveal delay={i*.05} key={`${t.name}-${i}`}><div className="glass-warm rounded-[2rem] p-7"><div className="mb-5 flex gap-1 text-violet-300">{Array.from({length:5}).map((_,i)=><Star key={i} size={16} fill="currentColor"/>)}</div><p className="text-slate-300">“{t.quote}”</p><p className="mt-6 font-black">{t.name}</p><p className="text-sm text-slate-500">{[t.role,t.company].filter(Boolean).join(' • ')}</p></div></Reveal>)}</div></div></section>}

export function FAQ(){return <section id="faq" className="px-5 py-24"><div className="mx-auto max-w-4xl"><Reveal><p className="text-sm uppercase tracking-[.35em] text-violet-300">FAQ</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Questions clients ask before starting.</h2></Reveal><div className="mt-10 space-y-4">{faqs.map(([q,a])=><Reveal key={q}><details className="glass rounded-3xl p-6"><summary className="cursor-pointer text-lg font-bold">{q}</summary><p className="mt-4 text-slate-400">{a}</p></details></Reveal>)}</div></div></section>}

export function FinalCTA() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="lux-bg noise relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-400/20 px-6 py-14 text-center shadow-2xl sm:px-10 md:py-20">
        <div className="orb left-10 top-10 h-72 w-72 bg-blue-500/20" />
        <div className="orb bottom-0 right-10 h-56 w-56 bg-fuchsia-500/15" />
        <Reveal>
          <p className="eyebrow">Begin the next chapter</p>
          <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold tracking-[-.055em] text-[#F8FAFC] sm:text-5xl md:text-6xl">
            Make your brand feel as exceptional as your ambition.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Book a strategy call for website development and AI automation
            solutions designed around your business in Nagpur or across India.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className="btn-lux px-8 py-4" href="/contact">
              Book a strategy call
            </Link>
            <Link className="btn-outline px-8 py-4" href="/portfolio">
              View case studies
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkeletonBlock({
  className,
  delay = 0,
  style,
}: {
  className: string;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={`skeleton rounded-full ${className}`}
      style={{ "--skeleton-delay": `${delay}s`, ...style } as CSSProperties}
    />
  );
}

function SkeletonCards({
  count,
  image = false,
  columns = "md:grid-cols-3",
}: {
  count: number;
  image?: boolean;
  columns?: string;
}) {
  return (
    <div className={`grid gap-5 ${columns}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-glass rounded-[2rem] p-5" key={index}>
          {image && (
            <SkeletonBlock
              className="skeleton-media mb-6 h-44 w-full rounded-2xl"
              delay={index * 0.09}
            />
          )}
          <SkeletonBlock className="h-4 w-24" delay={index * 0.09 + 0.04} />
          <SkeletonBlock className="mt-5 h-7 w-4/5" delay={index * 0.09 + 0.07} />
          <SkeletonBlock className="mt-4 h-4 w-full" delay={index * 0.09 + 0.1} />
          <SkeletonBlock className="mt-3 h-4 w-2/3" delay={index * 0.09 + 0.13} />
        </div>
      ))}
    </div>
  );
}

export function SitePageSkeleton() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading page content"
      className="skeleton-stage px-5 pb-24 pt-36"
      role="status"
    >
      <span className="sr-only">Loading content</span>
      <div className="mx-auto max-w-7xl">
        <SkeletonBlock className="h-4 w-28" delay={0.03} />
        <SkeletonBlock className="mt-7 h-14 max-w-3xl rounded-2xl sm:h-20" delay={0.08} />
        <SkeletonBlock className="mt-5 h-5 max-w-xl" delay={0.14} />
        <div className="mt-12">
          <SkeletonCards count={3} image />
        </div>
      </div>
    </section>
  );
}

export function HomeDataSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading portfolio and plans" role="status">
      <span className="sr-only">Loading portfolio, plans and testimonials</span>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="h-4 w-32" delay={0.05} />
          <SkeletonBlock className="mt-6 h-14 max-w-3xl rounded-2xl" delay={0.1} />
          <div className="mt-12">
            <SkeletonCards count={3} image />
          </div>
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="h-12 max-w-3xl rounded-2xl" delay={0.08} />
          <div className="skeleton-glass mt-12 rounded-[2rem] p-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                className="flex gap-5 border-b border-white/5 py-4 last:border-0"
                key={index}
              >
                <SkeletonBlock className="h-4 w-2/5" delay={index * 0.07} />
                <SkeletonBlock className="h-4 w-2/5" delay={index * 0.07 + 0.04} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="h-4 w-20" delay={0.04} />
          <SkeletonBlock className="mt-6 h-12 max-w-xl rounded-2xl" delay={0.1} />
          <div className="mt-12">
            <SkeletonCards count={4} columns="md:grid-cols-4" />
          </div>
        </div>
      </section>
      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="h-4 w-28" delay={0.04} />
          <SkeletonBlock className="mt-6 h-12 max-w-2xl rounded-2xl" delay={0.1} />
          <div className="mt-10 flex flex-wrap gap-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonBlock className="h-12 w-28" delay={index * 0.05} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="h-4 w-20" delay={0.04} />
          <SkeletonBlock className="mt-6 h-12 max-w-xl rounded-2xl" delay={0.1} />
          <div className="mt-12">
            <SkeletonCards count={3} columns="md:grid-cols-3" />
          </div>
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SkeletonCards count={3} columns="md:grid-cols-3" />
        </div>
      </section>
    </div>
  );
}

function HeroLoadingSkeleton() {
  return (
    <section className="lux-bg skeleton-stage relative overflow-hidden px-5 pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      <div className="orb -left-20 top-28 h-72 w-72 bg-blue-500/10" />
      <div className="orb -right-16 top-20 h-80 w-80 bg-fuchsia-500/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
          <div>
            <SkeletonBlock className="h-9 w-48" delay={0.02} />
            <SkeletonBlock className="mt-8 h-14 w-full max-w-xl rounded-2xl sm:h-20" delay={0.08} />
            <SkeletonBlock className="mt-3 h-14 w-5/6 max-w-lg rounded-2xl sm:h-20" delay={0.12} />
            <SkeletonBlock className="mt-7 h-5 w-full max-w-lg" delay={0.17} />
            <SkeletonBlock className="mt-3 h-5 w-4/5 max-w-md" delay={0.21} />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <SkeletonBlock className="h-14 w-full sm:w-44" delay={0.25} />
              <SkeletonBlock className="h-14 w-full sm:w-48" delay={0.3} />
            </div>
            <div className="mt-11 flex gap-5 border-t border-white/10 pt-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <SkeletonBlock
                  className="h-4 w-28"
                  delay={0.32 + index * 0.05}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="skeleton-glass rounded-[1.75rem] p-3">
            <div className="rounded-[1.3rem] border border-white/5 bg-white/[.015] p-5">
              <div className="flex gap-2">
                <SkeletonBlock className="h-3 w-3" delay={0.08} />
                <SkeletonBlock className="h-3 w-3" delay={0.12} />
                <SkeletonBlock className="h-3 w-3" delay={0.16} />
                <SkeletonBlock className="ml-3 h-5 w-40" delay={0.2} />
              </div>
              <div className="skeleton-glass mt-5 rounded-2xl p-5">
                <SkeletonBlock className="h-3 w-32" delay={0.1} />
                <SkeletonBlock className="mt-4 h-9 w-24 rounded-xl" delay={0.18} />
                <div className="mt-7 flex h-24 items-end gap-2">
                  {[36, 50, 42, 66, 56, 90, 78].map((height, index) => (
                    <SkeletonBlock
                      className="flex-1 rounded-t-md rounded-b-sm"
                      delay={0.16 + index * 0.04}
                      key={height}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonBlock
                    className="h-14 w-full rounded-xl"
                    delay={0.3 + index * 0.05}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="skeleton-glass rounded-2xl p-5 sm:p-6" key={index}>
              <SkeletonBlock className="h-7 w-16" delay={index * 0.06} />
              <SkeletonBlock className="mt-3 h-4 w-28" delay={index * 0.06 + 0.06} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AppLoadingSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading NexusNova Studio"
      className="min-h-screen bg-[#0A0D14] px-3 pt-3 sm:px-5 sm:pt-4"
      role="status"
    >
      <span className="sr-only">Loading NexusNova Studio</span>
      <div className="skeleton-glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3">
        <div className="flex items-center gap-3">
          <SkeletonBlock className="h-10 w-10 rounded-xl" delay={0.02} />
          <SkeletonBlock className="h-5 w-32" delay={0.08} />
        </div>
        <div className="hidden gap-4 sm:flex">
          <SkeletonBlock className="h-4 w-14" delay={0.12} />
          <SkeletonBlock className="h-4 w-14" delay={0.16} />
          <SkeletonBlock className="h-11 w-28" delay={0.2} />
        </div>
        <SkeletonBlock className="h-10 w-10 rounded-xl sm:hidden" delay={0.12} />
      </div>
      <div className="-mx-3 sm:-mx-5">
        <HeroLoadingSkeleton />
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 border-t border-white/10 pb-10 pt-12 sm:grid-cols-3">
        <SkeletonBlock className="h-5 w-36" delay={0.04} />
        <SkeletonBlock className="h-5 w-28" delay={0.1} />
        <SkeletonBlock className="h-5 w-44" delay={0.16} />
      </div>
    </div>
  );
}

export function WhatsApp() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917558541331';

  return (
    <a
      href={`https://wa.me/${number}`}
      aria-label="Contact NexusNova Studio on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-blue-300/25 bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-violet-600/25 transition hover:shadow-blue-500/30 sm:bottom-6 sm:right-6 sm:px-5"
    >
      <MessageCircle size={17} /> WhatsApp
    </a>
  );
}

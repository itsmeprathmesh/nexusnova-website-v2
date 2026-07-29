"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Section {
  title: string;
  headline: string;
  body: string;
  cta?: { label: string; href: string };
}

const sections: Section[] = [
  {
    title: "Innovation",
    headline: "We engineer\nthe future of\nhealthcare AI",
    body: "For over 5 years, NexusNova has built some of the most advanced AI automation systems for healthcare. From intelligent document processing to predictive diagnostics, we transform clinical workflows with cutting-edge artificial intelligence.",
    cta: { label: "Explore our technology", href: "/solutions" },
  },
  {
    title: "Precision",
    headline: "Every model\nbuilt with\nsurgical accuracy",
    body: "We approach AI development with the same rigor as a clinical trial. Each model undergoes extensive validation, testing, and optimization to ensure it performs reliably in real-world healthcare environments.",
    cta: { label: "How we build", href: "/about" },
  },
  {
    title: "Collaboration",
    headline: "We work with\na network of\nhealthcare experts",
    body: "We are not just AI engineers. We partner with physicians, hospital administrators, researchers, and compliance officers — all coming together to shape AI that genuinely improves patient care.",
    cta: { label: "Work with us", href: "/contact" },
  },
  {
    title: "Scale",
    headline: "From pilot\nto enterprise\nin weeks",
    body: "Our modular platform architecture means we can deploy a proof of concept in days and scale to enterprise-wide rollout in weeks. No multi-year transformations — just rapid, measurable progress.",
    cta: { label: "View our projects", href: "/portfolio" },
  },
  {
    title: "Trust",
    headline: "HIPAA-compliant\nsecure by\ndesign",
    body: "Security and compliance are foundational to everything we build. All systems are HIPAA-compliant, SOC 2 aligned, and built with end-to-end encryption. Your data never leaves your control.",
    cta: { label: "Learn about security", href: "/about" },
  },
  {
    title: "Impact",
    headline: "Measurable\noutcomes real\nresults",
    body: "Our clients see 60% reduction in administrative overhead, 40% faster diagnosis cycles, and 99.9% uptime on mission-critical systems. We don't just build AI — we deliver outcomes that matter.",
    cta: { label: "See case studies", href: "/portfolio" },
  },
];

export function splitSectionsData() {
  return sections;
}

function SplitSectionItem({
  section,
  index,
}: {
  section: Section;
  index: number;
}) {
  const lines = section.headline.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
      className="split-section"
    >
      <div>
        <div className="split-section-title">{section.title}</div>
        <h2 className="split-section-headline">
          {lines.map((line, i) => (
            <span key={i} className="line-block">
              {line}
            </span>
          ))}
        </h2>
      </div>
      <div>
        <p className="split-section-body">{section.body}</p>
        {section.cta && (
          <Link href={section.cta.href} className="split-section-cta">
            {section.cta.label}
            <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export function SplitSections() {
  return (
    <>
      {sections.map((section, i) => (
        <SplitSectionItem key={section.title} section={section} index={i} />
      ))}
    </>
  );
}

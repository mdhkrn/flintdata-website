import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import { services } from '../../data/content.js';

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <Reveal as="li" delay={(index % 4) * 70} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/50 hover:shadow-[0_30px_80px_-30px_rgba(46,107,255,0.6)]">
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-electric-500/0 blur-3xl transition-all duration-500 group-hover:bg-electric-500/30"
          aria-hidden="true"
        />
        <div className="relative flex items-start justify-between">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-electric-400/25 bg-electric-500/10 text-electric-300 transition-colors duration-500 group-hover:border-electric-400 group-hover:bg-electric-500 group-hover:text-white">
            <Icon className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
          </span>
          <span className="font-mono text-xs text-slate-500">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="relative mt-6 text-lg font-semibold leading-snug text-white">{service.title}</h3>
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-400">{service.description}</p>
        <ul className="relative mt-6 flex flex-wrap gap-1.5" aria-label={`${service.title} capabilities`}>
          {service.tags.map((t) => (
            <li key={t} className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300">
              {t}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Services() {
  return (
    <Section id="services" tone="navy" labelledBy="services-title">
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          id="services-title"
          eyebrow="Our Services"
          title="End-to-end data services for every modality."
          lead="From first sample to final delivery, we cover the full lifecycle of AI training and evaluation data."
        />
        <Reveal delay={120} className="shrink-0">
          <Button href="#contact" variant="ghost">
            Discuss your project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>

      <ul className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </ul>
    </Section>
  );
}

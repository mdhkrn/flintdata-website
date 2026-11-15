import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
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
          <span className="font-mono text-xs text-slate-400">{String(index + 1).padStart(2, '0')}</span>
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
        {/* Closing tile — completes the grid and invites custom requests */}
        <Reveal as="li" delay={210} className="h-full">
          <a
            href="#contact"
            className="group relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-electric-500 to-electric-700 p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(46,107,255,0.9)]"
          >
            <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Sparkles className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
            </span>
            <div className="relative">
              <h3 className="text-lg font-semibold leading-snug">Need something specific?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Tell us about your data and we&apos;ll design the right workflow for it.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                Talk to us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </a>
        </Reveal>
      </ul>
    </Section>
  );
}

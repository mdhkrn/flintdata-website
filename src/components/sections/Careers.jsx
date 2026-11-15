import { Mail, Languages } from 'lucide-react';
import Section from '../ui/Section.jsx';
import Reveal from '../ui/Reveal.jsx';
import { company } from '../../data/content.js';

const subject = encodeURIComponent('Job application — Linguistic data annotation (Indic languages)');

export default function Careers() {
  return (
    <Section id="careers" tone="dark" labelledBy="careers-title">
      <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-14 text-center sm:px-12 sm:py-16">
        <div className="bg-grid mask-fade absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-electric-500/25 blur-3xl" aria-hidden="true" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">Careers</p>
          <h2 id="careers-title" className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            Join our team
          </h2>

          <p className="mx-auto mt-7 inline-flex items-center gap-2.5 rounded-full border border-electric-400/30 bg-electric-500/10 px-4 py-2 text-sm font-semibold text-electric-200 sm:text-base">
            <Languages className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
            Linguistic data annotation in Indic languages
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Are you fluent in one or more Indic languages, with a sharp eye for detail? Help us build high-quality
            language data for AI.
          </p>

          <p className="mt-9 text-base text-slate-300">
            Send your CV and the languages you work in to{' '}
            <a
              href={`mailto:${company.email}?subject=${subject}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white underline decoration-electric-400/60 underline-offset-4 transition hover:decoration-electric-300"
            >
              <Mail className="h-4 w-4 text-electric-300" aria-hidden="true" />
              {company.email}
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

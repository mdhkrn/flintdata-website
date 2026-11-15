import Section from '../ui/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { processSteps } from '../../data/content.js';

export default function Process() {
  return (
    <Section id="process" tone="mist" labelledBy="process-title">
      <SectionHeading
        id="process-title"
        tone="light"
        eyebrow="Our Process"
        title="A clear, collaborative path from brief to delivery."
        lead="Five transparent stages, with checkpoints where you can review, refine and approve."
      />

      <ol className="relative mt-16 grid gap-6 lg:grid-cols-5 lg:gap-5">
        {/* Connector line (desktop) */}
        <span
          className="absolute left-0 right-0 top-[1.75rem] hidden h-px bg-gradient-to-r from-electric-200 via-electric-400 to-electric-200 lg:block"
          aria-hidden="true"
        />
        {/* Connector line (mobile/tablet) */}
        <span className="absolute bottom-6 left-7 top-6 w-px bg-electric-200 lg:hidden" aria-hidden="true" />

        {processSteps.map(({ icon: Icon, title, description }, i) => (
          <Reveal as="li" key={title} delay={i * 90} className="group relative flex gap-5 lg:flex-col lg:gap-0">
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-electric-200 bg-white text-electric-600 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-electric-500 group-hover:bg-electric-500 group-hover:text-white group-hover:shadow-[0_16px_40px_-12px_rgba(46,107,255,0.7)]">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 group-hover:border-electric-300 group-hover:shadow-[0_24px_60px_-30px_rgba(7,14,36,0.35)] lg:mt-8">
              <p className="font-mono text-xs font-semibold text-electric-600">Step {String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-navy-900">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

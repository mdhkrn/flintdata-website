import Section from '../ui/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { reasons } from '../../data/content.js';

export default function WhyChoose() {
  return (
    <Section id="why-flintdata" tone="dark" labelledBy="why-title">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(46,107,255,0.18),transparent)]"
        aria-hidden="true"
      />
      <SectionHeading
        id="why-title"
        align="center"
        eyebrow="Why Choose Flint Data?"
        title="Quality you can build on. Partnership you can rely on."
        lead="We treat data as the foundation of every model — so we hold it to the standard your AI deserves."
      />

      <Reveal delay={120} className="relative mt-16">
        {/* gap-px over a tinted background draws crisp 1px grid lines */}
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <li
              key={title}
              className="group relative bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-900 lg:p-10"
            >
              <span
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-electric-400 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-electric-700 text-white shadow-[0_10px_30px_-10px_rgba(46,107,255,0.9)] transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-slate-600 transition-colors group-hover:text-electric-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-400">{description}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

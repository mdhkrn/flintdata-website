import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import Section from '../ui/Section.jsx';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import Placeholder from '../ui/Placeholder.jsx';
import { careerAreas, company } from '../../data/content.js';

const values = [
  { title: 'Meaningful work', text: 'Your judgement directly shapes how AI systems understand the world.' },
  { title: 'Grow your craft', text: 'Training, feedback and clear paths into QA, research and leadership.' },
  { title: 'Detail matters', text: 'A culture that values precision, curiosity and getting things right.' },
];

export default function Careers() {
  return (
    <Section id="careers" tone="dark" labelledBy="careers-title">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 sm:p-12 lg:p-16">
          <div className="bg-grid mask-fade absolute inset-0" aria-hidden="true" />
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-electric-500/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-signal/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">
                <Briefcase className="h-3.5 w-3.5" aria-hidden="true" /> Careers
              </p>
              <h2 id="careers-title" className="text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
                Help build the data that builds the future.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                We&apos;re looking for detail-driven, curious people who want their work to matter. Whether you&apos;re an
                experienced annotator, a domain specialist or an engineer, there&apos;s a place for you at FlintData.
              </p>

              <ul className="mt-9 space-y-5">
                {values.map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                    <p className="text-slate-300">
                      <span className="font-semibold text-white">{v.title}.</span> {v.text}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* [Placeholder] Point this at your careers page or applicant tracking system */}
                <Button href="#contact" size="lg">
                  Join Our Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <Placeholder>{company.careersEmail}</Placeholder>
                </span>
              </div>
            </Reveal>

            <Reveal delay={140} className="flex flex-col">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">Teams we hire for</h3>
                  <span className="rounded-full bg-electric-500/15 px-3 py-1 text-xs font-medium text-electric-200">Role areas</span>
                </div>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {careerAreas.map((area) => (
                    <li
                      key={area}
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-navy-950/40 px-4 py-3.5 text-sm font-medium text-slate-200 transition hover:border-electric-400/60 hover:bg-electric-500/10 hover:text-white"
                    >
                      {area}
                      <ArrowRight className="h-4 w-4 -translate-x-1 text-electric-300 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-dashed border-white/15 p-4 text-sm text-slate-400">
                  <Placeholder>Link to current open positions / job board</Placeholder>
                  <p className="mt-2">Open roles will be listed here. Interested now? Send us your profile and the area you&apos;d like to work in.</p>
                </div>
              </div>
            </Reveal>
          </div>
      </div>
    </Section>
  );
}

import { ShieldCheck, Crosshair, Expand } from 'lucide-react';
import Section from '../ui/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Reliable',
    text: 'Documented workflows and consistent guidelines, batch after batch.',
  },
  {
    icon: Crosshair,
    title: 'Accurate',
    text: 'Human judgement, layered review and measurable quality targets.',
  },
  {
    icon: Expand,
    title: 'Scalable',
    text: 'Teams and pipelines that flex with your project from pilot to production.',
  },
];

const pipeline = [
  { label: 'Raw data', width: 'w-full', color: 'bg-slate-200' },
  { label: 'Curated', width: 'w-[86%]', color: 'bg-electric-200' },
  { label: 'Annotated', width: 'w-[72%]', color: 'bg-electric-400' },
  { label: 'Validated', width: 'w-[60%]', color: 'bg-electric-600' },
  { label: 'Model-ready', width: 'w-[50%]', color: 'bg-navy-900' },
];

export default function About() {
  return (
    <Section id="about" tone="light" labelledBy="about-title">
      <div className="bg-grid-light mask-fade pointer-events-none absolute inset-0 -z-0" aria-hidden="true" />
      <div className="relative grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeading
            id="about-title"
            tone="light"
            eyebrow="About Flint Data"
            title="The human layer behind better AI systems."
          />
          <Reveal delay={100} className="mt-7 space-y-5 text-[1.05rem] leading-relaxed text-slate-600">
            <p>
              Flint Data is an AI data annotation and research company. We help organisations build better AI systems
              through reliable, accurate and scalable data solutions — turning raw, unstructured information into
              training and evaluation data that models can genuinely learn from.
            </p>
            <p>
              Our work combines skilled human annotators, rigorous quality assurance and a research mindset. We study
              how data shapes model behaviour, then design annotation strategies that serve your real objectives — not
              just a labelling checklist.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-10 grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-electric-300 hover:shadow-[0_20px_50px_-24px_rgba(46,107,255,0.45)]"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600 transition group-hover:bg-electric-500 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-6 lg:pl-8">
          <figure className="relative overflow-hidden rounded-3xl bg-navy-900 p-7 text-white shadow-[0_40px_100px_-40px_rgba(7,14,36,0.7)] sm:p-9">
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-electric-500/30 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">Our focus</p>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight">
                From raw inputs to model-ready datasets.
              </p>

              {/* Illustrative refinement funnel (conceptual, not a metric) */}
              <div className="mt-8 space-y-3" role="img" aria-label="Data moves from raw, to curated, annotated, validated and finally model-ready.">
                {pipeline.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <span className="w-24 shrink-0 text-xs font-medium text-slate-400">{step.label}</span>
                    <div className="h-2.5 flex-1 rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full ${step.width} ${
                          i === pipeline.length - 1 ? 'bg-gradient-to-r from-electric-500 to-signal' : step.color
                        } ${i === 0 ? 'opacity-30' : ''}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <figcaption className="mt-4 text-xs text-slate-400">Conceptual illustration of our data refinement flow.</figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}

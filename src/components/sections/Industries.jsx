import { useRef, useState } from 'react';
import { ArrowRight, CircleCheck } from 'lucide-react';
import Section from '../ui/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { industries } from '../../data/content.js';

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const active = industries[activeIndex];
  const ActiveIcon = active.icon;

  // Roving focus for an accessible tablist (arrow keys, Home, End)
  const onKeyDown = (e) => {
    const last = industries.length - 1;
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = activeIndex === last ? 0 : activeIndex + 1;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = activeIndex === 0 ? last : activeIndex - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next !== null) {
      e.preventDefault();
      setActiveIndex(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <Section id="industries" tone="light" labelledBy="industries-title">
      <SectionHeading
        id="industries-title"
        tone="light"
        eyebrow="Industries We Serve"
        title="Domain-aware data for the sectors shaping AI."
        lead="Every industry has its own vocabulary, edge cases and risk profile. We adapt guidelines, reviewers and workflows to match."
      />

      <Reveal delay={100} className="mt-14 grid gap-6 lg:grid-cols-12">
        <div
          role="tablist"
          aria-label="Industries"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const selected = i === activeIndex;
            return (
              <button
                key={ind.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${ind.id}`}
                aria-selected={selected}
                aria-controls={`panel-industry`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 lg:px-5 lg:py-4 ${
                  selected
                    ? 'border-navy-900 bg-navy-900 text-white shadow-[0_16px_40px_-20px_rgba(7,14,36,0.8)]'
                    : 'border-slate-200 bg-white text-navy-800 hover:border-electric-300 hover:text-electric-700'
                }`}
              >
                <Icon
                  className={`h-[1.1rem] w-[1.1rem] shrink-0 ${selected ? 'text-electric-300' : 'text-slate-400 group-hover:text-electric-500'}`}
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap">{ind.name}</span>
                <ArrowRight
                  className={`ml-auto hidden h-4 w-4 transition-all lg:block ${
                    selected ? 'translate-x-0 text-electric-300 opacity-100' : '-translate-x-2 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        <div
          id="panel-industry"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white sm:p-10 lg:col-span-8 lg:p-12"
        >
          <div className="bg-grid mask-fade absolute inset-0" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-electric-500/25 blur-3xl" aria-hidden="true" />

          {/* Decorative concentric rings with the industry icon */}
          <div className="absolute right-8 top-8 hidden sm:block" aria-hidden="true">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10">
              <div className="absolute inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-8 animate-pulse-soft rounded-full border border-electric-400/40" />
              <ActiveIcon className="h-9 w-9 text-electric-300" />
            </div>
          </div>

          <div key={active.id} className="relative max-w-lg animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">
              {String(activeIndex + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{active.name}</h3>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{active.summary}</p>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Example applications</p>
            <ul className="mt-4 grid gap-3">
              {active.useCases.map((u) => (
                <li
                  key={u}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
                >
                  <CircleCheck className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

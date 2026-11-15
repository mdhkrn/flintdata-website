import { ArrowRight, MessageSquare } from 'lucide-react';
import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import HeroVisual from './HeroVisual.jsx';

const modalities = ['Image', 'Video', 'Text', 'Audio', 'Model Evaluation'];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy-950 pb-28 pt-32 sm:pt-40 lg:pb-36 lg:pt-44"
    >
      {/* Background layers */}
      <div className="bg-grid mask-fade absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-18rem] -z-10 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(46,107,255,0.28),transparent)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-navy-950" aria-hidden="true" />

      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="reveal is-visible mb-7 inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/10 py-1.5 pl-2 pr-4 text-xs font-medium text-electric-200">
            <span className="rounded-full bg-electric-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Flint Data
            </span>
            AI Data Annotation &amp; Research
          </p>

          <h1
            id="hero-title"
            className="text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white text-balance sm:text-6xl lg:text-[2.75rem] xl:text-[3.4rem]"
          >
            Powering AI with <br className="hidden sm:block" />
            <span className="text-gradient xl:whitespace-nowrap">Human&#8209;Quality Data.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
            We transform complex data into high-quality intelligence through precision-driven annotation, advanced data
            processing, and AI research.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#services" size="lg">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Get in Touch
            </Button>
          </div>

          <div className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Data we work with</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Data modalities">
              {modalities.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-slate-300"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sm:max-lg:pt-14 lg:col-span-6 lg:pl-6 xl:col-span-6">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

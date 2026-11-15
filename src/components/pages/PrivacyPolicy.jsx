import { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Mail } from 'lucide-react';
import Container from '../ui/Container.jsx';
import { privacyMeta, privacySections } from '../../data/privacy.js';
import { company } from '../../data/content.js';

// Turns any occurrence of the company email in policy text into a mailto link.
function withEmailLinks(text) {
  const parts = text.split(company.email);
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <a key={i} href={`mailto:${company.email}`} className="font-medium text-electric-600 hover:underline">
            {company.email}
          </a>,
        ]
      : [part],
  );
}

// In-page jumps use scrollIntoView (not #hash links) so the page view stays put.
const jumpTo = (id) => document.getElementById(`pp-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export default function PrivacyPolicy() {
  useEffect(() => {
    const previous = document.title;
    document.title = `${privacyMeta.title} — Flint Data`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <header className="relative overflow-hidden bg-navy-950 pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="bg-grid mask-fade absolute inset-0" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-[-14rem] h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(46,107,255,0.25),transparent)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
          </a>
          <div className="mt-8 flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-electric-400/25 bg-electric-500/10 text-electric-300">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{privacyMeta.title}</h1>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Effective date: <span className="text-slate-200">{privacyMeta.effectiveDate}</span>
          </p>
        </Container>
      </header>

      <div className="bg-white py-16 text-navy-900 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <nav aria-label="Privacy policy sections" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">On this page</p>
              <ol className="mt-4 space-y-1 border-l border-slate-200 text-sm">
                {privacySections.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => jumpTo(s.id)}
                      className="-ml-px border-l border-transparent py-1.5 pl-4 text-left text-slate-600 transition hover:border-electric-500 hover:text-electric-600"
                    >
                      {s.heading}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="max-w-3xl lg:col-span-9">
            {privacySections.map((section, i) => (
              <section
                key={section.id}
                id={`pp-${section.id}`}
                aria-labelledby={`pp-${section.id}-title`}
                className="scroll-mt-28 border-b border-slate-100 py-9 first:pt-0 last:border-b-0"
              >
                <h2 id={`pp-${section.id}-title`} className="flex items-baseline gap-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  <span className="font-mono text-sm font-medium text-electric-600">{String(i + 1).padStart(2, '0')}</span>
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-slate-600">
                  {section.blocks.map((block, j) =>
                    block.list ? (
                      <ul key={j} className="space-y-2.5">
                        {block.list.map((item) => {
                          const [lead, ...rest] = item.split(' — ');
                          return (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" aria-hidden="true" />
                              <span>
                                {rest.length ? (
                                  <>
                                    <strong className="font-semibold text-navy-900">{lead}</strong> — {withEmailLinks(rest.join(' — '))}
                                  </>
                                ) : (
                                  withEmailLinks(item)
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p key={j}>{withEmailLinks(block.p)}</p>
                    ),
                  )}
                </div>
              </section>
            ))}

            <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl bg-navy-900 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-300">Questions about your data?</p>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-electric-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-electric-400"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> {company.email}
              </a>
            </div>
          </article>
        </Container>
      </div>
    </main>
  );
}

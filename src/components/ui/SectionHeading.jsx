import Reveal from './Reveal.jsx';

/**
 * Eyebrow + H2 + lead paragraph. `tone` adapts colours for dark/light sections.
 */
export default function SectionHeading({ id, eyebrow, title, lead, tone = 'dark', align = 'left', className = '' }) {
  const isDark = tone === 'dark';
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start';
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark ? 'text-electric-300' : 'text-electric-600'
          }`}
        >
          <span className={`h-px w-6 ${isDark ? 'bg-electric-400' : 'bg-electric-500'}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          isDark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}

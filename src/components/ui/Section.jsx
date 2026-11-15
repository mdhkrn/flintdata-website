import Container from './Container.jsx';

const tones = {
  dark: 'bg-navy-950 text-white',
  navy: 'bg-navy-900 text-white',
  light: 'bg-white text-navy-900',
  mist: 'bg-slate-50 text-navy-900',
};

/** Page section wrapper: semantic <section>, consistent spacing and tone. */
export default function Section({ id, tone = 'dark', className = '', containerClassName = '', labelledBy, children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative overflow-hidden py-24 sm:py-28 lg:py-32 ${tones[tone]} ${className}`}
    >
      <Container className={`relative ${containerClassName}`}>{children}</Container>
    </section>
  );
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary:
    'bg-electric-500 text-white shadow-[0_8px_30px_-8px_rgba(46,107,255,0.65)] hover:bg-electric-400 hover:shadow-[0_12px_40px_-8px_rgba(46,107,255,0.8)] hover:-translate-y-0.5 focus-visible:ring-offset-navy-950',
  ghost:
    'border border-white/15 bg-white/5 text-white backdrop-blur hover:border-white/30 hover:bg-white/10 focus-visible:ring-offset-navy-950',
  dark: 'bg-navy-900 text-white hover:bg-navy-700 hover:-translate-y-0.5 focus-visible:ring-offset-white',
  outline: 'border border-navy-900/15 text-navy-900 hover:border-electric-500 hover:text-electric-600 focus-visible:ring-offset-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-[0.95rem]',
};

/** Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button({ href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

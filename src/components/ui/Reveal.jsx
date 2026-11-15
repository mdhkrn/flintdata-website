import { useInView } from '../../hooks/useInView.js';

/** Fades and lifts its children into view on scroll. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

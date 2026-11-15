/**
 * Visibly marks business information that still needs to be supplied.
 * Pass text like "[Placeholder: Office address]" — the brackets are stripped for display.
 */
export default function Placeholder({ children, tone = 'dark', className = '' }) {
  const text = String(children).replace(/^\[Placeholder:\s*/i, '').replace(/\]$/, '');
  const styles =
    tone === 'dark'
      ? 'border-amber-300/40 bg-amber-300/10 text-amber-200'
      : 'border-amber-500/50 bg-amber-50 text-amber-800';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border border-dashed px-2 py-0.5 text-[0.8em] font-medium ${styles} ${className}`}
      title="Placeholder — replace with real business information"
    >
      <span className="text-[0.7em] font-bold uppercase tracking-wider opacity-80">Placeholder</span>
      <span>{text}</span>
    </span>
  );
}

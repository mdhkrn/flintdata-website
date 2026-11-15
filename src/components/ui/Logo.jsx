import { useId } from 'react';

/** Flint Data wordmark: a spark-in-a-tile mark + logotype. */
export default function Logo({ className = '', tone = 'dark' }) {
  const gradientId = useId();
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5B8CFF" />
            <stop offset="1" stopColor="#3DD9FF" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill={tone === 'dark' ? '#0D1938' : '#070E24'} />
        <rect x="0.5" y="0.5" width="31" height="31" rx="8.5" fill="none" stroke="rgba(143,180,255,0.25)" />
        <path d="M17.5 5 9 18h6l-1.5 9L23 13.5h-6.2z" fill={`url(#${gradientId})`} />
      </svg>
      <span className={`text-[1.15rem] font-bold tracking-tight ${tone === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        Flint <span className="text-electric-400">Data</span>
      </span>
    </span>
  );
}

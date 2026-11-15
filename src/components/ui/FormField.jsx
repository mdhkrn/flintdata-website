import { CircleAlert } from 'lucide-react';

const inputBase =
  'block w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-navy-900 placeholder:text-slate-400 transition duration-200 focus:outline-none focus:ring-4';
const okState = 'border-slate-200 hover:border-slate-300 focus:border-electric-500 focus:ring-electric-500/15';
const errorState = 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15';

/**
 * Accessible labelled field with inline error + optional hint.
 * `as` may be 'input', 'textarea' or 'select'.
 */
export default function FormField({
  id,
  label,
  as = 'input',
  error,
  hint,
  optional = false,
  required = false,
  className = '',
  children,
  ...props
}) {
  const Control = as;
  const describedBy = [error ? `${id}-error` : null, hint ? `${id}-hint` : null].filter(Boolean).join(' ') || undefined;

  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-navy-900">
          {label}
          {required && (
            <span className="ml-0.5 text-electric-600" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {optional && <span className="text-xs text-slate-500">Optional</span>}
      </div>
      <Control
        id={id}
        name={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        className={`${inputBase} ${error ? errorState : okState} ${as === 'textarea' ? 'min-h-36 resize-y' : ''} ${
          as === 'select' ? 'appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10' : ''
        }`}
        style={
          as === 'select'
            ? {
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
              }
            : undefined
        }
        {...props}
      >
        {children}
      </Control>
      <div className="mt-1.5 flex min-h-5 items-start justify-between gap-3 text-xs">
        {error ? (
          // No role="alert": on submit, focus moves to the first invalid field, which reads its error
          // via aria-describedby; per-field alerts would announce every error at once.
          <p id={`${id}-error`} className="flex items-center gap-1.5 font-medium text-rose-600">
            <CircleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {error}
          </p>
        ) : (
          <span />
        )}
        {hint && (
          <p id={`${id}-hint`} className="shrink-0 text-slate-500">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}

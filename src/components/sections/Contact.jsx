import { useEffect, useRef, useState } from 'react';
import { Send, LoaderCircle, CircleCheck } from 'lucide-react';
import Section from '../ui/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import FormField from '../ui/FormField.jsx';
import Button from '../ui/Button.jsx';
import { company, services, routes } from '../../data/content.js';
import { validateContact, NAME_MAX, EMAIL_MAX, COMPANY_MAX, DETAILS_MAX } from '../../lib/validateContact.js';
import { submitContact } from '../../lib/submitContact.js';

const initialValues = { fullName: '', email: '', company: '', service: '', details: '', website: '' };
const fieldOrder = ['fullName', 'email', 'company', 'service', 'details'];

// Unsent drafts survive navigating away and back within the tab (sessionStorage only,
// never sent anywhere). Storage can be unavailable, so every access is guarded.
const DRAFT_KEY = 'flintdata:contact-draft';
function loadDraft() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(DRAFT_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return initialValues;
    const draft = { ...initialValues };
    fieldOrder.forEach((f) => {
      if (typeof saved[f] === 'string') draft[f] = saved[f];
    });
    return draft;
  } catch {
    return initialValues;
  }
}
function saveDraft(values) {
  try {
    const { website, ...fields } = values;
    if (Object.values(fields).some(Boolean)) sessionStorage.setItem(DRAFT_KEY, JSON.stringify(fields));
    else sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* storage unavailable — drafts just aren't kept */
  }
}
function clearDraft() {
  try {
    sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}

const nextSteps = [
  'We review your requirements and data types.',
  'We schedule a short discovery call with you.',
  'You receive a tailored approach and pilot proposal.',
];

export default function Contact() {
  const [values, setValues] = useState(loadDraft);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const formRef = useRef(null);
  const successHeadingRef = useRef(null);

  useEffect(() => {
    if (status !== 'success') saveDraft(values);
  }, [values, status]);

  // Move focus to the confirmation so keyboard and screen-reader users land on it.
  useEffect(() => {
    if (status === 'success') successHeadingRef.current?.focus();
  }, [status]);

  const update = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validateContact(next));
  };

  const blur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validateContact(values));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const found = validateContact(values);
    setErrors(found);
    setTouched(Object.fromEntries(fieldOrder.map((f) => [f, true])));

    const firstInvalid = fieldOrder.find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const payload = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        service: values.service,
        details: values.details.trim(),
        // Honeypot: sent along so the sheet can flag likely bots instead of the
        // browser silently dropping a request a real person's autofill triggered.
        website: values.website,
        submittedAt: new Date().toISOString(),
      };
      await submitContact(payload);
      setStatus('success');
      clearDraft();
    } catch {
      setStatus('error');
    }
  };

  const err = (f) => (touched[f] ? errors[f] : undefined);
  const firstName = values.fullName.trim().split(/\s+/)[0];

  return (
    <Section id="contact" tone="light" labelledBy="contact-title">
      <div className="bg-grid-light mask-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            tone="light"
            eyebrow="Contact"
            title="Let's build your next dataset together."
            lead="Tell us about your data, your model and your goals. Our team will get back to you to discuss the right approach."
          />

          <Reveal delay={160} className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-navy-900">What happens next</h3>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-slate-600">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_40px_100px_-50px_rgba(7,14,36,0.45)] sm:p-10">
            {status === 'success' ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
                  <CircleCheck className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3
                  ref={successHeadingRef}
                  tabIndex={-1}
                  className="mt-6 text-2xl font-semibold tracking-tight text-navy-900 outline-none"
                >
                  Thank you{firstName ? `, ${firstName}` : ''}!
                </h3>
                <p className="mt-3 max-w-md text-slate-600">We&apos;ve received your request. We will contact you soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-note">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold tracking-tight text-navy-900">Start a project</h3>
                  <p id="form-note" className="mt-1.5 text-sm text-slate-500">
                    Fields marked <span className="text-electric-600">*</span> are required.
                  </p>
                </div>

                <div className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  <FormField
                    id="fullName"
                    label="Full Name"
                    required
                    autoComplete="name"
                    maxLength={NAME_MAX}
                    placeholder="Jane Doe"
                    value={values.fullName}
                    onChange={update}
                    onBlur={blur}
                    error={err('fullName')}
                  />
                  <FormField
                    id="email"
                    label="Email Address"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    maxLength={EMAIL_MAX}
                    placeholder="jane@company.com"
                    value={values.email}
                    onChange={update}
                    onBlur={blur}
                    error={err('email')}
                  />
                  <FormField
                    id="company"
                    label="Company"
                    optional
                    autoComplete="organization"
                    maxLength={COMPANY_MAX}
                    placeholder="Company name"
                    value={values.company}
                    onChange={update}
                    onBlur={blur}
                    error={err('company')}
                  />
                  <FormField
                    id="service"
                    as="select"
                    label="Service Interested In"
                    required
                    value={values.service}
                    onChange={update}
                    onBlur={blur}
                    error={err('service')}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet — need guidance</option>
                  </FormField>
                  <FormField
                    id="details"
                    as="textarea"
                    label="Project Details"
                    required
                    className="sm:col-span-2"
                    rows={5}
                    maxLength={DETAILS_MAX}
                    placeholder="Data type and volume, annotation requirements, timelines, quality expectations…"
                    value={values.details}
                    onChange={update}
                    onBlur={blur}
                    error={err('details')}
                    hint={`${values.details.length}/${DETAILS_MAX}`}
                  />
                </div>

                {/* Honeypot — hidden from people, tempting to bots */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
                </div>

                {status === 'error' && (
                  <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
                    Something went wrong while sending your request. Please try again in a moment, or email us at{' '}
                    <a href={`mailto:${company.email}`} className="font-semibold underline underline-offset-2">
                      {company.email}
                    </a>
                    .
                  </p>
                )}

                <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="max-w-xs text-xs leading-relaxed text-slate-500">
                    We use your details only to respond to this inquiry. See our{' '}
                    <a
                      href={routes.privacy}
                      target="_blank"
                      rel="noopener"
                      className="font-medium text-electric-600 underline-offset-2 hover:underline"
                    >
                      Privacy Policy
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    .
                  </p>
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <>
                        <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Request
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

import { company } from '../data/content.js';

/**
 * Contact form submission.
 *
 * If CONTACT_ENDPOINT is set (your own API, a CRM webhook or a form service),
 * the form posts JSON there. While it is empty, the form prepares an email to
 * contact@flintdata.ai instead, so no inquiry is silently lost.
 */
export const CONTACT_ENDPOINT = ''; // e.g. 'https://api.flintdata.ai/contact'

export function buildMailto(payload) {
  const subject = `Project inquiry — ${payload.service}`;
  const body = [
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || '—'}`,
    `Service: ${payload.service}`,
    '',
    'Project details:',
    payload.details,
  ].join('\n');
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitContact(payload) {
  if (!CONTACT_ENDPOINT) {
    return { ok: true, delivered: false, mailto: buildMailto(payload) };
  }

  const res = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
  return { ok: true, delivered: true };
}

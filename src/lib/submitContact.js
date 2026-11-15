/**
 * [Placeholder] Contact form submission.
 *
 * Set CONTACT_ENDPOINT to your form backend (your own API, a CRM webhook,
 * or a form service). Until it is set, submissions are NOT delivered anywhere —
 * the UI tells the visitor so, rather than pretending the message was sent.
 */
export const CONTACT_ENDPOINT = ''; // e.g. 'https://api.yourdomain.com/contact'

export async function submitContact(payload) {
  if (!CONTACT_ENDPOINT) {
    // Simulate latency so the loading state is visible during development.
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { ok: true, delivered: false };
  }

  const res = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
  return { ok: true, delivered: true };
}

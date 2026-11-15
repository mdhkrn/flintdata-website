/**
 * Contact form submission.
 *
 * Submissions go to the Google Apps Script web app set in VITE_CONTACT_ENDPOINT
 * (see google-apps-script/README.md), which appends a row to the
 * "Flint Business Requests" Google Sheet.
 */
export const CONTACT_ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT || '').trim();

const REQUEST_TIMEOUT_MS = 15000;

/** Resolves when the request is stored in the sheet; throws otherwise. */
export async function submitContact(payload) {
  if (!CONTACT_ENDPOINT) {
    // Never show "thank you" for a request that went nowhere.
    console.error('VITE_CONTACT_ENDPOINT is not set — see google-apps-script/README.md');
    throw new Error('Contact form endpoint is not configured');
  }

  // Form-encoded body keeps this a "simple" CORS request (no preflight),
  // which is what Google Apps Script web apps accept.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      body: new URLSearchParams(payload),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    const data = await res.json().catch(() => null);
    if (!data?.ok) throw new Error(data?.error || 'Unexpected response from the form service');
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Flint Data — contact form → Google Sheet.
 *
 * The website POSTs each "Start a project" submission here; this script
 * validates it and appends one row to the "Flint Business Requests" sheet.
 *
 * Setup (once): see google-apps-script/README.md.
 * After editing this file, redeploy: Deploy → Manage deployments → Edit → Version: New version.
 */

const SHEET_ID = '1UDbrJIzZ5wVly84aRjQUqlQ9RBJqMy3_Sbq2xMdw_M8';
const SHEET_NAME = 'Sheet1';

// Optional: set to an address (e.g. 'contact@flintdata.ai') to get an email for every new request.
// Leave empty to only write to the sheet. Enabling it asks for one extra Gmail permission.
const NOTIFY_EMAIL = '';

const HEADERS = [
  'Received at',
  'Full name',
  'Email',
  'Company',
  'Service',
  'Project details',
  'Submitted at (visitor clock)',
  'Spam check',
];

// Mirrors src/lib/validateContact.js — never trust the browser alone.
const LIMITS = { fullName: 100, email: 254, company: 120, service: 100, details: 2000, submittedAt: 40 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const v = {};
    Object.keys(LIMITS).forEach((k) => {
      v[k] = String(p[k] || '').trim().slice(0, LIMITS[k]);
    });

    if (!v.fullName || !v.email || !v.service || !v.details) {
      return json({ ok: false, error: 'Missing required fields.' });
    }
    if (!EMAIL_RE.test(v.email)) {
      return json({ ok: false, error: 'Invalid email address.' });
    }

    // The site's hidden "website" field is invisible to people. If it has a value the
    // sender is almost certainly a bot, but the row is still kept and flagged rather
    // than dropped, so a real visitor whose browser autofilled it is never lost.
    const spam = String(p.website || '').trim() ? 'Suspected bot (hidden field filled)' : '';

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      getSheet().appendRow([
        new Date(),
        safe(v.fullName),
        safe(v.email),
        safe(v.company),
        safe(v.service),
        safe(v.details),
        safe(v.submittedAt),
        spam,
      ]);
    } finally {
      lock.releaseLock();
    }

    if (NOTIFY_EMAIL && !spam) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        replyTo: v.email,
        subject: `New project inquiry — ${v.service} — ${v.fullName}`,
        body: [
          `Name: ${v.fullName}`,
          `Email: ${v.email}`,
          `Company: ${v.company || '—'}`,
          `Service: ${v.service}`,
          '',
          v.details,
          '',
          `Sheet: https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`,
        ].join('\n'),
      });
    }

    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: 'Server error.' });
  }
}

/** Lets you open the web app URL in a browser to check the deployment is live. */
function doGet() {
  return json({ ok: true, service: 'Flint Data contact form' });
}

/** Run once from the editor to create the header row and grant permissions. */
function setup() {
  getSheet();
}

function getSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

/**
 * Stops spreadsheet formula injection: a value starting with = + - @ would otherwise
 * run as a formula. A leading apostrophe makes Sheets store it as plain text.
 */
function safe(value) {
  const s = String(value || '');
  return /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

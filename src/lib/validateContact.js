const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const DETAILS_MIN = 20;
export const DETAILS_MAX = 2000;

/** Returns an object of { fieldName: errorMessage } for invalid fields. */
export function validateContact(values) {
  const errors = {};
  const name = values.fullName.trim();
  const email = values.email.trim();
  const details = values.details.trim();

  if (!name) errors.fullName = 'Please enter your full name.';
  else if (name.length < 2) errors.fullName = 'Name looks too short.';

  if (!email) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address, e.g. name@company.com.';

  if (values.company.trim().length > 120) errors.company = 'Company name must be under 120 characters.';

  if (!values.service) errors.service = 'Please choose the service you are interested in.';

  if (!details) errors.details = 'Please tell us a little about your project.';
  else if (details.length < DETAILS_MIN) errors.details = `Please add a bit more detail (at least ${DETAILS_MIN} characters).`;
  else if (details.length > DETAILS_MAX) errors.details = `Please keep it under ${DETAILS_MAX} characters.`;

  return errors;
}

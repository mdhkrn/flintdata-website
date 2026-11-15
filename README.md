# Flint Data — Corporate Website

React 19 + Tailwind CSS v4 + Lucide icons, built with Vite.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Structure

```
index.html                     Home page: SEO metadata, Open Graph, JSON-LD
privacy-policy/index.html      Privacy page: its own title, description, canonical
public/                        favicon, apple-touch-icon, og-image, robots.txt, sitemap.xml
google-apps-script/            Contact form → Google Sheet web app (+ setup guide)
.env                           VITE_CONTACT_ENDPOINT (public build-time setting)
src/
  main.jsx                     Home entry (redirects old /#privacy-policy links)
  privacy.jsx                  Privacy page entry
  App.jsx                      Home page composition
  index.css                    Tailwind import, design tokens (@theme), animations
  data/content.js              Site copy, services, company details
  data/privacy.js              Privacy Policy text
  hooks/useInView.js           Scroll-reveal observer
  hooks/useScrollSpy.js        Active nav section + scrolled state
  hooks/useInitialHashScroll.js  Scroll to #section on first load
  lib/validateContact.js       Contact form validation rules
  lib/submitContact.js         Form submission (connect your endpoint here)
  components/ui/               Reusable building blocks
    Button, Container, Section, SectionHeading, Reveal,
    FormField, Logo, SkipLink
  components/pages/PrivacyPolicy.jsx
  components/sections/         Page sections
    Navbar, Hero, HeroVisual, About, Services,
    WhyChoose, Process, Careers, Contact, Footer
```

## Pages

- Home: `/` (sections About, Services, Why Flint Data, Process, Careers, Contact)
- Privacy Policy: `/privacy-policy/`, with its content in `src/data/privacy.js`.
  The organisation responsible for the data comes from `company.legalName` in
  `src/data/content.js`. Have the policy reviewed by legal counsel before launch.

Both are real HTML pages (a Vite multi-page build), so they work on any static
host with no rewrite rules.

## Contact form

Submissions are written to the **Flint Business Requests** Google Sheet by a
Google Apps Script web app. Setup takes about 5 minutes: follow
`google-apps-script/README.md`, then put the web app URL in `.env` as
`VITE_CONTACT_ENDPOINT`.

- The browser validates fields, and the script validates them again, caps their
  length and neutralises spreadsheet formula injection.
- The hidden "website" honeypot field doesn't drop submissions; it flags them in
  the sheet's "Spam check" column.
- Unsent drafts are kept in the tab's `sessionStorage`, so leaving the page
  doesn't lose them.
- After a successful send, the visitor sees "We will contact you soon." If
  `VITE_CONTACT_ENDPOINT` is empty or the request fails, the form shows an error
  with the contact email instead of pretending it worked.

## Design system

Colours are defined as Tailwind theme tokens in `src/index.css`:
`navy-950…500`, `electric-200…700`, and `signal` (cyan accent).
Font: Inter, self-hosted via `@fontsource-variable/inter`. Motion respects `prefers-reduced-motion`.

## Accessibility & performance notes

- Semantic landmarks, one `h1`, ordered `h2`/`h3` headings, skip link
- Keyboard-operable mobile menu (Escape closes)
- Labelled form fields with `aria-invalid`, `aria-describedby` error messages, and focus moved to the first invalid field
- The hero illustration is inline SVG/CSS, so there are no image downloads
- The only external request is the contact form submission; fonts are bundled
- Text colours meet WCAG AA contrast (4.5:1) on their backgrounds

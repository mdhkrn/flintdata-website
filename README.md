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
index.html                     SEO metadata, Open Graph, JSON-LD, font preconnect
src/
  main.jsx                     React entry
  App.jsx                      Page composition + skip link
  index.css                    Tailwind import, design tokens (@theme), animations
  data/content.js              Site copy, services, company details
  data/privacy.js              Privacy Policy text
  hooks/useInView.js           Scroll-reveal observer
  hooks/useScrollSpy.js        Active nav section + scrolled state
  lib/validateContact.js       Contact form validation rules
  lib/submitContact.js         Form submission (connect your endpoint here)
  components/ui/               Reusable building blocks
    Button, Container, Section, SectionHeading, Reveal,
    FormField, Logo
  components/pages/PrivacyPolicy.jsx
  components/sections/         Page sections
    Navbar, Hero, HeroVisual, About, Services,
    WhyChoose, Process, Careers, Contact, Footer
```

## Pages

- Home (`#home`, with sections About, Services, Why Flint Data, Process, Careers, Contact)
- Privacy Policy (`#privacy-policy`), with its content in `src/data/privacy.js`.
  Have it reviewed by legal counsel before launch.

## Contact form

The form validates entries in the browser. When `CONTACT_ENDPOINT` in
`src/lib/submitContact.js` is empty, it prepares a pre-filled email to
contact@flintdata.ai. Set the endpoint to post submissions to your own backend,
CRM or form service instead.

## Design system

Colours are defined as Tailwind theme tokens in `src/index.css`:
`navy-950…500`, `electric-200…700`, and `signal` (cyan accent).
Font: Inter. Motion respects `prefers-reduced-motion`.

## Accessibility & performance notes

- Semantic landmarks, one `h1`, ordered `h2`/`h3` headings, skip link
- Keyboard-operable mobile menu (Escape closes)
- Labelled form fields with `aria-invalid`, `aria-describedby` error messages, and focus moved to the first invalid field
- The hero illustration is inline SVG/CSS, so there are no image downloads
- The only external requests are for fonts, which load with `display=swap`

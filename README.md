# FlintData — Corporate Website

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
  data/content.js              ALL site copy, services, industries, placeholders
  hooks/useInView.js           Scroll-reveal observer
  hooks/useScrollSpy.js        Active nav section + scrolled state
  lib/validateContact.js       Contact form validation rules
  lib/submitContact.js         Form submission (connect your endpoint here)
  components/ui/               Reusable building blocks
    Button, Container, Section, SectionHeading, Reveal,
    FormField, Placeholder, Logo
  components/sections/         Page sections
    Navbar, Hero, HeroVisual, About, Services, Industries,
    WhyChoose, Process, Careers, Contact, Footer
```

## Before launch — replace placeholders

Search the project for `Placeholder` / `[PLACEHOLDER]`. They are shown on the
page with an amber dashed badge so none slip through:

- Email, phone, office address, business hours, careers email (`src/data/content.js`)
- Founded year, headquarters, team size (`About.jsx`)
- Social profile URLs (`socialLinks` in `content.js`)
- Open-positions link, Privacy Policy and Terms links, registered company details
- Canonical URL, `og:url`, `og:image` and JSON-LD `url` (`index.html`)
- **Form backend:** set `CONTACT_ENDPOINT` in `src/lib/submitContact.js`. Until
  then, the form validates and shows a success screen, but nothing is sent anywhere.

No customer names, certifications, statistics or testimonials are included.
Add them only once they are real and approved.

## Design system

Colours are defined as Tailwind theme tokens in `src/index.css`:
`navy-950…500`, `electric-200…700`, and `signal` (cyan accent).
Font: Inter. Motion respects `prefers-reduced-motion`.

## Accessibility & performance notes

- Semantic landmarks, one `h1`, ordered `h2`/`h3` headings, skip link
- Keyboard-operable mobile menu (Escape closes) and an ARIA tablist for Industries (arrow keys / Home / End)
- Labelled form fields with `aria-invalid`, `aria-describedby` error messages, and focus moved to the first invalid field
- The hero illustration is inline SVG/CSS, so there are no image downloads
- The only external requests are for fonts, which load with `display=swap`

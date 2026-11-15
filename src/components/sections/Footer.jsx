import { Linkedin, Twitter, Github, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import Container from '../ui/Container.jsx';
import Logo from '../ui/Logo.jsx';
import Placeholder from '../ui/Placeholder.jsx';
import { company, navLinks, services, socialLinks } from '../../data/content.js';

const socialIcons = { linkedin: Linkedin, x: Twitter, github: Github, youtube: Youtube };

function FooterColumn({ title, children }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 text-slate-400" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Footer
      </h2>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[60rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-electric-500/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {company.description}
            </p>
            <p className="mt-5 text-sm font-medium text-white">{company.tagline}</p>
            <ul className="mt-7 flex gap-2.5" aria-label="Social media">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.id];
                return (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      aria-label={`${s.label} (placeholder link)`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-0.5 hover:border-electric-400 hover:bg-electric-500/10 hover:text-white"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Company">
              <ul className="space-y-3 text-sm">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} className="transition hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title="Services">
              <ul className="space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href="#services" className="transition hover:text-white">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title="Contact">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />
                  <Placeholder>{company.email}</Placeholder>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />
                  <Placeholder>{company.phone}</Placeholder>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />
                  <Placeholder>{company.address}</Placeholder>
                </li>
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-7 text-xs sm:flex-row sm:items-center">
          <p>
            © {year} FlintData. All rights reserved.{' '}
            <Placeholder>Registered company name &amp; number</Placeholder>
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-electric-400 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" /> Back to top
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Container from '../ui/Container.jsx';
import Logo from '../ui/Logo.jsx';
import Button from '../ui/Button.jsx';
import { navLinks } from '../../data/content.js';
import { useScrollSpy, useScrolled } from '../../hooks/useScrollSpy.js';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const scrolled = useScrolled();

  // Lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close the menu if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-white/10 bg-navy-950/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <a href="#home" aria-label="Flint Data — back to top" className="rounded-md">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contact" size="sm" className="max-sm:hidden">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <Container className="pb-6 pt-2">
          <nav aria-label="Mobile">
            <ul className="flex flex-col divide-y divide-white/5 rounded-2xl border border-white/10 bg-navy-900/80">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-5 py-3.5 text-base font-medium transition-colors ${
                      active === link.id ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active === link.id && <span className="h-1.5 w-1.5 rounded-full bg-electric-400" aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="#contact" className="mt-4 w-full" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Container>
      </div>
    </header>
  );
}

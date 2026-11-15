import { useEffect, useState } from 'react';
import Navbar from './components/sections/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Services from './components/sections/Services.jsx';
import WhyChoose from './components/sections/WhyChoose.jsx';
import Process from './components/sections/Process.jsx';
import Careers from './components/sections/Careers.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx';

const PRIVACY_HASH = '#privacy-policy';
const currentView = () => (window.location.hash === PRIVACY_HASH ? 'privacy' : 'home');

function HomePage() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Careers />
      <Contact />
    </main>
  );
}

export default function App() {
  // Lightweight hash routing: #privacy-policy shows the policy page,
  // any other hash (#about, #contact, …) shows the home page at that section.
  const [view, setView] = useState(currentView);

  useEffect(() => {
    const onHashChange = () => setView(currentView());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // 'instant' bypasses the global smooth-scroll so page switches land immediately
    if (view === 'privacy') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const id = window.location.hash.slice(1);
    const target = id && document.getElementById(id);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant' }));
  }, [view]);

  return (
    <>
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main')?.focus();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        Skip to content
      </a>
      <Navbar key={view} />
      {view === 'privacy' ? <PrivacyPolicy /> : <HomePage />}
      <Footer />
    </>
  );
}

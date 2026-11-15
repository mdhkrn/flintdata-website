import SkipLink from './components/ui/SkipLink.jsx';
import Navbar from './components/sections/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Services from './components/sections/Services.jsx';
import WhyChoose from './components/sections/WhyChoose.jsx';
import Process from './components/sections/Process.jsx';
import Careers from './components/sections/Careers.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';
import { useInitialHashScroll } from './hooks/useInitialHashScroll.js';

/** Home page (/). The privacy policy is a separate page: src/privacy.jsx. */
export default function App() {
  useInitialHashScroll();
  return (
    <>
      <SkipLink />
      <Navbar page="home" />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Process />
        <Careers />
        <Contact />
      </main>
      <Footer page="home" />
    </>
  );
}

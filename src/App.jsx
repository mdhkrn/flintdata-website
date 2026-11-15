import Navbar from './components/sections/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Services from './components/sections/Services.jsx';
import Industries from './components/sections/Industries.jsx';
import WhyChoose from './components/sections/WhyChoose.jsx';
import Process from './components/sections/Process.jsx';
import Careers from './components/sections/Careers.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChoose />
        <Process />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

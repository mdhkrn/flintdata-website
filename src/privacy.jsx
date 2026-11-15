import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SkipLink from './components/ui/SkipLink.jsx';
import Navbar from './components/sections/Navbar.jsx';
import Footer from './components/sections/Footer.jsx';
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx';
import { useInitialHashScroll } from './hooks/useInitialHashScroll.js';
import './index.css';

/** Privacy policy page (/privacy-policy/), built from privacy-policy/index.html. */
function PrivacyPage() {
  useInitialHashScroll();
  return (
    <>
      <SkipLink />
      <Navbar page="privacy" />
      <PrivacyPolicy />
      <Footer page="privacy" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { routes } from './data/content.js';
import './index.css';

// The policy used to live at /#privacy-policy; keep old links working.
if (window.location.hash === '#privacy-policy') {
  window.location.replace(routes.privacy);
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

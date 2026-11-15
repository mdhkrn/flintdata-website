import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Static hosts serve /privacy-policy → /privacy-policy/ automatically; mirror that locally.
const redirect = (req, res, next) => {
  if (req.url === '/privacy-policy' || req.url.startsWith('/privacy-policy?') || req.url.startsWith('/privacy-policy#')) {
    res.statusCode = 301;
    res.setHeader('Location', req.url.replace('/privacy-policy', '/privacy-policy/'));
    res.end();
    return;
  }
  next();
};
const trailingSlash = {
  name: 'privacy-trailing-slash',
  // Block bodies on purpose: a function returned from these hooks would be run as a post-hook.
  configureServer(server) {
    server.middlewares.use(redirect);
  },
  configurePreviewServer(server) {
    server.middlewares.use(redirect);
  },
};

export default defineConfig({
  plugins: [trailingSlash, react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssMinify: true,
    // Two real pages, so the privacy policy has its own URL, title and metadata
    // and works on any static host without rewrite rules.
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('privacy-policy/index.html', import.meta.url)),
      },
    },
  },
});

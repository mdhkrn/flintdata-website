import { useEffect } from 'react';

/**
 * Content is rendered by React after the browser has already tried to jump to
 * the URL's #fragment, so arriving at e.g. /#contact needs one manual scroll.
 */
export function useInitialHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id && document.getElementById(id);
    // 'instant' bypasses the global smooth-scroll so the page lands immediately
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant' }));
  }, []);
}

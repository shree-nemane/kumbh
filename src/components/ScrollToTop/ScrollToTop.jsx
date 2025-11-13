import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object from React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // When the 'pathname' (the URL path) changes, this effect runs.
    // window.scrollTo(0, 0) scrolls to the top-left corner of the page.
    window.scrollTo(0, 0);
  }, [pathname]); // Depend on 'pathname' so the effect runs on every route change

  // This component doesn't render anything, it only handles the side effect.
  return null;
};

export default ScrollToTop;
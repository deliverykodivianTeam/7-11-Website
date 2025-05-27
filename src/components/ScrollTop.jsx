// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run effect whenever pathname changes

  return null; // This component doesn't render anything itself
};

export default ScrollTop;
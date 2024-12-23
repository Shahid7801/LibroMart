// components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll smoothly to the top when the location changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Smooth scroll behavior
    });
  }, [location]);

  return null;
};

export default ScrollToTop;

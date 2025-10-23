import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-17 right-4 bg-sand-500 hover:bg-sand-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}
'use client';

import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        background: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '20px',
        zIndex: 1000,
      }}
    >
      ↑
    </button>
  );
}
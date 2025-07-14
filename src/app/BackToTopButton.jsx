'use client';

import { useEffect, useState } from 'react';
import styles from './homebutton.module.scss';

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
      className={styles.HomeButton}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 10px',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill='currentColor'><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
    </button>
  );
}
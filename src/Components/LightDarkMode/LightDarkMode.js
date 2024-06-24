import React, { useState, useEffect } from 'react';
import './LightDarkMode.css';

const LightDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default LightDarkMode;

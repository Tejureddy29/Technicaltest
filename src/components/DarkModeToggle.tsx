// src/components/DarkModeToggle.tsx

import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const toggleDarkMode = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button 
      onClick={toggleDarkMode} 
      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded transition duration-200"
    >
      {isDark ? '🌙 Switch to Light Mode' : '☀️ Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
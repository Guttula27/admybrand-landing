// src/components/ui/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem('theme');

    // Set theme from localStorage or system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = storedTheme === 'dark' || (!storedTheme && prefersDark);

    root.classList.toggle('dark', enabled);
    setIsDark(enabled);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';

    root.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  if (isDark === null) return null; // Don't render until mounted

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded shadow transition"
    >
      Toggle {isDark ? 'Light' : 'Dark'} Mode
    </button>
  );
}

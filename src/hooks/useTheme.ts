'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Get the resolved theme (what's actually applied)
  const getResolvedTheme = (currentTheme: Theme): 'light' | 'dark' => {
    if (currentTheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return currentTheme;
  };

  // Apply theme to document
  const applyTheme = (resolvedTheme: 'light' | 'dark') => {
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  };

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine initial theme
    const initialTheme = storedTheme || 'system';
    const resolvedTheme = initialTheme === 'system' 
      ? (prefersDark ? 'dark' : 'light')
      : initialTheme;
    
    setTheme(initialTheme);
    applyTheme(resolvedTheme);
    setMounted(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const resolvedTheme = getResolvedTheme('system');
        applyTheme(resolvedTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Set theme function
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    
    // Save to localStorage (remove if system)
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', newTheme);
    }
    
    // Apply the resolved theme
    const resolvedTheme = getResolvedTheme(newTheme);
    applyTheme(resolvedTheme);
  };

  // Get current resolved theme
  const resolvedTheme = mounted ? getResolvedTheme(theme) : 'light';

  return {
    theme,
    resolvedTheme,
    setTheme: updateTheme,
    mounted
  };
}

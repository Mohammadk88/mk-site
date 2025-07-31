'use client';

import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun, Monitor } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, mounted } = useTheme();

  // Cycle through themes: light -> dark -> system -> light
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="w-4 h-4" />;
    }
    return resolvedTheme === 'dark' ? 
      <Moon className="w-4 h-4" /> : 
      <Sun className="w-4 h-4" />;
  };

  const getLabel = () => {
    if (theme === 'system') return 'System';
    return theme === 'dark' ? 'Dark' : 'Light';
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button 
        className={`p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 ${className}`}
        disabled
        title="Loading theme toggle"
        aria-label="Loading theme toggle"
      >
        <Sun className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-lg border border-gray-300 dark:border-gray-600 
        bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
        text-gray-700 dark:text-gray-200 transition-all duration-200
        ${className}
      `}
      title={`Current: ${getLabel()}. Click to change theme`}
    >
      {getIcon()}
    </button>
  );
}

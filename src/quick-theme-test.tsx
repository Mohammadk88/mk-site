'use client';

import { ThemeToggle } from './components/ui/ThemeToggle';
import { useTheme } from './hooks/useTheme';

export default function QuickThemeTest() {
  const { theme, resolvedTheme, mounted } = useTheme();

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8 transition-colors duration-200">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          🌙 Dark Mode Test
        </h1>
        
        <div className="mb-6">
          <ThemeToggle />
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg transition-colors duration-200">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Current theme:</strong> {theme}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Resolved theme:</strong> {resolvedTheme}
          </p>
          
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Test input"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              Test Button
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p>• Try changing your system theme preference</p>
          <p>• Refresh the page to test persistence</p>
          <p>• Click the toggle to cycle through themes</p>
        </div>
      </div>
    </div>
  );
}

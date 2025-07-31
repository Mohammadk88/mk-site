'use client';

import { ThemeToggle } from '../../../components/ui/ThemeToggle';
import { useTheme } from '../../../hooks/useTheme';

export default function ThemeTestPage() {
  const { theme, resolvedTheme, mounted } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🌙 Dark Mode Test Page
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Test the dark mode implementation with automatic system detection
          </p>
          
          {/* Theme Toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <ThemeToggle />
            {mounted && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Theme:</span> {theme} | 
                <span className="font-medium"> Resolved:</span> {resolvedTheme}
              </div>
            )}
          </div>
        </div>

        {/* Demo Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-colors duration-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Card Example
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This card adapts to the current theme automatically.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              Button
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-colors duration-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Form Elements
            </h3>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Text input"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <select 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                title="Demo select"
                aria-label="Demo select"
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-colors duration-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Color Examples
            </h3>
            <div className="space-y-2">
              <div className="w-full h-4 bg-red-500 rounded"></div>
              <div className="w-full h-4 bg-green-500 rounded"></div>
              <div className="w-full h-4 bg-blue-500 rounded"></div>
              <div className="w-full h-4 bg-yellow-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            How to test:
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>• Click the theme toggle to cycle through Light → Dark → System</li>
            <li>• Refresh the page to test persistence</li>
            <li>• Change your OS theme preference to test system detection</li>
            <li>• Open dev tools and check localStorage for theme storage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

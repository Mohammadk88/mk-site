# 🌙 Dark Mode Implementation

Your Next.js 14 project now has a complete dark/light mode system with automatic system preference detection and manual toggle functionality.

## ✨ Features

- **Automatic System Detection**: Uses `prefers-color-scheme` to detect user's system preference
- **Manual Toggle**: Three-way toggle (Light → Dark → System → Light)
- **Persistent Storage**: Saves user preference in `localStorage`
- **No Flash**: Theme script prevents flash of incorrect theme on load
- **Smooth Transitions**: All UI elements transition smoothly between themes

## 🚀 How It Works

### 1. System Detection
```typescript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = storedTheme || (prefersDark ? 'dark' : 'light');
document.documentElement.classList.toggle('dark', theme === 'dark');
```

### 2. Theme Persistence
- Manual selections are saved to `localStorage`
- System preference (`'system'`) removes the localStorage entry
- On page load, checks localStorage first, then falls back to system preference

### 3. Live System Changes
The system listens for changes to your OS theme preference and updates automatically when using "System" mode.

## 🎨 Using Dark Mode in Components

### Basic Usage
```tsx
// Background and text colors
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Your content
</div>

// Borders and inputs
<input className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />

// Add smooth transitions
<div className="bg-white dark:bg-gray-900 transition-colors duration-200">
```

### Using the Theme Hook
```tsx
'use client';
import { useTheme } from './hooks/useTheme';

export default function MyComponent() {
  const { theme, resolvedTheme, setTheme, mounted } = useTheme();
  
  if (!mounted) return <div>Loading...</div>; // Prevent hydration mismatch
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
    </div>
  );
}
```

### Theme Toggle Component
```tsx
import { ThemeToggle } from './components/ui/ThemeToggle';

// Basic usage
<ThemeToggle />

// With custom styling
<ThemeToggle className="w-10 h-10" />
```

## 📁 File Structure

```
src/
├── hooks/
│   └── useTheme.ts              # Main theme logic
├── components/
│   ├── ui/
│   │   └── ThemeToggle.tsx      # Theme toggle button
│   ├── theme/
│   │   └── ThemeScript.tsx      # Prevents flash on load
│   └── layout/
│       └── Navigation.tsx       # Updated with theme toggle
└── app/
    ├── layout.tsx               # Root layout with theme setup
    └── [locale]/
        └── theme-demo/
            └── page.tsx         # Demo page
```

## 🔧 Configuration

### Tailwind Config
Your `tailwind.config.js` already has:
```js
module.exports = {
  darkMode: 'class', // ✅ Enabled
  // ... rest of config
}
```

### Root Layout
The layout includes:
```tsx
import { ThemeScript } from '../components/theme/ThemeScript';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <ThemeScript /> {/* Prevents flash */}
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
```

## 🎯 Theme States

The system supports three theme states:

1. **`'light'`** - Forces light mode
2. **`'dark'`** - Forces dark mode  
3. **`'system'`** - Follows OS preference

## 🧪 Testing

1. **Visit your site**: Theme toggle is in the navigation
2. **Demo page**: `/en/theme-demo` for comprehensive testing
3. **Try these scenarios**:
   - Toggle between themes
   - Refresh page (should remember setting)
   - Change OS theme while on "System" mode
   - Check browser localStorage

## 🚨 Common Patterns

### Conditional Styling
```tsx
// Simple conditional classes
<div className="bg-gray-100 dark:bg-gray-800">

// Complex conditionals with theme hook
const { resolvedTheme } = useTheme();
const bgColor = resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white';
```

### Preventing Hydration Issues
```tsx
const { mounted } = useTheme();

if (!mounted) {
  return <div>Loading...</div>; // Show loading state
}

// Render theme-dependent content
```

### Custom Theme-Aware Components
```tsx
'use client';
import { useTheme } from './hooks/useTheme';

export function CustomIcon() {
  const { resolvedTheme } = useTheme();
  
  return (
    <img 
      src={resolvedTheme === 'dark' ? '/icon-dark.svg' : '/icon-light.svg'}
      alt="Icon"
    />
  );
}
```

## ✅ Best Practices

1. **Always use transitions**: `transition-colors duration-200`
2. **Test both themes**: Ensure sufficient contrast
3. **Handle loading states**: Use `mounted` to prevent hydration issues
4. **Use semantic classes**: `dark:bg-gray-800` over `dark:bg-black`
5. **Consider images**: Provide dark/light variants when needed

## 🎉 You're Ready!

Your dark mode system is now fully functional! The theme toggle is integrated into your navigation, and all components can easily support dark mode using Tailwind's `dark:` prefix.

Try visiting your site and clicking the theme toggle in the navigation bar. The theme will persist across page reloads and automatically detect your system preference.

**Demo Page**: Visit `/en/theme-demo` to see all the features in action!

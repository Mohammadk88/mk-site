export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Determine the theme to apply
        const theme = storedTheme || (prefersDark ? 'dark' : 'light');
        const resolvedTheme = storedTheme === 'system' 
          ? (prefersDark ? 'dark' : 'light')
          : theme;
        
        // Apply theme immediately
        document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
      } catch (e) {
        // Fallback to light theme if anything fails
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return (
    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
  );
}

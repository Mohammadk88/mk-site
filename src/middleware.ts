import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar', 'tr'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Always use locale prefix for clarity
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames, exclude admin and api routes
  matcher: ['/((?!api|admin|_next|_vercel|.*\\..*).*)']
};

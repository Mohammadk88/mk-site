import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar', 'tr'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The prefix for locale-specific routes
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames, exclude admin and api routes
  matcher: ['/', '/(ar|tr)/:path*', '/((?!api|admin|_next|_vercel|.*\\..*).*)']
};

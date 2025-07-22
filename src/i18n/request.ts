import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate locale and provide fallback
  const validLocales = ['en', 'ar', 'tr'];
  const validLocale = validLocales.includes(locale as string) ? (locale as string) : 'en';
  
  return {
    locale: validLocale,
    messages: (await import(`../locales/${validLocale}.json`)).default
  };
});

'use client';

import { useEffect } from 'react';

interface LocaleHandlerProps {
  locale: string;
}

export default function LocaleHandler({ locale }: LocaleHandlerProps) {
  useEffect(() => {
    // Update html attributes when locale changes
    const html = document.documentElement;
    html.lang = locale;
    html.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return null;
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "./globals.css";
import "../../styles/fonts.css";
import Navigation from "@/components/layout/Navigation";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import LocaleHandler from "@/components/LocaleHandler";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Validate that the incoming `locale` parameter is valid
  const locales = ['en', 'ar', 'tr'];
  if (!locales.includes(locale)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  // Determine the font class based on locale
  const getFontClass = (locale: string) => {
    switch (locale) {
      case 'ar':
        return 'font-arabic';
      case 'tr':
        return 'font-inter';
      case 'en':
      default:
        return 'font-sans';
    }
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHandler locale={locale} />
      <div className={`relative min-h-screen ${getFontClass(locale)}`}>
        <Navigation />
        <main className="pb-20 md:pb-0">{children}</main>
        <MobileBottomNav />
        <WhatsAppFloat />
      </div>
    </NextIntlClientProvider>
  );
}

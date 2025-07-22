import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Mohammad Ziad Kfelati - Full-Stack Developer & AI Engineer",
  description: "Personal agency-style portfolio showcasing modern web development, AI solutions, and SaaS products. Available for freelance projects.",
  keywords: ["full-stack developer", "AI engineer", "web development", "Next.js", "React", "TypeScript", "freelancer"],
  authors: [{ name: "Mohammad Ziad Kfelati" }],
  creator: "Mohammad Ziad Kfelati",
  publisher: "Mohammad Ziad Kfelati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammad-dev.com",
    title: "Mohammad Ziad Kfelati - Full-Stack Developer & AI Engineer",
    description: "Personal agency-style portfolio showcasing modern web development, AI solutions, and SaaS products.",
    siteName: "Mohammad Ziad Kfelati Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Ziad Kfelati - Full-Stack Developer & AI Engineer",
    description: "Personal agency-style portfolio showcasing modern web development, AI solutions, and SaaS products.",
    creator: "@mohammad_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Validate that the incoming `locale` parameter is valid
  const locales = ['en', 'ar', 'tr'];
  if (!locales.includes(locale)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <div className={`${locale === 'ar' ? cairo.variable : inter.variable} font-sans antialiased`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="relative min-h-screen">
          <Navigation />
          <main>{children}</main>
          <WhatsAppFloat />
        </div>
        {/* LinkedIn Badge Script */}
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </div>
    </NextIntlClientProvider>
  );
}

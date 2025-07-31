import type { Metadata } from "next";
import { Inter, Cairo, Noto_Sans_Arabic } from "next/font/google";
import "./[locale]/globals.css";
import "../styles/fonts.css";
import { ThemeScript } from "../components/theme/ThemeScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-noto-arabic",
  weight: ["300", "400", "500", "600", "700", "800"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${cairo.variable} ${notoSansArabic.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`} suppressHydrationWarning>
        {children}
        {/* LinkedIn Badge Script */}
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </body>
    </html>
  );
}

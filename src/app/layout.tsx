import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./[locale]/globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Moon, 
  Sun,
  Globe,
  Code,
  Briefcase,
  User,
  Phone,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactInfo {
  id: string;
  type: string;
  value: string;
  label: string;
  lang: string;
  isPrimary: boolean;
}

const navigation = [
  { name: 'home', href: '/', icon: Home },
  { name: 'about', href: '/about', icon: User },
  { name: 'projects', href: '/projects', icon: Code },
  { name: 'services', href: '/services', icon: Briefcase },
  { name: 'contact', href: '/contact', icon: Phone },
];

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+905555555555");
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  
  const t = useTranslations('nav');
  const pathname = usePathname();

  // Fetch WhatsApp number from database
  useEffect(() => {
    const fetchWhatsAppNumber = async () => {
      try {
        const response = await fetch('/api/contact-info');
        const contactInfo: ContactInfo[] = await response.json();
        const whatsappContact = contactInfo.find(
          (contact) => contact.type === 'phone' && contact.isPrimary
        );
        if (whatsappContact) {
          setPhoneNumber(whatsappContact.value);
        }
      } catch (error) {
        console.error('Error fetching WhatsApp number:', error);
      }
    };

    fetchWhatsAppNumber();
  }, []);

  // Extract locale from pathname more reliably
  const extractLocaleFromPath = () => {
    // Remove leading slash and split
    const segments = pathname.split('/').filter(Boolean);
    
    // Check if first segment is a valid locale
    if (segments.length > 0 && ['ar', 'tr'].includes(segments[0])) {
      return segments[0];
    }
    
    // Default to English if no locale in path or invalid locale
    return 'en';
  };
  
  const localeFromPath = extractLocaleFromPath();
  
  // Use the locale from path as it's more reliable for the UI display
  const locale = localeFromPath;

  // Generate WhatsApp consultation message based on locale
  const getConsultationMessage = () => {
    const messages = {
      ar: "مرحباً، أنا أطلب استشارة تقنية مجانية لمدة 10 دقائق فقط",
      en: "Hello, I would like to request a free 10-minute technical consultation",
      tr: "Merhaba, 10 dakikalık ücretsiz teknik danışmanlık talep etmek istiyorum"
    };
    return messages[locale as keyof typeof messages] || messages.en;
  };

  const whatsappConsultationUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(getConsultationMessage())}`;

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    if (languageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageMenuOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const changeLanguage = (newLocale: string) => {
    // Close the dropdown first
    setLanguageMenuOpen(false);
    
    // Get the current path without locale
    let pathWithoutLocale = pathname;
    
    // Remove the current locale from the beginning of the path
    const localePattern = new RegExp(`^/(en|ar|tr)`);
    pathWithoutLocale = pathname.replace(localePattern, '') || '/';
    
    // Create the new path with locale prefix (always include locale now)
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
    // Use replace instead of push to avoid history issues and force refresh
    window.location.href = newPath;
  };

  const currentLang = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MK</span>
              </div>
              <span className="hidden sm:block text-xl font-bold gradient-text">
                Mohammad Ziad Kfelati
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{t(item.name)}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center space-x-2 hover:bg-white/10 dark:hover:bg-black/10 rounded-lg px-3 py-2 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-lg">{currentLang?.flag}</span>
                <span className="text-sm font-medium">{currentLang?.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${languageMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              
              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-52 glass-effect rounded-lg shadow-lg border border-white/20 dark:border-gray-700 py-2 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center space-x-3 ${
                          locale === lang.code
                            ? 'bg-primary-500/20 text-primary-600 dark:text-primary-400'
                            : 'hover:bg-white/20 dark:hover:bg-black/20 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {locale === lang.code && (
                          <span className="ml-auto">
                            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            {/* CTA Button */}
            <Link href={whatsappConsultationUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white">
                {t('consultation')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${locale}${item.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{t(item.name)}</span>
                </Link>
              ))}
              
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Language
                  </p>
                  <div className="space-y-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center space-x-3 ${
                          locale === lang.code
                            ? 'bg-primary-500/20 text-primary-600 dark:text-primary-400'
                            : 'hover:bg-white/20 dark:hover:bg-black/20 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {locale === lang.code && (
                          <span className="ml-auto">
                            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="px-3 py-2">
                  <Link href={whatsappConsultationUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white">
                      {t('consultation')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

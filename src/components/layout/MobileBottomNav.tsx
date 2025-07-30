'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  CreditCard, 
  Mail,
  ChevronUp
} from 'lucide-react';
import { useTranslations } from 'next-intl';

// Custom hook for scroll detection
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = prevScrollY > currentScrollY ? 'up' : 'down';
      
      setScrollDirection(direction);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return scrollDirection;
};

// Custom hook for localStorage state
const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(item);
      }
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
};

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const scrollDirection = useScrollDirection();
  const [, setLastActiveTab] = useLocalStorage('lastActiveTab', '/');
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Wait for component to mount to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extract locale from pathname
  const extractLocaleFromPath = () => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['ar', 'tr'].includes(segments[0])) {
      return segments[0];
    }
    return 'en';
  };

  const locale = extractLocaleFromPath();

  // Navigation items
  const navItems: NavItem[] = [
    { 
      name: 'home', 
      href: '/', 
      icon: Home, 
      label: t('home') 
    },
    { 
      name: 'about', 
      href: '/about', 
      icon: User, 
      label: t('about') 
    },
    { 
      name: 'projects', 
      href: '/projects', 
      icon: Briefcase, 
      label: t('projects') 
    },
    { 
      name: 'services', 
      href: '/services', 
      icon: CreditCard, 
      label: t('services') 
    },
    { 
      name: 'contact', 
      href: '/contact', 
      icon: Mail, 
      label: t('contact') 
    },
  ];

  // Check if user is near bottom of page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = 200; // Show when within 200px of bottom
      
      setIsNearBottom(scrollPosition >= documentHeight - threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current active path
  const getCurrentPath = () => {
    let currentPath = pathname;
    // Remove locale prefix for comparison
    const localePattern = new RegExp(`^/(en|ar|tr)`);
    currentPath = pathname.replace(localePattern, '') || '/';
    return currentPath;
  };

  const currentPath = getCurrentPath();

  // Update last active tab when path changes
  useEffect(() => {
    setLastActiveTab(currentPath);
  }, [currentPath, setLastActiveTab]);

  // Check if nav item is active
  const isActive = (href: string) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  };

  // Haptic-like animation trigger
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Add a subtle vibration effect if supported
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Add visual feedback
    const target = e.currentTarget as HTMLElement;
    target.style.transform = 'scale(0.95)';
    setTimeout(() => {
      target.style.transform = 'scale(1)';
    }, 100);
  };

  // Auto-hide behavior: hide when scrolling down, show when scrolling up or near bottom
  const shouldShow = scrollDirection === 'up' || isNearBottom;

  // Don't render on server side to prevent hydration mismatch
  if (!isMounted) {
    return <div className="md:hidden h-20" aria-hidden="true" />;
  }

  return (
    <>
      {/* Add bottom padding to main content to prevent overlap */}
      <div className="md:hidden h-20" aria-hidden="true" />
      
      {/* Mobile Bottom Navigation */}
      <AnimatePresence>
        {shouldShow && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3 
            }}
            className="md:hidden fixed bottom-0 inset-x-0 z-50"
          >
            {/* Background with blur effect */}
            <div className="relative">
              {/* Gradient backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/90 to-transparent dark:from-gray-900/95 dark:via-gray-900/90 backdrop-blur-xl" />
              
              {/* Border gradient */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />
              
              {/* Navigation content */}
              <div className="relative px-4 py-2">
                <div className="flex items-center justify-around">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        className="relative"
                      >
                        <Link
                          href={`/${locale}${item.href}`}
                          onClick={handleNavClick}
                          className="group relative flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300"
                        >
                          {/* Active indicator background */}
                          {active && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          {/* Icon container */}
                          <motion.div
                            className={`relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                              active 
                                ? 'text-primary-600 dark:text-primary-400' 
                                : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                            }`}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Icon 
                              className={`w-5 h-5 transition-all duration-300 ${
                                active ? 'drop-shadow-sm' : ''
                              }`} 
                            />
                            
                            {/* Pulse effect for active state */}
                            {active && (
                              <motion.div
                                className="absolute inset-0 bg-primary-400/30 rounded-lg"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                          </motion.div>
                          
                          {/* Label */}
                          <motion.span
                            className={`text-xs font-medium mt-1 transition-all duration-300 ${
                              active 
                                ? 'text-primary-600 dark:text-primary-400 opacity-100' 
                                : 'text-gray-500 dark:text-gray-400 opacity-75 group-hover:opacity-100'
                            }`}
                            animate={{ 
                              scale: active ? 1.05 : 1,
                              fontWeight: active ? 600 : 500
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          >
                            {item.label}
                          </motion.span>
                          
                          {/* Tap feedback */}
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-primary-500/10"
                            initial={{ scale: 0, opacity: 0 }}
                            whileTap={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.1 }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Scroll to top indicator when near bottom */}
                <AnimatePresence>
                  {isNearBottom && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-12 right-4"
                    >
                      <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-2 bg-primary-500 text-white rounded-full shadow-lg"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <ChevronUp className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

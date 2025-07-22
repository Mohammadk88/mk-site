'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const t = useTranslations('whatsapp');
  const locale = useLocale();

  // Show button after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Show tooltip periodically
  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setInterval(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      }, 10000);

      return () => clearInterval(tooltipTimer);
    }
  }, [isVisible]);

  const getWhatsAppMessage = () => {
    const messages = {
      en: "Hello Mohammad! I'm interested in discussing a project with you. Could we schedule a consultation?",
      ar: "مرحبا محمد! أنا مهتم بمناقشة مشروع معك. هل يمكننا تحديد موعد للاستشارة؟",
      tr: "Merhaba Mohammad! Seninle bir proje hakkında konuşmakla ilgileniyorum. Bir danışmanlık randevusu ayarlayabilir miyiz?"
    };
    return messages[locale as keyof typeof messages] || messages.en;
  };

  const phoneNumber = "+905376061625"; // Updated with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className={`absolute bottom-16 ${locale === 'ar' ? 'left-0' : 'right-0'} mb-2`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-2 max-w-xs">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t('tooltip')}
                </p>
                <button
                  onClick={() => setShowTooltip(false)}
                  title="Close tooltip"
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* Arrow */}
              <div className={`absolute top-full ${locale === 'ar' ? 'left-4' : 'right-4'} w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800`}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900">
          <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </motion.a>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            animate={{
              y: [-20, -40, -20],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: '20%',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

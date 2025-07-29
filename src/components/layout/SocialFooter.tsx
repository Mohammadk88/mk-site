'use client';

import SocialMediaLinks from '@/components/ui/SocialMediaLinks';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface SocialFooterProps {
  className?: string;
}

export default function SocialFooter({ className = '' }: SocialFooterProps) {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const t = useTranslations('footer');

  // Determine if current locale is RTL
  const isRTL = locale === 'ar';

  const getFollowText = () => {
    switch (locale) {
      case 'ar':
        return 'تابعني على وسائل التواصل الاجتماعي';
      case 'tr':
        return 'Sosyal Medyada Takip Edin';
      case 'en':
      default:
        return 'Follow Me on Social Media';
    }
  };

  const getCopyrightText = () => {
    // Use translations if available, fallback to hardcoded text
    try {
      return t('copyright');
    } catch {
      switch (locale) {
        case 'ar':
          return '© 2025 محمد زياد كفيلاتي. جميع الحقوق محفوظة.';
        case 'tr':
          return '© 2025 Mohammad Ziad Kfelati. Tüm hakları saklıdır.';
        case 'en':
        default:
          return '© 2025 Mohammad Ziad Kfelati. All rights reserved.';
      }
    }
  };

  return (
    <footer 
      className={`bg-gray-50 dark:bg-gray-900 footer-section ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-social-container">
          {/* Social Media Title */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
              {getFollowText()}
            </h3>
          </div>

          {/* Social Media Icons - Always centered and properly spaced */}
          <div className="w-full">
            <SocialMediaLinks 
              size="sm" 
              className="social-links-container" 
            />
          </div>

          {/* Copyright Text */}
          <div className="w-full mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              {getCopyrightText()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

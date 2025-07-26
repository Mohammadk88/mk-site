'use client';

import SocialMediaLinks from '@/components/ui/SocialMediaLinks';
import { useParams } from 'next/navigation';

interface SocialFooterProps {
  className?: string;
}

export default function SocialFooter({ className = '' }: SocialFooterProps) {
  const params = useParams();
  const locale = params?.locale as string || 'en';

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
    switch (locale) {
      case 'ar':
        return '© 2025 محمد زياد كفيلاتي. جميع الحقوق محفوظة.';
      case 'tr':
        return '© 2025 Mohammad Ziad Kfelati. Tüm hakları saklıdır.';
      case 'en':
      default:
        return '© 2025 Mohammad Ziad Kfelati. All rights reserved.';
    }
  };

  return (
    <footer className={`bg-gray-50 dark:bg-gray-900 py-3 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {getFollowText()}
          </h3>
          <SocialMediaLinks size="sm" className="gap-6" />
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            {getCopyrightText()}
          </p>
        </div>
      </div>
    </footer>
  );
}

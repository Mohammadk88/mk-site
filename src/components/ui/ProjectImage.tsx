'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  category?: string;
}

const getCategoryFallback = (category?: string): string => {
  const categoryImages: Record<string, string> = {
    web: '/project-defaults/web.svg',
    mobile: '/project-defaults/mobile.svg',
    ai: '/project-defaults/ai.svg',
    erp: '/project-defaults/erp.svg',
    crm: '/project-defaults/crm.svg',
    ecommerce: '/project-defaults/ecommerce.svg',
    restaurant: '/project-defaults/restaurant.svg',
    saas: '/project-defaults/saas.svg',
    startup: '/project-defaults/startup.svg',
  };
  
  return categoryImages[category || ''] || '/default-project.svg';
};

export default function ProjectImage({ 
  src, 
  alt, 
  className = '',
  fallbackSrc,
  category
}: ProjectImageProps) {
  const defaultFallback = fallbackSrc || getCategoryFallback(category);
  const [imgSrc, setImgSrc] = useState(src || defaultFallback);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc !== defaultFallback) {
      setImgSrc(defaultFallback);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={`object-cover transition-all duration-300 ${
            isLoading ? 'blur-sm' : 'blur-0'
          }`}
          onError={handleError}
          onLoad={handleLoad}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={imgSrc.endsWith('.svg')}
          priority={false}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-gray-500 dark:text-gray-400">لا توجد صورة</p>
          </div>
        </div>
      )}
      
      {/* Loading State */}
      {isLoading && imgSrc && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error State Indicator */}
      {hasError && (
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-medium">
            صورة افتراضية
          </span>
        </div>
      )}
    </div>
  );
}

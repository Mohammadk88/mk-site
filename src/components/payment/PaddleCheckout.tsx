'use client';

import { useState, useEffect } from 'react';
import { initializePaddle, Paddle } from '@paddle/paddle-js';

interface PaddleCheckoutProps {
  serviceId: string;
  serviceName: string;
  price: number;
  currency: string;
  serviceType: 'one-time' | 'recurring';
  locale: string;
}

export default function PaddleCheckout({
  serviceId,
  serviceName,
  price,
  currency,
  serviceType,
  locale
}: PaddleCheckoutProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paddle, setPaddle] = useState<Paddle | null>(null);

  useEffect(() => {
    async function initPaddle() {
      try {
        const paddleInstance = await initializePaddle({
          token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_SIDE_TOKEN!,
          environment: 'sandbox' // Change to 'production' for live
        });
        if (paddleInstance) {
          setPaddle(paddleInstance);
        }
      } catch (error) {
        console.error('Failed to initialize Paddle:', error);
        setError('Failed to initialize payment system');
      }
    }

    initPaddle();
  }, []);

  const handleCheckout = async () => {
    if (!paddle) {
      setError('Payment system not ready');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/paddle/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceId,
          serviceName,
          price,
          currency,
          serviceType,
          locale
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Open Paddle checkout
      paddle.Checkout.open({
        items: data.items,
        settings: {
          successUrl: `${window.location.origin}/${locale}/pay/success`,
          theme: 'light',
          locale: locale === 'ar' ? 'en' : locale, // Paddle doesn't support Arabic
        }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}
      
      <button
        onClick={handleCheckout}
        disabled={loading || !paddle}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            {locale === 'ar' ? 'جارٍ التحميل...' : locale === 'tr' ? 'Yükleniyor...' : 'Loading...'}
          </>
        ) : (
          <>
            {locale === 'ar' ? 'ادفع بأمان' : locale === 'tr' ? 'Güvenli Ödeme' : 'Pay Securely'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m9-7a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </>
        )}
      </button>

      <div className="text-center text-sm text-gray-500">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
          </svg>
          {locale === 'ar' ? 'دفع آمن ومحمي' : locale === 'tr' ? 'Güvenli ve Korumalı Ödeme' : 'Secure & Protected Payment'}
        </div>
        <p className="text-xs">
          {locale === 'ar' 
            ? 'مدعوم بواسطة Paddle - معلوماتك محمية بأحدث تقنيات الأمان'
            : locale === 'tr'
            ? 'Paddle tarafından desteklenir - Bilgileriniz en son güvenlik teknolojileriyle korunur'
            : 'Powered by Paddle - Your information is protected with the latest security technology'
          }
        </p>
      </div>
    </div>
  );
}

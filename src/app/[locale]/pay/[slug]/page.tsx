import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import PaddleCheckout from '@/components/payment/PaddleCheckout';

export default async function PaymentPage({
  params
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = await params;
  
  // Parse the slug to determine service type and ID
  const [serviceType, serviceId] = slug.split('-').slice(0, 2);
  
  if (!serviceType || !serviceId) {
    notFound();
  }

  let service;
  let isRecurring = false;

  try {
    if (serviceType === 'one' && slug.startsWith('one-time-')) {
      // One-time service (pricing plan)
      service = await prisma.pricingPlan.findFirst({
        where: { 
          id: serviceId,
          lang: locale 
        }
      });
    } else if (serviceType === 'recurring') {
      // Recurring service
      service = await prisma.recurringService.findFirst({
        where: { 
          id: serviceId,
          lang: locale 
        }
      });
      isRecurring = true;
    }

    if (!service) {
      notFound();
    }
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">
              {locale === 'ar' ? 'صفحة الدفع' : locale === 'tr' ? 'Ödeme Sayfası' : 'Payment Page'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {locale === 'ar' ? 'قريباً - ستكون متاحة' : locale === 'tr' ? 'Yakında - Mevcut olacak' : 'Coming Soon - Will be available'}
            </p>
          </div>

          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{service.name}</h2>
            <div className="text-2xl font-bold text-blue-600 mb-4">
              ${service.price}
              {isRecurring && (
                <span className="text-lg text-gray-500">
                  /{locale === 'ar' ? 'شهر' : locale === 'tr' ? 'ay' : 'month'}
                </span>
              )}
            </div>
            
            <ul className="space-y-2">
              {JSON.parse(service.features).map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                {locale === 'ar' ? 'اختر طريقة الدفع' : locale === 'tr' ? 'Ödeme Yöntemini Seçin' : 'Choose Payment Method'}
              </h3>
              
              {/* Paddle Payment */}
              <PaddleCheckout
                serviceId={serviceId}
                serviceName={service.name}
                price={service.price}
                currency={service.currency}
                serviceType={isRecurring ? 'recurring' : 'one-time'}
                locale={locale}
              />
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">
                {locale === 'ar' ? 'أو' : locale === 'tr' ? 'veya' : 'or'}
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {locale === 'ar' 
                ? 'يمكنك أيضاً التواصل معنا عبر واتساب لإتمام الطلب'
                : locale === 'tr'
                ? 'Siparişi tamamlamak için WhatsApp üzerinden de bizimle iletişime geçebilirsiniz'
                : 'You can also contact us via WhatsApp to complete the order'
              }
            </p>
            
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {locale === 'ar' ? '← العودة للخدمات' : locale === 'tr' ? '← Hizmetlere Dön' : '← Back to Services'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

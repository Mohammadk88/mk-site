import { prisma } from '@/lib/prisma';

export default async function ServicesPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  // Fetch one-time services (pricing plans) from database
  const oneTimeServices = await prisma.pricingPlan.findMany({
    where: { lang: locale },
    orderBy: { price: 'asc' }
  });

  // Fetch recurring services from database
  const recurringServices = await prisma.recurringService.findMany({
    where: { lang: locale },
    orderBy: { price: 'asc' }
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            {locale === 'ar' ? 'الخدمات والأسعار' : locale === 'tr' ? 'Hizmetler ve Fiyatlar' : 'Services & Pricing'}
          </h1>
          <p className="text-xl text-gray-600">
            {locale === 'ar' ? 'اختر الحل المناسب لمشروعك' : 
             locale === 'tr' ? 'Projeniz için uygun çözümü seçin' : 
             'Choose the right solution for your project'}
          </p>
        </div>

        {/* One-time Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'ar' ? 'خدمات لمرة واحدة' : locale === 'tr' ? 'Tek Seferlik Hizmetler' : 'One-time Services'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'ar' ? 'مشاريع مكتملة بسعر ثابت' : 
               locale === 'tr' ? 'Sabit fiyatla tamamlanan projeler' : 
               'Complete projects with fixed pricing'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oneTimeServices.map((service) => (
              <div key={service.id} className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 relative ${
                service.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200 dark:border-gray-700'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {locale === 'ar' ? 'الأكثر شعبية' : locale === 'tr' ? 'En Popüler' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${service.price}
                    <span className="text-lg text-gray-500"> {locale === 'ar' ? 'لمرة واحدة' : locale === 'tr' ? 'tek seferlik' : 'one-time'}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {JSON.parse(service.features).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  service.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}>
                  {locale === 'ar' ? 'ابدأ الآن' : locale === 'tr' ? 'Hemen Başla' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recurring Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'ar' ? 'خدمات متكررة' : locale === 'tr' ? 'Sürekli Hizmetler' : 'Recurring Services'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'ar' ? 'اشتراكات شهرية ودعم مستمر' : 
               locale === 'tr' ? 'Aylık abonelikler ve sürekli destek' : 
               'Monthly subscriptions and ongoing support'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recurringServices.map((service) => (
              <div key={service.id} className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 relative ${
                service.popular ? 'border-green-500 transform scale-105' : 'border-gray-200 dark:border-gray-700'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {locale === 'ar' ? 'الأكثر شعبية' : locale === 'tr' ? 'En Popüler' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${service.price}
                    <span className="text-lg text-gray-500">
                      /{locale === 'ar' ? 'شهر' : locale === 'tr' ? 'ay' : 'month'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {JSON.parse(service.features).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  service.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}>
                  {locale === 'ar' ? 'اشترك الآن' : locale === 'tr' ? 'Hemen Abone Ol' : 'Subscribe Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

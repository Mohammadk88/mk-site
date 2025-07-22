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

  // Fetch WhatsApp number from ContactInfo
  const whatsappContact = await prisma.contactInfo.findFirst({
    where: { 
      type: 'phone',
      isPrimary: true 
    }
  });

  const whatsappNumber = whatsappContact?.value || '905xxxxxxxxx';

  // Helper function to create WhatsApp link
  const createWhatsAppLink = (planName: string, price: number, isRecurring: boolean = false) => {
    const priceText = isRecurring ? 
      (locale === 'ar' ? `$${price}/شهر` : locale === 'tr' ? `$${price}/ay` : `$${price}/month`) :
      `$${price}`;
    
    const message = locale === 'ar' 
      ? `مرحباً، أرغب بالاشتراك في باقة ${planName} بسعر ${priceText}`
      : locale === 'tr'
      ? `Merhaba, ${planName} paketine ${priceText} fiyatıyla abone olmak istiyorum`
      : `Hello, I would like to subscribe to the ${planName} package for ${priceText}`;
    
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

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

                <div className="space-y-3">
                  {/* Primary WhatsApp CTA */}
                  <a
                    href={createWhatsAppLink(service.name, service.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                      service.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                    {locale === 'ar' ? 'تواصل عبر واتساب' : locale === 'tr' ? 'WhatsApp ile İletişim' : 'Contact via WhatsApp'}
                  </a>

                  {/* Secondary Direct Payment Link */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {locale === 'ar' ? 'أو ' : locale === 'tr' ? 'veya ' : 'or '}
                    <a 
                      href={`/pay/one-time-${service.id}`}
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      {locale === 'ar' ? 'ادفع مباشرة الآن' : locale === 'tr' ? 'Şimdi Doğrudan Öde' : 'Pay Directly Now'}
                    </a>
                  </p>
                </div>
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

                <div className="space-y-3">
                  {/* Primary WhatsApp CTA */}
                  <a
                    href={createWhatsAppLink(service.name, service.price, true)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                      service.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                    {locale === 'ar' ? 'تواصل عبر واتساب' : locale === 'tr' ? 'WhatsApp ile İletişim' : 'Contact via WhatsApp'}
                  </a>

                  {/* Secondary Direct Payment Link */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {locale === 'ar' ? 'أو ' : locale === 'tr' ? 'veya ' : 'or '}
                    <a 
                      href={`/pay/recurring-${service.id}`}
                      className="text-green-600 dark:text-green-400 underline hover:text-green-700 dark:hover:text-green-300"
                    >
                      {locale === 'ar' ? 'ادفع مباشرة الآن' : locale === 'tr' ? 'Şimdi Doğrudan Öde' : 'Pay Directly Now'}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

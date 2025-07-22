'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Users, ThumbsUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const currentLocale = window.location.pathname.split('/')[1] || 'en';
    setLocale(currentLocale);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: {
        en: 'CEO at TechStart',
        ar: 'الرئيس التنفيذي في تيك ستارت',
        tr: 'TechStart CEO'
      },
      company: 'TechStart',
      content: {
        en: 'Working with Mohammad was exceptional. His expertise in full-stack development and AI integration transformed our platform completely. Professional, reliable, and delivers beyond expectations.',
        ar: 'العمل مع محمد كان استثنائياً. خبرته في التطوير المتكامل وتكامل الذكاء الاصطناعي حولت منصتنا بالكامل. محترف وموثوق ويقدم أكثر من المتوقع.',
        tr: 'Mohammad ile çalışmak olağanüstüydü. Full-stack geliştirme ve AI entegrasyonundaki uzmanlığı platformumuzu tamamen dönüştürdü. Profesyonel, güvenilir ve beklentilerin ötesinde teslimat yapıyor.'
      },
      rating: 5,
      avatar: '👩‍💼',
      country: '🇺🇸',
      color: 'from-blue-500 to-purple-500',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      id: 2,
      name: 'Ahmed Al-Rashid',
      position: {
        en: 'Product Manager at InnovateHub',
        ar: 'مدير المنتج في إنوفيت هاب',
        tr: 'InnovateHub Ürün Müdürü'
      },
      company: 'InnovateHub',
      content: {
        en: 'Outstanding technical skills and project management. Mohammad delivered our e-commerce platform on time with advanced features. His communication and problem-solving abilities are top-notch.',
        ar: 'مهارات تقنية متميزة وإدارة مشاريع ممتازة. محمد سلم منصة التجارة الإلكترونية في الوقت المحدد مع ميزات متقدمة. مهارات التواصل وحل المشاكل لديه من الطراز الأول.',
        tr: 'Üstün teknik beceriler ve proje yönetimi. Mohammad e-ticaret platformumuzu gelişmiş özelliklerle zamanında teslim etti. İletişim ve problem çözme yetenekleri birinci sınıf.'
      },
      rating: 5,
      avatar: '👨‍💻',
      country: '🇦🇪',
      color: 'from-green-500 to-teal-500',
      bgGradient: 'bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      position: {
        en: 'Design Director at CreativeStudio',
        ar: 'مديرة التصميم في كرييتف ستوديو',
        tr: 'CreativeStudio Tasarım Direktörü'
      },
      company: 'CreativeStudio',
      content: {
        en: 'Mohammad perfectly bridged design and development. His attention to UI/UX details and modern development practices resulted in a stunning, high-performance website.',
        ar: 'محمد ربط بشكل مثالي بين التصميم والتطوير. انتباهه لتفاصيل واجهة المستخدم وممارسات التطوير الحديثة أدى إلى موقع مذهل وعالي الأداء.',
        tr: 'Mohammad tasarım ve geliştirmeyi mükemmel şekilde birleştirdi. UI/UX detaylarına olan dikkatı ve modern geliştirme uygulamaları muhteşem, yüksek performanslı bir web sitesi ile sonuçlandı.'
      },
      rating: 5,
      avatar: '👩‍🎨',
      country: '🇪🇸',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      id: 4,
      name: 'James Wilson',
      position: {
        en: 'Startup Founder',
        ar: 'مؤسس شركة ناشئة',
        tr: 'Startup Kurucusu'
      },
      company: 'NextGen Solutions',
      content: {
        en: 'Mohammad developed our SaaS platform from scratch with AI automation features. His expertise in Laravel and React helped us launch faster than expected. Highly recommended!',
        ar: 'محمد طور منصة SaaS الخاصة بنا من الصفر مع ميزات أتمتة بالذكاء الاصطناعي. خبرته في Laravel و React ساعدتنا على الإطلاق أسرع من المتوقع. أنصح به بشدة!',
        tr: 'Mohammad SaaS platformumuzu sıfırdan AI otomasyon özellikleriyle geliştirdi. Laravel ve React konusundaki uzmanlığı beklenenden daha hızlı başlamamıza yardımcı oldu. Kesinlikle tavsiye ederim!'
      },
      rating: 5,
      avatar: '�‍💼',
      country: '🇬�',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    }
  ];

  const getTitle = () => {
    switch (locale) {
      case 'ar': return 'آراء العملاء';
      case 'tr': return 'Müşteri Görüşleri';
      default: return 'Client Testimonials';
    }
  };

  const getSubtitle = () => {
    switch (locale) {
      case 'ar': return 'لا تأخذ كلامي فقط. إليك ما يقوله بعض عملائي الراضين عن العمل معي';
      case 'tr': return 'Sadece benim sözüme güvenmeyin. İşte memnun müşterilerimin benimle çalışma hakkında söyledikleri';
      default: return "Don't just take my word for it. Here's what satisfied clients say about working with me";
    }
  };

  const getCtaTitle = () => {
    switch (locale) {
      case 'ar': return 'مستعد للعمل معاً؟';
      case 'tr': return 'Birlikte Çalışmaya Hazır mısınız?';
      default: return 'Ready to Work Together?';
    }
  };

  const getCtaSubtitle = () => {
    switch (locale) {
      case 'ar': return 'انضم إلى هؤلاء العملاء الراضين ودعنا ننشئ شيئاً رائعاً معاً';
      case 'tr': return 'Bu memnun müşterilere katılın ve birlikte harika bir şey yaratalım';
      default: return 'Join these satisfied clients and let\'s create something amazing together';
    }
  };

  const getCtaButton = () => {
    switch (locale) {
      case 'ar': return 'ابدأ مشروعك';
      case 'tr': return 'Projenizi Başlatın';
      default: return 'Start Your Project';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{getTitle()}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            {getSubtitle()}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'عميل راضٍ' : locale === 'tr' ? 'Memnun Müşteri' : 'Happy Clients'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5.0</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'متوسط التقييم' : locale === 'tr' ? 'Ortalama Puan' : 'Average Rating'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'مشاريع مكتملة' : locale === 'tr' ? 'Tamamlanan Proje' : 'Project Success'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'الدعم' : locale === 'tr' ? 'Destek' : 'Support'}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`h-full p-8 rounded-2xl ${testimonial.bgGradient} shadow-xl border border-white/20 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <motion.p 
                  className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  &quot;{testimonial.content[locale as keyof typeof testimonial.content]}&quot;
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatar}
                  </div>

                  {/* Name and Position */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <span className="text-xl">{testimonial.country}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.position[locale as keyof typeof testimonial.position]}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-white/20 dark:border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {getCtaTitle()}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              {getCtaSubtitle()}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              <Users className="w-6 h-6" />
              <span>{getCtaButton()}</span>
              <ThumbsUp className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

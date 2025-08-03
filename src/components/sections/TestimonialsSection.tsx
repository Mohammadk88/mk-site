'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Users, ThumbsUp, Award, Briefcase } from 'lucide-react';
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
        en: 'CEO at TechStart Innovation',
        ar: 'الرئيس التنفيذي في تيك ستارت للابتكار',
        tr: 'TechStart Innovation CEO'
      },
      company: 'TechStart',
      content: {
        en: 'Working with Mohammad was truly exceptional. His expertise in full-stack development and AI integration completely transformed our platform. He delivered beyond our expectations with professional excellence and innovative solutions that boosted our efficiency by 75%.',
        ar: 'العمل مع محمد كان استثنائياً حقاً. خبرته في التطوير المتكامل وتكامل الذكاء الاصطناعي حولت منصتنا بالكامل. قدم أكثر من توقعاتنا بتميز مهني وحلول مبتكرة عززت كفاءتنا بنسبة 75%.',
        tr: 'Mohammad ile çalışmak gerçekten olağanüstüydü. Full-stack geliştirme ve AI entegrasyonundaki uzmanlığı platformumuzu tamamen dönüştürdü. Profesyonel mükemmellik ve verimliliğimizi %75 artıran yenilikçi çözümlerle beklentilerimizi aştı.'
      },
      rating: 5,
      avatar: '👩‍💼',
      country: '🇺🇸',
      projectType: {
        en: 'SaaS Platform',
        ar: 'منصة SaaS',
        tr: 'SaaS Platformu'
      },
      color: 'from-blue-500 to-purple-500',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      id: 2,
      name: 'Ahmed Al-Rashid',
      position: {
        en: 'CTO at InnovateHub Middle East',
        ar: 'المدير التقني في إنوفيت هاب الشرق الأوسط',
        tr: 'InnovateHub Ortadoğu CTO'
      },
      company: 'InnovateHub',
      content: {
        en: 'Outstanding technical skills and project management capabilities. Mohammad delivered our complex e-commerce platform ahead of schedule with advanced AI features including Claude and Gemini integration. His communication skills and problem-solving approach are world-class.',
        ar: 'مهارات تقنية متميزة وقدرات إدارة مشاريع رائعة. محمد سلم منصة التجارة الإلكترونية المعقدة قبل الموعد المحدد مع ميزات ذكاء اصطناعي متقدمة تشمل تكامل Claude و Gemini. مهارات التواصل ونهج حل المشاكل لديه على مستوى عالمي.',
        tr: 'Üstün teknik beceriler ve proje yönetimi yetenekleri. Mohammad karmaşık e-ticaret platformumuzu Claude ve Gemini entegrasyonu dahil gelişmiş AI özellikleriyle zamanından önce teslim etti. İletişim becerileri ve problem çözme yaklaşımı dünya standartlarında.'
      },
      rating: 5,
      avatar: '👨‍💻',
      country: '🇦🇪',
      projectType: {
        en: 'E-commerce + AI',
        ar: 'التجارة الإلكترونية + الذكاء الاصطناعي',
        tr: 'E-ticaret + AI'
      },
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      position: {
        en: 'Product Director at FinTech Solutions',
        ar: 'مديرة المنتج في حلول التكنولوجيا المالية',
        tr: 'FinTech Solutions Ürün Direktörü'
      },
      company: 'FinTech Solutions',
      content: {
        en: 'Mohammad\'s expertise in database optimization with MySQL and Vector DB revolutionized our data handling. The N8N automation workflows he implemented saved us 60% processing time. His knowledge of modern technologies like Chroma DB is remarkable.',
        ar: 'خبرة محمد في تحسين قواعد البيانات مع MySQL و Vector DB أحدثت ثورة في التعامل مع البيانات. سير عمل الأتمتة N8N الذي نفذه وفر لنا 60% من وقت المعالجة. معرفته بالتقنيات الحديثة مثل Chroma DB مذهلة.',
        tr: 'Mohammad\'ın MySQL ve Vector DB ile veritabanı optimizasyonundaki uzmanlığı veri işlememizi devrimleştirdi. Uyguladığı N8N otomasyon iş akışları bize %60 işleme süresi kazandırdı. Chroma DB gibi modern teknolojilerdeki bilgisi olağanüstü.'
      },
      rating: 5,
      avatar: '👩‍💼',
      country: '🇪🇸',
      projectType: {
        en: 'FinTech Automation',
        ar: 'أتمتة التكنولوجيا المالية',
        tr: 'FinTech Otomasyonu'
      },
      color: 'from-green-500 to-teal-500',
      bgGradient: 'bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      id: 4,
      name: 'David Chen',
      position: {
        en: 'Startup Founder & Tech Entrepreneur',
        ar: 'مؤسس شركة ناشئة ورائد أعمال تقني',
        tr: 'Startup Kurucusu ve Teknoloji Girişimcisi'
      },
      company: 'MobileFirst',
      content: {
        en: 'The mobile development expertise Mohammad showed with React Native and Flutter was exceptional. He simplified our tech stack by removing unnecessary complexity while maintaining high performance. A true professional who understands modern development.',
        ar: 'خبرة تطوير التطبيقات المحمولة التي أظهرها محمد مع React Native و Flutter كانت استثنائية. بسط مجموعة التقنيات لدينا بإزالة التعقيد غير الضروري مع الحفاظ على الأداء العالي. محترف حقيقي يفهم التطوير الحديث.',
        tr: 'Mohammad\'ın React Native ve Flutter ile gösterdiği mobil geliştirme uzmanlığı olağanüstüydü. Yüksek performansı korurken gereksiz karmaşıklığı kaldırarak teknoloji yığınımızı basitleştirdi. Modern geliştirmeyi anlayan gerçek bir profesyonel.'
      },
      rating: 5,
      avatar: '👨‍💻',
      country: '🇸🇬',
      projectType: {
        en: 'Mobile App',
        ar: 'تطبيق محمول',
        tr: 'Mobil Uygulama'
      },
      color: 'from-orange-500 to-red-500',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      id: 5,
      name: 'Maria Kowalski',
      position: {
        en: 'Digital Transformation Lead',
        ar: 'قائدة التحول الرقمي',
        tr: 'Dijital Dönüşüm Lideri'
      },
      company: 'Enterprise Corp',
      content: {
        en: 'Mohammad led our digital transformation with cutting-edge AI tools including Gemini and Claude APIs. His systematic approach to integrating these technologies into our existing infrastructure was flawless. Results exceeded all our KPIs.',
        ar: 'قاد محمد تحولنا الرقمي بأدوات الذكاء الاصطناعي المتطورة بما في ذلك APIs Gemini و Claude. نهجه المنهجي في دمج هذه التقنيات في البنية التحتية الحالية كان لا تشوبه شائبة. النتائج تجاوزت جميع مؤشرات الأداء الرئيسية.',
        tr: 'Mohammad, Gemini ve Claude API\'leri dahil son teknoloji AI araçlarıyla dijital dönüşümümüzü yönetti. Bu teknolojileri mevcut altyapımıza entegre etmedeki sistematik yaklaşımı kusursuzdu. Sonuçlar tüm KPI\'larımızı aştı.'
      },
      rating: 5,
      avatar: '👩‍💼',
      country: '🇵🇱',
      projectType: {
        en: 'Enterprise AI',
        ar: 'ذكاء اصطناعي مؤسسي',
        tr: 'Kurumsal AI'
      },
      color: 'from-indigo-500 to-purple-500',
      bgGradient: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    },
    {
      id: 6,
      name: 'Yuki Tanaka',
      position: {
        en: 'Head of Technology',
        ar: 'رئيس التكنولوجيا',
        tr: 'Teknoloji Başkanı'
      },
      company: 'InnovateLab',
      content: {
        en: 'The PostgreSQL optimization and data architecture Mohammad implemented improved our query performance by 200%. His knowledge of modern backend technologies and clean coding practices sets him apart. Highly recommended for complex projects.',
        ar: 'تحسين PostgreSQL ومعمارية البيانات التي نفذها محمد حسنت أداء الاستعلام لدينا بنسبة 200%. معرفته بتقنيات الباك إند الحديثة وممارسات الترميز النظيف تميزه. أوصي به بشدة للمشاريع المعقدة.',
        tr: 'Mohammad\'ın uyguladığı PostgreSQL optimizasyonu ve veri mimarisi sorgu performansımızı %200 artırdı. Modern backend teknolojileri ve temiz kodlama uygulamaları konusundaki bilgisi onu farklı kılıyor. Karmaşık projeler için şiddetle tavsiye ederim.'
      },
      rating: 5,
      avatar: '👨‍💻',
      country: '🇯🇵',
      projectType: {
        en: 'Database Optimization',
        ar: 'تحسين قاعدة البيانات',
        tr: 'Veritabanı Optimizasyonu'
      },
      color: 'from-teal-500 to-cyan-500',
      bgGradient: 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20'
    }
  ];

  const getTitle = () => {
    switch (locale) {
      case 'ar': return 'آراء العملاء';
      case 'tr': return 'Müşteri Yorumları';
      default: return 'Client Testimonials';
    }
  };

  const getSubtitle = () => {
    switch (locale) {
      case 'ar': return 'تجارب حقيقية من عملاء راضين حول العالم يشهدون على جودة العمل والنتائج المحققة';
      case 'tr': return 'Dünya çapında memnun müşterilerden gerçek deneyimler, iş kalitesi ve elde edilen sonuçları onaylıyor';
      default: return 'Real experiences from satisfied clients worldwide, testifying to work quality and achieved results';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {getTitle()}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {getSubtitle()}
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'ar' ? 'عميل راضٍ' : locale === 'tr' ? 'Memnun Müşteri' : 'Happy Clients'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'ar' ? 'متوسط التقييم' : locale === 'tr' ? 'Ortalama Puan' : 'Average Rating'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'ar' ? 'معدل النجاح' : locale === 'tr' ? 'Başarı Oranı' : 'Success Rate'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${testimonial.bgGradient} backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center shadow-lg`}>
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                      {testimonial.position[locale as keyof typeof testimonial.position]}
                    </p>
                  </div>
                </div>
                <div className="text-xl">{testimonial.country}</div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Project Type Badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${testimonial.color} text-white text-xs rounded-full font-medium`}>
                  <Briefcase className="w-3 h-3" />
                  {testimonial.projectType[locale as keyof typeof testimonial.projectType]}
                </span>
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                &ldquo;{testimonial.content[locale as keyof typeof testimonial.content]}&rdquo;
              </blockquote>

              {/* Company */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Award className="w-4 h-4" />
                <span>{testimonial.company}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-white/20 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ar' ? 'اجعل مشروعك هو التالي' : 
               locale === 'tr' ? 'Projenizi bir sonraki başarı hikayesi yapın' : 
               'Make Your Project the Next Success Story'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {locale === 'ar' ? 'انضم إلى عملائنا الراضين واختبر التميز في التطوير والنتائج الاستثنائية' : 
               locale === 'tr' ? 'Memnun müşterilerimize katılın ve geliştirmede mükemmellik ile olağanüstü sonuçları deneyimleyin' : 
               'Join our satisfied clients and experience excellence in development with exceptional results'}
            </p>
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                <Users className="w-5 h-5" />
                <span>
                  {locale === 'ar' ? '50+ عميل راضٍ' : 
                   locale === 'tr' ? '50+ memnun müşteri' : 
                   '50+ Happy Clients'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium">
                <ThumbsUp className="w-5 h-5" />
                <span>
                  {locale === 'ar' ? '100% معدل النجاح' : 
                   locale === 'tr' ? '%100 başarı oranı' : 
                   '100% Success Rate'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ExperienceSection() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const currentLocale = window.location.pathname.split('/')[1] || 'en';
    setLocale(currentLocale);
  }, []);

  const experiences = [
    {
      id: 1,
      company: 'Freelance & Consulting',
      position: {
        en: 'ICT Officer & Full-Stack Developer',
        ar: 'مسؤول تقنية المعلومات ومطور ويب متكامل',
        tr: 'BİT Sorumlusu ve Full-Stack Geliştirici'
      },
      period: '2010 - Present',
      location: 'Istanbul, Turkey',
      description: {
        en: 'Leading full-stack development projects, AI-powered SaaS platforms, and automation tools. Specializing in Laravel, NestJS, React, and Next.js with focus on scalable solutions.',
        ar: 'قيادة مشاريع التطوير المتكامل ومنصات SaaS بالذكاء الاصطناعي وأدوات الأتمتة. متخصص في Laravel و NestJS و React و Next.js مع التركيز على الحلول القابلة للتوسع.',
        tr: 'Full-stack geliştirme projelerini, AI destekli SaaS platformlarını ve otomasyon araçlarını yönetiyorum. Laravel, NestJS, React ve Next.js konusunda uzmanlaşmış, ölçeklenebilir çözümlere odaklanıyorum.'
      },
      achievements: [
        {
          en: 'Built 100+ successful web applications',
          ar: 'بناء أكثر من 100 تطبيق ويب ناجح',
          tr: '100+ başarılı web uygulaması geliştirdim'
        },
        {
          en: 'Specialized in AI integration and automation',
          ar: 'متخصص في تكامل الذكاء الاصطناعي والأتمتة',
          tr: 'AI entegrasyonu ve otomasyonda uzmanlaştım'
        },
        {
          en: 'Served 50+ satisfied clients globally',
          ar: 'خدمة أكثر من 50 عميل راضٍ عالمياً',
          tr: '50+ memnun müşteriye dünya çapında hizmet verdim'
        },
        {
          en: 'Expert in SaaS platform architecture',
          ar: 'خبير في معمارية منصات SaaS',
          tr: 'SaaS platform mimarisinde uzmanım'
        }
      ],
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      id: 2,
      company: 'Previous Roles',
      position: {
        en: 'Senior Full-Stack Developer',
        ar: 'مطور ويب متكامل أول',
        tr: 'Kıdemli Full-Stack Geliştirici'
      },
      period: '2015 - 2020',
      location: 'Various Companies',
      description: {
        en: 'Developed enterprise applications, e-commerce platforms, and content management systems. Led development teams and implemented modern development practices.',
        ar: 'تطوير تطبيقات المؤسسات ومنصات التجارة الإلكترونية وأنظمة إدارة المحتوى. قيادة فرق التطوير وتنفيذ ممارسات التطوير الحديثة.',
        tr: 'Kurumsal uygulamalar, e-ticaret platformları ve içerik yönetim sistemleri geliştirdim. Geliştirme ekiplerini yönettim ve modern geliştirme uygulamalarını hayata geçirdim.'
      },
      achievements: [
        {
          en: 'Delivered 50+ enterprise projects',
          ar: 'تسليم أكثر من 50 مشروع مؤسسي',
          tr: '50+ kurumsal proje teslim ettim'
        },
        {
          en: 'Improved system performance by 60%',
          ar: 'تحسين أداء النظام بنسبة 60%',
          tr: 'Sistem performansını %60 artırdım'
        },
        {
          en: 'Led and mentored development teams',
          ar: 'قيادة وتوجيه فرق التطوير',
          tr: 'Geliştirme ekiplerini yönettim ve mentor olarak destekledim'
        }
      ],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      id: 3,
      company: 'Early Career',
      position: {
        en: 'Web Developer',
        ar: 'مطور ويب',
        tr: 'Web Geliştirici'
      },
      period: '2010 - 2015',
      location: 'Syria & Turkey',
      description: {
        en: 'Started career building websites and learning modern web technologies. Gained foundational experience in frontend and backend development.',
        ar: 'بدأت مسيرتي في بناء المواقع وتعلم تقنيات الويب الحديثة. اكتسبت خبرة أساسية في تطوير الواجهة الأمامية والخلفية.',
        tr: 'Kariyerime web siteleri oluşturarak ve modern web teknolojilerini öğrenerek başladım. Frontend ve backend geliştirmede temel deneyim kazandım.'
      },
      achievements: [
        {
          en: 'Built first professional websites',
          ar: 'بناء أول المواقع المهنية',
          tr: 'İlk profesyonel web sitelerimi oluşturdum'
        },
        {
          en: 'Mastered core web technologies',
          ar: 'إتقان تقنيات الويب الأساسية',
          tr: 'Temel web teknolojilerinde uzmanlaştım'
        },
        {
          en: 'Established development methodology',
          ar: 'تأسيس منهجية التطوير',
          tr: 'Geliştirme metodolojisi oluşturdum'
        }
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    }
  ];

  const getTitle = () => {
    switch (locale) {
      case 'ar': return 'خبرتي المهنية';
      case 'tr': return 'Profesyonel Deneyimim';
      default: return 'Professional Experience';
    }
  };

  const getSubtitle = () => {
    switch (locale) {
      case 'ar': return '14+ سنة من الخبرة في تطوير الحلول التقنية المبتكرة';
      case 'tr': return 'Yenilikçi teknoloji çözümleri geliştirmede 14+ yıl deneyim';
      default: return '14+ years of experience building innovative technology solutions';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {getSubtitle()}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} transform -translate-x-2 md:-translate-x-2 border-4 border-white dark:border-slate-800 shadow-lg`}></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className={`${experience.bgColor} rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group`}>
                    {/* Period Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${experience.color} text-white text-sm font-semibold mb-6 shadow-md`}>
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>

                    {/* Company & Position */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {experience.position[locale as keyof typeof experience.position]}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {experience.description[locale as keyof typeof experience.description]}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Award className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {achievement[locale as keyof typeof achievement]}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">14+</div>
            <div className="text-gray-600 dark:text-gray-300">
              {locale === 'ar' ? 'سنوات خبرة' : locale === 'tr' ? 'Yıl Deneyim' : 'Years Experience'}
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300">
              {locale === 'ar' ? 'مشروع منجز' : locale === 'tr' ? 'Tamamlanan Proje' : 'Projects Completed'}
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">
              {locale === 'ar' ? 'عميل راضٍ' : locale === 'tr' ? 'Memnun Müşteri' : 'Happy Clients'}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

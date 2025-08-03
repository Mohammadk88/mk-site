'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp, Code, Database, Zap } from 'lucide-react';
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
      title: {
        en: 'Senior Full-Stack Developer & AI Integration Specialist',
        ar: 'مطور كامل متقدم ومتخصص في تكامل الذكاء الاصطناعي',
        tr: 'Kıdemli Full-Stack Geliştirici ve AI Entegrasyon Uzmanı'
      },
      company: 'FreeLancer',
      period: {
        en: '2020 - Present',
        ar: '2020 - الآن',
        tr: '2020 - Günümüz'
      },
      location: {
        en: 'Istanbul, Turkey',
        ar: 'إسطنبول، تركيا',
        tr: 'İstanbul, Türkiye'
      },
      description: {
        en: 'Leading innovative projects with cutting-edge AI technologies including Claude and Gemini APIs. Specialized in database optimization with MySQL, Vector DB, and Chroma DB. Implementing automation workflows with N8N and delivering high-performance SaaS solutions.',
        ar: 'قيادة مشاريع مبتكرة بتقنيات الذكاء الاصطناعي المتطورة بما في ذلك واجهات Claude و Gemini. متخصص في تحسين قواعد البيانات مع MySQL و Vector DB و Chroma DB. تنفيذ تدفقات العمل الآلية مع N8N وتقديم حلول SaaS عالية الأداء.',
        tr: 'Claude ve Gemini API\'leri dahil son teknoloji AI teknolojileriyle yenilikçi projelere öncülük etme. MySQL, Vector DB ve Chroma DB ile veritabanı optimizasyonunda uzmanlaşma. N8N ile otomasyon iş akışları uygulama ve yüksek performanslı SaaS çözümleri sunma.'
      },
      achievements: [
        {
          en: '75% efficiency improvement in client platforms',
          ar: 'تحسين الكفاءة بنسبة 75% في منصات العملاء',
          tr: 'Müşteri platformlarında %75 verimlilik artışı'
        },
        {
          en: '200% query performance optimization',
          ar: 'تحسين أداء الاستعلام بنسبة 200%',
          tr: '%200 sorgu performansı optimizasyonu'
        },
        {
          en: '60% processing time reduction with N8N automation',
          ar: 'تقليل وقت المعالجة بنسبة 60% مع أتمتة N8N',
          tr: 'N8N otomasyonu ile %60 işleme süresi azaltımı'
        }
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MySQL', 'Vector DB', 'Chroma DB', 'Claude AI', 'Gemini AI', 'N8N'],
      type: 'current',
      color: 'from-blue-500 to-purple-500',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      id: 2,
      title: {
        en: 'ICT Officer & Digital Innovation Lead',
        ar: 'مسؤول تكنولوجيا المعلومات وقائد الابتكار الرقمي',
        tr: 'BİT Sorumlusu ve Dijital İnovasyon Lideri'
      },
      company: 'UNHCR',
      period: {
        en: '2018 - 2020',
        ar: '2018 - 2020',
        tr: '2018 - 2020'
      },
      location: {
        en: 'Istanbul, Turkey',
        ar: 'إسطنبول، تركيا',
        tr: 'İstanbul, Türkiye'
      },
      description: {
        en: 'Transformed organizational digital infrastructure and led technology initiatives for humanitarian operations. Developed comprehensive data management systems and implemented modern web technologies to improve operational efficiency.',
        ar: 'حولت البنية التحتية الرقمية التنظيمية وقدت مبادرات التكنولوجيا للعمليات الإنسانية. طورت أنظمة إدارة البيانات الشاملة ونفذت تقنيات الويب الحديثة لتحسين الكفاءة التشغيلية.',
        tr: 'Organizasyonel dijital altyapıyı dönüştürdüm ve insani yardım operasyonları için teknoloji girişimlerine öncülük ettim. Kapsamlı veri yönetim sistemleri geliştirdim ve operasyonel verimliliği artırmak için modern web teknolojileri uyguladım.'
      },
      achievements: [
        {
          en: 'Digitized 90% of organizational processes',
          ar: 'رقمنة 90% من العمليات التنظيمية',
          tr: 'Organizasyonel süreçlerin %90\'ını dijitalleştirme'
        },
        {
          en: 'Reduced data processing time by 80%',
          ar: 'تقليل وقت معالجة البيانات بنسبة 80%',
          tr: 'Veri işleme süresini %80 azaltma'
        },
        {
          en: 'Led team of 8 developers',
          ar: 'قاد فريقاً من 8 مطورين',
          tr: '8 geliştiriciden oluşan takıma liderlik etme'
        }
      ],
      technologies: ['React', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3'],
      type: 'past',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      id: 3,
      title: {
        en: 'Lead Web Developer & System Architect',
        ar: 'مطور ويب رئيسي ومهندس أنظمة',
        tr: 'Baş Web Geliştirici ve Sistem Mimarı'
      },
      company: 'IBC Computer Services',
      period: {
        en: '2015 - 2018',
        ar: '2015 - 2018',
        tr: '2015 - 2018'
      },
      location: {
        en: 'Damascus, Syria',
        ar: 'دمشق، سوريا',
        tr: 'Şam, Suriye'
      },
      description: {
        en: 'Architected and developed enterprise-level web applications for diverse industries. Specialized in React Native mobile development and implemented robust backend solutions with clean coding practices.',
        ar: 'صممت وطورت تطبيقات ويب على مستوى المؤسسات لصناعات متنوعة. تخصصت في تطوير التطبيقات المحمولة بـ React Native ونفذت حلول باك إند قوية مع ممارسات ترميز نظيفة.',
        tr: 'Çeşitli endüstriler için kurumsal seviye web uygulamaları tasarladım ve geliştirdim. React Native mobil geliştirmede uzmanlaştım ve temiz kodlama uygulamalarıyla sağlam backend çözümleri uyguladım.'
      },
      achievements: [
        {
          en: 'Delivered 50+ successful projects',
          ar: 'سلمت أكثر من 50 مشروعاً ناجحاً',
          tr: '50+ başarılı proje teslim etme'
        },
        {
          en: 'Improved system performance by 150%',
          ar: 'تحسين أداء النظام بنسبة 150%',
          tr: 'Sistem performansını %150 artırma'
        },
        {
          en: 'Mentored 12 junior developers',
          ar: 'وجهت 12 مطوراً مبتدئاً',
          tr: '12 junior geliştiriciye mentorluk'
        }
      ],
      technologies: ['React Native', 'Flutter', 'PHP', 'Laravel', 'MySQL', 'JavaScript', 'CSS3', 'Bootstrap'],
      type: 'past',
      color: 'from-green-500 to-teal-500',
      bgGradient: 'bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      id: 4,
      title: {
        en: 'Full-Stack Developer & UI/UX Specialist',
        ar: 'مطور كامل ومتخصص في واجهة المستخدم وتجربة المستخدم',
        tr: 'Full-Stack Geliştirici ve UI/UX Uzmanı'
      },
      company: 'Various Agencies',
      period: {
        en: '2010 - 2015',
        ar: '2010 - 2015',
        tr: '2010 - 2015'
      },
      location: {
        en: 'Damascus, Syria',
        ar: 'دمشق، سوريا',
        tr: 'Şam, Suriye'
      },
      description: {
        en: 'Foundational years focusing on mastering web development fundamentals and building diverse client solutions. Developed expertise in frontend technologies and established strong foundation in backend development.',
        ar: 'سنوات تأسيسية تركز على إتقان أساسيات تطوير الويب وبناء حلول متنوعة للعملاء. طورت خبرة في تقنيات الواجهة الأمامية وأسست أساساً قوياً في تطوير الباك إند.',
        tr: 'Web geliştirme temellerini ustalaşmaya ve çeşitli müşteri çözümleri oluşturmaya odaklanan kurucu yıllar. Frontend teknolojilerinde uzmanlık geliştirdim ve backend geliştirmede güçlü bir temel oluşturdum.'
      },
      achievements: [
        {
          en: 'Built foundational expertise in 10+ technologies',
          ar: 'بنيت خبرة أساسية في أكثر من 10 تقنيات',
          tr: '10+ teknolojide temel uzmanlık oluşturma'
        },
        {
          en: 'Completed 30+ client projects',
          ar: 'أنجزت أكثر من 30 مشروعاً للعملاء',
          tr: '30+ müşteri projesi tamamlama'
        },
        {
          en: 'Achieved 95% client satisfaction rate',
          ar: 'حققت معدل رضا العملاء 95%',
          tr: '%95 müşteri memnuniyet oranı elde etme'
        }
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'Photoshop', 'Bootstrap'],
      type: 'foundation',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    }
  ];

  const getTitle = () => {
    switch (locale) {
      case 'ar': return 'الخبرة المهنية';
      case 'tr': return 'Profesyonel Deneyim';
      default: return 'Professional Experience';
    }
  };

  const getSubtitle = () => {
    switch (locale) {
      case 'ar': return 'رحلة مهنية متميزة بأكثر من 14 عاماً من الخبرة في تطوير حلول تقنية مبتكرة ومتطورة';
      case 'tr': return 'Yenilikçi ve ileri teknoloji çözümleri geliştirmede 14+ yıllık deneyimle olağanüstü bir profesyonel yolculuk';
      default: return 'An exceptional professional journey with 14+ years of experience developing innovative and advanced technology solutions';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
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
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:ml-20 ${exp.bgGradient} backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Timeline node */}
                <div className={`absolute -left-[4.5rem] top-8 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:flex items-center justify-center`}>
                  {exp.type === 'current' && <Zap className="w-4 h-4 text-white" />}
                  {exp.type === 'past' && <Award className="w-4 h-4 text-white" />}
                  {exp.type === 'foundation' && <Code className="w-4 h-4 text-white" />}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title[locale as keyof typeof exp.title]}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {exp.period[locale as keyof typeof exp.period]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">
                          {exp.location[locale as keyof typeof exp.location]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description[locale as keyof typeof exp.description]}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {locale === 'ar' ? 'الإنجازات الرئيسية' : 
                       locale === 'tr' ? 'Temel Başarılar' : 
                       'Key Achievements'}
                    </h4>
                    <div className="grid gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full flex-shrink-0`}></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {achievement[locale as keyof typeof achievement]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      {locale === 'ar' ? 'التقنيات المستخدمة' : 
                       locale === 'tr' ? 'Kullanılan Teknolojiler' : 
                       'Technologies Used'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                        >
                          {tech}
                        </span>
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
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-white/20 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {locale === 'ar' ? 'ملخص الخبرة المهنية' : 
               locale === 'tr' ? 'Profesyonel Deneyim Özeti' : 
               'Professional Experience Summary'}
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">14+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {locale === 'ar' ? 'سنوات خبرة' : locale === 'tr' ? 'Yıl Deneyim' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {locale === 'ar' ? 'مشروع منجز' : locale === 'tr' ? 'Tamamlanan Proje' : 'Projects Completed'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {locale === 'ar' ? 'عميل راضٍ' : locale === 'tr' ? 'Memnun Müşteri' : 'Happy Clients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {locale === 'ar' ? 'تقنية متقنة' : locale === 'tr' ? 'Teknoloji Uzmanlığı' : 'Technologies Mastered'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

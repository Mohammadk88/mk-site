'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Zap, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const currentLocale = window.location.pathname.split('/')[1] || 'en';
    setLocale(currentLocale);
  }, []);

  const skills = [
    {
      category: {
        en: 'Frontend Development',
        ar: 'تطوير الواجهة الأمامية',
        tr: 'Frontend Geliştirme'
      },
      icon: Code,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      category: {
        en: 'Backend Development',
        ar: 'تطوير الواجهة الخلفية',
        tr: 'Backend Geliştirme'
      },
      icon: Database,
      skills: ['Laravel', 'NestJS', 'Node.js', 'PostgreSQL', 'MySQL', 'Vector DB', 'Chroma DB', 'Redis'],
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      category: {
        en: 'Mobile Development',
        ar: 'تطوير التطبيقات المحمولة',
        tr: 'Mobil Geliştirme'
      },
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'Ionic'],
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      category: {
        en: 'AI & Automation',
        ar: 'الذكاء الاصطناعي والأتمتة',
        tr: 'AI ve Otomasyon'
      },
      icon: Brain,
      skills: ['OpenAI', 'ChatGPT API', 'N8N', 'Claude', 'Gemini', 'Automation', 'Python', 'AI Tools'],
      color: 'from-indigo-500 to-purple-500',
      bgGradient: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    },
    {
      category: {
        en: 'Cloud & DevOps',
        ar: 'الحوسبة السحابية والعمليات',
        tr: 'Cloud ve DevOps'
      },
      icon: Globe,
      skills: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'DigitalOcean'],
      color: 'from-orange-500 to-red-500',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      category: {
        en: 'Design & UI/UX',
        ar: 'التصميم وتجربة المستخدم',
        tr: 'Tasarım ve UI/UX'
      },
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX Design', 'Prototyping', 'Wireframing'],
      color: 'from-yellow-500 to-orange-500',
      bgGradient: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    }
  ];

  const getTitle = () => {
    switch (locale) {
      case 'ar': return 'مهاراتي التقنية';
      case 'tr': return 'Teknik Becerilerim';
      default: return 'Technical Skills';
    }
  };

  const getSubtitle = () => {
    switch (locale) {
      case 'ar': return 'أعمل مع مجموعة متنوعة من التقنيات والأدوات الحديثة لتحويل الأفكار إلى واقع رقمي مبتكر';
      case 'tr': return 'Fikirleri yenilikçi dijital gerçekliklere dönüştürmek için çeşitli modern teknolojiler ve araçlarla çalışıyorum';
      default: return 'I work with diverse modern technologies and tools to transform ideas into innovative digital realities';
    }
  };

  const getExperienceText = () => {
    switch (locale) {
      case 'ar': return 'دائماً أتعلم تقنيات جديدة';
      case 'tr': return 'Her zaman yeni teknolojiler öğreniyorum';
      default: return 'Always learning new technologies';
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`h-full p-8 rounded-2xl ${skillGroup.bgGradient} shadow-xl border border-white/20 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skillGroup.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Category */}
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skillGroup.category[locale as keyof typeof skillGroup.category]}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillGroup.color} shadow-sm`} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`h-1.5 rounded-full bg-gradient-to-r ${skillGroup.color} mt-8 shadow-sm`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'تقنية مختلفة' : locale === 'tr' ? 'Farklı Teknoloji' : 'Technologies'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">14+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'سنة خبرة' : locale === 'tr' ? 'Yıl Deneyim' : 'Years Experience'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'مشروع مكتمل' : locale === 'tr' ? 'Tamamlanan Proje' : 'Projects'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'التعلم المستمر' : locale === 'tr' ? 'Sürekli Öğrenme' : 'Learning'}
            </div>
          </div>
        </motion.div>

        {/* Learning Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20 backdrop-blur-sm">
            <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-blue-600 dark:text-blue-400 text-lg">{getExperienceText()}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Zap, Brain, Star, TrendingUp, Award, CheckCircle, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function SkillsSection() {
  const [locale, setLocale] = useState('en');
  const ref = useRef(null);
  useInView(ref, { once: true, margin: "-100px" });

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
      proficiency: 95,
      projects: 45,
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      hoverGradient: 'hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-800/30 dark:hover:to-cyan-800/30',
      shadowColor: 'shadow-blue-500/25'
    },
    {
      category: {
        en: 'Backend Development',
        ar: 'تطوير الواجهة الخلفية',
        tr: 'Backend Geliştirme'
      },
      icon: Database,
      skills: ['Laravel', 'NestJS', 'Node.js', 'PostgreSQL', 'MySQL', 'Vector DB', 'Chroma DB', 'Redis'],
      proficiency: 92,
      projects: 38,
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      hoverGradient: 'hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-800/30 dark:hover:to-emerald-800/30',
      shadowColor: 'shadow-green-500/25'
    },
    {
      category: {
        en: 'Mobile Development',
        ar: 'تطوير التطبيقات المحمولة',
        tr: 'Mobil Geliştirme'
      },
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'Ionic'],
      proficiency: 88,
      projects: 25,
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      hoverGradient: 'hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/30 dark:hover:to-pink-800/30',
      shadowColor: 'shadow-purple-500/25'
    },
    {
      category: {
        en: 'AI & Automation',
        ar: 'الذكاء الاصطناعي والأتمتة',
        tr: 'AI ve Otomasyon'
      },
      icon: Brain,
      skills: ['OpenAI', 'ChatGPT API', 'N8N', 'Claude', 'Gemini', 'Automation', 'Python', 'AI Tools'],
      proficiency: 90,
      projects: 32,
      color: 'from-indigo-500 to-purple-500',
      bgGradient: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      hoverGradient: 'hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-800/30 dark:hover:to-purple-800/30',
      shadowColor: 'shadow-indigo-500/25'
    },
    {
      category: {
        en: 'Cloud & DevOps',
        ar: 'الحوسبة السحابية والعمليات',
        tr: 'Cloud ve DevOps'
      },
      icon: Globe,
      skills: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'DigitalOcean'],
      proficiency: 85,
      projects: 28,
      color: 'from-orange-500 to-red-500',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      hoverGradient: 'hover:from-orange-100 hover:to-red-100 dark:hover:from-orange-800/30 dark:hover:to-red-800/30',
      shadowColor: 'shadow-orange-500/25'
    },
    {
      category: {
        en: 'Design & UI/UX',
        ar: 'التصميم وتجربة المستخدم',
        tr: 'Tasarım ve UI/UX'
      },
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX Design', 'Prototyping', 'Wireframing'],
      proficiency: 87,
      projects: 42,
      color: 'from-yellow-500 to-orange-500',
      bgGradient: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      hoverGradient: 'hover:from-yellow-100 hover:to-orange-100 dark:hover:from-yellow-800/30 dark:hover:to-orange-800/30',
      shadowColor: 'shadow-yellow-500/25'
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
      case 'ar': return 'رحلة متميزة عبر التقنيات الحديثة والأدوات المتطورة التي تحول الأفكار إلى واقع رقمي مبتكر ومؤثر';
      case 'tr': return 'Fikirleri yenilikçi ve etkili dijital gerçekliklere dönüştüren modern teknolojiler ve gelişmiş araçlar arasında olağanüstü bir yolculuk';
      default: return 'An exceptional journey through modern technologies and advanced tools that transform ideas into innovative and impactful digital realities';
    }
  };

  const getProficiencyLabel = () => {
    switch (locale) {
      case 'ar': return 'مستوى الإتقان';
      case 'tr': return 'Yeterlik Seviyesi';
      default: return 'Proficiency Level';
    }
  };

  const getProjectsLabel = () => {
    switch (locale) {
      case 'ar': return 'مشروع';
      case 'tr': return 'Proje';
      default: return 'Projects';
    }
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-green-200/30 to-cyan-200/30 dark:from-green-800/20 dark:to-cyan-800/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-800/15 dark:to-pink-800/15 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30"
              />
            </div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
              {getTitle()}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed"
          >
            {getSubtitle()}
          </motion.p>

          {/* Skills Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center items-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">6</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'ar' ? 'مجال تخصص' : locale === 'tr' ? 'Uzmanlık Alanı' : 'Specializations'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'ar' ? 'تقنية' : locale === 'tr' ? 'Teknoloji' : 'Technologies'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">200+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {locale === 'ar' ? 'مشروع' : locale === 'tr' ? 'Proje' : 'Projects'}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category.en}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${skillGroup.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className={`relative h-full p-8 rounded-3xl ${skillGroup.bgGradient} ${skillGroup.hoverGradient} border border-white/20 dark:border-slate-700/50 backdrop-blur-sm shadow-xl ${skillGroup.shadowColor} hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-white/40`}>
                  
                  {/* Floating Icon with Animation */}
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${skillGroup.color} p-4 mb-6 shadow-xl group-hover:shadow-2xl`}
                  >
                    <IconComponent className="w-full h-full text-white drop-shadow-lg" />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className={`absolute -inset-1 bg-gradient-to-r ${skillGroup.color} rounded-2xl blur-md opacity-50`}
                    />
                  </motion.div>

                  {/* Category Title */}
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {skillGroup.category[locale as keyof typeof skillGroup.category]}
                  </h3>

                  {/* Proficiency Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {getProficiencyLabel()}
                      </span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                        {skillGroup.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skillGroup.proficiency}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full shadow-lg relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ x: ["0%", "100%", "0%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-0 left-0 h-full w-6 bg-white/30 skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Count */}
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {skillGroup.projects}+ {getProjectsLabel()}
                    </span>
                  </div>

                  {/* Enhanced Skills List */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (skillIndex * 0.05),
                          type: "spring"
                        }}
                        viewport={{ once: true }}
                        className="group/skill relative"
                      >
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 group-hover/skill:scale-105">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Expertise Level Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: (index * 0.1) + (i * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <Star 
                            className={`w-4 h-4 ${
                              i < Math.floor(skillGroup.proficiency / 20) 
                                ? `text-yellow-400 fill-current` 
                                : 'text-gray-300 dark:text-gray-600'
                            }`} 
                          />
                        </motion.div>
                      ))}
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12 border border-white/20 dark:border-gray-700/50 backdrop-blur-sm shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {locale === 'ar' ? 'إحصائيات الخبرة' : 
                 locale === 'tr' ? 'Deneyim İstatistikleri' : 
                 'Experience Statistics'}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { 
                  value: '50+', 
                  label: locale === 'ar' ? 'تقنية متقنة' : locale === 'tr' ? 'Uzman Teknoloji' : 'Technologies Mastered',
                  icon: Code,
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  value: '14+', 
                  label: locale === 'ar' ? 'سنة خبرة' : locale === 'tr' ? 'Yıl Deneyim' : 'Years Experience',
                  icon: TrendingUp,
                  color: 'from-green-500 to-emerald-500'
                },
                { 
                  value: '200+', 
                  label: locale === 'ar' ? 'مشروع مكتمل' : locale === 'tr' ? 'Tamamlanan Proje' : 'Projects Completed',
                  icon: Award,
                  color: 'from-purple-500 to-pink-500'
                },
                { 
                  value: '24/7', 
                  label: locale === 'ar' ? 'التعلم المستمر' : locale === 'tr' ? 'Sürekli Öğrenme' : 'Continuous Learning',
                  icon: Zap,
                  color: 'from-orange-500 to-red-500'
                }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} p-3 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Learning Journey Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-blue-500/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {locale === 'ar' ? 'دائماً أتعلم تقنيات جديدة ومتطورة' : 
               locale === 'tr' ? 'Her zaman yeni ve gelişmiş teknolojiler öğreniyorum' : 
               'Always learning new and advanced technologies'}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

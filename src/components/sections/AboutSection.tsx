'use client';

import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PersonalInfo {
  nameEn: string;
  nameAr: string;
  nameTr: string;
  titleEn: string;
  titleAr: string;
  titleTr: string;
  bioEn: string;
  bioAr: string;
  bioTr: string;
  location: string;
  yearsExp: number;
}

interface ContactInfo {
  type: string;
  value: string;
  label: string;
  lang: string;
  isPrimary: boolean;
}

export default function AboutSection() {
  const t = useTranslations('about');
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Get locale from URL or browser
    const currentLocale = window.location.pathname.split('/')[1] || 'en';
    setLocale(currentLocale);

    // Fetch personal info
    fetch('/api/personal-info')
      .then(res => res.json())
      .then(data => setPersonalInfo(data))
      .catch(console.error);

    // Fetch contact info
    fetch(`/api/contact-info?lang=${currentLocale}`)
      .then(res => res.json())
      .then(data => setContactInfo(data))
      .catch(console.error);
  }, []);

  const getName = () => {
    if (!personalInfo) return 'Mohammad Kfelati';
    switch (locale) {
      case 'ar': return personalInfo.nameAr;
      case 'tr': return personalInfo.nameTr;
      default: return personalInfo.nameEn;
    }
  };

  const getTitle = () => {
    if (!personalInfo) return 'ICT Officer | Full-Stack Developer | AI-Powered SaaS Architect';
    switch (locale) {
      case 'ar': return personalInfo.titleAr;
      case 'tr': return personalInfo.titleTr;
      default: return personalInfo.titleEn;
    }
  };

  const getBio = () => {
    if (!personalInfo) return "Passionate Syrian developer with 14+ years of experience building full-stack web applications, AI-powered SaaS platforms, and automation tools.";
    switch (locale) {
      case 'ar': return personalInfo.bioAr;
      case 'tr': return personalInfo.bioTr;
      default: return personalInfo.bioEn;
    }
  };

  const getEmail = () => {
    const emailInfo = contactInfo.find(info => info.type === 'email' && info.isPrimary);
    return emailInfo?.value || 'mohammad.kfelati@gmail.com';
  };

  const getLocation = () => {
    const locationInfo = contactInfo.find(info => info.type === 'address' && info.isPrimary);
    return locationInfo?.value || personalInfo?.location || 'Istanbul, Turkey';
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-2xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0&appId=2047229625785909"></script>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('title')}{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{getName()}</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {getTitle()}
              </motion.p>

              <motion.p 
                className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {getBio()}
              </motion.p>
            </div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100+</div>
                <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">{t('projects')}</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{personalInfo?.yearsExp || 14}+</div>
                <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">{t('experience')}</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">50+</div>
                <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">{t('clients')}</div>
              </div>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{getEmail()}</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{getLocation()}</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {locale === 'ar' ? 'متاح لمشاريع جديدة' : locale === 'tr' ? 'Yeni projeler için müsait' : 'Available for new projects'}
                </span>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="pt-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {/* Call to Action Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {locale === 'ar' ? 'جاهز لبدء مشروعك التالي؟' : 
                         locale === 'tr' ? 'Bir sonraki projenizi başlatmaya hazır mısınız?' : 
                         'Ready to start your next project?'}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {locale === 'ar' ? 'دعنا نناقش أفكارك ونحولها إلى حلول رقمية مبتكرة' : 
                         locale === 'tr' ? 'Fikirlerinizi tartışalım ve bunları yenilikçi dijital çözümlere dönüştürelim' : 
                         'Let\'s discuss your ideas and turn them into innovative digital solutions'}
                      </p>
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
                      onClick={() => {
                        const whatsappNumber = contactInfo.find(c => c.type === 'phone')?.value || '';
                        const message = locale === 'ar' ? 'مرحباً! أريد بدء مشروع جديد معك. هل يمكننا مناقشة التفاصيل؟' :
                                      locale === 'tr' ? 'Merhaba! Sizinle yeni bir proje başlatmak istiyorum. Detayları konuşabilir miyiz?' :
                                      'Hello! I would like to start a new project with you. Can we discuss the details?';
                        const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');
                        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      <span className="mr-2">💬</span>
                      {locale === 'ar' ? 'ابدأ مشروعك' : 
                       locale === 'tr' ? 'Projenizi Başlatın' : 
                       'Start Your Project'}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('downloadCV')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  onClick={() => {
                    const email = getEmail();
                    window.location.href = `mailto:${email}`;
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {locale === 'ar' ? 'تواصل معي' : 
                   locale === 'tr' ? 'İletişime Geç' : 
                   'Get In Touch'}
                </Button>
              </div>
            </motion.div>

            {/* Enhanced Social Media Plugins */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-6"
            >
              <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {locale === 'ar' ? 'تواصل معي' : locale === 'tr' ? 'Sosyal Medya' : 'Connect With Me'}
                </h3>
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* LinkedIn Profile Badge */}
                  <div className="flex-shrink-0">
                    <div className="badge-base LI-profile-badge" data-locale="ar_AE" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="mohammadkfelati" data-version="v1">
                      <a className="badge-base__link LI-simple-link" href="https://tr.linkedin.com/in/mohammadkfelati/ar?trk=profile-badge" title={`${getName()} LinkedIn Profile`} aria-label={`Visit ${getName()}'s LinkedIn Profile`}></a>
                    </div>
                  </div>
                  
                  {/* Facebook Page Plugin */}
                  <div className="flex-shrink-0">
                    <div id="fb-root"></div>
                    <div className="fb-page" data-href="https://www.facebook.com/mohammad.kfelati/" data-tabs="timeline,messages" data-width="340" data-height="280" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
                      <blockquote cite="https://www.facebook.com/mohammad.kfelati/" className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/mohammad.kfelati/">{getName()}</a>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Side - IT & Technology Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Enhanced IT Technology Visual */}
              <div className="relative w-full max-w-lg mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 dark:border-gray-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                  
                  {/* IT Visual Container */}
                  <div className="relative p-8 flex items-center justify-center h-full">
                    <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-gradient-to-r from-blue-400 to-purple-500 shadow-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center"
                        alt="IT & Technology"
                        fill
                        className="object-cover scale-110 transition-transform duration-500 hover:scale-125"
                      />
                      
                      {/* Tech overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
                      
                      {/* Enhanced animated border */}
                      <div className="absolute -inset-4 rounded-full border-4 border-blue-400/30 animate-spin-slow"></div>
                      <div className="absolute -inset-6 rounded-full border-2 border-purple-400/20 animate-pulse"></div>
                      
                      {/* Enhanced status indicator */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        {locale === 'ar' ? 'متاح' : locale === 'tr' ? 'Müsait' : 'Available'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-60 animate-pulse [animation-delay:1s]"></div>
                  <div className="absolute bottom-6 left-6 w-5 h-5 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-60 animate-pulse [animation-delay:2s]"></div>
                </div>
              </div>
              
              {/* Enhanced Floating Tech Icons */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <span className="text-3xl">💻</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <span className="text-2xl">⚙️</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-8 w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
                animate={{ 
                  x: [-5, 5, -5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-xl">🌐</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-16 -left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <span className="text-lg">🔧</span>
              </motion.div>

              {/* Additional floating elements */}
              <motion.div 
                className="absolute bottom-1/3 -right-12 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-lg"
                animate={{ 
                  x: [-3, 3, -3],
                  y: [-3, 3, -3]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 3 }}
                whileHover={{ scale: 1.15 }}
              >
                <span className="text-sm">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
              
      </div>
      
      {/* Scripts for social media plugins */}
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    </section>
  );
}

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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('title')}{' '}
                <span className="gradient-text">{getName()}</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {getTitle()}
              </motion.p>

              <motion.p 
                className="text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {getBio()}
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{personalInfo?.yearsExp || 14}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('clients')}</div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 text-primary" />
                <span>{getEmail()}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{getLocation()}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{locale === 'ar' ? 'متاح لمشاريع جديدة' : locale === 'tr' ? 'Yeni projeler için müsait' : 'Available for new projects'}</span>
              </div>
            </motion.div>

            {/* Social Media Plugins - LinkedIn & Facebook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-6"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* LinkedIn Profile Badge */}
                <div className="flex-shrink-0">
                  <div className="badge-base LI-profile-badge" data-locale="ar_AE" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="mohammadkfelati" data-version="v1">
                    <a className="badge-base__link LI-simple-link" href="https://tr.linkedin.com/in/mohammadkfelati/ar?trk=profile-badge"></a>
                  </div>
                </div>
                
                {/* Facebook Page Plugin */}
                <div className="flex-shrink-0">
                  <div id="fb-root"></div>
                  <div className="fb-page" data-href="https://www.facebook.com/mohammad.kfelati/" data-tabs="timeline,messages" data-width="340" data-height="280" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/mohammad.kfelati/" className="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/mohammad.kfelati/">‎محمد قفيلاتي‎</a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - IT & Technology Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* IT Technology Visual */}
              <div className="relative w-full max-w-lg mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                  
                  {/* IT Visual Container */}
                  <div className="relative p-8 flex items-center justify-center h-full">
                    <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-gradient-to-r from-blue-400 to-purple-500 shadow-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center"
                        alt="IT & Technology"
                        fill
                        className="object-cover scale-110"
                      />
                      
                      {/* Tech overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
                      
                      {/* Animated border */}
                      <div className="absolute -inset-4 rounded-full border-4 border-blue-400/30 animate-spin-slow"></div>
                      
                      {/* Status indicator */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        {locale === 'ar' ? 'متاح' : locale === 'tr' ? 'Müsait' : 'Available'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 left-6 w-5 h-5 bg-pink-400 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-3xl">💻</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <span className="text-2xl">⚙️</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-8 w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-xl"
                animate={{ 
                  x: [-5, 5, -5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-xl">🌐</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-16 -left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-lg">🔧</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
              
      </div>
      
      {/* Scripts for social media plugins */}
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0&appId=2047229625785909"></script>
    </section>
  );
}

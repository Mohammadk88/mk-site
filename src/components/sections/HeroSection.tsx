'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import SocialMediaLinks from '@/components/ui/SocialMediaLinks';
import Image from 'next/image';
import SocialFooter from "@/components/layout/SocialFooter";
import { useTranslations } from 'next-intl';

interface PersonalInfo {
  id: string;
  nameEn: string;
  nameAr: string;
  nameTr: string;
  titleEn: string;
  titleAr: string;
  titleTr: string;
  bioEn: string;
  bioAr: string;
  bioTr: string;
  avatar: string;
  resumeUrl: string;
  location: string;
  yearsExp: number;
}

interface ContactInfo {
  id: string;
  type: string;
  value: string;
  label: string;
  lang: string;
  isPrimary: boolean;
}

interface HeroSectionProps {
  personalInfo: PersonalInfo | null;
  contactInfo: ContactInfo[];
  locale: string;
}

export default function HeroSection({ 
  personalInfo, 
  contactInfo, 
  locale 
}: HeroSectionProps) {
  const t = useTranslations('hero');
  const tWhatsApp = useTranslations('whatsapp');

  // Get WhatsApp contact
  const whatsappContact = contactInfo.find(c => c.type === 'phone')?.value || '';
  
  // Generate WhatsApp link for project request
  const generateProjectWhatsAppLink = () => {
    const message = tWhatsApp('projectRequest');
    const cleanPhone = whatsappContact.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  // Get localized content
  const getName = () => {
    if (!personalInfo) return 'Mohammad Ziad Kfelati';
    switch (locale) {
      case 'ar': return personalInfo.nameAr;
      case 'tr': return personalInfo.nameTr;
      default: return personalInfo.nameEn;
    }
  };

  const getTitle = () => {
    if (!personalInfo) return 'Full-Stack Developer & AI Engineer';
    switch (locale) {
      case 'ar': return personalInfo.titleAr;
      case 'tr': return personalInfo.titleTr;
      default: return personalInfo.titleEn;
    }
  };

  const getBio = () => {
    if (!personalInfo) return 'Passionate full-stack developer with 5+ years of experience';
    switch (locale) {
      case 'ar': return personalInfo.bioAr;
      case 'tr': return personalInfo.bioTr;
      default: return personalInfo.bioEn;
    }
  };

  const primaryEmail = contactInfo.find(c => c.type === 'email' && c.isPrimary)?.value || 'hello@mohammad.dev';
  const primaryPhone = contactInfo.find(c => c.type === 'phone' && c.isPrimary)?.value;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative mx-auto w-40 h-40 mb-8">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl">
                <Image
                  src={personalInfo?.avatar || '/images/avatar.jpg'}
                  alt={getName()}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-600/10 rounded-full"></div>
              </div>
              
              {/* Animated ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-gradient-to-r from-blue-400/50 to-purple-500/50 animate-spin-slow"></div>
              
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {locale === 'ar' ? 'متاح للعمل الحر' : locale === 'tr' ? 'Serbest Çalışma İçin Müsait' : 'Available for Freelance'}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              {getName()}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
          >
            {getTitle()}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 text-center dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {getBio()}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{primaryEmail}</span>
            </div>
            {primaryPhone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{primaryPhone}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{personalInfo?.location || 'Istanbul, Turkey'}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a 
              href={generateProjectWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-3"
              >
                {t('startProject')}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a 
              href={personalInfo?.resumeUrl || 'https://linkedin.com/in/mohammadkfelati'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Linkedin className="mr-2 w-4 h-4" />
              {t('viewProfile')}
            </a>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center"
          >
             <SocialFooter />
            {/* <SocialMediaLinks size="lg" className="gap-6" /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

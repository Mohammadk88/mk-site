'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ContactHero() {
  const t = useTranslations('contact');
  const params = useParams();
  const locale = params.locale as string;
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">
                {locale === 'ar' ? 'لنتواصل' : 
                 locale === 'tr' ? 'İletişime Geçelim' : 
                 'Let\'s Connect'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold"
            >
              {locale === 'ar' ? (
                <>
                  <span className="gradient-text">تواصل</span> معي
                </>
              ) : locale === 'tr' ? (
                <>
                  <span className="gradient-text">İletişime</span> Geç
                </>
              ) : (
                <>
                  Get In{' '}
                  <span className="gradient-text">Touch</span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {locale === 'ar' 
                ? 'مستعد لتحويل أفكارك إلى واقع؟ دعنا نناقش مشروعك ونرى كيف يمكنني مساعدتك في تحقيق أهدافك. أنا متحمس دائماً للعمل على تحديات جديدة وإنشاء تجارب رقمية مذهلة.'
                : locale === 'tr'
                ? 'Fikirlerinizi hayata geçirmeye hazır mısınız? Projenizi tartışalım ve hedeflerinize ulaşmanızda size nasıl yardımcı olabileceğimi görelim. Yeni zorluklarla çalışmak ve harika dijital deneyimler yaratmak için hep heyecanlıyım.'
                : 'Ready to bring your ideas to life? Let\'s discuss your project and see how I can help you achieve your goals. I\'m always excited to work on new challenges and create amazing digital experiences.'
              }
            </motion.p>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-slate-800 shadow-lg">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-900 dark:text-white font-medium">mohammad.kfelati@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-slate-800 shadow-lg">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-900 dark:text-white font-medium">+90 531 725 5372</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

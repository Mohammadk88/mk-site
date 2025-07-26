'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Linkedin, 
  Github, 
  Twitter,
  Calendar,
  Globe,
  ExternalLink
} from 'lucide-react';

interface ContactInfo {
  id: string;
  type: string;
  value: string;
  label: string;
  lang: string;
  isPrimary: boolean;
}

export default function ContactInfo() {
  const t = useTranslations('contact');
  const params = useParams();
  const locale = params.locale as string;
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(`/api/contact-info?lang=${locale}`);
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactInfo();
  }, [locale]);

  // Function to generate contact methods from database
  const getContactMethods = () => {
    const methods = [];
    
    // Email
    const email = contactInfo.find(item => item.type === 'email');
    if (email) {
      methods.push({
        icon: Mail,
        label: email.label,
        value: email.value,
        href: `mailto:${email.value}`,
        description: locale === 'ar' ? 'الأفضل لمناقشة المشاريع التفصيلية' :
                    locale === 'tr' ? 'Detaylı proje tartışmaları için en iyi' :
                    'Best for detailed project discussions',
        color: 'from-blue-500 to-cyan-500'
      });
    }

    // Phone
    const phone = contactInfo.find(item => item.type === 'phone');
    if (phone) {
      methods.push({
        icon: Phone,
        label: phone.label,
        value: phone.value,
        href: `tel:${phone.value}`,
        description: locale === 'ar' ? 'للاستفسارات العاجلة' :
                    locale === 'tr' ? 'Acil sorular için' :
                    'For urgent inquiries',
        color: 'from-green-500 to-emerald-500'
      });

      // WhatsApp using same phone number
      methods.push({
        icon: MessageCircle,
        label: 'WhatsApp',
        value: phone.value,
        href: `https://wa.me/${phone.value.replace(/[^0-9]/g, '')}`,
        description: locale === 'ar' ? 'أسئلة سريعة وتحديثات' :
                    locale === 'tr' ? 'Hızlı sorular ve güncellemeler' :
                    'Quick questions and updates',
        color: 'from-green-600 to-green-400'
      });
    }

    // Address
    const address = contactInfo.find(item => item.type === 'address');
    if (address) {
      methods.push({
        icon: MapPin,
        label: address.label,
        value: address.value,
        href: `https://maps.google.com/?q=${encodeURIComponent(address.value)}`,
        description: locale === 'ar' ? 'موقعي الحالي' :
                    locale === 'tr' ? 'Mevcut konumum' :
                    'My current location',
        color: 'from-red-500 to-pink-500'
      });
    }

    return methods;
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mohammad-kfelati',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Mohammadk88',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/mohammad_kfelati',
      color: 'hover:text-blue-400'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      href: 'https://mohammadkfelati.com',
      color: 'hover:text-primary'
    }
  ];

  const workingHours = [
    { 
      day: locale === 'ar' ? 'الاثنين - الجمعة' : 
           locale === 'tr' ? 'Pazartesi - Cuma' : 'Monday - Friday', 
      hours: '9:00 AM - 6:00 PM' 
    },
    { 
      day: locale === 'ar' ? 'السبت' : 
           locale === 'tr' ? 'Cumartesi' : 'Saturday', 
      hours: '10:00 AM - 4:00 PM' 
    },
    { 
      day: locale === 'ar' ? 'الأحد' : 
           locale === 'tr' ? 'Pazar' : 'Sunday', 
      hours: locale === 'ar' ? 'بموعد مسبق' : 
             locale === 'tr' ? 'Randevu ile' : 'By Appointment' 
    }
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ar' ? 'لنتواصل' : 
               locale === 'tr' ? 'İletişime Geçelim' : 
               'Let\'s Connect'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {locale === 'ar' ? 'اختر الطريقة المفضلة للتواصل. أنا هنا لمساعدتك في تحقيق أفكارك.' :
               locale === 'tr' ? 'İletişim kurmak için tercih ettiğiniz yolu seçin. Fikirlerinizi hayata geçirmenize yardımcı olmak için buradayım.' :
               'Choose your preferred way to reach out. I\'m here to help bring your ideas to life.'}
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {getContactMethods().map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block group"
                >
                  <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {method.label}
                        </h3>
                        <p className="font-medium text-primary mb-1">
                          {method.value}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Istanbul, Turkey
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {locale === 'ar' ? 'ساعات العمل' : 
                   locale === 'tr' ? 'Çalışma Saatleri' : 
                   'Working Hours'}
                </h3>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {schedule.day}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                  {locale === 'ar' ? '* الأوقات بتوقيت تركيا (UTC+3)' :
                   locale === 'tr' ? '* Saatler Türkiye saatiyle (UTC+3)' :
                   '* Times shown in Turkey (UTC+3)'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {locale === 'ar' ? 'تابعني' : 
               locale === 'tr' ? 'Beni Takip Edin' : 
               'Follow Me'}
            </h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
            className="p-4 rounded-lg bg-primary/10 text-center"
          >
            <p className="text-primary font-medium">
              ⚡ Average response time: 2-4 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Star, 
  Check, 
  Zap, 
  Crown, 
  Rocket, 
  Shield,
  Bot,
  HeadphonesIcon,
  Sparkles,
  Calendar,
  CreditCard,
  ArrowRight,
  ExternalLink,
  Package,
  RefreshCw
} from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string;
  lang: string;
  popular: boolean;
}

interface RecurringService {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string;
  lang: string;
  billing: string;
}

interface ContactInfo {
  type: string;
  value: string;
  label: string;
}

const packageIcons = {
  starter: Rocket,
  professional: Crown,
  enterprise: Shield,
  seed: Sparkles,
  growth: ArrowRight,
  diamond: Star,
  content_marketing: Sparkles,
  technical_support: HeadphonesIcon,
  ai_assistant: Bot,
  analytics_insights: Check,
  security_plus: Shield,
  creative_design: Star
};

const packageColors = {
  starter: 'from-blue-500 to-purple-600',
  professional: 'from-purple-600 to-pink-600',
  enterprise: 'from-pink-600 to-red-600',
  seed: 'from-green-400 to-blue-500',
  growth: 'from-emerald-500 to-teal-600',
  diamond: 'from-indigo-600 to-purple-700',
  content_marketing: 'from-green-500 to-blue-500',
  technical_support: 'from-orange-500 to-red-500',
  ai_assistant: 'from-violet-500 to-purple-600',
  analytics_insights: 'from-cyan-500 to-blue-600',
  security_plus: 'from-red-500 to-pink-600',
  creative_design: 'from-pink-500 to-rose-600'
};

const packageAccents = {
  starter: 'border-blue-500/20 shadow-blue-500/10',
  professional: 'border-purple-500/20 shadow-purple-500/10',
  enterprise: 'border-pink-500/20 shadow-pink-500/10',
  seed: 'border-green-500/20 shadow-green-500/10',
  growth: 'border-emerald-500/20 shadow-emerald-500/10',
  diamond: 'border-indigo-500/20 shadow-indigo-500/10',
  content_marketing: 'border-green-500/20 shadow-green-500/10',
  technical_support: 'border-orange-500/20 shadow-orange-500/10',
  ai_assistant: 'border-violet-500/20 shadow-violet-500/10',
  analytics_insights: 'border-cyan-500/20 shadow-cyan-500/10',
  security_plus: 'border-red-500/20 shadow-red-500/10',
  creative_design: 'border-pink-500/20 shadow-pink-500/10'
};

export default function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations('services');
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [recurringServices, setRecurringServices] = useState<RecurringService[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [activeTab, setActiveTab] = useState<'packages' | 'subscriptions'>('packages');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [plansRes, recurringRes, contactRes] = await Promise.all([
          fetch(`/api/pricing-plans?lang=${locale}`),
          fetch(`/api/recurring-services?lang=${locale}`),
          fetch('/api/contact-info')
        ]);

        const [plans, recurring, contact] = await Promise.all([
          plansRes.json(),
          recurringRes.json(),
          contactRes.json()
        ]);

        setPricingPlans(plans);
        setRecurringServices(recurring);
        setContactInfo(contact);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [locale]);

  const whatsappContact = contactInfo.find(c => c.type === 'phone')?.value || '';
  
  const generateWhatsAppLink = (serviceName: string, price: number, type: 'package' | 'subscription') => {
    const message = type === 'package' 
      ? `مرحباً! أريد الاستفسار عن باقة "${serviceName}" بسعر $${price}`
      : `مرحباً! أريد الاستفسار عن خدمة "${serviceName}" الشهرية بسعر $${price}`;
    
    return `https://wa.me/${whatsappContact.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  };

  const parseFeatures = (featuresString: string) => {
    try {
      const parsed = JSON.parse(featuresString);
      return {
        description: parsed.description || '',
        features: parsed.features || [],
        technologies: parsed.technologies || [],
        deliveryTime: parsed.deliveryTime || '',
        category: parsed.category || ''
      };
    } catch {
      return {
        description: '',
        features: [],
        technologies: [],
        deliveryTime: '',
        category: ''
      };
    }
  };

  const PackageCard = ({ plan }: { plan: PricingPlan }) => {
    const details = parseFeatures(plan.features);
    const IconComponent = packageIcons[details.category as keyof typeof packageIcons] || Rocket;
    const gradientColor = packageColors[details.category as keyof typeof packageColors] || 'from-blue-500 to-purple-600';
    const accentColor = packageAccents[details.category as keyof typeof packageAccents] || 'border-blue-500/20 shadow-blue-500/10';

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className={`relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 border-2 ${accentColor} shadow-2xl transition-all duration-500 ${
          plan.popular ? 'ring-4 ring-purple-500/30 scale-105' : ''
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              {t('mostPopular')}
            </div>
          </div>
        )}

        {/* Header with Icon */}
        <div className={`relative px-8 pt-8 pb-6 bg-gradient-to-br ${gradientColor}`}>
          <div className="absolute top-4 right-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{details.description}</p>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-baseline">
            <span className="text-5xl font-bold text-white">${plan.price}</span>
            <span className="text-white/60 ml-2 text-lg">{plan.currency}</span>
          </div>

          {details.deliveryTime && (
            <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-white text-sm">{details.deliveryTime}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              {t('included')}
            </h4>
            
            <div className="space-y-3">
              {details.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          {details.technologies && details.technologies.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                {t('technologies')}
              </h5>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="px-8 pb-8">
          <motion.a
            href={generateWhatsAppLink(plan.name, plan.price, 'package')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-gradient-to-r ${gradientColor} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl group`}
          >
            <span>{t('getStarted')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <ExternalLink className="w-4 h-4 opacity-70" />
          </motion.a>
        </div>
      </motion.div>
    );
  };

  const SubscriptionCard = ({ service }: { service: RecurringService }) => {
    const details = parseFeatures(service.features);
    const IconComponent = packageIcons[details.category as keyof typeof packageIcons] || Bot;
    const gradientColor = packageColors[details.category as keyof typeof packageColors] || 'from-blue-500 to-purple-600';
    const accentColor = packageAccents[details.category as keyof typeof packageAccents] || 'border-blue-500/20 shadow-blue-500/10';

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className={`relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 border-2 ${accentColor} shadow-2xl transition-all duration-500`}
      >
        {/* Header */}
        <div className={`relative px-8 pt-8 pb-6 bg-gradient-to-br ${gradientColor}`}>
          <div className="absolute top-4 right-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-baseline">
            <span className="text-5xl font-bold text-white">${service.price}</span>
            <span className="text-white/60 ml-2 text-lg">/{t('month')}</span>
          </div>

          <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <CreditCard className="w-4 h-4 text-white" />
            <span className="text-white text-sm">{t('monthlyBilling')}</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              {t('monthlyIncludes')}
            </h4>
            
            <div className="space-y-3">
              {details.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mt-0.5">
                    <Zap className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          {details.technologies && details.technologies.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                {t('tools')}
              </h5>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="px-8 pb-8">
          <motion.a
            href={generateWhatsAppLink(service.name, service.price, 'subscription')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-gradient-to-r ${gradientColor} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl group`}
          >
            <span>{t('subscribe')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <ExternalLink className="w-4 h-4 opacity-70" />
          </motion.a>
        </div>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">{t('premiumServices')}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'packages'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <Package className="w-5 h-5" />
              {t('oneTimePackages')}
            </button>
            <button
              onClick={() => setActiveTab('subscriptions')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'subscriptions'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <RefreshCw className="w-5 h-5" />
              {t('monthlySubscriptions')}
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'packages' ? (
            <motion.div
              key="packages"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {pricingPlans.map((plan) => (
                <PackageCard key={plan.id} plan={plan} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="subscriptions"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {recurringServices.map((service) => (
                <SubscriptionCard key={service.id} service={service} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{t('customSolution')}</h2>
            <p className="text-xl mb-8 opacity-90">{t('customDescription')}</p>
            <motion.a
              href={generateWhatsAppLink('استشارة مخصصة', 0, 'package')}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
            >
              <span>{t('contactUs')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <ExternalLink className="w-4 h-4 opacity-70" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  MessageSquare, 
  Building2, 
  GraduationCap,
  Truck,
  ShoppingCart,
  Cloud,
  Rocket,
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

import { LucideIcon } from 'lucide-react';

interface Service {
  name: string;
  description: string;
  price: string;
  icon: LucideIcon;
  features: string[];
}

const services: Service[] = [
  {
    name: "Personal Website + CV Builder",
    description: "Design and deploy a fast, SEO-friendly personal site with CV protection and social integrations.",
    price: "$400",
    icon: Globe,
    features: ["SEO Optimization", "CV Protection", "Social Integration", "Responsive Design"]
  },
  {
    name: "E-commerce Platform",
    description: "Complete online store with payment integration, inventory management, and admin dashboard.",
    price: "$800-1500",
    icon: ShoppingCart,
    features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Mobile Ready"]
  },
  {
    name: "Mobile Application Development",
    description: "Native or cross-platform mobile apps for iOS and Android with modern UI/UX.",
    price: "$1200-2500",
    icon: Smartphone,
    features: ["iOS & Android", "Cross-platform", "Modern UI/UX", "Performance Optimized"]
  },
  {
    name: "AI-Powered Chat Systems",
    description: "Intelligent chatbots and AI assistants integrated into websites or applications.",
    price: "$600-1200",
    icon: MessageSquare,
    features: ["Natural Language Processing", "24/7 Availability", "Multi-language Support", "Integration Ready"]
  },
  {
    name: "ERP/CRM Systems",
    description: "Enterprise resource planning and customer relationship management solutions.",
    price: "$2000-5000",
    icon: Building2,
    features: ["Resource Planning", "Customer Management", "Analytics", "Scalable Architecture"]
  },
  {
    name: "Management Systems (Schools/Hospitals/Restaurants)",
    description: "Comprehensive management systems tailored for educational, healthcare, and hospitality sectors.",
    price: "$1500-3500",
    icon: GraduationCap,
    features: ["Sector-specific Features", "User Management", "Reporting", "Data Security"]
  },
  {
    name: "Food Delivery Platform",
    description: "Complete food delivery ecosystem with customer, restaurant, and delivery partner apps.",
    price: "$2500-4000",
    icon: Truck,
    features: ["Multi-app Ecosystem", "Real-time Tracking", "Payment Gateway", "Order Management"]
  },
  {
    name: "Custom SaaS Solutions",
    description: "Build scalable SaaS platforms with subscription management, multi-tenancy, and analytics.",
    price: "$2000-6000",
    icon: Cloud,
    features: ["Multi-tenancy", "Subscription Management", "Analytics Dashboard", "API Integration"]
  },
  {
    name: "Startup Project Management",
    description: "End-to-end startup development including MVP, scaling, and technical consulting.",
    price: "$1500-4000",
    icon: Rocket,
    features: ["MVP Development", "Technical Consulting", "Scaling Strategy", "Market Analysis"]
  },
  {
    name: "Ongoing Maintenance & Support",
    description: "Monthly updates, performance improvements, bug fixes, and technical consulting.",
    price: "$200-500/month",
    icon: Wrench,
    features: ["Performance Monitoring", "Bug Fixes", "Security Updates", "Technical Support"]
  }
];

export default function ServicesGrid() {
  const t = useTranslations('services');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-3 py-1 rounded-full">
              ✓ {t('completedProjects')}
            </span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:scale-105"
              >
                {/* Service Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    طلب عرض سعر
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج مشروع مخصص؟</h3>
            <p className="text-lg mb-6 opacity-90">
              تواصل معي لمناقشة مشروعك والحصول على عرض سعر مخصص
            </p>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-gray-100">
              تواصل معي الآن
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

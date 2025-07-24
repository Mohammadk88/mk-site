import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateServicesAndPricing() {
  try {
    console.log('🔄 تحديث الخدمات والأسعار...');
    
    // حذف جميع الخدمات والأسعار الحالية
    await prisma.pricingPlan.deleteMany({});
    await prisma.recurringService.deleteMany({});
    
    console.log('✅ تم حذف البيانات القديمة');
    
    // خدمات لمرة واحدة - مشاريع كاملة
    const oneTimeServices = [
      // English
      {
        name: "Basic Website Package",
        features: JSON.stringify([
          "Responsive Design (Mobile & Desktop)",
          "5 Pages (Home, About, Services, Portfolio, Contact)",
          "Content Management System",
          "SEO Optimization",
          "Social Media Integration",
          "Contact Forms",
          "1 Month Free Support",
          "Domain & Hosting Setup"
        ]),
        price: 999,
        currency: "USD",
        lang: "en",
        popular: false
      },
      {
        name: "Professional Business Package",
        features: JSON.stringify([
          "Custom Design & Development",
          "Up to 10 Pages",
          "Advanced CMS with Admin Panel",
          "E-commerce Integration (Basic)",
          "Payment Gateway Setup",
          "Advanced SEO & Analytics",
          "Multi-language Support",
          "Social Media Integration",
          "Email Marketing Setup",
          "3 Months Free Support",
          "Performance Optimization"
        ]),
        price: 2499,
        currency: "USD",
        lang: "en",
        popular: true
      },
      {
        name: "Enterprise Solution Package",
        features: JSON.stringify([
          "Full Custom Development",
          "Unlimited Pages",
          "Advanced E-commerce Platform",
          "ERP/CRM Integration",
          "API Development & Integration",
          "Advanced Security Features",
          "Cloud Infrastructure Setup",
          "AI/ML Integration",
          "Mobile App Development",
          "6 Months Free Support",
          "Priority Technical Support",
          "Performance & Security Monitoring"
        ]),
        price: 4999,
        currency: "USD",
        lang: "en",
        popular: false
      },
      
      // Arabic
      {
        name: "باقة الموقع الأساسية",
        features: JSON.stringify([
          "تصميم متجاوب (جوال وسطح المكتب)",
          "5 صفحات (الرئيسية، من نحن، الخدمات، أعمالنا، اتصل بنا)",
          "نظام إدارة المحتوى",
          "تحسين محركات البحث",
          "تكامل وسائل التواصل الاجتماعي",
          "نماذج الاتصال",
          "دعم مجاني لمدة شهر",
          "إعداد النطاق والاستضافة"
        ]),
        price: 999,
        currency: "USD",
        lang: "ar",
        popular: false
      },
      {
        name: "باقة الأعمال المحترفة",
        features: JSON.stringify([
          "تصميم وتطوير مخصص",
          "حتى 10 صفحات",
          "نظام إدارة محتوى متقدم مع لوحة تحكم",
          "تكامل التجارة الإلكترونية (أساسي)",
          "إعداد بوابة الدفع",
          "تحسين محركات البحث والتحليلات المتقدمة",
          "دعم متعدد اللغات",
          "تكامل وسائل التواصل الاجتماعي",
          "إعداد التسويق الإلكتروني",
          "دعم مجاني لمدة 3 أشهر",
          "تحسين الأداء"
        ]),
        price: 2499,
        currency: "USD",
        lang: "ar",
        popular: true
      },
      {
        name: "باقة الحلول المؤسسية",
        features: JSON.stringify([
          "تطوير مخصص كامل",
          "صفحات غير محدودة",
          "منصة تجارة إلكترونية متقدمة",
          "تكامل أنظمة إدارة الموارد والعملاء",
          "تطوير وتكامل واجهات برمجة التطبيقات",
          "ميزات أمان متقدمة",
          "إعداد البنية التحتية السحابية",
          "تكامل الذكاء الاصطناعي والتعلم الآلي",
          "تطوير تطبيقات الجوال",
          "دعم مجاني لمدة 6 أشهر",
          "دعم تقني ذو أولوية",
          "مراقبة الأداء والأمان"
        ]),
        price: 4999,
        currency: "USD",
        lang: "ar",
        popular: false
      },
      
      // Turkish
      {
        name: "Temel Web Sitesi Paketi",
        features: JSON.stringify([
          "Responsive Tasarım (Mobil ve Masaüstü)",
          "5 Sayfa (Ana Sayfa, Hakkımızda, Hizmetler, Portföy, İletişim)",
          "İçerik Yönetim Sistemi",
          "SEO Optimizasyonu",
          "Sosyal Medya Entegrasyonu",
          "İletişim Formları",
          "1 Ay Ücretsiz Destek",
          "Domain ve Hosting Kurulumu"
        ]),
        price: 999,
        currency: "USD",
        lang: "tr",
        popular: false
      },
      {
        name: "Profesyonel İş Paketi",
        features: JSON.stringify([
          "Özel Tasarım ve Geliştirme",
          "10 Sayfaya Kadar",
          "Yönetici Panelli Gelişmiş CMS",
          "E-ticaret Entegrasyonu (Temel)",
          "Ödeme Sistemi Kurulumu",
          "Gelişmiş SEO ve Analitik",
          "Çok Dil Desteği",
          "Sosyal Medya Entegrasyonu",
          "E-posta Pazarlama Kurulumu",
          "3 Ay Ücretsiz Destek",
          "Performans Optimizasyonu"
        ]),
        price: 2499,
        currency: "USD",
        lang: "tr",
        popular: true
      },
      {
        name: "Kurumsal Çözüm Paketi",
        features: JSON.stringify([
          "Tam Özel Geliştirme",
          "Sınırsız Sayfa",
          "Gelişmiş E-ticaret Platformu",
          "ERP/CRM Entegrasyonu",
          "API Geliştirme ve Entegrasyon",
          "Gelişmiş Güvenlik Özellikleri",
          "Bulut Altyapı Kurulumu",
          "AI/ML Entegrasyonu",
          "Mobil Uygulama Geliştirme",
          "6 Ay Ücretsiz Destek",
          "Öncelikli Teknik Destek",
          "Performans ve Güvenlik İzleme"
        ]),
        price: 4999,
        currency: "USD",
        lang: "tr",
        popular: false
      }
    ];

    // إنشاء الخدمات لمرة واحدة
    for (const service of oneTimeServices) {
      await prisma.pricingPlan.create({ data: service });
    }
    
    console.log('✅ تم إنشاء خدمات لمرة واحدة');

    // الخدمات المتكررة - دعم وصيانة
    const recurringServices = [
      // English
      {
        name: "Basic Maintenance",
        description: "Essential website maintenance and support",
        price: 99,
        currency: "USD",
        lang: "en",
        features: JSON.stringify([
          "Monthly Security Updates",
          "Content Updates (2 hours/month)",
          "Performance Monitoring",
          "Backup Management",
          "Email Support",
          "Bug Fixes",
          "Monthly Reports"
        ]),
        billing: "monthly",
        popular: false
      },
      {
        name: "Professional Maintenance",
        description: "Comprehensive support and development services",
        price: 299,
        currency: "USD",
        lang: "en",
        features: JSON.stringify([
          "All Basic Features",
          "Content Updates (8 hours/month)",
          "SEO Monitoring & Optimization",
          "Social Media Management",
          "Priority Support",
          "Feature Enhancements",
          "Security Monitoring",
          "Performance Optimization",
          "Monthly Strategy Calls"
        ]),
        billing: "monthly",
        popular: true
      },
      {
        name: "Enterprise Support",
        description: "Full-service digital support and development",
        price: 599,
        currency: "USD",
        lang: "en",
        features: JSON.stringify([
          "All Professional Features",
          "Unlimited Content Updates",
          "Dedicated Account Manager",
          "24/7 Priority Support",
          "Custom Development (10 hours/month)",
          "Advanced Analytics & Reporting",
          "Marketing Automation",
          "API Integrations",
          "Consulting Services",
          "Emergency Response"
        ]),
        billing: "monthly",
        popular: false
      },
      
      // Arabic
      {
        name: "صيانة أساسية",
        description: "صيانة ودعم أساسي للموقع",
        price: 99,
        currency: "USD",
        lang: "ar",
        features: JSON.stringify([
          "تحديثات أمنية شهرية",
          "تحديث المحتوى (ساعتان/شهر)",
          "مراقبة الأداء",
          "إدارة النسخ الاحتياطية",
          "دعم عبر البريد الإلكتروني",
          "إصلاح الأخطاء",
          "تقارير شهرية"
        ]),
        billing: "monthly",
        popular: false
      },
      {
        name: "صيانة محترفة",
        description: "دعم وخدمات تطوير شاملة",
        price: 299,
        currency: "USD",
        lang: "ar",
        features: JSON.stringify([
          "جميع الميزات الأساسية",
          "تحديث المحتوى (8 ساعات/شهر)",
          "مراقبة وتحسين محركات البحث",
          "إدارة وسائل التواصل الاجتماعي",
          "دعم ذو أولوية",
          "تحسين الميزات",
          "مراقبة الأمان",
          "تحسين الأداء",
          "مكالمات استراتيجية شهرية"
        ]),
        billing: "monthly",
        popular: true
      },
      {
        name: "دعم مؤسسي",
        description: "دعم وتطوير رقمي شامل",
        price: 599,
        currency: "USD",
        lang: "ar",
        features: JSON.stringify([
          "جميع الميزات المحترفة",
          "تحديثات محتوى غير محدودة",
          "مدير حساب مخصص",
          "دعم ذو أولوية على مدار الساعة",
          "تطوير مخصص (10 ساعات/شهر)",
          "تحليلات وتقارير متقدمة",
          "أتمتة التسويق",
          "تكامل واجهات برمجة التطبيقات",
          "خدمات استشارية",
          "استجابة طوارئ"
        ]),
        billing: "monthly",
        popular: false
      },
      
      // Turkish
      {
        name: "Temel Bakım",
        description: "Temel web sitesi bakım ve destek",
        price: 99,
        currency: "USD",
        lang: "tr",
        features: JSON.stringify([
          "Aylık Güvenlik Güncellemeleri",
          "İçerik Güncellemeleri (2 saat/ay)",
          "Performans İzleme",
          "Yedek Yönetimi",
          "E-posta Desteği",
          "Hata Düzeltmeleri",
          "Aylık Raporlar"
        ]),
        billing: "monthly",
        popular: false
      },
      {
        name: "Profesyonel Bakım",
        description: "Kapsamlı destek ve geliştirme hizmetleri",
        price: 299,
        currency: "USD",
        lang: "tr",
        features: JSON.stringify([
          "Tüm Temel Özellikler",
          "İçerik Güncellemeleri (8 saat/ay)",
          "SEO İzleme ve Optimizasyon",
          "Sosyal Medya Yönetimi",
          "Öncelikli Destek",
          "Özellik Geliştirmeleri",
          "Güvenlik İzleme",
          "Performans Optimizasyonu",
          "Aylık Strateji Görüşmeleri"
        ]),
        billing: "monthly",
        popular: true
      },
      {
        name: "Kurumsal Destek",
        description: "Tam hizmet dijital destek ve geliştirme",
        price: 599,
        currency: "USD",
        lang: "tr",
        features: JSON.stringify([
          "Tüm Profesyonel Özellikler",
          "Sınırsız İçerik Güncellemeleri",
          "Özel Hesap Yöneticisi",
          "7/24 Öncelikli Destek",
          "Özel Geliştirme (10 saat/ay)",
          "Gelişmiş Analitik ve Raporlama",
          "Pazarlama Otomasyonu",
          "API Entegrasyonları",
          "Danışmanlık Hizmetleri",
          "Acil Durum Müdahalesi"
        ]),
        billing: "monthly",
        popular: false
      }
    ];

    // إنشاء الخدمات المتكررة
    for (const service of recurringServices) {
      await prisma.recurringService.create({ data: service });
    }
    
    console.log('✅ تم إنشاء الخدمات المتكررة');
    console.log('🎉 تم تحديث جميع الخدمات والأسعار بنجاح!');
    
  } catch (error) {
    console.error('❌ خطأ في تحديث الخدمات:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateServicesAndPricing();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addCreativePackages() {
  try {
    console.log('🌱 إضافة باقات إبداعية جديدة...');

    // باقات لمرة واحدة إضافية
    const additionalPackages = [
      // 🌱 باقة البذرة - Seed Package
      {
        id: 'seed',
        names: {
          en: 'Seed Startup Package',
          ar: 'باقة البذرة للمشاريع الناشئة',
          tr: 'Tohum Başlangıç Paketi'
        },
        descriptions: {
          en: 'The perfect starting point for entrepreneurs and early-stage startups to validate their ideas.',
          ar: 'نقطة الانطلاق المثالية لرواد الأعمال والمشاريع الناشئة لتجربة أفكارهم.',
          tr: 'Girişimciler ve erken aşama startup\'lar için fikirlerini doğrulamak için mükemmel başlangıç noktası.'
        },
        price: 299,
        currency: 'USD',
        features: {
          en: [
            'Landing Page (1-3 pages)',
            'Contact Form & Email Setup',
            'Mobile-First Responsive Design',
            'Basic SEO Optimization',
            'Free Domain & SSL Certificate',
            '1 Month Free Hosting',
            'Google Analytics Setup',
            'Social Media Links Integration',
            'Email Support for 30 days'
          ],
          ar: [
            'صفحة هبوط (1-3 صفحات)',
            'نموذج اتصال وإعداد البريد الإلكتروني',
            'تصميم متجاوب للموبايل أولاً',
            'تحسين SEO أساسي',
            'دومين مجاني وشهادة SSL',
            'استضافة مجانية لشهر واحد',
            'إعداد Google Analytics',
            'تكامل روابط وسائل التواصل',
            'دعم بريد إلكتروني لمدة 30 يوم'
          ],
          tr: [
            'İniş Sayfası (1-3 sayfa)',
            'İletişim Formu ve E-posta Kurulumu',
            'Mobil Öncelikli Duyarlı Tasarım',
            'Temel SEO Optimizasyonu',
            'Ücretsiz Domain ve SSL Sertifikası',
            '1 Ay Ücretsiz Hosting',
            'Google Analytics Kurulumu',
            'Sosyal Medya Bağlantıları Entegrasyonu',
            '30 Gün E-posta Desteği'
          ]
        },
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        popular: false,
        deliveryTime: '1-2 weeks'
      },

      // 🚀 باقة النمو - Growth Package
      {
        id: 'growth',
        names: {
          en: 'Growth Business Package',
          ar: 'باقة النمو التجاري',
          tr: 'Büyüme İş Paketi'
        },
        descriptions: {
          en: 'Scale your business with advanced features, integrations, and marketing tools for growing companies.',
          ar: 'قم بتوسيع أعمالك مع ميزات متقدمة وتكاملات وأدوات تسويقية للشركات النامية.',
          tr: 'Büyüyen şirketler için gelişmiş özellikler, entegrasyonlar ve pazarlama araçlarıyla işinizi büyütün.'
        },
        price: 1499,
        currency: 'USD',
        features: {
          en: [
            'Multi-page Website (10-15 pages)',
            'Content Management System (CMS)',
            'Blog Section with SEO',
            'Email Marketing Integration',
            'Social Media Automation',
            'Advanced Analytics Dashboard',
            'Customer Support Chat Widget',
            'Payment Gateway Integration',
            'Multi-language Support (2 languages)',
            '6 Months Premium Support',
            'Monthly Performance Reports'
          ],
          ar: [
            'موقع متعدد الصفحات (10-15 صفحة)',
            'نظام إدارة المحتوى (CMS)',
            'قسم مدونة مع SEO',
            'تكامل التسويق بالبريد الإلكتروني',
            'أتمتة وسائل التواصل الاجتماعي',
            'لوحة تحليلات متقدمة',
            'أداة دردشة دعم العملاء',
            'تكامل بوابة الدفع',
            'دعم متعدد اللغات (لغتان)',
            '6 أشهر دعم مميز',
            'تقارير أداء شهرية'
          ],
          tr: [
            'Çok Sayfalı Web Sitesi (10-15 sayfa)',
            'İçerik Yönetim Sistemi (CMS)',
            'SEO\'lu Blog Bölümü',
            'E-posta Pazarlama Entegrasyonu',
            'Sosyal Medya Otomasyonu',
            'Gelişmiş Analitik Paneli',
            'Müşteri Destek Sohbet Widget\'ı',
            'Ödeme Ağ Geçidi Entegrasyonu',
            'Çok Dil Desteği (2 dil)',
            '6 Ay Premium Destek',
            'Aylık Performans Raporları'
          ]
        },
        technologies: ['React', 'Next.js', 'Strapi CMS', 'PostgreSQL', 'Stripe'],
        popular: true,
        deliveryTime: '4-6 weeks'
      },

      // 💎 باقة الماس - Diamond Package
      {
        id: 'diamond',
        names: {
          en: 'Diamond Enterprise Solution',
          ar: 'حل الماس للمؤسسات',
          tr: 'Elmas Kurumsal Çözüm'
        },
        descriptions: {
          en: 'Ultimate enterprise solution with cutting-edge technology, AI integration, and full digital transformation.',
          ar: 'الحل المؤسسي الأقصى مع أحدث التقنيات وتكامل الذكاء الاصطناعي والتحول الرقمي الكامل.',
          tr: 'En son teknoloji, AI entegrasyonu ve tam dijital dönüşüm ile nihai kurumsal çözüm.'
        },
        price: 7999,
        currency: 'USD',
        features: {
          en: [
            'Custom Enterprise Platform',
            'AI-Powered Business Intelligence',
            'Advanced Security & Compliance',
            'Multi-tenant Architecture',
            'Real-time Data Synchronization',
            'Custom API Development',
            'Microservices Architecture',
            'Cloud Infrastructure (AWS/Azure)',
            'DevOps & CI/CD Pipeline',
            'Load Balancing & Auto-scaling',
            'Advanced Monitoring & Logging',
            '24/7 Enterprise Support',
            'Dedicated Success Manager',
            '12 Months Warranty & Updates'
          ],
          ar: [
            'منصة مؤسسية مخصصة',
            'ذكاء أعمال مدعوم بالذكاء الاصطناعي',
            'أمان متقدم والامتثال',
            'هندسة متعددة المستأجرين',
            'مزامنة البيانات في الوقت الفعلي',
            'تطوير API مخصص',
            'هندسة الخدمات المصغرة',
            'البنية التحتية السحابية (AWS/Azure)',
            'DevOps وخط أنابيب CI/CD',
            'توازن الأحمال والتوسع التلقائي',
            'مراقبة وتسجيل متقدم',
            'دعم مؤسسي 24/7',
            'مدير نجاح مخصص',
            '12 شهر ضمان وتحديثات'
          ],
          tr: [
            'Özel Kurumsal Platform',
            'AI Destekli İş Zekası',
            'Gelişmiş Güvenlik ve Uyumluluk',
            'Çok Kiracılı Mimari',
            'Gerçek Zamanlı Veri Senkronizasyonu',
            'Özel API Geliştirme',
            'Mikroservis Mimarisi',
            'Bulut Altyapısı (AWS/Azure)',
            'DevOps ve CI/CD Pipeline',
            'Yük Dengeleme ve Otomatik Ölçekleme',
            'Gelişmiş İzleme ve Loglama',
            '7/24 Kurumsal Destek',
            'Özel Başarı Yöneticisi',
            '12 Ay Garanti ve Güncellemeler'
          ]
        },
        technologies: ['Node.js', 'React', 'Kubernetes', 'Docker', 'AWS', 'MongoDB', 'Redis', 'OpenAI'],
        popular: false,
        deliveryTime: '16-20 weeks'
      }
    ];

    // خدمات شهرية إضافية
    const additionalSubscriptions = [
      // 📈 تحليلات وتقارير
      {
        id: 'analytics_insights',
        names: {
          en: 'Business Analytics & Insights',
          ar: 'تحليلات ورؤى الأعمال',
          tr: 'İş Analitiği ve İçgörüler'
        },
        descriptions: {
          en: 'Advanced business intelligence with custom dashboards, automated reports, and actionable insights.',
          ar: 'ذكاء أعمال متقدم مع لوحات تحكم مخصصة وتقارير آلية ورؤى قابلة للتنفيذ.',
          tr: 'Özel paneller, otomatik raporlar ve eyleme dönüştürülebilir içgörüler ile gelişmiş iş zekası.'
        },
        price: 199,
        currency: 'USD',
        features: {
          en: [
            'Custom Analytics Dashboard',
            'Real-time Data Visualization',
            'Weekly Performance Reports',
            'Competitor Analysis',
            'ROI Tracking & Optimization',
            'Goal Setting & Monitoring',
            'Data Export & API Access',
            'Priority Email Support'
          ],
          ar: [
            'لوحة تحليلات مخصصة',
            'تصور البيانات في الوقت الفعلي',
            'تقارير أداء أسبوعية',
            'تحليل المنافسين',
            'تتبع وتحسين العائد على الاستثمار',
            'وضع الأهداف ومراقبتها',
            'تصدير البيانات ووصول API',
            'دعم بريد إلكتروني ذو أولوية'
          ],
          tr: [
            'Özel Analitik Paneli',
            'Gerçek Zamanlı Veri Görselleştirme',
            'Haftalık Performans Raporları',
            'Rakip Analizi',
            'ROI Takibi ve Optimizasyon',
            'Hedef Belirleme ve İzleme',
            'Veri Dışa Aktarım ve API Erişimi',
            'Öncelikli E-posta Desteği'
          ]
        },
        technologies: ['Power BI', 'Google Analytics', 'Tableau', 'Python']
      },

      // 🛡️ أمان متقدم
      {
        id: 'security_plus',
        names: {
          en: 'Security Plus Protection',
          ar: 'حماية الأمان المتقدم',
          tr: 'Güvenlik Plus Koruma'
        },
        descriptions: {
          en: 'Comprehensive security monitoring with threat detection, vulnerability scanning, and incident response.',
          ar: 'مراقبة أمنية شاملة مع كشف التهديدات وفحص الثغرات والاستجابة للحوادث.',
          tr: 'Tehdit tespiti, güvenlik açığı taraması ve olay müdahalesi ile kapsamlı güvenlik izleme.'
        },
        price: 149,
        currency: 'USD',
        features: {
          en: [
            '24/7 Security Monitoring',
            'Vulnerability Scanning',
            'Malware Detection & Removal',
            'SSL Certificate Management',
            'Firewall Configuration',
            'Security Audit Reports',
            'Incident Response Plan',
            'Emergency Contact Support'
          ],
          ar: [
            'مراقبة أمنية 24/7',
            'فحص الثغرات الأمنية',
            'كشف وإزالة البرامج الضارة',
            'إدارة شهادات SSL',
            'تكوين جدار الحماية',
            'تقارير التدقيق الأمني',
            'خطة الاستجابة للحوادث',
            'دعم الاتصال الطارئ'
          ],
          tr: [
            '7/24 Güvenlik İzleme',
            'Güvenlik Açığı Taraması',
            'Kötü Amaçlı Yazılım Tespiti ve Kaldırma',
            'SSL Sertifika Yönetimi',
            'Güvenlik Duvarı Yapılandırması',
            'Güvenlik Denetim Raporları',
            'Olay Müdahale Planı',
            'Acil Durum İletişim Desteği'
          ]
        },
        technologies: ['Cloudflare', 'AWS WAF', 'Sucuri', 'Let\'s Encrypt']
      },

      // 🎨 تصميم وإبداع
      {
        id: 'creative_design',
        names: {
          en: 'Creative Design Studio',
          ar: 'استوديو التصميم الإبداعي',
          tr: 'Yaratıcı Tasarım Stüdyosu'
        },
        descriptions: {
          en: 'Professional design services including graphics, UI/UX design, branding, and creative content creation.',
          ar: 'خدمات تصميم احترافية تشمل الرسوميات وتصميم UI/UX والعلامة التجارية وإنشاء المحتوى الإبداعي.',
          tr: 'Grafik, UI/UX tasarım, markalaşma ve yaratıcı içerik oluşturma dahil profesyonel tasarım hizmetleri.'
        },
        price: 249,
        currency: 'USD',
        features: {
          en: [
            'Custom Graphics Design (5-8 pieces)',
            'UI/UX Design Improvements',
            'Brand Identity Updates',
            'Social Media Design Templates',
            'Print Design Materials',
            'Icon & Illustration Creation',
            'Design System Documentation',
            'Unlimited Revisions'
          ],
          ar: [
            'تصميم رسوميات مخصصة (5-8 قطع)',
            'تحسينات تصميم UI/UX',
            'تحديثات هوية العلامة التجارية',
            'قوالب تصميم وسائل التواصل',
            'مواد التصميم المطبوعة',
            'إنشاء الأيقونات والرسوم التوضيحية',
            'توثيق نظام التصميم',
            'تعديلات غير محدودة'
          ],
          tr: [
            'Özel Grafik Tasarım (5-8 adet)',
            'UI/UX Tasarım İyileştirmeleri',
            'Marka Kimliği Güncellemeleri',
            'Sosyal Medya Tasarım Şablonları',
            'Basılı Tasarım Malzemeleri',
            'İkon ve İllüstrasyon Oluşturma',
            'Tasarım Sistemi Dokümantasyonu',
            'Sınırsız Revizyon'
          ]
        },
        technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva Pro']
      }
    ];

    // إضافة الباقات الجديدة
    for (const packageData of additionalPackages) {
      for (const [lang, name] of Object.entries(packageData.names)) {
        await prisma.pricingPlan.create({
          data: {
            name: name,
            price: packageData.price,
            currency: packageData.currency,
            features: JSON.stringify({
              description: packageData.descriptions[lang],
              features: packageData.features[lang],
              technologies: packageData.technologies,
              deliveryTime: packageData.deliveryTime,
              category: packageData.id
            }),
            lang: lang,
            popular: packageData.popular
          }
        });
      }
    }

    // إضافة الخدمات الشهرية الجديدة
    for (const service of additionalSubscriptions) {
      for (const [lang, name] of Object.entries(service.names)) {
        await prisma.recurringService.create({
          data: {
            name: name,
            description: service.descriptions[lang],
            price: service.price,
            currency: service.currency,
            features: JSON.stringify({
              features: service.features[lang],
              technologies: service.technologies,
              category: service.id
            }),
            lang: lang,
            billing: 'monthly'
          }
        });
      }
    }

    console.log('✅ تم إضافة الباقات الإبداعية الجديدة بنجاح!');
    
    // عرض الإحصائيات المحدثة
    const totalPlans = await prisma.pricingPlan.count();
    const totalRecurring = await prisma.recurringService.count();
    
    console.log(`📊 إجمالي الباقات: ${totalPlans}`);
    console.log(`🔄 إجمالي الخدمات الشهرية: ${totalRecurring}`);
    console.log('🌱 تمت إضافة باقة البذرة (Seed) بسعر $299');
    console.log('🚀 تمت إضافة باقة النمو (Growth) بسعر $1,499');
    console.log('💎 تمت إضافة باقة الماس (Diamond) بسعر $7,999');

  } catch (error) {
    console.error('❌ خطأ:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addCreativePackages();

import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/lib/auth';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user
  const hashedPassword = await hashPassword('admin123');
  
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@mohammad.com' },
    update: {
      password: hashedPassword,
      name: 'Mohammad'
    },
    create: {
      email: 'admin@mohammad.com',
      name: 'Mohammad',
      password: hashedPassword,
    },
  });

  console.log('✅ Admin user created:', admin.email);

  // Seed Projects
  const projects = [
    {
      titleEn: 'AI-Powered Portfolio Website',
      titleAr: 'موقع المحفظة الشخصية بالذكاء الاصطناعي',
      titleTr: 'AI Destekli Portföy Web Sitesi',
      descriptionEn: 'A modern portfolio website built with Next.js 15, featuring AI-powered content management, multilingual support (Arabic, English, Turkish), and a sophisticated admin panel. Includes dark mode, responsive design, and seamless user experience.',
      descriptionAr: 'موقع محفظة حديث مبني بـ Next.js 15، يتميز بإدارة المحتوى بالذكاء الاصطناعي، والدعم متعدد اللغات (العربية والإنجليزية والتركية)، ولوحة إدارة متطورة. يشمل الوضع المظلم والتصميم المتجاوب وتجربة مستخدم سلسة.',
      descriptionTr: 'Next.js 15 ile oluşturulmuş modern bir portföy web sitesi. AI destekli içerik yönetimi, çok dilli destek (Arapça, İngilizce, Türkçe) ve gelişmiş yönetici paneli içerir. Karanlık mod, duyarlı tasarım ve sorunsuz kullanıcı deneyimi sunar.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      demoUrl: 'https://mohammad-portfolio.vercel.app',
      githubUrl: 'https://github.com/mohammad/portfolio',
      technologies: JSON.stringify(['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'SQLite', 'next-intl']),
      category: 'web',
      published: true
    },
    {
      titleEn: 'E-Commerce Mobile App',
      titleAr: 'تطبيق التجارة الإلكترونية للجوال',
      titleTr: 'E-Ticaret Mobil Uygulaması',
      descriptionEn: 'A cross-platform mobile application for e-commerce built with React Native. Features include product catalog, shopping cart, payment integration, user authentication, and real-time order tracking.',
      descriptionAr: 'تطبيق جوال متعدد المنصات للتجارة الإلكترونية مبني بـ React Native. يتضمن ميزات مثل كتالوج المنتجات وسلة التسوق وتكامل الدفع ومصادقة المستخدم وتتبع الطلبات في الوقت الفعلي.',
      descriptionTr: 'React Native ile oluşturulmuş platformlar arası e-ticaret mobil uygulaması. Ürün kataloğu, alışveriş sepeti, ödeme entegrasyonu, kullanıcı kimlik doğrulama ve gerçek zamanlı sipariş takibi gibi özellikler içerir.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.example.ecommerce',
      githubUrl: 'https://github.com/mohammad/ecommerce-app',
      technologies: JSON.stringify(['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Stripe']),
      category: 'mobile',
      published: true
    },
    {
      titleEn: 'Smart Home IoT Dashboard',
      titleAr: 'لوحة تحكم إنترنت الأشياء للمنزل الذكي',
      titleTr: 'Akıllı Ev IoT Kontrol Paneli',
      descriptionEn: 'An intelligent dashboard for managing smart home devices and IoT sensors. Built with Vue.js and Node.js, featuring real-time data visualization, device control, energy monitoring, and automated scheduling.',
      descriptionAr: 'لوحة تحكم ذكية لإدارة أجهزة المنزل الذكي وأجهزة استشعار إنترنت الأشياء. مبنية بـ Vue.js و Node.js، تتميز بتصور البيانات في الوقت الفعلي والتحكم في الأجهزة ومراقبة الطاقة والجدولة التلقائية.',
      descriptionTr: 'Akıllı ev cihazları ve IoT sensörlerini yönetmek için geliştirilmiş akıllı kontrol paneli. Vue.js ve Node.js ile oluşturulmuş, gerçek zamanlı veri görselleştirme, cihaz kontrolü, enerji izleme ve otomatik programlama özellikleri içerir.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      demoUrl: 'https://smarthome-demo.vercel.app',
      githubUrl: 'https://github.com/mohammad/iot-dashboard',
      technologies: JSON.stringify(['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Chart.js', 'MQTT']),
      category: 'web',
      published: true
    },
    {
      titleEn: 'Machine Learning Price Predictor',
      titleAr: 'متنبئ الأسعار بالتعلم الآلي',
      titleTr: 'Makine Öğrenmesi Fiyat Tahmincisi',
      descriptionEn: 'A machine learning model that predicts real estate prices based on location, size, amenities, and market trends. Implemented using Python, scikit-learn, and deployed with Flask API.',
      descriptionAr: 'نموذج تعلم آلي يتنبأ بأسعار العقارات بناءً على الموقع والحجم والمرافق واتجاهات السوق. مُنفذ باستخدام Python و scikit-learn ومنشور باستخدام Flask API.',
      descriptionTr: 'Konum, boyut, olanaklar ve pazar trendlerine dayalı gayrimenkul fiyatlarını tahmin eden makine öğrenmesi modeli. Python, scikit-learn kullanılarak geliştirilmiş ve Flask API ile dağıtılmış.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      demoUrl: 'https://price-predictor-api.herokuapp.com',
      githubUrl: 'https://github.com/mohammad/ml-price-predictor',
      technologies: JSON.stringify(['Python', 'scikit-learn', 'pandas', 'Flask', 'NumPy', 'Matplotlib', 'Docker']),
      category: 'ai',
      published: true
    },
    {
      titleEn: 'Microservices Backend Architecture',
      titleAr: 'معمارية الخدمات المصغرة للنهاية الخلفية',
      titleTr: 'Mikroservis Backend Mimarisi',
      descriptionEn: 'A scalable microservices architecture built with Node.js, Docker, and Kubernetes. Includes user authentication, payment processing, notification service, and API gateway with load balancing.',
      descriptionAr: 'معمارية خدمات مصغرة قابلة للتوسع مبنية بـ Node.js و Docker و Kubernetes. تشمل مصادقة المستخدم ومعالجة الدفع وخدمة الإشعارات وبوابة API مع توزيع الأحمال.',
      descriptionTr: 'Node.js, Docker ve Kubernetes ile oluşturulmuş ölçeklenebilir mikroservis mimarisi. Kullanıcı kimlik doğrulama, ödeme işleme, bildirim servisi ve yük dengeleme ile API gateway içerir.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop',
      demoUrl: '',
      githubUrl: 'https://github.com/mohammad/microservices-backend',
      technologies: JSON.stringify(['Node.js', 'Express', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'RabbitMQ']),
      category: 'backend',
      published: false
    }
  ];

  for (const project of projects) {
    const existingProject = await prisma.project.findFirst({
      where: { titleEn: project.titleEn }
    });

    if (existingProject) {
      await prisma.project.update({
        where: { id: existingProject.id },
        data: project,
      });
    } else {
      await prisma.project.create({
        data: project,
      });
    }
  }

  console.log('✅ Projects seeded successfully');

  // Seed Services
  const services = [
    // English Services
    {
      name: 'Custom Web Development',
      type: 'general',
      price: 2500.00,
      description: 'Full-stack web application development using modern technologies like Next.js, React, and Node.js. Includes responsive design, SEO optimization, and performance enhancement.',
      duration: '4-6 weeks',
      lang: 'en',
      features: JSON.stringify([
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Content Management System',
        'Database Integration',
        'API Development'
      ])
    },
    {
      name: 'Mobile App Development',
      type: 'general',
      price: 3500.00,
      description: 'Cross-platform mobile application development using React Native or Flutter. Includes UI/UX design, backend integration, and app store deployment.',
      duration: '6-8 weeks',
      lang: 'en',
      features: JSON.stringify([
        'Cross-platform Development',
        'Native Performance',
        'Push Notifications',
        'Offline Functionality',
        'App Store Deployment',
        'Backend Integration'
      ])
    },
    {
      name: 'AI/ML Solutions',
      type: 'general',
      price: 4000.00,
      description: 'Custom artificial intelligence and machine learning solutions including data analysis, predictive modeling, and automation systems.',
      duration: '8-12 weeks',
      lang: 'en',
      features: JSON.stringify([
        'Data Analysis',
        'Predictive Modeling',
        'Natural Language Processing',
        'Computer Vision',
        'Automation Systems',
        'Model Deployment'
      ])
    },
    {
      name: 'DevOps & Cloud Infrastructure',
      type: 'general',
      price: 2000.00,
      description: 'Complete DevOps setup including CI/CD pipelines, cloud infrastructure, monitoring, and automated deployment systems.',
      duration: '3-4 weeks',
      lang: 'en',
      features: JSON.stringify([
        'CI/CD Pipelines',
        'Cloud Infrastructure',
        'Container Orchestration',
        'Monitoring & Logging',
        'Security Implementation',
        'Automated Deployment'
      ])
    },
    // Arabic Services
    {
      name: 'تطوير مواقع الويب المخصصة',
      type: 'general',
      price: 2500.00,
      description: 'تطوير تطبيقات الويب الكاملة باستخدام التقنيات الحديثة مثل Next.js و React و Node.js. يشمل التصميم المتجاوب وتحسين محركات البحث وتحسين الأداء.',
      duration: '4-6 أسابيع',
      lang: 'ar',
      features: JSON.stringify([
        'التصميم المتجاوب',
        'تحسين محركات البحث',
        'تحسين الأداء',
        'نظام إدارة المحتوى',
        'تكامل قاعدة البيانات',
        'تطوير واجهة برمجة التطبيقات'
      ])
    },
    {
      name: 'تطوير تطبيقات الجوال',
      type: 'general',
      price: 3500.00,
      description: 'تطوير تطبيقات الجوال متعددة المنصات باستخدام React Native أو Flutter. يشمل تصميم واجهة المستخدم وتكامل الخادم ونشر المتجر.',
      duration: '6-8 أسابيع',
      lang: 'ar',
      features: JSON.stringify([
        'التطوير متعدد المنصات',
        'الأداء الأصلي',
        'الإشعارات الفورية',
        'الوظائف بدون اتصال',
        'نشر متجر التطبيقات',
        'تكامل الخادم'
      ])
    },
    {
      name: 'حلول الذكاء الاصطناعي والتعلم الآلي',
      type: 'general',
      price: 4000.00,
      description: 'حلول مخصصة للذكاء الاصطناعي والتعلم الآلي تشمل تحليل البيانات والنمذجة التنبؤية وأنظمة الأتمتة.',
      duration: '8-12 أسبوع',
      lang: 'ar',
      features: JSON.stringify([
        'تحليل البيانات',
        'النمذجة التنبؤية',
        'معالجة اللغة الطبيعية',
        'رؤية الحاسوب',
        'أنظمة الأتمتة',
        'نشر النماذج'
      ])
    },
    {
      name: 'DevOps والبنية التحتية السحابية',
      type: 'general',
      price: 2000.00,
      description: 'إعداد DevOps كامل يشمل خطوط CI/CD والبنية التحتية السحابية والمراقبة وأنظمة النشر الآلي.',
      duration: '3-4 أسابيع',
      lang: 'ar',
      features: JSON.stringify([
        'خطوط CI/CD',
        'البنية التحتية السحابية',
        'تنسيق الحاويات',
        'المراقبة والتسجيل',
        'تنفيذ الأمان',
        'النشر الآلي'
      ])
    },
    // Turkish Services
    {
      name: 'Özel Web Geliştirme',
      type: 'general',
      price: 2500.00,
      description: 'Next.js, React ve Node.js gibi modern teknolojiler kullanarak tam yığın web uygulaması geliştirme. Duyarlı tasarım, SEO optimizasyonu ve performans iyileştirme dahildir.',
      duration: '4-6 hafta',
      lang: 'tr',
      features: JSON.stringify([
        'Duyarlı Tasarım',
        'SEO Optimizasyonu',
        'Performans Optimizasyonu',
        'İçerik Yönetim Sistemi',
        'Veritabanı Entegrasyonu',
        'API Geliştirme'
      ])
    },
    {
      name: 'Mobil Uygulama Geliştirme',
      type: 'general',
      price: 3500.00,
      description: 'React Native veya Flutter kullanarak platformlar arası mobil uygulama geliştirme. UI/UX tasarım, backend entegrasyonu ve uygulama mağazası dağıtımı dahildir.',
      duration: '6-8 hafta',
      lang: 'tr',
      features: JSON.stringify([
        'Platformlar Arası Geliştirme',
        'Native Performans',
        'Push Bildirimleri',
        'Çevrimdışı İşlevsellik',
        'Uygulama Mağazası Dağıtımı',
        'Backend Entegrasyonu'
      ])
    },
    {
      name: 'AI/ML Çözümleri',
      type: 'general',
      price: 4000.00,
      description: 'Veri analizi, tahmine dayalı modelleme ve otomasyon sistemleri dahil olmak üzere özel yapay zeka ve makine öğrenmesi çözümleri.',
      duration: '8-12 hafta',
      lang: 'tr',
      features: JSON.stringify([
        'Veri Analizi',
        'Tahmine Dayalı Modelleme',
        'Doğal Dil İşleme',
        'Bilgisayarlı Görü',
        'Otomasyon Sistemleri',
        'Model Dağıtımı'
      ])
    },
    {
      name: 'DevOps ve Bulut Altyapısı',
      type: 'general',
      price: 2000.00,
      description: 'CI/CD pipelines, bulut altyapısı, izleme ve otomatik dağıtım sistemleri dahil olmak üzere komple DevOps kurulumu.',
      duration: '3-4 hafta',
      lang: 'tr',
      features: JSON.stringify([
        'CI/CD Pipelines',
        'Bulut Altyapısı',
        'Container Orchestration',
        'İzleme ve Kayıt',
        'Güvenlik Uygulaması',
        'Otomatik Dağıtım'
      ])
    }
  ];

  for (const service of services) {
    const existingService = await prisma.service.findFirst({
      where: { 
        name: service.name,
        lang: service.lang 
      }
    });

    if (existingService) {
      await prisma.service.update({
        where: { id: existingService.id },
        data: service,
      });
    } else {
      await prisma.service.create({
        data: service,
      });
    }
  }

  console.log('✅ Services seeded successfully');

  // Seed Pricing Plans
  const pricingPlans = [
    // English Pricing Plans
    {
      name: 'Personal Website',
      price: 300.00,
      currency: 'USD',
      lang: 'en',
      popular: false,
      features: JSON.stringify([
        'Personal Website + CV Builder',
        'Fast, SEO-friendly design',
        'CV protection system',
        'Social media integrations',
        'Mobile responsive',
        '3 Months maintenance'
      ])
    },
    {
      name: 'Admin Dashboard',
      price: 400.00,
      currency: 'USD',
      lang: 'en',
      popular: false,
      features: JSON.stringify([
        'Full-featured admin panel',
        'Database CRUD operations',
        'File management system',
        'User authentication',
        'Role-based permissions',
        'Custom design'
      ])
    },
    {
      name: 'AI Automation Tools',
      price: 500.00,
      currency: 'USD',
      lang: 'en',
      popular: false,
      features: JSON.stringify([
        'GPT / OpenAI integration',
        'Social media automation',
        'E-commerce tools',
        'Internal workflow automation',
        'Custom AI modules',
        'API integrations'
      ])
    },
    {
      name: 'Custom SaaS MVP',
      price: 1200.00,
      currency: 'USD',
      lang: 'en',
      popular: true,
      features: JSON.stringify([
        'Complete SaaS solution',
        'User authentication system',
        'Subscription management',
        'Admin dashboard',
        'AI modules integration',
        'Payment processing',
        'Database design',
        '6 Months support'
      ])
    },
    // Arabic Pricing Plans
    {
      name: 'المبتدئ',
      price: 999.00,
      currency: 'USD',
      lang: 'ar',
      popular: false,
      features: JSON.stringify([
        'موقع ويب متجاوب (حتى 5 صفحات)',
        'إعداد SEO أساسي',
        'تكامل نموذج الاتصال',
        'روابط وسائل التواصل الاجتماعي',
        'تحسين الجوال',
        '3 أشهر صيانة مجانية'
      ])
    },
    {
      name: 'المحترف',
      price: 2499.00,
      currency: 'USD',
      lang: 'ar',
      popular: true,
      features: JSON.stringify([
        'موقع ويب مخصص (حتى 15 صفحة)',
        'تحسين SEO متقدم',
        'نظام إدارة المحتوى',
        'تكامل المدونة',
        'إعداد التحليلات',
        'تحسين الأداء',
        '6 أشهر صيانة مجانية',
        'جلسات تدريبية'
      ])
    },
    {
      name: 'المؤسسة',
      price: 4999.00,
      currency: 'USD',
      lang: 'ar',
      popular: false,
      features: JSON.stringify([
        'صفحات غير محدودة',
        'تطبيق ويب مخصص',
        'تكامل قاعدة البيانات',
        'تطوير API',
        'أمان متقدم',
        'مراقبة الأداء',
        'تكامل التجارة الإلكترونية',
        'دعم متعدد اللغات',
        '12 شهر صيانة مجانية',
        'دعم أولوية'
      ])
    },
    // Turkish Pricing Plans
    {
      name: 'Başlangıç',
      price: 999.00,
      currency: 'USD',
      lang: 'tr',
      popular: false,
      features: JSON.stringify([
        'Duyarlı Web Sitesi (5 sayfaya kadar)',
        'Temel SEO Kurulumu',
        'İletişim Formu Entegrasyonu',
        'Sosyal Medya Bağlantıları',
        'Mobil Optimizasyon',
        '3 Ay Ücretsiz Bakım'
      ])
    },
    {
      name: 'Profesyonel',
      price: 2499.00,
      currency: 'USD',
      lang: 'tr',
      popular: true,
      features: JSON.stringify([
        'Özel Web Sitesi (15 sayfaya kadar)',
        'Gelişmiş SEO Optimizasyonu',
        'İçerik Yönetim Sistemi',
        'Blog Entegrasyonu',
        'Analitik Kurulumu',
        'Performans Optimizasyonu',
        '6 Ay Ücretsiz Bakım',
        'Eğitim Oturumları'
      ])
    },
    {
      name: 'Kurumsal',
      price: 4999.00,
      currency: 'USD',
      lang: 'tr',
      popular: false,
      features: JSON.stringify([
        'Sınırsız Sayfa',
        'Özel Web Uygulaması',
        'Veritabanı Entegrasyonu',
        'API Geliştirme',
        'Gelişmiş Güvenlik',
        'Performans İzleme',
        'E-ticaret Entegrasyonu',
        'Çok Dilli Destek',
        '12 Ay Ücretsiz Bakım',
        'Öncelikli Destek'
      ])
    }
  ];

  for (const plan of pricingPlans) {
    const existingPlan = await prisma.pricingPlan.findFirst({
      where: { 
        name: plan.name,
        lang: plan.lang 
      }
    });

    if (existingPlan) {
      await prisma.pricingPlan.update({
        where: { id: existingPlan.id },
        data: plan,
      });
    } else {
      await prisma.pricingPlan.create({
        data: plan,
      });
    }
  }

  console.log('✅ Pricing plans seeded successfully');

  // Seed Recurring Services
  const recurringServices = [
    // English Recurring Services
    {
      name: 'Ongoing Maintenance',
      description: 'Monthly code updates, performance improvements, bug fixes, and technical consulting',
      price: 150.00,
      currency: 'USD',
      lang: 'en',
      billing: 'monthly',
      popular: true,
      features: JSON.stringify([
        'Monthly code updates',
        'Performance improvements',
        'Bug fixes and security patches',
        'Technical consulting',
        'Priority support',
        'Monthly performance reports'
      ])
    },
    {
      name: 'SEO & Marketing Support',
      description: 'Ongoing SEO optimization and digital marketing support',
      price: 299.00,
      currency: 'USD',
      lang: 'en',
      billing: 'monthly',
      popular: false,
      features: JSON.stringify([
        'SEO Monitoring & Optimization',
        'Content Strategy',
        'Social Media Management',
        'Performance Analytics',
        'Keyword Research',
        'Competitor Analysis'
      ])
    },
    {
      name: 'Full Support Package',
      description: 'Comprehensive monthly support for all your digital needs',
      price: 499.00,
      currency: 'USD',
      lang: 'en',
      billing: 'monthly',
      popular: false,
      features: JSON.stringify([
        'Everything in Website Maintenance',
        'Everything in SEO & Marketing',
        'Priority Support (24/7)',
        'Custom Development Hours (5h)',
        'Strategy Consulting',
        'Growth Analytics'
      ])
    },

    // Arabic Recurring Services
    {
      name: 'الصيانة المستمرة',
      description: 'تحديثات الكود الشهرية، تحسينات الأداء، إصلاح الأخطاء، والاستشارات التقنية',
      price: 150.00,
      currency: 'USD',
      lang: 'ar',
      billing: 'monthly',
      popular: true,
      features: JSON.stringify([
        'تحديثات كود شهرية',
        'تحسينات الأداء',
        'إصلاح الأخطاء وتصحيحات الأمان',
        'الاستشارات التقنية',
        'دعم أولوية',
        'تقارير أداء شهرية'
      ])
    },
    {
      name: 'دعم SEO والتسويق',
      description: 'تحسين SEO المستمر ودعم التسويق الرقمي',
      price: 299.00,
      currency: 'USD',
      lang: 'ar',
      billing: 'monthly',
      popular: false,
      features: JSON.stringify([
        'مراقبة وتحسين SEO',
        'استراتيجية المحتوى',
        'إدارة وسائل التواصل الاجتماعي',
        'تحليلات الأداء',
        'بحث الكلمات المفتاحية',
        'تحليل المنافسين'
      ])
    },
    {
      name: 'باقة الدعم الشامل',
      description: 'دعم شهري شامل لجميع احتياجاتك الرقمية',
      price: 499.00,
      currency: 'USD',
      lang: 'ar',
      billing: 'monthly',
      popular: false,
      features: JSON.stringify([
        'كل ما في صيانة الموقع',
        'كل ما في دعم SEO والتسويق',
        'دعم أولوية (24/7)',
        'ساعات تطوير مخصصة (5 ساعات)',
        'استشارات استراتيجية',
        'تحليلات النمو'
      ])
    },

    // Turkish Recurring Services
    {
      name: 'Sürekli Bakım',
      description: 'Aylık kod güncellemeleri, performans iyileştirmeleri, hata düzeltmeleri ve teknik danışmanlık',
      price: 150.00,
      currency: 'USD',
      lang: 'tr',
      billing: 'monthly',
      popular: true,
      features: JSON.stringify([
        'Aylık kod güncellemeleri',
        'Performans iyileştirmeleri',
        'Hata düzeltmeleri ve güvenlik yamaları',
        'Teknik danışmanlık',
        'Öncelikli destek',
        'Aylık performans raporları'
      ])
    }
  ];

  for (const service of recurringServices) {
    const existingService = await prisma.recurringService.findFirst({
      where: {
        name: service.name,
        lang: service.lang
      }
    });

    if (existingService) {
      await prisma.recurringService.update({
        where: { id: existingService.id },
        data: service
      });
    } else {
      await prisma.recurringService.create({
        data: service
      });
    }
  }

  console.log('✅ Recurring services seeded successfully');

  // Seed Personal Info
  const personalInfo = {
    nameEn: 'Mohammad Ziad Kfelati',
    nameAr: 'محمد زياد قفيلاتي',
    nameTr: 'Mohammad Ziad Kfelati',
    titleEn: 'ICT Officer | Full-Stack Developer | AI-Powered SaaS Architect',
    titleAr: 'مسؤول تقنية المعلومات | مطور ويب متكامل | مهندس منصات SaaS بالذكاء الاصطناعي',
    titleTr: 'BİT Sorumlusu | Full-Stack Geliştirici | AI Destekli SaaS Mimarı',
    bioEn: "I'm a passionate Syrian developer with 14+ years of experience. I specialize in building full-stack web applications, AI-powered SaaS platforms, and automation tools. I'm based in Istanbul and actively working on projects that blend tech, community, and innovation.",
    bioAr: 'أنا مطور سوري شغوف مع أكثر من 14 عامًا من الخبرة. متخصص في بناء تطبيقات الويب المتكاملة ومنصات SaaS بالذكاء الاصطناعي وأدوات الأتمتة. أعيش في إسطنبول وأعمل بنشاط على مشاريع تمزج بين التكنولوجيا والمجتمع والابتكار.',
    bioTr: '14+ yıl deneyime sahip tutkulu Suriyeli geliştiriciyim. Full-stack web uygulamaları, AI destekli SaaS platformları ve otomasyon araçları geliştirme konusunda uzmanım. İstanbul merkezli olarak teknoloji, toplum ve inovasyonu harmanlayan projeler üzerinde aktif olarak çalışıyorum.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    resumeUrl: 'https://linkedin.com/in/mohammadkfelati',
    location: 'Istanbul, Turkey',
    yearsExp: 14
  };

  const existingPersonalInfo = await prisma.personalInfo.findFirst();
  if (existingPersonalInfo) {
    await prisma.personalInfo.update({
      where: { id: existingPersonalInfo.id },
      data: personalInfo,
    });
  } else {
    await prisma.personalInfo.create({
      data: personalInfo,
    });
  }

  console.log('✅ Personal info seeded successfully');

  // Seed Contact Info
  const contactInfo = [
    // English
    { type: 'email', value: 'mohammad.kfelati@gmail.com', label: 'Email', lang: 'en', isPrimary: true },
    { type: 'phone', value: '+905317255372', label: 'WhatsApp', lang: 'en', isPrimary: true },
    { type: 'address', value: 'Istanbul, Turkey', label: 'Location', lang: 'en', isPrimary: true },
    // Arabic
    { type: 'email', value: 'mohammad.kfelati@gmail.com', label: 'البريد الإلكتروني', lang: 'ar', isPrimary: true },
    { type: 'phone', value: '+905317255372', label: 'واتساب', lang: 'ar', isPrimary: true },
    { type: 'address', value: 'إسطنبول، تركيا', label: 'الموقع', lang: 'ar', isPrimary: true },
    // Turkish
    { type: 'email', value: 'mohammad.kfelati@gmail.com', label: 'E-posta', lang: 'tr', isPrimary: true },
    { type: 'phone', value: '+905317255372', label: 'WhatsApp', lang: 'tr', isPrimary: true },
    { type: 'address', value: 'İstanbul, Türkiye', label: 'Konum', lang: 'tr', isPrimary: true },
  ];

  for (const contact of contactInfo) {
    const existingContact = await prisma.contactInfo.findFirst({
      where: { 
        type: contact.type,
        lang: contact.lang 
      }
    });

    if (existingContact) {
      await prisma.contactInfo.update({
        where: { id: existingContact.id },
        data: contact,
      });
    } else {
      await prisma.contactInfo.create({
        data: contact,
      });
    }
  }

  console.log('✅ Contact info seeded successfully');

  // Seed Social Media
  const socialMedia = [
    { platform: 'linkedin', url: 'https://linkedin.com/in/mohammadkfelati', username: 'mohammadkfelati', isVisible: true },
    { platform: 'github', url: 'https://github.com/mohammadk88', username: 'mohammadk88', isVisible: true },
    { platform: 'facebook', url: 'https://facebook.com/mohammad.kfelati', username: 'mohammad.kfelati', isVisible: true },
    { platform: 'twitter', url: 'https://x.com/mohammad_kfelati', username: 'mohammad_kfelati', isVisible: true },
    { platform: 'instagram', url: 'https://instagram.com/mohammad_kfelati', username: 'mohammad_kfelati', isVisible: true },
    { platform: 'tiktok', url: 'https://tiktok.com/@mohammad_kfelati', username: 'mohammad_kfelati', isVisible: true },
    { platform: 'youtube', url: 'https://youtube.com/@mohammad_kfelati', username: 'mohammad_kfelati', isVisible: true },
  ];

  for (const social of socialMedia) {
    const existingSocial = await prisma.socialMedia.findFirst({
      where: { platform: social.platform }
    });

    if (existingSocial) {
      await prisma.socialMedia.update({
        where: { id: existingSocial.id },
        data: social,
      });
    } else {
      await prisma.socialMedia.create({
        data: social,
      });
    }
  }

  console.log('✅ Social media seeded successfully');

  // Seed Skills
  const skills = [
    // Frontend
    { name: 'React', category: 'frontend', level: 95, icon: 'react' },
    { name: 'Next.js', category: 'frontend', level: 92, icon: 'nextjs' },
    { name: 'Vue.js', category: 'frontend', level: 88, icon: 'vue' },
    { name: 'TypeScript', category: 'frontend', level: 90, icon: 'typescript' },
    { name: 'Tailwind CSS', category: 'frontend', level: 95, icon: 'tailwind' },
    
    // Backend
    { name: 'Laravel', category: 'backend', level: 95, icon: 'laravel' },
    { name: 'NestJS', category: 'backend', level: 90, icon: 'nestjs' },
    { name: 'Node.js', category: 'backend', level: 92, icon: 'nodejs' },
    { name: 'PostgreSQL', category: 'backend', level: 88, icon: 'postgresql' },
    { name: 'MySQL', category: 'backend', level: 90, icon: 'mysql' },
    { name: 'Prisma', category: 'backend', level: 85, icon: 'prisma' },
    
    // AI & Automation
    { name: 'OpenAI API', category: 'ai', level: 88, icon: 'openai' },
    { name: 'AI Integration', category: 'ai', level: 85, icon: 'ai' },
    { name: 'Automation Tools', category: 'ai', level: 90, icon: 'automation' },
    { name: 'SaaS Development', category: 'ai', level: 88, icon: 'saas' },
    
    // Tools & DevOps
    { name: 'Docker', category: 'tools', level: 85, icon: 'docker' },
    { name: 'Git', category: 'tools', level: 95, icon: 'git' },
    { name: 'AWS', category: 'tools', level: 80, icon: 'aws' },
    { name: 'Vercel', category: 'tools', level: 90, icon: 'vercel' },
    { name: 'Payment Integration', category: 'tools', level: 85, icon: 'payment' },
    
    // Languages
    { name: 'JavaScript', category: 'languages', level: 95, icon: 'javascript' },
    { name: 'PHP', category: 'languages', level: 92, icon: 'php' },
    { name: 'TypeScript', category: 'languages', level: 90, icon: 'typescript' },
    { name: 'SQL', category: 'languages', level: 88, icon: 'sql' },
  ];

  for (const skill of skills) {
    const existingSkill = await prisma.skill.findFirst({
      where: { 
        name: skill.name,
        category: skill.category 
      }
    });

    if (existingSkill) {
      await prisma.skill.update({
        where: { id: existingSkill.id },
        data: skill,
      });
    } else {
      await prisma.skill.create({
        data: skill,
      });
    }
  }

  console.log('✅ Skills seeded successfully');

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateServicesBasedOnProjects() {
  try {
    console.log('🗑️ حذف الخدمات والأسعار القديمة...');
    
    // حذف البيانات القديمة
    await prisma.recurringService.deleteMany({});
    await prisma.pricingPlan.deleteMany({});
    await prisma.service.deleteMany({});

    console.log('✅ تم حذف البيانات القديمة');

    // الخدمات الجديدة بناءً على المشاريع والخبرات
    const services = [
      // خدمات تطوير المواقع (Web Development)
      {
        nameEn: 'Business Website Development',
        nameAr: 'تطوير مواقع الشركات',
        nameTr: 'İş Web Sitesi Geliştirme',
        category: 'web',
        priceRange: '$800 - $2500',
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
        features: {
          en: ['Responsive Design', 'SEO Optimization', 'Content Management', 'Analytics Integration', 'SSL Security'],
          ar: ['تصميم متجاوب', 'تحسين محركات البحث', 'إدارة المحتوى', 'تكامل التحليلات', 'أمان SSL'],
          tr: ['Duyarlı Tasarım', 'SEO Optimizasyonu', 'İçerik Yönetimi', 'Analitik Entegrasyonu', 'SSL Güvenliği']
        }
      },
      {
        nameEn: 'Portfolio & Creative Websites',
        nameAr: 'مواقع المحافظ الإبداعية',
        nameTr: 'Portföy ve Yaratıcı Web Siteleri',
        category: 'web',
        priceRange: '$600 - $1800',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Sanity'],
        features: {
          en: ['Interactive Animations', 'Portfolio Showcase', 'Contact Forms', 'Blog Integration', 'Mobile Optimized'],
          ar: ['حركات تفاعلية', 'عرض الأعمال', 'نماذج الاتصال', 'تكامل المدونة', 'محسن للموبايل'],
          tr: ['Etkileşimli Animasyonlar', 'Portföy Vitrin', 'İletişim Formları', 'Blog Entegrasyonu', 'Mobil Optimize']
        }
      },

      // خدمات التجارة الإلكترونية (E-commerce)
      {
        nameEn: 'E-commerce Platform Development',
        nameAr: 'تطوير منصات التجارة الإلكترونية',
        nameTr: 'E-ticaret Platform Geliştirme',
        category: 'ecommerce',
        priceRange: '$1500 - $5000',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
        features: {
          en: ['Payment Gateway Integration', 'Inventory Management', 'Order Tracking', 'Admin Dashboard', 'Customer Accounts'],
          ar: ['تكامل بوابة الدفع', 'إدارة المخزون', 'تتبع الطلبات', 'لوحة الإدارة', 'حسابات العملاء'],
          tr: ['Ödeme Ağ Geçidi Entegrasyonu', 'Envanter Yönetimi', 'Sipariş Takibi', 'Yönetici Paneli', 'Müşteri Hesapları']
        }
      },

      // خدمات تطبيقات الموبايل (Mobile Apps)
      {
        nameEn: 'Cross-Platform Mobile Apps',
        nameAr: 'تطبيقات الموبايل متعددة المنصات',
        nameTr: 'Çapraz Platform Mobil Uygulamalar',
        category: 'mobile',
        priceRange: '$2000 - $6000',
        technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js'],
        features: {
          en: ['iOS & Android Compatible', 'Real-time Features', 'Push Notifications', 'Offline Capability', 'API Integration'],
          ar: ['متوافق مع iOS و Android', 'ميزات فورية', 'إشعارات فورية', 'إمكانية عمل بدون إنترنت', 'تكامل API'],
          tr: ['iOS ve Android Uyumlu', 'Gerçek Zamanlı Özellikler', 'Anlık Bildirimler', 'Çevrimdışı Yetenek', 'API Entegrasyonu']
        }
      },

      // خدمات الذكاء الاصطناعي (AI Solutions)
      {
        nameEn: 'AI-Powered Solutions',
        nameAr: 'حلول مدعومة بالذكاء الاصطناعي',
        nameTr: 'AI Destekli Çözümler',
        category: 'ai',
        priceRange: '$1000 - $4000',
        technologies: ['OpenAI GPT', 'Python', 'FastAPI', 'LangChain', 'Redis'],
        features: {
          en: ['Chatbot Development', 'Document Analysis', 'Content Generation', 'Data Processing', 'API Integration'],
          ar: ['تطوير روبوت المحادثة', 'تحليل الوثائق', 'إنتاج المحتوى', 'معالجة البيانات', 'تكامل API'],
          tr: ['Chatbot Geliştirme', 'Belge Analizi', 'İçerik Oluşturma', 'Veri İşleme', 'API Entegrasyonu']
        }
      },

      // خدمات أنظمة ERP
      {
        nameEn: 'Enterprise Resource Planning (ERP)',
        nameAr: 'أنظمة تخطيط موارد المؤسسات',
        nameTr: 'Kurumsal Kaynak Planlama (ERP)',
        category: 'erp',
        priceRange: '$3000 - $10000',
        technologies: ['Laravel', 'Django', 'Vue.js', 'PostgreSQL', 'Docker'],
        features: {
          en: ['Multi-module System', 'User Management', 'Reporting & Analytics', 'Integration Capabilities', 'Custom Workflows'],
          ar: ['نظام متعدد الوحدات', 'إدارة المستخدمين', 'التقارير والتحليلات', 'قدرات التكامل', 'سير عمل مخصص'],
          tr: ['Çok Modüllü Sistem', 'Kullanıcı Yönetimi', 'Raporlama ve Analitik', 'Entegrasyon Yetenekleri', 'Özel İş Akışları']
        }
      },

      // خدمات أنظمة CRM
      {
        nameEn: 'Customer Relationship Management (CRM)',
        nameAr: 'أنظمة إدارة علاقات العملاء',
        nameTr: 'Müşteri İlişkileri Yönetimi (CRM)',
        category: 'crm',
        priceRange: '$2000 - $7000',
        technologies: ['Ruby on Rails', 'Laravel', 'React', 'PostgreSQL', 'Twilio'],
        features: {
          en: ['Contact Management', 'Sales Pipeline', 'Email Integration', 'Task Automation', 'Performance Analytics'],
          ar: ['إدارة جهات الاتصال', 'مسار المبيعات', 'تكامل البريد الإلكتروني', 'أتمتة المهام', 'تحليلات الأداء'],
          tr: ['İletişim Yönetimi', 'Satış Hattı', 'E-posta Entegrasyonu', 'Görev Otomasyonu', 'Performans Analizi']
        }
      },

      // خدمات منصات SaaS
      {
        nameEn: 'SaaS Platform Development',
        nameAr: 'تطوير منصات البرمجيات كخدمة',
        nameTr: 'SaaS Platform Geliştirme',
        category: 'saas',
        priceRange: '$4000 - $15000',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Vercel'],
        features: {
          en: ['Multi-tenant Architecture', 'Subscription Management', 'API Development', 'Third-party Integrations', 'Scalable Infrastructure'],
          ar: ['بنية متعددة المستأجرين', 'إدارة الاشتراكات', 'تطوير API', 'تكاملات خارجية', 'بنية تحتية قابلة للتوسع'],
          tr: ['Çok Kiracılı Mimari', 'Abonelik Yönetimi', 'API Geliştirme', 'Üçüncü Taraf Entegrasyonları', 'Ölçeklenebilir Altyapı']
        }
      },

      // خدمات أنظمة المطاعم
      {
        nameEn: 'Restaurant Management Systems',
        nameAr: 'أنظمة إدارة المطاعم',
        nameTr: 'Restoran Yönetim Sistemleri',
        category: 'restaurant',
        priceRange: '$1500 - $5000',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Stripe'],
        features: {
          en: ['POS System', 'Order Management', 'Kitchen Display', 'Delivery Integration', 'Analytics Dashboard'],
          ar: ['نظام نقاط البيع', 'إدارة الطلبات', 'عرض المطبخ', 'تكامل التوصيل', 'لوحة التحليلات'],
          tr: ['POS Sistemi', 'Sipariş Yönetimi', 'Mutfak Ekranı', 'Teslimat Entegrasyonu', 'Analitik Paneli']
        }
      }
    ];

    console.log('📦 إنشاء الخدمات الجديدة...');

    // إنشاء الخدمات الجديدة
    for (const service of services) {
      // إنشاء خدمة بالإنجليزية
      await prisma.service.create({
        data: {
          name: service.nameEn,
          type: 'development',
          price: null, // سيتم التواصل عبر الواتساب للأسعار
          description: `Professional ${service.category} development using ${service.technologies.join(', ')}. Price range: ${service.priceRange}`,
          duration: 'Contact via WhatsApp for timeline',
          lang: 'en',
          features: JSON.stringify(service.features.en)
        }
      });

      // إنشاء خدمة بالعربية  
      await prisma.service.create({
        data: {
          name: service.nameAr,
          type: 'development',
          price: null,
          description: `تطوير احترافي لـ ${service.category} باستخدام ${service.technologies.join(', ')}. نطاق السعر: ${service.priceRange}`,
          duration: 'تواصل عبر الواتساب لمعرفة الجدول الزمني',
          lang: 'ar',
          features: JSON.stringify(service.features.ar)
        }
      });

      // إنشاء خدمة بالتركية
      await prisma.service.create({
        data: {
          name: service.nameTr,
          type: 'development',
          price: null,
          description: `${service.technologies.join(', ')} kullanarak profesyonel ${service.category} geliştirme. Fiyat aralığı: ${service.priceRange}`,
          duration: 'Zaman çizelgesi için WhatsApp ile iletişime geçin',
          lang: 'tr',
          features: JSON.stringify(service.features.tr)
        }
      });
    }

    console.log('✅ تم إنشاء جميع الخدمات الجديدة');
    
    // عرض ملخص الخدمات
    const serviceCount = await prisma.service.count();
    console.log(`📊 إجمالي الخدمات: ${serviceCount} خدمة`);
    console.log(`📱 جميع الخدمات تتطلب التواصل عبر الواتساب`);
    console.log(`🚫 تم إلغاء نظام الدفع المباشر`);

  } catch (error) {
    console.error('❌ خطأ:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateServicesBasedOnProjects();

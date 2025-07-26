const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createInnovativeServices() {
  try {
    console.log('🗑️ تنظيف قاعدة البيانات...');
    
    // حذف البيانات القديمة
    await prisma.recurringService.deleteMany({});
    await prisma.pricingPlan.deleteMany({});
    await prisma.service.deleteMany({});

    console.log('✅ تم تنظيف قاعدة البيانات');

    // 🎯 الخدمات المدفوعة لمرة واحدة (مستوحاة من المشاريع)
    const oneTimeServices = [
      // ⭐ باقة المبتدئين - Starter
      {
        id: 'starter',
        names: {
          en: 'Starter Digital Package',
          ar: 'باقة البداية الرقمية',
          tr: 'Başlangıç Dijital Paketi'
        },
        descriptions: {
          en: 'Perfect for startups and small businesses looking to establish their digital presence with essential tools.',
          ar: 'مثالية للشركات الناشئة والصغيرة التي تريد بناء حضورها الرقمي بالأدوات الأساسية.',
          tr: 'Dijital varlıklarını temel araçlarla kurmak isteyen yeni başlayanlar ve küçük işletmeler için mükemmel.'
        },
        price: 799,
        currency: 'USD',
        features: {
          en: [
            'Business Website (5-8 pages)',
            'Responsive Mobile Design',
            'Contact Form Integration',
            'Basic SEO Setup',
            'Social Media Integration',
            '3 Months Free Support',
            'SSL Certificate Setup',
            'Google Analytics Integration'
          ],
          ar: [
            'موقع شركة (5-8 صفحات)',
            'تصميم متجاوب للموبايل',
            'تكامل نموذج الاتصال',
            'إعداد SEO أساسي',
            'تكامل وسائل التواصل الاجتماعي',
            '3 أشهر دعم مجاني',
            'إعداد شهادة SSL',
            'تكامل Google Analytics'
          ],
          tr: [
            'İş Web Sitesi (5-8 sayfa)',
            'Duyarlı Mobil Tasarım',
            'İletişim Formu Entegrasyonu',
            'Temel SEO Kurulumu',
            'Sosyal Medya Entegrasyonu',
            '3 Ay Ücretsiz Destek',
            'SSL Sertifikası Kurulumu',
            'Google Analytics Entegrasyonu'
          ]
        },
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
        popular: false,
        deliveryTime: '2-3 weeks'
      },

      // 🚀 باقة المحترفين - Professional
      {
        id: 'professional',
        names: {
          en: 'Professional Business Suite',
          ar: 'مجموعة الأعمال المحترفة',
          tr: 'Profesyonel İş Paketi'
        },
        descriptions: {
          en: 'Comprehensive solution for growing businesses with advanced features, e-commerce capabilities, and custom functionality.',
          ar: 'حل شامل للشركات النامية مع ميزات متقدمة وقدرات تجارة إلكترونية ووظائف مخصصة.',
          tr: 'Gelişmiş özellikler, e-ticaret yetenekleri ve özel işlevsellik ile büyüyen işletmeler için kapsamlı çözüm.'
        },
        price: 1999,
        currency: 'USD',
        features: {
          en: [
            'E-commerce Platform (50+ products)',
            'Payment Gateway Integration',
            'Admin Dashboard',
            'Inventory Management',
            'Customer Portal',
            'Email Marketing Setup',
            'Advanced SEO & Analytics',
            '6 Months Premium Support',
            'Mobile App (iOS/Android)',
            'API Integration',
            'Security & Performance Optimization'
          ],
          ar: [
            'منصة تجارة إلكترونية (+50 منتج)',
            'تكامل بوابة الدفع',
            'لوحة إدارة',
            'إدارة المخزون',
            'بوابة العملاء',
            'إعداد التسويق بالبريد الإلكتروني',
            'SEO وتحليلات متقدمة',
            '6 أشهر دعم مميز',
            'تطبيق موبايل (iOS/Android)',
            'تكامل API',
            'تحسين الأمان والأداء'
          ],
          tr: [
            'E-ticaret Platformu (50+ ürün)',
            'Ödeme Ağ Geçidi Entegrasyonu',
            'Yönetici Paneli',
            'Envanter Yönetimi',
            'Müşteri Portalı',
            'E-posta Pazarlama Kurulumu',
            'Gelişmiş SEO ve Analitik',
            '6 Ay Premium Destek',
            'Mobil Uygulama (iOS/Android)',
            'API Entegrasyonu',
            'Güvenlik ve Performans Optimizasyonu'
          ]
        },
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'React Native'],
        popular: true,
        deliveryTime: '6-8 weeks'
      },

      // 🏢 باقة المؤسسات - Enterprise
      {
        id: 'enterprise',
        names: {
          en: 'Enterprise Digital Transformation',
          ar: 'التحول الرقمي للمؤسسات',
          tr: 'Kurumsal Dijital Dönüşüm'
        },
        descriptions: {
          en: 'Complete digital transformation package with AI integration, custom ERP/CRM systems, and enterprise-grade infrastructure.',
          ar: 'حزمة تحول رقمي كاملة مع تكامل الذكاء الاصطناعي وأنظمة ERP/CRM مخصصة وبنية تحتية على مستوى المؤسسات.',
          tr: 'AI entegrasyonu, özel ERP/CRM sistemleri ve kurumsal düzeyde altyapı ile tam dijital dönüşüm paketi.'
        },
        price: 4999,
        currency: 'USD',
        features: {
          en: [
            'Custom ERP/CRM System',
            'AI-Powered Analytics & Insights',
            'Multi-platform Mobile Apps',
            'Advanced Security Framework',
            'Cloud Infrastructure Setup',
            'Data Migration & Integration',
            'Staff Training & Documentation',
            '12 Months Enterprise Support',
            'Performance Monitoring Dashboard',
            'Automated Backup Systems',
            'Multi-language Support',
            'Custom API Development',
            'Third-party Integrations'
          ],
          ar: [
            'نظام ERP/CRM مخصص',
            'تحليلات ورؤى مدعومة بالذكاء الاصطناعي',
            'تطبيقات موبايل متعددة المنصات',
            'إطار أمان متقدم',
            'إعداد البنية التحتية السحابية',
            'ترحيل البيانات والتكامل',
            'تدريب الموظفين والوثائق',
            '12 شهر دعم مؤسسي',
            'لوحة مراقبة الأداء',
            'أنظمة النسخ الاحتياطي الآلي',
            'دعم متعدد اللغات',
            'تطوير API مخصص',
            'تكاملات خارجية'
          ],
          tr: [
            'Özel ERP/CRM Sistemi',
            'AI Destekli Analitik ve İçgörüler',
            'Çok Platformlu Mobil Uygulamalar',
            'Gelişmiş Güvenlik Çerçevesi',
            'Bulut Altyapısı Kurulumu',
            'Veri Geçişi ve Entegrasyon',
            'Personel Eğitimi ve Dokümantasyon',
            '12 Ay Kurumsal Destek',
            'Performans İzleme Paneli',
            'Otomatik Yedekleme Sistemleri',
            'Çok Dil Desteği',
            'Özel API Geliştirme',
            'Üçüncü Taraf Entegrasyonları'
          ]
        },
        technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS', 'OpenAI'],
        popular: false,
        deliveryTime: '12-16 weeks'
      }
    ];

    // 🔄 الخدمات المتكررة (الاشتراكات الشهرية)
    const recurringServices = [
      // 📱 إدارة المحتوى والتسويق الرقمي
      {
        id: 'content_marketing',
        names: {
          en: 'Digital Marketing & Content Management',
          ar: 'إدارة المحتوى والتسويق الرقمي',
          tr: 'Dijital Pazarlama ve İçerik Yönetimi'
        },
        descriptions: {
          en: 'Comprehensive digital marketing service with content creation, social media management, and performance analytics.',
          ar: 'خدمة تسويق رقمي شاملة مع إنشاء المحتوى وإدارة وسائل التواصل الاجتماعي وتحليلات الأداء.',
          tr: 'İçerik oluşturma, sosyal medya yönetimi ve performans analizi ile kapsamlı dijital pazarlama hizmeti.'
        },
        price: 299,
        currency: 'USD',
        features: {
          en: [
            'Weekly Content Creation (8-12 posts)',
            'Social Media Management (3 platforms)',
            'Email Newsletter (2 per month)',
            'SEO Content Optimization',
            'Monthly Performance Reports',
            'Brand Guidelines Management',
            'Competitor Analysis',
            'Engagement Strategy Development'
          ],
          ar: [
            'إنشاء محتوى أسبوعي (8-12 منشور)',
            'إدارة وسائل التواصل الاجتماعي (3 منصات)',
            'رسالة إخبارية بالبريد الإلكتروني (2 شهرياً)',
            'تحسين محتوى SEO',
            'تقارير أداء شهرية',
            'إدارة هوية العلامة التجارية',
            'تحليل المنافسين',
            'تطوير استراتيجية التفاعل'
          ],
          tr: [
            'Haftalık İçerik Oluşturma (8-12 gönderi)',
            'Sosyal Medya Yönetimi (3 platform)',
            'E-posta Bülteni (ayda 2)',
            'SEO İçerik Optimizasyonu',
            'Aylık Performans Raporları',
            'Marka Kılavuzları Yönetimi',
            'Rakip Analizi',
            'Etkileşim Stratejisi Geliştirme'
          ]
        },
        technologies: ['Buffer', 'Canva', 'Google Analytics', 'Mailchimp']
      },

      // 🛡️ الصيانة التقنية والدعم
      {
        id: 'technical_support',
        names: {
          en: 'Technical Maintenance & Support',
          ar: 'الصيانة التقنية والدعم',
          tr: 'Teknik Bakım ve Destek'
        },
        descriptions: {
          en: 'Ongoing technical support with regular updates, security monitoring, performance optimization, and priority assistance.',
          ar: 'دعم تقني مستمر مع تحديثات منتظمة ومراقبة الأمان وتحسين الأداء ومساعدة ذات أولوية.',
          tr: 'Düzenli güncellemeler, güvenlik izleme, performans optimizasyonu ve öncelikli yardım ile sürekli teknik destek.'
        },
        price: 199,
        currency: 'USD',
        features: {
          en: [
            'Weekly System Updates',
            '24/7 Security Monitoring',
            'Performance Optimization',
            'Backup Management',
            'Priority Technical Support',
            'Monthly Health Reports',
            'Bug Fixes & Patches',
            'Emergency Response (2h)'
          ],
          ar: [
            'تحديثات النظام الأسبوعية',
            'مراقبة أمنية 24/7',
            'تحسين الأداء',
            'إدارة النسخ الاحتياطية',
            'دعم تقني ذو أولوية',
            'تقارير صحة شهرية',
            'إصلاح الأخطاء والتحديثات',
            'استجابة طوارئ (ساعتان)'
          ],
          tr: [
            'Haftalık Sistem Güncellemeleri',
            '7/24 Güvenlik İzleme',
            'Performans Optimizasyonu',
            'Yedekleme Yönetimi',
            'Öncelikli Teknik Destek',
            'Aylık Sağlık Raporları',
            'Hata Düzeltmeleri ve Yamalar',
            'Acil Durum Müdahalesi (2 saat)'
          ]
        },
        technologies: ['AWS CloudWatch', 'Pingdom', 'Sentry', 'Slack']
      },

      // 🤖 خدمات الذكاء الاصطناعي
      {
        id: 'ai_assistant',
        names: {
          en: 'AI Business Assistant',
          ar: 'مساعد الأعمال الذكي',
          tr: 'AI İş Asistanı'
        },
        descriptions: {
          en: 'AI-powered business automation with chatbots, data analysis, content generation, and intelligent process optimization.',
          ar: 'أتمتة الأعمال مدعومة بالذكاء الاصطناعي مع روبوتات المحادثة وتحليل البيانات وإنتاج المحتوى وتحسين العمليات الذكية.',
          tr: 'Chatbotlar, veri analizi, içerik oluşturma ve akıllı süreç optimizasyonu ile AI destekli iş otomasyonu.'
        },
        price: 399,
        currency: 'USD',
        features: {
          en: [
            'Custom AI Chatbot Development',
            'Automated Content Generation',
            'Data Analysis & Insights',
            'Process Automation Setup',
            'AI Model Training & Updates',
            'Integration with Existing Systems',
            'Monthly AI Performance Reports',
            'Continuous Learning Optimization'
          ],
          ar: [
            'تطوير روبوت محادثة ذكي مخصص',
            'إنتاج محتوى آلي',
            'تحليل البيانات والرؤى',
            'إعداد أتمتة العمليات',
            'تدريب وتحديث نماذج الذكاء الاصطناعي',
            'تكامل مع الأنظمة الموجودة',
            'تقارير أداء الذكاء الاصطناعي الشهرية',
            'تحسين التعلم المستمر'
          ],
          tr: [
            'Özel AI Chatbot Geliştirme',
            'Otomatik İçerik Oluşturma',
            'Veri Analizi ve İçgörüler',
            'Süreç Otomasyonu Kurulumu',
            'AI Model Eğitimi ve Güncellemeleri',
            'Mevcut Sistemlerle Entegrasyon',
            'Aylık AI Performans Raporları',
            'Sürekli Öğrenme Optimizasyonu'
          ]
        },
        technologies: ['OpenAI GPT', 'LangChain', 'Python', 'FastAPI']
      }
    ];

    console.log('📦 إنشاء الخدمات لمرة واحدة...');

    // إنشاء الخدمات لمرة واحدة
    for (const service of oneTimeServices) {
      for (const [lang, name] of Object.entries(service.names)) {
        await prisma.pricingPlan.create({
          data: {
            name: name,
            price: service.price,
            currency: service.currency,
            features: JSON.stringify({
              description: service.descriptions[lang],
              features: service.features[lang],
              technologies: service.technologies,
              deliveryTime: service.deliveryTime,
              category: service.id
            }),
            lang: lang,
            popular: service.popular
          }
        });
      }
    }

    console.log('🔄 إنشاء الخدمات المتكررة...');

    // إنشاء الخدمات المتكررة
    for (const service of recurringServices) {
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

    console.log('✅ تم إنشاء جميع الخدمات بنجاح!');
    
    // عرض الإحصائيات
    const oneTimeCount = await prisma.pricingPlan.count();
    const recurringCount = await prisma.recurringService.count();
    
    console.log(`📊 إجمالي الخدمات لمرة واحدة: ${oneTimeCount}`);
    console.log(`🔄 إجمالي الخدمات المتكررة: ${recurringCount}`);
    console.log('🎨 الخدمات مستوحاة من المشاريع الحقيقية');
    console.log('💳 تم تقسيم الخدمات إلى باقات وأسعار واضحة');

  } catch (error) {
    console.error('❌ خطأ:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createInnovativeServices();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addSampleProjects() {
  try {
    // Clear existing projects
    await prisma.project.deleteMany({});
    
    // Add 18 projects based on the categories mentioned
    const projects = [
      // Web Applications (3 projects)
      {
        titleEn: "E-commerce Website",
        titleAr: "موقع تجارة إلكترونية", 
        titleTr: "E-ticaret Web Sitesi",
        descriptionEn: "A comprehensive e-commerce platform with payment integration, inventory management, user authentication, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
        descriptionAr: "منصة تجارة إلكترونية شاملة مع تكامل المدفوعات وإدارة المخزون ونظام المستخدمين ولوحة تحكم الإدارة. مطورة بتقنيات حديثة لأداء مثالي وتجربة مستخدم رائعة.",
        descriptionTr: "Ödeme entegrasyonu, envanter yönetimi, kullanıcı kimlik doğrulaması ve yönetici paneliyle kapsamlı e-ticaret platformu.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/ecommerce-platform",
        technologies: '["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"]',
        category: "ecommerce",
        published: true
      },
      {
        titleEn: "Corporate Business Website",
        titleAr: "موقع شركة تجارية",
        titleTr: "Kurumsal İş Web Sitesi", 
        descriptionEn: "Professional corporate website with CMS integration, contact forms, service pages, and SEO optimization. Responsive design ensuring perfect display across all devices.",
        descriptionAr: "موقع شركة احترافي مع تكامل نظام إدارة المحتوى ونماذج الاتصال وصفحات الخدمات وتحسين محركات البحث. تصميم متجاوب يضمن العرض المثالي على جميع الأجهزة.",
        descriptionTr: "CMS entegrasyonu, iletişim formları, hizmet sayfaları ve SEO optimizasyonu ile profesyonel kurumsal web sitesi.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/corporate-website",
        technologies: '["React", "Node.js", "MongoDB", "Material-UI"]',
        category: "web",
        published: true
      },
      {
        titleEn: "Personal Portfolio Website",
        titleAr: "موقع المحفظة الشخصية",
        titleTr: "Kişisel Portföy Web Sitesi",
        descriptionEn: "Modern portfolio website with project showcases, skills display, contact integration, and blog functionality. Optimized for performance and search engines.",
        descriptionAr: "موقع محفظة حديث مع عرض المشاريع وعرض المهارات وتكامل الاتصال ووظائف المدونة. محسن للأداء ومحركات البحث.",
        descriptionTr: "Proje vitrinleri, beceri gösterimi, iletişim entegrasyonu ve blog işlevselliği ile modern portföy web sitesi.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/portfolio-website",
        technologies: '["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"]',
        category: "web", 
        published: true
      },

      // Mobile Applications (3 projects)  
      {
        titleEn: "Food Delivery Mobile App",
        titleAr: "تطبيق توصيل الطعام للجوال",
        titleTr: "Yemek Teslimat Mobil Uygulaması",
        descriptionEn: "Complete food delivery ecosystem with customer app, restaurant dashboard, and delivery partner interface. Real-time tracking, payment integration, and push notifications.",
        descriptionAr: "نظام توصيل طعام متكامل مع تطبيق العملاء ولوحة تحكم المطاعم وواجهة شريك التوصيل. تتبع في الوقت الفعلي وتكامل المدفوعات والإشعارات الفورية.",
        descriptionTr: "Müşteri uygulaması, restoran panosu ve teslimat ortağı arayüzü ile eksiksiz yemek teslimat ekosistemi.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/food-delivery-app",
        technologies: '["React Native", "Firebase", "Google Maps API", "Stripe"]',
        category: "mobile",
        published: true
      },
      {
        titleEn: "Healthcare Management App",
        titleAr: "تطبيق إدارة الرعاية الصحية",
        titleTr: "Sağlık Yönetim Uygulaması",
        descriptionEn: "Comprehensive healthcare management application for hospitals with patient records, appointment scheduling, staff management, and medical history tracking.",
        descriptionAr: "تطبيق إدارة الرعاية الصحية الشامل للمستشفيات مع سجلات المرضى وجدولة المواعيد وإدارة الموظفين وتتبع التاريخ الطبي.",
        descriptionTr: "Hasta kayıtları, randevu planlama, personel yönetimi ve tıbbi geçmiş takibi ile hastaneler için kapsamlı sağlık yönetim uygulaması.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/healthcare-app",
        technologies: '["Flutter", "Dart", "PostgreSQL", "Node.js"]',
        category: "mobile",
        published: true
      },
      {
        titleEn: "School Management App",
        titleAr: "تطبيق إدارة المدرسة",
        titleTr: "Okul Yönetim Uygulaması",
        descriptionEn: "Complete school management system with student enrollment, grade tracking, parent communication, and administrative tools for educational institutions.",
        descriptionAr: "نظام إدارة المدرسة الكامل مع تسجيل الطلاب وتتبع الدرجات والتواصل مع أولياء الأمور والأدوات الإدارية للمؤسسات التعليمية.",
        descriptionTr: "Öğrenci kaydı, not takibi, veli iletişimi ve eğitim kurumları için idari araçlarla eksiksiz okul yönetim sistemi.",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/school-management-app", 
        technologies: '["React Native", "Express.js", "MySQL", "Socket.io"]',
        category: "mobile",
        published: true
      },

      // AI-Powered Chat Systems (3 projects)
      {
        titleEn: "AI Customer Support Chatbot",
        titleAr: "روبوت دردشة دعم العملاء بالذكاء الاصطناعي",
        titleTr: "AI Müşteri Destek Sohbet Robotu",
        descriptionEn: "Intelligent customer support chatbot using natural language processing, automated ticket creation, and seamless human handoff capabilities. Supports multiple languages and integrates with existing CRM systems.",
        descriptionAr: "روبوت دردشة ذكي لدعم العملاء يستخدم معالجة اللغة الطبيعية وإنشاء التذاكر التلقائي وإمكانيات التسليم السلس للبشر. يدعم عدة لغات ويتكامل مع أنظمة إدارة العملاء الحالية.",
        descriptionTr: "Doğal dil işleme, otomatik bilet oluşturma ve sorunsuz insan devri yetenekleri kullanan akıllı müşteri destek sohbet robotu.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/ai-chatbot",
        technologies: '["OpenAI GPT", "Python", "FastAPI", "Redis", "WebSocket"]',
        category: "ai",
        published: true
      },
      {
        titleEn: "AI Content Generation Platform",
        titleAr: "منصة إنتاج المحتوى بالذكاء الاصطناعي",
        titleTr: "AI İçerik Üretim Platformu",
        descriptionEn: "Advanced AI-powered content generation platform for blogs, social media, and marketing materials. Features include text generation, image creation, and SEO optimization.",
        descriptionAr: "منصة متقدمة لإنتاج المحتوى بالذكاء الاصطناعي للمدونات ووسائل التواصل الاجتماعي والمواد التسويقية. تشمل الميزات إنتاج النص وإنشاء الصور وتحسين محركات البحث.",
        descriptionTr: "Bloglar, sosyal medya ve pazarlama materyalleri için gelişmiş AI destekli içerik üretim platformu.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/ai-content-generator",
        technologies: '["OpenAI", "React", "Node.js", "MongoDB", "Stripe"]',
        category: "ai",
        published: true
      },
      {
        titleEn: "Smart Document Assistant",
        titleAr: "مساعد الوثائق الذكي",
        titleTr: "Akıllı Belge Asistanı", 
        descriptionEn: "AI-powered document processing and analysis system that can extract information, answer questions, and generate summaries from various document formats including PDFs, Word documents, and images.",
        descriptionAr: "نظام معالجة وتحليل الوثائق المدعوم بالذكاء الاصطناعي يمكنه استخراج المعلومات والإجابة على الأسئلة وإنشاء الملخصات من تنسيقات الوثائق المختلفة بما في ذلك ملفات PDF ووثائق Word والصور.",
        descriptionTr: "PDF'ler, Word belgeleri ve görseller dahil olmak üzere çeşitli belge formatlarından bilgi çıkarabilen, soruları yanıtlayabilen ve özetler oluşturabilen AI destekli belge işleme ve analiz sistemi.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/smart-document-assistant",
        technologies: '["Python", "LangChain", "OpenAI", "FastAPI", "OCR"]',
        category: "ai",
        published: true
      },

      // ERP Systems (3 projects)
      {
        titleEn: "Manufacturing ERP System", 
        titleAr: "نظام تخطيط موارد التصنيع",
        titleTr: "Üretim ERP Sistemi",
        descriptionEn: "Comprehensive ERP system for manufacturing companies including inventory management, production planning, quality control, financial tracking, and supply chain management.",
        descriptionAr: "نظام تخطيط موارد شامل لشركات التصنيع يتضمن إدارة المخزون وتخطيط الإنتاج ومراقبة الجودة والتتبع المالي وإدارة سلسلة التوريد.",
        descriptionTr: "Envanter yönetimi, üretim planlama, kalite kontrol, finansal takip ve tedarik zinciri yönetimi dahil üretim şirketleri için kapsamlı ERP sistemi.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", 
        githubUrl: "https://github.com/mkfelati/manufacturing-erp",
        technologies: '["Laravel", "Vue.js", "PostgreSQL", "Redis", "Docker"]',
        category: "erp",
        published: true
      },
      {
        titleEn: "Retail Chain ERP",
        titleAr: "نظام تخطيط موارد سلسلة التجزئة",
        titleTr: "Perakende Zinciri ERP",
        descriptionEn: "Multi-location retail management system with point-of-sale integration, inventory synchronization, staff management, and comprehensive reporting across multiple store locations.",
        descriptionAr: "نظام إدارة التجزئة متعدد المواقع مع تكامل نقطة البيع ومزامنة المخزون وإدارة الموظفين والتقارير الشاملة عبر مواقع المتاجر المتعددة.",
        descriptionTr: "Satış noktası entegrasyonu, envanter senkronizasyonu, personel yönetimi ve birden fazla mağaza lokasyonunda kapsamlı raporlama ile çok konumlu perakende yönetim sistemi.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/retail-erp",
        technologies: '["Django", "React", "PostgreSQL", "Celery", "AWS"]',
        category: "erp", 
        published: true
      },
      {
        titleEn: "Service Business ERP",
        titleAr: "نظام تخطيط موارد أعمال الخدمات", 
        titleTr: "Hizmet İşletmesi ERP",
        descriptionEn: "ERP solution tailored for service-based businesses including project management, time tracking, client billing, resource allocation, and performance analytics.",
        descriptionAr: "حل تخطيط الموارد المصمم للشركات القائمة على الخدمات بما في ذلك إدارة المشاريع وتتبع الوقت وفوترة العملاء وتخصيص الموارد وتحليلات الأداء.",
        descriptionTr: "Proje yönetimi, zaman takibi, müşteri faturalandırma, kaynak tahsisi ve performans analitiği dahil hizmet tabanlı işletmeler için özelleştirilmiş ERP çözümü.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/service-erp",
        technologies: '["ASP.NET Core", "Angular", "SQL Server", "SignalR"]',
        category: "erp",
        published: true
      }
    ];

    // Add more projects to reach 18 total
    const additionalProjects = [
      // CRM Systems (2 projects)
      {
        titleEn: "Real Estate CRM",
        titleAr: "نظام إدارة علاقات عملاء العقارات",
        titleTr: "Gayrimenkul CRM",
        descriptionEn: "Specialized CRM system for real estate agencies with property listings, lead management, client communication, and deal tracking capabilities.",
        descriptionAr: "نظام إدارة علاقات العملاء المتخصص لوكالات العقارات مع قوائم العقارات وإدارة العملاء المحتملين والتواصل مع العملاء وتتبع الصفقات.",
        descriptionTr: "Emlak listeleri, müşteri adayı yönetimi, müşteri iletişimi ve anlaşma takibi yetenekleriyle emlak acenteleri için özel CRM sistemi.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/realestate-crm",
        technologies: '["Ruby on Rails", "React", "PostgreSQL", "ActionCable"]',
        category: "crm",
        published: true
      },
      {
        titleEn: "Healthcare CRM Platform",
        titleAr: "منصة إدارة علاقات عملاء الرعاية الصحية",
        titleTr: "Sağlık Hizmetleri CRM Platformu",
        descriptionEn: "Patient relationship management system for healthcare providers with appointment scheduling, medical history tracking, and automated follow-up communications.",
        descriptionAr: "نظام إدارة علاقات المرضى لمقدمي الرعاية الصحية مع جدولة المواعيد وتتبع التاريخ الطبي والتواصل التلقائي للمتابعة.",
        descriptionTr: "Randevu planlama, tıbbi geçmiş takibi ve otomatik takip iletişimleri ile sağlık hizmeti sağlayıcıları için hasta ilişkileri yönetim sistemi.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/healthcare-crm",
        technologies: '["Laravel", "Vue.js", "MySQL", "Pusher", "Twilio"]',
        category: "crm",
        published: true
      },

      // SaaS Solutions (2 projects)
      {
        titleEn: "Project Management SaaS",
        titleAr: "منصة إدارة المشاريع كخدمة",
        titleTr: "Proje Yönetimi SaaS",
        descriptionEn: "Multi-tenant project management platform with team collaboration tools, task tracking, time management, and comprehensive project analytics for businesses of all sizes.",
        descriptionAr: "منصة إدارة المشاريع متعددة المستأجرين مع أدوات التعاون الجماعي وتتبع المهام وإدارة الوقت وتحليلات المشاريع الشاملة للشركات من جميع الأحجام.",
        descriptionTr: "Ekip işbirliği araçları, görev takibi, zaman yönetimi ve her büyüklükteki işletme için kapsamlı proje analitiği ile çok kiracılı proje yönetim platformu.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/project-management-saas",
        technologies: '["Next.js", "TypeScript", "Prisma", "Stripe", "Vercel"]',
        category: "saas",
        published: true
      },
      {
        titleEn: "Email Marketing SaaS",
        titleAr: "منصة التسويق الإلكتروني كخدمة",
        titleTr: "E-posta Pazarlama SaaS",
        descriptionEn: "Complete email marketing automation platform with campaign management, subscriber segmentation, A/B testing, and detailed analytics for marketing teams.",
        descriptionAr: "منصة أتمتة التسويق الإلكتروني الكاملة مع إدارة الحملات وتجزئة المشتركين واختبار A/B والتحليلات المفصلة لفرق التسويق.",
        descriptionTr: "Kampanya yönetimi, abone segmentasyonu, A/B testi ve pazarlama ekipleri için detaylı analitik ile eksiksiz e-posta pazarlama otomasyonu platformu.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/email-marketing-saas",
        technologies: '["Django", "React", "PostgreSQL", "Celery", "SendGrid"]',
        category: "saas",
        published: true
      },

      // Restaurant Management (2 projects) 
      {
        titleEn: "Restaurant POS System",
        titleAr: "نظام نقطة البيع للمطاعم",
        titleTr: "Restoran POS Sistemi",
        descriptionEn: "Complete point-of-sale system for restaurants with order management, kitchen display, inventory tracking, staff management, and customer analytics.",
        descriptionAr: "نظام نقطة البيع الكامل للمطاعم مع إدارة الطلبات وشاشة المطبخ وتتبع المخزون وإدارة الموظفين وتحليلات العملاء.",
        descriptionTr: "Sipariş yönetimi, mutfak ekranı, envanter takibi, personel yönetimi ve müşteri analitiği ile restoranlar için eksiksiz satış noktası sistemi.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/restaurant-pos",
        technologies: '["React", "Node.js", "Socket.io", "MongoDB", "Electron"]',
        category: "restaurant",
        published: true
      },
      {
        titleEn: "Online Food Ordering Platform",
        titleAr: "منصة طلب الطعام عبر الإنترنت",
        titleTr: "Online Yemek Sipariş Platformu", 
        descriptionEn: "Multi-restaurant food ordering platform with real-time order tracking, payment processing, delivery management, and customer review system.",
        descriptionAr: "منصة طلب الطعام متعددة المطاعم مع تتبع الطلبات في الوقت الفعلي ومعالجة المدفوعات وإدارة التوصيل ونظام مراجعات العملاء.",
        descriptionTr: "Gerçek zamanlı sipariş takibi, ödeme işleme, teslimat yönetimi ve müşteri inceleme sistemi ile çok restoranlı yemek sipariş platformu.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/food-ordering-platform",
        technologies: '["Laravel", "Vue.js", "Stripe", "Google Maps", "Pusher"]',
        category: "restaurant",
        published: true
      },

      // Startup Management (2 projects)
      {
        titleEn: "Startup Accelerator Platform",
        titleAr: "منصة مسرع الشركات الناشئة",
        titleTr: "Startup Hızlandırıcı Platformu",
        descriptionEn: "Comprehensive platform for startup accelerators to manage applications, mentor matching, progress tracking, and investor relations with integrated communication tools.",
        descriptionAr: "منصة شاملة لمسرعات الشركات الناشئة لإدارة التطبيقات ومطابقة الموجهين وتتبع التقدم وعلاقات المستثمرين مع أدوات التواصل المتكاملة.",
        descriptionTr: "Başvuru yönetimi, mentor eşleştirme, ilerleme takibi ve entegre iletişim araçlarıyla yatırımcı ilişkileri için startup hızlandırıcıları için kapsamlı platform.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/startup-accelerator-platform",
        technologies: '["Next.js", "Supabase", "TypeScript", "Tailwind", "Stripe"]',
        category: "startup",
        published: true
      },
      {
        titleEn: "MVP Development Framework",
        titleAr: "إطار تطوير المنتج الأولي",
        titleTr: "MVP Geliştirme Çerçevesi",
        descriptionEn: "Rapid MVP development framework for startups with pre-built components, authentication, payment processing, and deployment automation to accelerate time-to-market.",
        descriptionAr: "إطار تطوير سريع للمنتج الأولي للشركات الناشئة مع مكونات جاهزة والمصادقة ومعالجة المدفوعات وأتمتة النشر لتسريع الوصول إلى السوق.",
        descriptionTr: "Pazara ulaşma süresini hızlandırmak için önceden oluşturulmuş bileşenler, kimlik doğrulama, ödeme işleme ve dağıtım otomasyonu ile startuplar için hızlı MVP geliştirme çerçevesi.",
        image: "https://images.unsplash.com/photo-1553028826-f4804151e27f?w=800&h=600&fit=crop",
        githubUrl: "https://github.com/mkfelati/mvp-framework",
        technologies: '["React", "Firebase", "Node.js", "Docker", "GitHub Actions"]',
        category: "startup",
        published: true
      }
    ];

    // Combine all projects
    const allProjects = [...projects, ...additionalProjects];
    
    // Add projects to database
    for (const project of allProjects) {
      await prisma.project.create({
        data: project
      });
    }

    console.log(`✅ Added ${allProjects.length} projects successfully!`);
    console.log('📊 Project breakdown by category:');
    
    // Count projects by category
    const categories = await prisma.project.groupBy({
      by: ['category'],
      _count: {
        id: true
      }
    });
    
    categories.forEach(cat => {
      console.log(`- ${cat.category}: ${cat._count.id} projects`);
    });

  } catch (error) {
    console.error('❌ Error adding projects:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addSampleProjects();

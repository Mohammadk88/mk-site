import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const finalProjects = [
  {
    titleAr: "نظام تجزئة - ريتيل بلس",
    titleEn: "Retail System - RetailPlus",
    titleTr: "Perakende Sistemi - RetailPlus",
    descriptionAr: "نظام تخطيط موارد متكامل لسلسلة متاجر ريتيل بلس. يدير المبيعات، المخزون، العملاء، والموظفين عبر فروع متعددة. يتضمن نقطة بيع حديثة، تحليلات ذكية، وتتبع الأرباح في الوقت الفعلي. تزامن تلقائي بين جميع الفروع. التقنيات المستخدمة: Vue.js 3, TypeScript, Laravel, MySQL, Redis للتخزين المؤقت, WebSocket للتحديثات الفورية, Chart.js للتقارير, REST API, JWT Authentication, Stripe POS Integration, Elasticsearch للبحث السريع.",
    descriptionEn: "Integrated resource planning system for RetailPlus store chain. Manages sales, inventory, customers, and employees across multiple branches. Features modern point of sale, smart analytics, and real-time profit tracking. Automatic synchronization between all branches. Technologies used: Vue.js 3, TypeScript, Laravel, MySQL, Redis for caching, WebSocket for real-time updates, Chart.js for reports, REST API, JWT Authentication, Stripe POS Integration, Elasticsearch for fast search.",
    descriptionTr: "RetailPlus mağaza zinciri için entegre kaynak planlama sistemi. Birden fazla şubede satış, envanter, müşteriler ve çalışanları yönetir. Modern satış noktası, akıllı analitik ve gerçek zamanlı kâr takibi içerir. Tüm şubeler arası otomatik senkronizasyon. Kullanılan teknolojiler: Vue.js 3, TypeScript, Laravel, MySQL, Redis önbellekleme, WebSocket gerçek zamanlı güncellemeler, Chart.js raporlar, REST API, JWT Authentication, Stripe POS Integration, Elasticsearch hızlı arama.",
    category: "erp"
  },
  {
    titleAr: "نظام خدمات - سيرفيس هب",
    titleEn: "Services System - ServiceHub",
    titleTr: "Hizmet Sistemi - ServiceHub",
    descriptionAr: "نظام تخطيط موارد شامل لشركة الخدمات سيرفيس هب. يدير العقود، المشاريع، الفواتير، والموارد البشرية. يتضمن جدولة المهام، تتبع الوقت، إدارة العملاء، وتحليل الربحية. واجهة مخصصة لكل دور وظيفي. التقنيات المستخدمة: Angular 17, TypeScript, .NET Core 8, SQL Server, SignalR للتحديثات الفورية, Azure Cloud Services, Azure DevOps, Entity Framework, AutoMapper, FluentValidation, Hangfire للمهام المجدولة.",
    descriptionEn: "Comprehensive resource planning system for ServiceHub service company. Manages contracts, projects, invoicing, and human resources. Features task scheduling, time tracking, customer management, and profitability analysis. Customized interface for each job role. Technologies used: Angular 17, TypeScript, .NET Core 8, SQL Server, SignalR for real-time updates, Azure Cloud Services, Azure DevOps, Entity Framework, AutoMapper, FluentValidation, Hangfire for scheduled tasks.",
    descriptionTr: "ServiceHub hizmet şirketi için kapsamlı kaynak planlama sistemi. Sözleşmeleri, projeleri, faturalamayı ve insan kaynaklarını yönetir. Görev programlama, zaman takibi, müşteri yönetimi ve kârlılık analizi içerir. Her iş rolü için özelleştirilmiş arayüz. Kullanılan teknolojiler: Angular 17, TypeScript, .NET Core 8, SQL Server, SignalR gerçek zamanlı güncellemeler, Azure Cloud Services, Azure DevOps, Entity Framework, AutoMapper, FluentValidation, Hangfire zamanlanmış görevler.",
    category: "erp"
  },
  {
    titleAr: "نظام عقارات - ريل إستيت برو",
    titleEn: "Real Estate System - RealEstatePro",
    titleTr: "Emlak Sistemi - RealEstatePro",
    descriptionAr: "نظام إدارة علاقات العملاء المتخصص للعقارات ريل إستيت برو. يدير العقارات، العملاء، الصفقات، والعمولات. يتضمن جولات افتراضية، تقييم ذكي للعقارات، وتتبع المعاينات. تكامل مع منصات الإعلان العقاري. التقنيات المستخدمة: React Native, TypeScript, Node.js, MongoDB, Firebase Storage للصور, Google Maps API, Socket.io للإشعارات الفورية, Cloudinary لمعالجة الصور, Stripe للمدفوعات, PDF Generation للعقود.",
    descriptionEn: "Specialized customer relationship management system for RealEstatePro real estate. Manages properties, clients, deals, and commissions. Features virtual tours, smart property valuation, and viewing tracking. Integration with real estate advertising platforms. Technologies used: React Native, TypeScript, Node.js, MongoDB, Firebase Storage for images, Google Maps API, Socket.io for instant notifications, Cloudinary for image processing, Stripe for payments, PDF Generation for contracts.",
    descriptionTr: "RealEstatePro emlak için özelleşmiş müşteri ilişkileri yönetim sistemi. Mülkleri, müşterileri, anlaşmaları ve komisyonları yönetir. Sanal turlar, akıllı mülk değerlendirmesi ve görüntüleme takibi içerir. Emlak reklam platformları ile entegrasyon. Kullanılan teknolojiler: React Native, TypeScript, Node.js, MongoDB, Firebase Storage resimler için, Google Maps API, Socket.io anlık bildirimler, Cloudinary resim işleme, Stripe ödemeler, PDF Generation sözleşmeler.",
    category: "crm"
  },
  {
    titleAr: "نظام طبي - هيلث كير سي آر إم",
    titleEn: "Medical System - HealthCareCRM",
    titleTr: "Tıbbi Sistem - HealthCareCRM",
    descriptionAr: "منصة إدارة علاقات المرضى الشاملة هيلث كير سي آر إم. تربط المستشفيات والعيادات والأطباء. تدير الملفات الطبية، المواعيد، الوصفات، والفواتير الطبية. أمان عالي ومطابقة لمعايير HIPAA. التقنيات المستخدمة: Next.js 14, TypeScript, NestJS, PostgreSQL, Prisma ORM, JWT + Role-based access, WebRTC للاستشارات, AES-256 التشفير, AWS S3 للملفات الطبية, Twilio للرسائل, DICOM للصور الطبية.",
    descriptionEn: "Comprehensive patient relationship management platform HealthCareCRM. Connects hospitals, clinics, and doctors. Manages medical records, appointments, prescriptions, and medical billing. High security and HIPAA compliance. Technologies used: Next.js 14, TypeScript, NestJS, PostgreSQL, Prisma ORM, JWT + Role-based access, WebRTC for consultations, AES-256 encryption, AWS S3 for medical files, Twilio for messaging, DICOM for medical images.",
    descriptionTr: "Kapsamlı hasta ilişkileri yönetim platformu HealthCareCRM. Hastaneleri, klinikleri ve doktorları birleştirir. Tıbbi kayıtları, randevuları, reçeteleri ve tıbbi faturalamayı yönetir. Yüksek güvenlik ve HIPAA uyumluluğu. Kullanılan teknolojiler: Next.js 14, TypeScript, NestJS, PostgreSQL, Prisma ORM, JWT + Rol tabanlı erişim, WebRTC konsültasyonlar, AES-256 şifreleme, AWS S3 tıbbi dosyalar, Twilio mesajlaşma, DICOM tıbbi görüntüler.",
    category: "crm"
  },
  {
    titleAr: "منصة مشاريع - بروجكت ماستر",
    titleEn: "Project Platform - ProjectMaster",
    titleTr: "Proje Platformu - ProjectMaster",
    descriptionAr: "منصة إدارة المشاريع السحابية بروجكت ماستر كخدمة SaaS. تدعم فرق العمل الموزعة وإدارة المهام المعقدة. تتضمن جانت تشارت تفاعلي، تتبع الوقت، وتحليلات الأداء المتقدمة. تكامل مع أدوات التطوير الشائعة. التقنيات المستخدمة: React 18, TypeScript, Node.js, Express.js, PostgreSQL, GraphQL, Apollo Client, WebSocket للتعاون الفوري, D3.js للجانت تشارت, ElasticSearch للبحث, Docker, AWS ECS, CloudWatch للمراقبة.",
    descriptionEn: "Cloud project management platform ProjectMaster as SaaS service. Supports distributed teams and complex task management. Features interactive Gantt charts, time tracking, and advanced performance analytics. Integration with popular development tools. Technologies used: React 18, TypeScript, Node.js, Express.js, PostgreSQL, GraphQL, Apollo Client, WebSocket for real-time collaboration, D3.js for Gantt charts, ElasticSearch for search, Docker, AWS ECS, CloudWatch for monitoring.",
    descriptionTr: "SaaS hizmeti olarak bulut proje yönetim platformu ProjectMaster. Dağıtık ekipleri ve karmaşık görev yönetimini destekler. İnteraktif Gantt şemaları, zaman takibi ve gelişmiş performans analitiği içerir. Popüler geliştirme araçları ile entegrasyon. Kullanılan teknolojiler: React 18, TypeScript, Node.js, Express.js, PostgreSQL, GraphQL, Apollo Client, WebSocket gerçek zamanlı işbirliği, D3.js Gantt şemaları, ElasticSearch arama, Docker, AWS ECS, CloudWatch izleme.",
    category: "saas"
  },
  {
    titleAr: "منصة تسويق - ميل ماستر",
    titleEn: "Marketing Platform - MailMaster",
    titleTr: "Pazarlama Platformu - MailMaster",
    descriptionAr: "منصة تسويق إلكتروني متقدمة ميل ماستر كخدمة SaaS. تدير حملات البريد الإلكتروني، التشغيل الآلي، والتحليلات المتقدمة. تتضمن محرر سحب وإفلات، اختبار A/B، وتقسيم الجمهور الذكي. معدلات تسليم عالية ومطابقة لقوانين GDPR. التقنيات المستخدمة: Vue.js 3, TypeScript, Python Django, Celery للمهام غير المتزامنة, Redis, PostgreSQL, AWS SES للبريد, Stripe للفوترة, Chart.js للتحليلات, Docker Compose.",
    descriptionEn: "Advanced email marketing platform MailMaster as SaaS service. Manages email campaigns, automation, and advanced analytics. Features drag-and-drop editor, A/B testing, and smart audience segmentation. High delivery rates and GDPR compliance. Technologies used: Vue.js 3, TypeScript, Python Django, Celery for async tasks, Redis, PostgreSQL, AWS SES for email, Stripe for billing, Chart.js for analytics, Docker Compose.",
    descriptionTr: "SaaS hizmeti olarak gelişmiş e-posta pazarlama platformu MailMaster. E-posta kampanyalarını, otomasyonu ve gelişmiş analitiği yönetir. Sürükle-bırak editörü, A/B testi ve akıllı hedef kitle segmentasyonu içerir. Yüksek teslimat oranları ve GDPR uyumluluğu. Kullanılan teknolojiler: Vue.js 3, TypeScript, Python Django, Celery asenkron görevler, Redis, PostgreSQL, AWS SES e-posta, Stripe faturalama, Chart.js analitik, Docker Compose.",
    category: "saas"
  }
];

async function updateFinalProjects() {
  try {
    console.log('🏢 تحديث المجموعة الأخيرة من المشاريع...');
    
    const allProjects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    // تحديث من المشروع الحادي عشر إلى السادس عشر
    for (let i = 0; i < finalProjects.length; i++) {
      const projectIndex = i + 10; // من 10 إلى 15
      const projectData = finalProjects[i];
      
      if (allProjects[projectIndex]) {
        await prisma.project.update({
          where: { id: allProjects[projectIndex].id },
          data: {
            titleAr: projectData.titleAr,
            titleEn: projectData.titleEn,
            titleTr: projectData.titleTr,
            descriptionAr: projectData.descriptionAr,
            descriptionEn: projectData.descriptionEn,
            descriptionTr: projectData.descriptionTr,
            category: projectData.category,
            demoUrl: "",
            githubUrl: ""
          }
        });
        
        console.log(`✅ تم تحديث: ${projectData.titleAr}`);
      }
    }
    
    console.log('\n🎉 تم تحديث جميع مشاريع ERP, CRM و SaaS بنجاح!');
    
  } catch (error) {
    console.error('❌ خطأ في التحديث:', error);
  }
}

updateFinalProjects();

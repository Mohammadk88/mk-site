import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const projectsWithBrandNames = [
  {
    id: 1,
    titleAr: "متجر إلكتروني - تك شوب",
    titleEn: "E-commerce Store - TechShop",
    titleTr: "E-ticaret Mağazası - TechShop",
    descriptionAr: "منصة تجارة إلكترونية متكاملة تم تطويرها لشركة تك شوب لبيع الأجهزة الإلكترونية والاكسسوارات. تتضمن نظام دفع آمن متعدد الطرق، إدارة المخزون الذكية، نظام تتبع الطلبات في الوقت الفعلي، وواجهة مستخدم سريعة الاستجابة. التقنيات المستخدمة: Next.js 14, TypeScript, Prisma ORM, PostgreSQL, Stripe Payment Gateway, Tailwind CSS, Framer Motion, Redis للتخزين المؤقت, Docker للنشر.",
    descriptionEn: "Comprehensive e-commerce platform developed for TechShop to sell electronic devices and accessories. Features secure multi-payment gateway, smart inventory management, real-time order tracking, and responsive user interface. Technologies used: Next.js 14, TypeScript, Prisma ORM, PostgreSQL, Stripe Payment Gateway, Tailwind CSS, Framer Motion, Redis for caching, Docker for deployment.",
    descriptionTr: "TechShop için elektronik cihazlar ve aksesuarlar satmak üzere geliştirilen kapsamlı e-ticaret platformu. Güvenli çoklu ödeme sistemi, akıllı envanter yönetimi, gerçek zamanlı sipariş takibi ve responsive kullanıcı arayüzü içerir. Kullanılan teknolojiler: Next.js 14, TypeScript, Prisma ORM, PostgreSQL, Stripe Payment Gateway, Tailwind CSS, Framer Motion, Redis önbellekleme, Docker deployment.",
    category: "ecommerce"
  },
  {
    id: 2,
    titleAr: "موقع شركة - بيزنس برو",
    titleEn: "Corporate Website - BusinessPro",
    titleTr: "Kurumsal Web Sitesi - BusinessPro",
    descriptionAr: "موقع إلكتروني احترافي متعدد اللغات لشركة بيزنس برو للاستشارات التجارية. يحتوي على صفحات تعريفية ديناميكية، نظام إدارة المحتوى، نماذج اتصال متقدمة، وتكامل مع وسائل التواصل الاجتماعي. مُحسن لمحركات البحث SEO ومتوافق مع جميع الأجهزة. التقنيات المستخدمة: Next.js 14, TypeScript, Sanity CMS, MongoDB, Next-intl للترجمة, Google Analytics, EmailJS, Tailwind CSS, React Hook Form للنماذج.",
    descriptionEn: "Professional multilingual website for BusinessPro consulting company. Features dynamic presentation pages, content management system, advanced contact forms, and social media integration. SEO optimized and fully responsive across all devices. Technologies used: Next.js 14, TypeScript, Sanity CMS, MongoDB, Next-intl for translations, Google Analytics, EmailJS, Tailwind CSS, React Hook Form for forms.",
    descriptionTr: "BusinessPro danışmanlık şirketi için profesyonel çok dilli web sitesi. Dinamik sunum sayfaları, içerik yönetim sistemi, gelişmiş iletişim formları ve sosyal medya entegrasyonu içerir. SEO optimize edilmiş ve tüm cihazlarda tam responsive. Kullanılan teknolojiler: Next.js 14, TypeScript, Sanity CMS, MongoDB, Next-intl çeviriler için, Google Analytics, EmailJS, Tailwind CSS, React Hook Form.",
    category: "web"
  },
  {
    id: 3,
    titleAr: "محفظة أعمال - كرياتيف بورتفوليو",
    titleEn: "Creative Portfolio - CreativePortfolio",
    titleTr: "Yaratıcı Portföy - CreativePortfolio",
    descriptionAr: "موقع محفظة أعمال تفاعلي للمصمم الجرافيكي كرياتيف بورتفوليو. يعرض الأعمال بشكل جذاب مع معرض صور متطور، تأثيرات بصرية مذهلة، ونظام فلترة ذكي للمشاريع. يتضمن مدونة شخصية وقسم شهادات العملاء. التقنيات المستخدمة: Next.js 14, TypeScript, Three.js للرسوم ثلاثية الأبعاد, Framer Motion, Cloudinary لإدارة الصور, MDX للمدونة, Tailwind CSS, React Spring للتحريك.",
    descriptionEn: "Interactive portfolio website for graphic designer CreativePortfolio. Showcases work attractively with advanced image gallery, stunning visual effects, and smart project filtering system. Includes personal blog and client testimonials section. Technologies used: Next.js 14, TypeScript, Three.js for 3D graphics, Framer Motion, Cloudinary for image management, MDX for blog, Tailwind CSS, React Spring for animations.",
    descriptionTr: "Grafik tasarımcı CreativePortfolio için interaktif portföy web sitesi. Gelişmiş resim galerisi, çarpıcı görsel efektler ve akıllı proje filtreleme sistemi ile işleri çekici şekilde sergiler. Kişisel blog ve müşteri referansları bölümü içerir. Kullanılan teknolojiler: Next.js 14, TypeScript, Three.js 3D grafikler için, Framer Motion, Cloudinary resim yönetimi, MDX blog için, Tailwind CSS, React Spring animasyonlar.",
    category: "web"
  },
  {
    id: 4,
    titleAr: "تطبيق توصيل - فود إكسبرس",
    titleEn: "Delivery App - FoodExpress",
    titleTr: "Teslimat Uygulaması - FoodExpress",
    descriptionAr: "تطبيق جوال متكامل لخدمة توصيل الطعام فود إكسبرس. يتضمن تتبع الطلبات بالخرائط في الوقت الفعلي، نظام تقييم المطاعم، دفع إلكتروني آمن، وإشعارات فورية. واجهة مستخدم سهلة وتجربة سلسة للعملاء والسائقين والمطاعم. التقنيات المستخدمة: React Native, TypeScript, Node.js, Express.js, MongoDB, Socket.io للتحديثات الفورية, Google Maps API, Firebase للإشعارات, Stripe Payment, Redux Toolkit لإدارة الحالة.",
    descriptionEn: "Comprehensive mobile app for FoodExpress food delivery service. Features real-time order tracking with maps, restaurant rating system, secure electronic payment, and instant notifications. Easy user interface and seamless experience for customers, drivers, and restaurants. Technologies used: React Native, TypeScript, Node.js, Express.js, MongoDB, Socket.io for real-time updates, Google Maps API, Firebase for notifications, Stripe Payment, Redux Toolkit for state management.",
    descriptionTr: "FoodExpress yemek teslimat hizmeti için kapsamlı mobil uygulama. Haritalarla gerçek zamanlı sipariş takibi, restoran değerlendirme sistemi, güvenli elektronik ödeme ve anında bildirimler içerir. Müşteriler, sürücüler ve restoranlar için kolay kullanıcı arayüzü ve sorunsuz deneyim. Kullanılan teknolojiler: React Native, TypeScript, Node.js, Express.js, MongoDB, Socket.io gerçek zamanlı güncellemeler, Google Maps API, Firebase bildirimler, Stripe Payment, Redux Toolkit durum yönetimi.",
    category: "mobile"
  },
  {
    id: 5,
    titleAr: "تطبيق طبي - هيلث كير بلس",
    titleEn: "Medical App - HealthCarePlus",
    titleTr: "Tıbbi Uygulama - HealthCarePlus",
    descriptionAr: "تطبيق إدارة شامل للرعاية الصحية هيلث كير بلس. يربط الأطباء والمرضى والمستشفيات في منصة واحدة. يتضمن حجز المواعيد، التشخيص عن بُعد، إدارة الملفات الطبية، وصف الأدوية الإلكتروني، وتذكيرات الأدوية. يدعم مكالمات الفيديو المشفرة والامتثال لمعايير HIPAA. التقنيات المستخدمة: React Native, TypeScript, Node.js, PostgreSQL, WebRTC للمكالمات, AWS S3 للملفات, JWT Authentication, AES Encryption, Push Notifications, Chart.js للتقارير.",
    descriptionEn: "Comprehensive healthcare management app HealthCarePlus. Connects doctors, patients, and hospitals in one platform. Features appointment booking, remote diagnosis, medical record management, electronic prescriptions, and medication reminders. Supports encrypted video calls and HIPAA compliance. Technologies used: React Native, TypeScript, Node.js, PostgreSQL, WebRTC for calls, AWS S3 for files, JWT Authentication, AES Encryption, Push Notifications, Chart.js for reports.",
    descriptionTr: "HealthCarePlus kapsamlı sağlık yönetimi uygulaması. Doktorları, hastaları ve hastaneleri tek platformda birleştirir. Randevu alma, uzaktan teşhis, tıbbi kayıt yönetimi, elektronik reçete ve ilaç hatırlatıcıları içerir. Şifreli video aramaları ve HIPAA uyumluluğunu destekler. Kullanılan teknolojiler: React Native, TypeScript, Node.js, PostgreSQL, WebRTC aramalar için, AWS S3 dosyalar için, JWT Authentication, AES Encryption, Push Notifications, Chart.js raporlar için.",
    category: "mobile"
  }
];

async function updateProjectsWithBrandNames() {
  try {
    console.log('🏢 تحديث المشاريع بأسماء تجارية احترافية...');
    
    for (let i = 0; i < Math.min(projectsWithBrandNames.length, 5); i++) {
      const projectData = projectsWithBrandNames[i];
      
      const existingProject = await prisma.project.findFirst({
        skip: i,
        take: 1,
        orderBy: { createdAt: 'asc' }
      });
      
      if (existingProject) {
        await prisma.project.update({
          where: { id: existingProject.id },
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
    
    console.log('\n🎉 تم تحديث أول 5 مشاريع بنجاح!');
    console.log('\n🌟 التحسينات المطبقة:');
    console.log('========================');
    console.log('✅ أسماء تجارية احترافية');
    console.log('✅ وصف مفصل للتقنيات المستخدمة');
    console.log('✅ إزالة روابط الكود والمصدر');
    console.log('✅ شرح شامل لكل مشروع');
    console.log('✅ أسماء شركات حقيقية');
    
  } catch (error) {
    console.error('❌ خطأ في التحديث:', error);
  }
}

updateProjectsWithBrandNames();

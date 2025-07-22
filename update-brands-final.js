import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const lastProjects = [
  {
    titleAr: "نظام مطعم - تيستي بوس",
    titleEn: "Restaurant System - TastyPOS",
    titleTr: "Restoran Sistemi - TastyPOS",
    descriptionAr: "نظام نقطة بيع متطور للمطاعم تيستي بوس. يدير الطلبات، المخزون، الطاولات، والموظفين. يتضمن قوائم رقمية تفاعلية، تتبع الطلبات في المطبخ، وتحليلات المبيعات اليومية. دعم للدفع بطرق متعددة وإدارة العروض. التقنيات المستخدمة: Flutter, Dart, Firebase Firestore, Node.js, Express.js, Square Payment API, WebSocket للطلبات الفورية, Chart.js للتقارير, Google Cloud Print للطباعة, FCM للإشعارات, QR Code للقوائم الرقمية.",
    descriptionEn: "Advanced point of sale system for TastyPOS restaurants. Manages orders, inventory, tables, and staff. Features interactive digital menus, kitchen order tracking, and daily sales analytics. Support for multiple payment methods and promotion management. Technologies used: Flutter, Dart, Firebase Firestore, Node.js, Express.js, Square Payment API, WebSocket for instant orders, Chart.js for reports, Google Cloud Print for printing, FCM for notifications, QR Code for digital menus.",
    descriptionTr: "TastyPOS restoranları için gelişmiş satış noktası sistemi. Siparişleri, envanteri, masaları ve personeli yönetir. İnteraktif dijital menüler, mutfak sipariş takibi ve günlük satış analitiği içerir. Çoklu ödeme yöntemleri ve promosyon yönetimi desteği. Kullanılan teknolojiler: Flutter, Dart, Firebase Firestore, Node.js, Express.js, Square Payment API, WebSocket anlık siparişler, Chart.js raporlar, Google Cloud Print yazdırma, FCM bildirimler, QR Code dijital menüler.",
    category: "restaurant"
  },
  {
    titleAr: "منصة طلبات - فود أوردر برو",
    titleEn: "Ordering Platform - FoodOrderPro",
    titleTr: "Sipariş Platformu - FoodOrderPro",
    descriptionAr: "منصة طلب الطعام الشاملة فود أوردر برو. تربط المطاعم والعملاء والسائقين في تطبيق واحد. تتضمن تتبع الطلبات المباشر، تقييم المطاعم، كوبونات الخصم، وبرنامج الولاء. واجهة سهلة وتجربة مستخدم استثنائية. التقنيات المستخدمة: React Native, TypeScript, Redux Toolkit, Node.js, MongoDB, Socket.io للتتبع المباشر, Mapbox API للخرائط, Stripe + PayPal للدفع, AWS S3 للصور, Push Notifications, GraphQL API.",
    descriptionEn: "Comprehensive food ordering platform FoodOrderPro. Connects restaurants, customers, and drivers in one app. Features live order tracking, restaurant ratings, discount coupons, and loyalty program. Easy interface and exceptional user experience. Technologies used: React Native, TypeScript, Redux Toolkit, Node.js, MongoDB, Socket.io for live tracking, Mapbox API for maps, Stripe + PayPal for payment, AWS S3 for images, Push Notifications, GraphQL API.",
    descriptionTr: "Kapsamlı yemek sipariş platformu FoodOrderPro. Restoranları, müşterileri ve sürücüleri tek uygulamada birleştirir. Canlı sipariş takibi, restoran değerlendirmeleri, indirim kuponları ve sadakat programı içerir. Kolay arayüz ve olağanüstü kullanıcı deneyimi. Kullanılan teknolojiler: React Native, TypeScript, Redux Toolkit, Node.js, MongoDB, Socket.io canlı takip, Mapbox API haritalar, Stripe + PayPal ödeme, AWS S3 resimler, Push Notifications, GraphQL API.",
    category: "restaurant"
  },
  {
    titleAr: "مسرع أعمال - ستارت أب بوست",
    titleEn: "Business Accelerator - StartUpBoost",
    titleTr: "İş Hızlandırıcısı - StartUpBoost",
    descriptionAr: "منصة مسرع الشركات الناشئة ستارت أب بوست. تقدم الإرشاد، التمويل، والشبكات للرياديين. تتضمن دورات تدريبية، ورش عمل، مواد تعليمية، وأدوات تقييم الأفكار. مجتمع تفاعلي للمؤسسين والمستثمرين. التقنيات المستخدمة: Next.js 14, TypeScript, Supabase, PostgreSQL, Stripe للدفع, Zoom SDK للاجتماعات, Notion API للمحتوى, SendGrid للايميل, Tailwind CSS, Framer Motion, Vercel للنشر.",
    descriptionEn: "Startup accelerator platform StartUpBoost. Provides mentoring, funding, and networks for entrepreneurs. Features training courses, workshops, educational materials, and idea assessment tools. Interactive community for founders and investors. Technologies used: Next.js 14, TypeScript, Supabase, PostgreSQL, Stripe for payments, Zoom SDK for meetings, Notion API for content, SendGrid for email, Tailwind CSS, Framer Motion, Vercel for deployment.",
    descriptionTr: "Startup hızlandırıcı platformu StartUpBoost. Girişimciler için mentorluk, finansman ve ağlar sağlar. Eğitim kursları, atölyeler, eğitim materyalleri ve fikir değerlendirme araçları içerir. Kurucular ve yatırımcılar için interaktif topluluk. Kullanılan teknolojiler: Next.js 14, TypeScript, Supabase, PostgreSQL, Stripe ödemeler, Zoom SDK toplantılar, Notion API içerik, SendGrid e-posta, Tailwind CSS, Framer Motion, Vercel dağıtım.",
    category: "startup"
  },
  {
    titleAr: "أداة تطوير - بروتو بيلدر",
    titleEn: "Development Tool - ProtoBuilder",
    titleTr: "Geliştirme Aracı - ProtoBuilder",
    descriptionAr: "إطار تطوير المنتج الأولي بروتو بيلدر للشركات الناشئة. يساعد في بناء MVP بسرعة باستخدام قوالب جاهزة ومكونات قابلة للإعادة. يتضمن أدوات التصميم، قواعد البيانات، ونشر تلقائي. واجهة سحب وإفلات بصرية. التقنيات المستخدمة: React 18, TypeScript, Vite, Storybook للمكونات, Prisma ORM, Docker, Kubernetes, GitHub Actions للCI/CD, Figma API للتصميم, AWS CloudFormation للبنية التحتية, Jest للاختبار.",
    descriptionEn: "MVP development framework ProtoBuilder for startups. Helps build MVP quickly using ready templates and reusable components. Features design tools, databases, and automatic deployment. Visual drag-and-drop interface. Technologies used: React 18, TypeScript, Vite, Storybook for components, Prisma ORM, Docker, Kubernetes, GitHub Actions for CI/CD, Figma API for design, AWS CloudFormation for infrastructure, Jest for testing.",
    descriptionTr: "Startup'lar için MVP geliştirme çerçevesi ProtoBuilder. Hazır şablonlar ve yeniden kullanılabilir bileşenler kullanarak MVP'yi hızla oluşturmaya yardımcı olur. Tasarım araçları, veritabanları ve otomatik dağıtım içerir. Görsel sürükle-bırak arayüzü. Kullanılan teknolojiler: React 18, TypeScript, Vite, Storybook bileşenler, Prisma ORM, Docker, Kubernetes, GitHub Actions CI/CD, Figma API tasarım, AWS CloudFormation altyapı, Jest test.",
    category: "startup"
  },
  {
    titleAr: "منصة تجارة متقدمة - إي كوم بلس",
    titleEn: "Advanced E-commerce Platform - EComPlus",
    titleTr: "Gelişmiş E-ticaret Platformu - EComPlus",
    descriptionAr: "منصة التجارة الإلكترونية المتقدمة إي كوم بلس بميزات ذكية. تتضمن ذكاء اصطناعي للتوصيات، تحليلات متقدمة للمبيعات، إدارة مخزون ذكية، ونظام ولاء عملاء متطور. تدعم البيع متعدد القنوات والعملات المشفرة. التقنيات المستخدمة: Next.js 14, TypeScript, Prisma, PostgreSQL, Redis, Elasticsearch للبحث الذكي, TensorFlow للتوصيات, Stripe + Crypto payments, AWS S3, CDN, Microservices Architecture, Docker Swarm.",
    descriptionEn: "Advanced e-commerce platform EComPlus with smart features. Features AI for recommendations, advanced sales analytics, smart inventory management, and sophisticated customer loyalty system. Supports multi-channel selling and cryptocurrencies. Technologies used: Next.js 14, TypeScript, Prisma, PostgreSQL, Redis, Elasticsearch for smart search, TensorFlow for recommendations, Stripe + Crypto payments, AWS S3, CDN, Microservices Architecture, Docker Swarm.",
    descriptionTr: "Akıllı özelliklerle gelişmiş e-ticaret platformu EComPlus. Öneriler için AI, gelişmiş satış analitiği, akıllı envanter yönetimi ve gelişmiş müşteri sadakat sistemi içerir. Çok kanallı satış ve kripto para desteği. Kullanılan teknolojiler: Next.js 14, TypeScript, Prisma, PostgreSQL, Redis, Elasticsearch akıllı arama, TensorFlow öneriler, Stripe + Crypto ödemeler, AWS S3, CDN, Microservices Architecture, Docker Swarm.",
    category: "ecommerce"
  }
];

async function updateLastProjects() {
  try {
    console.log('🏢 تحديث آخر مجموعة من المشاريع...');
    
    const allProjects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    // تحديث من المشروع السابع عشر إلى الحادي والعشرين
    for (let i = 0; i < lastProjects.length; i++) {
      const projectIndex = i + 16; // من 16 إلى 20
      const projectData = lastProjects[i];
      
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
    
    console.log('\n🎉 تم الانتهاء من تحديث جميع المشاريع بأسماء تجارية احترافية!');
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في التحديث:', error);
    await prisma.$disconnect();
  }
}

updateLastProjects();

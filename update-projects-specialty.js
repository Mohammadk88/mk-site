import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Projects that align with Mohammad Kfelati's actual expertise
const expertiseProjects = [
  // AI-Powered SaaS Platforms
  {
    titleEn: "AI-Powered Social Media Management SaaS",
    titleAr: "منصة إدارة وسائل التواصل الاجتماعي بالذكاء الاصطناعي",
    titleTr: "AI Destekli Sosyal Medya Yönetimi SaaS",
    descriptionEn: "Comprehensive social media management platform integrating OpenAI and Claude for automated content creation, scheduling, analytics, and engagement tracking. Features multi-account management, AI-powered content suggestions, and advanced reporting dashboards.",
    descriptionAr: "منصة شاملة لإدارة وسائل التواصل الاجتماعي تدمج OpenAI و Claude لإنشاء المحتوى التلقائي والجدولة والتحليلات وتتبع التفاعل. تتميز بإدارة الحسابات المتعددة واقتراحات المحتوى بالذكاء الاصطناعي ولوحات التقارير المتقدمة.",
    descriptionTr: "Otomatik içerik oluşturma, programlama, analitik ve etkileşim takibi için OpenAI ve Claude'u entegre eden kapsamlı sosyal medya yönetim platformu. Çoklu hesap yönetimi, AI destekli içerik önerileri ve gelişmiş raporlama panolarına sahiptir.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
    demoUrl: "https://socialmedia-ai-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "TypeScript", "NestJS", "OpenAI API", "Claude API", "Prisma", "PostgreSQL", "Vercel"]',
    category: "saas",
    published: true
  },

  // Enterprise SaaS Solutions
  {
    titleEn: "Enterprise Content Management System",
    titleAr: "نظام إدارة المحتوى للمؤسسات",
    titleTr: "Kurumsal İçerik Yönetim Sistemi",
    descriptionEn: "Scalable enterprise CMS built with Next.js and NestJS, featuring advanced authentication, role-based access control, workflow automation, and integration with external APIs. Optimized for high-performance content delivery and security.",
    descriptionAr: "نظام إدارة محتوى مؤسسي قابل للتطوير مبني بـ Next.js و NestJS، يتميز بالمصادقة المتقدمة والتحكم في الوصول القائم على الأدوار وأتمتة سير العمل والتكامل مع واجهات برمجة التطبيقات الخارجية. محسن لتسليم المحتوى عالي الأداء والأمان.",
    descriptionTr: "Next.js ve NestJS ile oluşturulmuş ölçeklenebilir kurumsal CMS, gelişmiş kimlik doğrulama, rol tabanlı erişim kontrolü, iş akışı otomasyonu ve harici API entegrasyonu özelliklerine sahiptir. Yüksek performanslı içerik dağıtımı ve güvenlik için optimize edilmiştir.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    demoUrl: "https://enterprise-cms-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Redis", "AWS S3", "Docker"]',
    category: "saas",
    published: true
  },

  // Advanced Full-Stack Applications
  {
    titleEn: "Real-Time Collaboration Platform",
    titleAr: "منصة التعاون في الوقت الفعلي",
    titleTr: "Gerçek Zamanlı İşbirliği Platformu",
    descriptionEn: "Full-stack collaboration platform using Next.js frontend and NestJS backend with WebSocket integration for real-time document editing, video conferencing, and team communication. Features advanced security protocols and scalable architecture.",
    descriptionAr: "منصة تعاون متكاملة تستخدم واجهة Next.js وخلفية NestJS مع تكامل WebSocket لتحرير المستندات في الوقت الفعلي ومؤتمرات الفيديو والتواصل الجماعي. تتميز ببروتوكولات الأمان المتقدمة والهندسة القابلة للتطوير.",
    descriptionTr: "Gerçek zamanlı belge düzenleme, video konferans ve ekip iletişimi için WebSocket entegrasyonu ile Next.js frontend ve NestJS backend kullanan tam yığın işbirliği platformu. Gelişmiş güvenlik protokolleri ve ölçeklenebilir mimariye sahiptir.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    demoUrl: "https://collaboration-platform-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "TypeScript", "NestJS", "Socket.io", "WebRTC", "Prisma", "PostgreSQL", "Redis"]',
    category: "saas",
    published: true
  },

  // AI Integration Projects
  {
    titleEn: "AI-Powered Business Intelligence Dashboard",
    titleAr: "لوحة معلومات الأعمال الذكية بالذكاء الاصطناعي",
    titleTr: "AI Destekli İş Zekası Panosu",
    descriptionEn: "Advanced BI dashboard integrating multiple AI models for predictive analytics, automated insights generation, and intelligent data visualization. Built with Next.js and powered by OpenAI for natural language querying and report generation.",
    descriptionAr: "لوحة معلومات أعمال متقدمة تدمج نماذج ذكاء اصطناعي متعددة للتحليلات التنبؤية وتوليد الرؤى التلقائية وتصور البيانات الذكي. مبنية بـ Next.js ومدعومة بـ OpenAI للاستعلام باللغة الطبيعية وتوليد التقارير.",
    descriptionTr: "Tahmine dayalı analitik, otomatik içgörü üretimi ve akıllı veri görselleştirmesi için birden fazla AI modelini entegre eden gelişmiş BI panosu. Next.js ile oluşturulmuş ve doğal dil sorgulama ve rapor oluşturma için OpenAI ile desteklenmiştir.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demoUrl: "https://ai-bi-dashboard-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "TypeScript", "OpenAI API", "D3.js", "Chart.js", "Prisma", "PostgreSQL", "Python"]',
    category: "ai",
    published: true
  },

  // Modern E-Commerce Solutions
  {
    titleEn: "Next.js E-Commerce Platform with AI",
    titleAr: "منصة التجارة الإلكترونية بـ Next.js والذكاء الاصطناعي",
    titleTr: "AI ile Next.js E-Ticaret Platformu",
    descriptionEn: "Modern e-commerce platform built with Next.js 15, featuring AI-powered product recommendations, dynamic pricing, inventory management, and advanced analytics. Integrated with Stripe for secure payments and optimized for performance.",
    descriptionAr: "منصة تجارة إلكترونية حديثة مبنية بـ Next.js 15، تتميز بتوصيات المنتجات المدعومة بالذكاء الاصطناعي والتسعير الديناميكي وإدارة المخزون والتحليلات المتقدمة. متكاملة مع Stripe للمدفوعات الآمنة ومحسنة للأداء.",
    descriptionTr: "Next.js 15 ile oluşturulmuş modern e-ticaret platformu, AI destekli ürün önerileri, dinamik fiyatlandırma, envanter yönetimi ve gelişmiş analitik özelliklerine sahiptir. Güvenli ödemeler için Stripe entegrasyonu ve performans için optimize edilmiştir.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    demoUrl: "https://nextjs-ecommerce-ai-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "OpenAI API", "Tailwind CSS", "Vercel"]',
    category: "ecommerce",
    published: true
  },

  // Backend Architecture Solutions
  {
    titleEn: "Microservices API Gateway with NestJS",
    titleAr: "بوابة واجهات برمجة التطبيقات المصغرة بـ NestJS",
    titleTr: "NestJS ile Mikro Hizmetler API Gateway",
    descriptionEn: "Scalable microservices architecture built with NestJS, featuring API gateway, service discovery, load balancing, authentication middleware, and comprehensive monitoring. Designed for high-availability enterprise applications.",
    descriptionAr: "هندسة الخدمات المصغرة القابلة للتطوير مبنية بـ NestJS، تتميز ببوابة API واكتشاف الخدمات وتوزيع الحمولة ووسطاء المصادقة والمراقبة الشاملة. مصممة لتطبيقات المؤسسات عالية التوفر.",
    descriptionTr: "NestJS ile oluşturulmuş ölçeklenebilir mikro hizmetler mimarisi, API gateway, hizmet keşfi, yük dengeleme, kimlik doğrulama ara yazılımı ve kapsamlı izleme özelliklerine sahiptir. Yüksek kullanılabilirlik enterprise uygulamaları için tasarlanmıştır.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
    demoUrl: "https://microservices-gateway-demo.vercel.app",
    githubUrl: "",
    technologies: '["NestJS", "TypeScript", "Docker", "Kubernetes", "Redis", "PostgreSQL", "GraphQL", "JWT"]',
    category: "backend",
    published: true
  },

  // ICT Management Solutions
  {
    titleEn: "Enterprise ICT Infrastructure Management",
    titleAr: "إدارة البنية التحتية لتكنولوجيا المعلومات والاتصالات للمؤسسات",
    titleTr: "Kurumsal BİT Altyapı Yönetimi",
    descriptionEn: "Comprehensive ICT management platform for monitoring network infrastructure, server health, security protocols, and system performance. Features automated alerts, compliance reporting, and resource optimization recommendations.",
    descriptionAr: "منصة إدارة شاملة لتكنولوجيا المعلومات والاتصالات لمراقبة البنية التحتية للشبكة وصحة الخادم وبروتوكولات الأمان وأداء النظام. تتميز بالتنبيهات التلقائية وتقارير الامتثال وتوصيات تحسين الموارد.",
    descriptionTr: "Ağ altyapısı, sunucu sağlığı, güvenlik protokolleri ve sistem performansını izlemek için kapsamlı BİT yönetim platformu. Otomatik uyarılar, uyumluluk raporlaması ve kaynak optimizasyonu önerilerine sahiptir.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    demoUrl: "https://ict-management-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "Grafana", "Prometheus", "Node.js"]',
    category: "saas",
    published: true
  },

  // Advanced Security Solutions
  {
    titleEn: "Enterprise Authentication & Security Platform",
    titleAr: "منصة المصادقة والأمان للمؤسسات",
    titleTr: "Kurumsal Kimlik Doğrulama ve Güvenlik Platformu",
    descriptionEn: "Advanced authentication system with multi-factor authentication, OAuth2, JWT tokens, role-based access control, and comprehensive security monitoring. Built with NestJS backend and Next.js dashboard for security management.",
    descriptionAr: "نظام مصادقة متقدم مع المصادقة متعددة العوامل و OAuth2 ورموز JWT والتحكم في الوصول القائم على الأدوار والمراقبة الأمنية الشاملة. مبني بخلفية NestJS ولوحة تحكم Next.js لإدارة الأمان.",
    descriptionTr: "Çok faktörlü kimlik doğrulama, OAuth2, JWT token'ları, rol tabanlı erişim kontrolü ve kapsamlı güvenlik izleme ile gelişmiş kimlik doğrulama sistemi. NestJS backend ve güvenlik yönetimi için Next.js panosu ile oluşturulmuştur.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    demoUrl: "https://enterprise-auth-demo.vercel.app",
    githubUrl: "",
    technologies: '["NestJS", "Next.js", "TypeScript", "JWT", "OAuth2", "Prisma", "PostgreSQL", "Redis", "2FA"]',
    category: "security",
    published: true
  },

  // Real-time Analytics Platform
  {
    titleEn: "Real-Time Analytics & Monitoring SaaS",
    titleAr: "منصة التحليلات والمراقبة في الوقت الفعلي",
    titleTr: "Gerçek Zamanlı Analitik ve İzleme SaaS",
    descriptionEn: "High-performance analytics platform processing millions of events per second using Next.js frontend and NestJS backend. Features real-time dashboards, custom metrics, alerting system, and API integrations for comprehensive business monitoring.",
    descriptionAr: "منصة تحليلات عالية الأداء تعالج ملايين الأحداث في الثانية باستخدام واجهة Next.js وخلفية NestJS. تتميز بلوحات المراقبة في الوقت الفعلي والمقاييس المخصصة ونظام التنبيه وتكاملات API للمراقبة التجارية الشاملة.",
    descriptionTr: "Next.js frontend ve NestJS backend kullanarak saniyede milyonlarca olayı işleyen yüksek performanslı analitik platformu. Gerçek zamanlı panolar, özel metrikler, uyarı sistemi ve kapsamlı iş izleme için API entegrasyonlarına sahiptir.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demoUrl: "https://realtime-analytics-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "ClickHouse", "Redis", "WebSocket", "D3.js", "Docker"]',
    category: "saas",
    published: true
  },

  // Digital Transformation Solutions
  {
    titleEn: "Digital Transformation Consulting Platform",
    titleAr: "منصة استشارات التحول الرقمي",
    titleTr: "Dijital Dönüşüm Danışmanlık Platformu",
    descriptionEn: "Comprehensive platform for digital transformation consulting, featuring assessment tools, roadmap planning, progress tracking, and automated reporting. Integrates AI for recommendations and includes project management capabilities.",
    descriptionAr: "منصة شاملة لاستشارات التحول الرقمي، تتميز بأدوات التقييم وتخطيط خارطة الطريق وتتبع التقدم والتقارير التلقائية. تدمج الذكاء الاصطناعي للتوصيات وتشمل قدرات إدارة المشاريع.",
    descriptionTr: "Değerlendirme araçları, yol haritası planlama, ilerleme takibi ve otomatik raporlama özelliklerine sahip dijital dönüşüm danışmanlığı için kapsamlı platform. Öneriler için AI entegrasyonu ve proje yönetimi yetenekleri içerir.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demoUrl: "https://digital-transformation-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "OpenAI API", "Chart.js", "Tailwind CSS"]',
    category: "consulting",
    published: true
  },

  // Advanced CRM with AI
  {
    titleEn: "AI-Enhanced Customer Relationship Management",
    titleAr: "إدارة علاقات العملاء المحسنة بالذكاء الاصطناعي",
    titleTr: "AI Geliştirilmiş Müşteri İlişkileri Yönetimi",
    descriptionEn: "Next-generation CRM system powered by AI for predictive customer behavior analysis, automated lead scoring, intelligent email campaigns, and personalized customer journeys. Built with modern stack for scalability and performance.",
    descriptionAr: "نظام إدارة علاقات العملاء من الجيل التالي مدعوم بالذكاء الاصطناعي لتحليل سلوك العملاء التنبؤي وتسجيل العملاء المحتملين التلقائي وحملات البريد الإلكتروني الذكية ورحلات العملاء الشخصية. مبني بحزمة تقنيات حديثة للقابلية للتطوير والأداء.",
    descriptionTr: "Tahmine dayalı müşteri davranışı analizi, otomatik potansiyel müşteri puanlama, akıllı e-posta kampanyaları ve kişiselleştirilmiş müşteri yolculukları için AI ile desteklenen yeni nesil CRM sistemi. Ölçeklenebilirlik ve performans için modern yığın ile oluşturulmuştur.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    demoUrl: "https://ai-crm-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "OpenAI API", "Prisma", "PostgreSQL", "Redis", "Node.js"]',
    category: "crm",
    published: true
  },

  // Advanced Web Applications
  {
    titleEn: "Progressive Web Application Framework",
    titleAr: "إطار عمل تطبيقات الويب التقدمية",
    titleTr: "Progressive Web Uygulama Çerçevesi",
    descriptionEn: "Comprehensive PWA framework built with Next.js 15, featuring offline capabilities, push notifications, service workers, and optimized performance. Includes development tools and deployment automation for rapid application development.",
    descriptionAr: "إطار عمل شامل لتطبيقات الويب التقدمية مبني بـ Next.js 15، يتميز بالقدرات دون اتصال والإشعارات الفورية وعمال الخدمة والأداء المحسن. يشمل أدوات التطوير وأتمتة النشر للتطوير السريع للتطبيقات.",
    descriptionTr: "Next.js 15 ile oluşturulmuş kapsamlı PWA çerçevesi, çevrimdışı yetenekler, push bildirimleri, service worker'lar ve optimize edilmiş performans özelliklerine sahiptir. Hızlı uygulama geliştirme için geliştirme araçları ve dağıtım otomasyonu içerir.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    demoUrl: "https://pwa-framework-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js 15", "TypeScript", "PWA", "Service Workers", "IndexedDB", "Tailwind CSS", "Vercel"]',
    category: "web",
    published: true
  },

  // IoT and Smart Systems
  {
    titleEn: "IoT Device Management Platform",
    titleAr: "منصة إدارة أجهزة إنترنت الأشياء",
    titleTr: "IoT Cihaz Yönetimi Platformu",
    descriptionEn: "Enterprise IoT platform for device management, data collection, and analytics. Features real-time monitoring, firmware updates, security management, and integration with cloud services. Built with scalable architecture for handling millions of devices.",
    descriptionAr: "منصة إنترنت الأشياء للمؤسسات لإدارة الأجهزة وجمع البيانات والتحليلات. تتميز بالمراقبة في الوقت الفعلي وتحديثات البرامج الثابتة وإدارة الأمان والتكامل مع الخدمات السحابية. مبنية بهندسة قابلة للتطوير للتعامل مع ملايين الأجهزة.",
    descriptionTr: "Cihaz yönetimi, veri toplama ve analitik için kurumsal IoT platformu. Gerçek zamanlı izleme, firmware güncellemeleri, güvenlik yönetimi ve bulut hizmetleri entegrasyonu özelliklerine sahiptir. Milyonlarca cihazı idare etmek için ölçeklenebilir mimari ile oluşturulmuştur.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    demoUrl: "https://iot-management-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "MQTT", "InfluxDB", "Docker", "AWS IoT", "Redis"]',
    category: "iot",
    published: true
  },

  // Modern Mobile Backend
  {
    titleEn: "Mobile App Backend with Real-time Features",
    titleAr: "خلفية تطبيق الجوال مع الميزات في الوقت الفعلي",
    titleTr: "Gerçek Zamanlı Özelliklerle Mobil Uygulama Backend",
    descriptionEn: "Robust mobile backend built with NestJS providing authentication, real-time messaging, push notifications, file storage, and API management. Optimized for high-performance mobile applications with offline synchronization capabilities.",
    descriptionAr: "خلفية جوال قوية مبنية بـ NestJS توفر المصادقة والرسائل في الوقت الفعلي والإشعارات الفورية وتخزين الملفات وإدارة API. محسنة للتطبيقات الجوالة عالية الأداء مع قدرات المزامنة دون اتصال.",
    descriptionTr: "Kimlik doğrulama, gerçek zamanlı mesajlaşma, push bildirimleri, dosya depolama ve API yönetimi sağlayan NestJS ile oluşturulmuş sağlam mobil backend. Çevrimdışı senkronizasyon yetenekleri ile yüksek performanslı mobil uygulamalar için optimize edilmiştir.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    demoUrl: "https://mobile-backend-demo.vercel.app",
    githubUrl: "",
    technologies: '["NestJS", "TypeScript", "Socket.io", "Firebase", "PostgreSQL", "Redis", "AWS S3", "JWT"]',
    category: "mobile",
    published: true
  },

  // Business Intelligence Platform
  {
    titleEn: "Enterprise Business Intelligence Suite",
    titleAr: "مجموعة ذكاء الأعمال للمؤسسات",
    titleTr: "Kurumsal İş Zekası Paketi",
    descriptionEn: "Comprehensive BI platform with data visualization, automated reporting, predictive analytics, and custom dashboard creation. Features data integration from multiple sources, real-time processing, and advanced user management.",
    descriptionAr: "منصة ذكاء أعمال شاملة مع تصور البيانات والتقارير التلقائية والتحليلات التنبؤية وإنشاء لوحات المراقبة المخصصة. تتميز بتكامل البيانات من مصادر متعددة والمعالجة في الوقت الفعلي وإدارة المستخدمين المتقدمة.",
    descriptionTr: "Veri görselleştirme, otomatik raporlama, tahmine dayalı analitik ve özel pano oluşturma ile kapsamlı BI platformu. Birden fazla kaynaktan veri entegrasyonu, gerçek zamanlı işleme ve gelişmiş kullanıcı yönetimi özelliklerine sahiptir.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demoUrl: "https://enterprise-bi-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "TypeScript", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"]',
    category: "analytics",
    published: true
  },

  // Financial Technology Platform
  {
    titleEn: "FinTech Payment Processing Platform",
    titleAr: "منصة معالجة المدفوعات للتكنولوجيا المالية",
    titleTr: "FinTech Ödeme İşleme Platformu",
    descriptionEn: "Secure payment processing platform with multi-currency support, fraud detection, compliance management, and real-time transaction monitoring. Built with enterprise-grade security and scalability for financial institutions.",
    descriptionAr: "منصة معالجة مدفوعات آمنة مع دعم متعدد العملات وكشف الاحتيال وإدارة الامتثال ومراقبة المعاملات في الوقت الفعلي. مبنية بأمان وقابلية تطوير على مستوى المؤسسات للمؤسسات المالية.",
    descriptionTr: "Çok para birimi desteği, dolandırıcılık tespiti, uyumluluk yönetimi ve gerçek zamanlı işlem izleme ile güvenli ödeme işleme platformu. Finansal kurumlar için kurumsal düzeyde güvenlik ve ölçeklenebilirlik ile oluşturulmuştur.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    demoUrl: "https://fintech-payment-demo.vercel.app",
    githubUrl: "",
    technologies: '["NestJS", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Docker", "JWT", "Encryption"]',
    category: "fintech",
    published: true
  },

  // Healthcare Technology
  {
    titleEn: "Healthcare Management System with AI",
    titleAr: "نظام إدارة الرعاية الصحية بالذكاء الاصطناعي",
    titleTr: "AI ile Sağlık Yönetimi Sistemi",
    descriptionEn: "Advanced healthcare management platform with patient records, appointment scheduling, telemedicine integration, and AI-powered diagnostic assistance. Features HIPAA compliance, secure data handling, and integration with medical devices.",
    descriptionAr: "منصة إدارة رعاية صحية متقدمة مع سجلات المرضى وجدولة المواعيد وتكامل الطب عن بُعد والمساعدة التشخيصية المدعومة بالذكاء الاصطناعي. تتميز بامتثال HIPAA والتعامل الآمن مع البيانات والتكامل مع الأجهزة الطبية.",
    descriptionTr: "Hasta kayıtları, randevu planlaması, teletıp entegrasyonu ve AI destekli teşhis yardımı ile gelişmiş sağlık yönetimi platformu. HIPAA uyumluluğu, güvenli veri işleme ve tıbbi cihaz entegrasyonu özelliklerine sahiptir.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    demoUrl: "https://healthcare-ai-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "OpenAI API", "FHIR", "PostgreSQL", "Redis", "WebRTC"]',
    category: "healthcare",
    published: true
  },

  // E-Learning Platform
  {
    titleEn: "AI-Powered Learning Management System",
    titleAr: "نظام إدارة التعلم المدعوم بالذكاء الاصطناعي",
    titleTr: "AI Destekli Öğrenme Yönetim Sistemi",
    descriptionEn: "Modern LMS with AI-powered personalized learning paths, automated content generation, progress tracking, and interactive assessments. Features video streaming, collaborative tools, and advanced analytics for educational institutions.",
    descriptionAr: "نظام إدارة تعلم حديث مع مسارات تعلم شخصية مدعومة بالذكاء الاصطناعي وتوليد المحتوى التلقائي وتتبع التقدم والتقييمات التفاعلية. يتميز ببث الفيديو وأدوات التعاون والتحليلات المتقدمة للمؤسسات التعليمية.",
    descriptionTr: "AI destekli kişiselleştirilmiş öğrenme yolları, otomatik içerik oluşturma, ilerleme takibi ve etkileşimli değerlendirmeler ile modern LMS. Video streaming, işbirliği araçları ve eğitim kurumları için gelişmiş analitik özelliklerine sahiptir.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    demoUrl: "https://ai-lms-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "OpenAI API", "FFmpeg", "PostgreSQL", "Redis", "WebRTC"]',
    category: "education",
    published: true
  },

  // Supply Chain Management
  {
    titleEn: "Digital Supply Chain Management Platform",
    titleAr: "منصة إدارة سلسلة التوريد الرقمية",
    titleTr: "Dijital Tedarik Zinciri Yönetimi Platformu",
    descriptionEn: "Comprehensive supply chain platform with inventory tracking, supplier management, demand forecasting, and logistics optimization. Features blockchain integration for transparency and AI-powered analytics for operational efficiency.",
    descriptionAr: "منصة سلسلة توريد شاملة مع تتبع المخزون وإدارة الموردين وتوقع الطلب وتحسين الخدمات اللوجستية. تتميز بتكامل البلوك تشين للشفافية والتحليلات المدعومة بالذكاء الاصطناعي للكفاءة التشغيلية.",
    descriptionTr: "Envanter takibi, tedarikçi yönetimi, talep tahmini ve lojistik optimizasyonu ile kapsamlı tedarik zinciri platformu. Şeffaflık için blockchain entegrasyonu ve operasyonel verimlilik için AI destekli analitik özelliklerine sahiptir.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
    demoUrl: "https://supply-chain-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "Blockchain", "PostgreSQL", "Redis", "Docker", "GraphQL"]',
    category: "logistics",
    published: true
  },

  // DevOps and Infrastructure
  {
    titleEn: "DevOps Automation and Monitoring Platform",
    titleAr: "منصة أتمتة ومراقبة DevOps",
    titleTr: "DevOps Otomasyon ve İzleme Platformu",
    descriptionEn: "Complete DevOps platform with CI/CD pipeline management, infrastructure monitoring, automated testing, deployment orchestration, and comprehensive logging. Built for enterprise-scale applications with Kubernetes integration.",
    descriptionAr: "منصة DevOps كاملة مع إدارة خط أنابيب CI/CD ومراقبة البنية التحتية والاختبار التلقائي وتنسيق النشر والتسجيل الشامل. مبنية للتطبيقات على مستوى المؤسسات مع تكامل Kubernetes.",
    descriptionTr: "CI/CD pipeline yönetimi, altyapı izleme, otomatik test, dağıtım orkestrasyon ve kapsamlı loglama ile eksiksiz DevOps platformu. Kubernetes entegrasyonu ile kurumsal ölçekli uygulamalar için oluşturulmuştur.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    demoUrl: "https://devops-platform-demo.vercel.app",
    githubUrl: "",
    technologies: '["Docker", "Kubernetes", "Jenkins", "Grafana", "Prometheus", "Ansible", "Terraform", "GitLab CI"]',
    category: "devops",
    published: true
  },

  // Portfolio and Personal Branding
  {
    titleEn: "AI-Enhanced Portfolio Website",
    titleAr: "موقع المحفظة المحسن بالذكاء الاصطناعي",
    titleTr: "AI Geliştirilmiş Portföy Web Sitesi",
    descriptionEn: "Modern portfolio website with AI-powered content generation, dynamic project showcases, interactive demos, and personalized user experiences. Features multilingual support, advanced animations, and performance optimization.",
    descriptionAr: "موقع محفظة حديث مع توليد المحتوى المدعوم بالذكاء الاصطناعي وعروض المشاريع الديناميكية والعروض التوضيحية التفاعلية والتجارب الشخصية للمستخدم. يتميز بالدعم متعدد اللغات والرسوم المتحركة المتقدمة وتحسين الأداء.",
    descriptionTr: "AI destekli içerik oluşturma, dinamik proje vitrinleri, etkileşimli demolar ve kişiselleştirilmiş kullanıcı deneyimleri ile modern portföy web sitesi. Çok dilli destek, gelişmiş animasyonlar ve performans optimizasyonu özelliklerine sahiptir.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demoUrl: "https://ai-portfolio-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js 15", "TypeScript", "OpenAI API", "Framer Motion", "Tailwind CSS", "Prisma", "Vercel"]',
    category: "portfolio",
    published: true
  }
];

async function updateProjectsToSpecialty() {
  try {
    console.log('🚀 تحديث جميع المشاريع لتتماشى مع تخصص Mohammad Kfelati...');
    
    // Clear all existing projects
    await prisma.project.deleteMany({});
    console.log('✅ تم حذف جميع المشاريع الموجودة');
    
    // Add new specialized projects
    for (const project of expertiseProjects) {
      await prisma.project.create({
        data: project
      });
      console.log(`✅ تم إضافة: ${project.titleAr}`);
    }
    
    console.log('\n📊 إحصائيات المشاريع الجديدة:');
    console.log(`📝 إجمالي المشاريع: ${expertiseProjects.length}`);
    
    // Count projects by category
    const categoryCounts = expertiseProjects.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    }, {});
    
    console.log('\n📂 توزيع المشاريع حسب الفئة:');
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} مشروع`);
    });
    
    console.log('\n🎯 التقنيات الرئيسية المستخدمة:');
    console.log('   • Next.js 15 & TypeScript');
    console.log('   • NestJS & Node.js');
    console.log('   • OpenAI & Claude AI APIs');
    console.log('   • Prisma & PostgreSQL');
    console.log('   • Docker & Kubernetes');
    console.log('   • Redis & WebSocket');
    console.log('   • Authentication & Security');
    console.log('   • Real-time Analytics');
    
    console.log('\n🎉 تم الانتهاء من تحديث جميع المشاريع بنجاح!');
    console.log('💼 جميع المشاريع الآن تعكس خبرة Mohammad Kfelati الفعلية في:');
    console.log('   • تطوير منصات SaaS بالذكاء الاصطناعي');
    console.log('   • إدارة تكنولوجيا المعلومات والاتصالات');
    console.log('   • التطوير الكامل للمكدس التقني');
    console.log('   • تكامل نماذج الذكاء الاصطناعي');
    console.log('   • الأمان والمصادقة المتقدمة');
    console.log('   • حلول المؤسسات القابلة للتطوير');
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في تحديث المشاريع:', error);
    await prisma.$disconnect();
  }
}

updateProjectsToSpecialty();

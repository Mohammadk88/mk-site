import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to generate random date between 2013 and today
function getRandomDate() {
  const start = new Date('2013-01-01');
  const end = new Date();
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

// Comprehensive project data for each category (3-5 projects each)
const newProjects = [
  // Web Applications (5 projects)
  {
    titleEn: "TaskFlow - Project Management Platform",
    titleAr: "تاسك فلو - منصة إدارة المشاريع", 
    titleTr: "TaskFlow - Proje Yönetimi Platformu",
    descriptionEn: "Comprehensive project management platform with Kanban boards, Gantt charts, team collaboration, time tracking, and real-time analytics for enhanced productivity.",
    descriptionAr: "منصة إدارة مشاريع شاملة مع لوحات كانبان ومخططات جانت والتعاون الجماعي وتتبع الوقت والتحليلات في الوقت الفعلي لتحسين الإنتاجية.",
    descriptionTr: "Kanban panoları, Gantt çizelgeleri, ekip işbirliği, zaman takibi ve gerçek zamanlı analitik ile verimlilik artışı için kapsamlı proje yönetimi platformu.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    demoUrl: "https://taskflow-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Chart.js", "Tailwind CSS"]',
    category: "web",
    published: true
  },
  {
    titleEn: "CloudDrive - File Storage & Collaboration",
    titleAr: "كلاود درايف - تخزين الملفات والتعاون",
    titleTr: "CloudDrive - Dosya Depolama ve İşbirliği", 
    descriptionEn: "Secure cloud storage platform with file sharing, version control, team collaboration, advanced search, and integration with productivity tools.",
    descriptionAr: "منصة تخزين سحابية آمنة مع مشاركة الملفات والتحكم في الإصدارات والتعاون الجماعي والبحث المتقدم والتكامل مع أدوات الإنتاجية.",
    descriptionTr: "Dosya paylaşımı, sürüm kontrolü, ekip işbirliği, gelişmiş arama ve verimlilik araçlarıyla entegrasyon özellikli güvenli bulut depolama platformu.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    demoUrl: "https://clouddrive-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "Node.js", "AWS S3", "PostgreSQL", "WebSocket", "Elasticsearch", "Docker"]',
    category: "web",
    published: true
  },
  {
    titleEn: "EventHub - Event Management System",
    titleAr: "إيفنت هاب - نظام إدارة الفعاليات",
    titleTr: "EventHub - Etkinlik Yönetim Sistemi",
    descriptionEn: "Complete event management platform with ticket sales, attendee tracking, vendor management, real-time analytics, and mobile app integration.",
    descriptionAr: "منصة إدارة فعاليات كاملة مع بيع التذاكر وتتبع الحضور وإدارة البائعين والتحليلات في الوقت الفعلي والتكامل مع التطبيقات المحمولة.",
    descriptionTr: "Bilet satışları, katılımcı takibi, satıcı yönetimi, gerçek zamanlı analitik ve mobil uygulama entegrasyonu ile kapsamlı etkinlik yönetimi platformu.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    demoUrl: "https://eventhub-demo.vercel.app",
    githubUrl: "",
    technologies: '["Vue.js", "Laravel", "MySQL", "Stripe", "WebSocket", "Redis", "Docker"]',
    category: "web",
    published: true
  },
  {
    titleEn: "LearnSpace - Online Learning Platform",
    titleAr: "ليرن سبيس - منصة التعلم عبر الإنترنت",
    titleTr: "LearnSpace - Online Öğrenme Platformu",
    descriptionEn: "Interactive e-learning platform with video courses, live sessions, quizzes, progress tracking, certificates, and integrated payment system.",
    descriptionAr: "منصة تعلم إلكتروني تفاعلية مع دورات فيديو وجلسات مباشرة واختبارات وتتبع التقدم وشهادات ونظام دفع متكامل.",
    descriptionTr: "Video kursları, canlı oturumlar, sınavlar, ilerleme takibi, sertifikalar ve entegre ödeme sistemi ile interaktif e-öğrenme platformu.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    demoUrl: "https://learnspace-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "PostgreSQL", "FFmpeg", "WebRTC", "Stripe"]',
    category: "web",
    published: true
  },
  {
    titleEn: "AnalyticsPro - Business Intelligence Dashboard",
    titleAr: "أناليتيكس برو - لوحة ذكاء الأعمال",
    titleTr: "AnalyticsPro - İş Zekası Panosu",
    descriptionEn: "Advanced business intelligence platform with data visualization, custom reports, predictive analytics, and real-time monitoring for data-driven decisions.",
    descriptionAr: "منصة ذكاء أعمال متقدمة مع تصور البيانات والتقارير المخصصة والتحليلات التنبؤية والمراقبة في الوقت الفعلي للقرارات القائمة على البيانات.",
    descriptionTr: "Veri görselleştirme, özel raporlar, tahmine dayalı analitik ve veri odaklı kararlar için gerçek zamanlı izleme ile gelişmiş iş zekası platformu.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demoUrl: "https://analyticspro-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "ClickHouse", "Docker"]',
    category: "web",
    published: true
  },

  // Mobile Apps (4 projects)
  {
    titleEn: "FitnessTracker - Health & Workout App",
    titleAr: "فيتنس تراكر - تطبيق الصحة والتمارين",
    titleTr: "FitnessTracker - Sağlık ve Egzersiz Uygulaması",
    descriptionEn: "Comprehensive fitness app with workout plans, nutrition tracking, progress monitoring, social features, and wearable device integration.",
    descriptionAr: "تطبيق لياقة بدنية شامل مع خطط التمارين وتتبع التغذية ومراقبة التقدم والميزات الاجتماعية والتكامل مع الأجهزة القابلة للارتداء.",
    descriptionTr: "Egzersiz planları, beslenme takibi, ilerleme izleme, sosyal özellikler ve giyilebilir cihaz entegrasyonu ile kapsamlı fitness uygulaması.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    demoUrl: "https://fitnesstracker-demo.vercel.app",
    githubUrl: "",
    technologies: '["React Native", "Firebase", "HealthKit", "Google Fit", "Socket.io", "Stripe"]',
    category: "mobile",
    published: true
  },
  {
    titleEn: "TravelMate - Trip Planning Companion",
    titleAr: "ترافل ميت - رفيق تخطيط الرحلات",
    titleTr: "TravelMate - Seyahat Planlama Arkadaşı",
    descriptionEn: "Smart travel planning app with itinerary creation, booking management, expense tracking, local recommendations, and offline maps.",
    descriptionAr: "تطبيق تخطيط سفر ذكي مع إنشاء برنامج الرحلة وإدارة الحجوزات وتتبع المصروفات والتوصيات المحلية والخرائط دون اتصال.",
    descriptionTr: "Güzergah oluşturma, rezervasyon yönetimi, harcama takibi, yerel öneriler ve çevrimdışı haritalar ile akıllı seyahat planlama uygulaması.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    demoUrl: "https://travelmate-demo.vercel.app",
    githubUrl: "",
    technologies: '["Flutter", "Dart", "Google Maps API", "Firebase", "Booking.com API", "Stripe"]',
    category: "mobile",
    published: true
  },
  {
    titleEn: "ShopSmart - Smart Shopping Assistant",
    titleAr: "شوب سمارت - مساعد التسوق الذكي",
    titleTr: "ShopSmart - Akıllı Alışveriş Asistanı",
    descriptionEn: "AI-powered shopping app with price comparison, product recommendations, barcode scanning, wish lists, and cashback rewards.",
    descriptionAr: "تطبيق تسوق مدعوم بالذكاء الاصطناعي مع مقارنة الأسعار وتوصيات المنتجات ومسح الباركود وقوائم الأمنيات ومكافآت الاسترداد النقدي.",
    descriptionTr: "Fiyat karşılaştırması, ürün önerileri, barkod tarama, istek listeleri ve para iadesi ödülleri ile AI destekli alışveriş uygulaması.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    demoUrl: "https://shopsmart-demo.vercel.app",
    githubUrl: "",
    technologies: '["React Native", "OpenAI API", "Barcode Scanner", "Firebase", "Stripe", "ML Kit"]',
    category: "mobile",
    published: true
  },
  {
    titleEn: "MoodSpace - Mental Health Companion",
    titleAr: "مود سبيس - رفيق الصحة النفسية",
    titleTr: "MoodSpace - Ruh Sağlığı Arkadaşı",
    descriptionEn: "Mental wellness app with mood tracking, meditation guides, therapy session booking, progress analytics, and crisis support features.",
    descriptionAr: "تطبيق العافية النفسية مع تتبع المزاج وأدلة التأمل وحجز جلسات العلاج وتحليلات التقدم وميزات دعم الأزمات.",
    descriptionTr: "Ruh hali takibi, meditasyon rehberleri, terapi seansı rezervasyonu, ilerleme analitiği ve kriz destek özellikleri ile zihinsel sağlık uygulaması.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    demoUrl: "https://moodspace-demo.vercel.app",
    githubUrl: "",
    technologies: '["Flutter", "Firebase", "TensorFlow Lite", "WebRTC", "Push Notifications"]',
    category: "mobile",
    published: true
  },

  // AI-Powered Systems (5 projects)
  {
    titleEn: "SmartAssist - AI Business Automation",
    titleAr: "سمارت أسيست - أتمتة الأعمال بالذكاء الاصطناعي",
    titleTr: "SmartAssist - AI İş Otomasyonu",
    descriptionEn: "Intelligent business automation platform with document processing, workflow automation, predictive analytics, and natural language processing capabilities.",
    descriptionAr: "منصة أتمتة أعمال ذكية مع معالجة المستندات وأتمتة سير العمل والتحليلات التنبؤية وقدرات معالجة اللغة الطبيعية.",
    descriptionTr: "Belge işleme, iş akışı otomasyonu, tahmine dayalı analitik ve doğal dil işleme yetenekleri ile akıllı iş otomasyonu platformu.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    demoUrl: "https://smartassist-demo.vercel.app",
    githubUrl: "",
    technologies: '["Python", "OpenAI API", "TensorFlow", "FastAPI", "PostgreSQL", "Celery", "Docker"]',
    category: "ai",
    published: true
  },
  {
    titleEn: "VisionIQ - Computer Vision Analytics",
    titleAr: "فيجن آي كيو - تحليلات الرؤية الحاسوبية",
    titleTr: "VisionIQ - Bilgisayar Görü Analitiği",
    descriptionEn: "Advanced computer vision platform for object detection, facial recognition, quality inspection, and real-time video analytics for various industries.",
    descriptionAr: "منصة رؤية حاسوبية متقدمة للكشف عن الأشياء والتعرف على الوجوه وفحص الجودة وتحليل الفيديو في الوقت الفعلي لمختلف الصناعات.",
    descriptionTr: "Nesne algılama, yüz tanıma, kalite denetimi ve çeşitli endüstriler için gerçek zamanlı video analitiği ile gelişmiş bilgisayar görü platformu.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    demoUrl: "https://visioniq-demo.vercel.app",
    githubUrl: "",
    technologies: '["Python", "OpenCV", "TensorFlow", "PyTorch", "FastAPI", "Redis", "Docker"]',
    category: "ai",
    published: true
  },
  {
    titleEn: "ChatGenie - Intelligent Conversational AI",
    titleAr: "تشات جيني - الذكاء الاصطناعي المحادثي الذكي",
    titleTr: "ChatGenie - Akıllı Konuşma AI'sı",
    descriptionEn: "Advanced chatbot platform with natural language understanding, multi-language support, intent recognition, and seamless integration capabilities.",
    descriptionAr: "منصة روبوت محادثة متقدمة مع فهم اللغة الطبيعية ودعم متعدد اللغات والتعرف على النوايا وقدرات التكامل السلس.",
    descriptionTr: "Doğal dil anlama, çoklu dil desteği, niyet tanıma ve sorunsuz entegrasyon yetenekleri ile gelişmiş chatbot platformu.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    demoUrl: "https://chatgenie-demo.vercel.app",
    githubUrl: "",
    technologies: '["Python", "OpenAI API", "spaCy", "NLTK", "FastAPI", "WebSocket", "Redis"]',
    category: "ai",
    published: true
  },
  {
    titleEn: "PredictiveOps - AI Operations Platform",
    titleAr: "بريديكتيف أوبس - منصة العمليات بالذكاء الاصطناعي",
    titleTr: "PredictiveOps - AI Operasyon Platformu",
    descriptionEn: "AI-driven operations platform with predictive maintenance, anomaly detection, resource optimization, and intelligent monitoring for industrial applications.",
    descriptionAr: "منصة عمليات مدفوعة بالذكاء الاصطناعي مع الصيانة التنبؤية واكتشاف الشذوذ وتحسين الموارد والمراقبة الذكية للتطبيقات الصناعية.",
    descriptionTr: "Tahmine dayalı bakım, anomali tespiti, kaynak optimizasyonu ve endüstriyel uygulamalar için akıllı izleme ile AI odaklı operasyon platformu.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
    demoUrl: "https://predictiveops-demo.vercel.app",
    githubUrl: "",
    technologies: '["Python", "TensorFlow", "Scikit-learn", "InfluxDB", "Grafana", "Kafka", "Kubernetes"]',
    category: "ai",
    published: true
  },
  {
    titleEn: "ContentCraft - AI Content Generation",
    titleAr: "كونتنت كرافت - توليد المحتوى بالذكاء الاصطناعي",
    titleTr: "ContentCraft - AI İçerik Üretimi",
    descriptionEn: "Comprehensive AI content creation platform with text generation, image creation, video editing, SEO optimization, and multi-format publishing.",
    descriptionAr: "منصة إنشاء محتوى شاملة بالذكاء الاصطناعي مع توليد النصوص وإنشاء الصور وتحرير الفيديو وتحسين السيو والنشر متعدد التنسيقات.",
    descriptionTr: "Metin üretimi, görsel oluşturma, video düzenleme, SEO optimizasyonu ve çoklu format yayınlama ile kapsamlı AI içerik oluşturma platformu.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop",
    demoUrl: "https://contentcraft-demo.vercel.app",
    githubUrl: "",
    technologies: '["Python", "OpenAI API", "DALL-E", "FFmpeg", "Next.js", "PostgreSQL", "Redis"]',
    category: "ai",
    published: true
  },

  // ERP Systems (4 projects)
  {
    titleEn: "ManufactureFlow - Production ERP",
    titleAr: "مانيوفاكتشر فلو - نظام تخطيط موارد الإنتاج",
    titleTr: "ManufactureFlow - Üretim ERP'si",
    descriptionEn: "Comprehensive manufacturing ERP with production planning, inventory management, quality control, supply chain optimization, and real-time monitoring.",
    descriptionAr: "نظام تخطيط موارد تصنيع شامل مع تخطيط الإنتاج وإدارة المخزون ومراقبة الجودة وتحسين سلسلة التوريد والمراقبة في الوقت الفعلي.",
    descriptionTr: "Üretim planlama, envanter yönetimi, kalite kontrolü, tedarik zinciri optimizasyonu ve gerçek zamanlı izleme ile kapsamlı üretim ERP'si.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    demoUrl: "https://manufactureflow-demo.vercel.app",
    githubUrl: "",
    technologies: '["Laravel", "Vue.js", "PostgreSQL", "Redis", "Docker", "IoT Integration"]',
    category: "erp",
    published: true
  },
  {
    titleEn: "RetailMaster - Multi-Store ERP",
    titleAr: "ريتيل ماستر - نظام تخطيط موارد متعدد المتاجر",
    titleTr: "RetailMaster - Çoklu Mağaza ERP'si",
    descriptionEn: "Multi-location retail ERP with POS integration, inventory synchronization, customer management, financial reporting, and loyalty programs.",
    descriptionAr: "نظام تخطيط موارد التجزئة متعدد المواقع مع تكامل نقطة البيع ومزامنة المخزون وإدارة العملاء والتقارير المالية وبرامج الولاء.",
    descriptionTr: "POS entegrasyonu, envanter senkronizasyonu, müşteri yönetimi, finansal raporlama ve sadakat programları ile çok lokasyonlu perakende ERP'si.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    demoUrl: "https://retailmaster-demo.vercel.app",
    githubUrl: "",
    technologies: '["Django", "React", "PostgreSQL", "Redis", "Stripe", "AWS"]',
    category: "erp",
    published: true
  },
  {
    titleEn: "ServicePro - Service Business ERP",
    titleAr: "سيرفيس برو - نظام تخطيط موارد أعمال الخدمات",
    titleTr: "ServicePro - Hizmet İşletmesi ERP'si",
    descriptionEn: "Specialized ERP for service businesses with project management, time tracking, resource allocation, billing automation, and performance analytics.",
    descriptionAr: "نظام تخطيط موارد متخصص لأعمال الخدمات مع إدارة المشاريع وتتبع الوقت وتخصيص الموارد وأتمتة الفوترة وتحليلات الأداء.",
    descriptionTr: "Proje yönetimi, zaman takibi, kaynak tahsisi, faturalandırma otomasyonu ve performans analitiği ile hizmet işletmeleri için özel ERP.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demoUrl: "https://servicepro-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Stripe"]',
    category: "erp",
    published: true
  },
  {
    titleEn: "HealthcareERP - Medical Practice Management",
    titleAr: "هيلث كير إي آر بي - إدارة الممارسة الطبية",
    titleTr: "HealthcareERP - Tıbbi Uygulama Yönetimi",
    descriptionEn: "Healthcare ERP with patient management, appointment scheduling, electronic health records, billing, insurance claims, and compliance tracking.",
    descriptionAr: "نظام تخطيط موارد الرعاية الصحية مع إدارة المرضى وجدولة المواعيد والسجلات الصحية الإلكترونية والفوترة ومطالبات التأمين وتتبع الامتثال.",
    descriptionTr: "Hasta yönetimi, randevu planlaması, elektronik sağlık kayıtları, faturalandırma, sigorta talepleri ve uyumluluk takibi ile sağlık ERP'si.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    demoUrl: "https://healthcareerp-demo.vercel.app",
    githubUrl: "",
    technologies: '["Vue.js", "Laravel", "MySQL", "FHIR", "HL7", "AWS HIPAA"]',
    category: "erp",
    published: true
  },

  // CRM Systems (4 projects)
  {
    titleEn: "SalesForce Pro - Advanced CRM",
    titleAr: "سيلز فورس برو - نظام إدارة علاقات العملاء المتقدم",
    titleTr: "SalesForce Pro - Gelişmiş CRM",
    descriptionEn: "Enterprise CRM with sales automation, lead management, customer analytics, email marketing, pipeline tracking, and AI-powered insights.",
    descriptionAr: "نظام إدارة علاقات عملاء المؤسسات مع أتمتة المبيعات وإدارة العملاء المحتملين وتحليلات العملاء والتسويق عبر البريد الإلكتروني وتتبع خط الأنابيب والرؤى المدعومة بالذكاء الاصطناعي.",
    descriptionTr: "Satış otomasyonu, potansiyel müşteri yönetimi, müşteri analitiği, e-posta pazarlama, satış hattı takibi ve AI destekli öngörüler ile kurumsal CRM.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    demoUrl: "https://salesforcepro-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "Node.js", "PostgreSQL", "Redis", "OpenAI API", "Stripe"]',
    category: "crm",
    published: true
  },
  {
    titleEn: "CustomerCare 360 - Support CRM",
    titleAr: "كستمر كير 360 - نظام إدارة دعم العملاء",
    titleTr: "CustomerCare 360 - Destek CRM'i",
    descriptionEn: "Customer support CRM with ticket management, live chat, knowledge base, SLA tracking, customer satisfaction surveys, and omnichannel support.",
    descriptionAr: "نظام إدارة دعم العملاء مع إدارة التذاكر والدردشة المباشرة وقاعدة المعرفة وتتبع اتفاقية مستوى الخدمة واستطلاعات رضا العملاء والدعم متعدد القنوات.",
    descriptionTr: "Bilet yönetimi, canlı sohbet, bilgi tabanı, SLA takibi, müşteri memnuniyeti anketleri ve çok kanallı destek ile müşteri destek CRM'i.",
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop",
    demoUrl: "https://customercare360-demo.vercel.app",
    githubUrl: "",
    technologies: '["Vue.js", "Laravel", "MySQL", "Socket.io", "Elasticsearch", "Twilio"]',
    category: "crm",
    published: true
  },
  {
    titleEn: "RealEstate CRM - Property Management",
    titleAr: "ريل إستيت سي آر إم - إدارة العقارات",
    titleTr: "RealEstate CRM - Emlak Yönetimi",
    descriptionEn: "Real estate CRM with property listings, lead tracking, client communication, document management, virtual tours, and market analytics.",
    descriptionAr: "نظام إدارة علاقات عملاء العقارات مع قوائم العقارات وتتبع العملاء المحتملين والتواصل مع العملاء وإدارة المستندات والجولات الافتراضية وتحليلات السوق.",
    descriptionTr: "Emlak listeleri, potansiyel müşteri takibi, müşteri iletişimi, belge yönetimi, sanal turlar ve pazar analitiği ile gayrimenkul CRM'i.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    demoUrl: "https://realestatecrm-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3", "Google Maps API"]',
    category: "crm",
    published: true
  },
  {
    titleEn: "MarketingHub - Campaign CRM",
    titleAr: "ماركتنج هاب - نظام إدارة حملات التسويق",
    titleTr: "MarketingHub - Kampanya CRM'i",
    descriptionEn: "Marketing-focused CRM with campaign management, email automation, social media integration, lead scoring, and ROI tracking.",
    descriptionAr: "نظام إدارة علاقات العملاء المركز على التسويق مع إدارة الحملات وأتمتة البريد الإلكتروني وتكامل وسائل التواصل الاجتماعي وتسجيل العملاء المحتملين وتتبع العائد على الاستثمار.",
    descriptionTr: "Kampanya yönetimi, e-posta otomasyonu, sosyal medya entegrasyonu, potansiyel müşteri puanlama ve ROI takibi ile pazarlama odaklı CRM.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demoUrl: "https://marketinghub-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "Django", "PostgreSQL", "Celery", "Social Media APIs", "SendGrid"]',
    category: "crm",
    published: true
  },

  // E-commerce Platforms (4 projects)
  {
    titleEn: "ShopifyClone - Multi-Vendor Marketplace",
    titleAr: "شوبيفاي كلون - سوق متعدد البائعين",
    titleTr: "ShopifyClone - Çok Satıcılı Pazar Yeri",
    descriptionEn: "Complete multi-vendor e-commerce platform with vendor management, payment processing, inventory tracking, order fulfillment, and mobile apps.",
    descriptionAr: "منصة تجارة إلكترونية متعددة البائعين كاملة مع إدارة البائعين ومعالجة المدفوعات وتتبع المخزون وتنفيذ الطلبات والتطبيقات المحمولة.",
    descriptionTr: "Satıcı yönetimi, ödeme işleme, envanter takibi, sipariş karşılama ve mobil uygulamalar ile eksiksiz çok satıcılı e-ticaret platformu.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    demoUrl: "https://shopifyclone-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "AWS S3"]',
    category: "ecommerce",
    published: true
  },
  {
    titleEn: "FashionStore - Clothing E-commerce",
    titleAr: "فاشن ستور - متجر ملابس إلكتروني",
    titleTr: "FashionStore - Giyim E-ticaret",
    descriptionEn: "Fashion e-commerce platform with virtual try-on, size recommendations, style matching, wishlist, reviews, and social shopping features.",
    descriptionAr: "منصة تجارة إلكترونية للأزياء مع التجربة الافتراضية وتوصيات المقاسات ومطابقة الأنماط وقائمة الأمنيات والمراجعات وميزات التسوق الاجتماعي.",
    descriptionTr: "Sanal deneme, beden önerileri, stil eşleştirme, istek listesi, yorumlar ve sosyal alışveriş özellikleri ile moda e-ticaret platformu.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    demoUrl: "https://fashionstore-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "AR.js", "TensorFlow.js", "Node.js", "MongoDB", "Stripe"]',
    category: "ecommerce",
    published: true
  },
  {
    titleEn: "FoodieMarket - Grocery Delivery",
    titleAr: "فودي ماركت - توصيل البقالة",
    titleTr: "FoodieMarket - Market Teslimatı",
    descriptionEn: "Grocery delivery platform with real-time inventory, scheduled deliveries, subscription boxes, recipe suggestions, and nutritional information.",
    descriptionAr: "منصة توصيل البقالة مع المخزون في الوقت الفعلي والتسليم المجدول وصناديق الاشتراك واقتراحات الوصفات والمعلومات الغذائية.",
    descriptionTr: "Gerçek zamanlı envanter, planlanmış teslimatlar, abonelik kutuları, tarif önerileri ve beslenme bilgileri ile market teslimat platformu.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
    demoUrl: "https://foodiemarket-demo.vercel.app",
    githubUrl: "",
    technologies: '["Flutter", "Firebase", "Google Maps API", "Stripe", "Nutritionix API"]',
    category: "ecommerce",
    published: true
  },
  {
    titleEn: "TechGadgets - Electronics Store",
    titleAr: "تك جادجتس - متجر الإلكترونيات",
    titleTr: "TechGadgets - Elektronik Mağazası",
    descriptionEn: "Electronics e-commerce with product comparisons, technical specifications, warranty tracking, expert reviews, and trade-in programs.",
    descriptionAr: "تجارة إلكترونية للإلكترونيات مع مقارنات المنتجات والمواصفات التقنية وتتبع الضمان ومراجعات الخبراء وبرامج المقايضة.",
    descriptionTr: "Ürün karşılaştırmaları, teknik özellikler, garanti takibi, uzman yorumları ve takas programları ile elektronik e-ticaret.",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop",
    demoUrl: "https://techgadgets-demo.vercel.app",
    githubUrl: "",
    technologies: '["Vue.js", "Laravel", "MySQL", "Elasticsearch", "PayPal", "AWS"]',
    category: "ecommerce",
    published: true
  },

  // Restaurant Systems (3 projects)
  {
    titleEn: "RestaurantMaster - Complete POS System",
    titleAr: "ريستورانت ماستر - نظام نقطة البيع الكامل",
    titleTr: "RestaurantMaster - Komple POS Sistemi",
    descriptionEn: "Comprehensive restaurant POS with order management, kitchen display, inventory tracking, staff scheduling, customer analytics, and loyalty programs.",
    descriptionAr: "نظام نقطة بيع مطعم شامل مع إدارة الطلبات وشاشة المطبخ وتتبع المخزون وجدولة الموظفين وتحليلات العملاء وبرامج الولاء.",
    descriptionTr: "Sipariş yönetimi, mutfak ekranı, envanter takibi, personel planlaması, müşteri analitiği ve sadakat programları ile kapsamlı restoran POS'u.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    demoUrl: "https://restaurantmaster-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "Node.js", "PostgreSQL", "Socket.io", "Stripe", "Thermal Printer API"]',
    category: "restaurant",
    published: true
  },
  {
    titleEn: "DeliveryHub - Restaurant Delivery Platform",
    titleAr: "ديليفري هاب - منصة توصيل المطاعم",
    titleTr: "DeliveryHub - Restoran Teslimat Platformu",
    descriptionEn: "Multi-restaurant delivery platform with real-time tracking, driver management, dynamic pricing, customer ratings, and multi-payment options.",
    descriptionAr: "منصة توصيل متعددة المطاعم مع التتبع في الوقت الفعلي وإدارة السائقين والتسعير الديناميكي وتقييمات العملاء وخيارات الدفع المتعددة.",
    descriptionTr: "Gerçek zamanlı takip, sürücü yönetimi, dinamik fiyatlandırma, müşteri derecelendirmeleri ve çoklu ödeme seçenekleri ile çok restoranlı teslimat platformu.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
    demoUrl: "https://deliveryhub-demo.vercel.app",
    githubUrl: "",
    technologies: '["React Native", "Node.js", "Google Maps API", "Socket.io", "Stripe", "Push Notifications"]',
    category: "restaurant",
    published: true
  },
  {
    titleEn: "ChefCloud - Recipe & Menu Management",
    titleAr: "شيف كلاود - إدارة الوصفات والقوائم",
    titleTr: "ChefCloud - Tarif ve Menü Yönetimi",
    descriptionEn: "Recipe and menu management system with cost calculation, nutritional analysis, allergen tracking, seasonal menu planning, and supplier integration.",
    descriptionAr: "نظام إدارة الوصفات والقوائم مع حساب التكلفة والتحليل الغذائي وتتبع المواد المسببة للحساسية وتخطيط القوائم الموسمية وتكامل الموردين.",
    descriptionTr: "Maliyet hesaplama, beslenme analizi, alerjen takibi, mevsimsel menü planlama ve tedarikçi entegrasyonu ile tarif ve menü yönetim sistemi.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop",
    demoUrl: "https://chefcloud-demo.vercel.app",
    githubUrl: "",
    technologies: '["Vue.js", "Django", "PostgreSQL", "Nutritionix API", "Chart.js"]',
    category: "restaurant",
    published: true
  },

  // SaaS Solutions (5 projects)
  {
    titleEn: "ProjectFlow SaaS - Team Collaboration",
    titleAr: "بروجكت فلو ساس - تعاون الفريق",
    titleTr: "ProjectFlow SaaS - Takım İşbirliği",
    descriptionEn: "All-in-one project management SaaS with team collaboration, time tracking, resource planning, budget management, and client portals.",
    descriptionAr: "منصة إدارة مشاريع شاملة مع تعاون الفريق وتتبع الوقت وتخطيط الموارد وإدارة الميزانية وبوابات العملاء.",
    descriptionTr: "Takım işbirliği, zaman takibi, kaynak planlama, bütçe yönetimi ve müşteri portalları ile hepsi bir arada proje yönetimi SaaS'ı.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    demoUrl: "https://projectflow-saas-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Stripe"]',
    category: "saas",
    published: true
  },
  {
    titleEn: "EmailMaster SaaS - Marketing Automation",
    titleAr: "إيميل ماستر ساس - أتمتة التسويق",
    titleTr: "EmailMaster SaaS - Pazarlama Otomasyonu",
    descriptionEn: "Email marketing automation SaaS with drag-drop editor, segmentation, A/B testing, analytics, and multi-channel campaigns.",
    descriptionAr: "منصة أتمتة التسويق عبر البريد الإلكتروني مع محرر السحب والإفلات والتقسيم واختبار A/B والتحليلات والحملات متعددة القنوات.",
    descriptionTr: "Sürükle-bırak editörü, segmentasyon, A/B testi, analitik ve çok kanallı kampanyalar ile e-posta pazarlama otomasyonu SaaS'ı.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop",
    demoUrl: "https://emailmaster-saas-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "Node.js", "PostgreSQL", "SendGrid", "Redis", "Chart.js"]',
    category: "saas",
    published: true
  },
  {
    titleEn: "InvoiceCloud SaaS - Billing & Invoicing",
    titleAr: "إنفويس كلاود ساس - الفوترة والتحصيل",
    titleTr: "InvoiceCloud SaaS - Faturalandırma",
    descriptionEn: "Comprehensive invoicing SaaS with automated billing, payment tracking, expense management, tax calculations, and financial reporting.",
    descriptionAr: "منصة فوترة شاملة مع الفوترة التلقائية وتتبع المدفوعات وإدارة المصروفات وحسابات الضرائب والتقارير المالية.",
    descriptionTr: "Otomatik faturalandırma, ödeme takibi, harcama yönetimi, vergi hesaplamaları ve finansal raporlama ile kapsamlı faturalandırma SaaS'ı.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    demoUrl: "https://invoicecloud-saas-demo.vercel.app",
    githubUrl: "",
    technologies: '["Vue.js", "Laravel", "MySQL", "Stripe", "PayPal", "PDF Generation"]',
    category: "saas",
    published: true
  },
  {
    titleEn: "StockTracker SaaS - Inventory Management",
    titleAr: "ستوك تراكر ساس - إدارة المخزون",
    titleTr: "StockTracker SaaS - Envanter Yönetimi",
    descriptionEn: "Smart inventory management SaaS with barcode scanning, stock alerts, demand forecasting, supplier management, and multi-location support.",
    descriptionAr: "منصة إدارة مخزون ذكية مع مسح الباركود وتنبيهات المخزون وتوقع الطلب وإدارة الموردين ودعم المواقع المتعددة.",
    descriptionTr: "Barkod tarama, stok uyarıları, talep tahmini, tedarikçi yönetimi ve çok lokasyon desteği ile akıllı envanter yönetimi SaaS'ı.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
    demoUrl: "https://stocktracker-saas-demo.vercel.app",
    githubUrl: "",
    technologies: '["React Native", "Node.js", "PostgreSQL", "Barcode Scanner", "Machine Learning"]',
    category: "saas",
    published: true
  },
  {
    titleEn: "HelpDesk Pro SaaS - Customer Support",
    titleAr: "هيلب ديسك برو ساس - دعم العملاء",
    titleTr: "HelpDesk Pro SaaS - Müşteri Desteği",
    descriptionEn: "Customer support SaaS with ticket management, live chat, knowledge base, automation workflows, and customer satisfaction tracking.",
    descriptionAr: "منصة دعم العملاء مع إدارة التذاكر والدردشة المباشرة وقاعدة المعرفة وسير العمل التلقائي وتتبع رضا العملاء.",
    descriptionTr: "Bilet yönetimi, canlı sohbet, bilgi tabanı, otomasyon iş akışları ve müşteri memnuniyeti takibi ile müşteri destek SaaS'ı.",
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop",
    demoUrl: "https://helpdesk-pro-saas-demo.vercel.app",
    githubUrl: "",
    technologies: '["Next.js", "Socket.io", "PostgreSQL", "Elasticsearch", "WebRTC"]',
    category: "saas",
    published: true
  },

  // Startup Management (3 projects)
  {
    titleEn: "StartupLaunch - Complete Business Platform",
    titleAr: "ستارت أب لونش - منصة الأعمال الكاملة",
    titleTr: "StartupLaunch - Komple İş Platformu",
    descriptionEn: "All-in-one startup management platform with business planning, investor tracking, team management, milestone tracking, and funding analytics.",
    descriptionAr: "منصة إدارة الشركات الناشئة الشاملة مع تخطيط الأعمال وتتبع المستثمرين وإدارة الفريق وتتبع المعالم وتحليلات التمويل.",
    descriptionTr: "İş planlama, yatırımcı takibi, ekip yönetimi, kilometre taşı takibi ve finansman analitiği ile hepsi bir arada startup yönetim platformu.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    demoUrl: "https://startupLaunch-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "Node.js", "PostgreSQL", "Chart.js", "DocuSign API", "Stripe"]',
    category: "startup",
    published: true
  },
  {
    titleEn: "InvestorConnect - Funding Management",
    titleAr: "إنفستور كونيكت - إدارة التمويل",
    titleTr: "InvestorConnect - Finansman Yönetimi",
    descriptionEn: "Investor relations platform with pitch deck management, fundraising tracking, investor communication, due diligence tools, and cap table management.",
    descriptionAr: "منصة علاقات المستثمرين مع إدارة عرض الأعمال وتتبع جمع التبرعات والتواصل مع المستثمرين وأدوات العناية الواجبة وإدارة جدول رأس المال.",
    descriptionTr: "Sunum yönetimi, fon toplama takibi, yatırımcı iletişimi, durum tespiti araçları ve sermaye tablosu yönetimi ile yatırımcı ilişkileri platformu.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    demoUrl: "https://investorconnect-demo.vercel.app",
    githubUrl: "",
    technologies: '["Vue.js", "Django", "PostgreSQL", "PDF.js", "Email API", "Encryption"]',
    category: "startup",
    published: true
  },
  {
    titleEn: "MVPBuilder - Rapid Prototyping Tool",
    titleAr: "إم في بي بيلدر - أداة النماذج الأولية السريعة",
    titleTr: "MVPBuilder - Hızlı Prototipleme Aracı",
    descriptionEn: "No-code MVP builder for startups with drag-drop interface, database designer, API generator, user authentication, and deployment automation.",
    descriptionAr: "منشئ MVP بدون كود للشركات الناشئة مع واجهة السحب والإفلات ومصمم قاعدة البيانات ومولد API ومصادقة المستخدم وأتمتة النشر.",
    descriptionTr: "Sürükle-bırak arayüzü, veritabanı tasarımcısı, API üreticisi, kullanıcı kimlik doğrulaması ve dağıtım otomasyonu ile startup'lar için kod gerektirmeyen MVP oluşturucusu.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
    demoUrl: "https://mvpbuilder-demo.vercel.app",
    githubUrl: "",
    technologies: '["React", "Node.js", "MongoDB", "Docker", "AWS", "Code Generation"]',
    category: "startup",
    published: true
  }
];

async function updateProjectsComprehensive() {
  try {
    console.log('🚀 Starting comprehensive project update...');
    
    // Get current projects and update them with random dates and better images
    const existingProjects = await prisma.project.findMany();
    console.log(`📊 Found ${existingProjects.length} existing projects`);
    
    // Update existing projects with random dates
    for (const project of existingProjects) {
      const randomDate = getRandomDate();
      await prisma.project.update({
        where: { id: project.id },
        data: {
          createdAt: randomDate,
          updatedAt: randomDate
        }
      });
      console.log(`✅ Updated dates for: ${project.titleEn}`);
    }
    
    // Add new projects for each category
    console.log('\n📝 Adding new projects...');
    for (const projectData of newProjects) {
      const randomDate = getRandomDate();
      await prisma.project.create({
        data: {
          ...projectData,
          createdAt: randomDate,
          updatedAt: randomDate
        }
      });
      console.log(`✅ Added: ${projectData.titleEn}`);
    }
    
    // Generate summary
    const totalProjects = await prisma.project.count();
    const projectsByCategory = await prisma.project.groupBy({
      by: ['category'],
      _count: { category: true }
    });
    
    console.log('\n📊 Update Summary:');
    console.log(`📝 Total Projects: ${totalProjects}`);
    console.log(`🆕 New Projects Added: ${newProjects.length}`);
    
    console.log('\n📋 Projects by Category:');
    projectsByCategory.forEach(category => {
      console.log(`   ${category.category}: ${category._count.category} projects`);
    });
    
    console.log('\n✅ Comprehensive project update completed successfully!');
    
  } catch (error) {
    console.error('❌ Error updating projects:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateProjectsComprehensive();

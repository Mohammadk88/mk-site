import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const projects = [
  // E-Commerce & Business
  {
    titleEn: 'E-Commerce Mobile Marketplace',
    titleAr: 'سوق التجارة الإلكترونية للجوال',
    titleTr: 'E-Ticaret Mobil Pazaryeri',
    descriptionEn: 'A comprehensive mobile marketplace app with advanced search, payment integration, real-time chat, and seller dashboard. Features include product reviews, wishlist, order tracking, and multi-language support.',
    descriptionAr: 'تطبيق سوق شامل للجوال مع بحث متقدم، تكامل المدفوعات، محادثة فورية، ولوحة تحكم البائع. يتضمن مراجعات المنتجات، قائمة الأمنيات، تتبع الطلبات، ودعم متعدد اللغات.',
    descriptionTr: 'Gelişmiş arama, ödeme entegrasyonu, gerçek zamanlı sohbet ve satıcı panosu olan kapsamlı mobil pazaryeri uygulaması. Ürün incelemeleri, istek listesi, sipariş takibi ve çoklu dil desteği içerir.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    demoUrl: 'https://marketplace-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React Native', 'Redux', 'Firebase', 'Stripe', 'Node.js', 'MongoDB', 'Socket.io']),
    category: 'mobile',
    published: true
  },
  {
    titleEn: 'Restaurant Management System',
    titleAr: 'نظام إدارة المطاعم',
    titleTr: 'Restoran Yönetim Sistemi',
    descriptionEn: 'Complete restaurant management solution with POS system, inventory management, staff scheduling, customer reservations, and real-time analytics dashboard.',
    descriptionAr: 'حل شامل لإدارة المطاعم مع نظام نقاط البيع، إدارة المخزون، جدولة الموظفين، حجوزات العملاء، ولوحة تحليلات فورية.',
    descriptionTr: 'POS sistemi, envanter yönetimi, personel planlaması, müşteri rezervasyonları ve gerçek zamanlı analitik panosu olan kapsamlı restoran yönetim çözümü.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    demoUrl: 'https://restaurant-mgmt-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Chart.js']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Digital Banking Platform',
    titleAr: 'منصة البنك الرقمي',
    titleTr: 'Dijital Bankacılık Platformu',
    descriptionEn: 'Secure digital banking platform with account management, money transfers, bill payments, investment tracking, and advanced security features including 2FA and biometric authentication.',
    descriptionAr: 'منصة بنكية رقمية آمنة مع إدارة الحسابات، تحويل الأموال، دفع الفواتير، تتبع الاستثمارات، وميزات أمان متقدمة تشمل 2FA والمصادقة البيومترية.',
    descriptionTr: 'Hesap yönetimi, para transferleri, fatura ödemeleri, yatırım takibi ve 2FA ve biyometrik kimlik doğrulama dahil gelişmiş güvenlik özelliklerine sahip güvenli dijital bankacılık platformu.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    demoUrl: 'https://banking-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Material-UI']),
    category: 'web',
    published: true
  },

  // Healthcare & Medical
  {
    titleEn: 'Telemedicine Consultation App',
    titleAr: 'تطبيق الاستشارة الطبية عن بُعد',
    titleTr: 'Teletıp Danışmanlık Uygulaması',
    descriptionEn: 'Complete telemedicine platform enabling video consultations, appointment scheduling, prescription management, medical records, and secure messaging between doctors and patients.',
    descriptionAr: 'منصة طب عن بُعد كاملة تتيح استشارات الفيديو، جدولة المواعيد، إدارة الوصفات، السجلات الطبية، والمراسلة الآمنة بين الأطباء والمرضى.',
    descriptionTr: 'Video danışmanları, randevu planlama, reçete yönetimi, tıbbi kayıtlar ve doktor-hasta arasında güvenli mesajlaşma sağlayan kapsamlı teletıp platformu.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    demoUrl: 'https://telemedicine-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Vue.js', 'WebRTC', 'Socket.io', 'Node.js', 'PostgreSQL', 'AWS S3', 'Stripe']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Hospital Management System',
    titleAr: 'نظام إدارة المستشفى',
    titleTr: 'Hastane Yönetim Sistemi',
    descriptionEn: 'Comprehensive hospital management system with patient records, staff management, inventory tracking, billing, and advanced reporting features.',
    descriptionAr: 'نظام إدارة مستشفى شامل مع سجلات المرضى، إدارة الموظفين، تتبع المخزون، الفوترة، وميزات التقارير المتقدمة.',
    descriptionTr: 'Hasta kayıtları, personel yönetimi, envanter takibi, faturalandırma ve gelişmiş raporlama özelliklerine sahip kapsamlı hastane yönetim sistemi.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop',
    demoUrl: 'https://hospital-mgmt-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'Chart.js', 'PDF Generator']),
    category: 'web',
    published: true
  },

  // Education & Learning
  {
    titleEn: 'AI-Powered Learning Management System',
    titleAr: 'نظام إدارة التعلم بالذكاء الاصطناعي',
    titleTr: 'AI Destekli Öğrenme Yönetim Sistemi',
    descriptionEn: 'Smart LMS with AI-powered personalized learning paths, adaptive quizzes, progress tracking, virtual classrooms, and automated content generation.',
    descriptionAr: 'نظام إدارة تعلم ذكي مع مسارات تعلم شخصية بالذكاء الاصطناعي، اختبارات تكيفية، تتبع التقدم، فصول افتراضية، وإنتاج محتوى تلقائي.',
    descriptionTr: 'AI destekli kişiselleştirilmiş öğrenme yolları, uyarlanabilir sınavlar, ilerleme takibi, sanal sınıflar ve otomatik içerik üretimi olan akıllı LMS.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    demoUrl: 'https://ai-lms-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Next.js', 'OpenAI API', 'TensorFlow.js', 'Prisma', 'WebRTC', 'Redis', 'AWS']),
    category: 'ai',
    published: true
  },
  {
    titleEn: 'Virtual Reality Learning Platform',
    titleAr: 'منصة التعلم بالواقع الافتراضي',
    titleTr: 'Sanal Gerçeklik Öğrenme Platformu',
    descriptionEn: 'Immersive VR learning platform for science, history, and technical education with 3D environments, interactive simulations, and collaborative spaces.',
    descriptionAr: 'منصة تعلم غامرة بالواقع الافتراضي للعلوم والتاريخ والتعليم التقني مع بيئات ثلاثية الأبعاد، محاكاة تفاعلية، ومساحات تعاونية.',
    descriptionTr: 'Fen bilimleri, tarih ve teknik eğitim için 3D ortamlar, etkileşimli simülasyonlar ve işbirliği alanları olan sürükleyici VR öğrenme platformu.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop',
    demoUrl: 'https://vr-learning-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['A-Frame', 'Three.js', 'WebXR', 'Node.js', 'Socket.io', 'MongoDB']),
    category: 'web',
    published: true
  },

  // Real Estate & Property
  {
    titleEn: 'Smart Real Estate Platform',
    titleAr: 'منصة العقارات الذكية',
    titleTr: 'Akıllı Emlak Platformu',
    descriptionEn: 'Advanced real estate platform with AR property viewing, AI price prediction, virtual tours, mortgage calculator, and automated property matching.',
    descriptionAr: 'منصة عقارات متقدمة مع عرض العقارات بالواقع المعزز، توقع الأسعار بالذكاء الاصطناعي، جولات افتراضية، حاسبة الرهن العقاري، ومطابقة العقارات التلقائية.',
    descriptionTr: 'AR mülk görüntüleme, AI fiyat tahmini, sanal turlar, ipotek hesaplayıcısı ve otomatik mülk eşleştirme ile gelişmiş emlak platformu.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    demoUrl: 'https://realestate-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'ARCore', 'Google Maps API', 'TensorFlow', 'Firebase', 'Stripe']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Property Management Mobile App',
    titleAr: 'تطبيق إدارة العقارات للجوال',
    titleTr: 'Mülk Yönetimi Mobil Uygulaması',
    descriptionEn: 'Comprehensive property management app for landlords and tenants with rent collection, maintenance requests, expense tracking, and tenant communication.',
    descriptionAr: 'تطبيق إدارة عقارات شامل لأصحاب العقارات والمستأجرين مع تحصيل الإيجار، طلبات الصيانة، تتبع المصروفات، والتواصل مع المستأجرين.',
    descriptionTr: 'Ev sahipleri ve kiracılar için kira toplama, bakım talepleri, gider takibi ve kiracı iletişimi olan kapsamlı mülk yönetimi uygulaması.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    demoUrl: 'https://property-app-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Flutter', 'Dart', 'Firebase', 'Stripe', 'Google Calendar API', 'Push Notifications']),
    category: 'mobile',
    published: true
  },

  // Transportation & Logistics
  {
    titleEn: 'Smart Fleet Management System',
    titleAr: 'نظام إدارة الأسطول الذكي',
    titleTr: 'Akıllı Filo Yönetim Sistemi',
    descriptionEn: 'IoT-enabled fleet management with real-time GPS tracking, fuel monitoring, maintenance scheduling, driver behavior analysis, and route optimization.',
    descriptionAr: 'إدارة أسطول مدعومة بإنترنت الأشياء مع تتبع GPS فوري، مراقبة الوقود، جدولة الصيانة، تحليل سلوك السائق، وتحسين المسارات.',
    descriptionTr: 'Gerçek zamanlı GPS takibi, yakıt izleme, bakım planlama, sürücü davranışı analizi ve rota optimizasyonu ile IoT destekli filo yönetimi.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    demoUrl: 'https://fleet-mgmt-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Node.js', 'MongoDB', 'Google Maps API', 'MQTT', 'Chart.js', 'Socket.io']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Ride Sharing Platform',
    titleAr: 'منصة مشاركة الرحلات',
    titleTr: 'Araç Paylaşım Platformu',
    descriptionEn: 'Complete ride-sharing solution with real-time matching, dynamic pricing, in-app payments, driver tracking, and rating system.',
    descriptionAr: 'حل مشاركة رحلات كامل مع مطابقة فورية، تسعير ديناميكي، مدفوعات داخل التطبيق، تتبع السائق، ونظام تقييم.',
    descriptionTr: 'Gerçek zamanlı eşleştirme, dinamik fiyatlandırma, uygulama içi ödemeler, sürücü takibi ve derecelendirme sistemi olan kapsamlı araç paylaşım çözümü.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
    demoUrl: 'https://rideshare-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe', 'Google Maps API']),
    category: 'mobile',
    published: true
  },

  // Finance & Fintech
  {
    titleEn: 'Cryptocurrency Trading Platform',
    titleAr: 'منصة تداول العملات المشفرة',
    titleTr: 'Kripto Para Ticaret Platformu',
    descriptionEn: 'Advanced crypto trading platform with real-time charts, automated trading bots, portfolio management, news aggregation, and security features.',
    descriptionAr: 'منصة تداول عملات مشفرة متقدمة مع رسوم بيانية فورية، روبوتات تداول تلقائية، إدارة المحفظة، تجميع الأخبار، وميزات الأمان.',
    descriptionTr: 'Gerçek zamanlı grafikler, otomatik ticaret botları, portföy yönetimi, haber toplama ve güvenlik özellikleri olan gelişmiş kripto ticaret platformu.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
    demoUrl: 'https://crypto-trading-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Redux', 'Chart.js', 'WebSocket', 'Node.js', 'PostgreSQL', 'Redis']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'AI Investment Advisory App',
    titleAr: 'تطبيق الاستشارة الاستثمارية بالذكاء الاصطناعي',
    titleTr: 'AI Yatırım Danışmanlığı Uygulaması',
    descriptionEn: 'Smart investment app with AI-powered portfolio recommendations, risk assessment, market analysis, and automated rebalancing.',
    descriptionAr: 'تطبيق استثمار ذكي مع توصيات محفظة بالذكاء الاصطناعي، تقييم المخاطر، تحليل السوق، وإعادة التوازن التلقائي.',
    descriptionTr: 'AI destekli portföy önerileri, risk değerlendirmesi, piyasa analizi ve otomatik yeniden dengeleme ile akıllı yatırım uygulaması.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop',
    demoUrl: 'https://ai-investment-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Flutter', 'Python', 'TensorFlow', 'Alpha Vantage API', 'Firebase', 'Plaid API']),
    category: 'ai',
    published: true
  },

  // Entertainment & Media
  {
    titleEn: 'AI Content Creation Platform',
    titleAr: 'منصة إنشاء المحتوى بالذكاء الاصطناعي',
    titleTr: 'AI İçerik Oluşturma Platformu',
    descriptionEn: 'Advanced content creation platform with AI-generated text, images, videos, voice synthesis, and automated social media scheduling.',
    descriptionAr: 'منصة إنشاء محتوى متقدمة مع نصوص وصور ومقاطع فيديو مُولدة بالذكاء الاصطناعي، تركيب الصوت، وجدولة وسائل التواصل الاجتماعي التلقائية.',
    descriptionTr: 'AI üretimi metin, görsel, video, ses sentezi ve otomatik sosyal medya planlaması olan gelişmiş içerik oluşturma platformu.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    demoUrl: 'https://ai-content-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Next.js', 'OpenAI API', 'Stable Diffusion', 'FFmpeg', 'AWS S3', 'Stripe']),
    category: 'ai',
    published: true
  },
  {
    titleEn: 'Music Streaming Platform',
    titleAr: 'منصة بث الموسيقى',
    titleTr: 'Müzik Akış Platformu',
    descriptionEn: 'Full-featured music streaming service with personalized playlists, social features, offline downloads, and artist analytics dashboard.',
    descriptionAr: 'خدمة بث موسيقى كاملة الميزات مع قوائم تشغيل شخصية، ميزات اجتماعية، تنزيلات غير متصلة، ولوحة تحليلات الفنانين.',
    descriptionTr: 'Kişiselleştirilmiş çalma listeleri, sosyal özellikler, çevrimdışı indirmeler ve sanatçı analitik panosu olan tam özellikli müzik akış hizmeti.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    demoUrl: 'https://music-streaming-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Node.js', 'MongoDB', 'AWS S3', 'Stripe', 'Web Audio API']),
    category: 'web',
    published: true
  },

  // Gaming & Entertainment
  {
    titleEn: 'Multiplayer Game Platform',
    titleAr: 'منصة الألعاب متعددة اللاعبين',
    titleTr: 'Çok Oyunculu Oyun Platformu',
    descriptionEn: 'Real-time multiplayer gaming platform with matchmaking, tournaments, leaderboards, virtual economy, and social features.',
    descriptionAr: 'منصة ألعاب متعددة اللاعبين فورية مع مطابقة اللاعبين، بطولات، لوحات المتصدرين، اقتصاد افتراضي، وميزات اجتماعية.',
    descriptionTr: 'Eşleştirme, turnuvalar, lider tabloları, sanal ekonomi ve sosyal özellikler olan gerçek zamanlı çok oyunculu oyun platformu.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop',
    demoUrl: 'https://gaming-platform-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Unity', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Photon']),
    category: 'web',
    published: true
  },

  // IoT & Smart Home
  {
    titleEn: 'Smart Home Automation Hub',
    titleAr: 'مركز أتمتة المنزل الذكي',
    titleTr: 'Akıllı Ev Otomasyon Merkezi',
    descriptionEn: 'Comprehensive smart home system with device control, energy monitoring, security automation, voice commands, and AI-powered optimization.',
    descriptionAr: 'نظام منزل ذكي شامل مع تحكم في الأجهزة، مراقبة الطاقة، أتمتة الأمان، أوامر صوتية، وتحسين بالذكاء الاصطناعي.',
    descriptionTr: 'Cihaz kontrolü, enerji izleme, güvenlik otomasyonu, sesli komutlar ve AI destekli optimizasyon olan kapsamlı akıllı ev sistemi.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    demoUrl: 'https://smarthome-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana', 'Arduino', 'Raspberry Pi']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Industrial IoT Monitoring',
    titleAr: 'مراقبة إنترنت الأشياء الصناعي',
    titleTr: 'Endüstriyel IoT İzleme',
    descriptionEn: 'Industrial IoT platform for equipment monitoring, predictive maintenance, energy optimization, and safety compliance with real-time alerts.',
    descriptionAr: 'منصة إنترنت الأشياء الصناعي لمراقبة المعدات، الصيانة التنبؤية، تحسين الطاقة، والامتثال للسلامة مع تنبيهات فورية.',
    descriptionTr: 'Ekipman izleme, öngörülü bakım, enerji optimizasyonu ve gerçek zamanlı uyarılarla güvenlik uyumluluğu için endüstriyel IoT platformu.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    demoUrl: 'https://industrial-iot-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Python', 'InfluxDB', 'Grafana', 'MQTT', 'TensorFlow', 'Docker', 'Kubernetes']),
    category: 'web',
    published: true
  },

  // Social & Communication
  {
    titleEn: 'Video Conferencing Platform',
    titleAr: 'منصة مؤتمرات الفيديو',
    titleTr: 'Video Konferans Platformu',
    descriptionEn: 'Enterprise video conferencing solution with screen sharing, recording, breakout rooms, virtual backgrounds, and advanced security features.',
    descriptionAr: 'حل مؤتمرات فيديو للمؤسسات مع مشاركة الشاشة، التسجيل، غرف منفصلة، خلفيات افتراضية، وميزات أمان متقدمة.',
    descriptionTr: 'Ekran paylaşımı, kayıt, ayrı odalar, sanal arka planlar ve gelişmiş güvenlik özellikleri olan kurumsal video konferans çözümü.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop',
    demoUrl: 'https://videoconf-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'WebRTC', 'Socket.io', 'Node.js', 'MongoDB', 'AWS', 'Docker']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Social Media Analytics Tool',
    titleAr: 'أداة تحليل وسائل التواصل الاجتماعي',
    titleTr: 'Sosyal Medya Analitik Aracı',
    descriptionEn: 'Comprehensive social media management and analytics platform with content scheduling, engagement tracking, competitor analysis, and AI insights.',
    descriptionAr: 'منصة إدارة وتحليل وسائل التواصل الاجتماعي الشاملة مع جدولة المحتوى، تتبع التفاعل، تحليل المنافسين، ورؤى الذكاء الاصطناعي.',
    descriptionTr: 'İçerik planlama, etkileşim takibi, rakip analizi ve AI içgörüleri olan kapsamlı sosyal medya yönetimi ve analitik platformu.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop',
    demoUrl: 'https://social-analytics-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Chart.js', 'Social APIs']),
    category: 'web',
    published: true
  },

  // AI & Machine Learning
  {
    titleEn: 'Computer Vision Quality Control',
    titleAr: 'مراقبة الجودة برؤية الكمبيوتر',
    titleTr: 'Bilgisayar Görüşü Kalite Kontrolü',
    descriptionEn: 'AI-powered quality control system using computer vision for defect detection in manufacturing, with real-time analysis and automated reporting.',
    descriptionAr: 'نظام مراقبة جودة مدعوم بالذكاء الاصطناعي يستخدم رؤية الكمبيوتر لكشف العيوب في التصنيع، مع تحليل فوري وتقارير تلقائية.',
    descriptionTr: 'Üretimde kusur tespiti için bilgisayar görüşü kullanan, gerçek zamanlı analiz ve otomatik raporlama ile AI destekli kalite kontrol sistemi.',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800&h=600&fit=crop',
    demoUrl: 'https://cv-quality-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Python', 'OpenCV', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker']),
    category: 'ai',
    published: true
  },
  {
    titleEn: 'Natural Language Processing API',
    titleAr: 'واجهة برمجة معالجة اللغة الطبيعية',
    titleTr: 'Doğal Dil İşleme API\'si',
    descriptionEn: 'Advanced NLP API service providing sentiment analysis, text classification, entity extraction, language translation, and content generation.',
    descriptionAr: 'خدمة واجهة برمجة معالجة لغة طبيعية متقدمة توفر تحليل المشاعر، تصنيف النصوص، استخراج الكيانات، ترجمة اللغات، وإنتاج المحتوى.',
    descriptionTr: 'Duygu analizi, metin sınıflandırması, varlık çıkarımı, dil çevirisi ve içerik üretimi sağlayan gelişmiş NLP API hizmeti.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    demoUrl: 'https://nlp-api-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Python', 'spaCy', 'Transformers', 'FastAPI', 'Redis', 'Docker', 'AWS']),
    category: 'ai',
    published: true
  },

  // E-Learning & Training
  {
    titleEn: 'Corporate Training Platform',
    titleAr: 'منصة التدريب المؤسسي',
    titleTr: 'Kurumsal Eğitim Platformu',
    descriptionEn: 'Enterprise training platform with interactive courses, skills assessment, certification tracking, and detailed analytics for HR departments.',
    descriptionAr: 'منصة تدريب مؤسسي مع دورات تفاعلية، تقييم المهارات، تتبع الشهادات، وتحليلات مفصلة لأقسام الموارد البشرية.',
    descriptionTr: 'Etkileşimli kurslar, beceri değerlendirmesi, sertifika takibi ve İK departmanları için detaylı analitikler olan kurumsal eğitim platformu.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    demoUrl: 'https://corporate-training-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Node.js', 'MongoDB', 'AWS S3', 'Chart.js', 'PDF.js']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Language Learning Mobile App',
    titleAr: 'تطبيق تعلم اللغات للجوال',
    titleTr: 'Dil Öğrenme Mobil Uygulaması',
    descriptionEn: 'Interactive language learning app with speech recognition, adaptive exercises, gamification, progress tracking, and native speaker conversations.',
    descriptionAr: 'تطبيق تعلم لغات تفاعلي مع التعرف على الكلام، تمارين تكيفية، اللعبة، تتبع التقدم، ومحادثات مع متحدثين أصليين.',
    descriptionTr: 'Konuşma tanıma, uyarlanabilir egzersizler, oyunlaştırma, ilerleme takibi ve anadili konuşanlarla sohbet olan etkileşimli dil öğrenme uygulaması.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
    demoUrl: 'https://language-app-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React Native', 'Speech Recognition API', 'Firebase', 'WebRTC', 'Stripe']),
    category: 'mobile',
    published: true
  },

  // Productivity & Tools
  {
    titleEn: 'Project Management Suite',
    titleAr: 'مجموعة إدارة المشاريع',
    titleTr: 'Proje Yönetimi Paketi',
    descriptionEn: 'Comprehensive project management platform with Kanban boards, Gantt charts, time tracking, resource management, and team collaboration tools.',
    descriptionAr: 'منصة إدارة مشاريع شاملة مع لوحات كانبان، مخططات جانت، تتبع الوقت، إدارة الموارد، وأدوات التعاون الجماعي.',
    descriptionTr: 'Kanban panoları, Gantt çizelgeleri, zaman takibi, kaynak yönetimi ve ekip işbirliği araçları olan kapsamlı proje yönetimi platformu.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    demoUrl: 'https://project-mgmt-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Vue.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'Chart.js', 'PDF Export']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'AI-Powered CRM System',
    titleAr: 'نظام إدارة علاقات العملاء بالذكاء الاصطناعي',
    titleTr: 'AI Destekli CRM Sistemi',
    descriptionEn: 'Smart CRM with AI-powered lead scoring, automated follow-ups, predictive analytics, sales forecasting, and customer behavior analysis.',
    descriptionAr: 'نظام إدارة علاقات عملاء ذكي مع تسجيل العملاء المحتملين بالذكاء الاصطناعي، متابعات تلقائية، تحليلات تنبؤية، توقعات المبيعات، وتحليل سلوك العملاء.',
    descriptionTr: 'AI destekli potansiyel müşteri puanlama, otomatik takipler, öngörülü analitik, satış tahmini ve müşteri davranışı analizi olan akıllı CRM.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
    demoUrl: 'https://ai-crm-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Celery']),
    category: 'ai',
    published: true
  },

  // Security & Cybersecurity
  {
    titleEn: 'Cybersecurity Monitoring Dashboard',
    titleAr: 'لوحة مراقبة الأمن السيبراني',
    titleTr: 'Siber Güvenlik İzleme Panosu',
    descriptionEn: 'Real-time cybersecurity monitoring platform with threat detection, vulnerability assessment, incident response, and compliance reporting.',
    descriptionAr: 'منصة مراقبة أمن سيبراني فورية مع كشف التهديدات، تقييم الثغرات، الاستجابة للحوادث، وتقارير الامتثال.',
    descriptionTr: 'Tehdit tespiti, güvenlik açığı değerlendirmesi, olay müdahalesi ve uyumluluk raporlama ile gerçek zamanlı siber güvenlik izleme platformu.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    demoUrl: 'https://cybersec-dashboard-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Python', 'Elasticsearch', 'Kibana', 'Docker', 'SIEM']),
    category: 'web',
    published: true
  },

  // Environmental & Sustainability
  {
    titleEn: 'Carbon Footprint Tracker',
    titleAr: 'متتبع البصمة الكربونية',
    titleTr: 'Karbon Ayak İzi Takipçisi',
    descriptionEn: 'Environmental impact tracking app with carbon footprint calculation, sustainability recommendations, green habit tracking, and offset marketplace.',
    descriptionAr: 'تطبيق تتبع التأثير البيئي مع حساب البصمة الكربونية، توصيات الاستدامة، تتبع العادات الخضراء، وسوق التعويضات.',
    descriptionTr: 'Karbon ayak izi hesaplama, sürdürülebilirlik önerileri, yeşil alışkanlık takibi ve ofset pazarı olan çevresel etki takip uygulaması.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    demoUrl: 'https://carbon-tracker-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React Native', 'Node.js', 'MongoDB', 'Maps API', 'Chart.js']),
    category: 'mobile',
    published: true
  },

  // Agriculture & Food Tech
  {
    titleEn: 'Smart Farm Management System',
    titleAr: 'نظام إدارة المزرعة الذكية',
    titleTr: 'Akıllı Çiftlik Yönetim Sistemi',
    descriptionEn: 'IoT-enabled farm management with soil monitoring, weather integration, crop prediction, irrigation automation, and yield optimization.',
    descriptionAr: 'إدارة مزرعة مدعومة بإنترنت الأشياء مع مراقبة التربة، تكامل الطقس، توقع المحاصيل، أتمتة الري، وتحسين الإنتاج.',
    descriptionTr: 'Toprak izleme, hava durumu entegrasyonu, ürün tahmini, sulama otomasyonu ve verim optimizasyonu ile IoT destekli çiftlik yönetimi.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
    demoUrl: 'https://smart-farm-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Python', 'InfluxDB', 'MQTT', 'Weather API', 'Machine Learning']),
    category: 'web',
    published: true
  },

  // Travel & Tourism
  {
    titleEn: 'AI Travel Planning Assistant',
    titleAr: 'مساعد تخطيط السفر بالذكاء الاصطناعي',
    titleTr: 'AI Seyahat Planlama Asistanı',
    descriptionEn: 'Intelligent travel planning platform with AI recommendations, itinerary optimization, booking integration, real-time updates, and local insights.',
    descriptionAr: 'منصة تخطيط سفر ذكية مع توصيات الذكاء الاصطناعي، تحسين المسار، تكامل الحجز، تحديثات فورية، ورؤى محلية.',
    descriptionTr: 'AI önerileri, güzergah optimizasyonu, rezervasyon entegrasyonu, gerçek zamanlı güncellemeler ve yerel içgörüler olan akıllı seyahat planlama platformu.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    demoUrl: 'https://ai-travel-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Next.js', 'OpenAI API', 'Google Maps API', 'Booking APIs', 'Weather API']),
    category: 'ai',
    published: true
  },

  // Sports & Fitness
  {
    titleEn: 'AI Fitness Coaching App',
    titleAr: 'تطبيق التدريب الرياضي بالذكاء الاصطناعي',
    titleTr: 'AI Fitness Koçluğu Uygulaması',
    descriptionEn: 'Personalized fitness app with AI workout generation, form correction using computer vision, nutrition tracking, and progress analytics.',
    descriptionAr: 'تطبيق لياقة شخصي مع توليد تمارين بالذكاء الاصطناعي، تصحيح الوضعية باستخدام رؤية الكمبيوتر، تتبع التغذية، وتحليلات التقدم.',
    descriptionTr: 'AI antrenman üretimi, bilgisayar görüşü kullanarak form düzeltmesi, beslenme takibi ve ilerleme analitiği olan kişiselleştirilmiş fitness uygulaması.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    demoUrl: 'https://ai-fitness-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React Native', 'TensorFlow.js', 'Computer Vision', 'Health APIs', 'Charts']),
    category: 'ai',
    published: true
  },

  // Blockchain & Web3
  {
    titleEn: 'NFT Marketplace Platform',
    titleAr: 'منصة سوق الرموز غير القابلة للاستبدال',
    titleTr: 'NFT Pazaryeri Platformu',
    descriptionEn: 'Complete NFT marketplace with minting, trading, auctions, royalty management, and multi-chain support for digital art and collectibles.',
    descriptionAr: 'سوق رموز غير قابلة للاستبدال كامل مع السك، التداول، المزادات، إدارة الحقوق، ودعم متعدد السلاسل للفن الرقمي والمقتنيات.',
    descriptionTr: 'Dijital sanat ve koleksiyonlar için basım, ticaret, açık artırmalar, telif yönetimi ve çoklu zincir desteği olan kapsamlı NFT pazaryeri.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    demoUrl: 'https://nft-marketplace-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask', 'OpenSea API']),
    category: 'web',
    published: true
  },

  // Additional diverse projects
  {
    titleEn: 'Recipe Recommendation Engine',
    titleAr: 'محرك توصيات الوصفات',
    titleTr: 'Tarif Öneri Motoru',
    descriptionEn: 'AI-powered recipe platform with ingredient recognition, dietary restrictions, meal planning, shopping lists, and nutritional analysis.',
    descriptionAr: 'منصة وصفات مدعومة بالذكاء الاصطناعي مع التعرف على المكونات، القيود الغذائية، تخطيط الوجبات، قوائم التسوق، والتحليل الغذائي.',
    descriptionTr: 'Malzeme tanıma, diyet kısıtlamaları, yemek planlaması, alışveriş listeleri ve beslenme analizi olan AI destekli tarif platformu.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    demoUrl: 'https://recipe-ai-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Vue.js', 'Python', 'Computer Vision', 'Nutrition API', 'MongoDB']),
    category: 'ai',
    published: true
  },
  {
    titleEn: 'Virtual Event Platform',
    titleAr: 'منصة الفعاليات الافتراضية',
    titleTr: 'Sanal Etkinlik Platformu',
    descriptionEn: 'Comprehensive virtual event platform with live streaming, networking rooms, virtual booths, attendee engagement, and analytics.',
    descriptionAr: 'منصة فعاليات افتراضية شاملة مع البث المباشر، غرف التواصل، أكشاك افتراضية، مشاركة الحضور، والتحليلات.',
    descriptionTr: 'Canlı yayın, ağ oluşturma odaları, sanal standlar, katılımcı etkileşimi ve analitikler olan kapsamlı sanal etkinlik platformu.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    demoUrl: 'https://virtual-events-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'WebRTC', 'Socket.io', 'AWS', 'Stripe', 'Analytics']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Mental Health Support App',
    titleAr: 'تطبيق دعم الصحة النفسية',
    titleTr: 'Ruh Sağlığı Destek Uygulaması',
    descriptionEn: 'Mental wellness app with mood tracking, guided meditation, therapy sessions, crisis support, and progress monitoring.',
    descriptionAr: 'تطبيق العافية النفسية مع تتبع المزاج، التأمل الموجه، جلسات العلاج، دعم الأزمات، ومراقبة التقدم.',
    descriptionTr: 'Ruh hali takibi, rehberli meditasyon, terapi seansları, kriz desteği ve ilerleme izleme olan ruh sağlığı uygulaması.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop',
    demoUrl: 'https://mental-health-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React Native', 'Firebase', 'WebRTC', 'Health APIs', 'Notifications']),
    category: 'mobile',
    published: true
  },
  {
    titleEn: 'Drone Fleet Management',
    titleAr: 'إدارة أسطول الطائرات المسيرة',
    titleTr: 'Drone Filosu Yönetimi',
    descriptionEn: 'Advanced drone fleet management with flight planning, real-time tracking, automated missions, data collection, and maintenance scheduling.',
    descriptionAr: 'إدارة متقدمة لأسطول الطائرات المسيرة مع تخطيط الطيران، التتبع الفوري، المهام التلقائية، جمع البيانات، وجدولة الصيانة.',
    descriptionTr: 'Uçuş planlama, gerçek zamanlı takip, otomatik görevler, veri toplama ve bakım planlaması olan gelişmiş drone filosu yönetimi.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
    demoUrl: 'https://drone-fleet-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['React', 'Python', 'DroneKit', 'Google Maps', 'MongoDB', 'WebSocket']),
    category: 'web',
    published: true
  },
  {
    titleEn: 'Inventory Management System',
    titleAr: 'نظام إدارة المخزون',
    titleTr: 'Envanter Yönetim Sistemi',
    descriptionEn: 'Smart inventory management with barcode scanning, automated reordering, supplier management, cost tracking, and predictive analytics.',
    descriptionAr: 'إدارة مخزون ذكية مع مسح الباركود، إعادة الطلب التلقائي، إدارة الموردين، تتبع التكاليف، والتحليلات التنبؤية.',
    descriptionTr: 'Barkod tarama, otomatik yeniden sipariş, tedarikçi yönetimi, maliyet takibi ve öngörülü analitikler olan akıllı envanter yönetimi.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    demoUrl: 'https://inventory-mgmt-demo.vercel.app',
    githubUrl: '',
    technologies: JSON.stringify(['Vue.js', 'Laravel', 'MySQL', 'Barcode Scanner', 'Chart.js', 'PDF Reports']),
    category: 'web',
    published: true
  }
];

async function seedProjects() {
  console.log('🌱 Starting projects seeding...');

  for (const project of projects) {
    // Check if project already exists
    const existingProject = await prisma.project.findFirst({
      where: { titleEn: project.titleEn }
    });

    if (existingProject) {
      console.log(`⚠️  Project "${project.titleEn}" already exists, skipping...`);
      continue;
    }

    await prisma.project.create({
      data: project
    });
    console.log(`✅ Created project: ${project.titleEn}`);
  }

  console.log(`🎉 Projects seeding completed! Added ${projects.length} diverse projects.`);
}

async function main() {
  try {
    await seedProjects();
  } catch (error) {
    console.error('❌ Error seeding projects:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

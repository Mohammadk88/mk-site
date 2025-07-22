import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const remainingProjects = [
  {
    titleAr: "تطبيق مدرسي - إيديو تك",
    titleEn: "School App - EduTech",
    titleTr: "Okul Uygulaması - EduTech",
    descriptionAr: "تطبيق إدارة شامل للمدارس إيديو تك. يربط الطلاب والأهالي والمعلمين في منصة واحدة متكاملة. يتضمن متابعة الدرجات، الحضور والغياب، التقويم المدرسي، المهام والواجبات، التواصل المباشر، ودفع الرسوم الإلكتروني. واجهة سهلة ومناسبة لجميع الأعمار. التقنيات المستخدمة: React Native, TypeScript, Node.js, Express.js, MySQL, Firebase Authentication, Push Notifications, React Navigation, Formik للنماذج, Chart.js للتقارير التعليمية.",
    descriptionEn: "Comprehensive school management app for EduTech. Connects students, parents, and teachers in one integrated platform. Features grade tracking, attendance, school calendar, assignments, direct communication, and electronic fee payment. Easy interface suitable for all ages. Technologies used: React Native, TypeScript, Node.js, Express.js, MySQL, Firebase Authentication, Push Notifications, React Navigation, Formik for forms, Chart.js for educational reports.",
    descriptionTr: "EduTech için kapsamlı okul yönetim uygulaması. Öğrencileri, velileri ve öğretmenleri tek entegre platformda birleştirir. Not takibi, devam durumu, okul takvimi, ödevler, doğrudan iletişim ve elektronik ücret ödemesi içerir. Tüm yaşlara uygun kolay arayüz. Kullanılan teknolojiler: React Native, TypeScript, Node.js, Express.js, MySQL, Firebase Authentication, Push Notifications, React Navigation, Formik formlar için, Chart.js eğitim raporları.",
    category: "mobile"
  },
  {
    titleAr: "مساعد ذكي - آي بوت سولوشنز",
    titleEn: "AI Assistant - BotSolutions",
    titleTr: "AI Asistan - BotSolutions",
    descriptionAr: "روبوت دردشة ذكي متطور لشركة آي بوت سولوشنز لدعم العملاء على مدار الساعة. يفهم اللغة الطبيعية ويقدم إجابات دقيقة ومفيدة. يتعلم من التفاعلات ويحسن أداءه تلقائياً. يدعم التحويل للوكلاء البشريين عند الحاجة. التقنيات المستخدمة: Python, TensorFlow, OpenAI GPT-4, FastAPI, PostgreSQL, Redis, WebSocket للدردشة الفورية, Natural Language Processing, Machine Learning, Docker, Kubernetes للنشر السحابي.",
    descriptionEn: "Advanced intelligent chatbot for BotSolutions company providing 24/7 customer support. Understands natural language and provides accurate, helpful responses. Learns from interactions and automatically improves performance. Supports transfer to human agents when needed. Technologies used: Python, TensorFlow, OpenAI GPT-4, FastAPI, PostgreSQL, Redis, WebSocket for real-time chat, Natural Language Processing, Machine Learning, Docker, Kubernetes for cloud deployment.",
    descriptionTr: "BotSolutions şirketi için 7/24 müşteri desteği sağlayan gelişmiş akıllı chatbot. Doğal dili anlar ve doğru, faydalı yanıtlar sağlar. Etkileşimlerden öğrenir ve performansını otomatik olarak geliştirir. Gerektiğinde insan acentelere aktarımı destekler. Kullanılan teknolojiler: Python, TensorFlow, OpenAI GPT-4, FastAPI, PostgreSQL, Redis, WebSocket gerçek zamanlı sohbet, Natural Language Processing, Machine Learning, Docker, Kubernetes bulut dağıtımı.",
    category: "ai"
  },
  {
    titleAr: "منصة محتوى - كونتنت جينيوس",
    titleEn: "Content Platform - ContentGenius",
    titleTr: "İçerik Platformu - ContentGenius",
    descriptionAr: "منصة إنتاج المحتوى بالذكاء الاصطناعي كونتنت جينيوس. تنتج مقالات، منشورات وسائل التواصل، وصف المنتجات، ومحتوى تسويقي عالي الجودة في ثوانٍ. تدعم أكثر من 25 لغة وتتكيف مع نبرة العلامة التجارية. تحليلات متقدمة لأداء المحتوى. التقنيات المستخدمة: Next.js 14, TypeScript, OpenAI GPT-4, Anthropic Claude, Python للمعالجة, PostgreSQL, Redis, Elasticsearch للبحث, Stripe للاشتراكات, AWS S3, CloudFront CDN.",
    descriptionEn: "AI-powered content generation platform ContentGenius. Produces high-quality articles, social media posts, product descriptions, and marketing content in seconds. Supports over 25 languages and adapts to brand tone. Advanced analytics for content performance. Technologies used: Next.js 14, TypeScript, OpenAI GPT-4, Anthropic Claude, Python for processing, PostgreSQL, Redis, Elasticsearch for search, Stripe for subscriptions, AWS S3, CloudFront CDN.",
    descriptionTr: "AI destekli içerik üretim platformu ContentGenius. Saniyeler içinde yüksek kaliteli makaleler, sosyal medya gönderileri, ürün açıklamaları ve pazarlama içeriği üretir. 25'ten fazla dili destekler ve marka tonuna uyum sağlar. İçerik performansı için gelişmiş analitik. Kullanılan teknolojiler: Next.js 14, TypeScript, OpenAI GPT-4, Anthropic Claude, Python işleme için, PostgreSQL, Redis, Elasticsearch arama, Stripe abonelikler, AWS S3, CloudFront CDN.",
    category: "ai"
  },
  {
    titleAr: "مساعد وثائق - دوك آي",
    titleEn: "Document Assistant - DocAI",
    titleTr: "Belge Asistanı - DocAI",
    descriptionAr: "مساعد وثائق ذكي دوك آي يستخدم الذكاء الاصطناعي لتحليل وفهم المستندات. يمكنه استخراج المعلومات، تلخيص النصوص، ترجمة المحتوى، والإجابة على الأسئلة المتعلقة بالوثائق. يدعم PDF، Word، Excel، وصيغ أخرى. أمان عالي وخصوصية محمية. التقنيات المستخدمة: Python, LangChain, OpenAI Embeddings, ChromaDB للبحث المتجهي, FastAPI, React, TypeScript, PDF.js, Tesseract OCR لاستخراج النص, AES-256 للتشفير, Docker.",
    descriptionEn: "Smart document assistant DocAI using artificial intelligence to analyze and understand documents. Can extract information, summarize texts, translate content, and answer document-related questions. Supports PDF, Word, Excel, and other formats. High security and protected privacy. Technologies used: Python, LangChain, OpenAI Embeddings, ChromaDB for vector search, FastAPI, React, TypeScript, PDF.js, Tesseract OCR for text extraction, AES-256 encryption, Docker.",
    descriptionTr: "Belgeleri analiz etmek ve anlamak için yapay zeka kullanan akıllı belge asistanı DocAI. Bilgi çıkarma, metin özetleme, içerik çevirme ve belge ile ilgili sorulara yanıt verme. PDF, Word, Excel ve diğer formatları destekler. Yüksek güvenlik ve korumalı gizlilik. Kullanılan teknolojiler: Python, LangChain, OpenAI Embeddings, ChromaDB vektör arama, FastAPI, React, TypeScript, PDF.js, Tesseract OCR metin çıkarma, AES-256 şifreleme, Docker.",
    category: "ai"
  },
  {
    titleAr: "نظام تصنيع - مانوفاك إي آر بي",
    titleEn: "Manufacturing System - ManufacERP",
    titleTr: "Üretim Sistemi - ManufacERP",
    descriptionAr: "نظام تخطيط موارد شامل للتصنيع مانوفاك إي آر بي. يدير خطوط الإنتاج، المخزون، الجودة، والصيانة. يتضمن تتبع المواد الخام، جدولة الإنتاج، مراقبة الآلات في الوقت الفعلي، وتحليلات الأداء. واجهات لوحة تحكم متقدمة وتقارير مفصلة. التقنيات المستخدمة: React, TypeScript, Node.js, PostgreSQL, Redis, WebSocket للبيانات الفورية, Chart.js, D3.js للتصورات, MQTT لأجهزة IoT, Docker, Kubernetes, Prometheus للمراقبة, Grafana للوحات.",
    descriptionEn: "Comprehensive manufacturing resource planning system ManufacERP. Manages production lines, inventory, quality, and maintenance. Features raw material tracking, production scheduling, real-time machine monitoring, and performance analytics. Advanced dashboard interfaces and detailed reports. Technologies used: React, TypeScript, Node.js, PostgreSQL, Redis, WebSocket for real-time data, Chart.js, D3.js for visualizations, MQTT for IoT devices, Docker, Kubernetes, Prometheus for monitoring, Grafana for dashboards.",
    descriptionTr: "Kapsamlı üretim kaynak planlama sistemi ManufacERP. Üretim hatları, envanter, kalite ve bakımı yönetir. Hammadde takibi, üretim programlama, gerçek zamanlı makine izleme ve performans analitiği içerir. Gelişmiş dashboard arayüzleri ve detaylı raporlar. Kullanılan teknolojiler: React, TypeScript, Node.js, PostgreSQL, Redis, WebSocket gerçek zamanlı veri, Chart.js, D3.js görselleştirmeler, MQTT IoT cihazlar, Docker, Kubernetes, Prometheus izleme, Grafana dashboardlar.",
    category: "erp"
  }
];

async function updateRemainingProjects() {
  try {
    console.log('🏢 تحديث المشاريع المتبقية...');
    
    const allProjects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    // تحديث من المشروع السادس إلى العاشر
    for (let i = 0; i < Math.min(remainingProjects.length, 5); i++) {
      const projectIndex = i + 5; // من 5 إلى 9
      const projectData = remainingProjects[i];
      
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
    
    console.log('\n🎉 تم تحديث المجموعة الثانية من المشاريع بنجاح!');
    
  } catch (error) {
    console.error('❌ خطأ في التحديث:', error);
  }
}

updateRemainingProjects();

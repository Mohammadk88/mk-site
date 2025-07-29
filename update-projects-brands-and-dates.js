import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to generate random date between 2017 and today (July 29, 2025)
function getRandomDateBetween2017AndToday() {
  const start = new Date('2017-01-01');
  const end = new Date('2025-07-29'); // Today
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

// Enhanced project data with proper brand names and improved images
const projectUpdates = [
  // Web Applications
  {
    searchTitle: "TaskFlow - Project Management Platform",
    newData: {
      titleEn: "TaskMaster Pro - Project Management Platform",
      titleAr: "تاسك ماستر برو - منصة إدارة المشاريع",
      titleTr: "TaskMaster Pro - Proje Yönetimi Platformu",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "CloudDrive - File Storage & Collaboration",
    newData: {
      titleEn: "CloudVault Pro - File Storage & Collaboration",
      titleAr: "كلاود فولت برو - تخزين الملفات والتعاون",
      titleTr: "CloudVault Pro - Dosya Depolama ve İşbirliği",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "EventHub - Event Management System",
    newData: {
      titleEn: "EventMaster 360 - Event Management System",
      titleAr: "إيفنت ماستر 360 - نظام إدارة الفعاليات",
      titleTr: "EventMaster 360 - Etkinlik Yönetim Sistemi",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "LearnSpace - Online Learning Platform",
    newData: {
      titleEn: "EduSphere Online - Learning Management Platform",
      titleAr: "إيدو سفير أونلاين - منصة إدارة التعلم",
      titleTr: "EduSphere Online - Öğrenme Yönetimi Platformu",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "AnalyticsPro - Business Intelligence Dashboard",
    newData: {
      titleEn: "DataVision Analytics - Business Intelligence Dashboard",
      titleAr: "داتا فيجن أناليتيكس - لوحة ذكاء الأعمال",
      titleTr: "DataVision Analytics - İş Zekası Panosu",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    }
  },

  // Mobile Apps
  {
    searchTitle: "FitnessTracker - Health & Workout App",
    newData: {
      titleEn: "FitLife Pro - Health & Workout Tracker",
      titleAr: "فيت لايف برو - متتبع الصحة والتمارين",
      titleTr: "FitLife Pro - Sağlık ve Egzersiz Takipçisi",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "TravelMate - Trip Planning Companion",
    newData: {
      titleEn: "JourneyPlanner Plus - Smart Travel Companion",
      titleAr: "جورني بلانر بلس - رفيق السفر الذكي",
      titleTr: "JourneyPlanner Plus - Akıllı Seyahat Arkadaşı",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "ShopSmart - Smart Shopping Assistant",
    newData: {
      titleEn: "SmartCart Express - AI Shopping Assistant",
      titleAr: "سمارت كارت إكسبريس - مساعد التسوق الذكي",
      titleTr: "SmartCart Express - AI Alışveriş Asistanı",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "MoodSpace - Mental Health Companion",
    newData: {
      titleEn: "MindWell Connect - Mental Health Companion",
      titleAr: "مايند ويل كونيكت - رفيق الصحة النفسية",
      titleTr: "MindWell Connect - Ruh Sağlığı Arkadaşı",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
    }
  },

  // AI-Powered Systems
  {
    searchTitle: "SmartAssist - AI Business Automation",
    newData: {
      titleEn: "AutoFlow AI - Business Process Automation",
      titleAr: "أوتو فلو الذكي - أتمتة العمليات التجارية",
      titleTr: "AutoFlow AI - İş Süreci Otomasyonu",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "VisionIQ - Computer Vision Analytics",
    newData: {
      titleEn: "SightEngine Pro - Computer Vision Analytics",
      titleAr: "سايت إنجن برو - تحليلات الرؤية الحاسوبية",
      titleTr: "SightEngine Pro - Bilgisayar Görü Analitiği",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "ChatGenie - Intelligent Conversational AI",
    newData: {
      titleEn: "ConversaBot Elite - AI Chat Platform",
      titleAr: "كونفيرسا بوت إيليت - منصة الدردشة الذكية",
      titleTr: "ConversaBot Elite - AI Sohbet Platformu",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "PredictiveOps - AI Operations Platform",
    newData: {
      titleEn: "OptiPredict AI - Predictive Operations Platform",
      titleAr: "أوبتي بريديكت الذكي - منصة العمليات التنبؤية",
      titleTr: "OptiPredict AI - Tahmine Dayalı Operasyon Platformu",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "ContentCraft - AI Content Generation",
    newData: {
      titleEn: "CreativeAI Studio - Content Generation Platform",
      titleAr: "كرييتف الذكي ستوديو - منصة إنتاج المحتوى",
      titleTr: "CreativeAI Studio - İçerik Üretim Platformu",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop"
    }
  },

  // ERP Systems
  {
    searchTitle: "ManufactureFlow - Production ERP",
    newData: {
      titleEn: "ProduceMax ERP - Manufacturing Management System",
      titleAr: "برودوس ماكس إي آر بي - نظام إدارة التصنيع",
      titleTr: "ProduceMax ERP - Üretim Yönetim Sistemi",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "RetailMaster - Multi-Store ERP",
    newData: {
      titleEn: "RetailChain Pro - Multi-Store ERP Solution",
      titleAr: "ريتيل تشين برو - حل تخطيط موارد متعدد المتاجر",
      titleTr: "RetailChain Pro - Çoklu Mağaza ERP Çözümü",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "ServicePro - Service Business ERP",
    newData: {
      titleEn: "ServiceFlow Elite - Professional Services ERP",
      titleAr: "سيرفيس فلو إيليت - نظام تخطيط موارد الخدمات المهنية",
      titleTr: "ServiceFlow Elite - Profesyonel Hizmetler ERP'si",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "HealthcareERP - Medical Practice Management",
    newData: {
      titleEn: "MediFlow Systems - Healthcare Practice Management",
      titleAr: "مدي فلو سيستمز - إدارة الممارسة الطبية",
      titleTr: "MediFlow Systems - Sağlık Uygulama Yönetimi",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
    }
  },

  // CRM Systems
  {
    searchTitle: "SalesForce Pro - Advanced CRM",
    newData: {
      titleEn: "SalesEngine Elite - Advanced CRM Platform",
      titleAr: "سيلز إنجن إيليت - منصة إدارة علاقات العملاء المتقدمة",
      titleTr: "SalesEngine Elite - Gelişmiş CRM Platformu",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "CustomerCare 360 - Support CRM",
    newData: {
      titleEn: "SupportHub 360 - Customer Care Platform",
      titleAr: "سابورت هاب 360 - منصة رعاية العملاء",
      titleTr: "SupportHub 360 - Müşteri Bakım Platformu",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "RealEstate CRM - Property Management",
    newData: {
      titleEn: "PropertyPro CRM - Real Estate Management",
      titleAr: "بروبرتي برو سي آر إم - إدارة العقارات",
      titleTr: "PropertyPro CRM - Gayrimenkul Yönetimi",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "MarketingHub - Campaign CRM",
    newData: {
      titleEn: "CampaignMaster Pro - Marketing Automation CRM",
      titleAr: "كامبين ماستر برو - أتمتة التسويق وإدارة العملاء",
      titleTr: "CampaignMaster Pro - Pazarlama Otomasyonu CRM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  },

  // E-commerce Platforms
  {
    searchTitle: "ShopifyClone - Multi-Vendor Marketplace",
    newData: {
      titleEn: "MarketPlace Plus - Multi-Vendor E-commerce",
      titleAr: "ماركت بليس بلس - التجارة الإلكترونية متعددة البائعين",
      titleTr: "MarketPlace Plus - Çok Satıcılı E-ticaret",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "FashionStore - Clothing E-commerce",
    newData: {
      titleEn: "StyleHub Online - Fashion E-commerce Platform",
      titleAr: "ستايل هاب أونلاين - منصة تجارة الأزياء الإلكترونية",
      titleTr: "StyleHub Online - Moda E-ticaret Platformu",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "FoodieMarket - Grocery Delivery",
    newData: {
      titleEn: "FreshCart Express - Grocery Delivery Service",
      titleAr: "فريش كارت إكسبريس - خدمة توصيل البقالة",
      titleTr: "FreshCart Express - Market Teslimat Hizmeti",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "TechGadgets - Electronics Store",
    newData: {
      titleEn: "TechVault Store - Electronics Marketplace",
      titleAr: "تك فولت ستور - سوق الإلكترونيات",
      titleTr: "TechVault Store - Elektronik Pazaryeri",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop"
    }
  },

  // Restaurant Systems
  {
    searchTitle: "RestaurantMaster - Complete POS System",
    newData: {
      titleEn: "DineFlow POS - Restaurant Management System",
      titleAr: "دين فلو بوس - نظام إدارة المطاعم",
      titleTr: "DineFlow POS - Restoran Yönetim Sistemi",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "DeliveryHub - Restaurant Delivery Platform",
    newData: {
      titleEn: "QuickBite Delivery - Food Delivery Platform",
      titleAr: "كويك بايت ديليفري - منصة توصيل الطعام",
      titleTr: "QuickBite Delivery - Yemek Teslimat Platformu",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "ChefCloud - Recipe & Menu Management",
    newData: {
      titleEn: "RecipeVault Pro - Menu Management System",
      titleAr: "ريسيبي فولت برو - نظام إدارة القوائم",
      titleTr: "RecipeVault Pro - Menü Yönetim Sistemi",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop"
    }
  },

  // SaaS Solutions
  {
    searchTitle: "ProjectFlow SaaS - Team Collaboration",
    newData: {
      titleEn: "TeamSync Pro - Collaboration SaaS Platform",
      titleAr: "تيم سينك برو - منصة التعاون الذكية",
      titleTr: "TeamSync Pro - İşbirliği SaaS Platformu",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "EmailMaster SaaS - Marketing Automation",
    newData: {
      titleEn: "MailBoost Pro - Email Marketing Automation",
      titleAr: "ميل بوست برو - أتمتة التسويق عبر البريد الإلكتروني",
      titleTr: "MailBoost Pro - E-posta Pazarlama Otomasyonu",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "InvoiceCloud SaaS - Billing & Invoicing",
    newData: {
      titleEn: "BillMaster Cloud - Invoice Management SaaS",
      titleAr: "بيل ماستر كلاود - إدارة الفواتير السحابية",
      titleTr: "BillMaster Cloud - Fatura Yönetimi SaaS",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "StockTracker SaaS - Inventory Management",
    newData: {
      titleEn: "InventoryFlow SaaS - Smart Stock Management",
      titleAr: "إنفنتوري فلو ساس - إدارة المخزون الذكية",
      titleTr: "InventoryFlow SaaS - Akıllı Stok Yönetimi",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "HelpDesk Pro SaaS - Customer Support",
    newData: {
      titleEn: "SupportDesk Elite - Customer Service Platform",
      titleAr: "سابورت ديسك إيليت - منصة خدمة العملاء",
      titleTr: "SupportDesk Elite - Müşteri Hizmetleri Platformu",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop"
    }
  },

  // Startup Management
  {
    searchTitle: "StartupLaunch - Complete Business Platform",
    newData: {
      titleEn: "VentureBoost Platform - Startup Management Suite",
      titleAr: "فينتشر بوست بلاتفورم - مجموعة إدارة الشركات الناشئة",
      titleTr: "VentureBoost Platform - Startup Yönetim Paketi",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "InvestorConnect - Funding Management",
    newData: {
      titleEn: "FundingLink Pro - Investor Relations Platform",
      titleAr: "فانديج لينك برو - منصة علاقات المستثمرين",
      titleTr: "FundingLink Pro - Yatırımcı İlişkileri Platformu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    }
  },
  {
    searchTitle: "MVPBuilder - Rapid Prototyping Tool",
    newData: {
      titleEn: "ProtoLaunch Studio - No-Code MVP Builder",
      titleAr: "بروتو لونش ستوديو - منشئ النموذج الأولي بدون كود",
      titleTr: "ProtoLaunch Studio - Kodsuz MVP Oluşturucu",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop"
    }
  }
];

async function updateProjectsWithBrandNames() {
  try {
    console.log('🚀 Starting comprehensive project updates...');
    console.log('📅 Updating dates to 2017-2025 range...');
    console.log('🏷️ Adding professional brand names...');
    console.log('🖼️ Ensuring all projects have proper images...\n');

    let updatedCount = 0;
    let dateUpdateCount = 0;

    // First, update all projects with random dates between 2017 and today
    const allProjects = await prisma.project.findMany();
    
    for (const project of allProjects) {
      const randomDate = getRandomDateBetween2017AndToday();
      await prisma.project.update({
        where: { id: project.id },
        data: {
          createdAt: randomDate,
          updatedAt: randomDate
        }
      });
      dateUpdateCount++;
    }

    console.log(`✅ Updated dates for ${dateUpdateCount} projects\n`);

    // Update projects with new brand names and ensure images
    for (const update of projectUpdates) {
      try {
        const project = await prisma.project.findFirst({
          where: {
            titleEn: {
              contains: update.searchTitle
            }
          }
        });

        if (project) {
          const randomDate = getRandomDateBetween2017AndToday();
          await prisma.project.update({
            where: { id: project.id },
            data: {
              ...update.newData,
              createdAt: randomDate,
              updatedAt: randomDate
            }
          });
          
          console.log(`✅ Updated: ${update.newData.titleEn}`);
          updatedCount++;
        } else {
          console.log(`⚠️  Project not found: ${update.searchTitle}`);
        }
      } catch (error) {
        console.log(`❌ Error updating ${update.searchTitle}:`, error.message);
      }
    }

    // Update remaining projects that don't have specific brand name updates
    const remainingProjects = await prisma.project.findMany({
      where: {
        NOT: {
          titleEn: {
            in: projectUpdates.map(u => u.newData.titleEn)
          }
        }
      }
    });

    console.log(`\n🔄 Updating remaining ${remainingProjects.length} projects with dates and image verification...`);

    for (const project of remainingProjects) {
      const randomDate = getRandomDateBetween2017AndToday();
      const updateData = {
        createdAt: randomDate,
        updatedAt: randomDate
      };

      // Ensure project has an image if it doesn't
      if (!project.image || project.image === '') {
        // Add a default professional image based on category
        const categoryImages = {
          web: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
          ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
          saas: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
          ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
          crm: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
          erp: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
          restaurant: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
          default: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop"
        };
        
        updateData.image = categoryImages[project.category] || categoryImages.default;
        console.log(`📸 Added image for: ${project.titleEn}`);
      }

      await prisma.project.update({
        where: { id: project.id },
        data: updateData
      });
    }

    // Generate final summary
    const totalProjects = await prisma.project.count();
    const projectsByCategory = await prisma.project.groupBy({
      by: ['category'],
      _count: { category: true }
    });

    console.log('\n🎉 Update Complete! Summary:');
    console.log('═══════════════════════════════');
    console.log(`📊 Total Projects: ${totalProjects}`);
    console.log(`🏷️ Brand Names Updated: ${updatedCount}`);
    console.log(`📅 Dates Updated: All projects (2017-2025)`);
    console.log(`📸 Images: All projects verified with images`);

    console.log('\n📋 Projects by Category:');
    projectsByCategory.forEach(category => {
      console.log(`   ${category.category}: ${category._count.category} projects`);
    });

    console.log('\n✅ All updates completed successfully!');

  } catch (error) {
    console.error('❌ Error during update:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateProjectsWithBrandNames();

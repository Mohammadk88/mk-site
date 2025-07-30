const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('🔧 Fixing incomplete recurring services...');
    
    // Get all recurring services with incorrect feature format
    const recurringServices = await prisma.recurringService.findMany();
    
    const servicesToFix = [];
    
    recurringServices.forEach(service => {
      try {
        const parsed = JSON.parse(service.features);
        // Check if it's a simple array instead of proper object
        if (Array.isArray(parsed)) {
          servicesToFix.push({
            id: service.id,
            name: service.name,
            lang: service.lang,
            currentFeatures: parsed
          });
        } else if (!parsed.features || parsed.features.length === 0) {
          servicesToFix.push({
            id: service.id,
            name: service.name,
            lang: service.lang,
            currentFeatures: parsed
          });
        }
      } catch (e) {
        console.log(`Error parsing ${service.name}: ${e.message}`);
      }
    });
    
    console.log(`Found ${servicesToFix.length} services that need fixing:`);
    servicesToFix.forEach(service => {
      console.log(`- ${service.name} (${service.lang})`);
    });
    
    // Fix the services by converting array to proper object structure
    for (const service of servicesToFix) {
      let newFeatures;
      
      if (Array.isArray(service.currentFeatures)) {
        // Convert array to proper object structure
        newFeatures = {
          description: getDescriptionForService(service.name, service.lang),
          features: service.currentFeatures,
          technologies: getTechnologiesForService(service.name),
          deliveryTime: "Monthly",
          category: getCategoryForService(service.name)
        };
      } else {
        // Add missing features array
        newFeatures = {
          ...service.currentFeatures,
          features: service.currentFeatures.features || getDefaultFeaturesForService(service.name, service.lang)
        };
      }
      
      await prisma.recurringService.update({
        where: { id: service.id },
        data: {
          features: JSON.stringify(newFeatures)
        }
      });
      
      console.log(`✅ Fixed ${service.name} (${service.lang})`);
    }
    
    console.log('\n🎉 All services have been fixed!');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

function getDescriptionForService(name, lang) {
  const descriptions = {
    'en': {
      'Ongoing Maintenance': 'Comprehensive monthly maintenance to keep your website secure, fast, and up-to-date',
      'SEO & Marketing Support': 'Monthly SEO optimization and marketing support to boost your online presence',
      'Full Support Package': 'Complete monthly support package including maintenance, SEO, marketing, and priority support'
    },
    'ar': {
      'الصيانة المستمرة': 'صيانة شاملة شهرية للحفاظ على موقعك آمناً وسريعاً ومحدثاً',
      'دعم SEO والتسويق': 'تحسين SEO شهري ودعم تسويقي لتعزيز حضورك الرقمي',
      'باقة الدعم الشامل': 'باقة دعم شهرية شاملة تشمل الصيانة وSEO والتسويق والدعم المتميز'
    },
    'tr': {
      'Sürekli Bakım': 'Web sitenizi güvenli, hızlı ve güncel tutmak için kapsamlı aylık bakım',
      'SEO & Pazarlama Desteği': 'Çevrimiçi varlığınızı artırmak için aylık SEO optimizasyonu ve pazarlama desteği',
      'Tam Destek Paketi': 'Bakım, SEO, pazarlama ve öncelikli destek dahil komple aylık destek paketi'
    }
  };
  
  return descriptions[lang]?.[name] || 'Monthly service package with comprehensive features';
}

function getTechnologiesForService(name) {
  if (name.includes('Maintenance') || name.includes('الصيانة') || name.includes('Bakım')) {
    return ['WordPress', 'React', 'Node.js', 'MySQL', 'Git'];
  } else if (name.includes('SEO') || name.includes('Marketing')) {
    return ['Google Analytics', 'Google Search Console', 'SEMrush', 'Social Media APIs'];
  } else {
    return ['Full Stack', 'Analytics', 'SEO Tools', 'CMS', 'Security'];
  }
}

function getCategoryForService(name) {
  if (name.includes('Maintenance') || name.includes('الصيانة') || name.includes('Bakım')) {
    return 'maintenance';
  } else if (name.includes('SEO') || name.includes('Marketing')) {
    return 'marketing';
  } else {
    return 'support';
  }
}

function getDefaultFeaturesForService(name, lang) {
  const features = {
    'en': {
      'Ongoing Maintenance': [
        'Monthly code updates and improvements',
        'Performance optimization and monitoring',
        'Security patches and vulnerability fixes',
        'Technical consultation and recommendations',
        'Priority email support (48h response)',
        'Monthly maintenance reports',
        'Backup management and monitoring',
        'Plugin/dependency updates'
      ],
      'SEO & Marketing Support': [
        'SEO monitoring and optimization',
        'Content strategy development',
        'Social media management guidance',
        'Performance analytics and reporting',
        'Keyword research and tracking',
        'Competitor analysis',
        'Meta tags and schema optimization',
        'Monthly SEO reports'
      ],
      'Full Support Package': [
        'Everything in Website Maintenance',
        'Everything in SEO & Marketing',
        'Priority support (24/7)',
        'Custom development hours (5 hours/month)',
        'Advanced analytics setup',
        'A/B testing implementation',
        'Conversion optimization',
        'Dedicated account manager'
      ]
    },
    'ar': {
      'الصيانة المستمرة': [
        'تحديثات وتحسينات الكود الشهرية',
        'تحسين ومراقبة الأداء',
        'تصحيحات الأمان وإصلاح الثغرات',
        'الاستشارات والتوصيات التقنية',
        'دعم بريد إلكتروني متميز (استجابة 48 ساعة)',
        'تقارير صيانة شهرية',
        'إدارة ومراقبة النسخ الاحتياطية',
        'تحديثات الإضافات والتبعيات'
      ],
      'دعم SEO والتسويق': [
        'مراقبة وتحسين SEO',
        'تطوير استراتيجية المحتوى',
        'إرشادات إدارة وسائل التواصل الاجتماعي',
        'تحليلات الأداء وإعداد التقارير',
        'بحث وتتبع الكلمات المفتاحية',
        'تحليل المنافسين',
        'تحسين العلامات الوصفية والمخطط',
        'تقارير SEO شهرية'
      ],
      'باقة الدعم الشامل': [
        'كل ما في صيانة الموقع',
        'كل ما في دعم SEO والتسويق',
        'دعم متميز (24/7)',
        'ساعات تطوير مخصصة (5 ساعات/شهر)',
        'إعداد تحليلات متقدمة',
        'تنفيذ اختبار A/B',
        'تحسين التحويل',
        'مدير حساب مخصص'
      ]
    },
    'tr': {
      'Sürekli Bakım': [
        'Aylık kod güncellemeleri ve iyileştirmeleri',
        'Performans optimizasyonu ve izleme',
        'Güvenlik yamaları ve açık düzeltmeleri',
        'Teknik danışmanlık ve öneriler',
        'Öncelikli e-posta desteği (48s yanıt)',
        'Aylık bakım raporları',
        'Yedekleme yönetimi ve izleme',
        'Plugin/bağımlılık güncellemeleri'
      ]
    }
  };
  
  return features[lang]?.[name] || [
    'Monthly service updates',
    'Performance monitoring',
    'Technical support',
    'Regular reporting',
    'Priority assistance'
  ];
}

main();

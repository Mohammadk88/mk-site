const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  try {
    // Read the enhanced pricing packages JSON
    const pricingData = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'pricing_packages.json'), 'utf8')
    );

    console.log('🚀 Starting database update with enhanced packages...');
    
    // Enhanced package mappings with proper structure
    const enhancedPackages = [
      // English packages
      {
        name: 'Personal Website',
        lang: 'en',
        newData: {
          name: 'Personal Website + CV Builder',
          price: 499,
          features: JSON.stringify({
            description: 'Professional personal branding website with protected CV download system and modern design.',
            features: [
              'Personal Website (5-8 pages)',
              'Protected CV Download System',
              'Fast, SEO-friendly design',
              'Social media integrations',
              'Mobile responsive design',
              'Contact form with email notifications',
              'Portfolio showcase section',
              '3 Months free maintenance',
              'SSL Certificate & Security Setup'
            ],
            technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
            deliveryTime: '1-2 weeks',
            category: 'personal'
          })
        }
      },
      {
        name: 'Admin Dashboard',
        lang: 'en',
        newData: {
          name: 'Admin Dashboard Pro',
          price: 899,
          features: JSON.stringify({
            description: 'Full-featured admin panel with database management, user authentication, and custom business logic.',
            features: [
              'Full-featured admin panel',
              'Database CRUD operations',
              'File management system',
              'User authentication & roles',
              'Role-based permissions',
              'Custom dashboard widgets',
              'Data export & import',
              'API integration ready',
              '3 Months technical support'
            ],
            technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis'],
            deliveryTime: '2-3 weeks',
            category: 'admin'
          })
        }
      },
      {
        name: 'AI Automation Tools',
        lang: 'en',
        newData: {
          name: 'AI Automation Tools',
          price: 1299,
          features: JSON.stringify({
            description: 'Custom AI-powered automation solutions to streamline your business processes and boost productivity.',
            features: [
              'GPT / OpenAI integration',
              'Social media automation',
              'Content generation tools',
              'E-commerce automation',
              'Internal workflow automation',
              'Custom AI modules',
              'API integrations',
              'Training & documentation',
              '6 Months support & updates'
            ],
            technologies: ['Python', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
            deliveryTime: '3-4 weeks',
            category: 'ai'
          })
        }
      },
      {
        name: 'Custom SaaS MVP',
        lang: 'en',
        newData: {
          name: 'Custom SaaS MVP',
          price: 2499,
          features: JSON.stringify({
            description: 'Complete Software-as-a-Service solution with user management, subscriptions, and AI integration.',
            features: [
              'Complete SaaS solution architecture',
              'User authentication & management',
              'Subscription management system',
              'Payment processing (Stripe)',
              'Admin dashboard & analytics',
              'AI modules integration',
              'API development & documentation',
              'Database design & optimization',
              'Email automation system',
              '6 Months comprehensive support',
              'Deployment & DevOps setup'
            ],
            technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'OpenAI'],
            deliveryTime: '8-10 weeks',
            category: 'saas'
          })
        }
      },
      // Arabic packages  
      {
        name: 'المبتدئ',
        lang: 'ar',
        newData: {
          name: 'باقة البذرة للمشاريع الناشئة',
          price: 299,
          features: JSON.stringify({
            description: 'نقطة الانطلاق المثالية لرواد الأعمال والمشاريع الناشئة لتجربة أفكارهم بصفحة هبوط احترافية.',
            features: [
              'صفحة هبوط (1-3 صفحات)',
              'نموذج اتصال وإعداد البريد الإلكتروني',
              'تصميم متجاوب للموبايل أولاً',
              'تحسين SEO أساسي',
              'دومين مجاني وشهادة SSL',
              'استضافة مجانية لشهر واحد',
              'إعداد Google Analytics',
              'تكامل روابط وسائل التواصل',
              'دعم بريد إلكتروني لمدة 30 يوم'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            deliveryTime: '1-2 أسبوع',
            category: 'startup'
          })
        }
      },
      {
        name: 'المحترف',
        lang: 'ar',
        newData: {
          name: 'باقة النمو التجاري',
          price: 1499,
          features: JSON.stringify({
            description: 'قم بتوسيع أعمالك مع ميزات متقدمة وتكاملات وأدوات تسويقية للشركات النامية.',
            features: [
              'موقع متعدد الصفحات (10-15 صفحة)',
              'نظام إدارة المحتوى (CMS)',
              'قسم مدونة مع SEO',
              'تكامل التسويق بالبريد الإلكتروني',
              'أتمتة وسائل التواصل الاجتماعي',
              'لوحة تحليلات متقدمة',
              'أداة دردشة دعم العملاء',
              'تكامل بوابة الدفع',
              'دعم متعدد اللغات (لغتان)',
              '6 أشهر دعم مميز',
              'تقارير أداء شهرية'
            ],
            technologies: ['React', 'Next.js', 'Strapi CMS', 'PostgreSQL', 'Stripe'],
            deliveryTime: '4-6 أسابيع',
            category: 'growth'
          })
        }
      },
      {
        name: 'المؤسسة',
        lang: 'ar',
        newData: {
          name: 'التحول الرقمي للمؤسسات',
          price: 4999,
          features: JSON.stringify({
            description: 'حزمة تحول رقمي كاملة مع تكامل الذكاء الاصطناعي وأنظمة ERP/CRM مخصصة وبنية تحتية على مستوى المؤسسات.',
            features: [
              'نظام ERP/CRM مخصص',
              'تحليلات ورؤى مدعومة بالذكاء الاصطناعي',
              'تطبيقات موبايل متعددة المنصات',
              'إطار أمان متقدم',
              'إعداد البنية التحتية السحابية',
              'ترحيل البيانات والتكامل',
              'تدريب الموظفين والوثائق',
              '12 شهر دعم مؤسسي',
              'لوحة مراقبة الأداء',
              'أنظمة النسخ الاحتياطي الآلي',
              'دعم متعدد اللغات',
              'تطوير API مخصص',
              'تكاملات خارجية'
            ],
            technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS', 'OpenAI'],
            deliveryTime: '12-16 أسبوع',
            category: 'enterprise'
          })
        }
      },
      // Turkish packages
      {
        name: 'Başlangıç',
        lang: 'tr',
        newData: {
          name: 'Tohum Başlangıç Paketi',
          price: 299,
          features: JSON.stringify({
            description: 'Girişimciler ve erken aşama startup\'lar için fikirlerini profesyonel açılış sayfasıyla doğrulamak için mükemmel başlangıç noktası.',
            features: [
              'İniş Sayfası (1-3 sayfa)',
              'İletişim Formu ve E-posta Kurulumu',
              'Mobil Öncelikli Duyarlı Tasarım',
              'Temel SEO Optimizasyonu',
              'Ücretsiz Domain ve SSL Sertifikası',
              '1 Ay Ücretsiz Hosting',
              'Google Analytics Kurulumu',
              'Sosyal Medya Bağlantıları Entegrasyonu',
              '30 Gün E-posta Desteği'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            deliveryTime: '1-2 hafta',
            category: 'startup'
          })
        }
      },
      {
        name: 'Profesyonel',
        lang: 'tr',
        newData: {
          name: 'Büyüme İş Paketi',
          price: 1499,
          features: JSON.stringify({
            description: 'Büyüyen şirketler için gelişmiş özellikler, entegrasyonlar ve pazarlama araçlarıyla işinizi büyütün.',
            features: [
              'Çok Sayfalı Web Sitesi (10-15 sayfa)',
              'İçerik Yönetim Sistemi (CMS)',
              'SEO\'lu Blog Bölümü',
              'E-posta Pazarlama Entegrasyonu',
              'Sosyal Medya Otomasyonu',
              'Gelişmiş Analitik Paneli',
              'Müşteri Destek Sohbet Widget\'ı',
              'Ödeme Ağ Geçidi Entegrasyonu',
              'Çok Dil Desteği (2 dil)',
              '6 Ay Premium Destek',
              'Aylık Performans Raporları'
            ],
            technologies: ['React', 'Next.js', 'Strapi CMS', 'PostgreSQL', 'Stripe'],
            deliveryTime: '4-6 hafta',
            category: 'growth'
          })
        }
      },
      {
        name: 'Kurumsal',
        lang: 'tr',
        newData: {
          name: 'Kurumsal Dijital Dönüşüm',
          price: 4999,
          features: JSON.stringify({
            description: 'AI entegrasyonu, özel ERP/CRM sistemleri ve kurumsal düzeyde altyapı ile tam dijital dönüşüm paketi.',
            features: [
              'Özel ERP/CRM Sistemi',
              'AI Destekli Analitik ve İçgörüler',
              'Çok Platformlu Mobil Uygulamalar',
              'Gelişmiş Güvenlik Çerçevesi',
              'Bulut Altyapısı Kurulumu',
              'Veri Geçişi ve Entegrasyon',
              'Personel Eğitimi ve Dokümantasyon',
              '12 Ay Kurumsal Destek',
              'Performans İzleme Paneli',
              'Otomatik Yedekleme Sistemleri',
              'Çok Dil Desteği',
              'Özel API Geliştirme',
              'Üçüncü Taraf Entegrasyonları'
            ],
            technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS', 'OpenAI'],
            deliveryTime: '12-16 hafta',
            category: 'enterprise'
          })
        }
      }
    ];

    console.log(`\n📝 Updating ${enhancedPackages.length} packages...`);
    
    let updatedCount = 0;
    let addedCount = 0;

    for (const packageUpdate of enhancedPackages) {
      try {
        // Try to find existing package
        const existingPackage = await prisma.pricingPlan.findFirst({
          where: {
            name: packageUpdate.name,
            lang: packageUpdate.lang
          }
        });

        if (existingPackage) {
          // Update existing package
          await prisma.pricingPlan.update({
            where: { id: existingPackage.id },
            data: packageUpdate.newData
          });
          console.log(`✅ Updated: ${packageUpdate.newData.name} (${packageUpdate.lang})`);
          updatedCount++;
        } else {
          // Add new package
          await prisma.pricingPlan.create({
            data: {
              ...packageUpdate.newData,
              lang: packageUpdate.lang,
              currency: 'USD',
              popular: packageUpdate.newData.name.includes('Growth') || packageUpdate.newData.name.includes('النمو') || packageUpdate.newData.name.includes('Büyüme')
            }
          });
          console.log(`🆕 Added: ${packageUpdate.newData.name} (${packageUpdate.lang})`);
          addedCount++;
        }
      } catch (error) {
        console.error(`❌ Error updating ${packageUpdate.name}:`, error.message);
      }
    }

    // Add new innovative packages that don't exist yet
    const newPackages = [
      {
        name: 'Content Repurposing Agent',
        price: 1799,
        lang: 'en',
        features: JSON.stringify({
          description: 'AI-powered system that automatically repurposes your content across multiple platforms and formats.',
          features: [
            'AI content analysis & extraction',
            'Multi-platform content adaptation',
            'Automated social media posting',
            'Blog to video/audio conversion',
            'SEO optimization for each format',
            'Content calendar management',
            'Analytics & performance tracking',
            'Custom brand voice training',
            'API integrations (20+ platforms)',
            '6 Months support & training'
          ],
          technologies: ['Python', 'OpenAI API', 'FFmpeg', 'Social APIs'],
          deliveryTime: '4-5 weeks',
          category: 'ai'
        }),
        currency: 'USD',
        popular: false
      },
      {
        name: 'Social Media Automation Suite',
        price: 999,
        lang: 'en',
        features: JSON.stringify({
          description: 'Complete social media automation platform with AI content generation, scheduling, and analytics.',
          features: [
            'AI content generation engine',
            'Multi-platform scheduling',
            'Automated hashtag research',
            'Engagement automation',
            'Analytics dashboard',
            'Content calendar management',
            'Brand voice consistency',
            'Competitor analysis',
            'Performance optimization',
            '3 Months support & training'
          ],
          technologies: ['Python', 'OpenAI API', 'Social APIs', 'React Dashboard'],
          deliveryTime: '3-4 weeks',
          category: 'automation'
        }),
        currency: 'USD',
        popular: false
      }
    ];

    console.log(`\n🚀 Adding ${newPackages.length} new innovative packages...`);
    
    for (const newPackage of newPackages) {
      try {
        const existing = await prisma.pricingPlan.findFirst({
          where: {
            name: newPackage.name,
            lang: newPackage.lang
          }
        });

        if (!existing) {
          await prisma.pricingPlan.create({
            data: newPackage
          });
          console.log(`🆕 Added new package: ${newPackage.name}`);
          addedCount++;
        } else {
          console.log(`⚠️  Package already exists: ${newPackage.name}`);
        }
      } catch (error) {
        console.error(`❌ Error adding ${newPackage.name}:`, error.message);
      }
    }

    console.log('\n🎉 Update Summary:');
    console.log(`✅ Updated packages: ${updatedCount}`);
    console.log(`🆕 Added packages: ${addedCount}`);
    
    // Final verification
    const finalCount = await prisma.pricingPlan.count();
    console.log(`📊 Total packages in database: ${finalCount}`);

  } catch (error) {
    console.error('❌ Update failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

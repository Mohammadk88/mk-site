import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateProjectsAndImages() {
  try {
    console.log('🔄 تحديث المشاريع والصور...');
    
    // 1. استبدال "مشروع تجريبي بصورة مفقودة"
    console.log('\n📝 استبدال المشروع التجريبي...');
    
    const testProject = await prisma.project.findFirst({
      where: {
        titleAr: "مشروع تجريبي بصورة مفقودة"
      }
    });
    
    if (testProject) {
      await prisma.project.update({
        where: { id: testProject.id },
        data: {
          titleAr: "منصة التجارة الإلكترونية المتقدمة",
          titleEn: "Advanced E-commerce Platform",
          titleTr: "Gelişmiş E-ticaret Platformu",
          descriptionAr: "منصة تجارة إلكترونية متكاملة مع نظام دفع متقدم وإدارة المخزون الذكية",
          descriptionEn: "Comprehensive e-commerce platform with advanced payment system and smart inventory management",
          descriptionTr: "Gelişmiş ödeme sistemi ve akıllı envanter yönetimi ile kapsamlı e-ticaret platformu",
          category: "ecommerce",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center"
        }
      });
      console.log('✅ تم استبدال المشروع التجريبي بمنصة التجارة الإلكترونية المتقدمة');
    }
    
    // 2. تحديث الصور لتكون أكثر تنوعاً وملاءمة
    console.log('\n🎨 تحديث الصور المحسنة...');
    
    const updatedImages = {
      "موقع تجارة إلكترونية": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center", // تسوق أونلاين
      "موقع شركة تجارية": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center", // مكتب حديث
      "موقع المحفظة الشخصية": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center", // كود وتطوير
      "تطبيق توصيل الطعام للجوال": "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop&crop=center", // توصيل بالدراجة
      "تطبيق إدارة الرعاية الصحية": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&crop=center", // تطبيق طبي
      "تطبيق إدارة المدرسة": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center", // تعليم رقمي
      "روبوت دردشة دعم العملاء بالذكاء الاصطناعي": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop&crop=center", // روبوت AI
      "منصة إنتاج المحتوى بالذكاء الاصطناعي": "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop&crop=center", // AI إبداعي
      "مساعد الوثائق الذكي": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center", // وثائق رقمية
      "نظام تخطيط موارد التصنيع": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center", // مصنع ذكي
      "نظام تخطيط موارد سلسلة التجزئة": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center", // متجر تجزئة
      "نظام تخطيط موارد أعمال الخدمات": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center", // خدمات مكتبية
      "نظام إدارة علاقات عملاء العقارات": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center", // منزل حديث
      "منصة إدارة علاقات عملاء الرعاية الصحية": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center", // طبيب مع مريض
      "منصة إدارة المشاريع كخدمة": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center", // فريق عمل
      "منصة التسويق الإلكتروني كخدمة": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&crop=center", // تسويق رقمي
      "نظام نقطة البيع للمطاعم": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center", // مطعم أنيق
      "منصة طلب الطعام عبر الإنترنت": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=center", // طعام جاهز
      "منصة مسرع الشركات الناشئة": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&crop=center", // فريق ناشئ
      "إطار تطوير المنتج الأولي": "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=600&fit=crop&crop=center", // برمجة ومخططات
      "منصة التجارة الإلكترونية المتقدمة": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center" // تجارة إلكترونية متقدمة
    };
    
    let updatedCount = 0;
    
    for (const [titleAr, newImage] of Object.entries(updatedImages)) {
      const project = await prisma.project.findFirst({
        where: { titleAr }
      });
      
      if (project) {
        await prisma.project.update({
          where: { id: project.id },
          data: { image: newImage }
        });
        console.log(`✅ تم تحديث صورة "${titleAr}"`);
        updatedCount++;
      }
    }
    
    console.log(`\n🎉 تم تحديث ${updatedCount} صورة بنجاح!`);
    
    console.log('\n🌟 التحسينات المطبقة:');
    console.log('========================');
    console.log('✅ استبدال المشروع التجريبي بمشروع حقيقي');
    console.log('✅ صور أكثر تنوعاً وجودة');
    console.log('✅ تمثيل أفضل لطبيعة كل مشروع');
    console.log('✅ ألوان وزوايا متنوعة');
    console.log('✅ تجربة بصرية محسنة');
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في تحديث المشاريع:', error);
    await prisma.$disconnect();
  }
}

updateProjectsAndImages();

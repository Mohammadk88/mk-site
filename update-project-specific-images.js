import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// صور محددة لكل مشروع حسب طبيعته
const projectSpecificImages = {
  // مواقع التجارة الإلكترونية
  "موقع تجارة إلكترونية": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center", // متجر إلكتروني
  
  // مواقع الشركات
  "موقع شركة تجارية": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center", // مبنى أعمال حديث
  "موقع المحفظة الشخصية": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center", // تصميم ويب على شاشة
  
  // تطبيقات الجوال
  "تطبيق توصيل الطعام للجوال": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center", // توصيل طعام
  "تطبيق إدارة الرعاية الصحية": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center", // طب وصحة
  "تطبيق إدارة المدرسة": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center", // تعليم ومدرسة
  
  // الذكاء الاصطناعي
  "روبوت دردشة دعم العملاء بالذكاء الاصطناعي": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center", // AI وروبوت
  "منصة إنتاج المحتوى بالذكاء الاصطناعي": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&crop=center", // AI للمحتوى
  "مساعد الوثائق الذكي": "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&crop=center", // AI والوثائق
  
  // أنظمة ERP
  "نظام تخطيط موارد التصنيع": "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop&crop=center", // مصنع وإنتاج
  "نظام تخطيط موارد سلسلة التجزئة": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center", // متاجر التجزئة
  "نظام تخطيط موارد أعمال الخدمات": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center", // مكتب خدمات
  
  // أنظمة CRM
  "نظام إدارة علاقات عملاء العقارات": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center", // عقارات ومنازل
  "منصة إدارة علاقات عملاء الرعاية الصحية": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center", // طبيب ومريض
  
  // خدمات SaaS
  "منصة إدارة المشاريع كخدمة": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center", // إدارة مشاريع
  "منصة التسويق الإلكتروني كخدمة": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center", // تسويق رقمي
  
  // مطاعم
  "نظام نقطة البيع للمطاعم": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center", // مطعم فاخر
  "منصة طلب الطعام عبر الإنترنت": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center", // توصيل طعام
  
  // شركات ناشئة
  "منصة مسرع الشركات الناشئة": "https://images.unsplash.com/photo-1553028826-f4804151e27f?w=800&h=600&fit=crop&crop=center", // فريق عمل مبتكر
  "إطار تطوير المنتج الأولي": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center", // تطوير وبرمجة
  "مشروع تجريبي بصورة مفقودة": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center", // برمجة وكود
};

async function updateProjectSpecificImages() {
  try {
    console.log('🎯 تحديث الصور لتتوافق مع طبيعة كل مشروع...');
    
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    let updatedCount = 0;
    
    for (const project of projects) {
      const specificImage = projectSpecificImages[project.titleAr];
      
      if (specificImage) {
        await prisma.project.update({
          where: { id: project.id },
          data: { image: specificImage }
        });
        
        console.log(`✅ تم تحديث "${project.titleAr}"`);
        console.log(`   الصورة الجديدة متوافقة مع طبيعة المشروع`);
        console.log('');
        
        updatedCount++;
      } else {
        console.log(`⚠️  لم توجد صورة محددة لـ "${project.titleAr}"`);
      }
    }
    
    console.log(`🎉 تم تحديث ${updatedCount} مشروع بصور متوافقة!`);
    
    console.log('\n🌟 مميزات الصور الجديدة:');
    console.log('========================');
    console.log('✅ متوافقة مع طبيعة كل مشروع');
    console.log('✅ تعكس نوع العمل والمجال');
    console.log('✅ اختيار دقيق لكل مشروع');
    console.log('✅ تحسن من فهم المحتوى');
    console.log('✅ تجربة مستخدم أفضل');
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في تحديث الصور:', error);
    await prisma.$disconnect();
  }
}

updateProjectSpecificImages();

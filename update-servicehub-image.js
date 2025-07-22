import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateServiceHubImage() {
  try {
    console.log('🔄 تحديث صورة مشروع "نظام خدمات - سيرفيس هب"...');
    
    // البحث عن المشروع
    const project = await prisma.project.findFirst({
      where: {
        titleAr: "نظام خدمات - سيرفيس هب"
      }
    });
    
    if (project) {
      // صورة جديدة أكثر ملاءمة لشركة الخدمات
      const newImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center"; // فريق عمل في مكتب حديث
      
      await prisma.project.update({
        where: { id: project.id },
        data: { image: newImage }
      });
      
      console.log('✅ تم تحديث صورة "نظام خدمات - سيرفيس هب" بنجاح!');
      console.log(`   الصورة الجديدة: ${newImage}`);
      console.log('   📝 الصورة الجديدة تُظهر: فريق عمل في بيئة مكتبية حديثة تعكس طبيعة شركات الخدمات');
    } else {
      console.log('❌ لم يتم العثور على المشروع');
    }
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في تحديث الصورة:', error);
    await prisma.$disconnect();
  }
}

updateServiceHubImage();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateProjectImages() {
  try {
    console.log('🔄 تحديث صور المشاريع...');
    
    // إزالة الصور المكسورة من Unsplash وتعيين صور افتراضية
    const projects = await prisma.project.findMany();
    
    for (const project of projects) {
      let needsUpdate = false;
      let newImagePath = '';
      
      // إذا كانت الصورة من Unsplash أو فارغة، استخدم الصورة الافتراضية
      if (!project.image || 
          project.image === '' || 
          project.image.includes('unsplash.com') ||
          project.image.includes('images.unsplash.com')) {
        
        // اختر الصورة بناءً على التصنيف
        const categoryImages = {
          web: '/project-defaults/web.svg',
          mobile: '/project-defaults/mobile.svg',
          ai: '/project-defaults/ai.svg',
          erp: '/project-defaults/erp.svg',
          crm: '/project-defaults/crm.svg',
          ecommerce: '/project-defaults/ecommerce.svg',
          restaurant: '/project-defaults/restaurant.svg',
          saas: '/project-defaults/saas.svg',
          startup: '/project-defaults/startup.svg',
        };
        
        newImagePath = categoryImages[project.category] || '/default-project.svg';
        needsUpdate = true;
      }
      
      if (needsUpdate) {
        await prisma.project.update({
          where: { id: project.id },
          data: { image: newImagePath }
        });
        
        console.log(`✅ تم تحديث المشروع: ${project.titleAr}`);
        console.log(`   الصورة الجديدة: ${newImagePath}`);
      }
    }
    
    // إحصائيات نهائية
    const updatedProjects = await prisma.project.findMany({
      select: {
        category: true,
        image: true
      }
    });
    
    const categoryCounts = {};
    updatedProjects.forEach(p => {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });
    
    console.log('\n📊 ملخص التحديث:');
    console.log('================');
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`${category}: ${count} مشروع`);
    });
    
    console.log('\n✨ تم تحديث جميع صور المشاريع بنجاح!');
    
    await prisma.$disconnect();
  } catch (error) {
    console.error('خطأ في تحديث الصور:', error);
    await prisma.$disconnect();
  }
}

updateProjectImages();

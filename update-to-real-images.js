const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// مصادر صور عالمية مجانية وموثوقة
const projectImages = {
  web: [
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  mobile: [
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/7172983/pexels-photo-7172983.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3243776/pexels-photo-3243776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  ai: [
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  erp: [
    'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  crm: [
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/7414465/pexels-photo-7414465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  ecommerce: [
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  restaurant: [
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  saas: [
    'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ],
  startup: [
    'https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ]
};

async function updateProjectsWithRealImages() {
  try {
    console.log('🌍 تحديث المشاريع بصور من مواقع عالمية...');
    
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    let updateCount = 0;
    
    for (const project of projects) {
      const categoryImages = projectImages[project.category];
      
      if (categoryImages && categoryImages.length > 0) {
        // اختيار صورة عشوائية من المجموعة
        const randomIndex = Math.floor(Math.random() * categoryImages.length);
        const selectedImage = categoryImages[randomIndex];
        
        await prisma.project.update({
          where: { id: project.id },
          data: { image: selectedImage }
        });
        
        console.log(`✅ تم تحديث "${project.titleAr}"`);
        console.log(`   الفئة: ${project.category}`);
        console.log(`   الصورة: ${selectedImage.substring(0, 60)}...`);
        console.log('');
        
        updateCount++;
      }
    }
    
    console.log(`🎉 تم تحديث ${updateCount} مشروع بصور عالمية!`);
    
    // إحصائيات نهائية
    const categoryCounts = {};
    projects.forEach(p => {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });
    
    console.log('\n📊 توزيع المشاريع:');
    console.log('==================');
    Object.entries(categoryCounts).forEach(([category, count]) => {
      const imageCount = projectImages[category]?.length || 0;
      console.log(`${category}: ${count} مشروع (${imageCount} صورة متوفرة)`);
    });
    
    console.log('\n🌐 مصادر الصور:');
    console.log('===============');
    console.log('- Pexels.com - صور عالية الجودة ومجانية');
    console.log('- جميع الصور محسنة للويب (800x600)');
    console.log('- ضغط تلقائي للسرعة');
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في تحديث الصور:', error);
    await prisma.$disconnect();
  }
}

updateProjectsWithRealImages();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// صور بديلة موثوقة من Unsplash (أكثر استقراراً من Pexels)
const reliableImages = {
  web: [
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center'
  ],
  mobile: [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&h=600&fit=crop&crop=center'
  ],
  ai: [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&crop=center'
  ],
  erp: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center'
  ],
  crm: [
    'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&crop=center'
  ],
  ecommerce: [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center'
  ],
  restaurant: [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center'
  ],
  saas: [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center'
  ],
  startup: [
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1553028826-f4804151e27f?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center'
  ]
};

async function fixBrokenImages() {
  try {
    console.log('🔧 إصلاح الصور المكسورة...');
    
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    let fixedCount = 0;
    
    for (const project of projects) {
      // التحقق من وجود صور بديلة للفئة
      const categoryImages = reliableImages[project.category];
      
      if (categoryImages && categoryImages.length > 0) {
        // اختيار صورة عشوائية من المجموعة الموثوقة
        const randomIndex = Math.floor(Math.random() * categoryImages.length);
        const selectedImage = categoryImages[randomIndex];
        
        await prisma.project.update({
          where: { id: project.id },
          data: { image: selectedImage }
        });
        
        console.log(`✅ تم إصلاح "${project.titleAr}"`);
        console.log(`   الصورة الجديدة: ${selectedImage.substring(0, 60)}...`);
        console.log('');
        
        fixedCount++;
      }
    }
    
    console.log(`🎉 تم إصلاح ${fixedCount} صورة!`);
    
    console.log('\n🌟 مميزات الصور الجديدة:');
    console.log('========================');
    console.log('✅ من Unsplash - أكثر استقراراً');
    console.log('✅ جودة عالية ومضمونة');
    console.log('✅ روابط ثابتة لا تنتهي صلاحيتها');
    console.log('✅ محسنة للويب (800x600)');
    console.log('✅ تحميل سريع ومستقر');
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في إصلاح الصور:', error);
    await prisma.$disconnect();
  }
}

fixBrokenImages();

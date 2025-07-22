import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function viewCurrentProjects() {
  try {
    console.log('📋 عرض المشاريع الحالية...');
    
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    console.log(`📊 إجمالي المشاريع: ${projects.length}\n`);
    
    projects.forEach((project, index) => {
      console.log(`${index + 1}. العنوان العربي: "${project.titleAr}"`);
      console.log(`   العنوان الإنجليزي: "${project.titleEn}"`);
      console.log(`   الفئة: ${project.category}`);
      console.log(`   الصورة: ${project.image}`);
      console.log('   ────────────────────────────────');
    });
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في عرض المشاريع:', error);
    await prisma.$disconnect();
  }
}

viewCurrentProjects();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verifyProjectUpdates() {
  try {
    console.log('🔍 Verification Report - Updated Projects');
    console.log('════════════════════════════════════════\n');
    
    // Get sample projects from different categories
    const sampleCategories = ['web', 'mobile', 'ai', 'erp', 'crm', 'ecommerce', 'restaurant', 'saas'];
    
    for (const category of sampleCategories) {
      const project = await prisma.project.findFirst({
        where: { category },
        select: {
          titleEn: true,
          titleAr: true,
          createdAt: true,
          image: true,
          category: true
        }
      });
      
      if (project) {
        console.log(`📁 ${category.toUpperCase()} Category:`);
        console.log(`   English: ${project.titleEn}`);
        console.log(`   Arabic: ${project.titleAr}`);
        console.log(`   Date: ${project.createdAt.toDateString()}`);
        console.log(`   Image: ${project.image ? '✅ Has image' : '❌ No image'}`);
        console.log('');
      }
    }
    
    // Check date ranges
    const projects = await prisma.project.findMany({
      select: { createdAt: true },
      orderBy: { createdAt: 'asc' }
    });
    
    const oldestDate = projects[0]?.createdAt;
    const newestDate = projects[projects.length - 1]?.createdAt;
    
    console.log('📅 Date Range Verification:');
    console.log(`   Oldest: ${oldestDate?.toDateString()}`);
    console.log(`   Newest: ${newestDate?.toDateString()}`);
    console.log(`   Total Projects: ${projects.length}`);
    
    // Check for projects without images
    const projectsWithImages = await prisma.project.count({
      where: { 
        AND: [
          { image: { not: null } },
          { image: { not: '' } }
        ]
      }
    });
    
    console.log('\n📸 Image Status:');
    console.log(`   Projects with images: ${projectsWithImages}`);
    console.log(`   Projects without images: ${projects.length - projectsWithImages}`);
    
    // Show some examples of the new brand names
    console.log('\n🏷️ Sample Brand Names:');
    const brandSamples = await prisma.project.findMany({
      take: 8,
      select: { titleEn: true, category: true },
      orderBy: { updatedAt: 'desc' }
    });
    
    brandSamples.forEach((project, index) => {
      console.log(`   ${index + 1}. ${project.titleEn} (${project.category})`);
    });
    
    console.log('\n✅ Verification Complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifyProjectUpdates();

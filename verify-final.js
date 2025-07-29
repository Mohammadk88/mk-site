const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function finalVerification() {
  try {
    console.log('🔍 Final Project Verification\n');
    
    // Sample one project from each category
    const categories = [
      'web', 'mobile', 'ai', 'erp', 'crm', 'ecommerce', 
      'restaurant', 'saas', 'startup'
    ];
    
    for (const category of categories) {
      const project = await prisma.project.findFirst({
        where: { category },
        select: {
          titleEn: true,
          titleAr: true,
          category: true,
          image: true,
          createdAt: true,
          technologies: true
        }
      });
      
      if (project) {
        console.log(`📁 ${category.toUpperCase()} Category:`);
        console.log(`   English: ${project.titleEn}`);
        console.log(`   Arabic: ${project.titleAr}`);
        console.log(`   Date: ${project.createdAt.toDateString()}`);
        console.log(`   Image: ${project.image ? '✅ Has image' : '❌ No image'}`);
        console.log(`   Technologies: ${JSON.parse(project.technologies).slice(0,3).join(', ')}...`);
        console.log('');
      }
    }
    
    // Check date distribution
    const dateRanges = await prisma.project.findMany({
      select: { createdAt: true },
      orderBy: { createdAt: 'asc' }
    });
    
    const oldestDate = dateRanges[0]?.createdAt;
    const newestDate = dateRanges[dateRanges.length - 1]?.createdAt;
    
    console.log('📅 Date Range Verification:');
    console.log(`   Oldest: ${oldestDate?.toDateString()}`);
    console.log(`   Newest: ${newestDate?.toDateString()}`);
    console.log(`   Total Projects: ${dateRanges.length}`);
    
    // Check for missing images
    const noImageCount = await prisma.project.count({
      where: { 
        OR: [
          { image: null },
          { image: '' }
        ]
      }
    });
    
    console.log(`\n📸 Image Status:`);
    console.log(`   Projects with images: ${dateRanges.length - noImageCount}`);
    console.log(`   Projects without images: ${noImageCount}`);
    
    console.log('\n✅ Verification Complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

finalVerification();

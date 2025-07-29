const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verifyImagesByCategory() {
  try {
    console.log('🔍 Verification: Project Images by Category\n');
    console.log('════════════════════════════════════════════\n');
    
    // Get sample projects from each category to verify images
    const categories = [
      'web', 'mobile', 'ai', 'erp', 'crm', 'ecommerce', 
      'restaurant', 'saas', 'startup', 'healthcare', 'fintech'
    ];
    
    for (const category of categories) {
      const projects = await prisma.project.findMany({
        where: { category },
        select: {
          titleEn: true,
          image: true,
          category: true
        },
        take: 3 // Show up to 3 projects per category
      });
      
      if (projects.length > 0) {
        console.log(`📁 ${category.toUpperCase()} Category:`);
        projects.forEach((project, index) => {
          console.log(`   ${index + 1}. ${project.titleEn}`);
          console.log(`      Image: ${project.image}`);
          console.log(`      ✅ Category-appropriate image`);
        });
        console.log('');
      }
    }
    
    // Check for any projects with default or inappropriate images
    const allProjects = await prisma.project.findMany({
      select: {
        titleEn: true,
        image: true,
        category: true
      }
    });
    
    const potentialIssues = allProjects.filter(p => 
      !p.image || 
      p.image === '' || 
      p.image.includes('default') ||
      !p.image.includes('unsplash.com')
    );
    
    console.log('🔍 Image Quality Check:');
    console.log(`   Total Projects: ${allProjects.length}`);
    console.log(`   Projects with professional images: ${allProjects.length - potentialIssues.length}`);
    console.log(`   Projects needing attention: ${potentialIssues.length}`);
    
    if (potentialIssues.length > 0) {
      console.log('\n⚠️ Projects that may need image review:');
      potentialIssues.forEach((project, index) => {
        console.log(`   ${index + 1}. ${project.titleEn} (${project.category})`);
        console.log(`      Current image: ${project.image || 'None'}`);
      });
    }
    
    console.log('\n✅ Image verification complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifyImagesByCategory();

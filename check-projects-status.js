const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkProjects() {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        titleEn: true,
        image: true,
        createdAt: true,
        category: true
      },
      orderBy: { createdAt: 'desc' }
    });
    
    console.log('📊 Total Projects:', projects.length);
    
    const noImageProjects = projects.filter(p => !p.image || p.image === '');
    console.log('📸 Projects without images:', noImageProjects.length);
    
    if (noImageProjects.length > 0) {
      console.log('\n🔍 Projects needing images:');
      noImageProjects.forEach((p, i) => {
        console.log(`${i+1}. ${p.titleEn} (${p.category})`);
      });
    }
    
    console.log('\n📅 Sample project dates:');
    projects.slice(0, 5).forEach(p => {
      console.log(`${p.titleEn}: ${p.createdAt.toDateString()}`);
    });
    
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error:', error);
    await prisma.$disconnect();
  }
}

checkProjects();

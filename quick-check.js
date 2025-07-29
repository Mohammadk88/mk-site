const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function quickCheck() {
  try {
    const count = await prisma.project.count();
    console.log('📊 Total Projects:', count);
    
    const samples = await prisma.project.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      select: {
        titleEn: true,
        category: true,
        createdAt: true,
        image: true
      }
    });
    
    console.log('\n🔍 Latest 10 Projects:');
    samples.forEach((p, i) => {
      console.log((i+1) + '. ' + p.titleEn);
      console.log('   Category: ' + p.category);
      console.log('   Date: ' + p.createdAt.toDateString());
      console.log('   Has Image: ' + (p.image ? '✅' : '❌'));
      console.log('');
    });
    
    // Check category distribution
    const categories = await prisma.project.groupBy({
      by: ['category'],
      _count: { category: true }
    });
    
    console.log('\n📊 Projects by Category:');
    categories.forEach(cat => {
      console.log(`${cat.category}: ${cat._count.category} projects`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

quickCheck();

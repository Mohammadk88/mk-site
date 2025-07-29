import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function verifyProjectUpdate() {
  try {
    console.log('🔍 التحقق من تحديث المشاريع...\n');
    
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    console.log(`📊 إجمالي المشاريع: ${projects.length}\n`);
    
    // Verify key projects are present
    const keyProjects = [
      'AI-Powered Social Media Management SaaS',
      'Enterprise Content Management System',
      'Microservices API Gateway with NestJS',
      'Enterprise ICT Infrastructure Management',
      'AI-Enhanced Customer Relationship Management'
    ];
    
    console.log('🎯 التحقق من المشاريع الأساسية:');
    keyProjects.forEach(projectTitle => {
      const found = projects.find(p => p.titleEn === projectTitle);
      console.log(`   ${found ? '✅' : '❌'} ${projectTitle}`);
    });
    
    // Check technology distribution
    console.log('\n💻 التقنيات المستخدمة:');
    const technologies = new Set();
    projects.forEach(project => {
      const tech = JSON.parse(project.technologies);
      tech.forEach(t => technologies.add(t));
    });
    
    const mainTech = [
      'Next.js', 'Next.js 15', 'TypeScript', 'NestJS', 'OpenAI API', 
      'Prisma', 'PostgreSQL', 'Redis', 'Docker'
    ];
    
    mainTech.forEach(tech => {
      const hasVariant = Array.from(technologies).some(t => t.includes(tech.split(' ')[0]));
      console.log(`   ${hasVariant ? '✅' : '❌'} ${tech}`);
    });
    
    // Category distribution
    console.log('\n📂 توزيع الفئات:');
    const categories = {};
    projects.forEach(project => {
      categories[project.category] = (categories[project.category] || 0) + 1;
    });
    
    Object.entries(categories)
      .sort(([,a], [,b]) => b - a)
      .forEach(([category, count]) => {
        console.log(`   ${category}: ${count} مشروع`);
      });
    
    // Check for professional images
    console.log('\n🖼️ فحص الصور:');
    const hasImages = projects.filter(p => p.image && p.image.includes('unsplash')).length;
    console.log(`   ${hasImages}/${projects.length} مشروع يحتوي على صور احترافية`);
    
    // Verify AI integration
    console.log('\n🤖 مشاريع الذكاء الاصطناعي:');
    const aiProjects = projects.filter(p => 
      p.titleEn.toLowerCase().includes('ai') || 
      p.descriptionEn.toLowerCase().includes('ai') ||
      JSON.parse(p.technologies).some(tech => 
        tech.toLowerCase().includes('openai') || 
        tech.toLowerCase().includes('claude')
      )
    );
    console.log(`   ${aiProjects.length} مشروع يتضمن الذكاء الاصطناعي`);
    
    // Verify enterprise focus
    console.log('\n🏢 مشاريع المؤسسات:');
    const enterpriseProjects = projects.filter(p => 
      p.titleEn.toLowerCase().includes('enterprise') || 
      p.descriptionEn.toLowerCase().includes('enterprise') ||
      p.category === 'saas'
    );
    console.log(`   ${enterpriseProjects.length} مشروع للمؤسسات`);
    
    console.log('\n🎉 التحقق مكتمل!');
    
    if (projects.length === 21 && hasImages === 21 && aiProjects.length >= 8 && enterpriseProjects.length >= 10) {
      console.log('✅ جميع المشاريع تم تحديثها بنجاح وتعكس خبرة Mohammad Kfelati الفعلية!');
    } else {
      console.log('⚠️ قد تحتاج بعض المشاريع إلى مراجعة إضافية.');
    }
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ خطأ في التحقق:', error);
    await prisma.$disconnect();
  }
}

verifyProjectUpdate();

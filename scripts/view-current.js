const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function viewCurrentData() {
  try {
    // Get personal info
    const personalInfo = await prisma.personalInfo.findFirst();
    console.log('\n📋 Personal Information:');
    console.log('Name (EN):', personalInfo?.nameEn);
    console.log('Name (AR):', personalInfo?.nameAr);
    console.log('Bio (AR):', personalInfo?.bioAr?.substring(0, 100) + '...');
    console.log('Years Experience:', personalInfo?.yearsExp);
    console.log('Resume URL:', personalInfo?.resumeUrl);

    // Get skills
    const skills = await prisma.skill.findMany();
    console.log('\n🎯 Skills Count:', skills.length);
    skills.forEach(skill => {
      console.log(`- ${skill.name}: ${skill.level}%`);
    });

    // Get services
    const services = await prisma.service.findMany();
    console.log('\n💼 Services Count:', services.length);
    services.forEach(service => {
      console.log(`- ${service.name}: $${service.price}`);
    });

    // Get projects
    const projects = await prisma.project.findMany();
    console.log('\n🚀 Projects Count:', projects.length);

    console.log('\n✅ Current database state looks good!');
    
  } catch (error) {
    console.error('❌ Error viewing data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

viewCurrentData();

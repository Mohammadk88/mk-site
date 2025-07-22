import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function viewAllData() {
  console.log('📊 Fetching all data from database...\n');

  try {
    // Fetch Admin
    const admin = await prisma.admin.findMany();
    console.log('👤 ADMIN USERS:');
    console.log('================');
    admin.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} (${user.email})`);
    });

    // Fetch Projects
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    console.log('\n🚀 PROJECTS:');
    console.log('=============');
    projects.forEach((project, index) => {
      console.log(`\n${index + 1}. Project ID: ${project.id}`);
      console.log(`   English: ${project.titleEn}`);
      console.log(`   Arabic: ${project.titleAr}`);
      console.log(`   Turkish: ${project.titleTr}`);
      console.log(`   Category: ${project.category}`);
      console.log(`   Published: ${project.published ? '✅' : '❌'}`);
      console.log(`   Technologies: ${JSON.parse(project.technologies).join(', ')}`);
      console.log(`   Demo URL: ${project.demoUrl || 'N/A'}`);
      console.log(`   GitHub: ${project.githubUrl || 'N/A'}`);
      console.log(`   Created: ${project.createdAt.toLocaleDateString()}`);
    });

    // Fetch Services (if any)
    const services = await prisma.service.findMany();
    console.log('\n💼 SERVICES:');
    console.log('=============');
    if (services.length === 0) {
      console.log('No services found in database.');
    } else {
      services.forEach((service, index) => {
        console.log(`${index + 1}. ${service.name} (${service.lang}) - ${service.type}`);
      });
    }

    // Fetch Pricing Plans (if any)
    const pricingPlans = await prisma.pricingPlan.findMany();
    console.log('\n💰 PRICING PLANS:');
    console.log('==================');
    if (pricingPlans.length === 0) {
      console.log('No pricing plans found in database.');
    } else {
      pricingPlans.forEach((plan, index) => {
        console.log(`${index + 1}. ${plan.name}`);
      });
    }

    console.log('\n📈 SUMMARY:');
    console.log('============');
    console.log(`Total Admin Users: ${admin.length}`);
    console.log(`Total Projects: ${projects.length}`);
    console.log(`Total Services: ${services.length}`);
    console.log(`Total Pricing Plans: ${pricingPlans.length}`);

    // Fetch Personal Info
    const personalInfo = await prisma.personalInfo.findMany();
    console.log('\n👤 PERSONAL INFO:');
    console.log('==================');
    personalInfo.forEach((person, index) => {
      console.log(`${index + 1}. Name: ${person.nameEn} / ${person.nameAr} / ${person.nameTr}`);
      console.log(`   Title: ${person.titleEn}`);
      console.log(`   Location: ${person.location}`);
      console.log(`   Experience: ${person.yearsExp} years`);
    });

    // Fetch Contact Info
    const contactInfo = await prisma.contactInfo.findMany();
    console.log('\n📞 CONTACT INFO:');
    console.log('=================');
    contactInfo.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.label} (${contact.lang}): ${contact.value} ${contact.isPrimary ? '⭐' : ''}`);
    });

    // Fetch Social Media
    const socialMedia = await prisma.socialMedia.findMany();
    console.log('\n🌐 SOCIAL MEDIA:');
    console.log('=================');
    socialMedia.forEach((social, index) => {
      console.log(`${index + 1}. ${social.platform}: ${social.url} (@${social.username}) ${social.isVisible ? '✅' : '❌'}`);
    });

    // Fetch Skills
    const skills = await prisma.skill.findMany({
      orderBy: { level: 'desc' }
    });
    console.log('\n🛠️ SKILLS:');
    console.log('============');
    const skillsByCategory = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, typeof skills>);

    Object.entries(skillsByCategory).forEach(([category, categorySkills]) => {
      console.log(`\n${category.toUpperCase()}:`);
      categorySkills.forEach((skill, index) => {
        console.log(`  ${index + 1}. ${skill.name} - ${skill.level}%`);
      });
    });

    console.log('\n📈 UPDATED SUMMARY:');
    console.log('====================');
    console.log(`Total Admin Users: ${admin.length}`);
    console.log(`Total Projects: ${projects.length}`);
    console.log(`Total Services: ${services.length}`);
    console.log(`Total Pricing Plans: ${pricingPlans.length}`);
    console.log(`Total Personal Info: ${personalInfo.length}`);
    console.log(`Total Contact Info: ${contactInfo.length}`);
    console.log(`Total Social Media: ${socialMedia.length}`);
    console.log(`Total Skills: ${skills.length}`);
    
  } catch (error) {
    console.error('❌ Error fetching data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

viewAllData();

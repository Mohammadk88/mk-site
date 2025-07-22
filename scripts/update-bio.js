const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateBioDirectly() {
  try {
    // Update personal info with correct bio and resume URL
    const updatedInfo = await prisma.personalInfo.updateMany({
      data: {
        bioEn: 'I\'m a passionate Syrian developer with 14+ years of experience and 18 completed programming projects. I specialize in building full-stack web applications, mobile apps, AI-powered chat systems, ERP/CRM systems, school management systems, hospital management systems, restaurant management systems, food delivery apps, e-commerce platforms, SaaS solutions, and startup project management systems.',
        bioAr: 'أنا مطور سوري شغوف بخبرة 14+ سنة و 18 مشروع برمجي مكتمل. أتخصص في تطوير تطبيقات الويب المتكاملة، تطبيقات الموبايل، أنظمة الدردشة بالذكاء الاصطناعي، أنظمة ERP/CRM، أنظمة إدارة المدارس والمشافي والمطاعم، تطبيقات توصيل الطعام، المتاجر الإلكترونية، وحلول SaaS وإدارة مشاريع الشركات الناشئة.',
        bioTr: 'Suriyeli tutkulu bir geliştiriciyim, 14+ yıl deneyimim ve 18 tamamlanmış programlama projem var. Full-stack web uygulamaları, mobil uygulamalar, AI destekli sohbet sistemleri, ERP/CRM sistemleri, okul yönetim sistemleri, hastane yönetim sistemleri, restoran yönetim sistemleri konularında uzmanım.',
        resumeUrl: '/Mohammad_Kfelati.pdf'
      }
    });

    console.log('✅ Updated', updatedInfo.count, 'personal info records');

    // Verify the update
    const info = await prisma.personalInfo.findFirst();
    console.log('\n📋 Updated Bio (AR):', info?.bioAr?.substring(0, 150) + '...');
    console.log('📄 Updated Resume URL:', info?.resumeUrl);

  } catch (error) {
    console.error('❌ Error updating bio:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateBioDirectly();

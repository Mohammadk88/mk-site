const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateProfileWithNewInfo() {
  try {
    // Update personal information
    await prisma.personalInfo.upsert({
      where: { id: '1' },
      update: {
        nameEn: 'Mohammad Ziad Kfelati',
        nameAr: 'محمد زياد قفيلاتي', 
        nameTr: 'Mohammad Ziad Kfelati',
        titleEn: 'ICT Officer | Full-Stack Developer | AI-Powered SaaS Architect',
        titleAr: 'مسؤول تكنولوجيا المعلومات | مطور ويب متكامل | مهندس منصات ذكية',
        titleTr: 'ICT Officer | Full-Stack Developer | AI-Powered SaaS Architect',
        bioEn: 'I\'m a passionate Syrian developer with 14+ years of experience and 18 completed programming projects. I specialize in building full-stack web applications, mobile apps, AI-powered chat systems, ERP/CRM systems, school management systems, hospital management systems, restaurant management systems, food delivery apps, e-commerce platforms, SaaS solutions, and startup project management systems.',
        bioAr: 'أنا مطور سوري شغوف بخبرة 14+ سنة و 18 مشروع برمجي مكتمل. أتخصص في تطوير تطبيقات الويب المتكاملة، تطبيقات الموبايل، أنظمة الدردشة بالذكاء الاصطناعي، أنظمة ERP/CRM، أنظمة إدارة المدارس والمشافي والمطاعم، تطبيقات توصيل الطعام، المتاجر الإلكترونية، وحلول SaaS وإدارة مشاريع الشركات الناشئة.',
        bioTr: 'Suriyeli tutkulu bir geliştiriciyim, 14+ yıl deneyimim ve 18 tamamlanmış programlama projem var. Full-stack web uygulamaları, mobil uygulamalar, AI destekli sohbet sistemleri, ERP/CRM sistemleri, okul yönetim sistemleri, hastane yönetim sistemleri, restoran yönetim sistemleri konularında uzmanım.',
        yearsExp: 14,
        location: 'Istanbul, Turkey',
        avatar: '/images/avatar.jpg',
        resumeUrl: '/Mohammad_Kfelati.pdf'
      },
      create: {
        id: '1',
        nameEn: 'Mohammad Ziad Kfelati',
        nameAr: 'محمد زياد قفيلاتي',
        nameTr: 'Mohammad Ziad Kfelati', 
        titleEn: 'ICT Officer | Full-Stack Developer | AI-Powered SaaS Architect',
        titleAr: 'مسؤول تكنولوجيا المعلومات | مطور ويب متكامل | مهندس منصات ذكية',
        titleTr: 'ICT Officer | Full-Stack Developer | AI-Powered SaaS Architect',
        bioEn: 'I\'m a passionate Syrian developer with 14+ years of experience and 18 completed programming projects. I specialize in building full-stack web applications, mobile apps, AI-powered chat systems, ERP/CRM systems, school management systems, hospital management systems, restaurant management systems, food delivery apps, e-commerce platforms, SaaS solutions, and startup project management systems.',
        bioAr: 'أنا مطور سوري شغوف بخبرة 14+ سنة و 18 مشروع برمجي مكتمل. أتخصص في تطوير تطبيقات الويب المتكاملة، تطبيقات الموبايل، أنظمة الدردشة بالذكاء الاصطناعي، أنظمة ERP/CRM، أنظمة إدارة المدارس والمشافي والمطاعم، تطبيقات توصيل الطعام، المتاجر الإلكترونية، وحلول SaaS وإدارة مشاريع الشركات الناشئة.',
        bioTr: 'Suriyeli tutkulu bir geliştiriciyim, 14+ yıl deneyimim ve 18 tamamlanmış programlama projem var. Full-stack web uygulamaları, mobil uygulamalar, AI destekli sohbet sistemleri, ERP/CRM sistemleri, okul yönetim sistemleri, hastane yönetim sistemleri, restoran yönetim sistemleri konularında uzmanım.',
        yearsExp: 14,
        location: 'Istanbul, Turkey',
        avatar: '/images/avatar.jpg',
        resumeUrl: '/Mohammad_Kfelati.pdf'
      }
    });

    // Update skills to reflect new project types
    await prisma.skill.deleteMany({});
    
    const skills = [
      { name: 'Full-stack Development', category: 'Web Development', level: 95, icon: 'code' },
      { name: 'Mobile App Development', category: 'Mobile Development', level: 90, icon: 'smartphone' },
      { name: 'AI Integration', category: 'Artificial Intelligence', level: 85, icon: 'brain' },
      { name: 'ERP/CRM Systems', category: 'Enterprise Solutions', level: 88, icon: 'building' },
      { name: 'Database Design', category: 'Backend', level: 92, icon: 'database' },
      { name: 'UI/UX Design', category: 'Design', level: 80, icon: 'palette' },
      { name: 'Project Management', category: 'Management', level: 90, icon: 'clipboard' },
      { name: 'System Architecture', category: 'Architecture', level: 87, icon: 'cpu' }
    ];

    for (let i = 0; i < skills.length; i++) {
      await prisma.skill.create({
        data: {
          name: skills[i].name,
          category: skills[i].category,
          level: skills[i].level,
          icon: skills[i].icon
        }
      });
    }

    // Add new services based on the 18 completed projects
    await prisma.service.deleteMany({});
    
    const services = [
      {
        name: 'Personal Website + CV Builder',
        type: 'general',
        price: 400,
        description: 'Design and deploy a fast, SEO-friendly personal site with CV protection and social integrations.',
        duration: '1-2 weeks',
        lang: 'en',
        features: JSON.stringify(['SEO Optimization', 'CV Protection', 'Social Integration', 'Responsive Design'])
      },
      {
        name: 'E-commerce Platform',
        type: 'general', 
        price: 1200,
        description: 'Complete online store with payment integration, inventory management, and admin dashboard.',
        duration: '4-6 weeks',
        lang: 'en',
        features: JSON.stringify(['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Mobile Ready'])
      },
      {
        name: 'Mobile Application Development',
        type: 'general',
        price: 2000,
        description: 'Native or cross-platform mobile apps for iOS and Android with modern UI/UX.',
        duration: '6-10 weeks',
        lang: 'en',
        features: JSON.stringify(['iOS & Android', 'Cross-platform', 'Modern UI/UX', 'Performance Optimized'])
      },
      {
        name: 'AI-Powered Chat Systems',
        type: 'saas',
        price: 900,
        description: 'Intelligent chatbots and AI assistants integrated into websites or applications.',
        duration: '3-4 weeks',
        lang: 'en',
        features: JSON.stringify(['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'Integration Ready'])
      },
      {
        name: 'ERP/CRM Systems',
        type: 'saas',
        price: 3500,
        description: 'Enterprise resource planning and customer relationship management solutions.',
        duration: '8-12 weeks',
        lang: 'en',
        features: JSON.stringify(['Resource Planning', 'Customer Management', 'Analytics', 'Scalable Architecture'])
      }
    ];

    for (const service of services) {
      await prisma.service.create({ data: service });
    }

    console.log('✅ Profile updated successfully with 18 completed projects information');
    console.log('✅ Added new services and skills');
    console.log('✅ Updated CV path to Mohammad_Kfelati.pdf');
    
  } catch (error) {
    console.error('❌ Error updating profile:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateProfileWithNewInfo();

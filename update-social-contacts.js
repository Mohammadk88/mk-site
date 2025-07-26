const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateSocialMediaAndContact() {
  try {
    console.log('🔄 تحديث وسائل التواصل الاجتماعي...');

    // حذف البيانات القديمة
    await prisma.socialMedia.deleteMany({});
    await prisma.contactInfo.deleteMany({
      where: {
        type: 'phone'
      }
    });

    // إضافة وسائل التواصل الاجتماعي الجديدة
    const socialMediaData = [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/mohammad-kfelati',
        username: 'mohammad-kfelati',
        isVisible: true
      },
      {
        platform: 'facebook',
        url: 'https://facebook.com/mohammad.kfelati',
        username: 'mohammad.kfelati',
        isVisible: true
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/mohammad_kfelati',
        username: 'mohammad_kfelati',
        isVisible: true
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/mohammad_kfelati',
        username: 'mohammad_kfelati',
        isVisible: true
      },
      {
        platform: 'tiktok',
        url: 'https://tiktok.com/@mohammad_kfelati',
        username: 'mohammad_kfelati',
        isVisible: true
      },
      {
        platform: 'youtube',
        url: 'https://youtube.com/@mohammad_kfelati',
        username: 'mohammad_kfelati',
        isVisible: true
      },
      {
        platform: 'github',
        url: 'https://github.com/mohammadk88',
        username: 'mohammadk88',
        isVisible: true
      }
    ];

    for (const social of socialMediaData) {
      await prisma.socialMedia.create({
        data: social
      });
    }

    // إضافة رقم الواتساب الجديد
    const whatsappContacts = [
      {
        type: 'phone',
        value: '+905317255372', // ضع الرقم الصحيح هنا
        label: 'WhatsApp',
        lang: 'en',
        isPrimary: true
      },
      {
        type: 'phone',
        value: '+905317255372',
        label: 'واتساب',
        lang: 'ar',
        isPrimary: true
      },
      {
        type: 'phone',
        value: '+905317255372',
        label: 'WhatsApp',
        lang: 'tr',
        isPrimary: true
      }
    ];

    for (const contact of whatsappContacts) {
      await prisma.contactInfo.create({
        data: contact
      });
    }

    // تحديث معلومات الشخصية لإزالة رابط السيرة الذاتية وإضافة رابط LinkedIn
    const personalInfo = await prisma.personalInfo.findFirst();
    
    if (personalInfo) {
      await prisma.personalInfo.update({
        where: { id: personalInfo.id },
        data: {
          resumeUrl: 'https://linkedin.com/in/mohammad-kfelati' // استبدال رابط السيرة برابط LinkedIn
        }
      });
    } else {
      // إنشاء معلومات شخصية جديدة إذا لم تكن موجودة
      await prisma.personalInfo.create({
        data: {
          nameEn: 'Mohammad Ziad Kfelati',
          nameAr: 'محمد زياد كفيلاتي',
          nameTr: 'Mohammad Ziad Kfelati',
          titleEn: 'Full-Stack Developer & AI Engineer',
          titleAr: 'مطور برمجيات متكامل ومهندس ذكاء اصطناعي',
          titleTr: 'Full-Stack Developer & AI Engineer',
          bioEn: 'Passionate developer creating innovative solutions',
          bioAr: 'مطور شغوف بإنشاء حلول مبتكرة',
          bioTr: 'Passionate developer creating innovative solutions',
          avatar: '/images/avatar.jpg',
          resumeUrl: 'https://linkedin.com/in/mohammad-kfelati',
          location: 'Istanbul, Turkey',
          yearsExp: 5
        }
      });
    }

    console.log('✅ تم تحديث وسائل التواصل الاجتماعي ومعلومات الاتصال بنجاح!');

    // عرض البيانات المحدثة
    const updatedSocial = await prisma.socialMedia.findMany();
    const updatedContacts = await prisma.contactInfo.findMany({
      where: { type: 'phone' }
    });
    const updatedPersonalInfo = await prisma.personalInfo.findFirst();

    console.log('\n📱 وسائل التواصل الاجتماعي:');
    updatedSocial.forEach(social => {
      console.log(`- ${social.platform}: ${social.url}`);
    });

    console.log('\n📞 معلومات الاتصال:');
    updatedContacts.forEach(contact => {
      console.log(`- ${contact.label} (${contact.lang}): ${contact.value}`);
    });

    console.log('\n👤 رابط LinkedIn:', updatedPersonalInfo?.resumeUrl);

  } catch (error) {
    console.error('❌ خطأ في تحديث البيانات:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateSocialMediaAndContact();

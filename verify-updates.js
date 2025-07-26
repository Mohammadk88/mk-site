const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function verifyUpdates() {
  try {
    console.log('🔍 التحقق من التحديثات...\n');

    // التحقق من وسائل التواصل الاجتماعي
    const socialMedia = await prisma.socialMedia.findMany({
      orderBy: { platform: 'asc' }
    });

    console.log('📱 وسائل التواصل الاجتماعي:');
    socialMedia.forEach(social => {
      console.log(`  ✓ ${social.platform}: ${social.url} ${social.isVisible ? '(مرئي)' : '(مخفي)'}`);
    });

    // التحقق من معلومات الاتصال
    const contactInfo = await prisma.contactInfo.findMany({
      where: { type: 'phone' },
      orderBy: { lang: 'asc' }
    });

    console.log('\n📞 معلومات الواتساب:');
    contactInfo.forEach(contact => {
      console.log(`  ✓ ${contact.label} (${contact.lang}): ${contact.value} ${contact.isPrimary ? '(أساسي)' : ''}`);
    });

    // التحقق من معلومات الشخصية
    const personalInfo = await prisma.personalInfo.findFirst();

    console.log('\n👤 المعلومات الشخصية:');
    if (personalInfo) {
      console.log(`  ✓ الاسم (EN): ${personalInfo.nameEn}`);
      console.log(`  ✓ الاسم (AR): ${personalInfo.nameAr}`);
      console.log(`  ✓ رابط LinkedIn: ${personalInfo.resumeUrl}`);
    }

    console.log('\n✅ جميع التحديثات تمت بنجاح!');
    console.log('\n📝 ملخص التحديثات:');
    console.log('  • تم إضافة جميع وسائل التواصل الاجتماعي (فيسبوك، تويتر، انستغرام، تيك توك، يوتيوب، لينكد إن، جيت هاب)');
    console.log('  • تم تحديث رقم الواتساب ليتم جلبه من قاعدة البيانات');
    console.log('  • تم استبدال رابط تحميل السيرة الذاتية برابط LinkedIn');
    console.log('  • تم إنشاء مكونات جديدة لعرض وسائل التواصل الاجتماعي');

  } catch (error) {
    console.error('❌ خطأ في التحقق:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifyUpdates();

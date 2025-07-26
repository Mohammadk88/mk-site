const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateWhatsAppNumber() {
  try {
    console.log('🔄 تحديث رقم الواتساب...');

    // احذف أرقام الواتساب القديمة
    await prisma.contactInfo.deleteMany({
      where: {
        type: 'phone'
      }
    });

    // أضف الرقم الجديد الصحيح - ضع رقمك الحقيقي هنا
    const correctWhatsAppNumber = '+905376061625'; // ضع رقمك الصحيح هنا
    
    const whatsappContacts = [
      {
        type: 'phone',
        value: correctWhatsAppNumber,
        label: 'WhatsApp',
        lang: 'en',
        isPrimary: true
      },
      {
        type: 'phone',
        value: correctWhatsAppNumber,
        label: 'واتساب',
        lang: 'ar',
        isPrimary: true
      },
      {
        type: 'phone',
        value: correctWhatsAppNumber,
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

    console.log('✅ تم تحديث رقم الواتساب بنجاح!');
    console.log('📞 الرقم الجديد:', correctWhatsAppNumber);

  } catch (error) {
    console.error('❌ خطأ في تحديث رقم الواتساب:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateWhatsAppNumber();

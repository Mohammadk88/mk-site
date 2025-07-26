#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateWhatsApp() {
  console.log('🔄 تحديث رقم الواتساب في جميع الجداول...\n');

  try {
    // تحديث ContactInfo
    await prisma.contactInfo.updateMany({
      where: {
        type: 'phone'
      },
      data: {
        value: '+905317255372'
      }
    });

    // التحقق من التحديث
    const updatedContacts = await prisma.contactInfo.findMany({
      where: { type: 'phone' }
    });

    console.log('📞 تم تحديث أرقام الهاتف:');
    updatedContacts.forEach(contact => {
      console.log(`   ${contact.lang}: ${contact.value} - ${contact.label}`);
    });

    console.log('\n✅ تم تحديث رقم الواتساب بنجاح!');

  } catch (error) {
    console.error('❌ خطأ في التحديث:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateWhatsApp();

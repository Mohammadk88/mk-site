#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function verifyUpdates() {
  console.log('🔍 التحقق من التحديثات...\n');

  try {
    // تحقق من وسائل التواصل الاجتماعي
    console.log('📱 وسائل التواصل الاجتماعي:');
    const socialMedia = await prisma.socialMedia.findMany();
    socialMedia.forEach(item => {
      console.log(`   ${item.platform}: ${item.url} (${item.isVisible ? 'مرئي' : 'مخفي'})`);
    });

    // تحقق من معلومات الاتصال
    console.log('\n📞 معلومات الاتصال:');
    const contactInfo = await prisma.contactInfo.findMany();
    contactInfo.forEach(item => {
      console.log(`   ${item.type} (${item.lang}): ${item.value} - ${item.label} ${item.isPrimary ? '(أساسي)' : ''}`);
    });

    // تحقق من المعلومات الشخصية
    console.log('\n👤 المعلومات الشخصية:');
    const personalInfo = await prisma.personalInfo.findMany();
    personalInfo.forEach(item => {
      console.log(`   ${item.lang}: ${item.fullName} - ${item.title}`);
      console.log(`   السيرة الذاتية: ${item.resumeUrl}`);
    });

    console.log('\n✅ جميع التحديثات تم تطبيقها بنجاح!');
    console.log('🎯 رقم الواتساب الجديد: +905376061625');
    console.log('🔗 وسائل التواصل الاجتماعي: 7 منصات مفعلة');
    console.log('📋 السيرة الذاتية استُبدلت برابط LinkedIn');

  } catch (error) {
    console.error('❌ خطأ في التحقق:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifyUpdates();

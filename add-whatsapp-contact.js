import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addWhatsAppContact() {
  try {
    console.log('📱 Adding WhatsApp contact to database...');
    
    // Check if WhatsApp contact already exists
    const existingContact = await prisma.contactInfo.findFirst({
      where: { 
        type: 'phone',
        isPrimary: true 
      }
    });

    if (existingContact) {
      console.log('✅ WhatsApp contact already exists:', existingContact.value);
      return;
    }

    // Add WhatsApp contact info for each language
    const languages = ['en', 'ar', 'tr'];
    
    for (const lang of languages) {
      await prisma.contactInfo.create({
        data: {
          type: 'phone',
          value: '905xxxxxxxxx', // Default placeholder - can be updated from admin
          label: lang === 'ar' ? 'واتساب' : lang === 'tr' ? 'WhatsApp' : 'WhatsApp',
          lang: lang,
          isPrimary: true
        }
      });
    }

    console.log('✅ WhatsApp contact added successfully for all languages');
    console.log('📝 Note: Update the phone number from the admin panel');
    
  } catch (error) {
    console.error('❌ Error adding WhatsApp contact:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addWhatsAppContact();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateProfileImage() {
  console.log('🔄 Updating profile image...');

  try {
    // Update the avatar URL to a better professional image
    const result = await prisma.personalInfo.updateMany({
      data: {
        avatar: '/images/avatar.jpg'
      }
    });

    console.log(`✅ Updated ${result.count} profile(s) with new avatar image`);
  } catch (error) {
    console.error('❌ Error updating profile image:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateProfileImage();

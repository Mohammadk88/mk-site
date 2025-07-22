import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/lib/auth';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hashPassword('admin123');
  
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@mohammad.com' },
    update: {
      password: hashedPassword,
      name: 'Mohammad'
    },
    create: {
      email: 'admin@mohammad.com',
      name: 'Mohammad',
      password: hashedPassword,
    },
  });

  console.log('Admin user created/updated:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

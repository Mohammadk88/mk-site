const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function updateAdminPassword() {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@mohammadkfelati.com'
    const adminPassword = process.env.ADMIN_PASSWORD || 'M@z#K_mk97&N_k88'
    
    console.log('🔄 Updating admin password from environment variables...')
    console.log('Admin Email:', adminEmail)
    
    // Hash the new password
    const hashedPassword = await bcrypt.hash(adminPassword, 14)
    
    // Update the admin user
    const admin = await prisma.admin.upsert({
      where: { email: adminEmail },
      update: {
        password: hashedPassword,
        name: 'Mohammad Kfelati'
      },
      create: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Mohammad Kfelati'
      }
    })

    console.log('✅ Admin user updated successfully:', admin.email)
    console.log('✅ New password has been hashed and stored')
  } catch (error) {
    console.error('❌ Error updating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateAdminPassword()

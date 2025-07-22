import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from './prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'your-fallback-secret'

export interface AdminUser {
  id: string
  email: string
  name: string
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

// Generate JWT token
export function generateToken(admin: AdminUser): string {
  return jwt.sign(
    { 
      id: admin.id, 
      email: admin.email, 
      name: admin.name 
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

// Verify JWT token
export function verifyToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminUser
    return decoded
  } catch {
    return null
  }
}

// Authenticate admin
export async function authenticateAdmin(email: string, password: string): Promise<AdminUser | null> {
  const admin = await prisma.admin.findUnique({
    where: { email }
  })

  if (!admin) {
    return null
  }

  const isValid = await verifyPassword(password, admin.password)
  if (!isValid) {
    return null
  }

  return {
    id: admin.id,
    email: admin.email,
    name: admin.name
  }
}

// Initialize admin user if not exists
export async function initializeAdmin(): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@mohammadkfelati.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
  
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail }
  })

  if (!existingAdmin) {
    const hashedPassword = await hashPassword(adminPassword)
    await prisma.admin.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Admin'
      }
    })
    console.log('Admin user created:', adminEmail)
  }
}

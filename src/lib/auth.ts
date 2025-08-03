import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from './prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secure-secret-key-change-this-in-production'

export interface AdminUser {
  id: string
  email: string
  name: string
  role?: string
  isActive?: boolean
}

// Hash password with higher complexity
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 14)
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

// Generate JWT token with enhanced security
export function generateToken(admin: AdminUser): string {
  return jwt.sign(
    { 
      id: admin.id, 
      email: admin.email, 
      name: admin.name,
      role: admin.role || 'admin',
      iat: Math.floor(Date.now() / 1000)
    },
    JWT_SECRET,
    { 
      expiresIn: '24h', // Reduced from 7d for better security
      issuer: 'mohammad-portfolio',
      audience: 'admin-panel'
    }
  )
}

// Verify JWT token with enhanced validation
export function verifyToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: 'mohammad-portfolio',
      audience: 'admin-panel'
    }) as jwt.JwtPayload & AdminUser
    
    return {
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
      role: decoded.role,
      isActive: true
    }
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}

// Authenticate admin with enhanced security
export async function authenticateAdmin(email: string, password: string): Promise<AdminUser | null> {
  try {
    const admin = await prisma.admin.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true
      }
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
      name: admin.name,
      role: 'admin',
      isActive: true
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return null
  }
}

// Get all admin users
export async function getAllAdmins(): Promise<Omit<AdminUser, 'password'>[]> {
  try {
    const admins = await prisma.admin.findMany({
      select: {
        id: true,
        email: true,
        name: true
      }
    })
    return admins.map(admin => ({
      ...admin,
      role: 'admin',
      isActive: true
    }))
  } catch (error) {
    console.error('Error fetching admins:', error)
    return []
  }
}

// Create new admin user
export async function createAdmin(data: {
  email: string
  password: string
  name: string
}): Promise<AdminUser | null> {
  try {
    const hashedPassword = await hashPassword(data.password)
    const admin = await prisma.admin.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name
      }
    })
    
    return {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: 'admin',
      isActive: true
    }
  } catch (error) {
    console.error('Error creating admin:', error)
    return null
  }
}

// Update admin user
export async function updateAdmin(id: string, data: {
  email?: string
  name?: string
  password?: string
}): Promise<AdminUser | null> {
  try {
    const updateData: Record<string, string> = {}
    
    if (data.email) updateData.email = data.email
    if (data.name) updateData.name = data.name
    if (data.password) updateData.password = await hashPassword(data.password)
    
    const admin = await prisma.admin.update({
      where: { id },
      data: updateData
    })
    
    return {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: 'admin',
      isActive: true
    }
  } catch (error) {
    console.error('Error updating admin:', error)
    return null
  }
}

// Delete admin user
export async function deleteAdmin(id: string): Promise<boolean> {
  try {
    await prisma.admin.delete({
      where: { id }
    })
    return true
  } catch (error) {
    console.error('Error deleting admin:', error)
    return false
  }
}

// Initialize admin user if not exists
export async function initializeAdmin(): Promise<void> {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@mohammadkfelati.com'
    const adminPassword = process.env.ADMIN_PASSWORD
    
    if (!adminPassword) {
      console.warn('ADMIN_PASSWORD not set in environment variables. Please set it for security.')
      return
    }
    
    // Always update/create admin user from environment variables
    const hashedPassword = await hashPassword(adminPassword)
    
    await prisma.admin.upsert({
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
    
    console.log('Admin user synchronized with environment variables:', adminEmail)
  } catch (error) {
    console.error('Error initializing admin:', error)
  }
}

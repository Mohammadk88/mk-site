import { NextRequest, NextResponse } from 'next/server'
import { authenticateAdmin, generateToken, initializeAdmin } from '@/lib/auth'
import { headers } from 'next/headers'

// Rate limiting store (in production, use Redis)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

export async function POST(request: NextRequest) {
  try {
    // Ensure admin user is synchronized with environment variables
    await initializeAdmin()
    
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Get client IP for rate limiting
    const headersList = await headers()
    const forwarded = headersList.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    // Rate limiting check
    const now = Date.now()
    const attempts = loginAttempts.get(ip) || { count: 0, lastAttempt: 0 }
    
    // Reset attempts if more than 15 minutes have passed
    if (now - attempts.lastAttempt > 15 * 60 * 1000) {
      attempts.count = 0
    }

    // Block if too many attempts
    if (attempts.count >= 5) {
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      )
    }

    const admin = await authenticateAdmin(email, password)
    if (!admin) {
      // Increment failed attempts
      attempts.count++
      attempts.lastAttempt = now
      loginAttempts.set(ip, attempts)

      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Reset attempts on successful login
    loginAttempts.delete(ip)

    const token = generateToken(admin)

    const response = NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name
      }
    })

    // Set secure HTTP-only cookie
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/admin'
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

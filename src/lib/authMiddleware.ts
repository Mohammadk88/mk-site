import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

export async function authMiddleware(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  const user = verifyToken(token)
  if (!user) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export function requireAuth(handler: (request: NextRequest) => Promise<Response>) {
  return async (request: NextRequest) => {
    const authResult = await authMiddleware(request)
    if (authResult.status === 302) {
      return authResult
    }
    return handler(request)
  }
}

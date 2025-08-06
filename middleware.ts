import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Supported locales
const locales = ['en', 'ar', 'tr'] as const
const defaultLocale = 'en'

// Function to detect user's preferred language
function getPreferredLocale(request: NextRequest): string {
  // Get Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  // Parse the Accept-Language header and find supported languages
  const preferredLanguages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
    .map(lang => {
      // Handle language-country codes (e.g., en-US -> en)
      return lang.split('-')[0]
    })

  // Find the first supported language
  for (const lang of preferredLanguages) {
    if ((locales as readonly string[]).includes(lang)) {
      return lang
    }
  }

  // Fallback to default locale
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Security headers
  const response = NextResponse.next()
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Handle locale redirection for root path and paths without locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // If accessing root path or path without locale (excluding admin, api, etc.)
  if (
    pathnameIsMissingLocale && 
    !pathname.startsWith('/admin') && 
    !pathname.startsWith('/api') && 
    !pathname.startsWith('/_next') && 
    !pathname.startsWith('/studio') &&
    !pathname.startsWith('/simple') &&
    !pathname.startsWith('/test') &&
    pathname !== '/favicon.ico' &&
    pathname !== '/robots.txt' &&
    pathname !== '/sitemap.xml'
  ) {
    const preferredLocale = getPreferredLocale(request)
    
    // Redirect to the appropriate locale
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url))
    } else {
      return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url))
    }
  }

  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to login page
    if (request.nextUrl.pathname === '/admin/login') {
      return response
    }

    // Check for admin token
    const token = request.cookies.get('admin-token')?.value
    
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Basic token validation (you might want to verify JWT here)
    try {
      // In a production environment, you should verify the JWT token here
      // For now, we'll just check if the token exists
      if (!token || token.length < 10) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
    } catch (error) {
      console.error('Token validation error:', error)
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    // Match all paths except those that should be excluded
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}

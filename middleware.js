// middleware.js (root level mein rakhna hai, app folder mein nahi)
import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  console.log('Middleware triggered for:', hostname) // debugging ke liye

  // Check for searchdholera subdomain
  if (hostname.startsWith('searchdholera.')) {
    console.log('Subdomain matched, rewriting to /search-dholera')
    url.pathname = `/search-dholera${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
// middleware.js (ROOT LEVEL)
import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host')
  const { pathname } = request.nextUrl
  
  console.log('🔥 MIDDLEWARE TRIGGERED')
  console.log('Host:', hostname)
  console.log('Path:', pathname)
  console.log('Full URL:', request.url)
  
  // Debug: Log all headers
  console.log('All Headers:', Object.fromEntries(request.headers.entries()))
  
  if (hostname?.includes('searchdholera')) {
    console.log('✅ SUBDOMAIN MATCH - REWRITING TO /search-dholera')
    const url = request.nextUrl.clone()
    url.pathname = '/search-dholera'
    
    const response = NextResponse.rewrite(url)
    response.headers.set('x-middleware-rewrite', '/search-dholera')
    return response
  }
  
  console.log('❌ No subdomain match')
  return NextResponse.next()
}

// Force runtime and matcher
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
  runtime: 'edge', // Force edge runtime
}
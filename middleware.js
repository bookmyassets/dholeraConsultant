// middleware.js (ROOT LEVEL - not in app folder)
import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host')
  const url = request.nextUrl.clone()
  
  // Force log every request
  console.log('🔥 MIDDLEWARE RUNNING:', hostname, url.pathname)
  
  // Exact match check
  if (hostname === 'searchdholera.dholeraconsultants.com') {
    console.log('✅ SUBDOMAIN DETECTED - REWRITING')
    url.pathname = '/search-dholera'
    return NextResponse.rewrite(url)
  }
  
  console.log('❌ Normal request, passing through')
  return NextResponse.next()
}

// Apply to ALL routes
export const config = {
  matcher: '/:path*'
}
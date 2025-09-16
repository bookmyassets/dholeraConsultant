// middleware.js (root level mein rakhna hai)
import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Debug logs (Vercel function logs mein dikhega)
  console.log('=== MIDDLEWARE DEBUG ===')
  console.log('Hostname:', hostname)
  console.log('Pathname:', url.pathname)
  console.log('Full URL:', request.url)

  // Multiple checks for subdomain
  const isSearchDholera = 
    hostname === 'searchdholera.bma.com' || 
    hostname.includes('searchdholera') ||
    hostname.startsWith('searchdholera.')

  if (isSearchDholera) {
    console.log('✅ SUBDOMAIN MATCHED! Rewriting...')
    
    // Root path handle karo
    if (url.pathname === '/') {
      url.pathname = '/search-dholera'
    } else {
      url.pathname = `/search-dholera${url.pathname}`
    }
    
    console.log('Rewriting to:', url.pathname)
    return NextResponse.rewrite(url)
  }

  console.log('❌ No subdomain match, continuing...')
  return NextResponse.next()
}

// Simplified matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except static files
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
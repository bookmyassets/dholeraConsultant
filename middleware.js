// middleware.js (ROOT LEVEL)
import { NextResponse } from 'next/server'

export function middleware(request) {
  // Get hostname
  const hostname = request.headers.get('host')
  
  console.log('=== MIDDLEWARE START ===')
  console.log('Hostname:', hostname)
  console.log('URL:', request.url)
  console.log('Method:', request.method)
  
  // Check if it's the subdomain
  if (hostname === 'searchdholera.dholeraconsultants.com') {
    console.log('✅ SUBDOMAIN DETECTED!')
    
    // Clone the URL
    const url = request.nextUrl.clone()
    
    // Set new pathname
    url.pathname = '/search-dholera'
    
    console.log('Rewriting to:', url.pathname)
    console.log('=== MIDDLEWARE END ===')
    
    // Return rewrite
    return NextResponse.rewrite(url)
  }
  
  console.log('❌ Not subdomain, passing through')
  console.log('=== MIDDLEWARE END ===')
  
  // Continue to next
  return NextResponse.next()
}

// Simple matcher
export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)']
}
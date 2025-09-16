// app/middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const url = req.nextUrl.clone()
  const host = req.headers.get('host') || ''

  // example: searchDholera.bma.com
  if (host.startsWith('searchdholera.')) {
    // rewrite to an internal path where your "slice" lives
    url.pathname = `/search-dholera${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // otherwise do nothing (normal site)
  return NextResponse.next()
}

// apply middleware to all routes (or restrict via matcher)
export const config = {
  matcher: ['/:path*']
}

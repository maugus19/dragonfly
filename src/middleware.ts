import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.url.includes('/api/v1/vera')) {
    return NextResponse.redirect(new URL('https://hugs.company/hug/DR0OfTzNS4'))
  }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}
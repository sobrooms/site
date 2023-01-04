import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // redirects
  if (request.nextUrl.pathname.endsWith('/discord')) {
    return NextResponse.rewrite(new URL('https://discord.gg/JqUAc4T224', request.url))
  }
  if (request.nextUrl.pathname.endsWith('/github')) {
    return NextResponse.rewrite(new URL('https://github.com/sobrooms', request.url))
  }
  if (request.nextUrl.pathname.endsWith('/site')) {
    return NextResponse.rewrite(new URL('https://github.com/sobrooms/site', request.url))
  }
}
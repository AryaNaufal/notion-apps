import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const getUserCookie = request.cookies.get('user');

  if (getUserCookie) {
    return response;
  }

  return NextResponse.redirect(new URL('/auth', request.url))
}

export const config = {
  matcher: '/',
}
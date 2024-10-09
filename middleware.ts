import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { routes } from '@constants';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  const isHomePage = req.nextUrl.pathname === '/';

  // If no token and trying to access the homepage, redirect to /auth
  if (!token && isHomePage) {
    return NextResponse.redirect(new URL(routes.SIGN_IN, req.url));
  }

  // If token exists or accessing non-protected routes, proceed normally
  return NextResponse.next();
}

// Enable middleware only for the following routes
export const config = {
  matcher: ['/protected'],
};

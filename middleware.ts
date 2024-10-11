import { NextResponse } from 'next/server';

import { routes } from '@/constants/routes';
import { auth } from '@/lib/auth';

export default auth(function middleware(req) {
  const {
    auth,
    url,
    nextUrl: { pathname },
  } = req;
  const isAuthenticated = !!auth;

  if (pathname.startsWith(routes.SIGN_IN) && isAuthenticated) {
    return NextResponse.redirect(new URL('/', url));
  }

  if (['/'].includes(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL(routes.SIGN_IN, url));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

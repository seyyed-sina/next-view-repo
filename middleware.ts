import { NextResponse } from 'next/server';

import { routes } from '@/constants/routes';
import { auth } from '@/lib/auth';

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req });

//   // If no token and trying to access the homepage, redirect to signing page
//   if (!token && req.nextUrl.pathname !== routes.SIGN_IN) {
//     return NextResponse.redirect(new URL(routes.SIGN_IN, req.url));
//   }

//   return NextResponse.next();
// }

// // Enable middleware only for the following routes
// export const config = {
//   matcher: ['/', '/dashboard'],
// };

// export { auth } from '@/lib/auth';

// export default auth((req) => {
//   console.log('req auth in middleware: ', req.auth);
//   if (!req.auth && req.nextUrl.pathname !== routes.SIGN_IN) {
//     const newUrl = new URL(routes.SIGN_IN, req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: ['/'],
// };

// import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from '@/lib/routes';

// const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;
  console.log('req.auth: ', req.auth);
  console.log('isAuthenticated: ', isAuthenticated);

  if (!isAuthenticated) {
    return Response.redirect(new URL(routes.SIGN_IN, nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/'],
};

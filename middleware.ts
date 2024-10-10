// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';

import { routes } from '@/constants/routes';
import { auth } from '@/lib/auth';

// import { routes } from '@constants';

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

export { auth as middleware } from '@/lib/auth';

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== routes.SIGN_IN) {
    const newUrl = new URL(routes.SIGN_IN, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };

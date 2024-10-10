import { handlers } from '@/lib/auth';

// export const GET = auth(function GET(req) {
//   console.log('req.auth in route: ', req.auth);
//   if (req.auth) return NextResponse.json(req.auth);
//   return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
// });
// export async function GET(req: Request) {
//   console.log('req: ', req);
//   const searchParams = new URL(req.url).searchParams;
//   return signIn('github', {
//     redirectTo: searchParams.get('callbackUrl') ?? '',
//   });
// }

export const { POST, GET } = handlers;

export const runtime = 'edge';

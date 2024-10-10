import { NextResponse } from 'next/server';

import { auth, handlers } from '@/lib/auth';

export const GET = auth(function GET(req) {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
});

export const { POST } = handlers;
export const runtime = 'edge';

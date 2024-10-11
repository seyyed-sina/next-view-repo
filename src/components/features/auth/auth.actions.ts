'use server';

import { signIn, signOut } from '@/lib/auth';

export const singInAction = async () => {
  await signIn('github', { redirectTo: '/' });
};

export const singOutAction = async () => {
  await signOut();
};

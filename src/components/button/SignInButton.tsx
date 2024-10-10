import { IconBrandGithub } from '@tabler/icons-react';

import { signIn } from '@/lib/auth';

import { Button } from './Button';

export const SignInButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github', { redirectTo: '/' });
      }}>
      <Button type="submit" className="gap-2 mx-auto bg-slate-700">
        <IconBrandGithub size={20} />
        Sign in with GitHub
      </Button>
    </form>
  );
};

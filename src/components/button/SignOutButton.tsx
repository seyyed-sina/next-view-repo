import { signOut } from '@/lib/auth';

import { Button } from './Button';

export const SignOutButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}>
      <Button type="submit" variant="primary">
        Sign Out
      </Button>
    </form>
  );
};

SignOutButton.displayName = 'SignOutButton';

'use client';
import { signIn } from 'next-auth/react';

export const SignIn = () => {
  return (
    <div className="text-white">
      <h1>Sign in to view your repositories</h1>
      <button onClick={() => void signIn('github')}>Sign in with GitHub</button>
    </div>
  );
};

SignIn.displayName = 'SignIn';

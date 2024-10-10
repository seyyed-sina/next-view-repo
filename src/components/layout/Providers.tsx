'use client';
import { PropsWithChildren } from 'react';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { MainLayout } from '@components';
import { routes } from '@constants';

type ProvidersProps = {
  session: Session | null;
  children: React.ReactNode;
} & PropsWithChildren;

export const Providers = ({ session, children }: ProvidersProps) => {
  return (
    <SessionProvider session={session} basePath={routes.SIGN_IN}>
      {children}
    </SessionProvider>
  );
};

Providers.displayName = 'Providers';

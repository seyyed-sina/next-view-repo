'use client';
import { PropsWithChildren } from 'react';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { MainLayout } from '@components';

type ProvidersProps = {
  session: Session | null;
  children: React.ReactNode;
} & PropsWithChildren;

export const Providers = ({ session, children }: ProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <MainLayout>{children}</MainLayout>
    </SessionProvider>
  );
};

Providers.displayName = 'Providers';

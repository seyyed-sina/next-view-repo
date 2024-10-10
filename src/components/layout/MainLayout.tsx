import { memo, PropsWithChildren } from 'react';

import { MainHeader } from '@components';

type MainLayoutProps = PropsWithChildren;

export const MainLayout = memo(({ children }: MainLayoutProps) => {
  return (
    <main className="min-h-dvh bg-gray-900 text-white">
      <MainHeader />
      {children}
    </main>
  );
});

MainLayout.displayName = 'MainLayout';

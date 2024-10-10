import { memo, PropsWithChildren } from 'react';

type MainLayoutProps = PropsWithChildren;

export const MainLayout = memo(({ children }: MainLayoutProps) => {
  return (
    <main className="min-h-dvh bg-gray-900 text-white">
      {children}
    </main>
  );
});

MainLayout.displayName = 'MainLayout';

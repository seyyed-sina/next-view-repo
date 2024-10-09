import { memo, PropsWithChildren } from 'react';

type MainLayoutProps = PropsWithChildren;

export const MainLayout = memo(({ children }: MainLayoutProps) => {
  return <main className="min-h-dvh bg-slate-800 text-white">{children}</main>;
});

MainLayout.displayName = 'MainLayout';

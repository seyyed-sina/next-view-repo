import { auth } from '@/lib/auth';
import { MainLayout, Providers } from '@components';
import { inter } from '@constants';

import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MainLayout>
          <Providers session={session}>{children}</Providers>
        </MainLayout>
      </body>
    </html>
  );
}

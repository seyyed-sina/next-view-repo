import Image from 'next/image';

import { auth } from '@/lib/auth';
import { SignOutButton } from '@components';

export const MainHeader = async () => {
  const session = await auth();
  return (
    <header className="container">
      <div
        className="flex items-center justify-between border-b border-gray-500 border-solid 
    py-5 gap-3">
        <h1 className="text-lg text-gray-100 flex items-center gap-2">
          <span className="size-6">
            <Image
              src={session?.user?.image ?? ''}
              alt={session?.user?.name ?? ''}
              width={24}
              height={24}
              className="rounded-full object-cover bg-gray-500"
            />
          </span>
          Welcome, {session?.user?.name}
        </h1>
        <SignOutButton />
      </div>
    </header>
  );
};

MainHeader.displayName = 'MainHeader';

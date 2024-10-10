import { auth } from '@/lib/auth';
import { SignOutButton } from '@components';

export const MainHeader = async () => {
  const session = await auth();
  return (
    <header className="flex items-center justify-between border-b border-gray-500 border-solid py-5">
      <h1 className="text-lg">Welcome, {session?.user?.name}</h1>
      <SignOutButton />
    </header>
  );
};

MainHeader.displayName = 'MainHeader';

import { Suspense } from 'react';

import { fetchRepoList } from '@/components/features/repositories/repo.data';
import { LoadingContent, MainHeader, RepoList } from '@components';

export default async function Home() {
  const repoList = await fetchRepoList();

  return (
    <>
      <MainHeader />
      <Suspense fallback={<LoadingContent />}>
        <RepoList repos={repoList} />
      </Suspense>
    </>
  );
}

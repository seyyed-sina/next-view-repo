import { RepoItem } from '@components';

import { Repo } from '../repo.types';

interface Props {
  repos?: Repo[] | null;
}

export const RepoList = ({ repos }: Props) => {
  // const { data: session, status } = useSession();
  // console.log('Session:', session, 'Status:', status);

  return (
    <div className="container flex flex-col gap-5">
      {repos && (
        <ul className="flex flex-col">
          {repos?.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </ul>
      )}
    </div>
  );
};

RepoList.displayName = 'RepoList';

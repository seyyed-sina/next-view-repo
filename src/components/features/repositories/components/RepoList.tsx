import { RepoItem } from '@components';

import { Repo } from '../repo.types';
import { sortRepositoriesByUpdateTime } from '../repo.utils';

interface Props {
  repos: Repo[];
}

export const RepoList = ({ repos }: Props) => {
  const sortedRepos = sortRepositoriesByUpdateTime(repos);
  return (
    <div className="container flex flex-col gap-5">
      {sortedRepos && (
        <ul className="flex flex-col">
          {repos?.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </ul>
      )}
      {sortedRepos?.length === 0 && (
        <div className="flex items-center justify-center text-center py-5 text-base text-gray-500">
          No repositories found
        </div>
      )}
    </div>
  );
};

RepoList.displayName = 'RepoList';

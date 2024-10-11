import { Repo } from './repo.types';

export const sortRepositoriesByUpdateTime = (repos: Repo[]) => {
  return repos.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
  );
};

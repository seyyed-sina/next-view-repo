'use client'
import { useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import { Repo } from '../repo.types';

export const RepoList = () => {
  const { data: session } = useSession();
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (session?.accessToken) {
        await fetch('https://api.github.com/user/repos', {
          headers: {
            Authorization: `token ${session.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setRepos(data));
      }
    }
    void fetchData();
  }, [session]);

  return (
    <div>
      <h1>Your GitHub Repositories</h1>
      {repos.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        repos.map((repo) => (
          <div key={repo.name}>
            <h3>{repo.name}</h3>
            <p>
              Last Updated: {new Date(repo.updated_at).toLocaleDateString()}
            </p>
            <p>Owner: {repo.owner.login}</p>
            <a href={repo.zipball_url} download>
              Download as ZIP
            </a>
          </div>
        ))
      )}
    </div>
  );
};

RepoList.displayName = 'RepoList';

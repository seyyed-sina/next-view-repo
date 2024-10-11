import { memo, useMemo } from 'react';

import { IconDownload, IconStar } from '@tabler/icons-react';
import Image from 'next/image';

import { githubLangColor } from '../repo.data';
import { Repo } from '../repo.types';

interface RepoItemProps {
  repo: Repo;
}

export const RepoItem = memo(({ repo }: RepoItemProps) => {
  const zipFile = `https://github.com/${repo.owner.login}/${repo.name}/archive/refs/heads/main.zip`;
  const repoName = `https://github.com/${repo.owner.login}/${repo.name}`;

  const langColorStyle = useMemo(() => {
    return {
      backgroundColor: githubLangColor[repo.language],
    };
  }, [repo.language]);

  return (
    <li className="flex sm:items-center flex-col sm:flex-row justify-between gap-3 w-full py-7 border-b border-solid border-gray-700 last:border-0">
      <div className="flex flex-col gap-3">
        <h3 className="break-all">
          <a
            className="text-blue-600 text-xl font-medium mr-3"
            target="_blank"
            rel="noreferrer"
            href={repoName}>
            {repo.name}
          </a>
          <span className="border border-solid rounded-full text-xs inline-flex items-center justify-center text-center px-2 py-1 bg-gray-800 text-gray-400 border-gray-700 capitalize relative -top-0.5">
            {repo.visibility}
          </span>
        </h3>
        {repo.description && (
          <p className="text-sm text-gray-500 max-w-lg leading-6">
            {repo.description}
          </p>
        )}
        <div className="flex items-center gap-5 text-xs text-gray-500">
          {repo.language && (
            <div className="flex items-center gap-1">
              <span
                className="size-3 shrink-0 rounded-full"
                style={langColorStyle}
              />
              <span className="grow">{repo.language}</span>
            </div>
          )}
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <IconStar size={16} className="shrink-0" />
              {repo.stargazers_count}
            </span>
          )}
          <div className="flex items-center gap-2">
            <span className="size-4 shrink-0 rounded-full">
              <Image
                src={repo.owner.avatar_url ?? ''}
                alt={repo.owner.login ?? ''}
                width={16}
                height={16}
                className="rounded-full object-cover bg-gray-500"
              />
            </span>
            By: {repo.owner.login ?? ''}
          </div>
        </div>
      </div>
      <div className="flex items-center sm:flex-col gap-3 sm:items-end shrink-0">
        <a
          href={zipFile}
          className="text-gray-300 text-sm p-2 border border-solid rounded-md border-gray-700 bg-gray-800 
        flex items-center gap-2"
          target="_blank"
          rel="noreferrer">
          <IconDownload size={20} className="shrink-0" />
          Download Zip
        </a>
        <time
          className=" text-xs text-gray-500"
          dateTime={repo.updated_at}
          title={new Date(repo.updated_at).toLocaleDateString('en-US')}>
          Last Update: {' '}
          {new Date(repo.updated_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year:
              new Date(repo.updated_at).getFullYear() !==
              new Date().getFullYear()
                ? 'numeric'
                : undefined,
          })}
        </time>
      </div>
    </li>
  );
});

RepoItem.displayName = 'RepoItem';

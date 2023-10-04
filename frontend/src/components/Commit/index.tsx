import { GithubCommit } from 'interfaces/services/commit.interface';
import { FC } from 'react';

import { formatDate } from 'utils/formatDate';

type CommitProps = {
  data: GithubCommit;
};

export const Commit: FC<CommitProps> = ({ data }) => {
  const { author, message, date, htmlUrl, sha } = data;
  return (
    <div className="mb-4 ml-4 border rounded p-2 border-gray-700 shadow-md px-4">
      <div className="absolute w-3  h-3 bg-gray-200 rounded-full mt-2 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      <div className="flex items-center">
        <img className="w-16 h-16 rounded-md mr-5" src={author.avatarUrl} />
        <div className="flex flex-col justify-center">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {formatDate(date)}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
            {message}
          </h3>
          <div className="flex gap-4">
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {author.login}
            </p>
            <a
              href={htmlUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              #{sha.slice(0, 7)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

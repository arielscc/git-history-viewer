import { Commit } from 'components/Commit';
import { GithubCommit } from 'interfaces/services/commit.interface';
import { FC } from 'react';

type CommitProps = {
  commits: GithubCommit[];
  lastItemRef: (node: HTMLDivElement) => void;
};

export const CommitList: FC<CommitProps> = ({ commits, lastItemRef }) => {
  return (
    <div className="relative border-l border-gray-600">
      {commits.map((commit, index) => (
        <div key={commit.sha}>
          {commits.length === index + 1 ? (
            <div ref={lastItemRef}>
              <Commit data={commit} />
            </div>
          ) : (
            <Commit data={commit} />
          )}
        </div>
      ))}
    </div>
  );
};

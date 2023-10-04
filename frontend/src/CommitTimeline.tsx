import { BASE_REPO_URL } from 'commons/constants';
import { CommitList } from 'components/CommitList';
import { Error } from 'components/Error';
import { Footer } from 'components/Footer';
import Header from 'components/Header';
import Loader from 'components/Loader/Loader';
import { GithubCommit } from 'interfaces/services/commit.interface';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchCommits } from 'services/commitService';
import { TextInput } from './components/TextInput';

const CommitTimeline = () => {
  const [commits, setCommits] = useState<GithubCommit[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(BASE_REPO_URL);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    getCommits();
  }, [page]);

  const getCommits = async (loadNewCommits?: boolean) => {
    try {
      if (loadNewCommits) {
        setIsLoading(true);
        setCommits([]);
        setPage(1);
        setError('');
      }

      const response = await fetchCommits(url, page);
      if (typeof response === 'string') {
        return setError(response);
      }

      setCommits((prevCommits) => {
        if (prevCommits) {
          return [...prevCommits, ...response].filter(
            (commit, index, self) =>
              index === self.findIndex((t) => t.sha === commit.sha)
          );
        } else {
          return response;
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const lastItemRef = useCallback((node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="py-12 sm:pb-40 sm:pt-24 lg:pt-20 lg:pb-8">
        <div className="relative mx-auto max-w-4xl px-4 sm:static sm:px-6 lg:px-8">
          <Header />
          <TextInput url={url} setUrl={setUrl} getCommits={getCommits} />
          {isLoading && <Loader />}
          {!isLoading && error && <Error message={error} />}
          {!error && commits && (
            <CommitList commits={commits} lastItemRef={lastItemRef} />
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CommitTimeline;

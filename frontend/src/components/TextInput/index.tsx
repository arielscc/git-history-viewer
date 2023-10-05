import { SearchIcon } from 'assets/icons/SearchIcon';
import { FC } from 'react';

type TextInputProps = {
  setUrl: (url: string) => void;
  url: string;
  getCommits: (loadPressed?: boolean) => void;
};

export const TextInput: FC<TextInputProps> = ({ url, setUrl, getCommits }) => {
  return (
    <form className="mb-12">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder:text-gray-400 text-white focus:border-blue-500 focus:outline-none"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();
            getCommits(true);
          }}
        >
          Load Commits
        </button>
      </div>
    </form>
  );
};

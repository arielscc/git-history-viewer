import { FC } from 'react';

type ErrorProps = {
  message: string;
};

export const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-96">
      <p className="text-white p-3 border rounded bg-pink-700 w-3/5 text-center">
        {message}
      </p>
    </div>
  );
};

import { Spinner } from 'components/Loader/Spinner';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <Spinner />
    </div>
  );
};

export default Loader;

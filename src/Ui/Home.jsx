import { useSelector } from 'react-redux';
import CreateUser from '../Features/User/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 px-4 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
         continue ordering 
        </Button>
      )}
    </div>
  );
}

export default Home;

import { useContext } from 'react';
import AppContext from '../context';

const Child = () => {
  const { count, setCount } = useContext(AppContext);
  return (
    <>
      <h3>child</h3>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

export default Child;

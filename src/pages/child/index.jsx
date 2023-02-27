import { useContext } from 'react';
import AppContext from '../context';
import { useDispatch, useSelector } from 'umi';

const Child = () => {
  const { count, setCount } = useContext(AppContext);
  const dva = useSelector((state) => state.dva);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch({ type: 'global/setTitle', payload: { a: 11, b: 22 } });
  };

  return (
    <>
      <h3>child</h3>
      <div>{dva}</div>
      <button onClick={clickHandler}>click</button>
    </>
  );
};

export default Child;

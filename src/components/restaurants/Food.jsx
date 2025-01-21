import { useCount } from '../../hooks/useCount';

export const Food = ({ foodName }) => {
  const { count, increment, decrement } = useCount(0);

  return (
    <>
      <span>{foodName}</span>
      <button onClick={increment}>-</button>
      <span>{count}</span>
      <button onClick={decrement}>+</button>
    </>
  );
};

import { useCount } from '../../hooks/useCount';

export const Food = ({ foodName }) => {
  const { count, increment, decrement } = useCount(0);

  return (
    <>
      <span>{foodName}</span>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

import { useCount } from '../../hooks/useCount';

export const CounterButton = () => {
  const { count, increment, decrement } = useCount(0);

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

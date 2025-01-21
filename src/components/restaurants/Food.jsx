import { useCount } from '../../hooks/useCount';

export const Food = ({ foodName }) => {
  const { count, onIncrement, onDecrement } = useCount(0);

  return (
    <>
      <span>{foodName}</span>
      <button onClick={onDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </>
  );
};

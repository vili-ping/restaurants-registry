import { useCount } from '../../hooks/useCount';

export const CounterButton = () => {
  const { count, increment, decrement } = useCount(0);

  return (
    <span>
      <button
        type="button"
        onClick={decrement}
      >
        -
      </button>
      <span>{count}</span>
      <button
        type="button"
        onClick={increment}
      >
        +
      </button>
    </span>
  );
};

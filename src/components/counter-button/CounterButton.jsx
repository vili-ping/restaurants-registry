import { useCount } from '../../hooks/useCount';

export const CounterButton = ({ initialNumber, maxNumber, minNumber }) => {
  const { count, increment, decrement } = useCount(
    initialNumber,
    maxNumber,
    minNumber
  );

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

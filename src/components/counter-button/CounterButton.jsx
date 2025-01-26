import { useCount } from '../../hooks/useCount';

export const CounterButton = ({
  initialNumber,
  maxNumber,
  minNumber,
  onChange,
}) => {
  const { count, increment, decrement } = useCount(
    initialNumber,
    maxNumber,
    minNumber
  );

  const handleIncrement = () => {
    increment();
    onChange && onChange(count);
  };

  const handleDecrement = () => {
    decrement();
    onChange && onChange(count);
  };

  return (
    <span>
      <button
        type="button"
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{count}</span>
      <button
        type="button"
        onClick={handleIncrement}
      >
        +
      </button>
    </span>
  );
};

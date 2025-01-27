export const CounterButton = ({ value, onIncrement, onDecrement }) => {
  return (
    <span>
      <button
        type="button"
        onClick={() => onDecrement()}
      >
        -
      </button>
      <span>{value}</span>
      <button
        type="button"
        onClick={() => onIncrement()}
      >
        +
      </button>
    </span>
  );
};

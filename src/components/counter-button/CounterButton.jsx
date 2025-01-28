export const CounterButton = ({ id, value, increment, decrement }) => {
  return (
    <span
      id={id}
      role="group"
    >
      <button
        type="button"
        onClick={decrement}
      >
        -
      </button>
      <span>{value}</span>
      <button
        type="button"
        onClick={increment}
      >
        +
      </button>
    </span>
  );
};

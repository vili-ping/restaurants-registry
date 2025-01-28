import { CounterButton } from '../counter-button/CounterButton';
import { useCount } from '../../hooks/useCount';

const INITIAL_DISH_COUNT = 0;
const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 5;

export const Dish = ({ foodName }) => {
  const { count, decrement, increment } = useCount(
    INITIAL_DISH_COUNT,
    MAX_DISH_COUNT,
    MIN_DISH_COUNT
  );

  return (
    <>
      <span>{foodName}</span>
      <CounterButton
        value={count}
        decrement={decrement}
        increment={increment}
      />
    </>
  );
};

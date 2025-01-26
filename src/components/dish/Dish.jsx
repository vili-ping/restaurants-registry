import { CounterButton } from '../counter-button/CounterButton';

const INITIAL_DISH_COUNT = 0;
const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 5;

export const Dish = ({ foodName }) => {
  return (
    <>
      <span>{foodName}</span>
      <CounterButton
        initialNumber={INITIAL_DISH_COUNT}
        minNumber={MIN_DISH_COUNT}
        maxNumber={MAX_DISH_COUNT}
      />
    </>
  );
};

import { CounterButton } from '../counter-button/CounterButton';

export const Dish = ({ foodName }) => {
  return (
    <>
      <span>{foodName}</span>
      <CounterButton />
    </>
  );
};

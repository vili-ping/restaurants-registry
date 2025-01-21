import { useState } from 'react';

export const useCount = (initalNumber) => {
  const [count, setCount] = useState(initalNumber);

  const onIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return {
    count,
    onIncrement,
    onDecrement,
  };
};

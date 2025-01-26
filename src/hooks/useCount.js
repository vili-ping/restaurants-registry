import { useState } from 'react';

export const useCount = (initalNumber, maxNumber, minNumber) => {
  const [count, setCount] = useState(initalNumber);

  const increment = () => {
    if (count < maxNumber) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > minNumber) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
};

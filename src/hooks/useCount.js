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

  const handleSetCount = (count) => {
    if (count > maxNumber) {
      setCount(maxNumber);
      return;
    }

    if (count < minNumber) {
      setCount(minNumber);
      return;
    }

    setCount(count);
  };

  return {
    count,
    increment,
    decrement,
    setCount: handleSetCount,
  };
};

import { useState } from 'react';

export const useCount = (initalNumber, maxNumber, minNumber) => {
  const [count, setCount] = useState(initalNumber);

  const increment = () => setCount(Math.min(count + 1, maxNumber));
  const decrement = () => setCount(Math.max(count - 1, minNumber));

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

import { useState } from 'react';

export const useCount = (initalNumber, maxNumber, minNumber) => {
  const [count, setCount] = useState(initalNumber);

  const increment = () => setCount((prev) => Math.min(prev + 1, maxNumber));

  const decrement = () => setCount((prev) => Math.max(prev - 1, minNumber));

  const handleSetCount = (count) => {
    if (count > maxNumber) {
      setCount((prev) => Math.min(prev + 1, maxNumber));
      return;
    }

    if (count < minNumber) {
      setCount((prev) => Math.max(prev - 1, minNumber));
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

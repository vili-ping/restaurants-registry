import { useState } from 'react';

export const useCount = (initalNumber, maxNumber, minNumber) => {
  const [count, setCount] = useState(initalNumber);

  const increment = () => {
    setCount((prev) => Math.min(prev + 1, maxNumber));
    return Math.min(count + 1, maxNumber);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, minNumber));
    return Math.max(count - 1, minNumber);
  };

  const handleSetCount = (count) => {
    if (count > maxNumber) {
      setCount((prev) => Math.min(prev + 1, maxNumber));
      return Math.min(count + 1, maxNumber);
    }

    if (count < minNumber) {
      setCount((prev) => Math.max(prev - 1, minNumber));
      return Math.max(count - 1, minNumber);
    }

    setCount(count);
    return count;
  };

  return {
    count,
    increment,
    decrement,
    setCount: handleSetCount,
  };
};

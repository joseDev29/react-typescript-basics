import { useState } from "react";

export const useCounter = (initial?: number) => {
  const [count, setCount] = useState<number>(initial || 0);

  const changeCount = (value: number): void => {
    setCount(count + value);
  };

  return {
    count,
    changeCount,
  };
};

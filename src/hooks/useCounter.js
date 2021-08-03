import { useState } from "react";

export default function useCounter(initialValue, stock) {
  const value = stock < 1 ? 0 : Math.abs(parseInt(initialValue)) || 1;
  const [count, setCount] = useState(value);

  const increment = () => {
    if (count < parseInt(stock)) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
}

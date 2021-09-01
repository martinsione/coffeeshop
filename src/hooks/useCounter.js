import { useState } from "react";

export default function useCounter(initialValue, stock) {
  initialValue = Number(initialValue);
  stock = Number(stock);

  const value = stock < 1 ? 0 : initialValue;
  const [count, setCount] = useState(value);

  const increment = () => count < stock && setCount(count + 1);

  const decrement = () => count > 1 && setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
}

import { useState } from "react";

export default function useCounter(initialValue, stock) {
  if (typeof initialValue !== "number" || typeof stock !== "number") {
    throw new Error(
      "Both initialValue and stock properties should be type number"
    );
  }

  const value = stock < 1 ? 0 : initialValue;
  const [count, setCount] = useState(value);

  const increment = () => count < stock && setCount(count + 1);

  const decrement = () => count > 0 && setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
}

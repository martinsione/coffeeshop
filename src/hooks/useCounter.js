import { useState } from "react";

export default function useCounter(stock, initial, onAdd) {
  const [count, setCount] = useState(initial || 1);

  const increment = () => {
    if (count < stock) {
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

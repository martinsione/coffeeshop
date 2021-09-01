import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCounter from "../hooks/useCounter";

export default function ItemCount({ initialValue = 1, stock, onAdd }) {
  const { count, increment, decrement } = useCounter(initialValue, stock);
  const [added, setAdded] = useState(false);

  const toggleAdded = () => setAdded(added === true ? false : true);

  return (
    <div className="flex flex-col min-w-0">
      {added ? (
        <Link
          className="flex justify-center rounded text-gray-900 bg-yellow-300 w-full p-2"
          onClick={() => onAdd(count)}
          to="/cart"
        >
          Go to cart
        </Link>
      ) : (
        <div className="flex border rounded text-xl py-2 px-4">
          <button onClick={decrement} type="button">
            <AiOutlineMinus />
          </button>
          <input
            className="w-full text-center text-base font-semibold dark:bg-black focus:outline-none"
            type="number"
            readOnly
            value={count}
          />
          <button onClick={increment} type="button">
            <AiOutlinePlus />
          </button>
        </div>
      )}
      <button
        disabled={stock < 1 || count < 1}
        className={`border rounded disabled:opacity-50 p-2 mt-1  
        ${added ? " opacity-80" : "btn-primary"}`}
        onClick={toggleAdded}
      >
        {added === true ? "Cancel" : stock < 1 ? "Sold out" : "Add to cart"}
      </button>
    </div>
  );
}

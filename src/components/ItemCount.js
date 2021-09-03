import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCounter from "../hooks/useCounter";

export default function ItemCount({ initialValue = 1, stock, onAdd }) {
  const { count, increment, decrement } = useCounter(initialValue, stock);

  return (
    <div className="flex flex-col min-w-0">
      <div className="flex items-center border rounded text-xl py-2 px-4">
        <button onClick={decrement} type="button">
          <AiOutlineMinus onClick={decrement} />
        </button>
        <input
          className="w-full text-center text-base font-semibold dark:bg-black focus:outline-none"
          readOnly
          type="number"
          value={count}
        />
        <button onClick={increment} type="button">
          <AiOutlinePlus />
        </button>
      </div>
      <div className="flex justify-center items-center w-full text-sm font-medium mt-2">
        <button
          disabled={stock < 1 || count < 1}
          className="btn-primary w-full p-1.5 mr-1"
          onClick={() => onAdd(count)}
        >
          Add to cart
        </button>
        <Link
          className="btn-yellow w-full text-center p-1.5 ml-1"
          onClick={() => onAdd(count)}
          to="/cart"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
}

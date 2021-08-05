import useCounter from "../hooks/useCounter";
import SVG from "./SVG";

export default function ItemCount({
  initialValue = 1,
  stock,
  title,
  onAdd = () => {},
}) {
  const { count, increment, decrement } = useCounter(initialValue, stock);

  const handleAdd = () => count > 0 && onAdd(count);

  return (
    <div className="flex flex-col max-w-xs">
      <div className="my-1 p-2 rounded border bg-gray-100 dark:bg-gray-800">
        <p className="text-center text-gray-700 dark:text-gray-300">{title}</p>
        <div className="my-2 p-2 flex rounded border bg-white dark:bg-gray-900">
          <button onClick={decrement} type="button">
            <SVG className="w-6 h-6" path="M18 12H6" />
          </button>
          <input
            className="w-full text-center font-semibold dark:bg-gray-900 focus:outline-none"
            readOnly
            value={count}
          />
          <button onClick={increment} type="button">
            <SVG className="w-6 h-6" path="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </button>
        </div>
      </div>
      <button
        disabled={stock < 1 || count < 1}
        className="p-2 rounded border text-gray-100 bg-blue-500 dark:bg-indigo-900 disabled:opacity-50 disabled:text-white dark:disabled:text-white"
        onClick={handleAdd}
      >
        {stock < 1 ? "Sold out" : "Add to cart"}
      </button>
    </div>
  );
}

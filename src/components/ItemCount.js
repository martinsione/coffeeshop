import useCounter from "../hooks/useCounter";
import SVG from "./SVG";

export default function ItemCount({ initialValue, stock, title, onAdd }) {
  const { count, increment, decrement } = useCounter(initialValue, stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${count} items added`);
  };

  return (
    <form className="my-1 flex flex-col max-w-xs" onSubmit={handleSubmit}>
      <div className="my-1 px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800">
        <p className="text-center text-gray-700 dark:text-gray-300">{title}</p>
        <div className="my-2 p-2 flex rounded border bg-white dark:bg-gray-900">
          <SVG className="w-6 h-6" onClick={decrement} path="M18 12H6" />
          <input
            className="w-full text-center font-semibold dark:bg-gray-900 focus:outline-none"
            readOnly
            value={count}
          />
          <SVG
            className="w-6 h-6"
            onClick={increment}
            path="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </div>
      </div>
      <button
        disabled={stock < 1}
        className="p-2 rounded border text-gray-100  bg-blue-500 dark:bg-indigo-600 disabled:opacity-50 disabled:text-white dark:disabled:text-white"
      >
        {stock < 1 ? "Sold out" : "Add to cart"}
      </button>
    </form>
  );
}

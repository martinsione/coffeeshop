import useCounter from "../hooks/useCounter";
import SVG from "./SVG";

export default function ItemCount({ stock, initial, onAdd, title }) {
  const { count, increment, decrement } = useCounter(stock, initial);

  return (
    <form
      className="flex flex-col w-min "
      onSubmit={() => console.log(`${count} items added`)}
    >
      <div className="p-2 rounded border bg-gray-100 dark:bg-gray-800">
        <p className="text-center">{title}</p>
        <div className="my-2 p-2 flex rounded border bg-white dark:bg-gray-900">
          <SVG className="w-6 h-6" onClick={decrement} path="M18 12H6" />
          <input
            className="w-24 text-center text-md focus:outline-none dark:bg-gray-900"
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
      <button className="my-1 p-1 rounded border bg-white dark:bg-gray-900">
        Add to cart
      </button>
    </form>
  );
}

export default function Item({ title, description, price, pictureUrl, onAdd }) {
  return (
    <div className="flex flex-col items-center rounded overflow-hidden border hover:shadow-md dark:hover:border-gray-500 transition duration-200 pb-4">
      <img className="mb-2 " src={pictureUrl} alt={description} />
      <p className="font-medium text-2xl text-gray-800 dark:text-gray-300 mb-4">
        {title}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {description.slice(0, 38) + "..."}
      </p>
      <p className="font-bold text-xl mb-2">${price.toFixed(2)}</p>
      <button
        className="rounded font-medium border text-white dark:text-black border-black dark:border-white bg-black dark:bg-white hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black p-2"
        onClick={onAdd}
      >
        Add to cart
      </button>
    </div>
  );
}

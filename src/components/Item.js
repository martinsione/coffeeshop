export default function Item({ id, title, description, price, pictureUrl }) {
  const handleClick = () => {};

  return (
    <div key={id} className="px-2 py-5 w-full max-w-sm md:w-1/2 lg:w-1/3">
      <div className="flex flex-col rounded overflow-hidden border hover:shadow-lg dark:hover:border-gray-600">
        <img src={pictureUrl} alt={description} />
        <p className="mt-2 font-bold text-2xl text-center text-gray-800 dark:text-gray-300">
          {title}
        </p>
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          {description.slice(0, 38) + "..."}
        </p>
        <p className="mt-2 font-bold text-xl text-center text-gray-800 dark:text-gray-300">
          ${price.toFixed(2)}
        </p>
        <button
          className="my-4 mx-auto p-2 rounded border border-black font-semibold text-white bg-black dark:border-white dark:text-black dark:bg-white filter hover:border-white dark:hover:border-black hover:invert transition duration-200"
          onClick={handleClick}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

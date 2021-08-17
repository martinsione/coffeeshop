export default function Item({ title, description, price, pictureUrl, onAdd }) {
  return (
    <div className="flex flex-col rounded overflow-hidden border hover:shadow-md dark:hover:border-gray-500 transition duration-200">
      <figure className="flex overflow-hidden">
        <img
          className="transform scale-125"
          src={pictureUrl}
          alt={description}
        />
      </figure>
      <div className="flex flex-col p-4">
        <p className="font-medium text-2xl text-black dark:text-white mb-2">
          ${price.toFixed(2)}
        </p>
        <p className="tracking-tight text-md text-gray-800 dark:text-gray-300 mb-4">
          {title}
        </p>
        <button
          className="text-sm self-start font-semibold rounded  border text-white dark:text-black border-black dark:border-white bg-black dark:bg-white hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black p-2"
          onClick={onAdd}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function Item({ title, description, price, pictureUrl, onAdd }) {
  return (
    <div className="flex flex-col rounded overflow-hidden border hover:shadow-md dark:hover:border-gray-100 transition duration-200">
      <figure className="overflow-hidden">
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
        <p className="tracking-tight text-base text-gray-800 dark:text-gray-300 mb-4">
          {title}
        </p>
        <button
          className="btn-primary self-start text-sm font-semibold p-2"
          onClick={onAdd}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

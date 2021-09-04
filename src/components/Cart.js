import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { items, remove, totalValue, totalItems, updateItemQuantity } =
    useCartContext();

  const handleRemove = (id) => remove(id);

  const quantitySelector = (arr) => {
    const { quantity, item } = arr;
    const stockArray = Array.from({ length: item.stock }, (_, i) => i + 1);
    return (
      <select
        className="border rounded font-medium bg-gray-100 dark:bg-gray-900 focus:outline-none p-0.5"
        value={quantity}
        onChange={(e) => updateItemQuantity(item.id, Number(e.target.value))}
      >
        <option value="0">0 (Delete)</option>
        {stockArray.map((itemQty) => (
          <option key={itemQty} value={item.quantity}>
            {itemQty}
          </option>
        ))}
      </select>
    );
  };
  return (
    <>
      {items.length > 0 ? (
        <div className="lg:flex flex-row-reverse">
          <div className="w-full lg:w-1/3">
            <div className="w-full flex flex-col items-center rounded bg-gray-100 dark:bg-gray-900 p-4 mb-4">
              <span className="flex items-center text-xl mb-2">
                Subtotal
                <p className="font-medium text-black dark:text-white ml-2">
                  ${totalValue()}
                </p>
              </span>
              <Link
                className="btn-yellow w-full text-center p-2"
                to="/checkout"
              >
                <span className="text-gray-900">Proceed to checkout</span>
                <span className="text-gray-900 ml-2">
                  ({totalItems()} items)
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/3 lg:pr-16">
            {items.map((arr) => (
              <div
                className="border-b flex justify-between pb-4 mb-4 md:mb-4"
                key={arr.item.title}
              >
                <div className="flex">
                  <figure className="w-1/2 md:w-1/3 rounded overflow-hidden">
                    <img
                      className="object-cover transform scale-125"
                      src={arr.item.pictureUrl}
                      alt={arr.item.description}
                    />
                  </figure>
                  <div>
                    <div className="flex flex-col px-3">
                      <h4 className="font-medium text-lg md:text-xl sm:mb-2 md:mb-4">
                        {arr.item.title}
                      </h4>
                      <span className="font-medium text-xl md:text-2xl sm:mb-2 md:mb-8">
                        ${arr.item.price}
                      </span>
                      <div className="flex items-center md:text-lg text-black dark:text-white">
                        Quantity:
                        <span className="ml-2">{quantitySelector(arr)}</span>
                        <button
                          className="text-sm md:text-base opacity-60 hover:opacity-100 hover:underline ml-2"
                          onClick={() => handleRemove(arr.item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-36 mx-auto">
          <h4 className="font-medium text-center text-2xl md:text-4xl mb-4 md:mb-8">
            Your shopping basket is empty
          </h4>
          <Link
            className="rounded font-bold md:text-lg bg-gray-100 dark:bg-gray-900 py-4 px-10 md:px-20"
            to="/"
          >
            Return Home
          </Link>
        </div>
      )}
    </>
  );
}

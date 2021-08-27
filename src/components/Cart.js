import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const cart = useCartContext();
  const handleRemove = (id) => cart.remove(id);

  return (
    <div className="mt-10 mx-auto">
      {cart.items.length > 0 ? (
        <div className="px-4">
          <div className="flex justify-between tracking-tight text-xl md:text-3xl mb-4">
            <div className="flex items-center">
              <h4 className="font-medium mr-1">Your cart</h4>
              <span>({cart.totalItems()} items)</span>
            </div>
            <span className="font-semibold ml-2">${cart.totalValue()}</span>
          </div>
          {cart.items.map((arr) => (
            <div
              className="flex justify-between border-b py-2"
              key={arr.item.title}
            >
              <div className="flex">
                <figure className="w-1/3 rounded overflow-hidden mr-4">
                  <img
                    className="object-cover transform scale-125"
                    src={arr.item.pictureUrl}
                    alt={arr.item.description}
                  />
                </figure>
                <div>
                  <h4 className="font-semibold text-lg md:text-xl mb-2 md:mb-4">
                    {arr.item.title}
                  </h4>
                  <p className="font-medium text-xl md:text-2xl text-black dark:text-white mb-2 md:mb-8">
                    ${arr.item.price}
                  </p>
                  <p className="md:text-lg text-black dark:text-white">
                    Quantity:
                    {arr.quantity}
                  </p>
                </div>
              </div>

              <button
                className="btn-primary font-medium self-center py-2 px-4"
                onClick={() => handleRemove(arr.item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-36 mx-auto">
          <h4 className="font-medium text-2xl md:text-4xl mb-4 md:mb-8">
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
    </div>
  );
}

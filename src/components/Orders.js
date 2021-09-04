import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { getItemById } from "../lib/firebase";
import Loader from "./Loader";

export default function Orders() {
  const [id, setId] = useState("");
  const [order, setOrder] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder("loading");
    getItemById("orders", id)
      .then((data) => setOrder(data))
      .catch(() => setOrder("Error"));
  };

  return (
    <div className="max-w-xs mx-auto mt-4">
      <form
        className="flex justify-between items-center border rounded bg-white dark:bg-gray-900"
        onSubmit={handleSubmit}
      >
        <input
          autoComplete="off"
          className="w-full rounded-l bg-white dark:bg-gray-900 focus:outline-none py-2 px-4"
          type="text"
          name="orderId"
          placeholder="Insert your order ID here:"
          onChange={(e) => setId(e.target.value)}
        />
        <button
          aria-label="Search"
          className="rounded-r right-0 font-bold text-xl text-white bg-blue-500 p-3"
          type="submit"
        >
          <IoSearch />
        </button>
      </form>
      {order === "loading" && <Loader />}
      {order?.id && (
        <div className="flex flex-col items-center text-xl mt-8">
          <div className="font-medium">
            Email: <span className="font-normal">{order.buyer.email}</span>
          </div>
          <div className="font-medium">
            Phone:
            <span className="font-normal ml-2">
              +{order.buyer.phone.replace(/.(?=.{4})/g, "x")}
            </span>
          </div>

          <div className="mt-8 mb-2">
            <h4 className="text-xl font-medium">Items</h4>
          </div>
          <ul className="flex flex-col items-center text-lg">
            {order.items.map((item) => (
              <li className="flex font-normal mb-1" key={item.title}>
                <p className="text-black dark:text-white mr-4">{item.title}</p>
                <span className="font-medium mr-1">${item.price}</span>
                <span className="font">
                  ({item.quantity} {item.quantity > 1 ? "Items" : "Item"})
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const [toggle, setToggle] = useState("description");

  const cart = useCartContext();
  const handleAdd = (quantity) => cart.add(item, quantity);

  const Btn = ({ name }) => (
    <button
      className={`text-xl md:text-2xl hover:opacity-100 mr-2 md:mr-4 mb-2 md:mb-4 
      ${toggle === name.toLowerCase() ? "font-bold" : "opacity-50"}`}
      onClick={() => setToggle(name.toLowerCase())}
    >
      {name}
    </button>
  );

  // title, description, price, pictureUrl
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-10 lg:mb-20">
        <div className="sm:mr-4 md:mr-12 mb-6 sm:mb-0">
          <img
            className="rounded"
            src={item.pictureUrl}
            alt={item.description}
          />
        </div>
        <div className="sm:w-1/2 flex flex-col md:py-6 lg:py-10">
          <h4 className="font-bold text-2xl lg:text-3xl mb-2 sm:mb-4">
            {item.title}
          </h4>
          <span className="font-medium text-3xl lg:text-4xl mb-4">
            ${item.price.toFixed(2)}
          </span>
          <span className="sm:my-auto">
            <ItemCount stock={item.stock} onAdd={handleAdd} />
          </span>
        </div>
      </div>
      <footer>
        <div className="text-xl md:text-2xl">
          <Btn name="Description" />
          <Btn name="Review" />
        </div>

        <p className="max-w-prose">
          {toggle === "description"
            ? item.description
            : item.review || "Oops, there are no reviews of this product yet."}
        </p>
      </footer>
    </div>
  );
}

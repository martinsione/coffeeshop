import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { addDocument, updateDocument } from "../lib/firebase";

export default function Checkout() {
  const { clear, items, totalValue } = useCartContext();
  const [purchaseId, setPurchaseId] = useState(false);

  const useField = (props) => {
    const [value, setValue] = useState("");
    const onChange = (e) => setValue(e.target.value);
    return { ...props, value, onChange };
  };

  const inputProps = {
    autoComplete: "off",
    className:
      "rounded border text-xl focus:ring-2 ring-blue-500 dark:ring-pink-500 dark:bg-gray-900 focus:outline-none py-2 px-4 md:py-4 md:px-6 mb-2 md:mb-4",
    required: true,
  };

  const name = useField({ type: "text", name: "name", ...inputProps });
  const email = useField({ type: "email", name: "email", ...inputProps });
  const phone = useField({ type: "number", name: "phone", ...inputProps });

  const handleSubmit = (e) => {
    e.preventDefault();

    const mapItemsAndUpdateStock = items.map((arr) => {
      const stock = arr.item.stock - arr.quantity;
      updateDocument("products", arr.item.id, { stock }).catch((e) =>
        console.error(e)
      );

      return {
        id: arr.item.id,
        title: arr.item.title,
        price: arr.item.price,
        quantity: arr.quantity,
      };
    });

    const data = {
      buyer: { name: name.value, phone: phone.value, email: email.value },
      items: mapItemsAndUpdateStock,
      date: new Date(),
      total: totalValue(),
    };

    addDocument("orders", data)
      .then((res) => setPurchaseId(res.id))
      .catch((e) => console.error(e));

    clear();
  };

  return (
    <>
      {purchaseId ? (
        <form
          className="flex flex-col w-full max-w-lg rounded shadow-md bg-gray-100 dark:bg-gray-800 p-16 mt-12 mx-auto"
          onSubmit={handleSubmit}
        >
          <h4 className="font-bold text-4xl md:text-5xl textcenter text-gray-800 dark:text-gray-200 mb-8">
            Checkout
          </h4>

          <input placeholder="Name" {...name} />
          <input placeholder="Email" {...email} />
          <input placeholder="Phone" {...phone} />

          <button className="btn-primary font-medium text-lg md:text-xl p-2 md:p-4 mt-4">
            Purchase
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center mt-36">
          <h3 className="text-2xl md:text-4xl mb-4 md:mb-8">
            Thanks for your purchase
          </h3>
          <h3 className="text-xl md:text-2xl mb-8 md:mb-16">
            Purchase id: Bf3tqEFqno7ui8ZTiPbB{purchaseId}
          </h3>
          <Link
            className="rounded font-bold md:text-lg bg-gray-100 dark:bg-gray-900 py-4 px-20"
            to="/"
          >
            Return home
          </Link>
        </div>
      )}
    </>
  );
}

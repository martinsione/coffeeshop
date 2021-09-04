import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { addDocument, updateDocument } from "../lib/firebase";

export default function Checkout() {
  const { clear, items, totalValue } = useCartContext();
  const [purchaseId, setPurchaseId] = useState();
  const [emailValidated, setEmailValidated] = useState(false);

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
  const email1 = useField({ type: "email", name: "email1", ...inputProps });
  const email2 = useField({ type: "email", name: "email2", ...inputProps });
  const phone = useField({ type: "number", name: "phone", ...inputProps });

  useEffect(() => {
    email1.value === email2.value
      ? setEmailValidated(true)
      : setEmailValidated(false);
  }, [email1, email2]);

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
      buyer: { name: name.value, phone: phone.value, email: email1.value },
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
      {!purchaseId ? (
        <form
          className="flex flex-col w-full max-w-lg rounded shadow-md bg-gray-100 dark:bg-gray-800 p-16 mt-12 mx-auto"
          onSubmit={handleSubmit}
        >
          <h4 className="font-bold text-4xl md:text-5xl textcenter text-gray-800 dark:text-gray-200 mb-8">
            Checkout
          </h4>

          <input placeholder="Name" {...name} />
          <input placeholder="Email" {...email1} />
          <input placeholder="Re-enter your email" {...email2} />
          <input placeholder="Phone" {...phone} />

          <button
            className="btn-primary font-medium text-lg md:text-xl p-2 md:p-4 mt-4"
            disabled={
              !emailValidated ||
              email1.value.length === 0 ||
              phone.value.length === 0 ||
              name.value.length === 0
            }
          >
            Purchase
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center mt-36">
          <h3 className="text-2xl md:text-4xl mb-8 md:mb-12">
            Thanks for your purchase
          </h3>
          <div className="text-center mb-8 md:mb-16">
            <h3 className="text-xl md:text-2xl mb-2 md:mb-4">
              Purchase id: {purchaseId}
              <button
                className="border rounded font-medium text-base md:text-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 py-1 px-4 ml-2 mt-2 mb-6 sm:my-0"
                onClick={() => navigator.clipboard.writeText(purchaseId)}
              >
                Copy
              </button>
            </h3>
            <p className="text-sm md:text-base">
              Tip: You can copy your purchease ID and see your order in
              <Link
                className="font-medium text-black dark:text-white hover:underline ml-1"
                to="/orders"
              >
                orders page
              </Link>
            </p>
          </div>
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

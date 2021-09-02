import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CartWidget({ totalItems }) {
  return (
    <Link to="/cart" className="flex items-center justify-center text-3xl">
      <FaShoppingCart />
      <span className="h-6 w-8 self-start rounded-full font-bold text-base text-center text-black bg-yellow-300 -ml-2 -mt-1">
        {totalItems}
      </span>
    </Link>
  );
}

import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function CartWidget({ totalItems }) {
  return (
    <Link to="/cart" className="flex items-center text-xl">
      <HiShoppingCart />
      <span className="font-semibold ml-1">{totalItems}</span>
    </Link>
  );
}

import { Link } from "react-router-dom";
import CartWidget from "../components/CartWidget";
import { useCartContext } from "../context/CartContext";
import useTheme from "../hooks/useTheme";
import Search from "./Search";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { totalItems } = useCartContext();

  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center bg-white dark:bg-black py-2 md:mt-8 z-50">
        <span>
          <Link className="flex justify-center items-center w-10" to="/">
            <img
              className="w-full"
              src="/images/starbucks-logo.png"
              alt="Coffeestore logo"
            />
          </Link>
        </span>
        <Search />
        <div className="flex">
          <select
            className="border rounded bg-gray-100 dark:bg-gray-900 focus:outline-none p-2 mr-4"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <CartWidget totalItems={totalItems()} />
        </div>
      </nav>
    </>
  );
}

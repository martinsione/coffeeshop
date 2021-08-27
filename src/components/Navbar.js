import { Link, useLocation } from "react-router-dom";
import CartWidget from "../components/CartWidget";
import { useCartContext } from "../context/CartContext";
import useTheme from "../hooks/useTheme";
import Search from "./Search";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathName = useLocation().pathname;
  const cart = useCartContext();

  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center bg-white dark:bg-black py-2 md:mt-8 z-50">
        <div className="flex justify-center items-center">
          <Link className="flex" to="/">
            <img
              className="w-10"
              src="/images/starbucks-logo.png"
              alt="logo de coffeeshop"
            />
          </Link>
        </div>
        <Search />
        {cart.totalItems() > 0 && <CartWidget totalItems={cart.totalItems()} />}
      </nav>
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center">
          {NAV_ITEMS.map((navItem) => (
            <Link
              to={navItem.href}
              key={navItem.name}
              className={`text-lg mr-1 p-1 ${
                pathName === navItem.href
                  ? "font-medium"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <div>
          <label className="font-medium">Theme</label>
          <select
            className="rounded border focus:outline-none bg-gray-100 dark:bg-gray-900 p-1 ml-2"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </>
  );
}

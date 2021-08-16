import { Link } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";
import CartWidget from "../components/CartWidget";
import useTheme from "../hooks/useTheme";

const NAV_ITEMS = [
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="sticky top-0 flex justify-between bg-white dark:bg-black p-4 md:my-5">
      <div className="flex justify-center items-center">
        <Link to="/">
          <img
            className="w-10 mr-8"
            src="/images/starbucks-logo.png"
            alt="logo de coffeeshop"
          />
        </Link>
        <div className="text-lg">
          {NAV_ITEMS.map((item, key) => (
            <Link to={item.href} key={key} className="mr-4 p-1">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CartWidget />
        <button
          className="rounded text bg-gray-200 dark:bg-gray-800 p-3 ml-4"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </nav>
  );
}

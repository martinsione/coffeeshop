import CartWidget from "../components/CartWidget";
import useColorTheme from "../hooks/useColorTheme";
import { IoSunny, IoMoon } from "react-icons/io5";

const NAV_ITEMS = [
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const { theme, switchTheme } = useColorTheme();
  return (
    <nav className="sticky top-0 flex justify-between p-4 md:my-5 bg-white dark:bg-black">
      <div className="flex justify-center items-center">
        <a href="/">
          <img
            className="w-10 mr-8"
            src="/images/starbucks-logo.png"
            alt="logo de coffeeshop"
          />
        </a>
        <div className="text-lg">
          {NAV_ITEMS.map((item, key) => (
            <a href={item.href} key={key} className="mr-4 p-1">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CartWidget />
        <button
          className="rounded text bg-gray-200 dark:bg-gray-800 p-3 ml-4"
          onClick={switchTheme}
        >
          {theme === "dark" ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </nav>
  );
}

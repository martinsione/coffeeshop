import { NAV_ITEMS } from "../constants/links";
import CartWidget from "./CartWidget";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between lg:justify-around border-b bg-white dark:bg-black  dark:border-gray-800 p-3">
      <div className="flex">
        <span className="mr-4">
          <ThemeSwitcher />
        </span>
        <a href="/">
          <img
            className="w-10"
            src="/images/starbucks-logo.png"
            alt="logo de coffeeshop"
          />
        </a>
      </div>
      <div className="text-lg flex items-center">
        {NAV_ITEMS.map((item, key) => (
          <a href={item.href} key={key} className="mr-4 p-1">
            <p>{item.name}</p>
          </a>
        ))}
        <CartWidget />
      </div>
    </nav>
  );
}

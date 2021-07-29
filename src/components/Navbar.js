import { NAV_ITEMS } from "../constants/links";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between lg:justify-around border-b dark:border-gray-600 dark:bg-gray-900 p-3">
      <a href="/">
        <img
          className="flex w-10"
          src="/images/starbucks-logo.png"
          alt="logo de coffeeshop"
        />
      </a>
      <div className="text-lg flex items-center">
        <ul className="flex">
          {NAV_ITEMS.map((item) => (
            <a href={item.href}>
              <li className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 mr-4 p-1">
                {item.name}
              </li>
            </a>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

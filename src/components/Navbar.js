import { NAV_ITEMS } from "../constants/links";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between lg:justify-around border-b dark:border-gray-800 p-3">
      <a href="/">
        <img
          className="flex w-10"
          src="/images/starbucks-logo.png"
          alt="logo de coffeeshop"
        />
      </a>
      <div className="text-lg flex items-center">
        <ul className="flex">
          {NAV_ITEMS.map((item, key) => (
            <a href={item.href} key={key}>
              <li className=" hover:text-gray-700 dark:hover:text-gray-300 mr-4 p-1">
                {item.name}
              </li>
            </a>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

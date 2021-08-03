import { useEffect, useState } from "react";
import SVG from "./SVG";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return (
    <div
      className="bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded h-10 w-10"
      onClick={() => setTheme(colorTheme)}
    >
      <SVG
        className=" w-4 h-4 text-gray-800 dark:text-gray-200"
        path={
          theme === "dark"
            ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646"
        }
      />
    </div>
  );
}

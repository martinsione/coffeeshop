import { useEffect, useState } from "react";

export default function useColorTheme() {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const switchTheme = () => setTheme(colorTheme);

  return { theme, switchTheme };
}
